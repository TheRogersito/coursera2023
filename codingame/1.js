// Progress Bar
r=readline
s=r(l=r(n=r()))
x=~~(n/100*l)
print(s[0].repeat(x)+s[2].repeat(l-x))

// Temperatures
const n = 10; // the number of temperatures to analyse
var inputs = [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5];
closest = Math.abs(inputs[0]);
if(n === 0){
    closest = 0;
}
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if(Math.abs(t) < Math.abs(closest)){
        closest = t;
    }else if(Math.abs(t) === Math.abs(closest)){
      closest = Math.abs(t)
    }
}
console.log(closest);

// ASCII code
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
const F = T.toUpperCase();
for (let i = 0; i < H; i++) {
    const ROW = readline();
    let final = "";
    for(let j = 0; j < F.length;j++){
        let a = F[j].charCodeAt(0) - 65;
        if(a>=0&&a<27){
            a=a*L
        }else{
            a=26*L
        }
        for(let k = 0; k < L;k++){
            final = final+ROW[a++]
        }
    }
    console.log(final);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// Fibbonacho
N = parseInt(readline());
b=true
console.log("private bool IsPrime(int number){");
console.log("if (number == 1) return false;")
for(let i=2;i<=N;i++){
    for(let j=2;j<=i;j++){
        if(Number.isInteger(N%j)){
            b=false
            break
        }
    }
    console.log("else if (number == "+i+") return "+b+";")
}
console.log('}');

//Numeros primers
N = 14;
console.log("private bool IsPrime(int number){");
console.log("if (number == 1) return false;")
for(i=2;i<N+1;i++){
  b=true
    for(j=2;j<i;j++){
        if(i%j==0){
            b=false
            break
        }
    }
    console.log("else if (number == "+i+") return "+b+";")
}
console.log('}');

// Comptar dígits i lletres en hexadecimal
const na = 334;
let a = na.toString(16)
b=""
c=[]
d=[]
for(let i = 0;i<a.length;i++){
    if(a[i].indexOf("f")>=0 || a[i].indexOf("a")>=0 || a[i].indexOf("b")>=0 || a[i].indexOf("c")>=0 || a[i].indexOf("d")>=0 || a[i].indexOf("e")>=0){
        c.push(a[i])
    }else{
        d.push(a[i])
    }
}
if(c.length>d.length){
    b="Letters"
}else if(c.length<d.length){
    b="Digits"
}else{
    b="Equal"
}

//FizzBuzzBar
const N = parseInt(readline());
for(let i = 1;i<=N;i++){
    let a =""
    if(i%3===0){
        a=a+"Fizz"
    }
    if(i%5===0){
        a=a+"Buzz"
    }
    if(i%4===0){
        a=a+"Bar"
    }
    if(i%3!==0&&i%5!==0&&i%4!==0){
        a=i
    }
    console.log(a)
}


// Flee or fight
var inputs = readline().split(' ');
const h = parseInt(inputs[0]);
const d = parseInt(inputs[1]);
const num = parseInt(readline());
let en = []
for (let i = 0; i < num; i++) {
    var inputs = readline().split(' ');
    eh = parseInt(inputs[0]);
    ed = parseInt(inputs[1]);
    en.push([eh,ed])
}
while(true){
    if(h<0){
        m="flee";
        break
    }
    for(ec in en){
        en[ec][0] = en[ec][0]-d;
        if(en[ec][0]<0){
            en.splice(en[ec],1)
        }
        if(ec.length===0){
            m="fight";
            break;
        }
    }
}
console.log(m);


var inputs = readline().split(' ');
const wid = parseInt(inputs[0]);
const hei = parseInt(inputs[1]);
for(i=0;i<hei;i++){
    l='';
    a=i%5
    if(i===0||i===hei-1){
        for(j=0;j<wid;j++){
            l=l+"#"
        }
    }else
    switch(a){
        case 0:
            for(j=0;j<wid;j++){
                if(j===0||j===wid-1){
                    l=l+'#'
                }else{
                    l=l+'/'
                }
            }
            break;
            case 1:
            for(j=0;j<wid;j++){
                if(j===0||j===wid-1){
                    l=l+'#'
                }else{
                    l=l+'*'
                }
            }
            break;
            case 2:
            for(j=0;j<wid;j++){
                if(j===0||j===wid-1){
                    l=l+'#'
                }else{
                    l=l+'.'
                }
            }
            break;
            case 3:
            for(j=0;j<wid;j++){
                if(j===0||j===wid-1){
                    l=l+'#'
                }else{
                    l=l+'-'
                }
            }
            break;
            case 4:
            for(j=0;j<wid;j++){
                if(j===0||j===wid-1){
                    l=l+'#'
                }else{
                    l=l+'_'
                }
            }
            break;
            default:
            console.log("Menjam l'ou");
    }
    console.log(l)
}