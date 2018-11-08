//function click()
//{
    var button = document.getElementById("button");
    //console.log(button);
    button.onclick = sendDataToArray;
//}

function sendDataToArray()
{
    users = {};
    //recup de la saisie user
    var firstName = document.getElementById("firstName").value;
    console.log(firstName);
    var lastName = document.getElementById("lastName").value;
    console.log(lastName);
    
    var table = document.getElementById("array");
    //création de la ligne en fin de tableau
    var tr = document.createElement("tr");
    table.appendChild(tr);
    //création des deux cellules de la ligne
    var tdFirstName = document.createElement("td");
    tr.appendChild(tdFirstName);
    var tdLastName = document.createElement("td");
    tr.appendChild(tdLastName);
    // affectation des valeurs des variables dans le tableau
    // tdFirstName.appendChild(firstName);
    // tdLastName.appendChild(lastName);
    

    if firstName != "" && lastName != ""
    {
        users.push(
            // envoyer les valeurs
        );
    }

    function refreshView()
    {
        table.innerHTML = "";
    }
}












/*
function concatFullName(){
    var fullName = Element.getElementsByClassName("fullName");
    for(index in fullName){

    }
    
}
document.getElementsByClassName
*/