function twoSum(numbers, target) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  let result = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = 0;
    for (let j = i; j < numbers.length; j++) {
      sum += numbers[j];
      result.push(j);
      if (sum > target) {
        result = [];
        return result;
      } else if (sum === target) {
        return result;
      }
    }
  }
}

let numbers = [2, 7, 11, 15];
console.log(twoSum(numbers, 9));
