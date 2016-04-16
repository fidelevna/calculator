var calculator = {
  screen: document.getElementById('screen'),
  digits: document.getElementsByClassName('digit'),
  start: function() {
    for(var i = 0; i < calculator.digits.length; i++) {
       calculator.digits[i].onclick = function(event) {
         var chislo = event.target.innerHTML;
         calculator.screen.value = calculator.screen.value+chislo;
       }
     }
  }
};
calculator.start();
