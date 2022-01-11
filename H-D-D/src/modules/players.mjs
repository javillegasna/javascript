import {Deck} from './deck.mjs';

 export class Player{
    constructor(name,health=100,gems=30){
        this.name=name;
        this.health=health;
        this.gems=gems;
        this.deck= new Deck(name);
    }
    getName(){
        return this.name;
    }
    getHealth(){
        return this.health;
    }
    getGems(){
        return this.gems;
    }
    heal(magnitude){
        this.health+=magnitude;
    }
    hurt(magnitude){
        this.health-=magnitude;
    }
    spendGems(magnitude){
        this.gems-=magnitude;
    }
    addGems(magnitude){
        this.gems+=magnitude;
    }
}