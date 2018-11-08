"use strict"

// on cible le parent en JS
var parent_js = document.getElementsByClassName("parent_js")[0];
//console.log(parent_js);

// on cible le parent en JQuery
var parent_jquery = $(".parent_jquery:first");
//console.log (parent_jquery);


// -- Créer un élément

// on crée un élement <div class="blue"> en JS
var child_js = document.createElement("div");
    child_js.setAttribute("class", "blue");

// on crée un élt <div class="green"> en JQuery
var child_jquery = $("<div>").addClass("green");


// -- Injecter un élement dans le DOM

// en JS
parent_js.appendChild(child_js);

// en jquery
parent_jquery.append(child_jquery); // .prepend pour que ça apparaisse avant

