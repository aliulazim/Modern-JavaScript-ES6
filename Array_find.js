// Array.prototype.find()

let numbers = [1, 2, 3, 4, 5, 8, 10];

let result = numbers.find(function (currentValue, currentIndex, arr) {
  return currentValue > 4;
});

console.log(numbers);
console.log(result);
