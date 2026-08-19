import { useState } from "react";
import { useNavigate } from "react-router";
import { GraduationCap, LogIn, UserPlus, Sparkles, Info } from "lucide-react";
import { toast } from "sonner";
import { useDemoMode } from "../utils/demoData";
import { AboutModal } from "./AboutModal";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
  });
  const navigate = useNavigate();
  const { loadDemoAccount } = useDemoMode();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      // Simular login
      const users = JSON.parse(localStorage.getItem("unitask_users") || "[]");
      const user = users.find((u: any) => u.email === formData.email);
      
      if (user && user.password === formData.password) {
        localStorage.setItem("unitask_current_user", JSON.stringify(user));
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      } else {
        toast.error("Email ou senha incorretos!");
      }
    } else {
      // Simular cadastro
      if (!formData.name || !formData.email || !formData.password || !formData.course) {
        toast.error("Preencha todos os campos!");
        return;
      }
      
      const users = JSON.parse(localStorage.getItem("unitask_users") || "[]");
      const userExists = users.find((u: any) => u.email === formData.email);
      
      if (userExists) {
        toast.error("Email já cadastrado!");
        return;
      }
      
      const newUser = {
        id: Date.now().toString(),
        ...formData,
      };
      
      users.push(newUser);
      localStorage.setItem("unitask_users", JSON.stringify(users));
      localStorage.setItem("unitask_current_user", JSON.stringify(newUser));
      toast.success("Cadastro realizado com sucesso!");
      navigate("/dashboard");
    }
  };

  const handleDemoLogin = () => {
    if (loadDemoAccount()) {
      // Pequeno delay para garantir que o LocalStorage foi atualizado
      setTimeout(() => {
        navigate("/dashboard");
      }, 100);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2">UniTask</h1>
          <p className="text-gray-600">Sistema de Organização Acadêmica</p>
        </div>

        {/* Demo Mode Button */}
        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          <Sparkles className="w-5 h-5" />
          Entrar no Modo Demo
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">ou</span>
          </div>
        </div>

        {/* Card do Formulário */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex gap-2 mb-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                isLogin
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                !isLogin
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Cadastrar
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm mb-2 text-gray-700">Nome Completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Seu nome completo"
                />
              </div>
            )}

            <div>
              <label className="block text-sm mb-2 text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-700">Senha</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm mb-2 text-gray-700">Curso</label>
                <input
                  type="text"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Ex: Engenharia de Software"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-6"
            >
              {isLogin ? (
                <>
                  <LogIn className="w-5 h-5" />
                  Entrar
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Cadastrar
                </>
              )}
            </button>
          </form>
        </div>

        {/* Informações adicionais */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Protótipo desenvolvido para o Projeto Integrador I</p>
          <button
            onClick={() => setIsAboutModalOpen(true)}
            className="mt-2 text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <Info className="w-4 h-4" />
            Sobre o Projeto
          </button>
        </div>
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
}