function fibonacciGenerator (n) {

    var fibonacci = [];

    if (n === 1) {
      fibonacci =[0];
    } else if (n === 2) {
      fibonacci = [0,1];
    } else {
      fibonacci = [0,1];
      var count = 2;
      while(count < n) {
        fibonacci.push(fibonacci[count-1] + fibonacci[count-2]);
        count++;
      }
    }
    return fibonacci;
}

var output = fibonacciGenerator(2);
console.log(output);
