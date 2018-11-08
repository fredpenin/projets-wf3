// Déclaration des variables
var urlRoot = "http://osw3.net/tp/";
var urlMarques = urlRoot + "vehicules.php";
var urlBackground = "";
var urlModele = ""; // recevra l'url des modèles de la marque choisie

var lstMarque = []; // liste des marques à afficher ds la 1ere cmb

var cmbVehicMark; // choix dans la cmb des marques
var cmbVehicModele; // choix dans la cmb des voitures

var markData; // tableau avec toutes les infos du fichier des marques 
var modeleData;

var infoMarkChoice = {}; //objet contenant les infos de la marque choisie : un des 4 du 1er fichier



$(document).ready(function(){
    
    //récup des infos du fichier des marques dans markData
    setMarkList(urlMarques);
    

});

function setMarkList(url)
{
    // requête AJAX
    $.ajax({
        methode: "GET",
        url : url,
        dataType: "json",
        success: function(filedata){
            markData = filedata;
            //console.log(markData); // ok : tableau
            //console.log(markData.length); // ok : 4
            
            //envoie des noms de constructeur dans la comboBox
            sendMarkLstToCmb();
        },
        error: function(){
            alert("Problème rencontré lors de la récupération des données des marques.");
        }
    });
}

function sendMarkLstToCmb()
{
    //console.log(markData); //OK
    var balMarkSelect = $("#cmbVehicMark");
    for(let i=0; i<markData.length; i++)
    {
        //création et envoie des options du comboBox
        var balOptionMark = $("<option></option>");
        balOptionMark.appendTo(balMarkSelect);
        balOptionMark.html(markData[i].constructor);
    }
}

// choix d'une marque de véhicule
$("#cmbVehicMark").on('change', function(){
    cmbVehicMark = $("#cmbVehicMark > option:selected").text();
    console.log("Sélection de : " + cmbVehicMark); //OK

    console.log(markData); //OK
    
    for(let i=0; i<markData.length; i++)
    {
        var selectionMarque = markData[i].constructor;
        if (selectionMarque == cmbVehicMark)
        {
            infoMarkChoice = markData[i];
            urlBackground = urlRoot + markData[i].brand;
            //console.log(urlBackground);
            //$("#secButtons").css("background-image", "url(urlBackground)");

            urlModele = urlRoot + markData[i].models;

            // attribution des modèles à la 2e cmb selon le choix de marque :
            var balModeleSelect = $("#cmbVehicModele");
            var balOptionModele = $("<option></option>");
            balOptionModele.appendTo(balModeleSelect);
            
            //balOptionModele.html(.name);

        }
        
        


        /*

        */
        

    }



    

    //récupération des balises Option sous forme de tableau, pour récup l'index à chercher dans le fichier php :
    /*
    var arrOption = $("#cmbVehicMark > option");
    console.log(arrOption);
    var pepito = arrOption.indexOf(cmbVehicMark);
    console.log(pepito);
    */
    
   
});