import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Torna o módulo acessível globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}