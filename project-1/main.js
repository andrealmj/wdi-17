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
}

// var animate0To2 = function() {
//     document.getElementById('cup0').classList.add("swap0With2");
// }

var swap0And1 = function() {
    document.getElementById('cup0').classList.add("swap0With1");
    document.getElementById('cup1').classList.add("swap1With0");
}

// var animate1To0 = function() {
//     document.getElementById('cup1').classList.add("swap1With0");
// }

var swap1And2 = function() {
    document.getElementById('cup1').classList.add("swap1With2");
    document.getElementById('cup2').classList.add("swap2With1");
}

// var animate2To1 = function() {
//     document.getElementById('cup2').classList.add("swap2With1");
// }

//------------------------------------------------//


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

// //Swap cups at random 15 times
// var randomSwap = function() {
//     //Swap x = 15 times
//     let x = 0;
//     do {
//         chooseRandomSwap();
//         x++;
//         console.log(x)
//     } if (x > 15) {
//         clearInterval(randomSwap);
//     }
// }

var randomSwap = function(i) {
for (let i = 0; i < 15; i++) {
  (function (i) {
    setTimeout(function () {
        chooseRandomSwap();
        console.log(i)
    }, 500*i);
  })(i);
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
    setTimeout(moveBall, 500);
    setTimeout(bringCupsBackDown, 1200);

    setTimeout(randomSwap, 1800);

};


//What to do when 'start' button is clicked:
var startButton = document.querySelector("button");
startButton.addEventListener("click", startGame);