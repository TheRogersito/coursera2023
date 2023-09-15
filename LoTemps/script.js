function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
let forecast = JSON.parse(Get(`https://api.open-meteo.com/v1/forecast?latitude=41.5905&longitude=2.5812&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,precipitation,rain,showers,weathercode&timezone=Europe%2FBerlin`));
let now = Date.now();
let time = new Date(now);
let recursiveDia = time.getHours();
let recursiveSetmana= 12;

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

window.onload = function() {
    for(let i=1;i<=7;i++){
        if(i>=2){
            document.getElementById(`titolTempsAvui${i}`).innerHTML = `<p>${recursiveDia<24?recursiveDia:recursiveDia-24}:00</p>`
            switch(time.getDay()+i-2){
                case 0:
                case 7:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Dilluns</p>";
                    break;
                case 1:
                case 8:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Dimarts</p>";
                    break;
                case 2:
                case 9:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Dimecres</p>";
                    break;
                case 3:
                case 10:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Dijous</p>";
                    break;
                case 4:
                case 11:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Divendres</p>";
                    break;
                case 5:
                case 12:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Dissabte</p>";
                    break;
                case 6:
                case 13:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Diumenge</p>";
                    break;
                default:
                    document.getElementById(`titolTempsSetmana${i}`).innerHTML = "<p>Didsfdsfdsfs</p>";
                    break;
            }
        }
        document.getElementById(`hora${i}temp`).innerHTML = `<p>${forecast.hourly.temperature_2m[recursiveDia]} C&deg;</p>`;
        document.getElementById(`hora${i}humi`).innerHTML = `<p>${forecast.hourly.relativehumidity_2m[recursiveDia]} %</p>`;
        document.getElementById(`dia${i}temp`).innerHTML = `<p>${forecast.hourly.temperature_2m[recursiveSetmana]} C&deg;</p>`;
        document.getElementById(`dia${i}humi`).innerHTML = `<p>${forecast.hourly.relativehumidity_2m[recursiveSetmana]} %</p>`;
        foto(`fotoTempsAvui${i}`, recursiveDia);
        foto(`fotoTempsSetmana${i}`, recursiveSetmana);
        recursiveDia = recursiveDia+2;
        recursiveSetmana = recursiveSetmana+24;
    }
}