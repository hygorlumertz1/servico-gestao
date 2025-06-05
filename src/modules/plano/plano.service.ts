import { Injectable } from '@nestjs/common';
import { ListarPlanosUseCase } from '../../domain/use-cases/plano/listar-planos.use-case';
import { AtualizarCustoPlanoUseCase } from '../../domain/use-cases/plano/atualizar-custo.use-case';

@Injectable()
export class PlanoService {
  constructor(
    private listar: ListarPlanosUseCase,
    private atualizar: AtualizarCustoPlanoUseCase,
  ) {}

  listarTodos() {
    return this.listar.execute();
  }

  atualizarCusto(id: number, novoCusto: number) {
    return this.atualizar.execute(id, novoCusto);
  }
}