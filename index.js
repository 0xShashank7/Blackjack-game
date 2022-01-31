
let cards = []
let sum = 0
let player={
    name: "hello hooman",
    chips: 69
}

let hasBlackJack = false
let isAlive = false

let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playersEl=document.getElementById("player-el")

playersEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNo = Math.floor(Math.random()*13) + 1
    if(randomNo > 10 ){
        return 10
    }
    if(randomNo===1){
        return 11
    } else{
        return randomNo 
    }
}

function startGame(){
    isAlive= true
    let firstCard = getRandomCard()
    let secondCard= getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i = 0; i<cards.length; i+=1){
        cardsEl.textContent+=cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <=20){
        message = "Do u want to draw a new card?🤔"
    } else if( sum == 21){
        message = "You've got Blackjackk!!!😍"
        hasBlackJack=true
    } else{
        message = "You're out of game😭 "
        isAlive = false
    }
    messageEl.textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame() 
} 
}