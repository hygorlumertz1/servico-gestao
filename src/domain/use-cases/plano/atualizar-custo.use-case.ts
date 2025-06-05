import { Inject, Injectable } from '@nestjs/common';
import { IPlanoRepository } from '../../repositories/plano.repository';
import { Plano } from '../../entities/plano.entity';

@Injectable()
export class AtualizarCustoPlanoUseCase {
  constructor(
    @Inject('IPlanoRepository')
    private readonly planoRepo: IPlanoRepository,
  ) {}

  async execute(id: number, novoCusto: number): Promise<Plano> {
    return this.planoRepo.atualizarCusto(id, novoCusto);
  }
}