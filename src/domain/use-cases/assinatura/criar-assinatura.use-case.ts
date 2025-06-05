import { Inject, Injectable } from '@nestjs/common';
import { Assinatura } from '../../entities/assinatura.entity';
import { IAssinaturaRepository } from '../../repositories/assinatura.repository';

@Injectable()
export class CriarAssinaturaUseCase {
  constructor(
    @Inject('IAssinaturaRepository')
    private readonly repo: IAssinaturaRepository,
  ) {}

  async execute(codCliente: number, codPlano: number): Promise<Assinatura> {
    return this.repo.criar(codCliente, codPlano);
  }
}