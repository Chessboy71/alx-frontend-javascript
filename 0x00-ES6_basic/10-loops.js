export default function appendToEachArrayValue(array, appendString) {
  for (const element in array) {
    var value = array[element];
    array[element] = appendString + value;
  }

  return array;
}
