# 🏥 API Mock - Prontuário Eletrônico

API REST simulada para teste técnico de Engenheiro(a) de Software Frontend. Simula um sistema de prontuário eletrônico básico com listagem de pacientes e visualização de detalhes com linha do tempo de saúde.

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Dicas para Live Coding](#-dicas-para-live-coding)
- [Como Executar](#como-executar)
- [Sobre o Projeto](#sobre-o-projeto)
- [Endpoints Disponíveis](#endpoints-disponíveis)
- [Estrutura de Dados](#estrutura-de-dados)
- [Recursos Avançados](#recursos-avançados)
- [Troubleshooting](#-troubleshooting)
- [Dados de Teste Disponíveis](#-dados-de-teste-disponíveis)
- [Funcionalidades sugeridas para implementar](#-funcionalidades-sugeridas-para-implementar)
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

### Baixar o zip recebido por email
Extraia o arquivo do zip, entre na pasta do projeto escolhido (Vue ou React) e execute a instalação das dependências
```bash
npm install
```

## 💡 Dicas para Live Coding

Se você está fazendo este desafio em um **live coding**:

1. **Antes de começar**: Leia todo o README com atenção
2. **Organize seu tempo**: Planeje quais funcionalidades implementar primeiro
3. **Comunique-se**: Explique seu raciocínio enquanto programa
4. **Priorize o essencial**: Foque primeiro nas funcionalidades essenciais
5. **Não tenha medo de perguntar**: Esclareça dúvidas quando necessário

### Estrutura sugerida para live coding:

```
1. Setup inicial (~5 min)
   - Instalar dependências
   - Testar os comandos npm run build, npm run dev e npm run mock-api

2. Estrutura base (10-15 min)
   - Criar componentes base
   - Configurar chamadas à API

3. Página de listagem (20-30 min)
   - Buscar e exibir pacientes
   - Implementar tabela
   - Loading e tratamento de erros

4. Página de detalhes (20-30 min)
   - Buscar detalhes do paciente
   - Exibir informações completas
   - Exibir timeline de eventos

5. Funcionalidades extras (tempo restante)
   - Busca
   - Filtros
   - Testes
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


## 🎯 Sobre o Projeto

Esta API mock foi criada para a construção de uma aplicação de prontuário eletrônico. A API fornece dados **simulados** de pacientes e seus históricos médicos em formato de linha do tempo.

### Contexto da Aplicação

A aplicação consiste em:

1. **Página de Listagem**: Exibe uma tabela com informações resumidas dos pacientes:
   - Avatar
   - Nome completo
   - E-mail de contato
   - Idade
   - Peso
   - Altura
   - Tipo sanguíneo
   - Botão de acesso aos detalhes

2. **Página de Detalhes**: Exibe informações completas do paciente incluindo:
   - Informações pessoais (nome, idade, e-mail)
   - Dados físicos (peso, altura, tipo sanguíneo)
   - Endereço completo
   - Linha do tempo de saúde com diferentes tipos de eventos:
     - **Alertas**: Avisos e lembretes importantes
     - **Exames**: Resultados de exames laboratoriais
     - **Vacinas**: Registro de vacinação
     - **Consultas**: Histórico de consultas médicas
   - Informação do profissional responsável por cada evento

---

## 📡 Endpoints Disponíveis

### Base URL

```
http://localhost:3001
```

### 1. Listagem de Pacientes

**Endpoint:** `/patients-list`

**Método:** `GET`

**Descrição:** Retorna lista completa de pacientes com informações para exibição em tabela.

**Dados retornados:**

- `id` (number): Identificador único do paciente
- `fullName` (string): Nome completo do paciente
- `email` (string): E-mail de contato
- `age` (number): Idade do paciente
- `weight` (number): Peso em kg
- `height` (number): Altura em metros
- `bloodType` (string): Tipo sanguíneo
- `avatar` (string): URL da foto do paciente

**Exemplo de requisição:**

```bash
curl http://localhost:3001/patients-list
```

**Exemplo de resposta:**

```json
[
  {
    "id": 1,
    "fullName": "Leonardo Rodrigues",
    "email": "leonardo.rodrigues@gmail.com",
    "age": 32,
    "weight": 77,
    "height": 1.85,
    "bloodType": "A+",
    "avatar": "https://i.pravatar.cc/150?img=13"
  },
  {
    "id": 2,
    "fullName": "Gabriela Vieira Campos",
    "email": "gab.campos@gmail.com",
    "age": 29,
    "weight": 63,
    "height": 1.68,
    "bloodType": "O+",
    "avatar": "https://i.pravatar.cc/150?img=5"
  }
]
```

---

### 2. Detalhes do Paciente

**Endpoint:** `/patients-details/:id`

**Método:** `GET`

**Descrição:** Retorna informações completas de um paciente específico incluindo endereço e linha do tempo de eventos de saúde.

**Parâmetros:**

- `id` (number): ID do paciente

**Exemplo de requisição:**

```bash
curl http://localhost:3001/patients-details/1
```

**Exemplo de resposta:**

```json
{
  "id": 1,
  "fullName": "Leonardo Rodrigues",
  "dateOfBirth": "1992-08-15",
  "age": 32,
  "gender": "Masculino",
  "email": "leonardo.rodrigues@gmail.com",
  "phone": "(11) 98765-4321",
  "avatar": "https://i.pravatar.cc/150?img=13",
  "weight": 77,
  "height": 1.85,
  "bloodType": "A+",
  "address": {
    "street": "Rua das Laranjeiras, 1287, Ap. 54B",
    "neighborhood": "Jardim Paulista",
    "city": "São Paulo",
    "state": "SP",
    "zipCode": "01415-002"
  },
  "timeline": [
    {
      "id": 1,
      "eventType": "alert",
      "date": "2024-11-03",
      "title": "Glicemia em jejum até 90 dias.",
      "description": "Glicemia em jejum até 90 dias.",
      "createdBy": {
        "name": "Dr. Mayara Silva",
        "avatar": "https://i.pravatar.cc/150?img=1"
      }
    },
    {
      "id": 2,
      "eventType": "exam",
      "date": "2024-08-03",
      "title": "Glicemia em jejum: limitrofe (99 mg/dL) Repetir em 3 meses.",
      "description": "Glicemia em jejum: limitrofe (99 mg/dL) Repetir em 3 meses.",
      "createdBy": {
        "name": "Dr. Rafael Nunes",
        "avatar": "https://i.pravatar.cc/150?img=33"
      }
    },
    {
      "id": 3,
      "eventType": "vaccine",
      "date": "2024-03-15",
      "title": "Vacina influenza 2025 aplicada.",
      "description": "Vacina influenza 2025 aplicada.",
      "createdBy": {
        "name": "Dra. Júlia Martins",
        "avatar": "https://i.pravatar.cc/150?img=9"
      }
    },
    {
      "id": 4,
      "eventType": "consultation",
      "date": "2024-02-20",
      "title": "Check-up anual: PA 12/8, FC 68 bpm, SpO₂ 98%.",
      "description": "Check-up anual: PA 12/8, FC 68 bpm, SpO₂ 98%.",
      "createdBy": {
        "name": "Dr. Mayara Silva",
        "avatar": "https://i.pravatar.cc/150?img=1"
      }
    }
  ]
}
```

---

## 📊 Estrutura de Dados

### Patient List Item (Listagem)

```typescript
interface PatientListItem {
  id: number;
  fullName: string;
  email: string;
  age: number;
  weight: number; // em kg
  height: number; // em metros
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  avatar: string;
}
```

### Patient Details (Detalhes)

```typescript
interface PatientDetails {
  id: number;
  fullName: string;
  dateOfBirth: string; // formato: YYYY-MM-DD
  age: number;
  gender: "Masculino" | "Feminino";
  email: string;
  phone: string;
  avatar: string;
  weight: number; // em kg
  height: number; // em metros
  bloodType: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  address: Address;
  timeline: TimelineEvent[];
}

interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

interface TimelineEvent {
  id: number;
  eventType: "alert" | "exam" | "vaccine" | "consultation";
  date: string; // formato: YYYY-MM-DD
  title: string;
  description: string;
  createdBy: Professional;
}

interface Professional {
  name: string;
  avatar: string;
}
```

---

## 🎨 Recursos Avançados

O JSON Server suporta diversos recursos que podem ser explorados:

### Paginação

```bash
# Retorna 5 pacientes por página
GET http://localhost:3001/patients-list?_page=1&_limit=5

# Headers de resposta incluem:
# X-Total-Count: 8
# Link: primeira, próxima, última página
```

### Ordenação

```bash
# Ordenar por nome (ascendente)
GET http://localhost:3001/patients-list?_sort=fullName&_order=asc

# Ordenar por idade (descendente)
GET http://localhost:3001/patients-list?_sort=age&_order=desc

# Ordenar por múltiplos campos
GET http://localhost:3001/patients-list?_sort=age,fullName&_order=desc,asc
```

### Busca (Full-text search)

```bash
# Buscar pacientes que contenham "Leonardo" em qualquer campo
GET http://localhost:3001/patients-list?q=Leonardo

# Buscar por e-mail específico
GET http://localhost:3001/patients-list?q=gmail.com
```

### Filtros

```bash
# Filtrar por ID específico
GET http://localhost:3001/patients-details?id=1

# Filtrar por tipo sanguíneo
GET http://localhost:3001/patients-list?bloodType=A+

# Filtrar por idade exata
GET http://localhost:3001/patients-list?age=32

# Filtrar por range de idade
GET http://localhost:3001/patients-list?age_gte=30&age_lte=40

# Filtrar por peso mínimo
GET http://localhost:3001/patients-list?weight_gte=70

# Filtrar eventos da timeline por tipo
GET http://localhost:3001/patients-details/1?timeline.eventType=exam
```

### Combinação de recursos

```bash
# Buscar "Silva", ordenar por idade, retornar primeira página com 3 resultados
GET http://localhost:3001/patients-list?q=Silva&_sort=age&_order=asc&_page=1&_limit=3

# Filtrar tipo sanguíneo A+ com idade entre 25 e 40 anos
GET http://localhost:3001/patients-list?bloodType=A+&age_gte=25&age_lte=40
```

---



---

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
3. Não há erros de sintaxe no JSON

---

## 📝 Dados de Teste Disponíveis

A API contém **8 pacientes** de exemplo com perfis variados:

| ID  | Nome                    | Idade | Tipo Sanguíneo | Eventos Timeline |
| --- | ----------------------- | ----- | -------------- | ---------------- |
| 1   | Leonardo Rodrigues      | 32    | A+             | 7 eventos        |
| 2   | Gabriela Vieira Campos  | 29    | O+             | 2 eventos        |
| 3   | Fernanda Gomes          | 34    | B+             | 2 eventos        |
| 4   | Camila Moreira Souza    | 27    | AB+            | 2 eventos        |
| 5   | João Henrique Alves     | 41    | A-             | 2 eventos        |
| 6   | Mariana Costa Silva     | 38    | O-             | 2 eventos        |
| 7   | Rafael Santos Lima      | 45    | B-             | 2 eventos        |
| 8   | Juliana Ferreira        | 31    | A+             | 2 eventos        |

### Tipos de eventos na Timeline:

- **alert**: Alertas e avisos médicos importantes
- **exam**: Resultados de exames e análises clínicas
- **vaccine**: Registro de vacinações aplicadas
- **consultation**: Histórico de consultas e check-ups

---

## 🎯 Funcionalidades Sugeridas para Implementar

### Essenciais

- ✅ Listagem de pacientes em tabela
- ✅ Navegação para detalhes
- ✅ Exibição de informações completas

### Intermediárias

- ✅ Busca por nome ou e-mail
- ✅ Filtro por tipo sanguíneo
- ✅ Cálculo de IMC (peso/altura²)
- ✅ Formatação de dados (telefone, CEP)
- ✅ Componentes reutilizáveis
- ✅ Ícones por tipo de evento (alert, exam, vaccine, consultation)
- ✅ Loading states
- ✅ Tratamento de erros

### Avançadas

- ✅ Paginação da listagem
- ✅ Filtros múltiplos combinados
- ✅ Ordenação por diferentes campos
- ✅ Cache de requisições
- ✅ Testes automatizados (unitários e integração)
- ✅ Visualização de endereço em mapa
- ✅ Filtro de timeline por tipo de evento
- ✅ Ordenação de timeline por data

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
