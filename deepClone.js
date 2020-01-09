// function deepClone(obj) {
//   if (typeof obj !== 'object') return obj;
//   let copy = obj instanceof Array ? [] : {};
//   for (let i in obj) {
//     if (typeof obj[i] === 'object') copy[i] = deepClone(obj[i]);
//     else copy[i] = obj[i];
//   }
//   return copy;
// }

// function deepClone(target, map = new Map()) {
//   if (typeof target !== 'object') return target;
//   const clone = Array.isArray(target) ? [] : {};
//   if (map.get(target)) return map.get(target);
//   map.set(target, clone);
//   for (key in target) {
//     if (typeof target[key] === 'object') clone[key] = deepClone(target[key], map);
//     else clone[key] = target[key];
//   }
//   return clone;
// }

// function deepClone(target, map = new Map()) {
//   if (typeof target !== 'object') return target;
//   const clone = Array.isArray(target) ? [] : {};
//   if (map.get(target)) return map.get(target);
//   map.set(target, clone);
//   for (key in target) {
//     if (typeof target[key] === 'object') clone[key] = deepClone(target[key], map);
//     else clone[key] = target[key];
//   }
//   return clone;
// }

// function deepClone(target, map = new Map()) {
//   if (typeof target !== 'object') return target;
//   const clone = Array.isArray(target) ? [] : {};
//   if (map.get(target)) return map.get(target);
//   map.set(target, clone);
//   for (key in target) {
//     if (typeof target[key] === 'object') clone[key] = deepClone(target[key], map);
//     else clone[key] = target[key];
//   }
//   return clone;
// }

function deepClone(target, map = new Map()) {
  if (typeof target !== 'object') return target;
  const clone = Array.isArray(target) ? [] : {};
  if(map.get(target)) return map.get(target);
  map.set(target, clone);
  for (key in target) {
    if (typeof target[key] === 'object') clone[key] = deepClone(target[key], map);
    else clone[key] = target[key];
  }
  return clone;
}

function deepClone(target, map = new Map()) {
  if (typeof target !== "object") return target;
  const clone = Array.isArray(target) ? [] : {};
  if (map.get(target)) return map.get(target);
  map.set(target, clone);
  for (var key in target) {
    if (typeof target[key] === "object") clone[key] = deepClone(target[key], map);
    clone[key] = target[key];
  }
  return clone;
}

var target = {
  k1: 1221,
  k2: 'james',
  k3: [1,2,3],
  k4: {q: 'sed', as: 111}
}
target.k5 = target;

const clone = deepClone(target)

console.log('target', target);
console.log('clone', clone);