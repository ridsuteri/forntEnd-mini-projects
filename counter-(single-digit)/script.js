var currentN=document.getElementById('current');
var nextN=document.getElementById('next');

function counter(){
    var time=parseInt(document.getElementById("time-limit").value);
    console.log(time);
    // console.log(typeof(time));
    var count=0;

    if(time<=0||time>9){
        alert("Please Enter the Number within the range");
        resetTimer();
        clearInterval(interval);
        return;
    }


    else if(time>0&&time<=9){
        var interval=setInterval(function(){
            
            if(count==time){
                playAudio();
                console.log('audiio');
                alert('Counter Ended');
                resetTimer();
                clearInterval(interval);
                return;
            }

            ++count;
            increaseTimer(currentN,nextN);
            
        },1000);
    }
    // resetTimer();
}

function increaseTimer(currentN,nextN){
 
    nextN.classList.add('.animate');

    setTimeout(function(){
        currentN.innerText=nextN.innerText;
        nextN.classList.remove('.animate');
        nextN.innerText=parseInt(nextN.innerText)+1;
    },500);
}

function resetTimer(){
    currentN.innerText='0';
    nextN.innerText='1';
}

function playAudio(){
    var audio= new Audio("beep-04.mp3");
    audio.play();
}