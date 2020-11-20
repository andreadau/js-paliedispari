// inserimento parola dell'utente
var parolaUtente = prompt("Inserisce parola");
// Funzione per invertire parola
function isPalindrome(str) {
    var arrayValues = parolaUtente.split("").reverse().join("");
    // if per sapere se la parola è palindroma
    if(parolaUtente == arrayValues) {
        alert('La parola è palindroma');
    }
    else {
        alert('La parola non è palindroma');
    }
}
// Funzione applicata alla parola dell'utente
isPalindrome(parolaUtente);
