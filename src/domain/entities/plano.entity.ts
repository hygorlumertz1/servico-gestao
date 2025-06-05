export class Plano {
  constructor(
    public readonly id: number,
    public nome: string,
    public descricao: string,
    public custoMensal: number,
    public data: Date,
  ) {}
}