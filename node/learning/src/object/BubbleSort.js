Array.prototype.bubbleSort_algo = function () {
  let is_sorted = false;
  while (!is_sorted) {
    is_sorted = true;
    for (let n = 0; n < this.length - 1; n++) {
      if (this[n] > this[n + 1]) {
        let x = this[n + 1];
        this[n + 1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort_algo());
