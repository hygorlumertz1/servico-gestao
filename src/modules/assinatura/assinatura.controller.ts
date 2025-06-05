import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AssinaturaService } from './assinatura.service';

@Controller('gestao/assinaturas')
export class AssinaturaController {
  constructor(private readonly service: AssinaturaService) {}

  @Post()
  criar(@Body() body: { codCli: number; codPlano: number }) {
    return this.service.criar(body.codCli, body.codPlano);
  }

  @Get(':tipo')
  listarPorTipo(@Param('tipo') tipo: string) {
    return this.service.listarPorTipo(tipo);
  }

  @Get('cliente/:codcli')
  listarPorCliente(@Param('codcli', ParseIntPipe) codcli: number) {
    return this.service.listarPorCliente(codcli);
  }

  @Get('plano/:codplano')
  listarPorPlano(@Param('codplano', ParseIntPipe) codplano: number) {
    return this.service.listarPorPlano(codplano);
  }
}