const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compareNumber(x, y) {
  if (x > y) {
    return "The larger of " + x + "and" + y + "is" + x + ".";
  } else if (y > x) {
    return "The larger of " + y + "and" + x + "is" + y + ".";
  } else {
    return "The values" + x + "and" + y + "are equal";
  }
}

rl.question("Enter Number:", (xInput) => {
  rl.question("Enter Number: ", (yInput) => {
    const x = Number(xInput);
    const y = Number(yInput);
    console.log(compareNumber(x, y));
    rl.close();
  });
});
