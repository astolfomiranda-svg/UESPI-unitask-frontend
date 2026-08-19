# 🚀 TESTE AGORA - Guia Visual em 3 Passos

## ⚡ PASSO 1: LIMPAR CACHE (30 segundos)

### No Navegador:
1. Pressione **F12** (abre DevTools)
2. Vá na aba **"Application"** (Chrome) ou **"Storage"** (Firefox)
3. No menu esquerdo, clique em **"Local Storage"**
4. Clique com botão direito e selecione **"Clear"**
5. Feche o DevTools (F12 novamente)

### OU use este atalho rápido:
```
1. F12 (abre console)
2. Cole este código:
   localStorage.clear(); location.reload();
3. Aperte ENTER
```

---

## ⚡ PASSO 2: REINICIAR SERVIDOR (10 segundos)

### No Terminal:
```bash
# 1. Pare o servidor atual (Ctrl+C ou Cmd+C)

# 2. Reinicie:
npm run dev

# 3. Aguarde a mensagem:
#    ➜  Local:   http://localhost:5173/
```

---

## ⚡ PASSO 3: TESTAR MODO DEMO (10 segundos)

### No Navegador:
1. Abra: **http://localhost:5173**
2. Você deve ver a tela de login com:
   - Logo UniTask
   - Botão roxo "Entrar no Modo Demo"
   - Formulário de login abaixo

3. **Clique em "Entrar no Modo Demo"**

4. **O QUE DEVE ACONTECER**:
   ```
   ✅ Tela de "Carregando..." aparece brevemente
      (spinner azul girando)
   
   ✅ Redireciona para o Dashboard em 1-2 segundos
   
   ✅ Você vê:
      - Topo: "Olá, Lucas" (ou "Olá, Lucas Almeida")
      - 4 cards com estatísticas
      - Lista de próximas tarefas
      - Menu: Dashboard | Tarefas | Calendário
   ```

5. **O QUE NÃO DEVE ACONTECER**:
   ```
   ❌ Mensagem de loop infinito
   ❌ Tela branca/travada
   ❌ Retornar para a tela de login
   ```

---

## 🎯 RESULTADO VISUAL ESPERADO

### Tela 1: Login (ANTES de clicar)
```
┌────────────────────────────────────┐
│        🎓 UniTask                  │
│   Sistema de Organização Acadêmica │
│                                    │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃ ✨ Entrar no Modo Demo    ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│                                    │
│  ────────── ou ──────────          │
│                                    │
│  [ Login ] [ Cadastrar ]           │
│  Email: __________________         │
│  Senha: __________________         │
│  [ Entrar ]                        │
└────────────────────────────────────┘
```

### Tela 2: Loading (DURANTE o clique)
```
┌────────────────────────────────────┐
│                                    │
│                                    │
│           ⟲ (girando)              │
│                                    │
│         Carregando...              │
│                                    │
│                                    │
└────────────────────────────────────┘
```

### Tela 3: Dashboard (RESULTADO final)
```
┌────────────────────────────────────┐
│ 🎓 UniTask  [Dashboard][Tarefas][📅]│
│                    Olá, Lucas | Sair│
├────────────────────────────────────┤
│  Dashboard                         │
│  Visão geral das suas atividades   │
│                                    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌───┐ │
│  │ 📝12 │ │ ⏰ 5 │ │ 📈 2 │ │✅5│ │
│  │Total │ │Pend. │ │Prog. │ │OK │ │
│  └──────┘ └──────┘ └──────┘ └───┘ │
│                                    │
│  Próximas Tarefas:                 │
│  • Trabalho de Cálculo II (Hoje)   │
│  • Projeto de BD (Amanhã)          │
│  ...                               │
└────────────────────────────────────┘
```

---

## ❓ O QUE FAZER SE...

### ❌ Aparece mensagem de loop:
```bash
1. Pare TUDO (Ctrl+C no terminal)
2. No navegador: F12 > Console > cole:
   localStorage.clear(); location.reload();
3. Reinicie: npm run dev
4. Teste novamente
```

### ❌ Tela fica branca:
```bash
1. F12 > Console
2. Veja se há erros em vermelho
3. Copie o erro e leia SOLUCAO_DEFINITIVA.md
```

### ❌ Volta para a tela de login:
```bash
# Significa que o usuário não foi salvo
# Solução alternativa:

1. Clique em "Cadastrar"
2. Preencha:
   Nome: Lucas Almeida
   Email: teste@teste.com
   Senha: 123456
   Curso: Sistemas de Informação
3. Clique em "Cadastrar"
4. Deve funcionar!
```

---

## ✅ CONFIRMAÇÃO DE SUCESSO

Se você vê isso, está TUDO FUNCIONANDO:

- [ ] Dashboard carregou
- [ ] Mostra "Olá, Lucas" no topo
- [ ] 4 cards de estatísticas visíveis
- [ ] Números aparecem nos cards (ex: 12, 5, 2, 5)
- [ ] Lista de "Próximas Tarefas" com pelo menos 3 itens
- [ ] Menu funciona (pode clicar em Tarefas e Calendário)
- [ ] Sem erros no console (F12)
- [ ] Sem mensagem de loop

**Se TODOS os itens acima estão ✅ = SUCESSO TOTAL!** 🎉

---

## 📞 AINDA TEM PROBLEMA?

### Faça isso:
1. F12 > Console
2. Tire um print da tela
3. Copie qualquer erro em vermelho
4. Leia: **SOLUCAO_DEFINITIVA.md**

### Informações úteis para debug:
```javascript
// Cole no Console (F12):
console.log('Usuário:', localStorage.getItem('unitask_current_user'));
console.log('Tarefas:', localStorage.getItem('unitask_tasks'));
console.log('URL atual:', window.location.href);
```

Copie o resultado e analise:
- `unitask_current_user` deve ter dados de Lucas Almeida
- `unitask_tasks` deve ter um array com 12 tarefas
- URL deve ser `http://localhost:5173/dashboard`

---

## 🎯 TEMPO ESPERADO

| Etapa | Tempo |
|-------|-------|
| Limpar cache | 30s |
| Reiniciar servidor | 10s |
| Testar modo demo | 10s |
| **TOTAL** | **~1 minuto** |

---

<div align="center">

# 🚀 VAMOS LÁ!

**Execute os 3 passos acima AGORA e me confirme o resultado!**

Se funcionar: ✅ "FUNCIONOU!"  
Se não funcionar: ❌ "Erro: [descreva o que aconteceu]"

</div>

