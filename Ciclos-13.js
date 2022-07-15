
let a = prompt(`Ingrese un texto`);

if(String(a) == a){
    a = String(a);
}

let x = a.toUpperCase();

document.write(x);