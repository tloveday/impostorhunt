// Credit for getting the game running and working: PortExe, https://www.youtube.com/watch?v=3uuQ3g92oPQ&list=PL4q8dcAYPWjTRKitqOzyyAU2jkRblHTFc&index=6&t=1601s

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
      voted();
      
      

    };
    
    
})

//vote tracker rises with each click
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
