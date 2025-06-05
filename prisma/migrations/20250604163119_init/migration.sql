-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Plano" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "custoMensal" REAL NOT NULL,
    "data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Assinatura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codPlano" INTEGER NOT NULL,
    "codCliente" INTEGER NOT NULL,
    "inicioFidelidade" DATETIME NOT NULL,
    "fimFidelidade" DATETIME NOT NULL,
    "dataUltimoPagamento" DATETIME NOT NULL,
    "custoFinal" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    CONSTRAINT "Assinatura_codPlano_fkey" FOREIGN KEY ("codPlano") REFERENCES "Plano" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Assinatura_codCliente_fkey" FOREIGN KEY ("codCliente") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
