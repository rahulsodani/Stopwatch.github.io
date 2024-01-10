
// declare variables
// the first 2 digits in left side of stopwatch keeps track of seconds
// the last 2 digits in right side of stopwatch keeps track of millisconds in the multiples of 10 milliseconds
var seconds = document.getElementById("seconds");
var mseconds = document.getElementById("mseconds");
var secondsvirtual=document.querySelector(".secondsvirtual");
// this is to increase the counter by 1 in 10 milliseconds ==>so in 100 milliseconds means counter increases by 10 units and in 1sec by 100 units 
var counter = 0;
// id is used for stop the interval. Declared in global scope as used in multiple functions to stop the interval
var id;
// used ms and s variables in global scope to take the secons and milliseconds separatley from the counter
var ms, s;
// used for running stopwatch
function runStopwatch() {
    counter = counter + 1;
    ms = counter % 100;
    s = parseInt(counter / 100);

    if (ms < 10) {
        mseconds.textContent = 0 + "" + ms;
    }
    else
        mseconds.textContent = ms;
    if(s!=parseInt(secondsvirtual.textContent))
    {
        console.log(s);
        if (s < 10) {
            secondsvirtual.textContent = 0 + "" + s;
            
        }
        else
            {
                secondsvirtual.innerText = s;
            }
        secondsvirtual.classList.add("classtop");
        setTimeout(() => {
            secondsvirtual.classList.remove("classtop");
            seconds.innerText=secondsvirtual.innerText;
        },500);
    }
}
// triggers when start button is clicked
function startStopWatch() {
    id = setInterval(runStopwatch, 10);
}
// triggers when stop button is clicked
function stopStopWatch() {
    clearInterval(id);
}
// triggers when reset button is clicked
function restartStopWatch() {
    clearInterval(id);
    ms = s = counter = 0;
    mseconds.textContent = 0 + "" + 0;
    seconds.textContent = 0 + "" + 0;
    secondsvirtual.innerText=0+""+0;
}
// handle all the click events
function handleClickListener(event) {
    const target = event.target;
    if (target.id == "start") {
        startStopWatch();
    }
    if (target.id == "stop") {
        stopStopWatch();
    }
    if (target.id == "reset") {
        restartStopWatch();
    }
}

document.addEventListener('click', handleClickListener);