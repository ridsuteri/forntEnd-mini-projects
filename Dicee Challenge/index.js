var randomno1=Math.random();
var randomno2=Math.random();

randomno1=randomno1*6;
randomno2=randomno2*6;

randomno1=Math.floor(randomno1)+1;
randomno2=Math.floor(randomno2)+1;

var randimg1='images/dice'+randomno1+'.png';
var randimg2='images/dice'+randomno2+'.png';


document.querySelector(".img1").setAttribute("src",randimg1);

document.querySelector(".img2").setAttribute("src",randimg2);

if(randomno1>randomno2)
document.querySelector("h1").innerHTML="🚩Player1 Won";

else if(randomno1<randomno2)
document.querySelector("h1").innerHTML="🚩Player2 Won";

else
document.querySelector("h1").textContent="Draw";