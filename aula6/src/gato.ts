import { animal } from "./animal";

export class gato extends animal {
    public falar(): void{
        console.log(this.nome,' é um gato, também é um animal, então ele também não fala...')
    }
}