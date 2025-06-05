import { Injectable, Inject } from '@nestjs/common';
import { IClienteRepository } from '../../repositories/cliente.repository';
import { Cliente } from '../../entities/cliente.entity';

@Injectable()
export class ListarClientesUseCase {
  constructor(
    @Inject('IClienteRepository')
    private readonly clienteRepo: IClienteRepository,
  ) {}

  async execute(): Promise<Cliente[]> {
    return this.clienteRepo.listarTodos();
  }
}