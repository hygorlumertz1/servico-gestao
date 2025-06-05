// Entidade Cliente — representa um cliente no sistema
export class Cliente {
  constructor(
    public readonly id: number,
    public nome: string,
    public email: string,
  ) {}
}