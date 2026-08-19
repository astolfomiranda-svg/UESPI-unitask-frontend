import { toast } from "sonner";

export function initializeDemoData() {
  // Check if demo user already exists
  const users = JSON.parse(localStorage.getItem("unitask_users") || "[]");
  const demoUser = users.find((u: any) => u.email === "demo@unitask.com");

  if (demoUser) {
    return; // Demo data already exists
  }

  // Create demo user
  const newDemoUser = {
    id: "demo-user-001",
    name: "Lucas Almeida",
    email: "demo@unitask.com",
    password: "demo123",
    course: "Sistemas de Informação",
  };

  users.push(newDemoUser);
  localStorage.setItem("unitask_users", JSON.stringify(users));

  // Create demo tasks
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);

  const demoTasks = [
    {
      id: "task-001",
      title: "Projeto Integrador - Entrega Final",
      description: "Consolidar toda a documentação do Projeto Integrador I incluindo diagramas UML, modelo de dados e protótipo navegável",
      subject: "Projeto Integrador I",
      dueDate: "2026-03-27", // Data final do cronograma
      status: "in_progress",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-002",
      title: "Trabalho de Cálculo II",
      description: "Resolver exercícios do capítulo 5 sobre integrais",
      subject: "Cálculo II",
      dueDate: today.toISOString().split("T")[0],
      status: "in_progress",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-003",
      title: "Modelo Relacional + SQL",
      description: "Desenvolver o modelo relacional e scripts SQL do sistema UniTask",
      subject: "Projeto Integrador I",
      dueDate: "2026-02-27", // Data do cronograma
      status: "completed",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-004",
      title: "Projeto de Banco de Dados",
      description: "Elaborar o modelo entidade-relacionamento do sistema",
      subject: "Banco de Dados",
      dueDate: tomorrow.toISOString().split("T")[0],
      status: "pending",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-005",
      title: "Leitura: Padrões de Projeto",
      description: "Ler capítulos 1-3 do livro sobre Design Patterns",
      subject: "Engenharia de Software",
      dueDate: nextWeek.toISOString().split("T")[0],
      status: "pending",
      priority: "medium",
      userId: newDemoUser.id,
    },
    {
      id: "task-006",
      title: "Implementar CRUD em React",
      description: "Desenvolver as operações básicas do sistema UniTask",
      subject: "Desenvolvimento Web",
      dueDate: "2026-03-13", // Data protótipo navegável
      status: "in_progress",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-007",
      title: "Diagrama de Classes e Sequência",
      description: "Criar diagramas UML de classes e sequência do sistema",
      subject: "Projeto Integrador I",
      dueDate: "2026-02-13", // Data do cronograma
      status: "completed",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-008",
      title: "Relatório de Física",
      description: "Documentar os resultados do experimento de mecânica",
      subject: "Física II",
      dueDate: lastWeek.toISOString().split("T")[0],
      status: "pending",
      priority: "medium",
      userId: newDemoUser.id,
    },
    {
      id: "task-009",
      title: "Estudar para Prova de Algoritmos",
      description: "Revisar estruturas de dados e complexidade",
      subject: "Algoritmos e Estruturas de Dados",
      dueDate: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "pending",
      priority: "high",
      userId: newDemoUser.id,
    },
    {
      id: "task-010",
      title: "Assistir Vídeo-aula de Redes",
      description: "Aula sobre protocolo TCP/IP",
      subject: "Redes de Computadores",
      dueDate: new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "pending",
      priority: "low",
      userId: newDemoUser.id,
    },
    {
      id: "task-011",
      title: "Exercícios de Lógica",
      description: "Resolver lista de exercícios sobre lógica proposicional",
      subject: "Matemática Discreta",
      dueDate: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      status: "completed",
      priority: "medium",
      userId: newDemoUser.id,
    },
    {
      id: "task-012",
      title: "Backlog de Requisitos RF/RNF",
      description: "Documentar requisitos funcionais e não funcionais do UniTask",
      subject: "Projeto Integrador I",
      dueDate: "2026-01-16", // Data do cronograma
      status: "completed",
      priority: "high",
      userId: newDemoUser.id,
    },
  ];

  const allTasks = JSON.parse(localStorage.getItem("unitask_tasks") || "[]");
  demoTasks.forEach((task) => allTasks.push(task));
  localStorage.setItem("unitask_tasks", JSON.stringify(allTasks));
}

export function useDemoMode() {
  const loadDemoAccount = () => {
    const users = JSON.parse(localStorage.getItem("unitask_users") || "[]");
    const demoUser = users.find((u: any) => u.email === "demo@unitask.com");

    if (!demoUser) {
      initializeDemoData();
      const updatedUsers = JSON.parse(localStorage.getItem("unitask_users") || "[]");
      const newDemoUser = updatedUsers.find((u: any) => u.email === "demo@unitask.com");
      if (newDemoUser) {
        localStorage.setItem("unitask_current_user", JSON.stringify(newDemoUser));
        toast.success("Conta demo carregada!");
        return true;
      }
    } else {
      localStorage.setItem("unitask_current_user", JSON.stringify(demoUser));
      toast.success("Conta demo carregada!");
      return true;
    }
    return false;
  };

  return { loadDemoAccount };
}