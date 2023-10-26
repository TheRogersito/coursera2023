let superDice=[`<div class="dice face1"><span class="dot"></span></div>`,`<div class="dice face2"><span class="dot"></span><span class="dot"></span></div>`,`<div class="dice face3"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`,`<div class="dice face4"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>`,`<div class="dice face5"><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div></div>`,`<div class="dice face6"><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>`,`<div class="dice face7"><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>`,`<div class="dice face8"><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div></div>`];
let sound = new Audio("pipe.wav");
let tirar = function(length){
    document.getElementById("imatgeDau").innerHTML = superDice[Math.floor(Math.random()*length)]
    let checkbox = document.getElementById("checkSo");
    if(checkbox.checked){
        playsound();
    }
}
function playsound(){
    let sound = new Audio("pipe.wav");
    sound.play();
}
let coll = document.getElementsByClassName("collapsible");
let collapse = function(){
    for(e of coll){
        if (e.style.display === "block") {
            e.style.display = "none";
          } else {
            e.style.display = "block";
          }
    }
};
let canviarBoto = function(length){
    document.getElementById("subtitol").innerHTML = `Dau de ${length} cares`
    document.getElementById("caixaBoto").innerHTML = `<button id="boto" onclick="tirar(${length})">Tira el dau</button>`;
}