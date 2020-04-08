var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for(var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
    
            if(this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }  
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
    
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play Again?";
    
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();

    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors"
    messageDisplay.textContent = "";

    // change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetBtn.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();

    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";

    // change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});


function changeColors(color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num) {
    // make an array
    var arr = [];

    // repeat num times
    for(var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }

    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}