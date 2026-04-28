export class animal {
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }

    public falar(): void {
        console.log('Animal não fala, meu querido')
    }
}