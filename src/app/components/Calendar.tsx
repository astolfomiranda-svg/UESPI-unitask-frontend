import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  subject: string;
  dueDate: string;
  status: "pending" | "in_progress" | "completed";
  priority: "low" | "medium" | "high";
  userId: string;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  tasks: Task[];
}

export function Calendar() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

  const currentUser = JSON.parse(localStorage.getItem("unitask_current_user") || "null");

  useEffect(() => {
    if (currentUser) {
      const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
      const userTasks = allTasks.filter((task: Task) => task.userId === currentUser.id);
      setTasks(userTasks);
    }
  }, [currentUser]);

  useEffect(() => {
    generateCalendar();
  }, [currentDate, tasks]);

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const startingDayOfWeek = firstDay.getDay();
    const days: CalendarDay[] = [];

    // Add days from previous month
    const prevMonthLastDay = new Date(year, month, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthDays - i);
      days.push({
        date,
        isCurrentMonth: false,
        tasks: getTasksForDate(date),
      });
    }

    // Add days from current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({
        date,
        isCurrentMonth: true,
        tasks: getTasksForDate(date),
      });
    }

    // Add days from next month to complete the grid
    const remainingDays = 42 - days.length; // 6 weeks × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push({
        date,
        isCurrentMonth: false,
        tasks: getTasksForDate(date),
      });
    }

    setCalendarDays(days);
  };

  const getTasksForDate = (date: Date): Task[] => {
    const dateStr = date.toISOString().split("T")[0];
    return tasks.filter((task) => task.dueDate === dateStr);
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(null);
  };

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSameDay = (date1: Date | null, date2: Date) => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const selectedDayTasks = selectedDate ? getTasksForDate(selectedDate) : [];

  return (
    <ProtectedRoute>
      <Layout currentPage="calendar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl mb-2">Calendário</h2>
            <p className="text-gray-600">Visualize suas tarefas organizadas por data</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToToday}
                    className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Hoje
                  </button>
                  <button
                    onClick={previousMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-sm text-gray-600 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => {
                  const dayTasks = day.tasks;
                  const hasOverdueTasks = dayTasks.some(
                    (task) =>
                      task.status !== "completed" && new Date(task.dueDate) < new Date()
                  );

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(day.date)}
                      className={`aspect-square p-2 rounded-lg text-sm border transition-all ${
                        !day.isCurrentMonth
                          ? "text-gray-400 bg-gray-50"
                          : isToday(day.date)
                          ? "border-blue-500 bg-blue-50 text-blue-600"
                          : isSameDay(selectedDate, day.date)
                          ? "border-blue-300 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-col h-full">
                        <span className="mb-1">{day.date.getDate()}</span>
                        {dayTasks.length > 0 && (
                          <div className="flex-1 flex flex-col items-center justify-center gap-0.5">
                            {dayTasks.slice(0, 3).map((task) => (
                              <div
                                key={task.id}
                                className={`w-full h-1 rounded-full ${
                                  task.status === "completed"
                                    ? "bg-green-400"
                                    : hasOverdueTasks
                                    ? "bg-red-400"
                                    : task.priority === "high"
                                    ? "bg-red-400"
                                    : task.priority === "medium"
                                    ? "bg-amber-400"
                                    : "bg-blue-400"
                                }`}
                              />
                            ))}
                            {dayTasks.length > 3 && (
                              <span className="text-xs text-gray-500 mt-0.5">
                                +{dayTasks.length - 3}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-gray-600">Alta Prioridade / Atrasada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <span className="text-gray-600">Média Prioridade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-600">Baixa Prioridade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-gray-600">Concluída</span>
                </div>
              </div>
            </div>

            {/* Task Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg mb-4">
                {selectedDate
                  ? `Tarefas de ${selectedDate.toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                    })}`
                  : "Selecione uma data"}
              </h3>

              {selectedDate ? (
                selectedDayTasks.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDayTasks.map((task) => {
                      const isOverdue =
                        task.status !== "completed" &&
                        new Date(task.dueDate) < new Date();

                      return (
                        <div
                          key={task.id}
                          className={`p-4 rounded-lg border ${
                            task.status === "completed"
                              ? "border-green-200 bg-green-50"
                              : isOverdue
                              ? "border-red-200 bg-red-50"
                              : "border-gray-200"
                          }`}
                        >
                          <h4 className="mb-1">{task.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{task.subject}</p>
                          <div className="flex flex-wrap gap-2">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                task.priority === "high"
                                  ? "bg-red-100 text-red-700"
                                  : task.priority === "medium"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {task.priority === "high"
                                ? "Alta"
                                : task.priority === "medium"
                                ? "Média"
                                : "Baixa"}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                task.status === "completed"
                                  ? "bg-green-100 text-green-700"
                                  : task.status === "in_progress"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {task.status === "completed"
                                ? "Concluída"
                                : task.status === "in_progress"
                                ? "Em Progresso"
                                : "Pendente"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Nenhuma tarefa nesta data</p>
                  </div>
                )
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Clique em uma data para ver as tarefas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}