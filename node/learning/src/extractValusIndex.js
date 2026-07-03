const pull_at_Index = (arr, pullArr) => {
  let removed = [];
  let pulled = arr.map((v, i) => (pullArr.inclueds(i) ? removed.push(v) : v));
};
