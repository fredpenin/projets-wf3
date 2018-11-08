// les tableaux js

//déclaration d'un tableau contenant 2 entrées
var arr_fruits = ["bannane", "pomme"];

//affichage de l'entrée "pomme"
console.log(arr_fruits[1]);

//affichage de ttes les entrées du tableau
for (let i=0; i<arr_fruits.length; i++)
{
    console.log(arr_fruits[i]);
}

//tableau complet
console.log(arr_fruits);

//ajout d'une entrée au tableau
arr_fruits.push("kiwi", "fraise");
arr_fruits.push("ananas");

console.log(arr_fruits);

// définir la position d'une entrée
var pos_kiwi = arr_fruits.indexOf("kiwi");
console.log(pos_kiwi);

// suppression d'un élement du tableau
arr_fruits.splice(pos_kiwi, 1);//param1 : position du départ du splice /param2 :  longueur du splice
console.log(arr_fruits);

//on converti le tableau en chaine de caractère
var str_fruits = arr_fruits.join(", ");
console.log(str_fruits);

//affichage de la liste des fruits dans le navigateur
var body = document.getElementsByTagName("body")[0];
body.innerText = str_fruits;

//on converti une chaine en tableau
console.log(str_fruits.split(", "));

