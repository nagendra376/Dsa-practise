//Map(3) { 1 => 2, 2 => 2, 3 => 1 }

function hashing(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (map.has(currentElement)) {
      let currentCount = map.get(currentElement);
      map.set(currentElement, currentCount + 1);
    } else {
      map.set(currentElement, 1);
    }
  }
  return map;
}

console.log(hashing([1, 2, 3, 1, 2]));
