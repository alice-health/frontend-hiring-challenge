# 🏥 Frontend Tech Interview challenge

Teste técnico de Engenheiro(a) de Software Frontend.

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Dicas para Live Coding](#-dicas-para-live-coding)
- [Troubleshooting](#-troubleshooting)
- [Documentação adicional](#-documentação-adicional)
- [Licença](#-licença)
- [Suporte](#-suporte)

---

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (versão 6 ou superior)

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

---

## 📦 Instalação

```bash
npm install
```

## 🚀 Como Executar

### Passo 1: Iniciar a API Mock (JSON Server)

Em um terminal, execute:

**Usando npm:**

```bash
npm run mock-api
```

### Verificar se a API está funcionando

Você deverá ver uma mensagem similar a:

```
\{^_^}/ hi!

Loading db.json
Done

Resources
http://localhost:3001/patients-list
http://localhost:3001/patients-details

Home
http://localhost:3001
```

Acesse http://localhost:3001 no navegador para ver a documentação interativa.

---

### Passo 2: Iniciar o servidor de desenvolvimento (Frontend)

**Em outro terminal** (mantenha o JSON Server rodando), execute:

**Usando npm:**

```bash
npm run dev
```

A aplicação estará disponível em:

- **Frontend**: http://localhost:5173 (porta padrão do Vite)
- **API Mock**: http://localhost:3001

🎯 **Importante**: Mantenha **ambos os servidores** rodando simultaneamente em terminais separados!

---

## 💡 Dicas para Live Coding

Se você está fazendo este desafio em um **live coding**:

1. **Antes de começar**: Leia todo o README com atenção
2. **Organize seu tempo**: Planeje quais funcionalidades implementar primeiro
3. **Comunique-se**: Explique seu raciocínio enquanto programa
4. **Priorize o essencial**: Foque primeiro nas funcionalidades essenciais
5. **Não tenha medo de perguntar**: Esclareça dúvidas quando necessário

## 🐛 Troubleshooting

### Erro: "Port 3001 is already in use"

**Solução 1:** Altere a porta no script do `package.json`:

```json
"mock-api": "json-server --watch db.json --port 3002 --delay 800"
```

**Solução 2:** Encerre o processo que está usando a porta:

```bash
# MacOS/Linux
lsof -ti:3001 | xargs kill -9

# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

### Erro: "Cannot find module 'json-server'"

**Solução:** Reinstale o JSON Server:

```bash
npm install -D json-server
# ou
yarn add -D json-server
```

### Erro: "CORS policy"

O JSON Server já vem com CORS habilitado por padrão. Se ainda assim tiver problemas, adicione ao script:

```json
"mock-api": "json-server db.json --port 3001 --middlewares ./cors-middleware.js"
```

E crie o arquivo `cors-middleware.js`:

```javascript
module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  next();
};
```

### Os dados não atualizam

Certifique-se de que:

1. O arquivo `db.json` está na raiz da pasta
2. Não há erros de sintaxe no JSON

---

## 📚 Documentação Adicional

- [JSON Server Documentation](https://github.com/typicode/json-server)
- [REST API Best Practices](https://restfulapi.net/)

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e de avaliação técnica.

---

## 🤝 Suporte

Em caso de dúvidas ou problemas, entre em contato com a equipe de recrutamento.

---

**Boa sorte com o teste técnico! 🚀**
