//změna barvy světla//
let svetlo= document.querySelector(".svetlo");

let svestka = document.querySelector(".svestka")
svestka.addEventListener("click", function(){
 svetlo.style.backgroundColor= "plum"
})

let zelena = document.querySelector(".zelena")
zelena.addEventListener("click", function(){
 svetlo.style.backgroundColor= "lime"
})

let rajcatova = document.querySelector(".rajcatova")
rajcatova.addEventListener("click", function(){
 svetlo.style.backgroundColor= "tomato"
})

//automatické střídání - časovač nebo timer - setTimeout
/*
//↓ zavoláme ji, 2 parametry: co se má stát a kdy se to má stát(1000milisekund)
setTimeout( function() {
    svetlo.style.backgroundColor= "tomato" 
}, 1000)

setTimeout( function() {
    svetlo.style.backgroundColor= "lime" 
}, 2000)

setTimeout( function() {
    svetlo.style.backgroundColor= "plum" 
}, 3000)           
*/

// funkci volá opakovaně, do nekonečna
/* 
setInterval ( function() {
    svetlo.style.backgroundColor= "tomato" 
}, 800) //každách 800 milisekund nastaví na "tomato"

setInterval( function() {
    svetlo.style.backgroundColor= "lime" 
}, 1300)

setInterval( function() {
    svetlo.style.backgroundColor= "plum" 
}, 1600)  
*/ 
/*pořád je to ale chaotické - čísla se za chvíli sejdou.....*/

//napsáno v poli = hranaté závorky - barvy napsat za sebou a oddělit čárkou

let barvy = [ "tomato", "lime", "plum", "cyan", "hotpink", "yellow"] /*tomato je 0, lime je 1, plum je 2...adt.*/
let pocetTiku = 0
let casovac
//pro start
let start = document.querySelector(".start")
start.addEventListener("click", function(){
    casovac =  setInterval( function() {
        svetlo.style.backgroundColor= barvy[pocetTiku] 
        if(pocetTiku >4 /*nebo >=2*/){  /*kdyby tam byla dvojka, začne to číst i barvu na třetím místě, ale tam žádná není, vzniká pomlka ALE když dám >=2, bude to fungovat*/
            pocetTiku = 0
        } else{
            pocetTiku +=1
        }
        pocetTiku += 1 /*zvětší číslo o 1*/
    }, 1000)
})

let stop = document.querySelector(".stop")
stop.addEventListener("click", function() {
 //zastavit
 clearInterval(casovac)
})