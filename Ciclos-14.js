
let a = prompt(`Ingrese el texto`);
let s = 0;

if(String(a) == a){
    a = String(a);
}
else{
    alert(`Ingrese un texto valido`);
}

for (let i = 0; i < a.length; i++) {
    
    let s = a.charAt(i);

    if(i == a.length - 1){
        document.write(s);
    }
    else{
        document.write(s + "-");
    }
    
}