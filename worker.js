let i = 0;
function count() {
    i++;
    postMessage(i); // Sendet i an unsere Hauptseite
    setTimeout("count()", 500);
}

count();