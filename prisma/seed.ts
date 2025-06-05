import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Criar 10 clientes
  for (let i = 1; i <= 10; i++) {
    await prisma.cliente.create({
      data: {
        nome: `Cliente ${i}`,
        email: `cliente${i}@exemplo.com`,
      },
    });
  }

  // Criar 5 planos
  for (let i = 1; i <= 5; i++) {
    await prisma.plano.create({
      data: {
        nome: `Plano ${i}`,
        descricao: `Plano básico ${i}`,
        custoMensal: 49.90 + i,
        data: new Date(),
      },
    });
  }

  // Criar apenas uma assinatura inativa
  const clientes = await prisma.cliente.findMany();
  const planos = await prisma.plano.findMany();

  if (clientes.length > 0 && planos.length > 0) {
    const cliente = clientes[0];
    const plano = planos[0];

    const hoje = new Date();
    const fim = new Date(hoje);
    fim.setFullYear(hoje.getFullYear() + 1);

    // Criar data do último pagamento há 31 dias para garantir que a assinatura esteja inativa
    const dataUltimoPagamento = new Date(hoje);
    dataUltimoPagamento.setDate(hoje.getDate() - 31);

    await prisma.assinatura.create({
      data: {
        codCliente: cliente.id,
        codPlano: plano.id,
        inicioFidelidade: hoje,
        fimFidelidade: fim,
        dataUltimoPagamento: dataUltimoPagamento,
        custoFinal: plano.custoMensal * 0.9, // 10% de desconto
        descricao: 'Assinatura inativa para testes',
      },
    });
  }
}

main()
  .then(() => {
    console.log('Seed completo!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });