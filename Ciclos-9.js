
let m = prompt("Ingrese la cantidad de filas");
let n = prompt("Ingrese la cantidad de columnas");
let x = m*n;

if(Number(m)==m && Number(n)==n){
    m = Number(m);
    n = Number(n);
}
else{
    alert(`Ingrese un numero valido`);
}


document.write(`<table>
<tbody>`)

for (let i = 0; i < m; i++) {
    
    document.write(`<tr>`)
        for (let j = 0; j < n; j++) {
        document.write(`<td>`+ x + `</td>`)
        x--;
    }
    
    document.write(`</tr>`);
}


document.write(`</tbody>
</table>`)