
// Inserisco un numero

var numero = parseInt(prompt("Inserisci un numero"));

// Calcolo se è pari o dispari

 if (numero % 2 == 0 ) {
   document.getElementById('numero'). innerHTML = numero;
 } else {
   document.getElementById('numero'). innerHTML = numero + 1;
 }
