
let a = prompt("Ingrese su edad");

if(Number(a) == a){

    if(a>=18){
        alert("Es mayor de edad, puede conducir");
    }
    else{
        alert("No puede conducir");
    }
}else{
    alert("Ingrese un numero valido");
}

