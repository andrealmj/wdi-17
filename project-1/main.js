var allCups = document.querySelectorAll(".cup");
var ball = document.querySelector(".ball");
var allCupsArray = [0, 1, 2];

//How/Where does the ball move?
var moveBall = function() {
    //Select a random cup to cover the ball
    let selectedCup = allCupsArray[Math.floor(Math.random()*allCupsArray.length)];

    //Defining the pixels by which the ball should move
    if (selectedCup === 1) {
        ball.style.top = '300px';
        ball.style.left = '270px';
    } else if (selectedCup === 2) {
        ball.style.top = '300px';
        ball.style.left = '470px';
    } else {
        ball.style.top = '300px';
        ball.style.left = '70px';
    }
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
    setTimeout(moveBall, 1000);
    setTimeout(bringCupsBackDown, 2000);
};

//What to do when 'start' button is clicked:
var startButton = document.querySelector("button");
startButton.addEventListener("click", startGame);