var allCups = document.querySelectorAll(".cup");
var ball = document.querySelector(".ball");
var allCupsArray = [0, 1, 2];

// var resultsArray = [];

var spotZero = document.getElementById('spotZero');
var spotOne = document.getElementById('spotOne');
var spotTwo = document.getElementById('spotTwo');

// let childOfSpotZero = spotZero.children[0];
// let childOfSpotOne = spotOne.children[0];
// let childOfSpotTwo = spotTwo.children[0];

var cup0 = document.querySelector("#cup0");
var cup1 = document.querySelector("#cup1");
var cup2 = document.querySelector("#cup2");


//How/Where does the ball move?
var moveBall = function() {
    //Select a random cup to cover the ball
    let selectedCup = allCupsArray[Math.floor(Math.random()*allCupsArray.length)];
    // let selectedCup = 0;
//Defining the pixels (distance) by which the ball should move
    if (selectedCup === 1) {
        ball.style.top = '300px';
        ball.style.left = '330px';

        // cup1.appendChild(ball);

        document.querySelector('#cup1').classList.add('winner');
        console.log('added winner to cup1')
    } else if (selectedCup === 2) {
        ball.style.top = '300px';
        ball.style.left = '570px';

        // cup2.appendChild(ball);

        document.querySelector('#cup2').classList.add('winner');
        console.log('added winner to cup2')
    } else {
        ball.style.top = '300px';
        ball.style.left = '90px';

        // cup0.appendChild(ball);

        document.querySelector('#cup0').classList.add('winner');
        console.log('added winner to cup0')
    }
}

//----------------------------------------------------//

//Defining the swap functions:
var swap0And2 = function(childOfSpotZero, childOfSpotTwo) {

    // let childOfSpotZero = spotZero.children[0];
    // let childOfSpotOne = spotOne.children[0];
    // let childOfSpotTwo = spotTwo.children[0];

    // childOfSpotTwo.style.animation = 'twoToZero ' + '10ms';
    // childOfSpotZero.style.animation = 'zeroToTwo ' + '10ms';

    document.getElementById('cup2').classList.add("swap2With0");
    // spotZero.appendChild(cup2);
    document.getElementById('cup0').classList.add("swap0With2");
    // spotTwo.appendChild(cup0);

    setTimeout(function() {
        // childOfSpotTwo.style.animation = null;
        // childOfSpotZero.style.animation = null;

        document.getElementById('cup2').classList.remove("swap2With0");
        document.getElementById('cup0').classList.remove("swap0With2");

        // spotZero.removeChild(cup2);
        // spotTwo.removeChild(cup0);
        // spotZero.appendChild(childOfSpotTwo);
        // spotTwo.appendChild(childOfSpotZero);

        console.log("Swapped cup0 w cup2");
    }, 400)
}

var swap0And1 = function(childOfSpotZero, childOfSpotOne) {

    // let childOfSpotZero = spotZero.children[0];
    // let childOfSpotOne = spotOne.children[0];
    // let childOfSpotTwo = spotTwo.children[0];

    // childOfSpotZero.style.animation = 'zeroToOne ' + '10ms';
    // childOfSpotOne.style.animation = 'oneToZero ' + '10ms';

    document.getElementById('cup0').classList.add("swap0With1");
    // spotOne.appendChild(cup0);
    document.getElementById('cup1').classList.add("swap1With0");
    // spotZero.appendChild(cup1);

    setTimeout(function() {
        // childOfSpotZero.style.animation = null;
        // childOfSpotOne.style.animation = null;

        document.getElementById('cup0').classList.remove("swap0With1");
        document.getElementById('cup1').classList.remove("swap1With0");

        // spotOne.removeChild(cup0);
        // spotZero.removeChild(cup1);
        // spotOne.appendChild(childOfSpotZero);
        // spotZero.appendChild(childOfSpotOne);

        console.log("Swapped cup0 w cup1");
    }, 400)
}

var swap1And2 = function(childOfSpotOne, childOfSpotTwo) {

    // let childOfSpotZero = spotZero.children[0];
    // let childOfSpotOne = spotOne.children[0];
    // let childOfSpotTwo = spotTwo.children[0];

    // childOfSpotOne.style.animation = 'oneToTwo ' + '10ms';
    // childOfSpotTwo.style.animation = 'twoToOne ' + '10ms';

    document.getElementById('cup1').classList.add("swap1With2");
    // spotTwo.appendChild(cup1);
    document.getElementById('cup2').classList.add("swap2With1");
    // spotOne.appendChild(cup2);

    setTimeout(function() {
        // childOfSpotOne.style.animation = null;
        // childOfSpotTwo.style.animation = null;

        document.getElementById('cup1').classList.remove("swap1With2");
        document.getElementById('cup2').classList.remove("swap2With1");

        // spotTwo.removeChild(cup1);
        // spotOne.removeChild(cup2);
        // spotTwo.appendChild(childOfSpotOne);
        // spotOne.appendChild(childOfSpotTwo);

        console.log("Swapped cup1 w cup2");
    }, 400)
}

//---------------------------------------------------//


//Choosing random swap:
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


var spotZeroClick = function() {
    if (cup0.className === 'cup winner') {
        // document.removeChild(cup0);
        // cup0.style.bottom = '100px';
        alert("You won! The kitty thanks you.")

    } else {
        cup0.style.bottom = '100px';
        alert("Oh no! Kitty is still sad. Try again next time?")
    }
    ball.classList.remove("transparent");
}

var spotOneClick = function() {
    if (cup1.className === 'cup winner') {
        // document.removeChild(cup1);
        // cup1.style.bottom = '100px';
        alert("You won! The kitty thanks you.")
    } else {
        cup1.style.bottom = '100px';
        alert("Oh no! Kitty is still sad. Try again next time?")
    }
    ball.classList.remove("transparent");
}

var spotTwoClick = function() {
    if (cup2.className  === 'cup winner') {
        // document.removeChild(cup2);
        // cup2.style.bottom = '100px';
        alert("You won! The kitty thanks you.")
    } else {
        cup2.style.bottom = '100px';
        alert("Oh no! Kitty is still sad. Try again next time?")
    }
    ball.classList.remove("transparent");
}

//Define startGame function
var startGame = function() {
    var bringCupsBackDown = function() {
        for (var i=0; i < allCups.length; i++) {
        allCups[i].style.top = '0px';
        };
    }

    var makeBallTransparent = function() {
        ball.classList.add("transparent");
    }

    for (var i=0; i < allCups.length; i++) {
        allCups[i].style.bottom = '100px';
    };
    setTimeout(moveBall, 500); //ball moves to randomly-selected cup
    setTimeout(bringCupsBackDown, 1200);
    setTimeout(makeBallTransparent, 1200);

    setTimeout(randomSwap, 1800); //shuffling of cups starts & ends
    //Insert message for user: "Click on the cup which hides the ball!"
    //Make the cups clickable again
    cup0.addEventListener("click", spotZeroClick);
    cup1.addEventListener("click", spotOneClick);
    cup2.addEventListener("click", spotTwoClick);

};


//What to do when 'start' button is clicked:
var startButton = document.querySelector("button");
startButton.addEventListener("click", startGame);

//User selects winning cup
// cup0.addEventListener("click", spotZeroClick);
// cup1.addEventListener("click", spotOneClick);
// cup2.addEventListener("click", spotTwoClick);

