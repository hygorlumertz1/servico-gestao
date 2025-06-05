import { Controller, Get } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('gestao/clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  listarTodos() {
    return this.clienteService.listarTodos();
  }
}