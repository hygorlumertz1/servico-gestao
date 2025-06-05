import { Assinatura } from '../entities/assinatura.entity';

export interface IAssinaturaRepository {
  criar(codCliente: number, codPlano: number): Promise<Assinatura>;
  listarPorTipo(tipo: string): Promise<Assinatura[]>;
  listarPorCliente(codCliente: number): Promise<Assinatura[]>;
  listarPorPlano(codPlano: number): Promise<Assinatura[]>;
}