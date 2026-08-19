# UniTask - Documentação das Telas para Projeto Integrador I

## 📋 Guia para Captura de Prints das Telas

Este documento descreve cada tela do sistema UniTask para auxiliar na documentação do Projeto Integrador I.

---

## 1. Tela de Login e Cadastro

### Descrição
A tela inicial do sistema oferece duas funcionalidades principais:
- **Login** para usuários já cadastrados
- **Cadastro** para novos usuários

### Funcionalidades Implementadas
- ✅ RF01: Cadastro de usuários (alunos)
- ✅ RF02: Login e logout
- ✅ RNF02: Interface simples e intuitiva
- ✅ RNF03: Design responsivo
- ✅ RNF04: Autenticação por login e senha

### Elementos da Interface
1. **Logo do Sistema**: Ícone de capelo acadêmico em fundo azul
2. **Título**: "UniTask - Sistema de Organização Acadêmica"
3. **Botão Demo**: Permite acesso rápido com dados de demonstração
4. **Abas de Login/Cadastro**: Alternância entre os formulários
5. **Formulário de Login**:
   - Campo: Email
   - Campo: Senha
   - Botão: Entrar
6. **Formulário de Cadastro**:
   - Campo: Nome Completo
   - Campo: Email
   - Campo: Senha
   - Campo: Curso
   - Botão: Cadastrar
7. **Link "Sobre o Projeto"**: Informações sobre o Projeto Integrador

### Como Capturar
1. Acesse a URL raiz do sistema (/)
2. Capture a tela mostrando o **formulário de Login**
3. Clique em "Cadastrar" e capture o **formulário de Cadastro**

**Resolução recomendada**: 1920x1080 (desktop) ou 375x812 (mobile)

---

## 2. Tela de Dashboard

### Descrição
Visão geral das atividades acadêmicas do estudante com estatísticas e atalhos rápidos.

### Funcionalidades Implementadas
- ✅ RF08: Visualização de tarefas em lista
- ✅ Estatísticas em tempo real
- ✅ Alertas de tarefas atrasadas
- ✅ Lista de próximas tarefas
- ✅ Ações rápidas

### Elementos da Interface

#### Cards de Estatísticas (4 cards)
1. **Total de Tarefas**: 
   - Ícone: Lista de tarefas
   - Cor: Azul
   - Mostra: Quantidade total

2. **Pendentes**:
   - Ícone: Relógio
   - Cor: Âmbar
   - Mostra: Tarefas pendentes

3. **Em Progresso**:
   - Ícone: Gráfico crescente
   - Cor: Roxo
   - Mostra: Tarefas em andamento

4. **Concluídas**:
   - Ícone: Check
   - Cor: Verde
   - Mostra: Tarefas finalizadas + percentual

#### Alerta de Tarefas Atrasadas
- Exibido apenas quando há tarefas vencidas
- Cor de fundo: Vermelho claro
- Ícone: Alerta

#### Seção "Próximas Tarefas"
- Lista as 5 próximas tarefas ordenadas por data
- Cada tarefa mostra:
  - Título
  - Disciplina
  - Prioridade (badge colorido)
  - Status temporal (Hoje, Amanhã, X dias, Atrasada)
- Link "Ver todas" para a tela de tarefas

#### Seção "Ações Rápidas"
1. **Nova Tarefa**: Atalho para criar tarefa
2. **Ver Calendário**: Acesso ao calendário
3. **Todas as Tarefas**: Lista completa

### Como Capturar
1. Faça login com a conta demo ou cadastrada
2. Você será redirecionado para `/dashboard`
3. Capture a tela completa mostrando todos os elementos

**Dica**: Use a conta demo que já vem com dados pré-carregados para uma captura mais rica.

---

## 3. Tela de Gerenciamento de Tarefas

### Descrição
Tela principal para CRUD completo de tarefas acadêmicas.

### Funcionalidades Implementadas
- ✅ RF03: Cadastro de tarefas acadêmicas
- ✅ RF04: Edição de tarefas
- ✅ RF05: Exclusão de tarefas
- ✅ RF06: Definição de prazos
- ✅ RF07: Atualização de status
- ✅ RF08: Visualização em lista
- ✅ Sistema de busca e filtros

### Elementos da Interface

#### Cabeçalho
- Título: "Minhas Tarefas"
- Botão: "Nova Tarefa" (azul, canto superior direito)

#### Barra de Filtros
1. **Campo de Busca**: Pesquisa por título, disciplina ou descrição
2. **Filtro de Status**: 
   - Todos os Status
   - Pendente
   - Em Progresso
   - Concluída
3. **Filtro de Prioridade**:
   - Todas as Prioridades
   - Alta
   - Média
   - Baixa

#### Lista de Tarefas
Cada tarefa exibe:
- **Ícone de Status** (clicável para alternar):
  - Círculo vazio: Pendente
  - Relógio: Em Progresso
  - Check verde: Concluída
- **Título da tarefa**
- **Descrição**
- **Badges**:
  - Disciplina (azul)
  - Prioridade (cores: vermelho/âmbar/cinza)
  - Status (cores: verde/roxo/cinza)
  - Data de entrega (vermelho se atrasada)
- **Ações**:
  - Botão Editar (ícone de lápis)
  - Botão Excluir (ícone de lixeira)

#### Modal de Cadastro/Edição
- **Campos do formulário**:
  - Título* (obrigatório)
  - Descrição (opcional)
  - Disciplina* (obrigatório)
  - Data de Entrega* (obrigatório)
  - Status (select: Pendente/Em Progresso/Concluída)
  - Prioridade (select: Baixa/Média/Alta)
- **Botões**:
  - Cancelar
  - Criar/Salvar

### Como Capturar
1. Navegue para `/tasks`
2. **Captura 1**: Tela com lista de tarefas e filtros
3. **Captura 2**: Clique em "Nova Tarefa" e capture o modal de criação
4. **Captura 3**: Edite uma tarefa existente para mostrar o modal de edição

---

## 4. Tela de Calendário

### Descrição
Visualização das tarefas organizadas em formato de calendário mensal.

### Funcionalidades Implementadas
- ✅ RF09: Visualização de tarefas em calendário
- ✅ Navegação entre meses
- ✅ Indicadores visuais de tarefas
- ✅ Detalhes de tarefas por data

### Elementos da Interface

#### Cabeçalho do Calendário
- Mês e Ano atual
- Botões de navegação:
  - "Hoje": Volta para o mês atual
  - Seta esquerda: Mês anterior
  - Seta direita: Próximo mês

#### Grade do Calendário
- **7 colunas**: Dom, Seg, Ter, Qua, Qui, Sex, Sáb
- **42 células** (6 semanas)
- Cada dia mostra:
  - Número do dia
  - Indicadores de tarefas (barras coloridas):
    - Verde: Tarefa concluída
    - Vermelho: Alta prioridade ou atrasada
    - Âmbar: Média prioridade
    - Azul: Baixa prioridade
  - Contador "+X" se houver mais de 3 tarefas

#### Destaque Visual
- **Dia atual**: Borda azul e fundo azul claro
- **Dia selecionado**: Borda azul clara
- **Dias com tarefas**: Indicadores coloridos

#### Painel Lateral de Detalhes
- Título: "Tarefas de [data selecionada]"
- Lista de tarefas do dia:
  - Título
  - Disciplina
  - Badge de prioridade
  - Badge de status
- Mensagem quando não há tarefas

#### Legenda
Explicação das cores:
- 🔴 Alta Prioridade / Atrasada
- 🟡 Média Prioridade
- 🔵 Baixa Prioridade
- 🟢 Concluída

### Como Capturar
1. Navegue para `/calendar`
2. **Captura 1**: Visão geral do calendário com várias tarefas
3. **Captura 2**: Clique em um dia com tarefas para mostrar o painel de detalhes
4. Dica: Use meses com várias tarefas para melhor visualização

---

## 5. Sistema de Lembretes (Notificações)

### Descrição
Sistema automático que verifica tarefas próximas do vencimento e exibe notificações.

### Funcionalidades Implementadas
- ✅ Verificação automática a cada 30 minutos
- ✅ Notificações não intrusivas (toast)
- ✅ Lembretes para tarefas:
  - Que vencem hoje
  - Que vencem amanhã
  - Que já estão atrasadas

### Como Funciona
- Executado automaticamente em segundo plano
- Aparece no canto da tela (toast notification)
- Não requer interação do usuário

### Como Capturar
- Esta funcionalidade aparece automaticamente
- Pode ser capturada quando uma notificação aparecer
- Útil para demonstrar o sistema de alertas

---

## 6. Modal "Sobre o Projeto"

### Descrição
Informações sobre o Projeto Integrador I e o sistema UniTask.

### Conteúdo
- Nome do projeto
- Objetivos
- Tecnologias utilizadas
- Informações sobre o Projeto Integrador I
- Créditos

### Como Capturar
1. Clique no botão "Sobre o Projeto" (na tela de login)
2. Ou clique em "Sobre" no menu (quando logado)
3. Capture o modal aberto

---

## 📸 Checklist de Capturas para Documentação

### Capturas Obrigatórias:
- [ ] 1. Tela de Login
- [ ] 2. Tela de Cadastro
- [ ] 3. Dashboard - Visão geral
- [ ] 4. Lista de Tarefas
- [ ] 5. Modal de Nova Tarefa
- [ ] 6. Modal de Edição de Tarefa
- [ ] 7. Calendário - Visão mensal
- [ ] 8. Calendário - Detalhes do dia

### Capturas Complementares (Opcionais):
- [ ] 9. Filtros aplicados na lista de tarefas
- [ ] 10. Alerta de tarefas atrasadas (Dashboard)
- [ ] 11. Notificação de lembrete (toast)
- [ ] 12. Modal "Sobre o Projeto"
- [ ] 13. Versão mobile - Login
- [ ] 14. Versão mobile - Dashboard
- [ ] 15. Menu mobile aberto

---

## 🎨 Dicas para Capturas Profissionais

### Preparação do Ambiente
1. **Limpe o cache do navegador** para garantir que tudo carregue corretamente
2. **Use modo anônimo/privado** para capturas limpas
3. **Configure a resolução**:
   - Desktop: 1920x1080 ou 1440x900
   - Tablet: 768x1024
   - Mobile: 375x812 (iPhone X)

### Durante a Captura
1. **Use dados demo** para ter conteúdo visual rico
2. **Capture em horário consistente** (todas as capturas no mesmo dia/hora)
3. **Evite informações pessoais** reais
4. **Mostre diferentes estados**:
   - Lista com várias tarefas
   - Lista vazia (para mostrar mensagem)
   - Tarefas em diferentes status
   - Tarefas com diferentes prioridades

### Ferramentas Recomendadas
- **Windows**: Snipping Tool, Win + Shift + S
- **Mac**: Command + Shift + 4
- **Extensões do Chrome**: 
  - Full Page Screen Capture
  - Awesome Screenshot
  - Nimbus Screenshot

### Pós-Processamento
1. **Redimensione** se necessário (mantenha proporção)
2. **Adicione sombras sutis** para destacar
3. **Use bordas** se for inserir em documento branco
4. **Nomeie os arquivos** de forma organizada:
   - `unitask-01-login.png`
   - `unitask-02-cadastro.png`
   - `unitask-03-dashboard.png`
   - etc.

---

## 📱 Responsividade

O sistema é totalmente responsivo. Considere capturar também:

### Desktop (Largura ≥ 1024px)
- Layout completo com sidebar
- Múltiplas colunas visíveis

### Tablet (Largura 768px - 1023px)
- Layout adaptado
- Algumas colunas empilhadas

### Mobile (Largura < 768px)
- Menu hamburguer
- Layout em coluna única
- Botões e cards em tela cheia

---

## 🎯 Mapeamento RF/RNF nas Telas

### Tela de Login
- RF01: Cadastro de usuários
- RF02: Login e logout
- RNF02: Interface simples e intuitiva
- RNF03: Responsivo
- RNF04: Autenticação por login e senha

### Tela de Dashboard
- RF08: Visualizar tarefas em lista
- RNF02: Interface simples e intuitiva
- RNF06: Tempo de resposta adequado

### Tela de Tarefas
- RF03: Cadastrar tarefas
- RF04: Editar tarefas
- RF05: Excluir tarefas
- RF06: Definir prazos
- RF07: Atualizar status
- RF08: Visualizar tarefas em lista
- RNF02: Interface simples e intuitiva

### Tela de Calendário
- RF09: Visualizar tarefas em calendário
- RNF02: Interface simples e intuitiva

---

## 📝 Sugestões de Legendas para o Documento

### Para Login
> "Figura X: Tela de login do sistema UniTask, permitindo autenticação de usuários cadastrados e acesso ao modo demonstração para avaliação do protótipo."

### Para Dashboard
> "Figura X: Dashboard do UniTask apresentando estatísticas em tempo real, próximas tarefas e ações rápidas para facilitar a navegação do estudante."

### Para Lista de Tarefas
> "Figura X: Tela de gerenciamento de tarefas acadêmicas com recursos de busca, filtros por status e prioridade, e ações de CRUD completo."

### Para Calendário
> "Figura X: Visualização em calendário mensal das tarefas acadêmicas, com indicadores visuais coloridos e painel de detalhes por data selecionada."

---

## ✅ Validação das Capturas

Antes de finalizar, verifique se as capturas mostram:

1. **Clareza**: Texto legível, imagens nítidas
2. **Completude**: Todos os elementos principais visíveis
3. **Consistência**: Mesmo estilo, resolução e tema em todas
4. **Qualidade**: Formato PNG ou JPG em alta resolução
5. **Contexto**: Dados que fazem sentido (datas coerentes, nomes apropriados)
6. **Profissionalismo**: Sem erros de ortografia, dados inconsistentes

---

## 🚀 Dados Demo Pré-carregados

O sistema possui dados de demonstração incluindo:

### Usuário Demo
- Nome: Lucas Almeida (baseado na Persona 01)
- Email: lucas.almeida@email.com
- Curso: Sistemas de Informação

### Tarefas Demo (exemplos)
1. Projeto Integrador - Entrega Final
2. Prova de Cálculo II
3. Trabalho de Engenharia de Software
4. Apresentação de TCC
5. Lista de Exercícios - Algoritmos

Cada tarefa possui:
- Diferentes disciplinas
- Diferentes prioridades (alta, média, baixa)
- Diferentes status (pendente, em progresso, concluída)
- Datas variadas (passadas, hoje, futuras)

---

## 📞 Próximos Passos

Após capturar as telas:

1. Organize as imagens na pasta do seu projeto
2. Insira no documento com legendas apropriadas
3. Referencie cada imagem no texto
4. Explique a relação de cada tela com os requisitos funcionais
5. Destaque os requisitos não funcionais atendidos

---

**Data de criação**: 24/02/2026  
**Sistema**: UniTask v1.0  
**Projeto**: Projeto Integrador I  
**Disciplina**: Projeto Integrador I

