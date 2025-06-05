import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { PlanoService } from './plano.service';

@Controller('gestao/planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Get()
  listar() {
    return this.planoService.listarTodos();
  }

  @Patch(':id')
  atualizarCusto(@Param('id') id: string, @Body() body: { custoMensal: number }) {
    return this.planoService.atualizarCusto(Number(id), body.custoMensal);
  }
}