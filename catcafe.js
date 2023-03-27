function openSidebar () {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar () {
    document.getElementById("sidebar").style.width = "0";
}

//---------------------------------------------------- CANVAS SECTION --------------------------------------------

let ourCanvas = document.getElementById("canvas");

let leftLine = ourCanvas.getContext("2d");

leftLine.moveTo(-100, 0);
leftLine.lineTo(100, 200);
leftLine.stroke();

let rightLine = ourCanvas.getContext("2d");

rightLine.moveTo(600, 220);
rightLine.lineTo(185, -50);
rightLine.stroke();

let canvasText = ourCanvas.getContext("2d");

canvasText.font = "28px serif"
canvasText.fillText("Created by Hannah Leah", 10, 80)