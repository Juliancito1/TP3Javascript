//4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let numero = parseInt(prompt("Ingrese un numero"));

if(numero && !isNaN(numero))
{
    tablamultiplicacion(numero)
}
else{
    document.write("Usted no ingreso un numero");
}

function tablamultiplicacion(num)
{
    let multi;
    document.write(`La tabla de multiplicacion del numero ${num} del 1 al 10 es:`)
    for(let i=1;i<=10;i++)
    {
      multi = num * i;  
      document.write(`<p>${multi}</p>`)
    }

}