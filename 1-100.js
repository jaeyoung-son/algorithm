// 1부터 100 까지의 덧셈

let s = 0;

for (let i = 1; i < 100 + 1; i++) {
  s += i;
}

console.log(s);

// 1부터 6 까지의 곱셈

let m = 1;

for (let i = 1; i < 6; i++) {
  m *= i;
}

console.log(m);

// 수학적 공식

let n = 100;
console.log((n * (n + 1)) / 2);

// 재귀 1 --- 100 덧셈

function f(n) {
  // 탈출 조건
  if (n <= 1) {
    return 1;
  }
  // 재귀호출
  return n + f(n - 1);
}

console.log(f(100), '재귀');
// 순번   f(n)    n     return         최종
// 1   f(100)   100    100 + f(99)    100+99+98...2+1
// 2   f(99)    99     99 + f(98)    99+98+97...2+1
// 3   f(98)    98     98 + f(97)    98+97+96...2+1
// 4   f(97)    97     97 + f(96)    97+96+95...2+1
// ....
// 2   f(2)    2       2 + f(1)       2+1

// 재귀 1 -- 5 곱셈

function func(n) {
  if (n <= 1) {
    return 1;
  }
  return n * func(n - 1);
}

console.log(func(5), '재귀곱셈');
