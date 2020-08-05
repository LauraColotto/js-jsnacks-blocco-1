// Chiedo di inserire la prima parola

var primaP = (prompt("Inserisci il prima parola"));

console.log(primaP);

// Chiedo di inserire la seconda parola

var secondP = (prompt("Inserisci la seconda parola"));

console.log(secondP);

// Calcolo la lunghezza delle due parole


if (secondP.length > primaP.length){
  document.getElementById('parola'). innerHTML = primaP + " " + secondP;
} else {
  document.getElementById('parola'). innerHTML = secondP + " " + primaP ;
}
