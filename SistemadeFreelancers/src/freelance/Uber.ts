import { Servicos } from "../servicos/IServicos";


export class Uber implements Servicos {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Motorista autonomo'
    }
    getPreco(): number {
        return 1100
    }
}