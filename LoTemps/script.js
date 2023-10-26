function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
let forecast = JSON.parse(Get(`https://api.open-meteo.com/v1/forecast?latitude=41.5905&longitude=2.5812&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain,showers,weathercode&timezone=Europe%2FBerlin`));
let time = new Date(Date.now());
let recursiveDia = time.getHours();
let recursiveSetmana= 27;

let foto = function(place, hour){
    switch(forecast.hourly.weathercode[hour]){
        case 0:
            document.getElementById(place).innerHTML = "<img class='imatgeTemps' src='sol.png'>";
            break;
        case 1:
        case 2:
            document.getElementById(place).innerHTML = "<img class='imatgeTemps' src='solnuvol.png'>";
            break;
        case 3:
        case 45:
        case 48:
            document.getElementById(place).innerHTML = "<img class='imatgeTemps' src='nuvol.png'>";
            break;
        case 51:
        case 53:
        case 55:
        case 61:
        case 63:
        case 65:
            document.getElementById(place).innerHTML = "<img class='imatgeTemps' src='plou.png'>";
            break;
        default:
            document.getElementById(place).innerHTML = "<img class='imatgeTemps' src='sol.png'>";
            break;
    }
}
let carregat = function(){
    for(let i=1;i<=6;i++){
        if(i>=2){
            document.getElementById(`titolTempsAvui${i}`).innerHTML = `<p>${recursiveDia<24?recursiveDia:recursiveDia-24}:00</p>`
            switch(time.getDay()+i-1){
                case 0:
                case 7:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Dilluns</p>";
                    break;
                case 1:
                case 8:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Dimarts</p>";
                    break;
                case 2:
                case 9:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Dimecres</p>";
                    break;
                case 3:
                case 10:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Dijous</p>";
                    break;
                case 4:
                case 11:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Divendres</p>";
                    break;
                case 5:
                case 12:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Dissabte</p>";
                    break;
                case 6:
                case 13:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Diumenge</p>";
                    break;
                default:
                    document.getElementById(`titolGeneralSetmana${i}`).innerHTML = "<p>Didsfdsfdsfs</p>";
                    break;
            }
        }
        document.getElementById(`hora${i}temp`).innerHTML = `<p>${forecast.hourly.temperature_2m[recursiveDia]} C&deg;</p>`;
        document.getElementById(`hora${i}humi`).innerHTML = `<p>${forecast.hourly.relativehumidity_2m[recursiveDia]} %</p>`;
        foto(`fotoTempsAvui${i}`, recursiveDia);
        recursiveDia = recursiveDia+2;
    }
    for(let i=1;i<=36;i++){
        let hora = 3+4*(i-1);
        document.getElementById(`titolTempsSetmana${i}`).innerHTML = `<p>${hora>24?hora-24*Math.floor((i-1)/6):hora}:00</p>`
        document.getElementById(`dia${i}temp`).innerHTML = `<p>${forecast.hourly.temperature_2m[recursiveSetmana]} C&deg;</p>`;
        document.getElementById(`dia${i}humi`).innerHTML = `<p>${forecast.hourly.relativehumidity_2m[recursiveSetmana]} %</p>`;
        foto(`fotoTempsSetmana${i}`, recursiveSetmana);
        recursiveSetmana = recursiveSetmana+4;
        }
    }
window.onload = function() {
    carregat();
}
let nouLloc = function(lat, lon, nom){
    forecast = JSON.parse(Get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain,showers,weathercode&timezone=Europe%2FBerlin`));
    time = new Date(Date.now());
    recursiveDia = time.getHours();
    recursiveSetmana= 27;
    document.getElementById(`localitzacio`).innerHTML = nom
    carregat();
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