//Realice un programa que dada la vida de un personaje, indique una acción: ∙ Si la vida es menor a 50, que cure
//nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
//∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
//∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
//∙ la poción de vida chica cura 25 y la grande 50.

let vida = parseInt(prompt("ingrese la vida de su personaje"))
let pocionChica = 25;
let pocionGrande = 50;

if (vida <= 50) {
    console.log(`Tu personaje recupera una pocion grande de vida ${vida} + 50 ${vida + pocionGrande}`);
} else if(vida <= 75 && vida > 50){
    console.log(`Tu personaje recupera una pocion chica de vida ${vida} + 25 ${vida + pocionChica}`);
} else {
    console.log(`Tu personaje no recibe una pocion de vida ${vida}`);
}