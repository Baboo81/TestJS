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




