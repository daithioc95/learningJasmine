// If the number is divisible by 3 and 5, then return "FizzBuzz"
// If the number is divisible by 3, then return "Fizz"
// If the number is divisible by 5, then return "Buzz"
// Else just return the number


fizzBuzz = function(number){
    if(typeof(number) == "number"){
        if(number%3===0 && number%5===0){
            return "FizzBuzz";
        }
        if(number%3===0){
            return "Fizz";
        }
        if(number%5===0){
            return "Buzz";
                }
        else{
            return number;
        }
    }
}
