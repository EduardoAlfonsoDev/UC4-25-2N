class Hobbit {
    private idade: number;

    constructor (idade: number){
        this.idade = idade;
    }
    fazerAniversario(){
        this.idade += 1;
        console.log(`Parabéns! Você agora tem ${this.idade} anos!`);
    }
    mostrarIdade(){
        console.log(`A idade atual do hobbit é: ${this.idade} anos.`);
    }
}
const frodo = new Hobbit(50);
frodo.mostrarIdade();
frodo.fazerAniversario();
frodo.mostrarIdade();

//EXERCICO 2-ESPADA ELFICA:
class EspadaElfica{
    private durabilidade: number;

    constructor(){
        this.durabilidade = 100;
    }
        public usar(){
        if(this.durabilidade > 0){
            console.log("A espada elfica foi usada com sucesso!");
            this.durabilidade -= 10;
        } else {
            console.log("A espada elfica está quebrada e não pode aumentar sua durabilidade!");
        }
    }
        
        public repararEspada(){
            this.durabilidade = 100;
            console.log("A espada elfica foi reparada e sua durabilidade foi restaurada!");

        }

        public mostrarDurabilidade(){
            console.log(`A durabilidade atual da espada elfica é: ${this.durabilidade}%`);
        }
    }

const espada = new EspadaElfica();
espada.mostrarDurabilidade();
espada.usar();
espada.mostrarDurabilidade();
espada.repararEspada();
espada.mostrarDurabilidade();