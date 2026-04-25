import { Servicos } from "../servicos/IServicos";


export class Desenvolvedor implements Servicos {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Desenvolvedor'
    }
    getPreco(): number {
        return 1100
    }
}