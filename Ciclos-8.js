let n = prompt("Ingrese la cantidad de numeros (Menor a 50)");


if(Number(n)==n && n < 50){
    n = Number(n);

    for (let i = n; i >= 1; i--) {
        for (let j = i; j >= 1 ; j--) {
             document.write(i);
        }
        document.write("<br>");
     }
     
}
else{
    alert(`Ingrese un numero valido`);
}