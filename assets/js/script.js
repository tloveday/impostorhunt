// Credit for getting the game running and working: PortExe, https://www.youtube.com/watch?v=3uuQ3g92oPQ&list=PL4q8dcAYPWjTRKitqOzyyAU2jkRblHTFc&index=6&t=1601s
// Credit is given to my mentor Antionio for guidance throughout the document clarifying problems, conflicts.

//variables

let flippedCard = false;
let card1, card2;
var time = 100;
var timer = null;

//cards array
let cardsArray = ["Cyan", "Cyan", "Dead", "Dead", "Ghost", "Ghost", "Pink", "Pink", "Purple", "Purple", "Red", "Red", "Impostor", "White", "White"];

//The Game will wait fo the Dom to complete loading before running

document.addEventListener("DOMContentLoaded", () =>{
    
    
    let cards = Array.from(document.getElementsByClassName('card'));

    function updateCardBoard(cardsArray, shuffled_array){
        card_array_length = cardsArray.length - 1;
        index = 0; 
        for (index; index <= card_array_length; index++) {
            frontCard = cardsArray[index].getElementsByClassName('card-data')[0];
            console.log(frontCard);
            frontCard.setAttribute('src',  './assets/images/' + shuffled_array [index] + '.png');
            // cardsArray[index].getElementsByClassName('card-front')[0].getElementsByClassName('card-data')[0].getAttribute('src', shuffled_array[index]);
        }
    }

    
    document.getElementById("start").addEventListener("click", function() {
        console.log ("Press Start")
        shuffledcardsArray = shuffle(cardsArray);
        updateCardBoard(cards, shuffledcardsArray);
        startTimer();
        flipCard();

        //gameStart function that starts the game
        
    });

    document.getElementById("reset").addEventListener("click", function() {
        console.log ("I pressed the reset")
        //reset function that resets the board.
    });



   
    
})

//Flip Card Function
function flipCard(){
    this.classList.add('visible');
    //Votes climb with each click
    voteNumber();
    //Cards Identitied made via the data attribute
    clickedCharacter = this.getAttribute('data-char');
    checkImpostor(clickedCharacter);
      //Give clicks identities to be checked
      if(!flippedCard){
          flippedCard = true;
          card1 = this;
      }else{ 
          card2 = this;
          flippedCard = false;
          //Check for match
          if (checkMatch()) {
              console.log('We should lock the cards');
              //stop the cards being repicked- once flipped.
              card1.removeEventListener('click', flipCard, false);
              card2.removeEventListener('click', flipCard, false);
          }
          else{
              console.log('We should unflip the cards');
              cardMisMatch();
          }
      } 
    
  }
  
  //Check for Impostor- Win Condition.
  function checkImpostor(clickedCharacter){
    return setTimeout(function (){
        if (clickedCharacter === 'impostor'){
            alert('You won');
            clearTimeout(timer);
        }
        else{
            console.log('I clicked ', clickedCharacter);
        }
    }, 500);    
}

    //Vote Counter rises with each click
    var votes = 0; 
    function voteNumber() {
        votes ++ ;
        document.getElementById("votes").innerHTML = votes;
    };

    //Timer
    function startTimer() {
        timer = setInterval(countDown, 1000);
    }
    
    // CountDown Timer   
    function countDown(){
        time=time-1;
    
        if (time === 0){
            clearTimeout(timer);;
            alert('Game Over')
            return;
        }
        document.getElementById("time-remaining").innerHTML= time;
    }

    //Check Match
    function checkMatch(){
        if (card1.getAttribute('data-char') === card2.getAttribute('data-char')){
            return true;
        }
        else{
            false;
        }
    }
    //card Match
    
    //Mismatch
    function cardMisMatch(){
       //Timeout required so that card reveal of card2 is seen and gives players time to add the card to memory
        setTimeout(()=>{
            card1.classList.remove('visible');
            card2.classList.remove('visible');
        }, 500)
    }

    // Shuffle Cards- Fisher-Yates Shuffle Algorithm.
    function shuffle(cardsArray){
        shuffled_array = [];
        card_array_length = cardsArray.length - 1;
        last_index = card_array_length;
        index = 0; 
        for (index; index <= card_array_length; index++) {
            randIndex = Math.floor(Math.random() * last_index);
            shuffled_array[index] = cardsArray[randIndex];
            cardsArray.splice(randIndex, 1);
            last_index = last_index - 1;
        }
        console.log(shuffled_array);
        return shuffled_array;
    }