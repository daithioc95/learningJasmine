describe("fizzBuzz", function() {
    beforeEach(function(){
        fizzbuzz = new fizzBuzz();
    });

    describe("Checks age", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz")
        });

        it("should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz")
        });

        it("should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz")
        });
    
    });
});