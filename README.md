# fizz_buzz_js
A short replication of the fizzbuzz challenge in JavaScript

## Motivation
Learning how to learn a new language. Rebuilding old challenges in the new language.

## Build status
Complete.

## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
JavaScript with Jasmine for testing.

## Code Example
```JavaScript
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
```
## Installation
* Fork and clone repo.

## Tests

### FizzBuzz

* when playing, says
    - "Fizz" when a number is divisible by 3
    - "FizzBuzz" when a number is divisible by 15
    - "Buzz" when a number is divisible by 5
    - number when a number is NOT divisible by 3,5, or 15

## How to use?

* `$ open SpecRunner.html`
* 'CMD+OPT+J' to open console
* `> var fizzbuzz = new FizzBuzz();`
* `> for(var i = 1; i <= 100; i++) {
    console.log(fizzbuzz.says(i));
  }`
