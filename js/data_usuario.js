var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = prompt("Cúal es tu peso?");

var peso_final = peso * g_marte / g_tierra;
document.write("Tú peso en Marte es: <strong>"  + parseFloat(peso_final)  + "kilos</strong>");