const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key],
  );

// ---------------test case --------------

console.log(
  matches(
    { age: 25, hair: "long", beard: true },
    { hair: "long", beard: true },
  ),
);

// --------------advanced------------------

const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object") return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;
  return keysA.every();
};
