import { Servicos } from "../servicos/IServicos";


export class Tradutor implements Servicos {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Tradutor de línguas estrageiras'
    }
    getPreco(): number {
        return 1000
    }
}