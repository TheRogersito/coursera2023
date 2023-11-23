var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDiary() {
    for (let x of dairy) {
        console.log(x);
    }
}
logDiary();

const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (let x of Object.keys(bird)) {
        console.log(x + `: ` + bird[x]);
    }
}
birdCan();

const h1 = document.querySelector("h1");
let arr = ['Example Domain','First Click','Second Click','Third Click'];
function handleClicks(){
    switch(h1.innerText){
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}
h1.addEventListener('click',handleClicks);