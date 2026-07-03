function isObject(obj) {
  const type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}
function _keys(obj) {
  if (!isObject(obj)) return [];
  if (Object.keys) return Object.keys(obj);
  const keys = [];
  for (const key in obj) if (_.has(obj, key)) keys.push(key);
  return keys;
}

console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
