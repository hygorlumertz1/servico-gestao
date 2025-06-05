import { Inject, Injectable } from '@nestjs/common';
import { IPlanoRepository } from '../../repositories/plano.repository'
import { Plano } from '../../entities/plano.entity';

@Injectable()
export class ListarPlanosUseCase {
  constructor(
    @Inject('IPlanoRepository')
    private readonly planoRepo: IPlanoRepository,
  ) {}

  async execute(): Promise<Plano[]> {
    return this.planoRepo.listarTodos();
  }
}