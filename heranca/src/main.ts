import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato"; 
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";
import { Gerente } from "./Gerente";
import { Estagiario} from "./Estagiario";


const professor = new Professor("Alfonso")
const aluno = new Aluno("Alune")

const Rex = new Cachorro("Rex")
const Garfield = new Gato("Garfield")

const gerente = new Gerente('Alfonso', 8000)
const estagiario = new Estagiario('Apollo', 900)

console.log("Exibindo o salario do gerente")
gerente.mostrarSalario()
gerente.aumentarSalario(1000)
console.log('exibindo o salario do salario após aumento')
gerente.mostrarSalario()
console.log('--------------------------------------')
console.log("Exibindo o salario do gerente")
estagiario.mostrarSalario()
estagiario.receberAjudaDeCusto(100)
console.log('exibindo o salario do salario após aumento')
estagiario.mostrarSalario()
//Rex.latir()
//Rex.comer()
//Rex.dormir()

//console.log('---------------')

//Garfield.miar()
//Garfield.comer()
//Garfield.dormir()

//Garfield.emitirSom()
//Rex.emitirSom()