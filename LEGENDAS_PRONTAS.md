# Legendas e Descrições Prontas para Uso

Este documento contém textos prontos para copiar e colar no seu documento do Projeto Integrador I.

---

## 📝 LEGENDA PARA FIGURA 1 - Tela de Login

### Legenda Curta (padrão):
```
Figura 1: Tela de login do sistema UniTask.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa (descritiva):
```
Figura 1: Tela de login do sistema UniTask, permitindo autenticação de usuários 
cadastrados e acesso ao modo demonstração para avaliação do protótipo.
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 1 apresenta a tela inicial do sistema UniTask. Esta interface foi projetada 
seguindo princípios de design minimalista e intuitivo, facilitando o acesso dos 
estudantes ao sistema. O logo do sistema utiliza o ícone de um capelo acadêmico 
sobre fundo azul, reforçando a identidade visual voltada ao ambiente universitário.

A tela oferece duas funcionalidades principais através de abas alternáveis: login 
para usuários já cadastrados e cadastro para novos usuários. Adicionalmente, o 
botão "Entrar no Modo Demo" permite acesso rápido ao sistema com dados pré-carregados, 
facilitando a avaliação e demonstração das funcionalidades implementadas.

Esta tela implementa os seguintes requisitos:
- RF01: Cadastro de usuários (alunos)
- RF02: Login e logout
- RNF02: Interface simples e intuitiva
- RNF03: Design responsivo
- RNF04: Autenticação por login e senha
```

---

## 📝 LEGENDA PARA FIGURA 2 - Tela de Cadastro

### Legenda Curta:
```
Figura 2: Formulário de cadastro de novos usuários no sistema UniTask.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 2: Formulário de cadastro de novos usuários com campos obrigatórios 
identificados (nome completo, email, senha e curso).
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 2 ilustra o formulário de cadastro de novos usuários. Ao alternar para 
a aba "Cadastrar", o sistema apresenta campos adicionais necessários para o 
registro inicial do estudante, incluindo nome completo, curso de graduação, 
além do email e senha utilizados na autenticação.

O formulário implementa validações essenciais, como verificação de campos 
obrigatórios e unicidade do email, garantindo a integridade dos dados cadastrais 
conforme especificado no RF01 (Cadastro de usuários). A interface mantém o padrão 
visual estabelecido na tela de login, promovendo consistência na experiência do 
usuário.
```

---

## 📝 LEGENDA PARA FIGURA 3 - Dashboard

### Legenda Curta:
```
Figura 3: Dashboard com visão geral das atividades acadêmicas do estudante.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 3: Dashboard do UniTask apresentando estatísticas em tempo real 
(total, pendentes, em progresso e concluídas), lista de próximas tarefas 
e ações rápidas para facilitar a navegação.
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 3 apresenta o Dashboard, tela principal exibida após autenticação 
bem-sucedida. Esta interface foi projetada para oferecer ao estudante uma 
visão consolidada e imediata de suas atividades acadêmicas.

Na parte superior, quatro cards estatísticos apresentam indicadores-chave:
- Total de Tarefas: Quantidade geral de atividades cadastradas
- Pendentes: Tarefas aguardando início (ícone de relógio, cor âmbar)
- Em Progresso: Atividades em desenvolvimento (ícone de gráfico, cor roxa)
- Concluídas: Tarefas finalizadas com percentual de conclusão (ícone de check, cor verde)

A seção "Próximas Tarefas" exibe as cinco atividades mais urgentes, ordenadas 
por proximidade do prazo, apresentando título, disciplina, prioridade e indicador 
temporal (Hoje, Amanhã, X dias, ou Atrasada). Quando há tarefas vencidas, o 
sistema exibe automaticamente um alerta destacado em vermelho, incentivando o 
estudante a revisar suas pendências.

A área de "Ações Rápidas" oferece atalhos para as funcionalidades mais utilizadas, 
reduzindo o número de cliques necessários para executar tarefas comuns. Esta 
organização atende às necessidades identificadas nas personas Lucas Almeida e 
Ana Paula Santos, que requerem visualização rápida e eficiente de suas 
responsabilidades acadêmicas.
```

---

## 📝 LEGENDA PARA FIGURA 4 - Lista de Tarefas

### Legenda Curta:
```
Figura 4: Tela de gerenciamento completo de tarefas acadêmicas.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 4: Tela de gerenciamento de tarefas acadêmicas com recursos de busca 
textual, filtros por status e prioridade, e operações de CRUD completo 
(criar, ler, atualizar e excluir).
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 4 ilustra a tela de gerenciamento de tarefas, núcleo funcional do 
sistema UniTask. Esta interface implementa o conjunto completo de requisitos 
funcionais relacionados às tarefas (RF03 a RF08).

O cabeçalho apresenta o botão "Nova Tarefa" em destaque, facilitando o cadastro 
de novas atividades. Logo abaixo, a barra de filtros oferece três mecanismos 
simultâneos de refinamento:
- Busca textual: Pesquisa em títulos, disciplinas e descrições
- Filtro por status: Pendente, Em Progresso, Concluída ou Todos
- Filtro por prioridade: Alta, Média, Baixa ou Todas

Cada tarefa é apresentada em formato de card contendo:
- Indicador visual de status (clicável para alteração rápida): círculo vazio 
  (pendente), relógio (em progresso) ou check verde (concluída)
- Título e descrição da atividade
- Badges informativos coloridos:
  * Disciplina associada (azul)
  * Nível de prioridade (vermelho para alta, âmbar para média, cinza para baixa)
  * Status atual (verde para concluída, roxo para em progresso, cinza para pendente)
  * Data de entrega (destacada em vermelho quando atrasada)
- Botões de ação: ícone de lápis para edição e lixeira para exclusão

O sistema implementa feedback visual diferenciado para tarefas atrasadas, 
apresentando-as com fundo levemente avermelhado, facilitando a identificação 
imediata pelo estudante. Esta funcionalidade endereça diretamente uma das 
principais dores identificadas nas personas: o esquecimento de prazos.
```

---

## 📝 LEGENDA PARA FIGURA 5 - Modal Nova Tarefa

### Legenda Curta:
```
Figura 5: Modal de cadastro de nova tarefa acadêmica.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 5: Modal de cadastro de nova tarefa com campos para título, descrição, 
disciplina, data de entrega, status e prioridade, com indicação visual de 
campos obrigatórios.
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 5 apresenta o modal de cadastro de novas tarefas, implementando o 
RF03 (Cadastro de tarefas acadêmicas). A interface modal foi escolhida por 
manter o contexto visual da tela anterior enquanto foca a atenção do usuário 
no formulário.

O formulário estrutura-se nos seguintes campos:
- Título* (obrigatório): Nome descritivo da atividade
- Descrição (opcional): Detalhamento adicional da tarefa
- Disciplina* (obrigatório): Matéria acadêmica associada
- Data de Entrega* (obrigatório): Prazo final, implementando RF06
- Status (seletor): Estado inicial da tarefa (pendente, em progresso, concluída)
- Prioridade (seletor): Nível de urgência (baixa, média, alta)

Os campos obrigatórios são marcados com asterisco vermelho (*), seguindo 
convenções de usabilidade web. O sistema valida o preenchimento destes campos 
antes de permitir o salvamento, exibindo mensagem de erro via notificação toast 
caso algum campo obrigatório esteja vazio.

Os botões "Cancelar" e "Criar" oferecem ao usuário controle claro sobre a ação, 
permitindo abortar a operação sem alterações no sistema. Ao confirmar, o sistema 
salva a tarefa, atualiza a listagem e exibe notificação de sucesso, implementando 
feedback imediato conforme boas práticas de UX.
```

---

## 📝 LEGENDA PARA FIGURA 6 - Modal Editar Tarefa

### Legenda Curta:
```
Figura 6: Modal de edição de tarefa existente.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 6: Modal de edição de tarefa com campos pré-preenchidos, permitindo 
atualização de informações e status da atividade acadêmica.
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 6 ilustra o modal de edição de tarefas, implementando os requisitos 
RF04 (Editar tarefas) e RF07 (Atualizar status). A interface é idêntica ao 
modal de criação, promovendo consistência, porém os campos são pré-preenchidos 
com os dados atuais da tarefa selecionada.

Esta abordagem permite ao estudante:
- Corrigir informações inseridas incorretamente
- Atualizar descrições conforme evolução da atividade
- Ajustar prazos quando necessário
- Modificar o status de execução (pendente → em progresso → concluída)
- Reclassificar a prioridade conforme mudanças no contexto acadêmico

O título do modal altera-se de "Nova Tarefa" para "Editar Tarefa", e o botão 
de confirmação muda de "Criar" para "Salvar", fornecendo clareza sobre a ação 
sendo executada. Estas sutilezas de interface contribuem para uma experiência 
intuitiva, especialmente importante para o público-alvo (estudantes universitários 
que frequentemente alternam entre múltiplas plataformas digitais).
```

---

## 📝 LEGENDA PARA FIGURA 7 - Calendário

### Legenda Curta:
```
Figura 7: Visualização de tarefas em formato de calendário mensal.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 7: Calendário mensal apresentando tarefas acadêmicas com indicadores 
visuais coloridos por prioridade/status, painel de detalhes e legenda explicativa.
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 7 apresenta a visualização em calendário, implementando o RF09 
(Visualização de tarefas em calendário). Esta perspectiva temporal complementa 
a visualização em lista, atendendo às diferentes preferências cognitivas dos 
usuários conforme identificado nas pesquisas de UX.

O calendário estrutura-se em:

**Cabeçalho de navegação**: Exibe o mês e ano atual com controles para navegação 
temporal (botões de seta para mês anterior/próximo) e botão "Hoje" para retorno 
rápido à data atual.

**Grade do calendário**: Disposição tradicional de 7 colunas (domingo a sábado) 
por até 6 semanas, totalizando 42 células. O dia atual é destacado com borda e 
fundo azul claro.

**Indicadores de tarefas**: Cada dia com atividades cadastradas apresenta de 1 a 3 
barras horizontais coloridas, seguindo o código:
- Verde: Tarefa concluída
- Vermelho: Alta prioridade ou tarefa atrasada
- Âmbar: Média prioridade
- Azul: Baixa prioridade

Quando um dia possui mais de 3 tarefas, o sistema exibe um contador "+X" indicando 
as atividades adicionais não representadas visualmente, evitando poluição visual 
mantendo a legibilidade.

**Painel lateral**: Ao selecionar uma data, este painel atualiza-se dinamicamente 
apresentando a lista completa de tarefas do dia, com seus respectivos detalhes 
(título, disciplina, prioridade e status).

**Legenda**: Localizada abaixo do calendário, explica o sistema de cores, tornando 
a interface autoexplicativa mesmo para usuários novos.

Esta visualização endereça especificamente a necessidade das personas de "visualizar 
compromissos futuros" e "organizar atividades acadêmicas", oferecendo perspectiva 
temporal que auxilia no planejamento semanal e mensal.
```

---

## 📝 LEGENDA PARA FIGURA 8 - Calendário com Detalhes

### Legenda Curta:
```
Figura 8: Painel de detalhes do calendário exibindo tarefas de data específica.
Fonte: Elaborado pelo autor (2026).
```

### Legenda Completa:
```
Figura 8: Calendário com data selecionada e painel lateral detalhando as 
tarefas acadêmicas agendadas para o dia.
Fonte: Elaborado pelo autor (2026).
```

### Texto para o corpo do documento:
```
A Figura 8 demonstra a interatividade do calendário quando o usuário seleciona 
uma data específica. O painel lateral atualiza-se instantaneamente, exibindo o 
título "Tarefas de [data]" seguido da listagem completa das atividades daquele dia.

Cada tarefa no painel é apresentada em card compacto contendo:
- Título da atividade
- Disciplina associada
- Badge de prioridade (alta, média ou baixa)
- Badge de status (pendente, em progresso ou concluída)

A implementação desta funcionalidade permite ao estudante:
1. Visualizar rapidamente a carga de trabalho de um dia específico
2. Identificar dias sobrecarregados que requerem redistribuição de tarefas
3. Planejar dedicação de tempo com base na concentração de prazos
4. Verificar se há conflito de múltiplas entregas no mesmo dia

O sistema diferencia visualmente tarefas atrasadas aplicando fundo levemente 
avermelhado ao card, mesmo na visualização de calendário, mantendo consistência 
com a tela de lista de tarefas e reforçando alertas visuais importantes.
```

---

## 📝 LEGENDAS PARA FIGURAS OPCIONAIS

### Figura 9 - Filtros Aplicados
```
Figura 9: Tela de tarefas com filtros aplicados (busca, status e prioridade) 
demonstrando a funcionalidade de refinamento de resultados.
Fonte: Elaborado pelo autor (2026).
```

### Figura 10 - Alerta de Atrasado
```
Figura 10: Alerta visual destacado no dashboard informando sobre tarefas 
com prazo vencido.
Fonte: Elaborado pelo autor (2026).
```

### Figura 11 - Notificação
```
Figura 11: Notificação toast exibindo feedback ao usuário após execução 
de ação no sistema.
Fonte: Elaborado pelo autor (2026).
```

### Figura 12 - Sobre o Projeto
```
Figura 12: Modal informativo contendo detalhes sobre o Projeto Integrador I 
e o sistema UniTask.
Fonte: Elaborado pelo autor (2026).
```

### Figura 13 - Mobile Login
```
Figura 13: Versão mobile da tela de login demonstrando a responsividade do sistema.
Fonte: Elaborado pelo autor (2026).
```

### Figura 14 - Mobile Dashboard
```
Figura 14: Dashboard em dispositivo móvel com layout adaptado para telas menores.
Fonte: Elaborado pelo autor (2026).
```

### Figura 15 - Mobile Menu
```
Figura 15: Menu de navegação mobile no formato hamburguer expandido.
Fonte: Elaborado pelo autor (2026).
```

---

## 📊 TABELA DE MAPEAMENTO: TELAS × REQUISITOS

Use esta tabela para referenciar quais requisitos são demonstrados em cada tela:

```
Tabela X: Mapeamento entre telas do protótipo e requisitos funcionais/não funcionais

Tela                    | Requisitos Implementados
------------------------|--------------------------------------------------
Login/Cadastro         | RF01, RF02, RNF01, RNF02, RNF03, RNF04
Dashboard              | RF08, RNF02, RNF06
Gerenc. de Tarefas     | RF03, RF04, RF05, RF06, RF07, RF08, RNF02
Calendário             | RF09, RNF02
Sistema de Lembretes   | RNF06
Responsividade         | RNF03

Fonte: Elaborado pelo autor (2026).
```

---

## 💡 DICAS DE REDAÇÃO ACADÊMICA

### Verbos para usar ao descrever as telas:
- apresenta, ilustra, demonstra, exibe, mostra
- implementa, atende, satisfaz (para requisitos)
- permite, possibilita, facilita (para funcionalidades)
- oferece, disponibiliza, fornece (para recursos)

### Estrutura recomendada para cada figura:
1. **Introdução da figura**: "A Figura X apresenta..."
2. **Descrição dos elementos**: "A interface contém..."
3. **Funcionalidades**: "Esta tela permite..."
4. **Requisitos atendidos**: "Implementando os requisitos..."
5. **Relação com personas**: "Atendendo à necessidade de..."

### Conectivos úteis:
- Adição: além disso, adicionalmente, também
- Causa/Consequência: portanto, assim, dessa forma
- Contraste: porém, contudo, no entanto
- Exemplificação: por exemplo, tais como, como

---

## 📋 CHECKLIST DE REVISÃO TEXTUAL

Antes de finalizar, verifique se cada figura tem:
- [ ] Legenda numerada sequencialmente
- [ ] Fonte citada ("Elaborado pelo autor, 2026")
- [ ] Referência no texto antes da figura
- [ ] Descrição dos elementos principais
- [ ] Menção aos requisitos implementados
- [ ] Linguagem formal e objetiva
- [ ] Ortografia e gramática corretas

---

## 🎓 EXEMPLO DE PARÁGRAFO INTRODUTÓRIO PARA A SEÇÃO

Use este texto como introdução da Seção 5 (Protótipo das Telas):

```
Esta seção apresenta o protótipo navegável do sistema UniTask, desenvolvido 
como parte dos entregáveis do Projeto Integrador I. O protótipo implementa 
todos os requisitos funcionais (RF01 a RF09) e não funcionais (RNF01 a RNF06) 
especificados nas seções anteriores deste documento.

As telas foram projetadas seguindo princípios de design centrado no usuário 
(User-Centered Design), considerando as necessidades e características das 
personas Lucas Almeida e Ana Paula Santos, definidas na Seção 3. A interface 
prioriza simplicidade, intuitividade e eficiência, características essenciais 
para o público-alvo de estudantes universitários que frequentemente lidam com 
múltiplas plataformas digitais simultaneamente.

O protótipo foi desenvolvido utilizando tecnologias web modernas (React, 
TypeScript, Tailwind CSS) e é totalmente funcional, utilizando LocalStorage 
do navegador para persistência de dados. Esta implementação permite demonstração 
completa dos fluxos de uso sem necessidade de infraestrutura de backend, sendo 
adequada para a fase de especificação e validação do Projeto Integrador I.

Nas subseções a seguir, cada tela é apresentada individualmente com descrição 
detalhada de seus elementos, funcionalidades implementadas e requisitos atendidos.
```

---

## 🎯 EXEMPLO DE PARÁGRAFO CONCLUSIVO PARA A SEÇÃO

Use este texto como conclusão da Seção 5:

```
As telas apresentadas nesta seção demonstram a viabilidade técnica e a adequação 
da solução proposta às necessidades identificadas no problema de pesquisa. O 
protótipo navegável implementa integralmente os requisitos funcionais e não 
funcionais especificados, oferecendo uma interface intuitiva e responsiva que 
atende às expectativas do público-alvo.

A organização visual e funcional do sistema reflete as melhores práticas de 
design de interfaces web contemporâneas, promovendo experiência do usuário 
consistente e eficiente. O uso de feedback visual imediato (notificações, 
cores indicativas, ícones intuitivos) e a disponibilidade de múltiplas formas 
de visualização (lista e calendário) atendem às diferentes preferências 
cognitivas dos estudantes.

Este protótipo serve como fundação sólida para o desenvolvimento completo do 
sistema na disciplina Projeto Integrador II, onde serão implementadas 
funcionalidades adicionais como autenticação robusta com backend, integração 
com plataformas externas e notificações push, conforme identificado no escopo 
OUT da Seção 2.

A validação deste protótipo com potenciais usuários (estudantes universitários) 
poderá fornecer insights adicionais para refinamentos na próxima fase do projeto, 
assegurando que o produto final atenda plenamente às necessidades reais do 
público-alvo.
```

---

**COMO USAR ESTE DOCUMENTO:**

1. Copie as legendas apropriadas para suas figuras
2. Adapte o texto às normas específicas da sua instituição
3. Ajuste a numeração conforme seu documento
4. Personalize com informações adicionais se necessário
5. Mantenha sempre o tom acadêmico e objetivo

**Observação**: Todos os textos estão em formato pronto para uso, mas podem e 
devem ser adaptados ao seu estilo de escrita e às especificidades do seu projeto.

