export class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    comer() {
        console.log(`${this.nome} está comendo!`)
    }
    dormir() {
        console.log(`${this.nome} está dormindo!`)
    }
    emitirSom(){
        console.log("Emitindo som ...")
    }
}

/*const Snoop = new Cachorro("Snoop");
const GatoDeBotas = new Gato("Gato de Botas");

Snoop.comer()
Snoop.dormir()

GatoDeBotas.comer()
GatoDeBotas.dormir()

Snoop.latir()
GatoDeBotas.miar()
*/