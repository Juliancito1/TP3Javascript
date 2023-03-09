//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

let x = 2;
   
paridadnum(x);


function paridadnum(numero)
{
    if(numero && !isNaN(numero))
    {
    if(numero % 2 === 0)
    {
        document.write(`El numero ${numero} es Par`)
    }
    else
    {
        document.write(`El numero ${numero} es Impar`)
    }
    }
    else{
        document.write("Usted no ingreso un numero");
    }
}