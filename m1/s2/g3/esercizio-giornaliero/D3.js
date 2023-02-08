/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let numero1 = prompt('inserisci un numero intero: ');
let numero2 = prompt('inserisci un altro numero intero: ');

if(!isNaN(numero1,numero2)){

if (Number(numero1) > Number(numero2)) {
  console.log(`${numero1} è maggiore`);
} else if (Number(numero1) == Number(numero2)){
  console.log(`i numeri sono uguali`);
}else{
  console.log(`${numero2} è maggiore`);
}
}*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let numero3 = prompt('inserisci un numero intero: ');
if (numero3 != 5) {
  console.log('not equal');
}else {
  console.log('equal');
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let numero4 = prompt('inserisci un numero intero: ');
if (numero4 % 5 == 0) {
  console.log('divisibile per 5');
}else{
  console.log('non è divisibile per 5');
}*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let numero5 = prompt('inserisci un numero intero: ');
let numero6 = prompt('inserisci un altro numero intero: ');

if (numero5 == 8 || numero6 == 8) {
  console.log('almeno uno dei due numeri è uguale a 8');
}else if (Number(numero5) - Number(numero6) == 8) {
    console.log('la loro sottrazione è uguale a 8');
}else if (Number(numero5) + Number(numero6) == 8) {
    console.log('la loro addizione è uguale a 8');
}else if (Number(numero6) - Number(numero5) == 8) {
    console.log('il risultato non è uguale a 8');
}else {
  console.log('il risultato non è uguale a 8');
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = prompt('Quanto hai speso? ');
let spedizione = 10;
if (totalShoppingCart > 50) {
    console.log('la spedizione è gratuita');
}else {
    console.log( `la spedizione costa ${spedizione}, quindi il totale sarà ${Number(totalShoppingCart) + spedizione}`);
}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = prompt('Quanto hai speso? ');
let spedizione = 10;
if (totalShoppingCart > 50) {
    console.log('la spedizione è gratuita');
}else {
    console.log( `la spedizione costa ${spedizione}, quindi il totale sarà ${Number(totalShoppingCart*0.80) + spedizione}`);
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA
let numeri = [10,7,2]
let ordine = numeri.sort(function(a,b)
{return b-a;})
console.log(ordine);
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA
if(!isNaN(inserisciNumero)){
  console.log("è un numero")
}
else{
  console.log("non è un numero")
}*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 let numero = prompt("Inserisci un numero: ");

  if(numero % 2 == 0){
    console.log(${numero} è pari);
  } else {
    console.log(${numero} è dispari);
  }
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

  /* SCRIVI QUI LA TUA RISPOSTA
  let val = 10
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


/* SCRIVI QUI LA TUA RISPOSTA
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me);*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
delete me.lastName;
console.log(me);*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

delete me.skills[me.skills.length-1];
console.log(me)*/


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA 
let array = [];
let i = 1;
do {;
  array.push(i);
  i++;
} while (i <= 10)

console.log(array);*/


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
