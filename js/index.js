var seconds = 0 
var minutes = 0
var hours = 0

var interval

// add 0 when needed
function zeroDigit(digit){
    if(digit<10){
        return("0"+digit)
    }
    else{
        return(digit)
    }
}

// button functions
function start(){
    watch()
    interval = setInterval(watch,1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    seconds = 0
    minutes = 0
    hours = 0
    document.getElementById("number").innerText="00:00:00"
}

// main fuction
function watch(){
    seconds++
    if(seconds==60){
        minutes++
        seconds=0
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    document.getElementById("number").innerText=zeroDigit(hours)+":"+zeroDigit(minutes)+":"+zeroDigit(seconds)
}