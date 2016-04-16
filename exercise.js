// for(var i = 1; i <= 10; i++ ){
//   console.log(i*100);
// }
// var name = "nadya sanya lubyat kashu";
// for(var i = 0; i < name.length; i++ ){
//   console.log(name[i]);
// }

// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
//
// for(var i = 0; i < 50; i++){
//   sum = a+b;
//   a = b;
//   b = sum;
//   console.log(sum);
// }

var fibonachchi = function(n) {
  var a = 0;
  var b = 1;
  for( var i= 0; i < n-2; i++) {
    var sum = a+b;
    a = b;
    b = sum;
  }
  return sum;
}
