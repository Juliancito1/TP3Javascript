//3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)


let lado1 = parseInt(prompt("Ingrese el primer lado del rectángulo"));
let lado2 = parseInt(prompt("Ingrese el segundo lado del rectángulo"));
perimetrorectangulo(lado1,lado2);

function perimetrorectangulo(num1,num2)
{
    if(num1 && num2 && !isNaN(num1,num2))
    {
    let suma = 2*(num1+num2);
    return document.write(`El perimetro del rectangulo es: ${suma}`);
    }
    else{
        document.write("Usted ingreso un solo numero o ningun numero");
    }
}