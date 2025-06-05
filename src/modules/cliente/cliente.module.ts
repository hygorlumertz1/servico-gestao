import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { PrismaClienteRepository } from '../../infrastructure/repositories/cliente.prisma.repository';
import { ListarClientesUseCase } from '../../domain/use-cases/cliente/listar-clientes.use-case';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteService,
    ListarClientesUseCase,
    {
      provide: 'IClienteRepository', // Token de injeção da interface
      useClass: PrismaClienteRepository, // Implementação concreta
    },
  ],
})
export class ClienteModule {}