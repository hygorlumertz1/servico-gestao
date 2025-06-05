import { Cliente } from '../entities/cliente.entity';

export interface IClienteRepository {
  listarTodos(): Promise<Cliente[]>;
}