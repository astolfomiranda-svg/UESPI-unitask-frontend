import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import {
  Plus,
  Search,
  Filter,
  Pencil,
  Trash2,
  CheckCircle2,
  Circle,
  Clock,
  X,
} from "lucide-react";
import { toast } from "sonner";

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

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    dueDate: "",
    status: "pending" as Task["status"],
    priority: "medium" as Task["priority"],
  });

  const currentUser = JSON.parse(localStorage.getItem("unitask_current_user") || "null");

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [tasks, searchTerm, filterStatus, filterPriority]);

  const loadTasks = () => {
    if (currentUser) {
      const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
      const userTasks = allTasks.filter((task: Task) => task.userId === currentUser.id);
      setTasks(userTasks);
    }
  };

  const applyFilters = () => {
    let filtered = [...tasks];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (filterStatus !== "all") {
      filtered = filtered.filter((task) => task.status === filterStatus);
    }

    // Priority filter
    if (filterPriority !== "all") {
      filtered = filtered.filter((task) => task.priority === filterPriority);
    }

    // Sort by due date
    filtered.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

    setFilteredTasks(filtered);
  };

  const handleOpenModal = (task?: Task) => {
    if (task) {
      setEditingTask(task);
      setFormData({
        title: task.title,
        description: task.description,
        subject: task.subject,
        dueDate: task.dueDate,
        status: task.status,
        priority: task.priority,
      });
    } else {
      setEditingTask(null);
      setFormData({
        title: "",
        description: "",
        subject: "",
        dueDate: "",
        status: "pending",
        priority: "medium",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
    setFormData({
      title: "",
      description: "",
      subject: "",
      dueDate: "",
      status: "pending",
      priority: "medium",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.subject || !formData.dueDate) {
      toast.error("Preencha todos os campos obrigatórios!");
      return;
    }

    const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");

    if (editingTask) {
      // Update existing task
      const updatedTasks = allTasks.map((task: Task) =>
        task.id === editingTask.id ? { ...task, ...formData } : task
      );
      localStorage.setItem("unitask_tasks", JSON.stringify(updatedTasks));
      toast.success("Tarefa atualizada com sucesso!");
    } else {
      // Create new task
      const newTask: Task = {
        id: Date.now().toString(),
        ...formData,
        userId: currentUser.id,
      };
      allTasks.push(newTask);
      localStorage.setItem("unitask_tasks", JSON.stringify(allTasks));
      toast.success("Tarefa criada com sucesso!");
    }

    loadTasks();
    handleCloseModal();
  };

  const handleDelete = (taskId: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
      const updatedTasks = allTasks.filter((task: Task) => task.id !== taskId);
      localStorage.setItem("unitask_tasks", JSON.stringify(updatedTasks));
      loadTasks();
      toast.success("Tarefa excluída com sucesso!");
    }
  };

  const handleToggleStatus = (task: Task) => {
    const newStatus =
      task.status === "completed"
        ? "pending"
        : task.status === "pending"
        ? "in_progress"
        : "completed";

    const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
    const updatedTasks = allTasks.map((t: Task) =>
      t.id === task.id ? { ...t, status: newStatus } : t
    );
    localStorage.setItem("unitask_tasks", JSON.stringify(updatedTasks));
    loadTasks();
  };

  return (
    <ProtectedRoute>
      <Layout currentPage="tasks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl mb-2">Minhas Tarefas</h2>
              <p className="text-gray-600">Gerencie todas suas atividades acadêmicas</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Nova Tarefa
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar tarefas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="all">Todos os Status</option>
                  <option value="pending">Pendente</option>
                  <option value="in_progress">Em Progresso</option>
                  <option value="completed">Concluída</option>
                </select>
              </div>

              {/* Priority Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterPriority}
                  onChange={(e) => setFilterPriority(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="all">Todas as Prioridades</option>
                  <option value="high">Alta</option>
                  <option value="medium">Média</option>
                  <option value="low">Baixa</option>
                </select>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {filteredTasks.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <p className="text-gray-500 mb-4">Nenhuma tarefa encontrada</p>
                <button
                  onClick={() => handleOpenModal()}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Criar sua primeira tarefa
                </button>
              </div>
            ) : (
              filteredTasks.map((task) => {
                const dueDate = new Date(task.dueDate);
                const isOverdue = dueDate < new Date() && task.status !== "completed";
                const formattedDate = dueDate.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });

                return (
                  <div
                    key={task.id}
                    className={`bg-white rounded-xl shadow-sm border p-6 transition-all ${
                      task.status === "completed"
                        ? "border-green-200 bg-green-50/50"
                        : isOverdue
                        ? "border-red-200 bg-red-50/50"
                        : "border-gray-200 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Status Button */}
                      <button
                        onClick={() => handleToggleStatus(task)}
                        className="mt-1 flex-shrink-0"
                      >
                        {task.status === "completed" ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : task.status === "in_progress" ? (
                          <Clock className="w-6 h-6 text-amber-600" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-400 hover:text-blue-600" />
                        )}
                      </button>

                      {/* Task Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3
                            className={`text-lg ${
                              task.status === "completed"
                                ? "line-through text-gray-500"
                                : ""
                            }`}
                          >
                            {task.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => handleOpenModal(task)}
                              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(task.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-3">{task.description}</p>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {task.subject}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
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
                            className={`px-3 py-1 rounded-full text-sm ${
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
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              isOverdue
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {isOverdue ? "Atrasada • " : ""}
                            {formattedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h3 className="text-xl">
                  {editingTask ? "Editar Tarefa" : "Nova Tarefa"}
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Título <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Ex: Trabalho de Cálculo II"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">Descrição</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                    placeholder="Descreva a atividade..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Disciplina <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Ex: Cálculo II"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Data de Entrega <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          status: e.target.value as Task["status"],
                        })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="pending">Pendente</option>
                      <option value="in_progress">Em Progresso</option>
                      <option value="completed">Concluída</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-700">Prioridade</label>
                    <select
                      value={formData.priority}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          priority: e.target.value as Task["priority"],
                        })
                      }
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="low">Baixa</option>
                      <option value="medium">Média</option>
                      <option value="high">Alta</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingTask ? "Salvar" : "Criar"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Layout>
    </ProtectedRoute>
  );
}