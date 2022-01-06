import { Ninja } from "./ninja.mjs";
export class Sensei extends Ninja {
    constructor(nombre, SaludS = 200,sabiduria=10){
        super(nombre, SaludS);
        this.sabiduria = sabiduria;
    }
    speakWisdom(){
        super.dinkSake();
        super.sayFr('Lo que un Programador Puede hacer en un mes, dos programadores pueden hacerlo en dos meses');
    }
}