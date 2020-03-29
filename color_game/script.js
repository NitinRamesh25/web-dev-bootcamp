var squareList = document.querySelectorAll(".square");
var selectedColor = document.querySelector("#selectedColor");
var header = document.querySelector("#header");

var newColorButton = document.querySelector("#newColor");

var randomColorList = [];
var red = 0;
var green = 0;
var blue = 0;
var color = "";
var randomColor = "";

for (var i = 0; i < squareList.length; i++) {
    red = Math.ceil(Math.random() * 255);
    blue = Math.ceil(Math.random() * 255);
    green = Math.ceil(Math.random() * 255);
    color = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";

    randomColorList.push(color);
    squareList[i].style.backgroundColor = color;

    squareList[i].addEventListener("click", function () {
        if (this.style.backgroundColor === randomColor) {
            changeColor();
        }
        else {
            this.style.backgroundColor = "#232323";
        }
    });
}

randomColor = randomColorList[Math.floor(Math.random() * randomColorList.length)];
selectedColor.textContent = randomColor;

function changeColor() {
    for (var i = 0; i < squareList.length; i++)
        squareList[i].style.backgroundColor = randomColor;

    header.style.backgroundColor = randomColor;
}

newColorButton.addEventListener("mouseenter", function () {
    this.style.backgroundColor = window.getComputedStyle(header, null).getPropertyValue("background-color");
    this.style.color = "#faf4ff";
});

newColorButton.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#faf4ff";
    this.style.color = "black"
});

newColorButton.addEventListener("click", function(){
    location.reload();
});