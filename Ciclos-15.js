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
    let s = a.charAt(i);
    
    if(s == `a`){
        x++;
    }
    if(s == `e`){
        x++;
    }
    if(s == `i`){
        x++;
    }
    if(s == `o`){
        x++;
    }
    if(s == `u`){
        x++;
    }

}

document.write(`Cantidad de vocales: ` + x);