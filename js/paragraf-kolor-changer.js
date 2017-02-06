'use strict';


function ustaw_tlo() {
   p1.style.backgroundColor = "red";
   p2.style.backgroundColor = "blue";      
}

var input = document.createElement('input');
input.type = "button";
input.value = "Kliknij aby zmienic kolor";
input.setAttribute("onclick", "ustaw_tlo()");

var paragraph1 = document.createElement('p');
var paragraph2 = document.createElement('p');
paragraph1.innerHTML = "Paragraf 1";
paragraph2.innerHTML = "Paragraf 2";

document.body.appendChild(paragraph2);
document.body.appendChild(paragraph1);
document.body.appendChild(input);

var p1 = document.getElementsByTagName('p')[0];
var p2 = document.getElementsByTagName('p')[1];

//var paragraph1 = document.getElementsByTagName('p')[0];
//var paragraph2 = document.getElementsByTagName('p')[1];

