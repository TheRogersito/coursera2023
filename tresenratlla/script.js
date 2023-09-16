let torn;
let compro = {};
let cgat = '<img class="imatge" src="gat.jpg">';
let csenyor = '<img class="imatge" src="senyor.jpg">';
let mark = function(ere){
    if (compro[ere] == 0 || compro[ere] == 1){
        return;
    }
    else{
        document.getElementById(ere).innerHTML = torn ? cgat : csenyor;
        torn = !torn;
        compro[ere] = torn ? 0 : 1;
    }
    indicaTorn();
    setTimeout(comproWin,10)
}
let indicaTorn = function(){
        document.getElementById('tornde').innerHTML = torn ? cgat : csenyor;
}
let comproWin = function(){
    if(compro.box1 == 0 && compro.box2 == 0 && compro.box3 == 0 || compro.box4 == 0 && compro.box5 == 0 && compro.box6 == 0 || compro.box7 == 0 && compro.box8 == 0 && compro.box9 == 0 || compro.box1 == 0 && compro.box4 == 0 && compro.box7 == 0 || compro.box2 == 0 && compro.box5 == 0 && compro.box8 == 0 || compro.box3 == 0 && compro.box6 == 0 && compro.box9 == 0 || compro.box1 == 0 && compro.box5 == 0 && compro.box9 == 0 || compro.box3 == 0 && compro.box5 == 0 && compro.box7 == 0){
        alert("Ha guanyat el senyoret content");
    }
    if(compro.box1 == 1 && compro.box2 == 1 && compro.box3 == 1 || compro.box4 == 1 && compro.box5 == 1 && compro.box6 == 1 || compro.box7 == 1 && compro.box8 == 1 && compro.box9 == 1 || compro.box1 == 1 && compro.box4 == 1 && compro.box7 == 1 || compro.box2 == 1 && compro.box5 == 1 && compro.box8 == 1 || compro.box3 == 1 && compro.box6 == 1 && compro.box9 == 1 || compro.box1 == 1 && compro.box5 == 1 && compro.box9 == 1 || compro.box3 == 1 && compro.box5 == 1 && compro.box7 == 1){
        alert("Ha guanyat el gatet content");
    }
}
let reinicia = function(){
    compro = {};
    for(let i=1;i<=9;i++){
        document.getElementById(`box${i}`).innerHTML = " ";
    }
}