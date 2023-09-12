let torn;
let compro = {};
let mark = function(ere){
    if (compro[ere] == 0 || compro[ere] == 1){
        return;
    }
    else{
        if(torn){
            document.getElementById(ere).innerHTML = '<img class="imatge" src="mare.jpg">';
            torn = false;
            compro[ere] = 1;
        }
        else{
            document.getElementById(ere).innerHTML = '<img class="imatge" src="morgana.jpg">';
            torn = true;
            compro[ere] = 0;
        }
    }
    indicaTorn();
    setTimeout(comproWin,10)
}
let indicaTorn = function(){
    if(torn){
        document.getElementById('tornde').innerHTML = '<img class="imatge" id="imatgeTorn" src="mare.jpg">';
    }
    else{
        document.getElementById('tornde').innerHTML = '<img class="imatge" id="imatgeTorn" src="morgana.jpg">';
    }
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
    document.getElementById('box1').innerHTML = " ";
    document.getElementById('box2').innerHTML = " ";
    document.getElementById('box3').innerHTML = " ";
    document.getElementById('box4').innerHTML = " ";
    document.getElementById('box5').innerHTML = " ";
    document.getElementById('box6').innerHTML = " ";
    document.getElementById('box7').innerHTML = " ";
    document.getElementById('box8').innerHTML = " ";
    document.getElementById('box9').innerHTML = " ";
}