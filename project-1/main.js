var allCups = document.querySelectorAll(".cup");
var ball = document.querySelector(".ball");
var allCupsArray = [0, 1, 2];
let guess = false;

// var spotZero = document.getElementById('spotZero');
// var spotOne = document.getElementById('spotOne');
// var spotTwo = document.getElementById('spotTwo');

//How/Where does the ball move?
var moveBall = function() {
    //Select a random cup to cover the ball
    let selectedCup = allCupsArray[Math.floor(Math.random()*allCupsArray.length)];
//Defining the pixels (distance) by which the ball should move
    if (selectedCup === 1) {
        ball.style.top = '300px';
        ball.style.left = '330px';
        // document.getElementById('cup1').appendChild('ball');
    } else if (selectedCup === 2) {
        ball.style.top = '300px';
        ball.style.left = '570px';
        // document.getElementById('cup2').appendChild('ball');
    } else {
        ball.style.top = '300px';
        ball.style.left = '90px';
        // document.getElementById('cup0').appendChild('ball');
    }
}


//----------------------------------------------------//

//Defining the swap functions:
var swap0And2 = function() {
    document.getElementById('cup2').classList.add("swap2With0");
    document.getElementById('cup0').classList.add("swap0With2");

    setTimeout(function() {
        document.getElementById('cup2').classList.remove("swap2With0");
        document.getElementById('cup0').classList.remove("swap0With2");
    }, 400)
}

var swap0And1 = function() {
    document.getElementById('cup0').classList.add("swap0With1");
    document.getElementById('cup1').classList.add("swap1With0");

    setTimeout(function() {
        document.getElementById('cup0').classList.remove("swap0With1");
        document.getElementById('cup1').classList.remove("swap1With0");
    }, 400)
}

var swap1And2 = function() {
    document.getElementById('cup1').classList.add("swap1With2");
    document.getElementById('cup2').classList.add("swap2With1");

    setTimeout(function() {
        document.getElementById('cup1').classList.remove("swap1With2");
        document.getElementById('cup2').classList.remove("swap2With1");
    }, 400)
}

//---------------------------------------------------//


//Choosing random swap:
var chooseRandomSwap = function() {
    let selectedSwap = Math.floor(Math.random() *3);
    if (selectedSwap === 0) {
        swap0And2();
    } else if (selectedSwap === 1) {
        swap0And1();
    } else if (selectedSwap === 2) {
        swap1And2();
    }
}

//Swapping the cups randomly i = 15 times (immediately-invoked function expression)
var randomSwap = function(i) {
for (let i = 0; i < 15; i++) {
    (function (i) {
        setTimeout(function () {
        chooseRandomSwap(); //run this code
        console.log(i) //to check if this chunk of code indeed runs 15 times
    }, 700*i); //the code repeats itself every 700ms
  })(i); //for a total of i=15 times
};
}


//Define startGame function
var startGame = function() {
    var bringCupsBackDown = function() {
        for (var i=0; i < allCups.length; i++) {
        allCups[i].style.top = '0px';
        };
    }
    for (var i=0; i < allCups.length; i++) {
        allCups[i].style.bottom = '100px';
    };
    setTimeout(moveBall, 500); //ball moves to randomly-selected cup
    setTimeout(bringCupsBackDown, 1200);

    setTimeout(randomSwap, 1800); //shuffling of cups starts

};


//What to do when 'start' button is clicked:
var startButton = document.querySelector("button");
startButton.addEventListener("click", startGame);