var allCups = document.querySelectorAll(".cup");
var ball = document.querySelector(".ball");
var donutImg = document.querySelector(".imgball");
var allCupsArray = [0, 1, 2];

var spotZero = document.getElementById('spotZero');
var spotOne = document.getElementById('spotOne');
var spotTwo = document.getElementById('spotTwo');

var cup0 = document.querySelector("#cup0");
var cup1 = document.querySelector("#cup1");
var cup2 = document.querySelector("#cup2");


//How/Where does the ball move?
var moveBall = function() {
    //Select a random cup to cover the ball
    let selectedCup = allCupsArray[Math.floor(Math.random()*allCupsArray.length)];

    //Defining the pixels (distance) by which the ball should move
    if (selectedCup === 1) {
        ball.style.top = '130px';
        ball.style.left = '355px';

        document.querySelector('#cup1').classList.add('winner');
        console.log('added winner to cup1')
    } else if (selectedCup === 2) {
        ball.style.top = '130px';
        ball.style.left = '580px';

        document.querySelector('#cup2').classList.add('winner');
        console.log('added winner to cup2')
    } else {
        ball.style.top = '130px';
        // ball.style.left = '130px';

        document.querySelector('#cup0').classList.add('winner');
        console.log('added winner to cup0')
    }
}


//----------------------------------------------------//

//Defining the swap functions:
var swap0And2 = function(childOfSpotZero, childOfSpotTwo) {
    cup2.classList.add("swap2With0");
    cup0.classList.add("swap0With2");

    setTimeout(function() {
        cup2.classList.remove("swap2With0");
        cup0.classList.remove("swap0With2");

        console.log("Swapped cup0 w cup2");

        if (cup2.classList.contains("winner")) {
            cup2.classList.remove('winner');
            cup0.classList.add('winner');
            console.log("removed WINNER from cup2, added to cup0")
        } else if (cup0.classList.contains("winner")) {
            cup0.classList.remove('winner');
            cup2.classList.add('winner');
            console.log("removed WINNER from cup0, added to cup2")
        }
    }, 400)
}

var swap0And1 = function(childOfSpotZero, childOfSpotOne) {
    cup0.classList.add("swap0With1");
    cup1.classList.add("swap1With0");

    setTimeout(function() {
        cup0.classList.remove("swap0With1");
        cup1.classList.remove("swap1With0");

        console.log("Swapped cup0 w cup1");

        if (cup1.classList.contains("winner")) {
            cup1.classList.remove('winner');
            cup0.classList.add('winner');
            console.log("removed WINNER from cup1, added to cup0")
        } else if (cup0.classList.contains("winner")) {
            cup0.classList.remove('winner');
            cup1.classList.add('winner');
            console.log("removed WINNER from class0, added to cup1")
        }
    }, 400)
}

var swap1And2 = function(childOfSpotOne, childOfSpotTwo) {
    cup1.classList.add("swap1With2");
    cup2.classList.add("swap2With1");

    setTimeout(function() {
        cup1.classList.remove("swap1With2");
        cup2.classList.remove("swap2With1");

        console.log("Swapped cup1 w cup2");

        if (cup1.classList.contains("winner")) {
            cup1.classList.remove('winner');
            cup2.classList.add('winner');
            console.log("removed WINNER from cup1, added to cup2")
        } else if (cup2.classList.contains("winner")) {
            cup2.classList.remove('winner');
            cup1.classList.add('winner');
            console.log("removed WINNER from cup2, added to cup1")
        }
    }, 400)
}

//---------------------------------------------------//


//Choosing each random swap animation:
var chooseRandomSwap = function() {
    let selectedSwap = Math.floor(Math.random() *3);
    // let selectedSwap = 2;
    if (selectedSwap === 0) {
        swap0And2(spotZero.children[0], spotTwo.children[0]);
    } else if (selectedSwap === 1) {
        swap0And1(spotZero.children[0], spotOne.children[0]);
    } else if (selectedSwap === 2) {
        swap1And2(spotOne.children[0], spotTwo.children[0]);
    }
}

//Swapping the cups randomly i = 15 times (immediately-invoked function expression)
var randomSwap = function(i) {
    for (let i = 0; i < 11; i++) {
        (function (i) {
            setTimeout(function () {
            chooseRandomSwap(); //run this code
            console.log(i)//to check if this chunk of code indeed runs 11 times
        }, 700*i); //the code repeats itself every 700ms
    })(i); //for a total of i=11 times
    };
}


//---------------------------------------------------//
//What happens when each spot is clicked after the shuffling is complete:
//***CREATE POP-UPS FOR WIN/LOSE CONDITION***
//*delete making ball transparent since now i'm using image
var spotZeroClick = function() {
    cup0.classList.add("transparent");
    console.log("made cup0 transparent");

    if (cup0.classList.contains("winner")) {
        console.log("You won! The kitty thanks you.")
    } else {
        console.log("Oh no! Kitty is still sad. Try again next time?")
    }

    ball.classList.remove("transparent");
}

var spotOneClick = function() {
    cup1.classList.add("transparent");
    console.log("made cup1 transparent");

    if (cup1.classList.contains("winner")) {
        console.log("You won! The kitty thanks you.")
    } else {
        console.log("Oh no! Kitty is still sad. Try again next time?")
    }

    ball.classList.remove("transparent");
}

var spotTwoClick = function() {
    cup2.classList.add("transparent");
    console.log("made cup2 transparent");

    if (cup2.classList.contains("winner")) {
        console.log("You won! The kitty thanks you.")
    } else {
        console.log("Oh no! Kitty is still sad. Try again next time?")
    }

    ball.classList.remove("transparent");
}
//---------------------------------------------------//


//Initialise page / game once introScreen is clicked away:
var gameInit = function() {
    var bringCupsBackDown = function() {
        for (var i=0; i < allCups.length; i++) {
        allCups[i].style.top = '0px';
        };
    }

    var makeBallTransparent = function() {
        ball.classList.add("transparent");
    }

    var bringCupsUp = function() {
        for (var i=0; i < allCups.length; i++) {
            allCups[i].style.bottom = '50px';
        };
    }

    setTimeout(bringCupsUp, 800);
    setTimeout(moveBall, 1300); //ball moves to randomly-selected cup
    setTimeout(bringCupsBackDown, 2000);
    setTimeout(makeBallTransparent, 2000); //makes the ball transparent when the cups fall back down
    //MAKE DONUTIMG DISAPPEAR (removeElement/Child) WHEN CUPS FALL BACK DOWN*****


    setTimeout(randomSwap, 2600); //shuffling of cups starts & ends

    //Insert message for user: "Click on the cup which hides the ball!" (append to h1)

    //Make the cups clickable again
    cup0.addEventListener("click", spotZeroClick);
    cup1.addEventListener("click", spotOneClick);
    cup2.addEventListener("click", spotTwoClick);

    //FIX/ADD: remove USER-SELECTED CUP onclick (to reveal whether or not they're right) + put back donutImg under correct cup (reappend)

};

gameInit();
//-------------------------------------------------//


//PUT BELOW IN JS FILE FOR INDEX INSTEAD:
// var startGame = function() {
//     var startScreen = document.querySelector("#introScreen");
//     startScreen.parentNode.removeChild(startScreen);
// }

// //What to do when 'start' button is clicked:
// var startButton = document.querySelector("button");
// startButton.addEventListener("click", startGame);


//------------------------------------------------//


//onclick startbutton, remove startScreen.parentNode
//(then an EMPTY PAGE remains)
//THEN load all yr game elements