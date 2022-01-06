//Javier Villegas
export class Ninja {
    constructor(nombre,salud=90){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log(`${this.nombre}`);
    }
    sayFr(message){
        console.log(message)
    }
    showStats(){
        console.log(`Fuerza: ${this.fuerza} Velocidad:${this.velocidad} Salud:${this.salud}`);
    }
    dinkSake(){
        this.salud+=10;
    }
    hurt(){
        this.salud-=10;
    }
}
