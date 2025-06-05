import { Module } from '@nestjs/common';
import { AssinaturaController } from './assinatura.controller';
import { AssinaturaService } from './assinatura.service';
import { PrismaAssinaturaRepository } from '../../infrastructure/repositories/assinatura.prisma.repository';
import { CriarAssinaturaUseCase } from '../../domain/use-cases/assinatura/criar-assinatura.use-case';
import { ListarPorTipoUseCase } from '../../domain/use-cases/assinatura/listar-assinaturas.use-case';
import { ListarAssinaturasClienteUseCase } from '../../domain/use-cases/assinatura/listar-assinaturas-cliente.use-case';
import { ListarAssinaturasPlanoUseCase } from '../../domain/use-cases/assinatura/listar-assinaturas-plano.use-case';

@Module({
  controllers: [AssinaturaController],
  providers: [
    AssinaturaService,
    CriarAssinaturaUseCase,
    ListarPorTipoUseCase,
    ListarAssinaturasClienteUseCase,
    ListarAssinaturasPlanoUseCase,
    {
      provide: 'IAssinaturaRepository',
      useClass: PrismaAssinaturaRepository,
    },
  ],
})
export class AssinaturaModule {}