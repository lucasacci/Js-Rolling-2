let a = prompt(`Ingrese el texto`);
let x = 0;

a = a.toLowerCase();

if(String(a) == a){
    a = String(a);
}
else{
    alert(`Ingrese un texto valido`);
}

for (let i = 0; i < a.length; i++) {
    
    s = a.charAt(i);

    if(s == `a` || s == `e` || s == `i` || s == `o` || s == `u`)
    {
        x = i;
        break;
    }
    
}

document.write(`Posicion: ` + x);