function fibsRec(n, array = [0, 1]) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  if (n < 3) {
    return array;
  }
  const x = array[array.length - 1] + array[array.length - 2];
  array.push(x);
  return fibsRec(n - 1, array);
}

console.log('Recursive Fibonacci', fibsRec(8));
