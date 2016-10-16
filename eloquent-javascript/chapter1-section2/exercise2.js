// Eloquent Javascript 
// Chapter 1 Section 2 
// Exercise 2
// Fizz Buzz
for (i = 1; i <= 100; i++) {
    var fizz = i % 3 === 0;
    var buzz = i % 5 === 0;
    console.log(fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "buzz" : i);
    /*
        if (fizz && buzz) {
            console.log("FizzBuzz");
        }
        else if (fizz) {
            console.log("fizz");
        }
        else if (buzz) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }
    */
}