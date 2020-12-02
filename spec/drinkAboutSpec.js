describe("Drink", function() {
    beforeEach(function(){
        drink = new whatCanIDrink();
    });

    describe("Checks age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy")
        });

        it("should return drink coke when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(17);
            expect(result).toBe("Drink Coke")
        });

        it("should return drink beer when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(20);
            expect(result).toBe("Drink Beer")
        });
        it("should return drink beer when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink Whisky")
        });
    });
});