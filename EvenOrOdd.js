/*
Description:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


function even_or_odd(number) {
  const isEven = number%2 === 0;
  return isEven ? 'Even' : 'Odd';
}

console.log(even_or_odd(4));
console.log(even_or_odd(3);
