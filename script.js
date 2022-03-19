for(var i=1; i<101; i++) {
    if(i % 15 == 0) {
        console.log("FizzBuzz");//For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
    } else if(i % 5 == 0) {
        console.log("Buzz");//For each number that is a multiple of 5, print "Buzz"
    } else if(i % 3 == 0) {
        console.log("Fizz");//For each number that is a multiple of 3, print "Fizz"
    } else {
        console.log(i);//All other numbers should just print normally
    }
}