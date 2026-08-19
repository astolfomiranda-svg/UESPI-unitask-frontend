import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Link } from "react-router";
import { ReminderSystem } from "./ReminderSystem";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Calendar as CalendarIcon,
  ListTodo,
  TrendingUp,
} from "lucide-react";

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

export function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const currentUser = JSON.parse(localStorage.getItem("unitask_current_user") || "null");

  useEffect(() => {
    if (currentUser) {
      const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
      const userTasks = allTasks.filter((task: Task) => task.userId === currentUser.id);
      setTasks(userTasks);
    }
  }, [currentUser]);

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === "pending").length,
    inProgress: tasks.filter((t) => t.status === "in_progress").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };

  const upcomingTasks = tasks
    .filter((t) => t.status !== "completed")
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  const overdueCount = tasks.filter(
    (t) => t.status !== "completed" && new Date(t.dueDate) < new Date()
  ).length;

  // Calculate completion rate
  const completionRate =
    stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <ProtectedRoute>
      <Layout currentPage="dashboard">
        <ReminderSystem />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl mb-2">Dashboard</h2>
            <p className="text-gray-600">Visão geral das suas atividades acadêmicas</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ListTodo className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">Total de Tarefas</p>
              <p className="text-3xl">{stats.total}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">Pendentes</p>
              <p className="text-3xl">{stats.pending}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">Em Progresso</p>
              <p className="text-3xl">{stats.inProgress}</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">Concluídas</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl">{stats.completed}</p>
                <span className="text-sm text-green-600">({completionRate}%)</span>
              </div>
            </div>
          </div>

          {/* Alert for Overdue Tasks */}
          {overdueCount > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-900">
                  Você tem {overdueCount} tarefa{overdueCount > 1 ? "s" : ""} atrasada
                  {overdueCount > 1 ? "s" : ""}!
                </p>
                <p className="text-red-700 text-sm mt-1">
                  Revise suas tarefas pendentes para manter seu desempenho acadêmico.
                </p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Próximas Tarefas */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg">Próximas Tarefas</h3>
                <Link
                  to="/tasks"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Ver todas
                </Link>
              </div>

              {upcomingTasks.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <ListTodo className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Nenhuma tarefa pendente</p>
                  <Link
                    to="/tasks"
                    className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
                  >
                    Adicionar nova tarefa
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {upcomingTasks.map((task) => {
                    const dueDate = new Date(task.dueDate);
                    const isOverdue = dueDate < new Date();
                    const daysUntil = Math.ceil(
                      (dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                    );

                    return (
                      <div
                        key={task.id}
                        className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="mb-1 truncate">{task.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{task.subject}</p>
                            <div className="flex items-center gap-2 text-xs">
                              <span
                                className={`px-2 py-1 rounded-full ${
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
                                className={`px-2 py-1 rounded-full ${
                                  isOverdue
                                    ? "bg-red-100 text-red-700"
                                    : daysUntil <= 2
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {isOverdue
                                  ? "Atrasada"
                                  : daysUntil === 0
                                  ? "Hoje"
                                  : daysUntil === 1
                                  ? "Amanhã"
                                  : `${daysUntil} dias`}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg mb-6">Ações Rápidas</h3>
              <div className="space-y-3">
                <Link
                  to="/tasks"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Plus className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="mb-1">Nova Tarefa</p>
                    <p className="text-sm text-gray-600">Adicionar uma nova atividade acadêmica</p>
                  </div>
                </Link>

                <Link
                  to="/calendar"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="mb-1">Ver Calendário</p>
                    <p className="text-sm text-gray-600">
                      Visualize suas tarefas em formato de calendário
                    </p>
                  </div>
                </Link>

                <Link
                  to="/tasks"
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ListTodo className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="mb-1">Todas as Tarefas</p>
                    <p className="text-sm text-gray-600">
                      Gerenciar todas suas tarefas acadêmicas
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}