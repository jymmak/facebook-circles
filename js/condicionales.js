var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;

var peso = prompt("Cúal es tu peso?");
var planeta = prompt("Elige tu planeta 1 es marte, 2 es júpiter");
var peso_final;


if (planeta == 1) {
    peso_final = peso * g_marte / g_tierra;
    nombre = "Marte";

} else if (planeta == 2) {
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "Jupiter";

} else {
    peso_final = 1000;
    nombre = "Kripton";
}

document.write("Tú peso en " + nombre + " es: <strong>" + parseInt(peso_final) + "kilos</strong>");