// function reverse_a_number(n) {
//   //Convert the input number to a toString
//   n = n + "";
//
//   return n.split("").reverse().join("");
// }
//
// console.log(Number(reverse_a_number(23553)));

//============== Another way =================

function reverse_a_number(num) {
  let reversed_num = 0;
  while (num !== 0) {
    // Multiply the current reversed number by 10 and add the last digit of the iput number
    reversed_num = reversed_num * 10 + (num % 10);
    // Remove the last digit from the input number
    num = Math.floor(num / 10);
  }
  return reversed_num;
}

const num = 12345;
console.log("Oringnal number " + num);
const result = reverse_a_number(num);

console.log("Recersed number " + result);
