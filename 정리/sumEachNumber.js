// 반복문 각 자리수의 합
let result = 0;
let x = '123123';
while (true) {
  if (x.length === 1) {
    result += parseInt(x);
    break;
  }

  let y = x.split('');
  result += parseInt(y.pop());
  x = y.join('');
}

console.log(result);

// 재귀 각 자리수의 합
function 자리수합(문자) {
  if (문자.length === 1) {
    return parseInt(문자);
  }

  return (
    parseInt(문자[문자.length - 1]) + 자리수합(문자.slice(0, 문자.length - 1))
  );
}

console.log(자리수합('123123'), '재귀');
