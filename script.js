var numberEntered = false;
var askUser = document.getElementById("askUser");
var secretNumber = [];
var input = [ document.getElementById("input1"), document.getElementById("input2"), document.getElementById("input3"), document.getElementById("input4")];
var info = document.getElementById("info");
var map = new Map();
var count = 0;

function submit() {
if(numberEntered) {
    count++;
    findKingsSoldiers();
   
} else {
   numberEntered = true;
   for(let x in input) {
   map.set(input[x].value, x);
   }
   askUser.innerText = "Make a Guess";
   info.innerText = "Secret number is locked \n";
}
clearInput();
}

function clearInput() {
    for (let x in input) {
       input[x].value = '';
      }
}

function findKingsSoldiers() {
    var kings = 0, soldiers = 0;
    var guess = '';
    for(let x in input) {
          guess = guess + input[x].value;
          if(map.get(input[x].value)) {
              if(map.get(input[x].value) === x) {    
                kings++;
              } else {
              soldiers++;
              }
          }
    }
    if(kings == 4) {
        info.innerText = info.innerText + "Congragulations you guessed it in "+ count + " guesses. Hurray!! \n";
        return;
    }
    info.innerText = info.innerText + "Your guess " + guess + " has "+ kings + " kings and " + soldiers + " soldiers \n";

}




/*
This is my todo list
1. automatic input typing for each box without using mouse
2. try to make this code for n digit number
3. unique input check
4. remove secret number info
*/


/*
7890

{0, 7}
{1, 8}
{2, 9}
{3, 0}

9230

9
*/
