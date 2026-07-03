const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

const arr2 = [];

let min = arr1[0];
let pos;
let max = arr1[0];

// find the maximum value in the orignal array
for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}

// selection sort algorithm: Iterate over the orignal array
for (let i = 0; i < arr1.length; i++) {
  // iterate over the orignal array to find the minumum element
  for (let j = 0; j < arr1.length; j++) {
    // check if the elemen tis not marked as processed (not equal to 'x')
    if (arr1[j] != "x") {
      // find the minumum elemnent and its psition in the orignal array
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  // store the minimum element in the sorted array
  arr2[i] = min;
  // Mark the minimu elemnt as processed by repalcaing  it with the orginal array
  arr1[pos] = "x";
  // reset min to the maximum value for the next iteration
  min = max;
}
console.log(arr2);
