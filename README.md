# API de Registro e Login

API básica de autenticação com registro e login usando Node.js, Express, Prisma e MySQL.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- MySQL instalado e rodando
- npm ou yarn

## 🚀 Como começar

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd teste
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o banco de dados

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000
```

**Exemplo:**
```env
DATABASE_URL="mysql://root:admin@localhost:3306/auth_db"
JWT_SECRET=minha_chave_secreta_super_segura
PORT=3000
```

### 4. Crie o banco de dados no MySQL

Acesse o MySQL e crie o banco de dados:
```sql
CREATE DATABASE auth_db;
```

### 5. Gere o cliente Prisma
```bash
npm run prisma:generate
```

### 6. Execute as migrações
```bash
npm run prisma:migrate
```

### 7. Inicie o servidor

**Modo desenvolvimento (com nodemon):**
```bash
npm run dev
```

**Modo produção:**
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
├── config/          # Configurações
├── controllers/     # Controladores (lógica de requisições)
├── middleware/      # Middlewares (autenticação, validação)
├── models/          # Modelos de dados
├── repositories/    # Camada de acesso a dados
├── routes/          # Definição de rotas
├── services/        # Lógica de negócio
├── utils/           # Funções utilitárias
├── validators/      # Validações
├── prisma/          # Schema e migrações do Prisma
└── index.js         # Arquivo principal
```

## 🛠️ Scripts Disponíveis

- `npm start` - Inicia o servidor em modo produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento (com nodemon)
- `npm run prisma:generate` - Gera o cliente Prisma
- `npm run prisma:migrate` - Executa as migrações do banco
- `npm run prisma:studio` - Abre o Prisma Studio (interface visual do banco)

## 📝 Notas

- Certifique-se de que o MySQL está rodando antes de executar as migrações
- Altere o `JWT_SECRET` para uma chave segura em produção
- O banco de dados será criado automaticamente pelas migrações do Prisma
