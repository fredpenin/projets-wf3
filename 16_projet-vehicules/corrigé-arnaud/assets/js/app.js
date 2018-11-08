// Request base url
var base = "http://osw3.net/tp/";
var source_constructor = base+"vehicules.php";
var source_models;

// Constructors & models objects
var constructors;
var models;

// HTML Tags to jQuery Elements
var slct_constructors;
var slct_models;
var div_models;
var div_poster;

/**
 * Init the app on document ready (fully loaded)
 */
$(document).ready(function(){

    // HTML Tags
    slct_constructors = $('select#constructors');
    slct_models = $('select#models');
    div_poster = $('.poster');
    div_models = $('div.models-content');

    $.getJSON(source_constructor, function (response) {
        constructors = response;
        generate_select_constructors();
    });

});


/**
 * Set constructors to the constructor variable
 * @param {object} constructors 
 */
function generate_select_constructors() 
{
    // Loop on Constructors list
    $.each(constructors, function(key, constructor){

        // Create <option> for Constructors <select>
        var op_constructor = $('<option></option>');
            op_constructor.text(constructor.constructor);   // Ajoute le nom du constructeur
            op_constructor.val(constructor.models);         // Ajoute l'adresse du fichier des modeles dans l'attribut value=""
            op_constructor.attr('data-brand', constructor.brand);         // Ajoute un attribut data-brand avec le chemin du logo
        slct_constructors.append(op_constructor);

    });

    // Do on Constructor change
    slct_constructors.on('change',function(){

        // Reset of the models <select>
        slct_models.attr("disabled", true);
        slct_models.empty();
        var op_model = $('<option></option>');
            op_model.text("Select a constructor");
        slct_models.append(op_model);
        
        // Reset of the models HTML List
        div_models.empty();


        if ($(this).val().length > 0)
        {
            // Generate the URL of source of Models
            source_models = base + $(this).val();

            $.getJSON(source_models, function (response) {
                models = response;
                generate_select_models()
            });
        }
    });
}

function generate_select_models()
{
    // Loop on Models list
    $.each(models.models, function(key, model){

        // Create <option> for Models <select>
        var op_model = $('<option></option>');
            op_model.text(model.name);
            op_model.val(model.poster);
        slct_models.append(op_model);

        // Create item for models list
        var div_model = $('<div></div>');
            div_model.addClass('model');
        div_models.append(div_model);
        
        // Create the illustration of the model
        var div_illustration = $('<figure></figure>');
            div_illustration.addClass('illustration');
            div_illustration.css({
                "background-image": "url("+base + model.illustration+")"
            });
        div_model.append(div_illustration);
        
        // Model Info
        var div_info = $('<div></div>');
            div_info.addClass('info');
        div_model.append(div_info);

        var h3_info = $('<h3></h3>');
            h3_info.html(models.constructor);
        div_info.append(h3_info);

        var h5_info = $('<h5></h5>');
            h5_info.html(model.name);
        div_info.append(h5_info);

    });
    
    // Change the placeholdertext of the Models <select>
    slct_models.find('option:first').text("Select a model");

    // Remove the disabled attribute of the Models <select>
    slct_models.attr("disabled", false);

    // Change the poster
    slct_models.on('change', function(e){

        e.preventDefault();
        e.stopImmediatePropagation();

        var img_poster = base + $(this).val();
        console.log(div_poster);
        div_poster.css({
            "background-image": "url("+img_poster+")"
        });
    });
}