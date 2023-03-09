// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.write("<h1>Los meses del año son:</h1>")
document.write("<ul><h3>")
for(i=0;i<meses.length;i++)
{
    document.write(`<li>${meses[i]}</li>`)
}
document.write("</h3></ul>")