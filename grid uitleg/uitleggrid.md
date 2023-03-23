
Grid uitleg:

Stap 1 : container maken;

Stap 2 : kijken hoe de grid er uit ziet door te tellen  bijvoorbeeld (24) breed en (16) rijen

Stap 3 : vervolgens "Display Grid" Gebruiken

Stap 4 : Met de colummen of rijen , "Grid-template-columms" vervolgens met de maten bijvoorbeeld in "PX" (Repeat 24,5rem;)

stap 5 : grid -template -rows : repeat (16,5rem);

Stap 6 : Grid klaarzetten op de browser;

Stap 7 : maak items in de grid container eerste geef je een class van "first" "second" "third";
 
 .first{
    grid-column: 18 / 24;
    grid-row: 6 / 10;
    background (jouw keuzen)
}

.second{
    groid-column: 1 / 7;
    grid-row: 6 / 8;
    background: (jouw keuzen)
}

article{
    display:grid;
    grid-template-colums: repeat(4, 8rem);
    grid-template-rows: 14rem 5rem 40rem 4rem;
}