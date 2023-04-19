//Image 1
//Mouseover and mouseout events of functions
document.getElementById("winner1").addEventListener("mouseover", highlight);
document.getElementById("winner1").addEventListener("mouseout", delight);

//Adds a purple border around the image
function highlight() {
    document.getElementById("winner1").style="border: solid #663399 5px;"
}

//Removes border when mouse goes away
function delight() {
    document.getElementById("winner1").style="border: none;"
}



//Image 2
//Mouseover and mouseout events of functions
document.getElementById("winner2").addEventListener("mouseover", highlight2);
document.getElementById("winner2").addEventListener("mouseout", delight2);

//Adds a purple border around the image
function highlight2() {
    document.getElementById("winner2").style="border: solid #663399 5px;"
}

//Removes border when mouse goes away
function delight2() {
    document.getElementById("winner2").style="border: none;"
}



//Image 3
//Mouseover and mouseout events of functions
document.getElementById("winner3").addEventListener("mouseover", highlight3);
document.getElementById("winner3").addEventListener("mouseout", delight3);

//Adds a purple border around the image
function highlight3() {
    document.getElementById("winner3").style="border: solid #663399 5px;"
}

//Removes border when mouse goes away
function delight3() {
    document.getElementById("winner3").style="border: none;"
}