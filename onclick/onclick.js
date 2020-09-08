var box=document.getElementById("red-box");
var text=document.getElementById("count");
var count=0;
console.log(box);
console.log(text);
box.addEventListener('click',function(){
    count++;
    console.log(count);
    text.innerText = count + " "
});
