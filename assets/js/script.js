// Credit for getting the game running and working: PortExe, https://www.youtube.com/watch?v=3uuQ3g92oPQ&list=PL4q8dcAYPWjTRKitqOzyyAU2jkRblHTFc&index=6&t=1601s
// Credit is given to my mentor Antionio for guidance throughout the document clarifying problems, conflicts.

//variables
//Cards In Memory Game
let flippedCard = false;
let card1, card2;
var time = 100;
var timer = null;

//The Game will wait fo the Dom to complete loading before running

document.addEventListener("DOMContentLoaded", () =>{
    
    let cards = Array.from(document.getElementsByClassName('card'));
    startTimer();


    //make the cards clickable with the function 
    cards.forEach(card =>{
      card.addEventListener('click', cardFlip);
    })

    //Check for Impostor- Win Condition.
    function check_if_impostor(clicked_char){
        return setTimeout(function (){
            if (clicked_char === 'impostor'){
                alert('You won');
                clearTimeout(timer);
            }
            else{
                console.log('I clicked ', clicked_char);
            }
        }, 500);    
    }



    //CardFlip Function
    function cardFlip(){
      this.classList.add('visible');
      //Votes climb with each click
      voted();
      //Cards Identitied made via the data attribute
      clicked_char = this.getAttribute('data-char');
      check_if_impostor(clicked_char);
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
                card1.removeEventListener('click', cardFlip, false);
                card2.removeEventListener('click', cardFlip, false);
            }
            else{
                console.log('We should unflip the cards');
                cardMisMatch();
            }
        } 
      
    }
    
    
})

    //Vote Counter rises with each click
    var votes = 0; 
    function voted() {
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
    
        if (time <= 0){
            clearInterval(timer);
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
