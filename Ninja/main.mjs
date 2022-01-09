import { Ninja } from "./modules/ninja.mjs";
import { Sensei } from "./modules/sensei.mjs";


const ninja1 = new Ninja("Hyabusa",100,50);
ninja1.sayName();
ninja1.showStats();
ninja1.dinkSake();
ninja1.showStats();
ninja1.hurt();
ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"