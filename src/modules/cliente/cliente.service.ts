import { Injectable } from '@nestjs/common';
import { ListarClientesUseCase } from '../../domain/use-cases/cliente/listar-clientes.use-case';

@Injectable()
export class ClienteService {
  constructor(private readonly listarClientes: ListarClientesUseCase) {}

  listarTodos() {
    return this.listarClientes.execute();
  }
}