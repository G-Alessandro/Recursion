function fibs(n) {
  let array = [0, 1];
  if (n === 0) {
    array = [0];
  }
  for (let i = 0; array.length < n; i += 1) {
    const x = array[i] + array[i + 1];
    array.push(x);
  }
  return array;
}

console.log('Fibonacci', fibs(8));
