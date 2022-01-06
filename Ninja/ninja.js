class Ninja {
    nombre;
    salud;
    velocidad;
    fuerza;
    constructor(nombre,salud=90){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log(`${this.nombre}`);
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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.dinkSake();
ninja1.showStats();
ninja1.hurt();
ninja1.showStats();