import { Inject, Injectable } from '@nestjs/common';
import { IAssinaturaRepository } from '../../repositories/assinatura.repository';
import { Assinatura } from '../../entities/assinatura.entity';

@Injectable()
export class ListarPorTipoUseCase {
  constructor(
    @Inject('IAssinaturaRepository')
    private readonly repo: IAssinaturaRepository,
  ) {}

  async execute(tipo: string): Promise<Assinatura[]> {
    return this.repo.listarPorTipo(tipo);
  }
}