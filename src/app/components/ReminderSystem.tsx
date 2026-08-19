import { useEffect } from "react";
import { toast } from "sonner";

interface Task {
  id: string;
  title: string;
  dueDate: string;
  status: "pending" | "in_progress" | "completed";
}

export function ReminderSystem() {
  useEffect(() => {
    // Check for reminders when component mounts
    checkReminders();

    // Check every hour
    const interval = setInterval(checkReminders, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const checkReminders = () => {
    const currentUser = JSON.parse(localStorage.getItem("unitask_current_user") || "null");
    if (!currentUser) return;

    const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
    const userTasks: Task[] = allTasks.filter(
      (task: Task) => task.userId === currentUser.id && task.status !== "completed"
    );

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Check for tasks due today
    const tasksToday = userTasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return dueDate.toDateString() === today.toDateString();
    });

    // Check for tasks due tomorrow
    const tasksTomorrow = userTasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return dueDate.toDateString() === tomorrow.toDateString();
    });

    // Check for overdue tasks
    const overdueTasks = userTasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return dueDate < today;
    });

    // Show reminders
    if (overdueTasks.length > 0) {
      toast.error(
        `Você tem ${overdueTasks.length} tarefa${
          overdueTasks.length > 1 ? "s atrasadas" : " atrasada"
        }!`,
        {
          description: overdueTasks
            .slice(0, 3)
            .map((t) => t.title)
            .join(", "),
          duration: 5000,
        }
      );
    }

    if (tasksToday.length > 0) {
      toast.warning(
        `Você tem ${tasksToday.length} tarefa${
          tasksToday.length > 1 ? "s" : ""
        } para hoje!`,
        {
          description: tasksToday
            .slice(0, 3)
            .map((t) => t.title)
            .join(", "),
          duration: 5000,
        }
      );
    }

    if (tasksTomorrow.length > 0) {
      toast.info(
        `Você tem ${tasksTomorrow.length} tarefa${
          tasksTomorrow.length > 1 ? "s" : ""
        } para amanhã`,
        {
          description: tasksTomorrow
            .slice(0, 3)
            .map((t) => t.title)
            .join(", "),
          duration: 4000,
        }
      );
    }
  };

  return null;
}
