// Mit der DOMI API können wir unser gesamtes Dokument durchsuchen

// Für das finden von Elementen, das s.g. "traversing", haben wir folgende Befehele zur verfügung
// All diese Befehele beziehen sich immer auf das "document" - Objekt
// document.querySelector

// getElements()

// document.getElementById("id-des-Elements") // sucht nach dem ersten Element mit der eingebenen ID
// document.getElementsByClassName("klassenNamen") // Gibt uns ein Array von allen Elementen mit der Klasse
// document.getElementsByTagName("tag") // GIbt uns alle Elemente mit dem Tag zurück

// querySelector()

// document.querySelector("CSS-Selektor") // WIr kriegen das erste Element auf das, der Selektor zutrifft zurück
// CSS-Selektoren
// Tag-Namen: Bsp: p
// Klassen: Bsp: .klasse
// Id: Bsp: #id
// Kindesselektor: Bsp: element1 > element2 // document.querySelector("ul > li")

// querySelectorAll()
// Funktioniert wie querySelector, aber gibt eine Liste von Elementen zurück
//document.querySelectorAll("p") => gibt alle paragraphen zurück

// Erstellen von neuen Elementen

// WIr können neue ELemente erstellen und sie an beliebigen Stellen anfügen
// .createElement(Tagname)
// Wir erstellen eine Variable die das neue ELement "hält"

// let neuerParagraph = document.createElement("p");
// neuerParagraph.textContent // Nur für Text gedacht
// // innerText kann auch Links halten und ist von der Kompatibilität her besser
// // Setzen von neuen Text:
// neuerParagraph.innerText("It’s hard to come up with any example of useful JavaScript code on the web that doesn’t interact in some way with an HTML document. Generally speaking, your code needs to read in values from the page, process them in some way, and then generate output in the form of visible changes or informational messages. As your next step towards the goal of creating responsive interfaces for your pages and applications, this article and the next will introduce the Document Object Model, which provides the mechanism for inspecting and manipulating the semantic and presentational layers that you create.");
// // Setzen von Klassen
// neuerParagraph.className = "copyText";
// // Setzen von Ids
// neuerParagraph.id = "newP";
// neuerParagraph.style.color = "red";

// ANfügen von neuen Elementen
//bestehendeElement.appendChild(neueElement) => Fügt den Paragraphen unter das Element an
// bestehendesElement.prepend(neuesElement) => Fügt das neue ELement vor dem bestenden hinzu

// Löschen von Elementen
// mit remove() oder mit removeChild()
// Elternelement.removeChild(kindelement) funktioniert nur, wenn das ELement auch tatsählich innerhalb
// des Tags des Elternelments steht

// remove() funktioniert immer
// Sicherheitshalber sollte man, wenn möglich removeChild() verwenden um nicht die falschen Elemente zu löschen

// function addChild() {
//     let liste = document.querySelector("#todo");
//     let newItem = document.createElement("li");
//     newItem.innerText = document.querySelector("#text").value;
//     document.querySelector("#text").value = "";
//     liste.appendChild(newItem);
// }
// // document.querySelector("#addElement").addEventListener("click", addChild);
// // document.querySelector("#addElement").addEventListener("click", function() {alert("capturing : addElement")}, true);
// // document.querySelector("body").addEventListener("click", function() {alert("capturing : body")}, true);
// // document.querySelector("div").addEventListener("click", function() {alert("capturing : div")}, true);
// // document.querySelector("section").addEventListener("click", function() {alert("capturing : section")}, true);


// // Elemente verstecken mit DOM_API

// // Wir können mit der DOM-API auf das Styling unserer Elemente zugreifen
// // Element.styling.Css-Attribut
// // Für das verstecken eignet sich v.a. das Display-Attribut 
// // "none" versteckt das Element
// // "" eine leere Regel macht es wieder sichtbar

// // Mit der Funktion element.addEventListener(EventTypen, Funktion die aufgerufen werden soll (, optional ob es capturing benutzen soll))
// // click
// document.querySelector("#addElement").addEventListener("click", addChild);

// // Füge zu jedem newItem einen EventListener hinzu, der beim klicken ausgelöst wird
// // Die funktionen, die aufgerufen wird soll das Element wieder löschen
// // remove()
// // this
// // funktion soll erst als Argument innerhalb der addEventListener-Funktion erstellt werden
// // add.EventListener("gewünschtes Event", function() { }) 
// function addChild() {
//     let liste = document.querySelector("#todo");
//     let newItem = document.createElement("li");
//     newItem.innerText = document.querySelector("#text").value;
//     document.querySelector("#text").value = "";
//     newItem.addEventListener("click", function() {this.remove()});
//     liste.appendChild(newItem);
// }
// li.remove() // Das listitem entfernen

document.querySelector("#addElement").addEventListener("click", addChild);



// Füge zu jedem newItem einen EventListener hinzu, der beim klicken ausgelöst wird

// Die funktionen, die aufgerufen wird soll das Element wieder löschen

// remove()

// this

// funktion soll erst als Argument innerhalb der addEventListener-Funktion erstellt werden

// add.EventListener("gewünschtes Event", function() { }) 

function addChild() {
    let liste = document.querySelector("#todo");
    let newItem = document.createElement("li");
    newItem.innerText = document.querySelector("#text").value;
    document.querySelector("#text").value = "";
    newItem.addEventListener("click", function(){this.remove()});
    liste.appendChild(newItem);
}

// style.fontSize = "Wert";

// cookies
// Cookies erlauben es uns Daten für die Dauer der SItzung (bis der BRowser geschlossen wird) zu speichern
// Wir können uns eigene Namen einfallen lassen
// Wir können uns auch aussuchen wie lange sie gültig sind
// new Date() gibt uns das derzeitige Datum zurück
let tempDate = new Date();
let auslaufDatum = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() +5);

// new Date(jahr, monat, tag)
// new Date(jahr, monat)
// new Date(variable) Die ms die seit 01.01.1970 vergangen sind
// Wenn wir einen cookie setzen wollen ändenr wir die cookie EIgenschaft von document
// document.cookie = `username = ${wertVonInput};expires=${auslaufDatum}`;

// Erstelle eine Funktion, die einen cookie beim Klicken des zweiten (register) Buttons setzt
// FUnktion
// addEventListener("wele art von event", funktion die aufgerufen werden soll)
// else alert("Keine Username")

// new Date(0)
// Um cookies zu löschen, müssen wir den cookie neu setzen mit einem Datum, das in  der Vergangenheit liegt
// new Date(0)
// Erstelle eine Funktion, die unseren cookie wieder löscht und füge sie als click event bei dem neuen
// hinzu


document.querySelector("#register").addEventListener("click",reg);



function reg(){

    let User = document.querySelector("#usernamen").value;

    if(User != "") {

        document.cookie = `username = ${User}; expires=${auslaufDatum}`;

    }else{

        alert("Kein Username eingetragen!");
    }

}


document.querySelector("#delete").addEventListener("click",löschen);

function löschen(){

    let vergangenheit = new Date (0);

    document.cookie = `username = ; expires=${vergangenheit};`;

}
