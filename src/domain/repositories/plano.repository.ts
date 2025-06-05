import { Plano } from '../entities/plano.entity';

export interface IPlanoRepository {
  listarTodos(): Promise<Plano[]>;
  atualizarCusto(id: number, novoCusto: number): Promise<Plano>;
}