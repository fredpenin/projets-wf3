"use strict"; // oblige à mettre la bonne syntaxe, les ";" etc, pour obliger la compatibilité avec les versions antérieurs à ES6

$(document).ready(function(){

    //retrieve HTML elements
    var body = $("body");
    var offcanvas = $("#offcanvas");
    var btnOpen = $("#btn-open-offcanvas");
    var btnClose = $("#btn-close-canvas");

    // Open the OffCanvas
    btnOpen.on("click", function(){
        body.addClass("open");
    });

    // Close the OffCanvas
    btnClose.on("click", function(){
        body.removeClass("open");
    });

});