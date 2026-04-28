/*
1.
2.  É a classe genérica que serve como base para outras.É uma nova classe criada com base em uma classe pai existente. 
3. java, c++, c# 
*/

export class Pessoa {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    apresentar(): void {
        console.log(`Olá meu nome é ${this.nome}!`)
    }
}

const Aphelios = new Pessoa("Aphelios")
Aphelios.apresentar()