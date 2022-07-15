
let n = prompt("Ingrese la cantidad de numeros (MENOR A 50)");

if(Number(n)==n && n < 50){
    n = Number(n);

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
             document.write(i);
        }
        document.write("<br>");
     }
}
else{
    alert(`Ingrese un numero valido`);
}


 
 