

let suma = 0;

do{
    let a = Number(prompt("Ingrese un numero"));

    if(Number(a) == a){

       // a = Number(a);

        suma = suma + a;
    }
    else{
        alert(`Ingrese un numero valido`);
    }

}while(confirm("¿Desea seguir ingresando numeros?"));

document.write(suma);
