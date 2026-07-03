// JavaScript: Target a given value in a nested JSON object
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return dig(val, target);
      }, undefined);

// Test cases
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};
const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
console.log(dig(data, "level3")); // Output: 'some data'
console.log(dig(data, "level4")); // Output: undefined
console.log(dig(dog, "message")); // Output: 'https://images.dog.ceo/breeds/african/n0
