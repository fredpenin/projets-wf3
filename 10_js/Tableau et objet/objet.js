//LES OBJETS JS
// tableau associatif

// les 2 manières de déclarer l'objet :
var obj = new Object();
var obj = {};

var obj_ford = {
    model : "Mustang",
    moto : "Essence"
};

var arr_ford = [
    "Mustang", //Modèle
    "Essence"  //motorisation
];
console.log(obj_ford.model);
console.log(arr_ford[0]);

var arr_vehicules=[
    {
        model: "mustang",
        motor: "Essence"
    },
    {
        model: "twingo",
        motor: "Essence"
    }
]    



///////////////////////////////////////////
// liste d'élèves

var users=[
    {
        name: "bill",
        age: "12",
        sexe: "M",
        classe: "6e"
    },
    {
        name: "charly",
        age: "14",
        sexe: "M",
        classe: "5e"
    },
    {
        name: "coco",
        age: "16",
        sexe: "F",
        classe: "3e"
    }
];

//la boucle ForOf extrait à chaque itération les données du tableau
//"users" et les stocke dans la variable "user"

//la boucle ForIn extrait à chaque itération les index de chaque
//ligne du tableau
for (user of users)
{
    //console.log(user);
    for (key in user)
    {
        if (key == "name" || key == "age")
        {     
            console.log(key +" : " + user[key])
        }
    }
}