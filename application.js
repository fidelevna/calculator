var calculator = {
  screen: document.getElementById('screen'),
  digits: document.getElementsByClassName('digit'),
  clear: document.getElementById('clear'),
  dot: document.getElementById('dot'),
  plus: document.getElementById('plus'),
  equal: document.getElementById('equal'),
  minus: document.getElementById('minus'),
  multi: document.getElementById('multi'),
  divide: document.getElementById('divide'),

  dotClicked: false,
  shouldClearScreen: false,

  addition: function(argument1, argument2) {
    return argument1+argument2;
  },
  subtraction: function(argument1, argument2) {
    return argument1-argument2;
  },
  multiply: function(argument1, argument2) {
    return argument1*argument2;
  },
  divided: function(argument1, argument2) {
    return argument1/argument2;
  },
  start: function() {
    console.log(calculator.multiply);
    for(var i = 0; i < calculator.digits.length; i++) {
       calculator.digits[i].onclick = function(event) {
         var chislo = event.target.innerHTML;
         if (calculator.shouldClearScreen) {
           calculator.screen.innerHTML = chislo;
           calculator.shouldClearScreen = false;
         } else {
           calculator.screen.innerHTML = calculator.screen.innerHTML+chislo;
         }
       }
     }
     calculator.clear.onclick = function() {
       calculator.screen.innerHTML = '';
       calculator.dotClicked = false;
     }
     calculator.dot.onclick = function(event) {
       if (!calculator.dotClicked) {
         var dot = event.target.innerHTML;
         if (calculator.shouldClearScreen) {
          calculator.screen.innerHTML = "0" + dot;
          calculator.shouldClearScreen = false;
        } else {
          calculator.screen.innerHTML = calculator.screen.innerHTML+dot;
        }
         calculator.dotClicked = true;
       }
     }
     calculator.plus.onclick = function() {
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "addition";
       calculator.dotClicked = false;
     }
     calculator.equal.onclick = function() {
       calculator.argument2 = parseFloat(calculator.screen.innerHTML);
       var result = calculator[calculator.operation](calculator.argument1, calculator.argument2);
       calculator.screen.innerHTML = result;
       calculator.dotClicked = false;
     }
     calculator.minus.onclick = function(){
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "subtraction";
       calculator.dotClicked = false;
     }
     calculator.multi.onclick = function(){
       console.log("Olya");
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "multiply";
       calculator.dotClicked = false;
     }
     calculator.divide.onclick = function(){
       calculator.argument1 = parseFloat(calculator.screen.innerHTML);
       calculator.shouldClearScreen = true;
       calculator.operation = "divided";
       calculator.ditClicked = false;
     }
   }
};
calculator.start();

//  if (calculator.dotClicked) {
 //
//  } else{
//    var dot = event.target.innerHTML;
//    calculator.screen.innerHTML = calculator.screen.innerHTML+dot;
//    calculator.dotClicked = true;
//  }
