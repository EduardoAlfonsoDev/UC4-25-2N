import { Funcionario } from "./funcionario";

export class Gerente extends Funcionario {
    aumentarSalario(valor: number) {
        this.salario += (this.salario * (valor/100))
    }
}