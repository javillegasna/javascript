//Javier Villegas 
export class Ninja {
    #nombre;
    salud;
    velocidad;
    fuerza;
    constructor(nombre,salud=90,fuerza){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=fuerza;
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
    getSalud(){
        return this.salud;
    }
    setSalud(salud){
        this.salud=salud;
    }
}
