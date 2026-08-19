# ❓ FAQ - Perguntas Frequentes - UniTask

Respostas rápidas para as dúvidas mais comuns sobre o sistema e a documentação.

---

## 🚀 EXECUÇÃO DO SISTEMA

### Como executo o sistema pela primeira vez?
```bash
npm install
npm run dev
```
Acesse: `http://localhost:5173`

### O sistema não inicia. O que faço?
```bash
# Tente limpar e reinstalar
rm -rf node_modules
npm install
npm run dev
```

### Qual navegador devo usar?
**Recomendado**: Chrome ou Edge (melhor compatibilidade)  
**Alternativas**: Firefox, Safari

### Preciso de Node.js? Qual versão?
Sim, versão 18 ou superior.  
Verifique: `node --version`

---

## 📱 MODO DEMO

### Como acesso o modo demo?
Clique em **"Entrar no Modo Demo"** na tela de login.

### Quais são as credenciais demo?
```
Email: demo@unitask.com
Senha: demo123
```
(Mas não precisa digitar, o botão "Modo Demo" faz isso automaticamente!)

### Os dados demo não aparecem!
```bash
# Limpe o LocalStorage
F12 > Application > Local Storage > Clear All
F5 (recarregar página)
Clique em "Entrar no Modo Demo"
```

### Quantas tarefas vêm no modo demo?
12 tarefas pré-carregadas, incluindo:
- Tarefas do Projeto Integrador I
- Diferentes status (pendente, em progresso, concluída)
- Diferentes prioridades (alta, média, baixa)
- Tarefas atuais, futuras e atrasadas

### Posso personalizar os dados demo?
Sim! Edite o arquivo: `src/app/utils/demoData.ts`

---

## 📸 CAPTURAS DE TELA

### Quantas capturas preciso fazer?
**Mínimo**: 8 capturas obrigatórias  
**Recomendado**: 8-15 capturas (incluindo opcionais)

### Qual formato de imagem usar?
**PNG** (sempre!)  
- Melhor qualidade
- Sem perda de compressão
- Padrão para documentação técnica

❌ Evite JPG (perde qualidade)

### Qual resolução?
**Desktop**: 1920x1080 (Full HD)  
**Mobile**: 375x812 (iPhone X)

### Como garanto que todas as capturas fiquem iguais?
- Use o mesmo navegador
- Mantenha zoom em 100% (Ctrl+0)
- Faça todas na mesma sessão
- Use os mesmos dados demo
- Mesma resolução de janela

### Ferramenta de captura para Windows?
**Nativa**: `Win + Shift + S` (Snipping Tool)  
**Avançada**: ShareX (gratuito)

### Ferramenta de captura para Mac?
**Nativa**: `Cmd + Shift + 4` (selecionar área)  
**Avançada**: CleanShot X (pago)

### Como capturo a página inteira (com scroll)?
**Extensões do navegador**:
- Full Page Screen Capture
- Awesome Screenshot
- Nimbus Screenshot

### A imagem ficou borrada! Por quê?
Possíveis causas:
- Zoom do navegador diferente de 100%
- Salvou como JPG em vez de PNG
- Redimensionou a imagem depois
- Resolução muito baixa

**Solução**: Ctrl+0 (zoom 100%), salvar PNG, não redimensionar.

### Preciso capturar versão mobile?
**Obrigatório**: Não  
**Recomendado**: Sim (mostra responsividade - RNF03)

Como fazer:
- F12 > ícone de dispositivo móvel
- Selecione iPhone X ou similar
- Capture normalmente

### Como faço para capturar notificações (toast)?
São rápidas! Dicas:
- Use ferramenta com delay de 3-5 segundos
- Ou grave vídeo e extraia frame
- Ou peça ajuda (uma pessoa clica, outra captura)

---

## 📄 DOCUMENTAÇÃO

### Onde encontro o template para o Word?
**TEMPLATE_SECAO_TELAS.md**  
Copie todo o conteúdo e cole na Seção 5 do seu documento.

### E as legendas das figuras?
**LEGENDAS_PRONTAS.md**  
Textos prontos para copiar e colar abaixo de cada imagem.

### Preciso escrever tudo do zero?
**NÃO!** Use os templates prontos:
- TEMPLATE_SECAO_TELAS.md (estrutura completa)
- LEGENDAS_PRONTAS.md (textos das legendas)

Adapte conforme necessário, mas a base está pronta!

### Como referenciar os requisitos?
Use a notação: RF01, RF02, RNF01, etc.

Exemplo:
> "Esta tela implementa os requisitos RF03 (Cadastro de tarefas) e RF06 (Definição de prazos)."

### Quantas palavras tem a Seção 5 completa?
Aproximadamente **5.000 palavras** no template.  
Você pode adicionar ou reduzir conforme necessário.

### Preciso seguir ABNT?
Depende da sua instituição!  
Os templates usam linguagem acadêmica formal e podem ser facilmente adaptados para ABNT.

---

## 🖼️ INSERÇÃO DE IMAGENS NO WORD

### Como insiro as imagens?
```
1. Inserir > Imagens > Este Dispositivo
2. Selecionar arquivo
3. Redimensionar (15-16cm largura)
4. Centralizar
5. Adicionar legenda abaixo
```

### Que tamanho usar no Word?
**Largura**: 15-16 cm  
**Altura**: Proporcional (automático)

Isso garante que a imagem fique legível sem ocupar página inteira.

### Como adiciono legendas?
```
1. Clique com botão direito na imagem
2. Inserir Legenda
3. Rótulo: Figura
4. Posição: Abaixo da imagem selecionada
5. Digite o texto
```

Ou simplesmente digite abaixo da imagem no formato:
```
Figura 1: Descrição da imagem.
Fonte: Elaborado pelo autor (2026).
```

### As imagens deixaram o documento muito grande!
**Soluções**:
1. Word > Arquivo > Compactar Imagens
2. Comprima antes de inserir (TinyPNG.com)
3. Reduza resolução para 1440x900

Mantenha qualidade > 85%

### Como numerar figuras automaticamente?
Use o recurso de legenda do Word:
```
Inserir > Legenda > Figura
```
O Word numerará automaticamente.

---

## 🎯 REQUISITOS E ESCOPO

### Quantos requisitos funcionais o sistema tem?
**9 requisitos funcionais** (RF01 a RF09), todos implementados!

### E não funcionais?
**6 requisitos não funcionais** (RNF01 a RNF06), todos atendidos!

### Como demonstro que implementei um requisito?
- Capture a tela que demonstra o requisito
- Na legenda ou texto, mencione o RF/RNF
- Explique como aquela funcionalidade atende ao requisito

Exemplo:
> "A Figura 4 apresenta a tela de gerenciamento de tarefas, implementando os requisitos RF03 (Cadastro), RF04 (Edição) e RF05 (Exclusão)."

### O que está FORA do escopo?
Conforme documentação:
- Integração com plataformas externas
- App mobile nativo
- Gamificação avançada
- Ambiente de produção
- Notificações reais por email

### Posso adicionar funcionalidades extras?
Para o PI I (documentação), mantenha o escopo definido.  
Para o PI II (implementação), sim!

---

## 🎨 DESIGN E UX

### As cores significam algo específico?
Sim! Sistema de cores consistente:
- **Azul**: Principal, disciplinas
- **Verde**: Concluído, sucesso
- **Vermelho**: Alta prioridade, atrasado, erro
- **Âmbar/Amarelo**: Média prioridade, aviso
- **Cinza**: Baixa prioridade, pendente
- **Roxo**: Em progresso

### O sistema é responsivo?
Sim! Testado em:
- Desktop (≥1024px)
- Tablet (768-1023px)
- Mobile (<768px)

### Posso mudar as cores?
Tecnicamente sim (em `src/styles/theme.css`), mas:
- Para documentação, mantenha o padrão
- Cores têm significado semântico
- Consistência é importante

---

## 👥 PERSONAS E CONTEXTO

### Quem são as personas?
**Persona 01 - Lucas Almeida**
- 21 anos, Sistemas de Informação
- Estudante em tempo integral
- Problema: Múltiplas ferramentas desorganizadas

**Persona 02 - Ana Paula Santos**
- 28 anos, Licenciatura EaD
- Trabalha e estuda
- Problema: Pouco tempo, esquecimentos

### Por que o usuário demo se chama Lucas Almeida?
É a Persona 01 da sua documentação!  
Isso demonstra consistência entre especificação e implementação.

### Preciso criar novas personas?
Não! Use as duas definidas na documentação.

---

## ⏱️ TEMPO E PRAZO

### Quanto tempo leva para fazer tudo?
**Estimativa total**: 5-9 horas

Detalhamento:
- Leitura: 1-2h
- Preparação: 15-30min
- Capturas: 1-2h
- Documentação: 2-3h
- Revisão: 30-60min

### Quando é o prazo?
Conforme cronograma:
- **Protótipo navegável**: 13/03/2026
- **Documento final**: 27/03/2026

### Posso fazer em etapas?
**Sim, recomendado!**

Sugestão:
- **Dia 1**: Leitura + Preparação + Capturas (3h)
- **Dia 2**: Documentação no Word (3h)
- **Dia 3**: Revisão + Ajustes (1-2h)

---

## 🔧 PROBLEMAS TÉCNICOS

### Erro: "Cannot find module..."
```bash
npm install
```
Instale as dependências primeiro.

### Erro: "Port 5173 already in use"
Outro processo está usando a porta. Opções:
```bash
# Matar processo na porta
npx kill-port 5173

# Ou usar outra porta
npm run dev -- --port 3000
```

### Sistema lento no navegador
Possíveis causas:
- Muitas abas abertas
- Extensões do navegador
- Muitas tarefas demo (>50)

Solução: Reinicie o navegador, desative extensões temporariamente.

### LocalStorage não salva
Verifique:
- Modo anônimo (não persiste dados)
- Configurações de privacidade do navegador
- Espaço disponível no LocalStorage

---

## 📚 DOCUMENTAÇÃO

### Por onde começo?
**Caminho curto**: QUICK_START.md  
**Caminho completo**: SUMARIO_EXECUTIVO.md

### Preciso ler tudo?
**Essencial**:
- QUICK_START.md ou SUMARIO_EXECUTIVO.md
- DOCUMENTACAO_TELAS.md (pelo menos seções das telas que vai capturar)
- GUIA_CAPTURAS.md (pelo menos "Pré-requisitos")

**Consulta**:
- LEGENDAS_PRONTAS.md (quando for adicionar legendas)
- TEMPLATE_SECAO_TELAS.md (copiar para Word)

### Há um índice de tudo?
Sim! **INDICE_DOCUMENTACAO.md**  
Lista todos os arquivos e quando usar cada um.

### Os textos são de qualidade acadêmica?
Sim! Escritos considerando:
- Linguagem formal
- Terminologia técnica apropriada
- Estrutura lógica
- Adaptável para ABNT

---

## 🎓 AVALIAÇÃO

### O que o professor vai avaliar?
Provável:
- Completude (todas as telas?)
- Qualidade visual (nítidas?)
- Descrição técnica (bem explicadas?)
- Alinhamento com requisitos
- Qualidade do texto
- Formatação

### Como garanto nota máxima?
- ✅ Todas as 8 capturas obrigatórias
- ✅ Imagens nítidas e profissionais
- ✅ Legendas descritivas
- ✅ Mapeamento claro de RF/RNF
- ✅ Texto acadêmico de qualidade
- ✅ Formatação consistente
- ✅ Revisão ortográfica
- ✅ (Opcional) Capturas extras, versão mobile

### Posso usar os textos prontos?
**Sim!** Foram criados para isso.

Mas:
- Adapte para seu estilo quando necessário
- Verifique se está coerente com seu documento
- Não copie sem ler e entender

---

## 🚀 APRESENTAÇÃO

### Vou ter que apresentar?
Provavelmente sim, mas depende do professor.

### Como me preparo?
- Conheça bem o sistema (teste por 30 min)
- Saiba onde está cada funcionalidade
- Tenha o sistema rodando ao vivo
- Prepare slides se necessário
- Grave um vídeo demo como backup

### O que mostrar na apresentação?
1. Problema que o sistema resolve
2. Personas e necessidades
3. Funcionalidades principais
4. Demo ao vivo (modo demo)
5. Requisitos implementados
6. Próximos passos (PI II)

---

## 🔍 DETALHES ESPECÍFICOS

### O sistema funciona offline?
Sim, uma vez carregado, funciona offline.  
Dados salvos no LocalStorage.

### Posso usar em produção?
**Não recomendado!** É um protótipo acadêmico:
- Sem criptografia robusta
- Sem backup de dados
- LocalStorage pode ser limpo

### Posso compartilhar o código?
Sim, mas:
- Dê os devidos créditos
- Mencione que é um projeto acadêmico
- Não use para fins comerciais sem permissão

### Posso modificar o código?
Para aprendizado, sim!  
Para documentação do PI I, mantenha como está.

### O sistema tem bugs conhecidos?
É um protótipo! Pode haver:
- Pequenas inconsistências visuais em Safari
- Performance com muitos dados
- Validações básicas

Mas todas as funcionalidades principais funcionam!

---

## 📞 AJUDA ADICIONAL

### Onde encontro mais informações?
- **README.md**: Visão geral do projeto
- **SUMARIO_EXECUTIVO.md**: Guia completo
- **GUIA_CAPTURAS.md**: Detalhes técnicos

### Ainda tenho dúvidas!
1. Releia o arquivo relevante na documentação
2. Teste no sistema (modo demo)
3. Consulte o professor orientador

### Posso contribuir com a documentação?
Sim! Se encontrar erros ou tiver sugestões, documente!

---

## ✅ CHECKLIST RÁPIDO

Antes de finalizar, confirme:

### Sistema
- [ ] Sistema executa sem erros
- [ ] Modo demo funciona
- [ ] Todas as telas são acessíveis
- [ ] Funcionalidades principais testadas

### Capturas
- [ ] 8 capturas obrigatórias feitas
- [ ] Formato PNG
- [ ] Resolução consistente
- [ ] Nomeadas corretamente

### Documentação
- [ ] Seção 5 no Word completa
- [ ] Todas as imagens inseridas
- [ ] Legendas em todas as figuras
- [ ] Requisitos RF/RNF mencionados
- [ ] Texto revisado

### Qualidade
- [ ] Ortografia correta
- [ ] Formatação consistente
- [ ] Numeração sequencial
- [ ] Pronto para entregar!

---

## 💡 DICA FINAL

**Não tenha medo de perguntar!**

Se algo não está claro nesta FAQ ou na documentação, peça ajuda ao professor ou colegas. É melhor tirar dúvidas agora do que descobrir problemas na véspera da entrega!

---

## 🎉 CONCLUSÃO

Esta FAQ cobre as dúvidas mais comuns. Se sua pergunta não está aqui, consulte:

1. **INDICE_DOCUMENTACAO.md** - Para encontrar o arquivo certo
2. **SUMARIO_EXECUTIVO.md** - Para visão geral
3. **Arquivo específico** - Para detalhes técnicos

**Boa sorte com seu Projeto Integrador! 🎓**

---

**Última atualização**: 24/02/2026  
**Sistema**: UniTask v1.0  
**Projeto**: Projeto Integrador I

