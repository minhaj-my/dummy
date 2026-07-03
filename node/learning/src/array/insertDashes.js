// const num = 25468;
const num = process.argv[2];
const str = num.toString();

// Initialize an array 'result'with the first character of the string

const result = [str[0]];

// Iterate through the characters of the string starting from index 1
for (let x = 1; x < str.length; x++) {
  // check if the previos and current characters are both even digits
  if (str[x - 1] % 2 == 0 && str[x] % 2 === 0) {
    // if not both even , pust the current characters are both digits
    result.push("-", str[x]);
  } else {
    // if not both even , push a '-' and current characters to the 'result' array
    result.push(str[x]);
  }
}
console.log(result.join(""));
