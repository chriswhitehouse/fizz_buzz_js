class FizzBuzz {
  says(number) {
    if (this._isDivisibleBy(number, 15)) {
      return "FizzBuzz";
    }
    if (this._isDivisibleBy(number, 5)) {
      return "Buzz";
    }
    if (this._isDivisibleBy(number, 3)) {
      return "Fizz";
    }
    return number;
  }

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }
}
