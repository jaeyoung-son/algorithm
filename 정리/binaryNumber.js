// 2진수 변환 반복문
let result = '';

let x = 11;

while (true) {
  if (x % 2 === 0) {
    result = '0' + result;
  } else {
    result = '1' + result;
  }
  x = Math.floor(x / 2);

  if (x === 1 || x === 0) {
    result = String(x) + result;
    break;
  }
}

console.log(result);
// console.log(result.split('').reverse().join(''));

// -----------------

// 2진수 변환 재귀

function 이진법(숫자) {
  if (숫자 === 1 || 숫자 === 0) {
    return String(숫자);
  }

  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
}
console.log(이진법(11));
// 이진법(11) 이진법(5) + string(1)
// 이진법(5) 이진법(2) + string(1)
// 이진법(2) 이진법(1) + string(0)
// 이진법(1) strng(1)
