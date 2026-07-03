// Generates all combinations of a string
function subString(str1) {
  // initalize an empty array to store individual characters
  let array1 = [];
  // Loop through the characters of the iput string  and stor each character in the array
  for (let x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }
  // initalize an empty array to store all the combinations
  let combi = [];
  let temp = "";

  // Calculate the total number of combinations using formual 2^n
  let slent = Math.pow(2, array1.length);

  // Genarate all the combo using bitwise oparations
  for (let i = 0; i < slent; i++) {
    temp = "";
    // Iterate through each character in the array
    for (let j = 0; j < array1.length; j++) {
      // check if the j-th bit of the binary represention of i is set
      if (i & Math.pow(2, j)) {
        // if set , append the correnspoding charactr to the teporary string
        temp += array1[j];
      }
    }

    // if the teporary string is not empty , add it to the combinations array
    if (temp !== "") {
      combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}
subString("dog");
