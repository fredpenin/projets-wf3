        // $(document).ready(function(){

        // });
        // ou encore, en simplifié :
        $(function(){
            $('.machin').css({
                color: "green"
            });

            $('#politique').css({
                backgroundColor: "yellow", 
                padding: "1rem"
            });
        });

        //bouton qui masque sport qd on clique dessus
        // se baser sur le display: none de <section>
        $(document).ready(function(){
            $("button").click(function(){
                var sport = $("#sport");
                var isDisplayed = sport.css("display");
                //console.log(isDisplayed);
            
                if(isDisplayed == "block"){
                    //isDisplayed = "none";
                    sport.css("display", "none");
                } else {
                    sport.css("display", "block");
                }  
                //$("#sport").toggle();        
            });
        });

        //console.log($("#politique").attr("data-timeout"));
        //console.log($("#politique").data("timeout"));


        var valeur = $("#politique").attr("data-timeout");
        valeur = valeur*2;
        console.log(valeur);
        $("#politique").attr("data-timeout", valeur);
        
        //$("[bidule]")
        /*$("button").click(function(){
            //console.log($("#sport").hide().type);
            //$("#sport").show();
            
            if ($("#sport").style.display == none)
            {
                $("#sport").hide();
            } else 
            {
                $("#sport").show();
            }
        });
        */

        // détecter le click du bouton et afficher une alerte
        $("button").on("click", function(){
            alert('pepito');

        });

        // le on avec plusieurs evts : 
        $("button").on({
            mouseenter : function(){
                $(this).css("color", "red");
            },
            mouseleave : function(){
                $(this).css("color", "black");
            }
        });

        // keylogger de la saisie user, qu'on envoie dans la div "log"
        $(document).on({
            keypress: function(e){
                var code = e.keyCode || e.which;
                //$("#log").html(code);
                $("#log").html(String.fromCharCode(code));
            }
        });
        //alert($("#log").html());

        
        // Ex :  récupérer la taille du texte de la balise <p>
        // et inscrire la taille du texte dans la balise (id=log)
        var fontSize = $("p").css("font-Size");
        console.log(fontSize);
        $("#log").html(fontSize); // .text si on veut envoyer du texte, .html si on veut du txt interprété comme du html

        //compte le nb de char des p
        // var contenuP = $("p").html();
        // console.log(contenuP);
        // var nbCar = contenuP.length;
        // console.log(contenuP);


// Ex : qd on clique sur balise p : ça agrandit le txt à 100px; si on reclique, ça revient à 16
$("#log").click(function(){ // mieux vaut utiliser on("click, function(){})")
    //réutilisation de la  var fontSize = $("p").css("font-Size");
    if(fontSize == "16px"){
        fontSize = "100px";
        $("#log").css("fontSize", 100);//mieux : $(this).css("fontSize") == fontSize){
        $("#log").html(fontSize);

    } else {
        fontSize = "16px";
        $("#log").css("fontSize", 16);
        $("#log").html(fontSize);
    }    
});

