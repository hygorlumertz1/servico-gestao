# Serviço de Gestão

Este é um serviço backend desenvolvido com NestJS para gerenciar clientes, planos e assinaturas. O projeto utiliza Prisma como ORM e SQLite como banco de dados.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js para construção de aplicações server-side
- [Prisma](https://www.prisma.io/) - ORM moderno para Node.js e TypeScript
- [SQLite](https://www.sqlite.org/) - Banco de dados SQL leve e embutido
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Jest](https://jestjs.io/) - Framework de testes

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Git

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/hygorlumertz1/hygor_lumertz-desenv-backend-fase-1.git
cd servico-gestao
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
```env
DATABASE_URL="file:./dev.db"
```

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

5. Execute o seed para popular o banco com dados iniciais:
```bash
npx ts-node prisma/seed.ts
```

## Executando o Projeto

### Desenvolvimento
```bash
npm run start:dev
```

### Produção
```bash
npm run build
npm run start:prod
```

## Estrutura do Projeto

```
servico-gestao/
├── src/                    # Código fonte da aplicação
├── prisma/                 # Configurações e migrações do Prisma
│   ├── migrations/        # Migrações do banco de dados
│   ├── schema.prisma      # Schema do banco de dados
│   └── seed.ts           # Script para popular o banco de dados
├── test/                  # Testes automatizados
└── ...configurações
```

## Modelos de Dados

O sistema possui três modelos principais:

### Cliente
- `id`: Identificador único
- `nome`: Nome do cliente
- `email`: Email do cliente
- `assinaturas`: Relacionamento com assinaturas

### Plano
- `id`: Identificador único
- `nome`: Nome do plano
- `descricao`: Descrição do plano
- `custoMensal`: Custo mensal do plano
- `data`: Data de criação do plano
- `assinaturas`: Relacionamento com assinaturas

### Assinatura
- `id`: Identificador único
- `codPlano`: Código do plano
- `codCliente`: Código do cliente
- `inicioFidelidade`: Data de início da fidelidade
- `fimFidelidade`: Data de fim da fidelidade
- `dataUltimoPagamento`: Data do último pagamento
- `custoFinal`: Custo final da assinatura
- `descricao`: Descrição da assinatura

