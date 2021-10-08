// Wie erstelle ich ein RegExp?
// In JavaScript sind Regular Expressions ien eigenens Objekt
// RegEx, aber in JavaScript heißt das Objekt RegExp

let pattern = new RegExp("/Marius/");
let string = "Marius Sommer";
let negativ = "Max Trolle";

// RegExp.exec(string) Sucht nach dem Index an dem das Pattern auftaucht und gibt uns das zurück

pattern.exec(string) // => 0

// RegExp.test(string) Prüft ob das pattern vorhanden ist und falls ja, gibt er true zurück und falls nein,
// gibt er false zurück

pattern.test(string) // => true
pattern.test(negativ) // => false, da das Pattern nicht gefunden wird

// String-Methoden für RegExp

// string.match(pattern)
// DIe match Methode gibt uns ein Objekt zurück
// DIeses Objekt enthält den Ausdruck, den Index an dem das pattern gefunden wurde und den Input

string.match(pattern)
/*

    object {
        expression: "Marius",
        index: 0,
        Input: "Marius Sommer"
    }
*/

// string.search(pattern) 
// Gibt uns den Index zurück an dem das pattern gefunden wurde
// In dem FAll, dass es nicht gefunden wird, gibt er uns -1 zurück

string.search(pattern) // => 0
string.search("/r/") // => 2

// string.replace(pattern, Ersatz)
// Sucht erst ob das pattern vorkommt und falls ja ersetzt es dieses durch den Ersatz-String
// Falls, das pattern nicht gefunden wird, gibt er uns in den Input-String zurück
string.replace(pattern, "Gustav");

// string.split(pattern) oder direkt RegEx-String
// Gibt uns ein Array zurück, das den String enthält, der an der gemachten Stelle getrennt wurde
// Der gematchte Part wird ausgelassen
// Falls nichts gefunden wird, wird trotzdem ein Array zurückgegeben, das dann nur aus einem Element besteht
// und zwar dem Input-String

string.split("/r/g"); // ["Ma", "ius Somme"]

// Link: https://regex101.com/
// Zeigt uns an einem Live-Beispiel was gematcht werden würde