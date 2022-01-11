//Importamos los modulos
import { Player } from "./modules/players.mjs";
//instanciamos jugadores
const player1 = new Player("player1");
const player2 = new Player("player2");
//creamos la partida
const game = {
    turn:"Player 1",
    used_Player1 : {},
    used_Player2 : {}
}
const drawCard = (card)=>{
    //Card Header.
    const strCHContend = `<h2>${card.name}</h2> <i class="far fa-gem"></i><span>${card.cost}</span>`
    const srtCardHeader = `<section class="card__header">${strCHContend} </section>`;

    //card Main.
    const strCMContend = card.type=="unit"?
        `<p><i class="fas fa-shield-alt"></i> <span> ${card.power}</span></p>` +
        `<p><i class="fas fa-bolt"></i><span>${card.res}</span></p>`
    :
        `<p>${card.text}</p>`
    ;
    
    const strCardMain = `<section class="card__main"> `+
        ` <img class="card__img" src="./assets/card__img.jpg" alt="Generic card image">`+
        `  <div class="card__description"> ${strCMContend} </div></section>`;

    //card foooter
    const strCardFooter = `<section class="card__footer"> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><h2>legendary</h2></section>`;

    const strCard= `<div class="card" data-cardtype = ${card.type} data-card-id = "${card.cardID}"> ${srtCardHeader} ${strCardMain} ${strCardFooter}  </div>`;

    return strCard
}
const drawCardsTurn = ()=>{
    //obtener el nodo al cual se va a dibujar
    const boardTurn=document.getElementById("board__Turn");
    //se convierte el objeto card a un nodo html
    const deck = game.turn=="Player 1"? player1.deck.hand.map(card=>drawCard(card)):player2.deck.hand.map(card=>drawCard(card));
    //se junta todos los nodos en unoa sola insercion 
    const htmlDeck = deck.reduce((acc,el)=> acc + el,"");
    boardTurn.innerHTML=htmlDeck + ` <button id = "btnEnd"">${game.turn} <br/> End Turn</button> `;
    //una vez incertados aññadimos lo eventos 
    const cards = document.querySelectorAll(".card");
    cards.forEach(card=>card.addEventListener('click',useCard));
    const btnEndTurn = document.querySelector("#btnEnd");
    btnEndTurn.addEventListener("click",endTurn)
}
const drawCardsBoardPlayer=(target)=>{
    const cardId = target.dataset.cardId;
    let cardUsed
    if(game.turn == "Player 1" ){
        document.getElementById("board__Player1").appendChild(target);
        cardUsed = player1.deck.useCard(cardId)
    }
    else if(game.turn == "Player 2" ){
        document.getElementById("board__Player2").appendChild(target);
        cardUsed = player2.deck.useCard(cardId)
    }
    cardApend(cardUsed);
}
const cardApend=(cardUsed)=>{
    if(game.turn=="Player 1"){
        used_Player1= {...board_Player1,cardUsed};
    }
    else{
        used_Player2={...board_Player2,cardUsed};
    }
}
const  useCard =  (e)=>{
    e.stopPropagation();
    const target = e.currentTarget;
    drawCardsBoardPlayer(target);
    drawCardsTurn();
};
const endTurn = ()=>{
    game.turn = game.turn=="Player 1"?"Player 2":"Player 1";
    drawCardsTurn();
    return game.turn;
}


drawCardsTurn();
