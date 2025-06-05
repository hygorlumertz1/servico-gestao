import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IClienteRepository } from '../../domain/repositories/cliente.repository';
import { Cliente } from '../../domain/entities/cliente.entity';

@Injectable()
export class PrismaClienteRepository implements IClienteRepository {
  constructor(private prisma: PrismaService) {}

  async listarTodos(): Promise<Cliente[]> {
    const clientes = await this.prisma.cliente.findMany();
    return clientes.map(c => new Cliente(c.id, c.nome, c.email));
  }
}