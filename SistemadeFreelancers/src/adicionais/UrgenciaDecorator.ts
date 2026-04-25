import { Servicos } from "../servicos/IServicos"
import { ServiceDecorator } from "../servicos/ServiceDecorator"

export class UrgenciaDecorator extends ServiceDecorator {
    getNome(): string {
        return super.getDescricao() + ' + Urgencia'
    }

    getValor(): number {
        return super.getPreco() + 250
    }
}