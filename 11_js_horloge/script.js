
function clock(){
    var date = new Date();
    console.log("date actuelle: " + date);
    ////////////////////////////////////////
    var jourSemaine = ["Dim", "Lun", "Mar.", "Mer", "Jeu.", "Ven.", "Sam."];
    var arrMonth = ["Janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
    var numJourSem = date.getDay(); // reçoit 5, pour vendredi
    var jourFr

    //nom du jour de la semaine
    jourFr = jourSemaine[numJourSem];
    console.log(jourFr);

    // jour dans le mois
    var numJourMois = date.getDate();
    console.log(numJourMois);

    // mois
    var numMois = date.getMonth();
    var nomMois = arrMonth[numMois];
    console.log(nomMois);

    // année
    var year = date.getFullYear();
    console.log(year);


    // HORLOGE
    var heure = date.getHours();
    console.log(heure);

    var minute = date.getMinutes();
    console.log(minute);

    var seconde = date.getSeconds();
    console.log(seconde);



    //assemblage et affichage de la date totale
        //date;
        document.getElementById("jourNom").innerHTML = jourFr;
        document.getElementById("jour").innerHTML = numJourMois;
        document.getElementById("mois").innerHTML = nomMois;
        document.getElementById("annee").innerHTML = year;
        //heure
        document.getElementById("heures").innerHTML = heure;
        document.getElementById("minutes").innerHTML = minute;
        document.getElementById("secondes").innerHTML = seconde;

        separators(true);
        setTimeout(separators, 500);
}

function separators(isDisplay){
    var separators = document.getElementsByClassName("separator");
    for(index in separators)
    {
        separators[index].innerHTML = isDisplay ? ":" : "_";
    }
}

//l'affiche dès l'actu de la page; sinon ne s'affiche qu'après 1 sec
clock();
// refresh de l'heure chaque seconde
setInterval(clock, 1000);
