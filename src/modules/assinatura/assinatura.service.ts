import { Injectable } from '@nestjs/common';
import { CriarAssinaturaUseCase } from '../../domain/use-cases/assinatura/criar-assinatura.use-case';
import { ListarPorTipoUseCase } from '../../domain/use-cases/assinatura/listar-assinaturas.use-case';
import { ListarAssinaturasClienteUseCase } from '../../domain/use-cases/assinatura/listar-assinaturas-cliente.use-case';
import { ListarAssinaturasPlanoUseCase } from '../../domain/use-cases/assinatura/listar-assinaturas-plano.use-case';

@Injectable()
export class AssinaturaService {
  constructor(
    private readonly criarUC: CriarAssinaturaUseCase,
    private readonly listarUC: ListarPorTipoUseCase,
    private readonly listarPorClienteUC: ListarAssinaturasClienteUseCase,
    private readonly listarPorPlanoUC: ListarAssinaturasPlanoUseCase,
  ) {}

  criar(codCliente: number, codPlano: number) {
    return this.criarUC.execute(codCliente, codPlano);
  }

  listarPorTipo(tipo: string) {
    return this.listarUC.execute(tipo);
  }

  listarPorCliente(codCliente: number) {
    return this.listarPorClienteUC.execute(codCliente);
  }

  listarPorPlano(codPlano: number) {
    return this.listarPorPlanoUC.execute(codPlano);
  }
}