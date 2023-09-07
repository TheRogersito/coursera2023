let temps = document.getElementById('tempo');
let x = 0;
function start(){
    document.getElementById('tempo').innerHTML = x++;
    wait(1000);
    start();
}
let wait = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}