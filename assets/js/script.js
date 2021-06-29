// Credit for getting the game running and working: PortExe, https://www.youtube.com/watch?v=3uuQ3g92oPQ&list=PL4q8dcAYPWjTRKitqOzyyAU2jkRblHTFc&index=6&t=1601s

//variables
let flippedCard = false;
let card1, card2;

//The Game will wait fo the Dom to complete loading before running

document.addEventListener("DOMContentLoaded", () =>{

    //Cards In Memory Game
    let cards = Array.from(document.getElementsByClassName('card'));

    //make the cards clickable with the function 
    cards.forEach(card =>{
      card.addEventListener('click', cardFlip);
    })

    //CardFlip Function
    function cardFlip(){
      this.classList.add('visible');
      //Votes climb with each click
      voted();

      //Give clicks identities to be checked
      if(!flippedCard){
          flippedCard = true;
          card1 = this;
      }else{ 
      card2 = this;
      flippedCard = false;
      } 
      //Check for match
      checkMatch();

    };
    
    
})

    //Vote Counter rises with each click
    var votes = 0; 
    function voted() {
        votes ++ ;
        document.getElementById("votes").innerHTML = votes;
    };

    //Timer
    var time = 100
    var timer = setInterval(countDown, 1000)
    
    function countDown(){
        time=time-1;
    
    if (time <= 0){
     clearInterval(timer);
     return;
    }document.getElementById("time-remaining").innerHTML= time;
    }

    //Get Card Information
    function getCardData(){
        return (this.getElementsByClassName('card-data')[0].src)
    }

    //Check Match
    function checkMatch(){
        if (this.getCardData(card1) === this.getCardData(card2)){
            cardMatch();
        }
        else{cardMisMatch()
        }
    }
    //card Match
    
    //Mismatch
    function cardMisMatch(){
    card1.classList.remove('visible');
    card2.classList.remove('visible');
    }