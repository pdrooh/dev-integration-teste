# Teste Leek Soluções: Desenvolvedor de Integrações

Este projeto implementa uma API RESTful para uma imobiliária com NestJS e um chatbot para interação com a API usando N8N.

## Estrutura do Projeto

```
leek-imoveis/
├── api/                  # Backend com NestJS
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── properties/   # Módulo de imóveis
│   │   │   ├── dto/
│   │   │   ├── entities/
│   │   │   ├── properties.controller.ts
│   │   │   ├── properties.module.ts
│   │   │   └── properties.service.ts
│   ├── Dockerfile
│   └── .env
├── n8n-workflow/         # Workflow do N8N exportado
│   ├── Workflow_Chat_IA .json
│
├── docker-compose.yml    # Para rodar API e banco de dados
└── README.md             # Documentação do projeto
```

## Parte 1: API com NestJS

### Tecnologias Utilizadas

- NestJS como framework backend
- TypeORM como ORM
- PostgreSQL como banco de dados
- Swagger para documentação da API
- Docker para containerização

### Funcionalidades Implementadas

- CRUD completo de imóveis
- Filtros por faixa de preço e tipo de imóvel
- Validação de dados com class-validator
- Documentação completa com Swagger

### Entidade Property

```typescript
{
  id: string (UUID),
  title: string,
  description: string,
  address: string,
  price: Decimal,
  type: 'HOME' | 'APARTMENT' | 'KITNET',
  createdAt: Date
}
```

### Endpoints da API

- `GET /properties` - Listar imóveis (com filtros opcionais)
- `GET /properties/:id` - Buscar imóvel por ID
- `POST /properties` - Criar novo imóvel
- `PATCH /properties/:id` - Atualizar imóvel
- `DELETE /properties/:id` - Remover imóvel

## Parte 2: Integração com N8N

### Funcionalidades do Chatbot

- Saudação inicial ao usuário
- Interpretação de linguagem natural para extrair preferências do usuário
- Consulta à API com filtros baseados nas preferências
- Apresentação formatada dos resultados

### Versão com IA (Opcional)

- Utiliza a API da Groq para melhorar a interpretação das mensagens
- Formata as respostas de maneira mais natural e amigável

## Instruções de Instalação e Execução

### Pré-requisitos

- Docker e Docker Compose
- Node.js (para desenvolvimento local)

### Instalação e Execução com Docker

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/leek-imoveis.git
   cd leek-imoveis
   ```

2. Execute o projeto com Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. Acesse:
   - API: http://localhost:3024/api (Swagger)
   - N8N: http://localhost:5678

### Instalação e Execução Local (Desenvolvimento)

1. Configure o banco de dados PostgreSQL:

   ```bash
   # Instale o PostgreSQL ou use Docker:
   docker run -d --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=imoveis -p 5432:5432 postgres:14
   ```

2. Configure a API:

   ```bash
   cd api
   npm install
   cp .env.example .env
   # Edite o arquivo .env conforme necessário
   npm run start:dev
   ```

3. Configure o N8N:

   ```bash
   npm install -g n8n
   n8n start
   ```

4. Importe o workflow:
   - Acesse http://localhost:5678
   - Vá para "Workflows" > "Import from File"
   - Selecione o arquivo `n8n-workflow/imobiliaria-chatbot.json`

## Instruções para Teste do Chatbot

1. Inicie a conversa com o chatbot no N8N
2. Informe suas preferências, por exemplo:
   - "Estou procurando um apartamento até R$ 400 mil"
   - "Quero uma casa entre R$ 300 mil e R$ 600 mil"
   - "Procuro uma kitnet de no máximo R$ 150 mil"
3. O chatbot consultará a API e retornará os imóveis que correspondem aos critérios

## Recursos Adicionais

- Documentação da API: http://localhost:3024/api
- Interface do N8N: http://localhost:5678
