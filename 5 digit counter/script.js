var end = document.getElementById("time-limit");
var interval;
var count = 0;

var currN = document.querySelectorAll(".timer .current");
var nextN = document.querySelectorAll(".timer .next");

function counter() {
    var number = parseInt(document.getElementById("time-limit").value);


    if (number <= 0 || number > 99999) {
        window.alert("NUmber not within the range");
        clearInterval(interval);
        // resetTimer(currN.nextN, 5);
        return;
    }

    // if user clicks reset timer again...
    resetTimer(currN, nextN, 5);
    clearInterval(interval);

    interval = setInterval(() => {
        if (count == number) {
            window.alert("Timer Ended");
            clearInterval(interval);
            resetTimer(currN, nextN, 4);
            return;
        }
        increaseCounter(currN, nextN, 4);
        ++count;
    }, 1000);
}


function resetTimer(currN, nextN, end) {
    for (let i = 0; i < end; i++) {

        currN[i].innText = 0;
        nextN[i].innText = 1;
    }
}

function increaseCounter(currN, nextN, index) {
    let current = currN[index];
    let next = nextN[index];

    if (current.innerText == 9) {
        increaseCounter(currN, nextN, index - 1);
    }

    next.classList.add("animate");

    setTimeout(function () {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
        if (next.innerText > 9) {
            next.innerText = 0;
        }
    }, 500);
}