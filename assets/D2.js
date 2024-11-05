/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1= 1;
let number2= 3;

if(number1 => number2){
  console.log('il numero è maggiore');
}
else if (number1 == numer2){
  console.log('i numeri sono uguali');
}
else{
  console.log('il numero è minore');
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number3 = 45;

if (number3 == 5){
  console.log('il numero è 5');
}
else{
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 15;
let y = 5;

if(x % y == 0){
  console.log('divisibile per 5');
}
else{
  console.log('non è divisibile per 5');
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number5 = 7;
let number6 = 8;

if (number5== 8 || number6 ==8 || number5 - number6 == 8 || number6 - number5 == 8 || number5 + number6 == 8){
  console.log('True');
}
else{
  console.log('False');
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 20;
const totalShippingCharges = 10;
let totalShopping;

if(totalShoppingCart <= 50){
  totalShopping = totalShoppingCart + totalShippingCharges;
  console.log(totalShopping);
}
else{
  console.log(totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const discount = 0.2;

if(totalShoppingCart <= 50){
  totalShopping = totalShoppingCart*discount + totalShippingCharges;
  console.log(totalShopping);
}

else{
  console.log(totalShoppingCart);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 2;
let b = 1;
let c = 3;

if (c > b && b > c){
  console.log (c, b, a);
}
 else if (c > b && a > b){
  console.log (c, a, b);
 }
 else if (b > c && c > a){
  console.log(b, c, a);
 }
 else if (b > a && a > c){
  console.log(b, a, c);
 }
 else if (a > c && c > b){
  console.log(a, c, b);
 }
 else{
  console.log(a, b, c);
 }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let object = 23

if (typeof object === 'number'){
  console.log('il valore è un numero')
}
else {
  console.log('il valore non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number7 = 6

if (number7%2 === 0){
  console.log('il numero è pari')

}
else{
  console.log('il numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7

if (val < 5){
  console.log("meno di 5")
}
else if (val < 10){
  console.log ("meno di 10")
}
else{
  console.log ("uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me= {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

console.log(me)

me.city ='Toronto'


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills[2] = null

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = []

array = [1,2,3,4,5,6,7,8,9,10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

array[9] = 100
console.log(array)
