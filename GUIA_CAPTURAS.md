# Guia Prático: Como Capturar Screenshots Profissionais do UniTask

---

## 🎯 Objetivo

Este guia fornece instruções passo a passo para capturar screenshots de alta qualidade do sistema UniTask para inclusão na documentação do Projeto Integrador I.

---

## 📋 Pré-requisitos

### Software Necessário
- Navegador web atualizado (Chrome, Firefox, Edge ou Safari)
- Ferramenta de captura de tela (veja recomendações abaixo)
- Editor de imagens básico (opcional, para ajustes finais)

### Preparação do Ambiente

1. **Limpe o cache do navegador**
   - Chrome: `Ctrl+Shift+Del` (Windows) ou `Cmd+Shift+Del` (Mac)
   - Selecione "Imagens e arquivos em cache"
   - Clique em "Limpar dados"

2. **Configure a resolução da janela**
   - Recomendado: 1920x1080 (Full HD) para desktop
   - Para mobile: Use as ferramentas de desenvolvedor (F12) e selecione um dispositivo

3. **Use modo anônito/privado** (opcional mas recomendado)
   - Chrome: `Ctrl+Shift+N` (Windows) ou `Cmd+Shift+N` (Mac)
   - Garante uma captura limpa sem extensões interferindo

---

## 🛠️ Ferramentas Recomendadas

### Windows
1. **Ferramenta de Captura** (nativa)
   - Atalho: `Win + Shift + S`
   - Permite selecionar área específica
   - Salva automaticamente na área de transferência

2. **Snipping Tool** (nativa)
   - Pesquise "Ferramenta de Captura" no menu iniciar
   - Mais recursos que a ferramenta básica

3. **ShareX** (gratuito, avançado)
   - Download: https://getsharex.com/
   - Recursos profissionais
   - Anotações e edições

### macOS
1. **Screenshot nativo**
   - `Cmd + Shift + 3`: Tela inteira
   - `Cmd + Shift + 4`: Selecionar área
   - `Cmd + Shift + 5`: Menu de opções

2. **CleanShot X** (pago, muito profissional)
   - Recursos avançados de captura
   - Anotações elegantes

### Extensões do Navegador (Multiplataforma)
1. **Awesome Screenshot**
   - Captura página inteira ou área
   - Anotações embutidas
   - Chrome/Firefox/Edge

2. **Nimbus Screenshot**
   - Captura e edição
   - Vídeo também

3. **Full Page Screen Capture**
   - Captura página completa com scroll
   - Útil para capturas longas

---

## 📸 Processo de Captura - Passo a Passo

### 1. Acesse o Sistema

```
1. Abra o navegador
2. Acesse: http://localhost:XXXX (ou a URL onde o sistema está rodando)
3. Aguarde o carregamento completo
```

### 2. Prepare os Dados Demo

**Opção A: Use o Modo Demo (Recomendado)**
```
1. Na tela de login, clique em "Entrar no Modo Demo"
2. O sistema carregará automaticamente:
   - Usuário: Lucas Almeida
   - 12 tarefas pré-cadastradas
   - Diferentes status e prioridades
```

**Opção B: Cadastre Manualmente**
```
1. Clique em "Cadastrar"
2. Preencha os dados:
   - Nome: Lucas Almeida
   - Email: lucas@email.com
   - Senha: senha123
   - Curso: Sistemas de Informação
3. Clique em "Cadastrar"
```

### 3. Capturas Obrigatórias

#### 📱 Captura 1: Tela de Login
```
Localização: / (raiz)
Resolução: 1920x1080
O que mostrar: 
  - Logo do UniTask
  - Botão "Entrar no Modo Demo" (destacado)
  - Formulário de login com campos vazios
  - Link "Sobre o Projeto"
Arquivo: unitask-01-login.png
```

**Instruções**:
1. Acesse a página raiz
2. NÃO preencha os campos
3. Capture a tela inteira ou só a área do conteúdo central
4. Salve como PNG em alta qualidade

---

#### 📱 Captura 2: Tela de Cadastro
```
Localização: / (clique em "Cadastrar")
Resolução: 1920x1080
O que mostrar:
  - Aba "Cadastrar" ativa
  - Todos os campos do formulário
  - Campos vazios ou parcialmente preenchidos
Arquivo: unitask-02-cadastro.png
```

**Instruções**:
1. Clique na aba "Cadastrar"
2. Opcionalmente, preencha os campos para demonstração
3. Capture antes de submeter
4. Salve como PNG

---

#### 📱 Captura 3: Dashboard Completo
```
Localização: /dashboard
Resolução: 1920x1080
O que mostrar:
  - Cards de estatísticas (4 cards)
  - Alerta de tarefas atrasadas (se houver)
  - Lista de próximas tarefas (5 itens)
  - Ações rápidas (3 cards)
Arquivo: unitask-03-dashboard.png
```

**Instruções**:
1. Entre com o modo demo
2. Aguarde o redirecionamento para /dashboard
3. Aguarde o carregamento completo de todos os dados
4. Role a página para o topo
5. Capture a página inteira (pode precisar de scroll)
6. Se a página for muito longa, capture em duas partes:
   - unitask-03a-dashboard-top.png (parte superior)
   - unitask-03b-dashboard-bottom.png (parte inferior)

---

#### 📱 Captura 4: Lista de Tarefas
```
Localização: /tasks
Resolução: 1920x1080
O que mostrar:
  - Cabeçalho com botão "Nova Tarefa"
  - Barra de filtros (busca, status, prioridade)
  - Lista de tarefas (pelo menos 5 visíveis)
  - Tarefas em diferentes status e prioridades
Arquivo: unitask-04-lista-tarefas.png
```

**Instruções**:
1. Clique em "Tarefas" no menu
2. Aguarde o carregamento
3. NÃO aplique filtros (mostre todas)
4. Capture a página com várias tarefas visíveis
5. Salve como PNG

---

#### 📱 Captura 5: Modal de Nova Tarefa
```
Localização: /tasks (clique em "Nova Tarefa")
Resolução: 1920x1080
O que mostrar:
  - Modal aberto centralmente
  - Todos os campos do formulário
  - Campos vazios
Arquivo: unitask-05-modal-nova-tarefa.png
```

**Instruções**:
1. Na tela de tarefas, clique em "Nova Tarefa"
2. Aguarde o modal abrir completamente
3. NÃO preencha os campos
4. Capture a tela inteira incluindo o fundo escurecido
5. Salve como PNG

**Dica**: Se preferir mostrar o formulário preenchido:
```
Título: Trabalho de Engenharia de Software
Descrição: Desenvolver um sistema de gerenciamento de biblioteca
Disciplina: Engenharia de Software
Data: [escolha uma data futura]
Status: Pendente
Prioridade: Alta
```

---

#### 📱 Captura 6: Modal de Edição de Tarefa
```
Localização: /tasks (clique no ícone de editar em uma tarefa)
Resolução: 1920x1080
O que mostrar:
  - Modal aberto com dados preenchidos
  - Todos os campos visíveis
Arquivo: unitask-06-modal-editar-tarefa.png
```

**Instruções**:
1. Na lista de tarefas, clique no ícone de lápis (editar)
2. Aguarde o modal abrir com os dados
3. Capture mostrando os campos preenchidos
4. Salve como PNG

---

#### 📱 Captura 7: Calendário - Visão Mensal
```
Localização: /calendar
Resolução: 1920x1080
O que mostrar:
  - Grade do calendário completa
  - Vários dias com indicadores de tarefas
  - Painel lateral de detalhes (sem data selecionada)
  - Legenda de cores
Arquivo: unitask-07-calendario.png
```

**Instruções**:
1. Clique em "Calendário" no menu
2. Aguarde o carregamento
3. NÃO selecione nenhuma data
4. Capture a visão geral do mês
5. Salve como PNG

**Dica**: Use os botões de navegação (< >) para encontrar um mês com muitas tarefas.

---

#### 📱 Captura 8: Calendário - Detalhes do Dia
```
Localização: /calendar (clique em um dia com tarefas)
Resolução: 1920x1080
O que mostrar:
  - Calendário com um dia selecionado
  - Painel lateral com lista de tarefas do dia
  - Pelo menos 2-3 tarefas visíveis no painel
Arquivo: unitask-08-calendario-detalhes.png
```

**Instruções**:
1. No calendário, clique em um dia que tenha tarefas (com indicadores coloridos)
2. Aguarde o painel lateral atualizar
3. Verifique que as tarefas estão sendo exibidas
4. Capture a tela completa
5. Salve como PNG

---

### 4. Capturas Opcionais (Complementares)

#### 📱 Captura 9: Filtros Aplicados
```
Localização: /tasks (com filtros ativos)
Arquivo: unitask-09-filtros-aplicados.png
```

**Instruções**:
1. Na tela de tarefas
2. Digite algo na busca (ex: "Projeto")
3. Selecione um filtro de status (ex: "Em Progresso")
4. Selecione um filtro de prioridade (ex: "Alta")
5. Capture mostrando os filtros ativos e resultados filtrados
6. Salve como PNG

---

#### 📱 Captura 10: Alerta de Tarefas Atrasadas
```
Localização: /dashboard
Arquivo: unitask-10-alerta-atrasado.png
```

**Instruções**:
1. Certifique-se de que há tarefas atrasadas (o modo demo já inclui)
2. Vá para o dashboard
3. Capture focando no alerta vermelho de tarefas atrasadas
4. Pode ser uma captura parcial da tela, focada no alerta
5. Salve como PNG

---

#### 📱 Captura 11: Notificação (Toast)
```
Localização: Qualquer tela após uma ação
Arquivo: unitask-11-notificacao.png
Timing: Rápido! A notificação some em segundos
```

**Instruções**:
1. Execute uma ação que gere notificação:
   - Criar uma tarefa
   - Editar uma tarefa
   - Excluir uma tarefa
2. RAPIDAMENTE capture a tela enquanto o toast está visível
3. A notificação aparece no canto (geralmente inferior direito)
4. Pode precisar de várias tentativas
5. Salve como PNG

---

#### 📱 Captura 12: Modal "Sobre o Projeto"
```
Localização: Qualquer tela (clique em "Sobre")
Arquivo: unitask-12-sobre-projeto.png
```

**Instruções**:
1. Clique no botão/link "Sobre o Projeto"
2. Aguarde o modal abrir
3. Capture a tela completa com o modal aberto
4. Salve como PNG

---

#### 📱 Capturas 13-15: Versão Mobile

```
Arquivo: unitask-13-mobile-login.png
Arquivo: unitask-14-mobile-dashboard.png
Arquivo: unitask-15-mobile-menu.png
```

**Instruções**:
1. Pressione F12 para abrir DevTools
2. Clique no ícone de dispositivo móvel (ou Ctrl+Shift+M)
3. Selecione um dispositivo: iPhone X ou iPhone 12/13 Pro (375x812)
4. Navegue normalmente pelo sistema
5. Capture as telas principais
6. Para o menu mobile:
   - Clique no ícone hamburguer (☰)
   - Capture com o menu aberto
7. Salve como PNG

---

## ✨ Dicas para Capturas Profissionais

### Qualidade da Imagem

1. **Formato**: Sempre salve como PNG (melhor qualidade, sem compressão)
2. **Resolução**: 
   - Desktop: 1920x1080 ou 1440x900
   - Mobile: 375x812 (iPhone X)
3. **DPI**: Se possível, configure para 144 DPI ou superior

### Consistência Visual

1. **Mesma sessão**: Capture todas as telas na mesma sessão para manter:
   - Mesmo horário exibido
   - Mesmas tarefas
   - Mesmo usuário

2. **Mesmo zoom**: Mantenha o zoom do navegador em 100%
   - Verifique: Ctrl+0 (Windows) ou Cmd+0 (Mac)

3. **Mesma largura**: Se capturar janelas individuais, mantenha o tamanho consistente

### Enquadramento

1. **Tela inteira ou conteúdo?**
   - **Tela inteira**: Mostra barra de endereço, aba do navegador
     - Vantagem: Mais realista
     - Desvantagem: Informações desnecessárias
   
   - **Apenas conteúdo**: Captura só a área do site
     - Vantagem: Foco no sistema
     - Desvantagem: Menos contexto

   **Recomendação**: Apenas conteúdo (sem barra do navegador)

2. **Centralização**: Ao capturar modais, certifique-se de que estão centralizados

3. **Scroll**: Para páginas longas, considere:
   - Captura em partes (top/bottom)
   - Uso de extensão para captura de página completa
   - Ajustar zoom para mostrar mais conteúdo

### Conteúdo

1. **Dados realistas**: Use os dados demo que são contextualmente apropriados
2. **Sem dados pessoais**: Não use emails, nomes ou informações reais
3. **Erros**: Não capture telas com erros ou problemas visuais
4. **Estados vazios**: Considere também capturar estados sem dados (lista vazia) se relevante

---

## 🎨 Pós-Processamento (Opcional)

Se desejar melhorar as capturas:

### Ferramentas de Edição

1. **GIMP** (gratuito, avançado)
   - Download: https://www.gimp.org/
   - Similar ao Photoshop

2. **Paint.NET** (Windows, gratuito)
   - Download: https://www.getpaint.net/
   - Simples e eficaz

3. **Photopea** (online, gratuito)
   - Acesso: https://www.photopea.com/
   - Editor online estilo Photoshop

### Edições Recomendadas

1. **Recorte**: Remova bordas desnecessárias
2. **Redimensionamento**: Ajuste para tamanho consistente
3. **Compressão**: Reduza tamanho do arquivo se necessário
   - TinyPNG: https://tinypng.com/
   - Mantenha qualidade > 90%

### Anotações (Opcional para Apresentações)

Se precisar adicionar anotações:
- Setas: Use cor vermelha ou laranja (#FF5733)
- Círculos/Destaques: Use cor semi-transparente
- Texto: Use fonte sans-serif, tamanho legível
- Numeração: Se explicar passo a passo

**Atenção**: Para documentação formal, evite anotações nas imagens. Prefira explicar no texto.

---

## 📁 Organização dos Arquivos

### Estrutura de Pastas Recomendada

```
projeto-integrador/
├── documentacao/
│   ├── documento-final.docx
│   └── imagens/
│       ├── telas/
│       │   ├── unitask-01-login.png
│       │   ├── unitask-02-cadastro.png
│       │   ├── unitask-03-dashboard.png
│       │   ├── unitask-04-lista-tarefas.png
│       │   ├── unitask-05-modal-nova-tarefa.png
│       │   ├── unitask-06-modal-editar-tarefa.png
│       │   ├── unitask-07-calendario.png
│       │   ├── unitask-08-calendario-detalhes.png
│       │   └── [opcionais...]
│       └── diagramas/
│           ├── diagrama-casos-uso.png
│           ├── diagrama-classes.png
│           └── [outros diagramas...]
└── prototipo/
    └── [código do sistema]
```

### Nomenclatura dos Arquivos

**Padrão**: `unitask-[numero]-[descricao-curta].png`

Exemplos:
- ✅ `unitask-01-login.png`
- ✅ `unitask-03-dashboard.png`
- ❌ `Screenshot 2026-02-24 at 10.30.45.png`
- ❌ `tela1.png`

**Vantagens**:
- Ordenação automática
- Fácil identificação
- Profissional

---

## 📄 Inserção no Documento Word

### Método Recomendado

1. **Insira via Menu**:
   ```
   Inserir > Imagens > Este Dispositivo...
   ```

2. **Configure a Legenda**:
   ```
   Clique com botão direito na imagem > Inserir Legenda
   Rótulo: Figura
   Posição: Abaixo da imagem selecionada
   ```

3. **Formate a Imagem**:
   ```
   Clique na imagem > Formatar > Tamanho
   Largura: 15-16 cm (para documento A4)
   Mantenha proporções travadas
   ```

4. **Centralize**:
   ```
   Selecione a imagem > Alinhamento > Centralizar
   ```

### Exemplo de Formatação

```
[IMAGEM CENTRALIZADA]

Figura 1: Tela de login do sistema UniTask, permitindo autenticação 
de usuários cadastrados e acesso ao modo demonstração para avaliação 
do protótipo.
Fonte: Elaborado pelo autor (2026).
```

### Dicas para Word

1. **Quebra de página**: Evite imagens "órfãs" no final da página
2. **Quebra de seção**: Use se precisar mudar orientação (paisagem/retrato)
3. **Compressão**: Word > Arquivo > Reduzir Tamanho do Arquivo (se doc ficar muito grande)
4. **Backup**: Mantenha cópia das imagens originais fora do documento

---

## ✅ Checklist Final

Antes de finalizar, verifique:

### Qualidade Técnica
- [ ] Todas as imagens estão em formato PNG
- [ ] Resolução consistente em todas as capturas
- [ ] Imagens nítidas e legíveis
- [ ] Sem barras de scroll desnecessárias
- [ ] Sem informações pessoais visíveis

### Completude
- [ ] Todas as 8 capturas obrigatórias realizadas
- [ ] Capturas opcionais conforme necessidade
- [ ] Versão mobile (se requerido)
- [ ] Estados diferentes do sistema (vazio, com dados, erro, etc.)

### Organização
- [ ] Arquivos nomeados corretamente
- [ ] Organizados em pasta apropriada
- [ ] Lista de figuras atualizada (se aplicável)
- [ ] Referências no texto corretas

### Documentação
- [ ] Cada imagem tem legenda apropriada
- [ ] Figuras numeradas sequencialmente
- [ ] Fonte mencionada (Elaborado pelo autor, 2026)
- [ ] Imagens referenciadas no texto

---

## 🚨 Problemas Comuns e Soluções

### Problema: Imagem borrada/pixelizada
**Solução**: 
- Aumente a resolução da janela
- Certifique-se de que o zoom está em 100%
- Use formato PNG, não JPG
- Evite redimensionar após captura

### Problema: Modal não aparece centralizado
**Solução**:
- Maximize a janela do navegador
- Aguarde a animação de abertura completar
- Recarregue a página e tente novamente

### Problema: Cores diferentes entre capturas
**Solução**:
- Use o mesmo navegador para todas as capturas
- Desative modo escuro/claro automático
- Verifique configurações de cor do monitor

### Problema: Dados demo não aparecem
**Solução**:
- Limpe o LocalStorage do navegador (F12 > Application > Local Storage > Clear)
- Recarregue a página
- Clique novamente em "Modo Demo"

### Problema: Notificação (toast) some muito rápido
**Solução**:
- Use ferramenta de captura com delay (5 segundos)
- Grave um vídeo e extraia frame
- Peça ajuda a alguém (uma pessoa realiza ação, outra captura)

### Problema: Arquivo muito grande para anexar
**Solução**:
- Comprima com TinyPNG ou similar
- Reduza resolução para 1440x900
- Converta para JPEG (qualidade 90%) se permitido

---

## 📞 Dicas Específicas por Sistema Operacional

### Windows 10/11

**Atalhos úteis**:
- `Win + Shift + S`: Captura de área
- `Win + PrtScn`: Captura tela inteira e salva automaticamente
- `Alt + PrtScn`: Captura janela ativa apenas

**Localização dos arquivos**:
- Pasta: `C:\Users\[seu-usuario]\Pictures\Screenshots\`

### macOS

**Atalhos úteis**:
- `Cmd + Shift + 3`: Tela inteira
- `Cmd + Shift + 4`: Selecionar área
- `Cmd + Shift + 4 + Space`: Capturar janela específica
- `Cmd + Shift + 5`: Menu de captura completo

**Localização dos arquivos**:
- Desktop (por padrão)
- Ou pasta configurada em Preferências

**Dica**: Segure `Control` junto com o atalho para copiar para área de transferência ao invés de salvar

### Linux (Ubuntu/Debian)

**Atalhos úteis**:
- `PrtScn`: Tela inteira
- `Shift + PrtScn`: Selecionar área
- `Alt + PrtScn`: Janela ativa

**Ferramenta**: Gnome Screenshot (nativa)

---

## 🎓 Considerações Acadêmicas

### Direitos Autorais
- Você é o autor das capturas
- Mencione "Elaborado pelo autor (2026)" nas legendas
- Não há problemas de copyright pois é seu próprio trabalho

### Normas ABNT
Se sua instituição exige ABNT:
- Legendas devem estar **abaixo** da imagem
- Fonte: Times New Roman ou Arial, tamanho 10 ou 12
- Espaçamento simples na legenda
- Numeração sequencial: Figura 1, Figura 2, etc.

### Apresentação
Se for apresentar o projeto:
- Considere versões em alta resolução (pode fazer zoom)
- Prepare também GIFs ou vídeos curtos das interações
- Tenha o sistema rodando ao vivo como backup

---

## 📚 Recursos Adicionais

### Tutoriais em Vídeo
- YouTube: "Como fazer screenshot profissional"
- YouTube: "Captura de tela para documentação técnica"

### Documentação Oficial
- Chrome DevTools: https://developer.chrome.com/docs/devtools/
- Firefox Developer Tools: https://developer.mozilla.org/pt-BR/docs/Tools

### Comunidades
- Stack Overflow: Para problemas técnicos
- Reddit r/webdev: Dicas de apresentação

---

## ✨ Última Dica

**Faça as capturas com calma e atenção!**

É melhor dedicar 1-2 horas para fazer capturas profissionais de qualidade do que ter que refazer depois por problemas de qualidade ou conteúdo.

Lembre-se: estas imagens farão parte da avaliação do seu Projeto Integrador I e demonstram não apenas o sistema desenvolvido, mas também seu profissionalismo e atenção aos detalhes.

---

**Boa sorte com suas capturas e com o Projeto Integrador! 🎓📸**

