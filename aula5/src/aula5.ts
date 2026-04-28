//1. Veiculo -> Carro/Moto | Cliente -> PF/PJ | Celular -> Android/Iphone
//2. A diferença é que a classe pai serve de molde para a classe filha que possui as mesmas propriedas que a classe pai, mas o contrário não é verdadeiro.
//3. Java, Python, C++ C#, entre outros

//Prática
//1.
class pessoa {
    protected nome: string

    constructor(nome: string){
        this.nome = nome
    }

    public apresentar(){
        console.log(`Muito prazer, meu nome é ${this.nome}.`)
    }
}

class professor extends pessoa {
    ensinar(){
        console.log(`Agora o professor ${this.nome} está dando aula.`)
    }
}

class aluno extends pessoa {
    estudar(){
        console.log(`Agora o ${this.nome} está estudando, volte mais tarde.`)
    }
}

const Daniel = new professor('Daniel')
const Lucas = new professor('Lucas')

const Eduardo = new aluno('Eduardo Alfonso')
const Felipe = new aluno('Felipe Flores')

Lucas.apresentar()
Daniel.ensinar()

console.log('\n-------------------------\n')

Eduardo.apresentar()
Felipe.estudar()

//2.
class funcionario {
    protected nome: string
    protected salario: number

    constructor(nome: string, salario: number){
        this.nome = nome
        this.salario = salario
    }

    public mostrarSalario(): void{
        console.log(`${this.nome} está ganhando R$${this.salario} de salário.`)
    }
}

class gerente extends funcionario {
    aumentarSalario(): void{
        console.log(`O abençoado do Gerente ${this.nome} ganhou um aumento de R$500,00. Parabéns, #sqn!`)
        this.salario += 500
    }
}

class estagiario extends funcionario {
    receberAjudaDeCusto(): void{
        console.log(`Coitado dele!\n O ${this.nome} recebeu uma ajuda de custo de R$200,00.`)
    }
}