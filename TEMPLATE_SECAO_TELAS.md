# Template para Documentação - Seção 5: Protótipo das Telas

---

## 5. PROTÓTIPO DAS TELAS

Esta seção apresenta o design da interface e a experiência do usuário (UI/UX) através de protótipos das principais telas do sistema UniTask.

### 5.1 Tela de Login e Cadastro

A tela inicial do sistema UniTask oferece acesso ao sistema através de login para usuários cadastrados ou cadastro de novos estudantes.

**[INSERIR IMAGEM: unitask-01-login.png]**

**Figura 1**: Tela de login do sistema UniTask, permitindo autenticação de usuários cadastrados e acesso ao modo demonstração para avaliação do protótipo.

#### Funcionalidades Implementadas
- **RF01**: Cadastro de usuários (alunos)
- **RF02**: Login e logout
- **RNF02**: Interface simples e intuitiva
- **RNF03**: Design responsivo
- **RNF04**: Autenticação por login e senha

#### Elementos da Interface
- Logo do sistema com identidade visual acadêmica (ícone de capelo)
- Alternância entre formulários de Login e Cadastro via abas
- Botão de acesso rápido ao modo demonstração
- Campos de entrada com validação:
  - Nome completo (apenas no cadastro)
  - E-mail
  - Senha
  - Curso (apenas no cadastro)
- Link informativo sobre o Projeto Integrador

**[INSERIR IMAGEM: unitask-02-cadastro.png]**

**Figura 2**: Formulário de cadastro de novos usuários com campos obrigatórios identificados.

---

### 5.2 Tela de Dashboard

O Dashboard apresenta uma visão consolidada das atividades acadêmicas do estudante, facilitando o acompanhamento de prazos e prioridades.

**[INSERIR IMAGEM: unitask-03-dashboard.png]**

**Figura 3**: Dashboard do UniTask apresentando estatísticas em tempo real, próximas tarefas e ações rápidas para facilitar a navegação do estudante.

#### Funcionalidades Implementadas
- **RF08**: Visualização de tarefas em lista
- **RNF02**: Interface simples e intuitiva
- **RNF06**: Tempo de resposta adequado

#### Principais Seções

##### Cards de Estatísticas
O sistema apresenta quatro indicadores principais na parte superior:

1. **Total de Tarefas**: Quantidade geral de atividades cadastradas
2. **Pendentes**: Tarefas aguardando início
3. **Em Progresso**: Atividades sendo desenvolvidas
4. **Concluídas**: Tarefas finalizadas com indicador percentual

##### Sistema de Alertas
Quando há tarefas atrasadas, o sistema exibe automaticamente um alerta destacado, incentivando o estudante a revisar suas pendências.

##### Próximas Tarefas
Lista as cinco próximas tarefas ordenadas por proximidade do prazo, apresentando:
- Título da atividade
- Disciplina associada
- Prioridade (Alta, Média, Baixa)
- Indicador temporal (Hoje, Amanhã, X dias, Atrasada)

##### Ações Rápidas
Atalhos para as funcionalidades mais utilizadas:
- Criar nova tarefa
- Visualizar calendário
- Acessar lista completa de tarefas

---

### 5.3 Tela de Gerenciamento de Tarefas

A tela de tarefas é o núcleo do sistema, permitindo o CRUD (Create, Read, Update, Delete) completo de atividades acadêmicas.

**[INSERIR IMAGEM: unitask-04-lista-tarefas.png]**

**Figura 4**: Tela de gerenciamento de tarefas acadêmicas com recursos de busca, filtros por status e prioridade, e ações de CRUD completo.

#### Funcionalidades Implementadas
- **RF03**: Cadastro de tarefas acadêmicas
- **RF04**: Edição de tarefas
- **RF05**: Exclusão de tarefas
- **RF06**: Definição de prazos para as tarefas
- **RF07**: Atualização de status das tarefas
- **RF08**: Visualização de tarefas em lista

#### Sistema de Filtros
A tela oferece três mecanismos de filtragem simultâneos:
- **Busca textual**: Pesquisa em títulos, disciplinas e descrições
- **Filtro por status**: Pendente, Em Progresso, Concluída ou Todos
- **Filtro por prioridade**: Alta, Média, Baixa ou Todas

#### Visualização das Tarefas
Cada tarefa é apresentada em um card contendo:
- Indicador visual de status (clicável para alteração rápida)
- Título e descrição
- Badges informativos:
  - Disciplina (cor azul)
  - Nível de prioridade (cores diferenciadas)
  - Status atual
  - Data de entrega (destacada em vermelho se atrasada)
- Botões de ação: Editar e Excluir

**[INSERIR IMAGEM: unitask-05-modal-nova-tarefa.png]**

**Figura 5**: Modal de cadastro de nova tarefa acadêmica com todos os campos necessários para organização completa.

#### Modal de Cadastro/Edição
O formulário de tarefa inclui:
- **Título*** (obrigatório): Nome da atividade
- **Descrição**: Detalhamento opcional
- **Disciplina*** (obrigatório): Matéria associada
- **Data de Entrega*** (obrigatório): Prazo final
- **Status**: Seletor de estado atual
- **Prioridade**: Indicador de urgência

*Campos marcados com asterisco são obrigatórios.

---

### 5.4 Tela de Calendário

A visualização em calendário oferece uma perspectiva temporal das atividades, facilitando o planejamento acadêmico.

**[INSERIR IMAGEM: unitask-06-calendario.png]**

**Figura 6**: Visualização em calendário mensal das tarefas acadêmicas, com indicadores visuais coloridos e painel de detalhes por data selecionada.

#### Funcionalidades Implementadas
- **RF09**: Visualização de tarefas em calendário
- **RNF02**: Interface simples e intuitiva

#### Recursos do Calendário

##### Navegação Temporal
- Exibição do mês e ano atual
- Botões para navegar entre meses (anterior/próximo)
- Botão "Hoje" para retorno rápido ao dia atual

##### Grade Mensal
- Disposição em formato tradicional de calendário (7 colunas x 6 semanas)
- Destaque visual para o dia atual
- Indicadores coloridos de tarefas:
  - **Verde**: Tarefas concluídas
  - **Vermelho**: Alta prioridade ou tarefas atrasadas
  - **Âmbar**: Média prioridade
  - **Azul**: Baixa prioridade
- Contador de tarefas quando há mais de três em um único dia

##### Painel de Detalhes
Ao selecionar uma data, o painel lateral exibe:
- Data selecionada formatada
- Lista completa de tarefas do dia
- Detalhes de cada tarefa (título, disciplina, prioridade, status)
- Destaque visual para tarefas atrasadas

##### Legenda
Sistema de cores explicativo para facilitar a interpretação visual dos indicadores.

**[INSERIR IMAGEM: unitask-07-calendario-detalhes.png]**

**Figura 7**: Painel de detalhes do calendário mostrando as tarefas de uma data específica.

---

### 5.5 Sistema de Lembretes

O sistema inclui um mecanismo automático de lembretes que monitora tarefas próximas do vencimento.

**[INSERIR IMAGEM: unitask-08-notificacao-lembrete.png (opcional)]**

**Figura 8**: Notificação automática de lembrete para tarefas com prazo próximo.

#### Características
- Verificação automática periódica (a cada 30 minutos)
- Notificações não intrusivas (toast notifications)
- Lembretes para:
  - Tarefas que vencem hoje
  - Tarefas que vencem amanhã
  - Tarefas já atrasadas
- Sem necessidade de interação do usuário

---

### 5.6 Modal Informativo "Sobre o Projeto"

**[INSERIR IMAGEM: unitask-09-sobre-projeto.png (opcional)]**

**Figura 9**: Modal informativo sobre o Projeto Integrador I e o sistema UniTask.

O sistema inclui uma seção informativa contendo:
- Descrição do projeto UniTask
- Objetivos do Projeto Integrador I
- Tecnologias utilizadas na implementação
- Créditos e informações acadêmicas

---

### 5.7 Responsividade

O sistema UniTask foi desenvolvido seguindo os princípios de design responsivo, adaptando-se a diferentes tamanhos de tela e dispositivos.

**[INSERIR IMAGEM: unitask-10-mobile-login.png (opcional)]**

**Figura 10**: Versão mobile da tela de login demonstrando a responsividade do sistema.

**[INSERIR IMAGEM: unitask-11-mobile-dashboard.png (opcional)]**

**Figura 11**: Dashboard em dispositivo móvel com menu de navegação adaptativo.

#### Características Responsivas
- **Desktop** (≥ 1024px): Layout completo com múltiplas colunas
- **Tablet** (768px - 1023px): Layout adaptado com reorganização de elementos
- **Mobile** (< 768px): 
  - Menu hamburguer para navegação
  - Layout em coluna única
  - Botões e cards otimizados para toque
  - Formulários adaptados para telas menores

Atendendo ao **RNF03** (Sistema deve ser responsivo), todas as telas foram desenvolvidas para proporcionar uma experiência consistente e usável em diferentes dispositivos.

---

### 5.8 Fluxo de Navegação

O sistema segue um fluxo de navegação intuitivo:

```
Login/Cadastro
    ↓
Dashboard (página inicial após autenticação)
    ↓
    ├─→ Tarefas (gerenciamento completo)
    ├─→ Calendário (visualização temporal)
    └─→ Sobre (informações do projeto)
```

A navegação é facilitada por:
- Menu persistente no topo da página
- Breadcrumbs visuais (página ativa destacada)
- Links e ações rápidas contextuais
- Retorno automático ao login ao fazer logout

---

### 5.9 Considerações sobre o Protótipo

#### Persistência de Dados
O protótipo utiliza **LocalStorage** do navegador para persistência de dados, permitindo:
- Teste completo das funcionalidades sem necessidade de backend
- Demonstração realista do fluxo de uso
- Preservação dos dados entre sessões

#### Modo Demonstração
Para facilitar a avaliação do protótipo, foi implementado um **modo demo** que:
- Carrega automaticamente um usuário de exemplo (Lucas Almeida - Persona 01)
- Pré-popula o sistema com tarefas acadêmicas realistas
- Demonstra todos os estados possíveis (tarefas pendentes, em progresso, concluídas, atrasadas)
- Permite avaliação imediata sem necessidade de cadastro

#### Validações Implementadas
O protótipo inclui validações essenciais:
- Campos obrigatórios nos formulários
- Verificação de e-mail único no cadastro
- Confirmação antes de excluir tarefas
- Feedback visual através de notificações (toast)

---

### 5.10 Tecnologias Utilizadas na Interface

A interface do protótipo foi desenvolvida utilizando tecnologias web modernas, atendendo ao **RNF01** (Sistema deve ser acessível via navegador web):

- **React 18.3**: Biblioteca JavaScript para construção da interface
- **TypeScript**: Tipagem estática para maior confiabilidade do código
- **Tailwind CSS 4**: Framework CSS utility-first para estilização responsiva
- **React Router 7**: Navegação entre páginas
- **Lucide React**: Biblioteca de ícones moderna
- **Sonner**: Sistema de notificações toast
- **Date-fns**: Manipulação e formatação de datas

Estas tecnologias foram escolhidas por:
- Facilitar o desenvolvimento de interfaces modernas e responsivas
- Garantir compatibilidade cross-browser
- Proporcionar excelente experiência do usuário
- Permitir manutenção e evolução do código

---

## CONCLUSÃO DA SEÇÃO

O protótipo navegável do sistema UniTask demonstra a viabilidade técnica da solução proposta, implementando todos os requisitos funcionais definidos (RF01 a RF09) e atendendo aos requisitos não funcionais especificados (RNF01 a RNF06).

A interface foi projetada considerando as necessidades das personas identificadas (Lucas Almeida e Ana Paula Santos), oferecendo uma experiência intuitiva, responsiva e adequada ao contexto acadêmico dos estudantes universitários.

O protótipo serve como base sólida para o desenvolvimento completo do sistema no Projeto Integrador II, validando conceitos de design, usabilidade e arquitetura da informação.

---

**Observações importantes para inserção no documento Word:**

1. **Substituir todos os textos [INSERIR IMAGEM: ...]** pelas capturas de tela reais
2. **Ajustar numeração das figuras** conforme o padrão do documento
3. **Adicionar referências cruzadas** às figuras no texto se necessário
4. **Revisar formatação** de acordo com as normas ABNT ou padrão institucional
5. **Incluir lista de figuras** no início ou fim do documento se requerido

