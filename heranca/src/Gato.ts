import { Animal } from "./Animal"

export class Gato extends Animal {
    miar() {
        console.log(`${this.nome} está miando. \nMiau! Miau!`)
    }
    emitirSom(): void {
        console.log(`${this.nome} disse - Miau`)
    }
}