import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";

const Rex = new Cachorro("Rex")
const Garfield = new Gato("Garfield")

Rex.latir()
Rex.comer()
Rex.dormir()

console.log('---------------')

Garfield.miar()
Garfield.comer()
Garfield.dormir()

Garfield.emitirSom()
Rex.emitirSom()