class Card{
    constructor (name,cost){
        this.name=name;
        this.cost=cost;
    }
}

export class Unit extends Card{
    constructor (name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    };
    attack(target){
        target.hurt(this.power);
    };
    buff(magnitude){
        this.attack+=magnitude;
    }
    debuff(magnitude){
        this.attack-=magnitude;
    }
    hurt(damage){
        this.res-=damage;
    }
    heal(magnitude){
        this.res+=magnitude;
    }
    
}

export class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    buffPower(target){
        target.buff(this.magnitude);
    }
    buffRes(target){
        target.heal(this.magnitude);
    }
    debuffRes(target){
        target.hurt(this.magnitude);
    }
}

