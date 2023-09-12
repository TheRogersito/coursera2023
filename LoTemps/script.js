function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
let forecast = JSON.parse(Get(`https://api.open-meteo.com/v1/forecast?latitude=41.5905&longitude=2.5812&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,weathercode,pressure_msl,surface_pressure,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility&timezone=Europe%2FBerlin`));
let now = Date.now();
let time = new Date(now);

let foto = function(place, hour){
    switch(forecast.hourly.weathercode[hour]){
        case 0:
            document.getElementById(place).innerHTML = "<img src='sol.png'>";
            break;
        case 1:
        case 2:
            document.getElementById(place).innerHTML = "<img src='solnuvol.png'>";
            break;
        case 3:
            document.getElementById(place).innerHTML = "<img src='nuvol.png'>";
            break;
        case 51:
        case 53:
        case 55:
            document.getElementById(place).innerHTML = "<img src='plou.png'>";
            break;
        default:
            document.getElementById(place).innerHTML = "<img src='sol.png'>";
            break;
    }
}


window.onload = function() {
    document.getElementById('titolTempsAvui2').innerHTML = `<p>${time.getHours()+2}:${time.getMinutes()}</p>`
    document.getElementById('titolTempsAvui3').innerHTML = `<p>${time.getHours()+4}:${time.getMinutes()}</p>`
    document.getElementById('titolTempsAvui4').innerHTML = `<p>${time.getHours()+6}:${time.getMinutes()}</p>`
    document.getElementById('titolTempsAvui5').innerHTML = `<p>${time.getHours()+8}:${time.getMinutes()}</p>`
    document.getElementById('titolTempsAvui6').innerHTML = `<p>${time.getHours()+10}:${time.getMinutes()}</p>`
    document.getElementById('hora1temp').innerHTML = `<p>${forecast.hourly.temperature_2m[0]} C&deg;</p>`;
    document.getElementById('hora2temp').innerHTML = `<p>${forecast.hourly.temperature_2m[2]} C&deg;</p>`;
    document.getElementById('hora3temp').innerHTML = `<p>${forecast.hourly.temperature_2m[4]} C&deg;</p>`;
    document.getElementById('hora4temp').innerHTML = `<p>${forecast.hourly.temperature_2m[6]} C&deg;</p>`;
    document.getElementById('hora5temp').innerHTML = `<p>${forecast.hourly.temperature_2m[8]} C&deg;</p>`;
    document.getElementById('hora6temp').innerHTML = `<p>${forecast.hourly.temperature_2m[10]} C&deg;</p>`;
    foto("fotoTempsAvui1", 0);
    foto("fotoTempsAvui2", 2);
    foto("fotoTempsAvui3", 4);
    foto("fotoTempsAvui4", 6);
    foto("fotoTempsAvui5", 8);
    foto("fotoTempsAvui6", 10);
}