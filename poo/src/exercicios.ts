/* Pesquisa

1-

2-

3-

*/

/*

class Ninja {

    nome: string
    aldeia: string
    jutsu: string

    constructor(nome: string, aldeia: string, jutsu: string){
        this.nome = nome
        this.aldeia = aldeia
        this.jutsu = jutsu
    }
    usarJutsu(){
        console.log(`${this.nome} está usando ${this.jutsu} em voce!`);
    }
}

const sasuke = new Ninja("Sasuke Uchiha","Konoha","Kirin")
const itachi = new Ninja("Itachi Uchiha","Konoha","Amaterasu")

sasuke.usarJutsu()
itachi.usarJutsu()

*/

class Heroi {
    nome: string
    universo: string
    poder: number

    constructor(nome: string, universo: string, poder: number){
        this.nome = nome
        this.universo = universo
        this.poder = poder
    }
    lutar(){
        console.log(`Seu nome é ${this.nome} e seu poder é de ${this.poder}`)
    }

}
const flash = new Heroi("Flash","DC",10)
const quicksilver = new Heroi("Quicksilver","Marvel",9)

flash.lutar()
quicksilver.lutar()
