const colection = {
    units : 
    [
        {name:"Ninja Cinturón Rojo", cost:3, power:3,res: 4},
        {name:"Ninja Cinturón Negro", cost:4, power:5,res: 4}
    ],
    effects :
    [
        {name:"Algoritmo Difícil",cost:2,stat:"res",magnitude:3,text:"Aumentar la resistencia del objetivo en 3"},
        {name:"Rechazo de promesa no manejado",cost:1,stat:"res",magnitude:-2,text:"reducir la resistencia del objetivo en 2"},
        {name:"Programación en pareja",cost:3,stat:"pod",magnitude:-2,text:"aumentar el poder del objetivo en 2"}
    ]
}

export class Deck {
    constructor(owner){
        this.owner=owner;
        this.hand = this.fill();
        this.riffle();
    }
    getHand(){
        return this.hand;
    }
    fill(){
        const deck= 
        [
            ...colection.units.map(card=>({...card,"type":"unit"})),
            ...colection.effects.map(card=>({...card,"type":"effect"}))
        ];
        return deck.map((card,index)=>({...card, "cardID":`card${index}`,}))

    }
    riffle(){
        this.hand = this.hand.sort(() => Math.random()-0.5);
    }
    useCard(cardId){
        const cardIndex = this.hand.reduce((acc,el,index)=> el.cardID==cardId?acc+index:acc+0,0);
        const cardUsed = this.hand.splice(cardIndex,cardIndex+1);
        return cardUsed;
    }
    

}
