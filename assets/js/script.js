// Credit for getting the game running and working: PortExe, https://www.youtube.com/watch?v=3uuQ3g92oPQ&list=PL4q8dcAYPWjTRKitqOzyyAU2jkRblHTFc&index=6&t=1601s

//The Game will wait fo the Dom to complete loading before running

document.addEventListener("DOMContentLoaded", () =>{

    //Cards In Memory Game
    let cards = Array.from(document.getElementsByClassName('card'));


    cards.forEach(card =>{
        card.addEventListener('click', cardFlip(card));
    })

    function cardFlip(card){
       card.classList.add('visible');
    };

})