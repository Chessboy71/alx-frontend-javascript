export default function updateUniqueItems(someMap) {
  if (someMap instanceof Map) {
    someMap.forEach((value, key) => {
      if (value === 1) {
        someMap.set(key, 100);
      }
    });
  } else {
    throw Error('Cannot process');
  }
  return someMap;
}
