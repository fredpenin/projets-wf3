// masque la div qd on clique
// on réaffiche la div qd elle est masquée

$("div").on("click", function(){
    $(this).hide(3000, function(){
        $(this).show(3000);
    });
});