let a = 0;
let b = 1;

let n = 3;
// 0 1 1 2 3 5 8 13 21 34
//반복문 피보나치
for (let i = 1; i < n; i++) {
  let c = a + b;
  a = b;
  b = c;
}

console.log(b, '반복');

//재귀 피보나치

function 피보나치(숫자) {
  if (숫자 < 2) {
    return 숫자;
  }
  return 피보나치(숫자 - 1) + 피보나치(숫자 - 2);
}
console.log(피보나치(n));

// 피보나치(5)  피보나치(4) + 피보나치(3)   3 + 2
// 피보나치(4)  피보나치(3) + 피보나치(2)   2 + 1
// 피보나치(3)  피보나치(2) + 피보나치(1)   1 + 1
// 피보나치(2)  1
// 피보나치(1)  1

// f(f(f(f(2) + f(1)) + f(2)) + f(f(2) + f(1)))
// 리턴1할떄까지 재귀하다가 f(2) 반복 한 행동을 또함 --> 재귀가 비효율적
