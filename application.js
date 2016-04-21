var calculator = {
  screen: document.getElementById('screen'),
  digits: document.getElementsByClassName('digit'),
  clear: document.getElementById('clear'),
  dot: document.getElementById('dot'),
  dotClicked: false,

  start: function() {
    for(var i = 0; i < calculator.digits.length; i++) {
       calculator.digits[i].onclick = function(event) {
         var chislo = event.target.innerHTML;
         calculator.screen.innerHTML = calculator.screen.innerHTML+chislo;
       }
     }
     calculator.clear.onclick = function() {
       calculator.screen.innerHTML = '';
       calculator.dotClicked = false;
     }
     calculator.dot.onclick = function(event) {
       if (!calculator.dotClicked) {
         var dot = event.target.innerHTML;
         calculator.screen.innerHTML = calculator.screen.innerHTML+dot;
         calculator.dotClicked = true;     
       }
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
