export class Assinatura {
  constructor(
    public readonly id: number,
    public codPlano: number,
    public codCliente: number,
    public inicioFidelidade: Date,
    public fimFidelidade: Date,
    public dataUltimoPagamento: Date,
    public custoFinal: number,
    public descricao: string,
  ) {}

  isAtiva(): boolean {
    const hoje = new Date();
    return this.dataUltimoPagamento >= this.subtrairDias(hoje, 30);
  }

  private subtrairDias(data: Date, dias: number): Date {
    return new Date(data.getTime() - dias * 24 * 60 * 60 * 1000);
  }
}