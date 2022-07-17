let a = prompt(`Ingrese el texto`);
let x = 0;
let b = ``;


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
        b = a.charAt(i);
        x = i;
        break;
    }
    
}

document.write(`Vocal: "${b}" <br> Posicion: ${x} `);