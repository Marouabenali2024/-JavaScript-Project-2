// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.

function reverseString(str) {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }

  return reversed;
}
console.log(reverseString("hello"));

// Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    count++;
    i++;
  }

  return count;
}
console.log(countCharacters("JavaScript"));
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  let result = "";
  let i = 0;
  while (i < sentence.length) {
    if (i === 0 || sentence[i - 1] === " ") {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i];
    }
    i++;
  }

  return result;
}
console.log(capitalizeWords("hello world"));
// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMaxMin(arr) {
  if (arr.length === 0) {
    return { max: null, min: null };
  }

  let maxVal = arr[0];
  let minVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
  }
  return { max: maxVal, min: minVal };
}
console.log(findMaxMin([1, 2, 3, 4]));
// Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfArray([1, 2, 3, 4]));
// Filter Array: Implement a function that filters out elements from an array based on a given condition.
function ifilterArray(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(ifilterArray(5));
// Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.
function factorial(num) {
  if (num < 0) {
    return "Factorial not defined for negative numbers";
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial("1"));
// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(isPrime(2));
// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function generateFibonacci(n) {
  let fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }
  return fibSequence;
}
console.log(generateFibonacci(1));
