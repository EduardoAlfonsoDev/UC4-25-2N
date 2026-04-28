import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa{

    estudar(): void{
        this.apresentar()
        console.log(`Estou ensinandoo ...`)
    }
}