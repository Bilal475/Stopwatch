var min=0
var sec=0
var mili=0
var minHead=document.getElementById("min")
var secHead=document.getElementById("sec")
var miliHead=document.getElementById("mili")
var interval;
function timer(){
    mili++
    miliHead.innerHTML=mili
    if (mili>=100){
        sec++
        secHead.innerHTML=sec
        mili=0
    }
    else if(sec>=60){
        min++
        minHead.innerHTML=min
        sec=0
    }
}
function start(){
    interval=setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled=false
}
function reset(){
    stop()
    min=0;sec=0;mili=0;
    minHead.innerHTML=min
    secHead.innerHTML=sec
    miliHead.innerHTML=mili
}
function oneTime(){
    document.getElementById("start").disabled=true
}
console.log("min"+" "+"seconds"+""+" miliseconds")
function history(){
    var a=min+"     "+sec+"     "+mili
    console.log(a)
}