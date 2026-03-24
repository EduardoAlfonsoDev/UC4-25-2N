import { Animal } from "./Animal"

export class Cachorro extends Animal {
    latir() {
        console.log(`${this.nome} está latindo. \nAu! Au!`)
    }
    emitirSom(): void {
        console.log(`${this.nome} disse - Au! Au!`)
    }
}