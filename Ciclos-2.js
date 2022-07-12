let a = parseInt(prompt("Solicite una nota"));


if(Number(a) == a){

    if(a>=0 && a<=10){
        
        if(a>=0 && a<=2){
            document.write("Muy deficiente");
        }
        if(a>2 && a<=4){
            document.write("Insuficiente");
        }
        if(a>=5 && a<=6){
            document.write("Suficiente");
        }
        if(a == 7){
            document.write("Bien");
        }
        if(a>=8 && a<=9){
            document.write("Notable")
        }
        if(a == 10){
            document.write("Sobresaliente");
        }
    }
    else{
        document.write("Numero erroneo");
    }
}
else{
    document.write("Introduce un numero valido");
}