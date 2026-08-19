import { X, Info, Calendar, ListTodo, Bell, Users, CheckCircle } from "lucide-react";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h3 className="text-xl">Sobre o UniTask</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-blue-600" />
              <h4>Informações do Projeto</h4>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 space-y-2 text-sm">
              <p>
                <strong>Título:</strong> UniTask – Sistema de Organização Acadêmica
              </p>
              <p>
                <strong>Objetivo:</strong> Protótipo navegável desenvolvido para o Projeto
                Integrador I
              </p>
              <p>
                <strong>Período:</strong> 2025/2026
              </p>
            </div>
          </div>

          {/* Problem Statement */}
          <div>
            <h4 className="mb-3">Problema</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Estudantes universitários frequentemente enfrentam dificuldades para organizar
              tarefas, prazos e atividades acadêmicas, utilizando múltiplas plataformas e
              anotações dispersas, o que resulta em esquecimentos, atrasos e baixo
              desempenho acadêmico.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="mb-3">Solução</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              O UniTask propõe uma solução centralizada para o gerenciamento de tarefas e
              prazos acadêmicos, facilitando a organização do tempo e a visualização das
              atividades em um único sistema.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-4">Funcionalidades Implementadas</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="mb-1">Cadastro de Usuários</p>
                  <p className="text-sm text-gray-600">
                    Sistema de autenticação para alunos
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ListTodo className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="mb-1">Gestão de Tarefas</p>
                  <p className="text-sm text-gray-600">
                    CRUD completo de atividades acadêmicas
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="mb-1">Visualização em Calendário</p>
                  <p className="text-sm text-gray-600">
                    Organização visual por datas
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="mb-1">Sistema de Lembretes</p>
                  <p className="text-sm text-gray-600">
                    Notificações para prazos próximos
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="mb-1">Status e Prioridades</p>
                  <p className="text-sm text-gray-600">
                    Controle de progresso das tarefas
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="mb-1">Dashboard Informativo</p>
                  <p className="text-sm text-gray-600">
                    Estatísticas e visão geral
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scope */}
          <div>
            <h4 className="mb-3">Escopo do Protótipo</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm mb-2 text-green-700">✓ Incluído</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Cadastro e login de usuários</li>
                  <li>CRUD de tarefas acadêmicas</li>
                  <li>Definição de prazos e status</li>
                  <li>Visualização em lista e calendário</li>
                  <li>Lembretes simples</li>
                  <li>Protótipo navegável</li>
                </ul>
              </div>
              <div>
                <p className="text-sm mb-2 text-red-700">✗ Não Incluído</p>
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                  <li>Integração com plataformas externas</li>
                  <li>Aplicativo mobile nativo</li>
                  <li>Gamificação avançada</li>
                  <li>Ambiente de produção</li>
                  <li>Notificações por e-mail/push</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="mb-3">Tecnologias Utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                React Router
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                LocalStorage API
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                Lucide Icons
              </span>
            </div>
          </div>

          {/* Demo Instructions */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
            <h4 className="mb-2">Instruções do Modo Demo</h4>
            <p className="text-sm text-gray-700 mb-3">
              Para facilitar a avaliação do protótipo, utilize o botão "Entrar no Modo
              Demo" na tela de login. Isso carregará automaticamente uma conta com tarefas
              de exemplo pré-configuradas.
            </p>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Email:</strong> demo@unitask.com
              </p>
              <p>
                <strong>Senha:</strong> demo123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
