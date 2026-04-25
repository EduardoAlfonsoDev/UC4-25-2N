import { Servicos } from "./IServicos"

export abstract class ServiceDecorator implements Servicos {

    constructor(protected Servicos: Servicos) {}

    getDescricao(): string {
        return this.Servicos.getDescricao()
    }
    getPreco(): number {
        return this.Servicos.getPreco()
    }

}