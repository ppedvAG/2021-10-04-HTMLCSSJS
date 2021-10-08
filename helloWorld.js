

// // Ich bin ein normaler Kommentar
// /* 
// rr
// qwe
// qwe
// w
// sa
// asd
// */
// /* Das ist 
//     ein mehrzeiliger
//     Kommentar
// */
// /* Einzeilig */


// // Werte vergleichen
// 12 == 12 // true
// 12 == "12" // true
// 12 == 13 // false

// // Wert und Typ vergleichen

// 12 === 12 // true
// 12 === "12" // false, da verschiedene Typen
// 12 === 13 // false

// // Typ: number - Zahlen
// let maximalerWert = 1.7976931348623157e+308;
// let neuMax = Number.MAX_VALUE;
// let a =  -12;
// let float = 1.4434;
// let numberOne = 24;
// let numberTwo = 12;
// let greater =  1797693134862315800000000000000000000000000000000000000000000000000000000000000000000000n;

// // Typ: string - Texte
// let leerenString = ""; // Type => string
// let alternativerString = 'Einfache Anführungszeichen gehen genau so';
// let StringMitEInfachemAnführungszeichen = "Hallo ich bin's";
// let StringMitZitat = "Das ist ein "; // Die selben Anführungszeichen dürfen nicht im String vorkommen
// let StringMitALternativemZitat = 'Das ist ein "Zitat"'; // 
// var prename = "Marius";
// var lastname = "Sommer";

// // Typ: boolean - wahr oder falsch
// var wahr = true;
// var falsch = false;

// // Typ: object mit Wert null - Wirklich ein Verweis auf leere Daten
// var leer = null;
// // Meist mit Absicht

// // Typ: undefined - Verweist auf keinen Wert => leere Variable
// var keinVerweis = undefined;
// let ohneVerweis; // Typ => undefined
// // Lässt eher auf Fehler schließen

// // Verschieden Arten Variablen zu definieren:

// var test = "Test"; // Lässt neue Werte zu
// let besser = "Test"; // Lässt auch neue Werte zu
// const ALTERNATIV = "Test"; // Wert lässt sich nicht neu setzten

// test = 24;
// besser = "Irgenwas neues";

// // Mehrere Variablen in einer Zeile definieren: 
// var u = 13, v = 4, w = 12;

// // Hoisting
// zahl = 200; // Variable erhält Wert, ist noch nicht deklariert
// console.log("Ich schreibe alles was in meiner Klammer steht")
// // Es können auch direkt Variablen übergeben werden
// console.log(zahl);
// var zahl; // JavaScript die Deklaration der Variable nach oben zieht


// // Modulus
// // Modulus ist die Teilung mit Rest
// 12 % 2 // Ergebnis: 0, weil 12 durch 2 teilbar ist
// 11 % 2 // Ergebnis: 1, weil 11 nicht glatt durch 2 teilbar ist


// Kontrollstrukturen

// If-Klausel
// If erlaubt es uns auf verschieden Fälle zu reagieren und Code nur bedingt auszuführen

let testZahl = 15;
// let Ergebnis = testZahl % 2;

if (testZahl % 2 === 0) {
    // console.log("Die Zahl ",testZahl, " ist gerade." );
    // Schönere Mehtode Strings zu schreiben
    console.log(`Die Zahl ${testZahl} ist gerade.`);
}
// Else-Klausel
// Trifft immer ein, falls das if nicht zutrifft
else {
    console.log(`Die Zahl ${testZahl} ist ungerade.`);
}

// Wir können die if-Klauseln mehrfach benutzen

let age = 24

if (age >= 18 ) {
    console.log("Benutzer ist volljährig");
}
// Wird nur geprüft, falls der erste if Block nicht eintritt
else if (age >= 14) {
    console.log("Anmeldung erlaubt.");
}
else {
    console.log("Der Benutzer ist zu jung.");
}

let integerOne = 5;
let integerTwo = 10;

// Prüfen wir ob integerOne größer, kleiner oder gleich ist

if (integerOne === integerTwo) {
    console.log(`${integerOne} ist gleich groß wie ${integerTwo}`);
}
else if (integerOne < integerTwo) {
    console.log(`${integerOne} ist kleiner als ${integerTwo}`);
}
else {
    console.log(`${integerOne} ist größer als ${integerTwo}`);
}

// Vergleichs-Operatoren

11 == 11 // Prüft nur den Wert
11 === 11 // Prüft Wert und Typ
11 != 12 // Prüft ob Wert nicht identisch
11 !== "12" // Prüdft ob ungleicher Wert oder ungleicher Typ
5 < 10 // Prüft ob kleiner
5 <! 10 // Prüft ob größer
5 > 19 // Prüft ob größer
5 >! 19 // Prüft kleiner
5 <= 10 // Prüft ob gleic oder kleiner
5 >= 10 // prüft ob gleich oder größer

// Logik-Operatoren

1 < 100 && 1 < 10 // Und-Operator
// Sobald eine Bedingung falsch ist, ist die gesamte Operation falsch
5 === 5 || 5 === "Hallo" // Oder-Operator
// Der gibt true zurück, sobald eine von beiden Bedingungen erfüllt ist

let newAge = 24

if (newAge > 14 && newAge >= 18 ) {
    console.log("Benutzer ist volljährig");
}
else {
    console.log("Der Benutzer ist zu jung.");
}

// Switch-Case

// Vergleicht den Wert einer Variable mit mehreren möglichen Werten

let fehlerCode = 8454654;

switch(fehlerCode) {
    // Case prüft ob die Variable in der Klammer den Wert vor dem Doppelpunkt hat
    case 0:
        console.log(`Fehlercode: ${fehlerCode}`);
        break;
        // break sprint aus dem Switch-Case raus
    case 404:
        console.log(`Seite nicht erreichbar, Fehlercode: ${fehlerCode}`);
        break;
    case 500:
        console.log(`Server antwortet nicht, Fehlercode: ${fehlerCode}`);
        break;
    default:
        // Default greift immer dann, wenn keiner der vorherigen Fälle eingetreten ist
        console.log(`Unbekannter Fehlercode: ${fehlerCode}`);
        break;
}

// Schleifen
// Die Schleifen erlauben uns einen Code-Block mehrfach auszuführen bis eine bestimmte Bedingung erreicht ist

// for-Schleife

for(let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 10; i > 0; i--) {
    console.log(i);
}
let sum = 0;
for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) { 
        sum += i;
    }
    console.log("In der Schleife:")
    console.log(`${i}.te Durchlauf`)
    console.log(sum);
}
console.log("Nach der Schleife:")
console.log(sum);
// ausgeschriebene Schleife
/*
Erster Durchlauf:
i = 0
Prüfe ob 0 < 5 => ist wahr
ist 0 modulo 2 gleich 0? => ist wahr, also springt er in den if block rein
sum + 0 = 0
Dann ist die if Klausel vorbei
GIbt sum = 0 in der Konsole aus => Im browser wird 0 angezeigt
i + 1
Zweiter Durchlauf:
i = 1
Prüft ob 1 < 5 => ist wahr
pürft ob 1 modulo 2 gleich 0 => falsch, also überspringt er die if Schleife
Gib sum = 0 in der Konsole aus => Im browser wird 0 angezeigt
i + 1
Dritter DUrchlauf:
i = 2
Prüfung ob 2 < 5 => wahr
Prüft ob 2 modulo 2 gleich 0 => wahr
sum + i => sum + 2
Gib sum = 2 in der Konsole aus, Browser zeigt 2 an
i +1
=> wiederholt bis die Bedinung i < 5 nicht mehr Wahr ist
Letzten Durchlauf:
i = 4
Prüft 4 < 5 => wahr
Prüft ob i modulo 2 gleich => wahr, also geht in die If schleife
sum + 4 => sum 2 + 4 = 6
Gib sum = 6 in der Konsole aus
i + 1 => i = 5
Prüft 5 < 5 => falsch, also wird die Schleife beendet
*/

// die For-Schleife braucht eine Zähler-Variable, eine Bedingung bis zu der die Schleife ausgeführt werden soll und ein Inkrement/Dekrement
// Die For-Schleife ist eine kopfgesteuerte Schleife, das heißt die Bedingung wird vor der ersten AUsführung geprüft
// for(Zähler-Variable; Bedingung; Inkrement)

// While-Schleife
// Die while ist auch Kopfgestuert => Die Bedinung wird am Anfang geprüft
// while(Bedingung) {Anweisungs}
let counter = 0;
sum = 0;
while(counter < 10) {
    if (counter % 2 !== 0) {
        sum += counter;
    }
    console.log("Hallo aus der while-Schleife");
    console.log(`Zwischenergebnis: ${sum}`);
    counter++; // Müssen selbstständig hochzählen, da die Schleife das nicht für uns übernimmt
}
console.log(`Endergebnis: ${sum}`);
// While ähnelt der for Schleife 
// buttonPressed = true
// Die while Schleife eignet sich eher für Operationen mit wirklichen booleschen Werten und nicht so sehr für Zahlenoperationen

// Do...while-Schleife
// Ist fußgesteuert
// Das heißt dei Schleife läuft immer mindestens einmal durch, da die Bedinung erst am Ende der Schleife gepüft wird
// Syntax:
/*
do {
    Zeug, das die Schleife durchführen soll.
}
while(Bedingung)
*/


// counter = 10;
// do {
//     alert(counter);
//     counter++; //Müssen selbstständig hochzählen
// }
// while(counter < 5); // Hier wird erst geprüft ob die Bedinung eintritt

// let warenkorbPreis = [10, 20, 854, 83012, 10293, 4981, 123]; // Ist ein Array
// // Jedes Element in einem Array, in dem Beispiel der Warenkorb, hat eine Stelle, wird auch Index genannt
// // Diese Stelle fängt mit 0 an und zählt dann hoch
// // Wir können die einzelnen Elemente in einem Array mit diesem Index anspreche
// // array[index]
// warenkorbPreis.length // Zeigt Anzahl der Elemente im Array
// let gesamtPreis = 0; // Der endpreis des Kunden
// for (let i = 0; i < warenkorbPreis.length; i++) {
//     gesamtPreis += warenkorbPreis[i];
// }
// alert(`Der Gesamtpreis beträgt ${gesamtPreis}`);

// Funktionen
// Unterprogramme, die können wir einmal definieren und dann belieb oft aufrufen
// Normalerweise werden Funktionen mit dem Keyword function definert

// Ist ein Objekt, das andere Objekte manipulieren kann
// Wir können Funktionen Varaiblen übergeben, dann sprechen wir von Parametern

function sayName(name) {
    alert(`Hallo ${name}!`);
}
// Gibt uns keinen Wert zurück

// sayName(gesamtPreis);
// sayName("Marius Sommer");
// let sayHello = sayName;
// sayHello("Max Mustermann");

// Wenn wir wollen, dass eine FUnktion einen WErt zurückgibt, müssen wir das return Keyword benutzen

// Definieren einer Funktion, ist wenn wir das Keyword function benutzen
function add(x, y) {
    return x + y;
}

let ergebnis = add(5, 6);
ergebnis = add(ergebnis, ergebnis);
add(123,4);
// Aufrufen einer Funktion ist wenn wir den namen der Funktion schreiben und ihr (falls nötig) Parameter übergeben

// Funktionen können verschachtelt werden

function testFunktion(name) {
    function nameToConsole() {
        console.log(name);
    }
    nameToConsole();
}
testFunktion("Erika Mustermann");
function isEven(integer) {
    return integer % 2 === 0;
}
// Gibt uns einen booleschen Wert zurück je nachdem ob die Zahl gerade ist oder nicht

let randomNumber = 14;

if (isEven(randomNumber)) {
    console.log(`${randomNumber} ist gerade`);
}
else {
    console.log(`${randomNumber} ist ungerade`);
}

// DRY, dont repeat yourselve
// Alles was wir öfter als einmal verwenden, sollte wenn möglich in eine Funktion ausgelagert werden
// Erleichtert uns:
// 1. Testen, da wir eig nur die Funktion testen müssen
// 2. Änderungen, da wir nur die Funktion ändenr müssen

function fullName(vornamen, nachnamen) {
    return vornamen + " " + nachnamen;
}

databaseUser = "Günther";
databaseUserLastName = "Schmidt";
let Name;
Name = fullName(databaseUser, databaseUserLastName);
let user2;
user2 = fullName("Peterson", "Paul");

// Immediatly invoked function
// Funktion, die sofort aufgerufen wird und nicht erneut verwendet werden kann

console.log(function(a, b) {return a + b}(90,50));
console.log(function(a, b) {return a + b}(10,25));

// Funktionen können anderen Funktionen als Parameter übergeben werden
// DA Funktionen ist JavaScript vollwertige Objekete sind

let nochNeZahl;
nochNeZahl = add(add(2, 4), add(4 ,8)); // Rückgabe: 18

// function add(x, y) {
//     return 6 + 12;
// }

// Anonyme Funktionen/ Pfeil-Funktionen

// let multiplikation = function(produktA, produktB) {return produktA * produktB};
// multiplikation(2, 8) // 16

// let multiplikation = (produktA, produktB) => produktA * produktB;
// Muss einzeilig sein
// Braucht kein return-Keyword

// Falls wir es mehrzeilig haben wollen, brauchen wir wieder die geschweiften Klammer
// Brauchen ein return

let dividieren = (dividendA, dividendB) => {
    return dividendA / dividendB;
}

// Default-Wert

function subtraktion(minuend = 1, subtrahend = 0) {
    return minuend - subtrahend;
}
subtraktion();

// Rekursion
// Rekursion beduetet, dass die FUnktion sich selbst im Körper aufruft
// Bei der Rekursion brauchen wir IMMER eine Endbedingung, ansonsten geraten wir in eine Endlosschleife

function fakultaet(a) {
    if (a == 0 || a == 1) {
        return 1;
    }
    else {
        return a * fakultaet(a - 1);
    }
}

/*
    fakultaet(3) => 6
    fakultaet(3){
        prüft ist 3 == 0 oder ist 3 == 1 => falsch
        geht zu else
        Rückgabewert: 3 * 2
    }
    Nächste Ausführung:
    fakultaet(2){
        prüft ist 2 == 1 oder 2== 0 => falsch
        geht zu else
        Rückgabewert: 2 * 1
    Nächste Ausführung:
    fakultaet(1){
        prüft ist 1 == 0 oder 1 == 1 => richtig
        RÜckgabewert: 1 
    }
    }
    return 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 
*/
let fakultaetOhne = 0;
console.time("fakultaet");
fakultaetOhne = fakultaet(50);
console.timeEnd("fakultaet");

let fakultaetSchleife = 1;
console.time("Schleife");
for (let i = 50; i > 0; i--) {
    fakultaetSchleife *= i;
}
console.timeEnd("Schleife");

console.log(fakultaetOhne)
console.log(fakultaetSchleife)

// Funktion1: Rechne ein Alter in Hundejahre um (1 Menschenjahr ^= 7 Hundejahre)
// Funktion2: Berechne einen Jahresvorrat anhand des täglichen Bedarfes 
// Die Ergebnisse beider Funktionen sollen in der Konsole ausgegeben werden


// Vordefinierten Objekte
// Array
// EIn Objekttyp, der mehrere Werte innerhalb einer Variable speichert
// Definiert wird das Array wie eine normale Variable, aber die Werte werden von [ ] umschlossen und voneinander mit Kommas getrennt
// Ein Array kann verschieden Typen beinhalten
let beispielArr = [12, true, "Marius Sommer",1 , 5124];
let multidimensionalesArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Um auf ein Wert innerhalb eines Arrays zuzugreifen können wir die Klammerschreibweise benutzen, das bedeutet, dass wir den Namen des 
// Arrays schreiben und danach eine [ ] innerhalb der, der Index steht
// Arrays beginnen bei 0 zu zählen
console.log(beispielArr[3]);
console.log(beispielArr);

// Arrays verfügen über die Eigenschaft .length
// Eine Eigenschaft ist eine Variable innerhalb eines Objekts
// objektnamen.eigenschaft
// Länge biespielArray:
beispielArr.length; // => 5
multidimensionalesArray.length; // => 3

// Methoden
// Methode ist eine Funktion, die zu einem Objekt gehört
// Werden aufgerufen wie EIgenschaften, aber man muss dahinter ( ) setzen

// array1.concat(array2)
// Die concat Methode gibt ein neues Array zurück, d.h. die beiden beteiligten Arrays werden nicht verändert
let neuesArray = beispielArr.concat(multidimensionalesArray);
// neuesArray = [12, true, "Marius Sommer", 1, 5124, [1, 2, 3], [4, 5, 6], [7, 8, 9]]

// array1.indexOf(suchbegriff, Startindex)
// Wir geben einen SUchbegriff ein und an welcher Indexposition gestartet werden soll
// GIbt nur den Index des ersten Auftretens zurück, falls der Suchbegriff nicht gefunden wird, gibt es uns -1 zurück
// Falls man den Startindex weglässt, beginnt die Methode an Indexposition 0
beispielArr.indexOf("Marius Sommer", 4) // Würde nichts finden => Rückgabe -1
beispielArr.indexOf("Marius Sommer") // Würde es gefunden werden => Rückgabe 2

// array1.lastIndexOf(suchbegriff, startposition)
// Funktioniert wie indexOf, aber gibt den letzten Index zurück
// BEispiel: 
let lastArray = [1, 1 ,1 ,1]
lastArray.lastIndexOf(1); // => GIbt 3 zurück
lastArray.indexOf(1); // => Gibt 0 zurück
lastArray.indexOf(3); // -1 da es gar nicht drin vorkommt

// array1.join(Seperator)
// Wandelt Array in einen String um, dabei trennt es jedes einzelene Element mit dem Seperator
lastArray.join(" und ") // "1 und 1 und 1 und 1"

// array1.pop()
// Entfernt das letzte Element innerhalb eines Arrays und es gibt das ELement zurück
let warteArray = [10, 11 , 12 , 13 ,14]
let derzeitigeNummer = warteArray.pop(); // derzeitigeNummer = 14
// FIrst in last out System FILO 

//array1.push(Element1, Elemente2)
// Fügt das oder die Elemente an das ENde des bestehenden Arrays an und gibt die  neue Länge zurück
warteArray.push(15, 16) // 6, da sich jetzt 6 Elemente im Array befinden

// array1.reverse()
// Dreht das ganze Array um
warteArray.reverse(); //[16, 15, 13, 12, 11, 10];

// array1.shift()
// Entfernt das erste Element in einem Array und gibt dieses zurück
warteArray.shift() // Gibt 16 zurück,da dieses Element an erster Stelle steht

//array1.slice(startIndex, Endindex)
// GUte Version
// Der EndIndex ist nicht inklusive => Sozusagen Endindex - 1
// Gibt ein neues Array zurück, dass alle Elemente von StartIndex bis nicht inklusive EndIndex enthält
let neueWarteSchlange = warteArray.slice(0, 4); // DIe ersten 3 Elemente von warteArray sind jetzt im Array neueWarteSchlange
let temperaturArray = [16, 15, 18, 10, 11, 19, 22];

// arra1.splice(StartIndex, Anzahl)
// Array wird inplace bearbeitet
// BÖSE Version
// Entfernt ANzahl ELemente beginnend bei dem StartIndex aus dem Array 
temperaturArray.splice(0,6); // => 22, alle anderen ELemente werden gelöscht
// Sort nachschauen

// array1.unshift(Element)
// Fügt ein Element an den Anfang des Arrays an
warteArray.unshift(11) // => [11, 15, 13, 12 , 11, 10]

// WIe iteriert man über ein Array?
// Zwei Möglichkeiten:
//for-Schleife + Klammernschreibweise

let testArray = ["Marius Sommer", "Stefan Pfeiffer", "Max Trolle"];

for (let i = 0; i < testArray.length; i++)
{
    console.log(testArray[i]);
}

// for-of Schleife

for (teilnehmer of testArray) {
    console.log(teilnehmer);
}

let zahlenArray = [100, 800 , 7, 25]

// Eine Schleife schreiben, die uns die größte Zahl des Arrays zurückgibt
// let maxValue = 0;

// for (zahl of zahlenArray) {
//     if (maxValue < zahl)
//     {
//         maxValue = zahl;
//     }
// }
// console.log(maxValue)

// Wir wollenen eine Funktion haben, der wir ein beliebig großes Array übergeben können und die uns am ENde die größte Zahl zurückgibt

function größteZahl(zahlenArray) {
    let maxValue = zahlenArray[0];
    for (zahl of zahlenArray) {
        if (maxValue < zahl)
        {
            maxValue = zahl;
        }
    }
    console.log(maxValue)
}

größteZahl([1, 20, 5234, -52 , 1222, 9559, 0]);
größteZahl([-50, -54, -2, 0, -600]);

//Höhere Funktionen im Array
// map-Methode
// array.map(Funktion)
// Die map Methode führt für jedes Element in dem array die Funktion in der Klammer aus

function halbiere(element) {
    return element / 2;
}

function hundeJahre(element) {
    return element * 7;
}
// Erwartet einen Callback, also benötigen wir hinter der Funktion  keine runden Klammern
console.log(zahlenArray.map(halbiere));
console.log(zahlenArray.map(hundeJahre));

console.log(zahlenArray.map((zahl) => zahl / 2)); // Ist das selbe wie in Zeile 606
console.log(zahlenArray.map((zahl) => zahl * 7)); // Ist das selbe wie in Zeile 607

// Ist das selbe wie:
/*
    for (zahl in zahlenArray) {
        return halbiere(zahl)
    }
*/

// String-Methoden

// Eigentlich ein primitver Typ, aber in JavaScript werden primitive Typen von Wrappern umgeben
// Nichts anderes als ein Objekt, das nur einen einzigen Wert hat und zwar die primitiven Daten
// Die Wrapper stellen uns Methoden zu diesen primitiven Typen zur Verfügung

// String Wrapper ist grundlegend eine ABwandlung eines Arrays
let myString = "Test" // Ist nichts anders als folgendes Array ["T","e","s","t"]
// Das heißt dass Strings haben auch die Eigenschaft .length
let length = myString.length // 4
//myString.indexOf(), lastIndexOf(), slice(), concat() funktioneren wie im Array
let partialString = myString.slice(0,2) // "Te" 
myString[2] = "S"; // Nicht erlaubt
// IN JavaScript ist ein String unveränderbar, aber die Variable darf neugestzt werden
// toUpperCase()
//toLowerCase()
console.log(myString.toUpperCase()); // TEST
console.log(myString.toLowerCase()); // test
console.log(myString) // Test
myString = myString.toUpperCase();
let myNewString = myString.toLowerCase();

// IN JavaScript ist ein String unveränderbar, aber die Variable darf neugestzt werden

// Schreibe eine Funktion, die einen String als Parameter akzeptiert 
// und den String in umgekehrter Reihenfolge wiedergibt

function umkehren(string) {
    let reversedString = "";
    for (let i = --string.length; i >= 0; i--)
    {
        console.log(i);
        reversedString += string[i];
    }
    return reversedString;
}

function umkehrenAlternativ(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--)
    {   
        if (i == string.length - 1)
        {
        reversedString += string[i].toUpperCase();
        }
        else {
        reversedString += string[i].toLowerCase();
        }
    }
    return reversedString;
}

console.log(umkehrenAlternativ("Test"))


// Wir wollen eine Funktion die wieder einen STring als Parameter akzeptiert und wir wollen wissen
// wie lange das längste Wort des Strings ist
// split()
function längstesWort(string) {
    let arr = string.split(" ");
    let longest = 0;
    for (word of arr) {
        if (longest < word.length)
        {
            longest = word.length;
        }
    }
    return longest;
}
console.log(längstesWort("Zwar kann der Nutzer schon nach drei Beispielsätzen mit der Arbeit beginnen."))

// Schreibe eine Funktion, die die Summe aller Zahlen in einem Array wiedergibt
// split()


// Die Methode trennt unseren String anhand der definierten Stellen z.B. ein leerzeichen bei " "

// und als zweites Element den Wert "Mustermann"

// Objekte

//Definition: Nachbildung realer Begebenheiten mit eignene Funktionen (nennt man dann Methoden) und Eigenschaften

//Objekt Erstellung

// Object-literal

let person1 = {vorname: "Max", nachname: "Mustermann", alter: 32, beschäftigt: true};

// new Object() Konstruktor

let person2 = new Object();

person2.vorname = "Erika";
person2.nachname = "Mustermann";
person2.alter = 34;
person2.beschäftigt = true;

// Shorthand fürs erstellen

let testEigenschaft1 = "Test";
let testEigenschaft2 = "Anderer Test"

let testOnbjekt = {testEigenschaft1, testEigenschaft2};

// Abrufen von Eigenschaften

console.log(person2.nachname); // Häufigere Variante , Dot-notation
console.log(person2["vorname"]); // Seltenere
person2["neues Attribut"] = "neu";
console.log(person2["neues Attribut"]); 

// for-of Schleife

for (attribut in person2)
{
    console.log(attribut);
}

delete person2["neues Attribut"]; // Löscht das Attribut
console.log(person2["neues Attribut"]); // undefined, weil die EIgenschaft nicht zugewiesen ist

// Alle Eigenschaften eines Objektes wiedergeben

for (key in person2)
{
    console.log(key);
}

// Methoden einbauen
// Wir müssen die Funktion erst definieren

function vorstellen(){
    console.log(`Hallo mein Name ist ${this.vorname} ${this.nachname}.`)
}

person2.sichVorstellen = vorstellen;

// Konstruktor
// Blaupause zum Objekt und den können wir dann Aufrufen um eine neue Instanz des Objekts zu erstellen

// function Person(vorname, nachname, alter){
//     this.vorname = vorname;
//     this.nachname = nachname;
//     this.alter = alter;
//     this.sichVorstellen = vorstellen;
// }



// Klassen
// Syntaktischer Zucker für die Objekt Erstellung

class Person {
    constructor (vorname, nachname, alter)
    {
        this.vorname = vorname;
        this.nachname = nachname;
        this.alter = alter;
        this.sichVorstellen = vorstellen;
    }

    set vorname(vorname) {
        if (typeof(vorname) === "string") {
            this._vorname = vorname;
        }
        else {
            console.error("Das war kein String");
        }
    }

    get vorname() {
        return this._vorname;
    }

}

let person3 = new Person("Max", "Trolle", 23);
let person4 = new Person("Marius", "Sommer", 26);

// Erstelle eine Klasse vom Typen Fahrzeug
// Die Eigenschaften sollten Marke, Modell und Geschwindigkeit enthalten
// DIe Klasse soll über eine Beschleuninigungs Methode verfügen
// fahrzeug.beschleunige(120);
// Setzt die GEschwindigkeit auf 120
// Und die Konsole gibt aus, dass jetzt 120 gefahren wird


// JSON - Javascrip Object Notation
// Findet man häufig bei API-Calls
weather = {
    temeperatur = 12,
    niederschlag =  "122mm",
    tag = "Montag"
}
weather.temperatur