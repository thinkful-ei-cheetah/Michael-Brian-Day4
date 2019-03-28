function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else if (num % 3 === 0) {
    return "fizz";
  }
  return num;
}

function runFizzBuzz(countTo) {
  let results = [];
  for (let i = 1; i <= countTo; i++) {
    results.push(fizzbuzz(i));
  }
  return results;
}
