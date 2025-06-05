import { Module } from '@nestjs/common';
import { PlanoController } from './plano.controller';
import { PlanoService } from './plano.service';
import { PrismaPlanoRepository } from '../../infrastructure/repositories/plano.prisma.repository';
import { IPlanoRepository } from '../../domain/repositories/plano.repository';
import { ListarPlanosUseCase } from '../../domain/use-cases/plano/listar-planos.use-case';
import { AtualizarCustoPlanoUseCase } from '../../domain/use-cases/plano/atualizar-custo.use-case';

@Module({
  controllers: [PlanoController],
  providers: [
    PlanoService,
    ListarPlanosUseCase,
    AtualizarCustoPlanoUseCase,
    {
      provide: 'IPlanoRepository',
      useClass: PrismaPlanoRepository,
    },
  ],
})
export class PlanoModule {}