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
