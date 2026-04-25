import { Servicos } from "../servicos/IServicos"
import { ServiceDecorator } from "../servicos/ServiceDecorator"

export class BonusDecorator extends ServiceDecorator {
    getNome(): string {
        return super.getDescricao() + ' + Bonus'
    }

    getValor(): number {
        return super.getPreco() + 100
    }
}