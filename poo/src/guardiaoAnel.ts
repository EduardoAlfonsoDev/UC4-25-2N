class GuardiaoDoAnel {
    private portador: string;
  
    constructor(nome: string) {
      this.portador = nome;
    }
  
    public mostrarPortador(): void {
      console.log(`O atual portador do anel é: ${this.portador}`);
    }
  
    public passarAnel(novoPortador: string): void {
      console.log(`O anel foi passado para ${novoPortador}`);
      this.portador = novoPortador;
    }
  }
  
  const anel = new GuardiaoDoAnel("Frodo");
  
  anel.mostrarPortador();
  anel.passarAnel("Sam");
  anel.mostrarPortador();
  
  // Não funciona:
  // console.log(anel.portador)
  