import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Assinatura } from '../../domain/entities/assinatura.entity';
import { IAssinaturaRepository } from '../../domain/repositories/assinatura.repository';

@Injectable()
export class PrismaAssinaturaRepository implements IAssinaturaRepository {
  constructor(private prisma: PrismaService) {}

  async criar(codCliente: number, codPlano: number): Promise<Assinatura> {
    const inicio = new Date();
    const fim = new Date(inicio);
    fim.setDate(inicio.getDate() + 365);
    const custoFinal = 50; // valor promocional fixo para exemplo

    const nova = await this.prisma.assinatura.create({
      data: {
        codCliente,
        codPlano,
        inicioFidelidade: inicio,
        fimFidelidade: fim,
        dataUltimoPagamento: inicio,
        custoFinal,
        descricao: 'Valor promocional de fidelidade.',
      },
    });

    return new Assinatura(
      nova.id,
      nova.codPlano,
      nova.codCliente,
      nova.inicioFidelidade,
      nova.fimFidelidade,
      nova.dataUltimoPagamento,
      nova.custoFinal,
      nova.descricao,
    );
  }

  async listarPorTipo(tipo: string): Promise<Assinatura[]> {
    const hoje = new Date();
    const todas = await this.prisma.assinatura.findMany();
    return todas
      .map(a => new Assinatura(
        a.id, a.codPlano, a.codCliente, a.inicioFidelidade, a.fimFidelidade, a.dataUltimoPagamento, a.custoFinal, a.descricao
      ))
      .filter(a => {
        if (tipo === 'ATIVOS') return a.isAtiva();
        if (tipo === 'CANCELADOS') return !a.isAtiva();
        return true;
      });
  }

  async listarPorCliente(codCliente: number): Promise<Assinatura[]> {
    const lista = await this.prisma.assinatura.findMany({ where: { codCliente } });
    return lista.map(a => new Assinatura(
      a.id, a.codPlano, a.codCliente, a.inicioFidelidade, a.fimFidelidade, a.dataUltimoPagamento, a.custoFinal, a.descricao
    ));
  }

  async listarPorPlano(codPlano: number): Promise<Assinatura[]> {
    const lista = await this.prisma.assinatura.findMany({ where: { codPlano } });
    return lista.map(a => new Assinatura(
      a.id, a.codPlano, a.codCliente, a.inicioFidelidade, a.fimFidelidade, a.dataUltimoPagamento, a.custoFinal, a.descricao
    ));
  }
}