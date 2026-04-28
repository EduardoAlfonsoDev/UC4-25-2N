import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{

    ensinar(): void{
        this.apresentar()
        console.log(`Estou ensinandoo ...`)
    }
}