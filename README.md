# UniTask - Sistema de Organização Acadêmica

![Status](https://img.shields.io/badge/status-protótipo-blue)
![Versão](https://img.shields.io/badge/versão-1.0-green)
![Projeto](https://img.shields.io/badge/projeto-integrador_I-orange)

Sistema web para auxiliar estudantes universitários na organização de tarefas, prazos e atividades acadêmicas.

---

## 📋 Sobre o Projeto

O **UniTask** é um sistema de gerenciamento de tarefas acadêmicas desenvolvido como parte do **Projeto Integrador I** de um curso de Sistemas de Informação. O projeto visa resolver o problema de estudantes universitários que enfrentam dificuldades para organizar suas atividades acadêmicas, utilizando múltiplas plataformas dispersas.

### Problem Statement
Estudantes universitários frequentemente enfrentam dificuldades para organizar tarefas, prazos e atividades acadêmicas, utilizando múltiplas plataformas e anotações dispersas, o que resulta em esquecimentos, atrasos e baixo desempenho acadêmico.

### Solução Proposta
O UniTask propõe uma solução centralizada para o gerenciamento de tarefas e prazos acadêmicos, facilitando a organização do tempo e a visualização das atividades.

---

## ✨ Funcionalidades

### Implementadas (RF - Requisitos Funcionais)
- ✅ **RF01**: Cadastro de usuários (alunos)
- ✅ **RF02**: Login e logout
- ✅ **RF03**: Cadastro de tarefas acadêmicas
- ✅ **RF04**: Edição de tarefas
- ✅ **RF05**: Exclusão de tarefas
- ✅ **RF06**: Definição de prazos para as tarefas
- ✅ **RF07**: Atualização de status das tarefas
- ✅ **RF08**: Visualização de tarefas em lista
- ✅ **RF09**: Visualização de tarefas em calendário

### Características (RNF - Requisitos Não Funcionais)
- ✅ **RNF01**: Acessível via navegador web
- ✅ **RNF02**: Interface simples e intuitiva
- ✅ **RNF03**: Design responsivo (desktop, tablet, mobile)
- ✅ **RNF04**: Autenticação por login e senha
- ✅ **RNF05**: Proteção de dados dos usuários
- ✅ **RNF06**: Tempo de resposta adequado

### Recursos Adicionais
- 🔔 Sistema de lembretes automáticos
- 🔍 Busca e filtros avançados
- 📊 Dashboard com estatísticas em tempo real
- 🎨 Interface moderna e profissional
- 📱 Totalmente responsivo
- 🚀 Modo demonstração com dados pré-carregados

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **React Router 7** - Roteamento e navegação
- **Lucide React** - Biblioteca de ícones moderna
- **Sonner** - Sistema de notificações toast
- **Date-fns** - Manipulação de datas

### Ferramentas de Desenvolvimento
- **Vite** - Build tool e dev server
- **PostCSS** - Processamento de CSS

### Persistência
- **LocalStorage** - Armazenamento local no navegador (protótipo)

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Instalação

1. Clone ou baixe este repositório

2. Instale as dependências:
```bash
npm install
# ou
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
pnpm dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

### Modo Demonstração

Para facilitar a avaliação, o sistema possui um **modo demo**:

1. Na tela de login, clique em **"Entrar no Modo Demo"**
2. O sistema carregará automaticamente:
   - **Usuário**: Lucas Almeida (Persona 01)
   - **Curso**: Sistemas de Informação
   - **12 tarefas** pré-cadastradas incluindo:
     - Tarefas do Projeto Integrador I
     - Diferentes disciplinas
     - Diversos status (pendente, em progresso, concluída)
     - Diferentes prioridades (alta, média, baixa)
     - Tarefas com diferentes prazos (hoje, amanhã, futuras, atrasadas)

### Credenciais Demo
```
Email: demo@unitask.com
Senha: demo123
```

---

## 📱 Telas do Sistema

### 1. Login e Cadastro
- Autenticação de usuários
- Cadastro de novos estudantes
- Acesso rápido ao modo demonstração

### 2. Dashboard
- Visão geral das atividades
- Estatísticas em tempo real
- Alertas de tarefas atrasadas
- Lista de próximas tarefas
- Ações rápidas

### 3. Gerenciamento de Tarefas
- CRUD completo de tarefas
- Busca textual
- Filtros por status e prioridade
- Atualização rápida de status
- Indicadores visuais de prioridade e prazo

### 4. Calendário
- Visualização mensal
- Indicadores coloridos de tarefas
- Painel de detalhes por data
- Navegação entre meses
- Legenda explicativa

---

## 📂 Estrutura do Projeto

```
unitask/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/              # Componentes de UI reutilizáveis
│   │   │   ├── AboutModal.tsx   # Modal "Sobre o Projeto"
│   │   │   ├── Calendar.tsx     # Visualização em calendário
│   │   │   ├── Dashboard.tsx    # Dashboard principal
│   │   │   ├── Layout.tsx       # Layout base com navegação
│   │   │   ├── Login.tsx        # Tela de login/cadastro
│   │   │   ├── ReminderSystem.tsx # Sistema de lembretes
│   │   │   ├── Root.tsx         # Componente raiz
│   │   │   └── TaskList.tsx     # Lista e gerenciamento de tarefas
│   │   ├── utils/
│   │   │   └── demoData.ts      # Dados de demonstração
│   │   ├── App.tsx              # Componente principal
│   │   └── routes.tsx           # Configuração de rotas
│   └── styles/
│       ├── fonts.css            # Fontes personalizadas
│       ├── index.css            # Estilos globais
│       ├── tailwind.css         # Configuração Tailwind
│       └── theme.css            # Tema e variáveis CSS
│
├── DOCUMENTACAO_TELAS.md        # Guia de documentação das telas
├── TEMPLATE_SECAO_TELAS.md      # Template para documento Word
├── GUIA_CAPTURAS.md             # Manual de capturas de tela
├── LEGENDAS_PRONTAS.md          # Textos prontos para documentação
├── SUMARIO_EXECUTIVO.md         # Resumo de todos os recursos
│
├── package.json                  # Dependências e scripts
├── vite.config.ts               # Configuração do Vite
└── README.md                    # Este arquivo
```

---

## 👥 Personas

O sistema foi projetado considerando duas personas principais:

### Persona 01 - Lucas Almeida
- **Idade**: 21 anos
- **Curso**: Bacharelado em Sistemas de Informação
- **Perfil**: Estudante em tempo integral, cursa várias disciplinas simultaneamente
- **Necessidades**: Organizar tarefas em um único local, visualizar prazos, evitar esquecimentos
- **Dores**: Uso de múltiplas ferramentas desorganizadas, esquecimento de prazos

### Persona 02 - Ana Paula Santos
- **Idade**: 28 anos
- **Curso**: Licenciatura (EaD)
- **Perfil**: Trabalha durante o dia, estuda à noite, pouco tempo disponível
- **Necessidades**: Acesso rápido, organização simples, visualização de compromissos futuros
- **Dores**: Falta de tempo, esquecimento de atividades, dificuldade em visualizar agenda semanal

---

## 📊 Escopo do Projeto

### ✅ Dentro do Escopo (IN)
- Cadastro de usuários (alunos)
- Cadastro, edição e exclusão de tarefas acadêmicas
- Definição de prazos e status das tarefas
- Visualização de tarefas em lista e calendário
- Geração de lembretes simples
- Protótipo navegável das telas principais
- Documentação técnica (requisitos, UML e modelo de dados)

### ❌ Fora do Escopo (OUT)
- Integração com plataformas externas (Google Classroom, Moodle, etc.)
- Aplicativo mobile nativo
- Gamificação avançada
- Implementação em ambiente de produção
- Envio real de notificações por e-mail ou push
- Sincronização entre dispositivos

---

## 📅 Cronograma (Projeto Integrador I)

| Etapa                          | Data       | Status |
|--------------------------------|------------|--------|
| Definição dos grupos           | 29/11/2025 | ✅     |
| Project Charter                | 19/12/2025 | ✅     |
| Documento de escopo e personas | 09/01/2026 | ✅     |
| Backlog RF/RNF                 | 16/01/2026 | ✅     |
| Diagrama de caso de uso        | 16/01/2026 | ✅     |
| Casos de uso expandidos        | 30/01/2026 | ✅     |
| Diagrama de sequência          | 13/02/2026 | ✅     |
| Diagrama de Classes            | 13/02/2026 | ✅     |
| Modelo Relacional + SQL        | 27/02/2026 | ✅     |
| **Protótipo navegável**        | **13/03/2026** | 🔄 Em andamento |
| Documento final consolidado    | 27/03/2026 | ⏳ Pendente |

---

## 📚 Documentação Disponível

O projeto inclui documentação completa para auxiliar na preparação do documento do Projeto Integrador:

1. **DOCUMENTACAO_TELAS.md**
   - Descrição detalhada de cada tela
   - Funcionalidades implementadas
   - Elementos da interface
   - Instruções para capturas de tela

2. **TEMPLATE_SECAO_TELAS.md**
   - Template completo da Seção 5 (Protótipo das Telas)
   - Pronto para copiar/colar no Word
   - Formatação acadêmica

3. **GUIA_CAPTURAS.md**
   - Manual técnico de capturas de tela
   - Ferramentas recomendadas
   - Passo a passo detalhado
   - Solução de problemas

4. **LEGENDAS_PRONTAS.md**
   - Textos prontos para legendas
   - Descrições para o corpo do documento
   - Dicas de redação acadêmica

5. **SUMARIO_EXECUTIVO.md**
   - Resumo de todos os recursos
   - Roadmap de uso
   - Checklist completo

---

## 🎯 Critérios de Sucesso

O projeto será considerado bem-sucedido se:
- ✅ Entrega de 100% dos artefatos solicitados no cronograma
- ✅ Escopo claramente definido e coerente com o problema apresentado
- ✅ Diagramas UML corretos e consistentes entre si
- ✅ Protótipo navegável representando o fluxo principal do sistema
- ✅ Projeto validado pelo professor orientador

---

## 🚧 Limitações Conhecidas

Este é um **protótipo acadêmico** com as seguintes limitações:

1. **Persistência**: Dados armazenados apenas no LocalStorage do navegador
   - Dados são perdidos se limpar cache
   - Não há sincronização entre dispositivos
   - Não há backup automático

2. **Autenticação**: Sistema básico sem criptografia robusta
   - Adequado para demonstração
   - Não recomendado para dados sensíveis reais

3. **Performance**: Não otimizado para grandes volumes de dados
   - Adequado para uso individual
   - Pode apresentar lentidão com centenas de tarefas

4. **Compatibilidade**: Testado principalmente em navegadores modernos
   - Chrome/Edge (recomendado)
   - Firefox
   - Safari (pode ter pequenas diferenças visuais)

---

## 🔮 Próximos Passos (Projeto Integrador II)

Na continuação do projeto, planeja-se implementar:

- 🔧 Backend completo (Node.js + Express)
- 🗄️ Banco de dados relacional (PostgreSQL)
- 🔐 Autenticação robusta (JWT, bcrypt)
- 🔄 Sincronização em tempo real
- 📧 Notificações por email
- 📱 PWA (Progressive Web App)
- 🔗 Integração com Google Classroom/Moodle
- 🎮 Gamificação avançada
- 📊 Relatórios e análises
- 👥 Compartilhamento de tarefas em grupo

---

## 📝 Licença e Atribuições

### Componentes de UI
Este projeto utiliza componentes de [shadcn/ui](https://ui.shadcn.com/) sob [licença MIT](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

### Projeto Acadêmico
Este é um projeto acadêmico desenvolvido para a disciplina **Projeto Integrador I**.

**Instituição**: [Sua Instituição]  
**Curso**: Sistemas de Informação  
**Disciplina**: Projeto Integrador I  
**Período**: 2025/2026  
**Autor**: [Seu Nome]

---

## 📞 Contato

Para dúvidas sobre o projeto:
- **Email**: [seu-email@exemplo.com]
- **GitHub**: [seu-usuario]

---

## 🙏 Agradecimentos

- Professor orientador pela orientação durante o projeto
- Colegas de turma pelas discussões e feedback
- Comunidade open source pelas ferramentas utilizadas

---

## 📌 Notas Importantes

### Para Avaliadores
- O sistema está **totalmente funcional** e pode ser testado usando o modo demo
- Todos os requisitos funcionais (RF01-RF09) estão implementados
- Todos os requisitos não funcionais (RNF01-RNF06) são atendidos
- A documentação técnica está completa e organizada

### Para Futuros Desenvolvedores
- O código está organizado e comentado
- Os componentes são reutilizáveis
- A estrutura facilita expansão futura
- Os dados demo podem ser customizados em `src/app/utils/demoData.ts`

### Para Usuários
- Use o modo demo para explorar todas as funcionalidades
- Os dados são salvos localmente no seu navegador
- Não use para informações confidenciais reais
- Este é um protótipo educacional

---

**Última atualização**: 24 de fevereiro de 2026  
**Versão**: 1.0  
**Status**: Protótipo Funcional ✅

---

<div align="center">

**UniTask** - Organizando o sucesso acadêmico, uma tarefa por vez 🎓

Desenvolvido com ❤️ para o Projeto Integrador I

</div>
