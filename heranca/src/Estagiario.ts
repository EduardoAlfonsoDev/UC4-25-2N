import { Funcionario } from "./funcionario";

export class Estagiario extends Funcionario {

    receberAjudaDeCusto(valor: number): number{
        return this.salario += valor
    }
}