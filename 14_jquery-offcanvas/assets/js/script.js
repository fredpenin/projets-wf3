"use strict"; // oblige à mettre la bonne syntaxe, les ";" etc, pour obliger la compatibilité avec les versions antérieurs à ES6

$(document).ready(function(){

    //retrieve HTML elements
    var offcanvas = $("#offcanvas");
    var btnOpen = $("#btn-open-offcanvas");
    var btnClose = $("#btn-close-canvas");

    // Open the OffCanvas
    btnOpen.on("click", function(){
        //offcanvas.css("left", 0);
        offcanvas.animate({left: '0'}, 700);
    });

    // Close the OffCanvas
    btnClose.on("click", function(){
        //offcanvas.css("left", "-280px");
        offcanvas.animate({
            left: '-280px'
        }, 700);
    });

});