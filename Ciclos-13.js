
let a = prompt(`Ingrese un texto`);

if(String(a) == a){
    a = String(a);
}
else{
    alert(`Ingrese un texto valido`);
}

let x = a.toUpperCase();

document.write(x);