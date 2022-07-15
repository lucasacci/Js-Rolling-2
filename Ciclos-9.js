
let i = 0;
let j = 0;

for (let i = 0; i <= 500; i++) {
    
    if(i % 4 == 0){
        document.write(i + " - (Multiplo de 4)");
    }
    else if(i % 9 == 0){
        document.write(i + " - (Multiplo de 9)");
    }
    else if(i % 5 == 0){
        document.write(i + "------------------");
    }
    else{
        document.write(i);
    }
    document.write("<br>");
}