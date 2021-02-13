var colourChanger = document.getElementById("colour-changer");

var colours = ["red", "green", "blue"];
var counter = 0;

function changeColour (){
    colourChanger.style.background = colours[counter];
    counter++;
    
}
setInterval(changeColour, 3000);