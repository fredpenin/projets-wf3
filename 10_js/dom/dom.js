// générer div de 500px x500
// ajouter du txt Lorem Ipsum
//1 bordure pr visualiser la div
//le txt doit être scolable ds la div


//var leFormulaire = document.createElement("form");

//leFormulaire.setAttribute("id", "IDcalContainer");
//leFormulaire.setAttribute("name", "myForm");
//leFormulaire.setAttribute("method", "post");
///////////////////////////////////////////////

var newDiv = document.createElement("div");
var body = document.getElementsByTagName("body")[0];
newDiv.innerText = "Lorem ipsum blablabla";

body.appendChild(newDiv);

