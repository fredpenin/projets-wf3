"use strict"

var source = "http://osw3.net/playlists.php";

// Variables declaration
var playlists = {};

$(document).ready(function(){

    //===========================
    // Retrieve Elements
    //===========================

    var elem_btnGet = $("#get-playlists");
    var elem_playlists = $("#playlists");

    //===========================
    // Retrieve Playlists
    //===========================

    elem_btnGet.on("click", function(){
        // affiche le loading
        $(".loader").show();
        setPlaylist(source);
    });
    //autre manière d'écrire cette fonction : 
    // à utiliser s'il y a plusieurs evenements (click, scroll...)
    // elem_btnGet.on({
    //     click: function(){
    //     playlists = setPlaylist();
    //     }
    // });
});

/**
 * Set Playlist
 * @param (string) url adress of playlists file
 * @return (object) Playlists
 */
function setPlaylist(url)
{
    //requete AJAX
    //$.ajax(url)
    $.ajax({
        method: "POST",
        url: url,
        dataType: "json",
        success: function(response){
            //alert("success");
            playlists = response;
            parsePlaylist();
            // cache le loading
            $(".loader").hide();
        },
        error: function(){
            alert("error");
        }
    });
//     //on request success
//         .done(function() {
//             alert("success");
//         })
//         // on request fail
//         .fail(function(){
//             alert ("error");
//         });
//         // Do if request Done or Fail
//         // .always(function(){
//         //     alert ("complete");
//         // });

//pour la methode get, on peut utiliser la syntaxe simplifiée suivante:
//      $.getJSON(url, function(response){
//          console.log(response);
//      })
}

function getPlaylist()
{
    return playlists;
}

function parsePlaylist()
{
    var pl = getPlaylist();
    // console.log(pl.generator);
    // console.log(pl.lastUpdate);
    // console.log(pl.playlists);

    // for(let i = 0; i < pl.playlists.length; i++)
    // {
    //     console.log(pl.playlists[i]);
    // }
// Equivalent de la boucle For avec JQuery : 
    // $.each(pl.playlists, function(key, value){
    //     console.log(key);
    //     console.log(value);
    // });

// créer une div contenant le nb de lignes du tableau :
     var nbListes =  pl.playlists.length;
    // console.log(nbListes);
    // $('<div class="totalPlayList">').html("Total :" + nbListes).appendTo("body");
 
    //utiliser .find : 
    $("#playlists").find("span").html(nbListes);

    
    // Créer des boutons avec le Titre des listes
    // quand on appuie sur un bouton, affiche la liste associée

    var i = 0;
    var title = "aucun";
    for(i = 0; i < pl.playlists.length; i++)
    {
        title = pl.playlists[i].title;
        console.log(title);
        $('<button class=title>').html(title).appendTo("body");
        //console.log(pl.playlists[i]);
    }
    $("button").on("click", function(){
        classButton =  $(this).class
        
        // var nbTracks = pl.playlists["title"];
        // console.log(nbTracks);
        //for (let i=0; )

        $('<div class="arrTrack">').html()
    });

}