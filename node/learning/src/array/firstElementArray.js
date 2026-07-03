const first = function (array, n) {
  // check input array s null , return undefind  if true
  if (array == null) {
    return void 0;
  }
  //check if the of n is null , retrun the first elemnet of the array
  if (n == null) {
    return array[0];
  }
  // if n is negative, return an empty array if true
  if (n < 0) {
    return [];
  }
  return array.slice(0, n);
};

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// -------------- ES6 Version ---------------

const fst_array = (array, n) => {
  if (array == null) return undefined;
  if (n == null) return array[0];
  if (n < 0) return [];

  return array.slice(0, n);
};

console.log(fst_array([7, 9, 0, -2]));
console.log(fst_array([], 3));
console.log(fst_array([7, 9, 0, -2], 3));
console.log(fst_array([7, 9, 0, -2], 6));
console.log(fst_array([7, 9, 0, -2], -3));
