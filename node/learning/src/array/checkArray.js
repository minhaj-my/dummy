const is_array = function (input) {
  // Using toString() method to get the class of the input and checking if it is "[objecct Array]"
  if (toString.call(input) === "[object Array]")
    // Return true if the input is an array
    return true;
  // Return  false if the input is an array
  return false;
};

console.log(is_array("HI_Istia"));
console.log(is_array([1, 5, 6, 7]));
