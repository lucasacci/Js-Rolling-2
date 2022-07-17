let a = prompt(`Ingrese el texto`);
let x = ``;

a = a.toLowerCase();

if(String(a) == a){
    a = String(a);
}
else{
    alert(`Ingrese un texto valido`);
}

for (let i = 0; i < a.length; i++) {
    
    s = a.charAt(i);

    x = s + x;
    
}

document.write(x);