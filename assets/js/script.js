/*
##Traccia
Sfruttiamo le timing functions (setInterval()) per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

##Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno? //24h
Da quanti minuti è composta un'ora? //60min
Da quanti secondi è composto un minuto? //60s
Da quanti millisecondi è composto un secondo? //1000ms
Quanti millisecondi mi separano da domani alle 9:30? //1693899000000ms
Esiste un oggetto JS in grado di gestire le date? Date()
Esistono dei metodi per trasformare una data in millisecondi? //date.getTime();

Tools:
- data di domani
- funzione set interval
- metto in variabile la data di oggi
- differenza tra data di oggi e domani
- Math.floor formula su w3 school
- queryselector per stampare in pagina
*/

//Data di domani
const tomorrowDate = new Date("Sept, 6 2023 09:30:00").getTime();

//funzione per countdown
const milliseconds = setInterval(function(){
    
    //data di oggi
    const today = new Date().getTime();

    //differenza di tempo da oggi a domani
    const difference = tomorrowDate - today;

}, 1000);

