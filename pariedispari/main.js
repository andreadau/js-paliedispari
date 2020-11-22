// Richiesta pari e dispari all'utente
var scelta = prompt("Scegli pari o dispari").toLowerCase();
// Controllo scelta utente
while (scelta != "pari" && scelta != "dispari"){
    scelta = prompt("Scrivi solo pari o dispari");
}
console.log(scelta);
// Richiesta numero utente
var numeroUtente = Number(prompt("Inserisci un numero da 1 a 5"));
// Controllo numero inserito dall'utente
while (numeroUtente > 5 || numeroUtente < 1) {
    numeroUtente = Number(prompt("Il numero non è compreso tra 1 e 5 ! Riprova "));
}
console.log(numeroUtente);
// Funzione per numero random tra 1 e 5 
 function numberRandomFromTo(Min, Max) {
     var randomNum = Math.floor(Math.random() * (Max - Min) + Min); 
     return randomNum;
 }
 // Inserimento funzione numero random in variabile 
 var numeroRandomPc = numberRandomFromTo(1,5);
 console.log(numeroRandomPc);
 // Funzione di verifica pari o dispari 
 function verificaPariDispari(num) {
     if (num % 2 == 0) {
         return "pari";
     } else {
         return "dispari";
     }
 }
 // Dichiarazione variabile somma 
 var sum = numeroUtente + numeroRandomPc;
 // Inserimento varibile somma nella funzione di verifica
 var result = verificaPariDispari(sum);
 console.log(result);
 // If della vittoria o sconfitta 
 if (scelta === result) {
     alert("Hai vinto , Complimenti!");
 } else {
     alert("Il pc ha vinto , sorry");
 }