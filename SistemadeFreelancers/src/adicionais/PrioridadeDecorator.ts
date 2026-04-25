import { Servicos } from "../servicos/IServicos"
import { ServiceDecorator } from "../servicos/ServiceDecorator"

export class PrioridadeDecorator extends ServiceDecorator {
    getNome(): string {
        return super.getDescricao() + ' + Prioridade'
    }

    getValor(): number {
        return super.getPreco() + 150
    }
}