var color=["red", "orange", "green", "maroon", "pink", "violet","chartreuse","blueviolet","aqua"];
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var currShape="square";

document.getElementById("shape").onclick=function(){
    var rand=shape[Math.floor(Math.random()*shape.length)];
    document.getElementById(currShape).setAttribute("id",rand);
    currShape=rand;
}

document.getElementById("color").onclick=function(){
    var rand=color[Math.floor(Math.random()*color.length)]
    document.getElementById("block").style.backgroundColor=rand;
}