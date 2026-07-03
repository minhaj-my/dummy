String.prototype.sub_String = function () {
  const subset = [];
  for (let m = 0; m < this.length; m++) {
    for (let n = m + 1; n < this.length + 1; n++) {
      subset.push(this.slice(m, n));
    }
  }
  return subset;
};

console.log("dog".sub_String());
