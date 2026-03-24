//function soma(a: number, b: number){
//    return a + b
//}
//soma(5,5)

// Molde do nosso objeto "classe"

class Personagem{
    
    nome: string
    especie: string
    poder: number
    idade: number

    constructor(nome: string, especie: string, poder: number, idade: number){
        this.nome = nome
        this.especie = especie
        this.poder = poder
        this.idade = idade
    }
    atacar(){
        console.log(`${this.nome} está atacando com um poder de ${this.poder}!`)
    }
}

const seuMadruga = new Personagem("Seu Madruguinha","Humano",150000, 50)
const donaFlorinda = new Personagem("Florinda Flores","Humano (Mamãe querida)",300000,40)



seuMadruga.atacar()
donaFlorinda.atacar()