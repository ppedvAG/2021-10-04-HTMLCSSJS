/* Fehlerbehandlung */

/* Mit der Fehlerbehandlung können wir auf Fehler reagieren und damit sicherstellen, dass das Script weiter ausgeführt wird */

/* try-statement */
// Wir beginnen einen Versuch und falls dieser nicht funktioniert 
// springt unser code in den catch-Block
setTimeout(multipliziere, 5000)

try {
    // alert("Hallo Welt");
    console.log("Der Befehl wurde erfolgreich ausgeführt")
}
catch(err) {
    console.error(err);
    document.querySelector("#fehler").innerHTML = err;
    // Selbe Befehl wie console.log, aber Schriftfarbe rot
}
finally {
    document.querySelector("#fehler").innerHTML = "Es hat alles funktioniert";
    // Wird immer ausgeführt, auch wenn kein Fehler geworfen wurde
}

function add(x,y) {
    return x + y;
}

try {
    let wert = add(2,2);
    // if (wert == 4) {
    //     throw "Der Wert darf nicht vier sein";
    //     // Erlaubt es uns individuelle Fehlermeldungen zu erstellen
    // }
    
}
catch (err) {
    console.error(err);
}

// Asynchron
// Code der nicht sofort ausgeführt wird oder länger braucht
// setTimeout(Callback, zeitInMs)
// setTimeout übergibt die Funktion dem CallStack, der dann die spezifizierte Zeit abwartet 
// bevor er die FUnktion ausführt

function multipliziere () {
    console.log(2500 * 10000);
}
console.log("Ohne TImeout:")
multipliziere();
console.log("Mit Timeout:")


// Promises
// Ist ein Versprechen, dass Code/Daten zurückgegben werden sollten
// Zustände:
// Pending, anfängliche Status, das Promise ist weder erfolgreihc noch fehlgeschlagen
// Fulfilled, das Promise war erfolgreich und kann uns daten geben
// Rejected, das Promise war nicht erfolgreich und gibt uns eine Fehlermeldung zurück

let myPromise = new Promise(
    function (resolve, reject) {
        let x = 20;
        if (x == 20) {
            resolve("Daten kamen an");
        }
        else {
            reject("Keine Daten empfangen");
        }
    }
);
// Noch machen wir nichts mit dem promise
myPromise.then(
    function(wert) {
        document.querySelector("#fehler").innerHTML = wert;
    },
    // function(error) {
    //     document.querySelector("#fehler").innerHTML = error;
    // }
    ).catch(error => document.querySelector("#fehler").innerHTML = error);
    // .then Methode
    //Syntax: promise.then(Funktion im Fall fulfilled, (Funktion im Fall rejected))
    // .catch Methode
    //Syntax: promise.then(....).catch(Funktion im Fall rejected)
    let myPromise50 = new Promise(
        function (resolve, reject) {
            let x = 50;
            if (x == 50) {
                resolve("50 kam an");
            }
            else {
                reject("Keine Daten empfangen");
            }
        }
    );
    let myPromise40 = new Promise(
        function (resolve, reject) {
            let x = 40;
            if (x == 40) {
                resolve("40 kam an");
            }
            else {
                reject("Keine Daten empfangen");
            }
        }
    );
    let all = Promise.all([myPromise,myPromise50,myPromise40])
    .then(daten => document.querySelector("#fehler").innerHTML = daten)
    .catch(error => console.log("Da lief was falsch: ", error));
    // Alle Promises in all müssen fulfilled oder rejected sein bevor das Promise all ankommt
    // Müssen die Promises als Array übergeben
    // .all([Promise1, Promise2,...])

    // .race([Promise1, Promise2,...])
    // Wartet auf das erste Promise das fulfilled wird oder rejected
    Promise.race([myPromise,myPromise50,myPromise40])
    .then(daten => document.querySelector("#fehler").innerHTML = daten)
    // ! Problem, wir könnten in die Callback-Hell geraten
    // async Keyword und await Keyword
    async function testAsync() {
        return 20;
    }
    async function getData() {
        return await testAsync();
    }
let promise3 = getData();
    // await kann nur auf der obersten EBene im Script benutzt werden oder innerhalb einer async Funktion

    // fetch-API
    // Möglichkeit Daten von einem anderen Server bzw einer anderen API abzurufen
    // Syntax: fetch("Adresse einer API")
    // Gibt uns einen HTTP-Body zurück
    // then.(response => respone.json())
    // .json() wandelt den Körper der HTTP-Antwort in eine von uns verwendbare json Datei um
    // JSON.stringify(json) gibt uns einen String zurück, der aus den angebenen JSON Daten erstellt wurde
async function getJson() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    return data
}
let apiData = getJson();
document.querySelector("#fehler").innerHTML = apiData;
async function getData2() {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    // darsteller(JSON.stringify(data));
    document.querySelector("#fehler").innerHTML = JSON.stringify(data);;
    console.log(data)
    return data;
}
let alternateData = getData2();

// Generatoren
// SInd prinzipiell normale Funktionen, die aber mehrere WErte zurückgeben können
// Syntax: function* functionsName() {...Inhalt }
// Benutzen nicht das return Keyword um Daten zrückzugeben
// yield

function* countDown(zahl) {
    while(zahl > 0) {
        yield zahl--;
    }
}
// Rückgabetyp: Generator
// Generatoren haben eine Methode
// .next() => Gibt uns das nächste yield-Objekt
// Objekt: {value: 10, done: false},.... {value: undefined , done: true};

let generator = countDown(50);
console.log("Generator-Aufruf: ", generator.next());
console.log("Generator-Aufruf: ", generator.next());
console.log("Generator-Aufruf: ", generator.next());
console.log("Generator-Aufruf: ", generator.next());
console.log("Generator-Aufruf: ", generator.next());

async function getUser(id) {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((data) => data.json())
    .then((user) => console.log(user.id + " " + user.name));
}
getUser(10);

async function* userGenerator(zahl) {
    let i = 0;
    while (i < zahl) {
        yield await getUser(i);
        i++;
    }
}
let users = userGenerator(5);

// Geolocation
// Einheitlich Schnittstelle für die Ermittlung geographischer Informationen

// Kann die Location über folgende Infos ermitteln:
// IP-Adresse => Computer
// GPS => Handys
// Funkzugangsknoten => Handys
// Offical Docs: http://www.w3.org/TR/geolocation-API/

// let position = navigator.geolocation.getCurrentPosition(data => console.log(data),
// error => console.error(error));
// Gibt uns einen einmaligen Standort im erfolgsfall zurück und zeigt uns ansonsten den Fehler an

// Dauerhafte Positionsüberwachung:
let currentLocation = navigator.geolocation.watchPosition(data => console.log(data),
error => console.error(error));
// Sendet Updates wenn der User sich bewegt mit dem aktuellen Standort
// Falls wir die Überwachung beenden wollen:
// navigator.geolocation.clearWatch(TimerId), z.B. die Variable in der wir zwischengespeichert haben
// navigator.geolocation.clearWatch(currentLocation)
// Könne sowohl bei watchPositon als auch bei getCurrentPositon ein Optionsobjekt mitanhängen:
//Optionsobjekt: {enableHighAccuracy: true/false, timeout: ms, wenn die Zeit überschritten wird wirft er uns einen Fehler
// maximumAge: ms, Wie lange die Daten im Cache-gespeichert werden sollen}
let options = {
    enableHighAccuracy: true,
    timeout: 0,
    maximumAge: 1000
};
let position = navigator.geolocation.getCurrentPosition(data => console.log(data),
error => console.error(error), options);

// Aufbau des Error-Objects: {code: 0-3, message: "textinhalt"}
// Error Codes:
// 0 Unbekannter Fehler
// 1 Erlaubnis verweigert
// 2 Position konnte nicht bestimmt werden
// 3 Timeout

// WebWorker 
// Können nur über Server ANgesprochen werden
// Können nicht auf die DOM der Seite zugreifen und kennen auch keine globalen Variablen
// Haben nur einen kleinen Satz an Funktionen

// Erstellung:
// let worker = new Worker(pfad zu JavaScript datei)

//Methoden:
// worker.postMessage(Nachricht) Erlaubt das Senden von Nachrichten von und an den Webworker
// worker.terminate() Beendet den WebWorker

// Events:
// onerror: Jedesmal wenn ein Fehler ausgelöst wird
// onmessage: wenn er eine Nachricht erhält

// Math Vordefiniertes Obejtk in JavaScript
// Hält nützliche Eigenschaften und Methoden im Bezug auf Mathematik


// Math. Eigenschaften:
let pi = Math.PI; // 3.141592653589793
let eulerischeZahl = Math.E;
let ln2 = Math.LN2;
let ln10 = Math.LN10;
let sqrt2 = Math.SQRT2;

// Methoden:

Math.round(2.45) // Rundet auf die nächste Ganzzahl
Math.pow(2,3) // Rechnet 2^3
Math.sqrt(3) // Quadratwurzel
Math.abs(-5) // Gibt uns den Betrag zurück
Math.ceil(2.45) // Rundet auf
Math.floor(2.45) // RUndet ab
Math.min(2, 5) // Gibt uns die kleinste der Zahlen zurück
Math.max(18, 200) // Gibt uns die größere der Zahlen zurück
Math.random() // Zufällige Zahl zwischen 0 und 1

// Zufällige Zahl zwischen 1 und 100

function random100() {
    return Math.floor(Math.random() * 100)
}


// Date
// JavaScript rechnet in MS, die seit dem 1.1.1970 vergangen sind

// Aktuelles Datum:
new Date() 

// Spezifisches Datum:

let date = new Date(1999, 4, 21) // 21.04.1999 00:00:00
new Date(1999, 4) // 01.04.1999 00:00:00
new Date(1999, 4, 21, 12, 54, 33, 12) // 21.04.1999 12:54:33:12

new Date(99) // 01.01.1970 00:00:00:99

// Date erstellung mit String:
// MM-dd-yyyy
new Date("08-10-2021"); 

// Methoden des Date-Objekts:
// date.Methode()

//year
date.getFullYear() // Gibt das Jahr im Format yyyy zurück
date.setFullYear(2020) // Setzt das Jahr auf 2020

//Month
date.getMonth() // gibt den Monat als Zahl zurück, zwischen 0 und 11
date.setMonth(0) // 0 - 11

// Date
date.getDate() // Tag als Zahl zwischen 1 und 31
date.setDate(23) // 1 - 31

// Hours, minutes und seconds:

date.getHours() // Stunde zwischen 0 - 23
date.getMinutes() // Minuten zwischen 0 - 59
date.getSeconds() // 0 - 59
// Alle drei auch als Setter

// Time
date.getTime() // MS seit dem 1.1.1970 


// Wochentag:

date.getDay() // GIbt den Tag als Zahl zwischen 0 - 6
// Kein Setter

// ! Date.now()
// ERstellt neues Datum, akzeptiert keine Parameter
// Gibt uns die MS seit dem 1.1.1970 zurück

