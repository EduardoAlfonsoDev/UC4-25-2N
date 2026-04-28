import { animal } from "./animal";

export class cachorro extends animal {
    public falar(): void {
        console.log(this.nome, ' é um cachorro, assim como o gato, também é um animal, portanto, também não vai falar...')
    }
}