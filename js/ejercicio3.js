// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let num1;
let num2;
let suma;
let cantidadsumas = [];
let elementos = [];
let vecesrepetidas = [];
let repeticion = 1;
for(let i=0; i<50;i++)
{
    num1 = Math.ceil(Math.random() * 6);
    num2 = Math.ceil(Math.random() * 6);
    suma = num1 + num2;
    document.write(`<p>La suma entre primer dado (${num1}) y segundo dado (${num2}) es ${suma} </p>`)
    cantidadsumas.push(suma);
}
cantidadsumas.sort();
for(let j=0; j<cantidadsumas.length;j++)
{
    if(cantidadsumas[j] === cantidadsumas[j+1] )
    {
        repeticion++;
    }
    else{
        console.log(`La suma ${cantidadsumas[j]} tiene ${repeticion} repeticiones`);
        repeticion = 1;
    }
      
}