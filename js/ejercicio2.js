// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let ciudad
let ciudades = [];
do{
    ciudad = prompt("Ingrese el nombre de una ciudad");
    if(ciudad)
    {
        ciudades.push(ciudad);
    }
}while(ciudad)

document.write(`Usted agrego ${ciudades.length} ciudades`)
document.write(`<p>La ciudad que esta en la primera posición es ${ciudades[0]}</p>`)
document.write(`<p>La ciudad que esta en la tercera posición es ${ciudades[2]}</p>`)
document.write(`<p>La ciudad que esta en la ultima posición es ${ciudades[ciudades.length - 1]}</p>`)
ciudades.push("Paris");
document.write(`<p>La ciudad que esta en la segunda posición es ${ciudades[1]}</p>`)
console.log(ciudades)
ciudades.splice(1,1,"Barcelona");
console.log(ciudades);