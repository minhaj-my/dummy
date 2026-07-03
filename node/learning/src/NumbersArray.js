// JavaScript: Converts a specified number to an array of digits
const digits = (n) => [...`${n}`].map((i) => parseInt(i));
//test
console.log(digits(124345437598));
