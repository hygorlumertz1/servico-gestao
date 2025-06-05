import { Module } from '@nestjs/common';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PlanoModule } from './modules/plano/plano.module';
import { AssinaturaModule } from './modules/assinatura/assinatura.module';

@Module({
  imports: [
    PrismaModule,
    ClienteModule,
    PlanoModule,
    AssinaturaModule,
  ],
})
export class AppModule {}