function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      if (sum === target) {
        result = [i, j];
      }
    }
  }
  return result;
}

let numbers = [2, 7, 11, 15];
console.log(twoSum(numbers, 9));
