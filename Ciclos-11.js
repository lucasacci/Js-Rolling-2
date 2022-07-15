
let n1 = prompt(`Nombre 1`);
let x1 = prompt(`Edad 1`);

let n2 = prompt(`Nombre 2`);
let x2 = prompt(`Edad 2`);

let n3 = prompt(`Nombre 3`);
let x3 = prompt(`Nombre 3`);


z = Math.max(x1,x2,x3);

if(z == x1){
    document.write(`El mayor es ${n1}`);
}

if(z == x2){
    document.write(`El mayor es ${n2}`);
}

if(z == x3){
    document.write(`El mayor es ${n3}`);
}