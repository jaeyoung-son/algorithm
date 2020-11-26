// 반복문 문자열 뒤집기
let result = '';
let x = 'sonjaeyoung';

while (true) {
  if (x.length === 1) {
    result += x;
    break;
  }
  // 문자열 팝을 하기위한 스플릿
  let y = x.split('');

  result += String(y.pop());

  // y에서 pop을 했으니 x값을 맨뒷값 뺀 y와 연동
  x = y.join('');
}

console.log(result);

// -------------------
// 재귀로 문자열 뒤집기

function 문자열역순(문자) {
  if (문자.length === 1) {
    return 문자;
  }

  return 문자[문자.length - 1] + 문자열역순(문자.slice(0, 문자.length - 1));
}

console.log(문자열역순('안녕하세요'));
