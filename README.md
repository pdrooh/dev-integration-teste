# Teste Leek Soluções: Vaga Desenvolvedor de Integrações

Segue abaixo as instruções para execução do teste técnico.

---

### Instruções

1. **Faça um fork deste repositório** para a sua conta pessoal do GitHub.
2. **Desenvolva a aplicação** conforme as especificações técnicas abaixo.
3. **Crie um README** com as instruções para compilar, testar e rodar o projeto.
4. O link do repositório deverá ser enviado para os e-mails:  
   **gabriel@leeksolucoes.com.br**,  
   **igor.albuquerque@leeksolucoes.com.br**,  
   **joao.marcelino@leeksolucoes.com.br**  
   com o título: **Teste Vaga Desenvolvedor de Integrações**.

---

## Parte 1 – API com NestJS

### Objetivo
Criar uma API RESTful para uma imobiliária, com cadastro e listagem de imóveis.

### Funcionalidades

- **Cadastro de imóvel**
- **Listagem de imóveis**
  - Permitir **filtro por faixa de preço**
  - Permitir **filtro por tipo de imóvel**
- **Documentação com Swagger**

### Estrutura sugerida da entidade `Property`:

```ts
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

### Requisitos

- Framework: **NestJS**
- Banco de dados: PostgreSQL, SQLite ou MongoDB
- Validação de dados
- Organização modular
- Documentação API com **Swagger**

### Pontos Extras

- Uso de ORM
- Dockerização (Dockerfile + docker-compose)

---

## Parte 2 – Integração com N8N

### Objetivo
Criar um **workflow no N8N** que consuma a API criada na Parte 1 e simule um chatbot que liste imóveis com base em uma faixa de valor e tipo de imóvel solicitado.

### Funcionalidade esperada

- O usuário entra em contato e recebe uma saudação da imobiliária
- O usuário envia um valor (ex: "Quero imóveis até R$ 400.000")
- O usuário envia um tipo de imóvel (ex: "Quero um apartamento")
- O workflow chama a API com o filtro de preço e tipo
- O bot responde com uma listagem formatada dos imóveis
- O filtro de preço ou tipo devem ser opcionais

### Requisitos

- Criar o fluxo no N8N usando o **HTTP Request Node** para chamadas API
- Receber os dados pelo trigger de **Chat** interno do N8N
- Retornar as informações formatadas para o usuário

### Ponto Extra com IA

Você pode utilizar uma **API de LLM gratuita** (como a [groq.com](https://groq.com)) e o nó de **Agent** do N8N para criar um bot mais fluído e otimizado com a IA.

---

## O que será avaliado

| Pontos |
|---------|
| Organização e boas práticas no backend NestJS |
| Funcionamento e clareza da integração no N8N |
| Validações, tratamento de erros, estrutura dos DTOs |
| Uso correto do Swagger e documentação |
| Diferenciais (Docker, IA, testes) |

---

## Entregáveis

- Link do repositório no GitHub com:
  - Código-fonte da API
  - Arquivo `.json` exportado do workflow do N8N
  - README com:
    - Instruções de instalação e execução da API
    - Instruções de execução do workflow

---

Boa sorte! 🚀
