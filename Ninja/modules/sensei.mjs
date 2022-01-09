//Javier Villegas
import { Ninja } from "./ninja.mjs";
export class Sensei extends Ninja {
    constructor(nombre, saludS = 200,sabiduria=10,fuerza=50){
        super(nombre, saludS,fuerza);
        this.sabiduria = sabiduria;
    }
    speakWisdom(){
        super.dinkSake();
        super.sayFr('Lo que un Programador Puede hacer en un mes, dos programadores pueden hacerlo en dos meses');
    }
    hurt(){
        this.salud-=5;
    }
}