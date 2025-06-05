import { Inject, Injectable } from '@nestjs/common';
import { IAssinaturaRepository } from '../../repositories/assinatura.repository';
import { Assinatura } from '../../entities/assinatura.entity';

@Injectable()
export class ListarAssinaturasPlanoUseCase {
  constructor(
    @Inject('IAssinaturaRepository')
    private readonly repo: IAssinaturaRepository,
  ) {}

  async execute(codPlano: number): Promise<Array<{
    codigo: number;
    codCliente: number;
    codPlano: number;
    dataInicio: Date;
    dataFim: Date;
    status: 'ATIVO' | 'CANCELADO';
  }>> {
    const assinaturas = await this.repo.listarPorPlano(codPlano);
    
    return assinaturas.map(assinatura => ({
      codigo: assinatura.id,
      codCliente: assinatura.codCliente,
      codPlano: assinatura.codPlano,
      dataInicio: assinatura.inicioFidelidade,
      dataFim: assinatura.fimFidelidade,
      status: assinatura.isAtiva() ? 'ATIVO' : 'CANCELADO'
    }));
  }
} 