const eqSet = (xs, ys) => xs.size === ys.size && [...xs].every((x) => ys.has(x));

export default function hasValuesFromArray(mainSet, arr) {
  const useSet = new Set(mainSet);
  for (const i of arr) {
    useSet.add(i);
  }
  return eqSet(useSet, mainSet);
}
