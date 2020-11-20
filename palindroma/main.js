// inserimento parola dell'utente
var parolaUtente = prompt("Inserisce parola");
// La parola deve avere almeno una lettera
while (parolaUtente.length < 1) {
    var parolaUtente = prompt("inserisci una parola di almeno una lettera")
}
// Funzione per invertire parola
function isPalindrome(str) {
    // Variabile che stabilisce tutti i caratteri speciali
    var re = /[\W_]/g;
    /* Mettere tutta la parola in lowercase e rimpiazzare 
        tutti i possibili caratteri speciali*/
    var parolaUtente = str.toLowerCase().replace(re, '');
    // Inversione parola
    var reverseParola = parolaUtente.split("").reverse().join("");
    // if per sapere se la parola è palindroma
    if(parolaUtente == reverseParola) {
        alert('La parola è palindroma');
    }
    else {
        alert('La parola non è palindroma');
    }
}
// Funzione applicata alla parola dell'utente
isPalindrome(parolaUtente);
