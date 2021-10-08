
// FileReader API
// Erlaubt uns Dateien vom User einzulesen und auf unserer Seite darzustellen
// Ist ein JS Obejkt
// WIr müssen für alle Event des Readers eine Funktions chreiben:
// Events:
// loadstart: wenn der Einleseprozess gestartet wird
// progress: jedes mal wenn ein byte eingelsen wird, aber maximal alle 50 ms
// abort: Wenn der User den EinleseProzess abbricht
// error: wenn ein Fehler auftritt
// load: Einleseprozess ist abgeschlossen
// loadend: Wenn der Einleseprozess abgeschlossen ist, unabhängig vom Erfolg

// Konstruktor:
// new FileReader() => erstellt ein FileReader-Objekt

//Methoden:
//FileReader.readAsArrayBuffer(datei) ==> Liest die Datei als Binärstring ein
// FileReader.readAsDataURL(datei) ==> Liest den Pfad zur Datei ein
// FileReader.readAsText(datei) ==> Liest den Inhalt als Text ein.