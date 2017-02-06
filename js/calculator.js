'use strict';
/*-------------ZMIENNE------------------------------------------------------*/

var number1, number2, ans = 0;
var dotInUse = false;
var operator = false;
var operation = 300;
var howManyDigits=0;
var clearOnClick = false; //czysci ekran po nacisnieciu inputa po wypisaniu rozwiazania
var insertAns = false;

/*-------------FUNKCJE PORZĄDKOWE-------------------------------------------*/


function cleaner() {
   if(clearOnClick == true){
      var screen = document.getElementById('screen');
      screen.value = '';
   }
   clearOnClick = false; // przywracanie funkcjonalnosci przyciskom
   var operator = false;
}

function dot() { // nie pozwala na uzycie wiecej niz jednego przecinka w numerze
   
   if(dotInUse == false) { 
      var screen = document.getElementById('screen'); 
      screen.value += ".";
      dotInUse = true; 
   }
}

function insertLastAnswerToScreen() {    // pozwala na uzycie ostatniego wyniku
     
     if( insertAns == true ) {
     
      var screen = document.getElementById('screen'); 
      var lastAns = document.getElementById('screenMin').value.substring(5,32);
      var lastAnsNumber = Number(lastAns);
      screen.value = lastAnsNumber;
      
      insertAns = false;
   }
}

/*-------------FUNKCJE ARYTMETYCZNE-----------------------------------------*/

function add() {
  
   insertLastAnswerToScreen();
  
   if( operator == false ){ 
       operator = true;
       dotInUse = false;  // mozna ponownie uzyc przecinka 
       operation = 301;
       var screen = document.getElementById('screen');
       number1 = screen.value;
       howManyDigits = number1.length+1; // Pobiera dlugosc pierwszej liczby + 1 (symbol)
       number1 = Number(number1);
       screen.value += '+';
   }
}

function substract() {
  
  insertLastAnswerToScreen();
  
   if( operator == false ){ 
       operator = true;
       dotInUse = false;  
       operation = 302;
       var screen = document.getElementById('screen');
       number1 = screen.value;
       howManyDigits = number1.length+1; 
       number1 = Number(number1);
       screen.value += '-';
   }
}

function multiply() {
  
  insertLastAnswerToScreen();
  
   if( operator == false ){ 
       operator = true;
       dotInUse = false;  
       operation = 303;
       var screen = document.getElementById('screen');
       number1 = screen.value;
       howManyDigits = number1.length+1;
       number1 = Number(number1);
       screen.value += '×';
   }
}


function divide() {
  
  insertLastAnswerToScreen();
  
   if( operator == false ){ 
       operator = true;
       dotInUse = false;  
       operation = 304;
       var screen = document.getElementById('screen');
       number1 = screen.value;
       howManyDigits = number1.length+1;
       number1 = Number(number1);
       screen.value += '÷';
   }
}

    /*- najwazniejsza funkcja wlaczana przy znaku rownosci -*/ 

function count(){
   
   
    /* wszystko co jest na wyswietlaczu zostaje 'pociete' na numer1 i numer 2 */

   var screen = document.getElementById('screen');
   var length = screen.length;
   
   number2 = screen.value.substring(howManyDigits, length);
   number2 = Number(number2);
   
    // w zaleznosci od flagi opertion wykonuja sie inne dzialania
   
   switch (operation)
      {
         case 301: ans = number1 + number2; break;
         case 302: ans = number1 - number2; break;
         case 303: ans = number1 * number2; break;
         case 304: if(number2 != 0) {
           ans = number1 / number2; 
           ans = ans.toFixed(8); break;
           } else {
           ans = 'Div 0'; // nie dziel przez zero
           } 
         default: 
            var screen = document.getElementById('screen');
            ans = screen.value;
            ans = Number(ans);
            screen.value = ''; // defaultowo wyswietla zmienna 
      } 
      
   var screenMin = document.getElementById('screenMin'); 
   screenMin.value = 'Ans = '+ans; //przeniesienie wyniku na miniscreen
   ans=0;
   
//ustawienie flag
   operation=300;  
   operator = false;
   clearOnClick = true;  // ta flaga pozwala wyczyscic ekran po obliczeniu
   dotInUse = false;
   insertAns = true;
   number1=number2=0;
   howManyDigits=0;
      
     }
