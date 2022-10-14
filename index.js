
let cardsPicked, sum=0;
let hasBlackJack;
let isAlive;
let msg = "";
let player = {
    name: "Pari",
    chips: 145
}

let msgEl = document.getElementById("msg-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $"+ player.chips;

function startGame() {
        hasBlackJack = false;
        isAlive= true;
        let card1 = getRandomCard();
        let card2 = getRandomCard();
        cardsPicked= [card1, card2];
        sum = card1+card2; 

    renderGame();
}

function renderGame() {
   
    cardsEl.textContent = `Cards:`;
    for(i=0; i< cardsPicked.length; i++) {
        cardsEl.textContent += ` ${cardsPicked[i]}`;
    }
     if(sum<=20) 
        {
            msg="Do you want to draw a new card?";
        }
    else if(sum===21) 
        {
            hasBlackJack = true;
            msg="Woohoo, you've got Blackjack!";
        }
    else
        {        
            isAlive= false;
            msg="Damn, you lost!";
        }
    msgEl.textContent = msg;
    sumEl.textContent = `Sum: ${sum}`;
}

function newcard() {
    if(isAlive==true && hasBlackJack==false) {
        let card3= getRandomCard();
        cardsPicked.push(card3);
        sum += card3; 
        renderGame();
    }
       
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) +1 ;
    if (randomCard>10) {
        return 10;
    }
    else if (randomCard===1) {
        return 11;
    }
    else {
        return randomCard;
    } 
}