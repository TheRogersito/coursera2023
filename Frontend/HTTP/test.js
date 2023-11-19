var age = 10;
if(age>=65){
    console.log("Your pension is granted");
} else if(age<65 && age>=18){
    console.log("you get a salary");
} else if(age<18){
    console.log("You are a minor, go home");
}else{
    console.log("Not numerical");
}

var day = "Sunday";
switch(day){
    case "Monday":
        console.log("Compra llums");
        break;
    case "Tuesday":
        console.log("Compra naps");
        break;
    case "Wednesday":
        console.log("Compra nespres");
        break;
    case "Thursday":
        console.log("Compra nous");
        break;
    case "Friday":
        console.log("Faves tendres");
        break;
    case "Saturday":
        console.log("Tot s'ho gasta");
        break;
    case "Sunday":
        console.log("Tot s'ho menja");
        break;
    default:
        console.log("Parla català o emigra")
}

for(let i=1;i<=10;i++){
    if(i==1){
        console.log("Gold medal")
    }else if(i==2){
        console.log("Silver medal")
    }else if(i==3){
        console.log("Bronze medal")
    }else{
        console.log(i)
    }
}

for(let i=1;i<=10;i++){
    switch(i){
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:   
            console.log(i);
    }
}

function letterFind(word, match){
    for(let i = 0;i<word.length;i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i)
        }
    }
}
letterFind("test","t");

let clothes = [];
clothes.push("gloves","socks","shirt","fedora","jacket");
clothes.pop();
clothes.push("ayuso");
console.log(clothes[2]);
let favCar = {};
favCar.color = "white";
favCar.covertible = true;
console.log(favCar);

function addTwoNums(a, b){
    try{
        if(typeof a != "number"){
            throw new Error("the first argument is not a number");
        }else if(typeof b != "number"){
            throw new Error("the second argument is not a number");
        }else{
            console.log(a+b);
        }
    }catch(err){
        console.log("Error!", err);
    }
}
addTwoNums(5,"5");
console.log("It still works");