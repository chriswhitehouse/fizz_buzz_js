describe('FizzBuzz', function(){

  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  })

  describe('when playing, says', function(){
    it('"Fizz" when a number is divisible by 3', function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function(){
      expect(fizzbuzz.says(15)).toEqual("FizzBuzz");
    });

    it('number when a number is NOT divisible by 3,5, or 15', function(){
      expect(fizzbuzz.says(11)).toEqual(11);
    });
  });
});
