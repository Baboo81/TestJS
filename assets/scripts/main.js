const title = document.createElement('h1');
title.setAttribute("id", "title");
title.innerHTML = "COUCOU !";
document.getElementById('myBody').appendChild(title);

/********************************************************* */

//Script qui détermine le jour de la semaine avec un switch :
const title2 = document.createElement('h1');
title2.setAttribute("id", "myTitle");
document.getElementById('myBody').appendChild(title2);
let date = new Date();
let day = date.getDay();
let msg = "";
//Le switch:
switch (day) {
    case 1 : 
        msg = "Nous sommes lundi !";
     break;
    case 2 :
        msg = "Nous sommes mardi !";
     break;
    case 3 :
        msg = "Nous sommes mercredi !";
     break;
    case 4 :
        msg = "Nous sommes jeudi !";
     break;
    case 5 : 
        msg = "Nous sommes vendredi !";
     break;
    case 6 : 
        msg = "Nous sommes samedi !";
     break;
    case 7 :
        msg = "Nous sommes dimanche !";
     break;
    default :
        msg = "Aucune infos à vous donner !";
     break;
}
document.getElementById('myTitle').innerHTML = msg;

/******************************************************* */

//Création d'une balise <noscript> :
const noscript = document.createElement('noscript');
const txt = "Votre navigateur n'accepte pas les scripts JavaScript ! La navigation sur ce site ne sera pas possible 😕";
noscript.innerHTML = txt;
document.getElementById('myBody').appendChild(noscript);

/******************************************************* */

//Opérateur ternaire :
//let nb = "";
//console.log("Votre devis comporte " + nb + "article" + (nb > 1 ? "s":""));

/******************************************************** */

const title3 = document.createElement('h1');
title3.setAttribute("id", "loop");
document.getElementById('myBody').appendChild(title3);

let somme = 0;
let start = 0;
let max = 10;


for(let n = start; n <= max; n++) {
    let result = n + 1;
    console.log(somme =  n + 1);
    document.getElementById('loop').innerHTML = "La somme = " + result;
};

/********************************************************** */
//Fct de conversion :
console.log(parseInt("200")); //Conversion d'une string en number
console.log(parseInt("25.34"));
console.log(parseInt("FF", 16));

//Création d'un modal avec des fonctions :

document.getElementById('btn-modal').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('is-visible');
    document.getElementById('modal').classList.add('is-visible');
  });
  
  document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });
  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('is-visible');
    document.getElementById('modal').classList.remove('is-visible');
  });
  
//Autre fonction :

const title4 = document.createElement('h1');
const title5 = document.createElement('h2');
title4.setAttribute("id", "ftcPluriel");
title5.setAttribute("id", "article");
document.getElementById('myBody').appendChild(title4);
document.getElementById('myBody').appendChild(title5);

function getPluriel(nb) {
    return nb > 1 ? "s" : "";
};

let price = 50;
let nbArticle = 1;
let resultPrice = `"Votre panier vaut" ${price} "euro"  ${getPluriel(price)}`;
let resultArticle = `"Il contient " ${nbArticle} "article" ${getPluriel(nbArticle)}`;

//console.log("Votre panier vaut " + price + "euro" + getPluriel(price));
//console.log("Il contient " + nbArticle + "article" + getPluriel(nbArticle));

//document.getElementById('fctPluriel').innerHTML = resultPrice;
//document.getElementById('article').innerHTML = resultArticle;

//Fct timer :

const title6 = document.createElement('h1');
title6.setAttribute("id", "compteur");
document.getElementById('myBody').appendChild(title6);

const nb = 0;

setInterval (function() {
    nb ++;
    document.getElementById('title6').innerHTML = nb;
}, 250);

/******************************************************************************* */

//Conversion de types :

const fecha = new Date();
const number = 10;
const tab = new Array(1,2,8,32);

console.log(fecha.toString());
console.log(number.toString());
console.log(tab.toString());


