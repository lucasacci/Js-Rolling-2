
let cadena = "";


do{
    let a = prompt("Ingrese la cadena de texto");

    if(cadena == ""){
        cadena = cadena + a;
    }
    else{
        cadena = cadena + "-" + a;
    }

}while(confirm("¿Quiere seguir ingresando cadenas?"))


document.write(cadena);
