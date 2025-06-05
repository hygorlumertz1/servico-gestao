import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Plano } from '../../domain/entities/plano.entity';
import { IPlanoRepository } from '../../domain/repositories/plano.repository';

@Injectable()
export class PrismaPlanoRepository implements IPlanoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async listarTodos(): Promise<Plano[]> {
    const planos = await this.prisma.plano.findMany();
    return planos.map(p => new Plano(p.id, p.nome, p.descricao, p.custoMensal, p.data));
  }

  async atualizarCusto(id: number, novoCusto: number): Promise<Plano> {
    const plano = await this.prisma.plano.update({
      where: { id },
      data: { custoMensal: novoCusto, data: new Date() },
    });
    return new Plano(plano.id, plano.nome, plano.descricao, plano.custoMensal, plano.data);
  }
}