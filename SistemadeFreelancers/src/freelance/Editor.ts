import { Servicos } from "../servicos/IServicos";


export class Editor implements Servicos {
    preco: number

    constructor(preco: number) {
        this.preco = preco
    }
    getDescricao(): string {
        return 'Editor de videos'
    }
    getPreco(): number {
        return 1400
    }
}