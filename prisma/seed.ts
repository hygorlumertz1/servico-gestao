import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Populando o banco de dados...');

  // --- Criar 10 clientes ---
  for (let i = 1; i <= 10; i++) {
    await prisma.cliente.create({
      data: {
        nome: `Cliente ${i}`,
        email: `cliente${i}@exemplo.com`,
      },
    });
  }

  // --- Criar 5 planos ---
  for (let i = 1; i <= 5; i++) {
    await prisma.plano.create({
      data: {
        nome: `Plano ${i}`,
        descricao: `Plano nível ${i}`,
        custoMensal: 39.9 + i * 10,
        data: new Date(),
      },
    });
  }

  // --- Criar 5 assinaturas ---
  const clientes = await prisma.cliente.findMany();
  const planos = await prisma.plano.findMany();

  for (let i = 0; i < 5; i++) {
    const cliente = clientes[i];
    const plano = planos[i];

    const hoje = new Date();
    const fimFidelidade = new Date(hoje);
    fimFidelidade.setFullYear(hoje.getFullYear() + 1);

    const dataUltimoPagamento =
      i === 4
        ? new Date(hoje.getTime() - 40 * 24 * 60 * 60 * 1000) // assinatura cancelada
        : hoje;

    await prisma.assinatura.create({
      data: {
        codCliente: cliente.id,
        codPlano: plano.id,
        inicioFidelidade: hoje,
        fimFidelidade: fimFidelidade,
        dataUltimoPagamento: dataUltimoPagamento,
        custoFinal: plano.custoMensal * 0.9,
        descricao:
          i === 4
            ? 'Assinatura cancelada (pagamento atrasado)'
            : 'Assinatura ativa com desconto de fidelidade',
      },
    });
  }

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao executar seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });