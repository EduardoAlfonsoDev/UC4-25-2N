import { animal } from "./animal";

export class Passaro extends animal {
    public falar(): void {
        console.log(this.nome, ', o Pássaro, ele não fala, mas ele canta, pede uma música ai pra ele cantar...')
    }
}