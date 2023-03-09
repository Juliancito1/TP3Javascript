// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let cadena = prompt("Ingrese una cadena de texto");

maymin(cadena);

function maymin(texto)
{
    if(texto && isNaN(texto))
    {
    if(cadena === cadena.toUpperCase())
    {
        document.write(`El texto ingresado (${texto}) esta conformado solo por mayúsculas`)
    }
    else if(cadena === cadena.toLowerCase())
    {
        document.write(`El texto ingresado (${texto}) esta conformado solo por minúsculas`)
    }
    else
    {
        document.write(`El texto ingresado (${texto}) esta conformado por mayúsculas y minúsculas`)
    }
    }
    else{
        document.write("Usted no ingreso una cadena")
    }
}