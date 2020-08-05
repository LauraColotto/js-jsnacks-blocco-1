// Chiedo d'inserire il primo numero

var primoN = parseInt(prompt("Inserisci il primo numero"));

// Chiedo d'inserire il secondo numero

var secondN = parseInt(prompt("Inserisci il secondo numero"));

// Stampo il maggiore tra i due

if (secondN > primoN) {
  document.getElementById("maggiore"). innerHTML = "Il numero maggiore è: "  + secondN;
} else if (primoN > secondN){
  document.getElementById("maggiore"). innerHTML = "Il numero maggiore è: " + primoN;
  } else {
    document.getElementById("maggiore"). innerHTML = "I due numeri sono uguali";
  }
