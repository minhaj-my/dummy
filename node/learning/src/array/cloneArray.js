// let array_Clone = function (arra1) {
//   return arra1.slice(0);
// };
//

// ----------------Es6 Way--------------------

const array_Clone = (array1) => {
  return array1.slice(0);
};

// ----------------Another Way--------------------
let x = [1, 2, 3, 5];
console.log("Orignal array:", x);
let y = [...x];
console.log("Clone of the said array: ", y);
