// *************************************************************
// 문제51 : merge sort를 만들어보자

// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = '10 5 7 6 20 3'.split(' ').map((n) => parseInt(n, 10));

console.log(mergeSort(array));

// *************************************************************
// 문제52 : quick sort

// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 3, 2, 7, 5, 6]));

// *************************************************************
// 문제53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자.

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

function checkStr(str) {
  // () {} [
  const mid = Math.floor(str.length / 2);
  const left = str.slice(0, mid).split('').reverse().join('');
  const right = str.slice(mid);

  for (let i = 0; i < left.length; i++) {
    if (left[i] === '(' && !(right[i] === ')')) {
      return 'NO';
    }
    if (left[i] === '{' && !(right[i] === '}')) {
      return 'NO';
    }
    if (left[i] === '[' && !(right[i] === ']')) {
      return 'NO';
    }
  }

  return 'YES';
}
console.log(checkStr('((())'));

function mathBrackets(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      count++;
    }
    if (arr[i] === ')') {
      count--;
    }
  }

  if (count != 0) {
    return 'NO';
  }
  let bracket = [];

  for (let i in arr) {
    if (arr[i] === '(') {
      bracket.push(arr[i]);
    }

    if (arr[i] === ')') {
      if (bracket.length === 0) {
        return 'NO';
      }
      bracket.pop();
    }
  }

  return 'YES';
}

console.log(mathBrackets('(()())'.split('')));
// *************************************************************
// 문제54 : 연속되는 수

// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다.
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

function checkN(n) {
  const arr = n.split(' ');
  let prev = parseInt(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const current = parseInt(arr[i]);

    if (prev + 1 !== current) {
      return 'NO';
    }

    prev = parseInt(arr[i]);
  }

  return 'YES';
}

console.log(checkN('1 2 5 4 5'));
// *************************************************************
// 문제55 : 하노이의 탑

// 하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다. 하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 이 게임에서는 다음의 규칙을 만족해야 합니다.

// > 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
// 2. 모든 원판의 지름은 다르다.
// 3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
// 4. 작은 원반 위에 큰 원반을 놓을 수 없다.
// 5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.

// 이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
// 모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.

const route = [];

function hanoi(num, start, end, temp) {
  //원판이 한 개일 때에는 바로 옮기면 됩니다.

  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, temp, end);
  //  1 2 0
  //가장 큰 원반은 목표기둥으로
  route.push([start, end]);

  // 0 2 1
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'C', 'B');
console.log(route);
console.log(route.length);

// *************************************************************
// 문제56 : 객체의 함수 응용

// **데이터**
// nationWidth = {
//      'korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }

// England 22023
function similarWidth() {
  const nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
  };

  const korean = nationWidth.korea;

  const result = Object.entries(nationWidth)
    .slice(1)
    .reduce((acc, curr) => (acc[1] - korean > curr[1] - korean ? curr : acc));

  return `${result[0]} ${parseInt(result[1] - korean)}`;
}

console.log(similarWidth());

// *************************************************************
// 문제57 : 1의 개수

// 0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

// 0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

function count() {
  // let result = 0;

  // for (let i = 1; i <= 1000; i++) {
  //   const str = i.toString();
  //   const num = str.match(/1/g);
  //   if (num) {
  //     result += num.length;
  //   }
  // }

  // return result;

  const obj = {};

  for (let i = 0; i <= 100; i++) {
    let tmp = i;
    while (tmp > 0) {
      // 20이 들어오면 0 결국 20의 0
      let num = tmp % 10;
      if (obj[num]) {
        obj[num]++;
      } else {
        obj[num] = 1;
      }
      // 20이 들어오면 2가되고 그게 2의개수로 카운팅
      tmp = parseInt(tmp / 10, 10);
    }
  }

  console.log(obj);
}

console.log(count());
// *************************************************************
// 문제58 : 콤마 찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

function comma(n) {
  // return n.toLocaleString();

  // const str = n.toString().split('');
  // let count = 0;
  // for (let i in str) {
  //   if (i % 3 === 0 && i !== '0') {
  //     console.log(i);
  //     str.splice(parseInt(i) + count, 0, ',');
  //     count++;
  //   }
  // }

  // return str.join('');

  const str = n.toString();

  if (str.length <= 3) return str;

  return comma(str.slice(0, str.length - 3)) + ',' + str.slice(str.length - 3);
}

// 반복문이 가능하다 === 재귀로 가능하다

console.log(comma(123456789));
// *************************************************************
// 문제59 : 빈칸채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

// 입력
// hi

// 출력
// ========================hi========================

function center(str) {
  let result = '';
  const length = str.length;

  for (let i = 0; i <= 50; i++) {
    if (i !== parseInt((50 - length) / 2)) {
      result += '=';
    } else {
      console.log(i, '추가');
      result += str;
      i += length;
    }
  }
  return result;

  // padstart , padend 왼쪽 오른쪽 나눠서 더하기
}

console.log(center('hiho'));

// *************************************************************
// 문제60 : 번호 매기기

// 새 학기가 되어 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다.
// 데이터에 입력된 이름을 아래와 같이 출력해 주세요.

// 데이터
// students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']

// 출력
// 번호: 1, 이름: 강은지
// 번호: 2, 이름: 강채연
// 번호: 3, 이름: 권윤일
// 번호: 4, 이름: 김민호
// 번호: 5, 이름: 김유정
// 번호: 6, 이름: 김진이
// 번호: 7, 이름: 김채리
// 번호: 8, 이름: 박지호
// 번호: 9, 이름: 박현서
// 번호: 10, 이름: 최성훈
// 번호: 11, 이름: 한지호
// 번호: 12, 이름: 홍유진

function studentCount() {
  const students = [
    '강은지',
    '김유정',
    '박현서',
    '최성훈',
    '홍유진',
    '박지호',
    '권윤일',
    '김채리',
    '한지호',
    '김진이',
    '김민호',
    '강채연',
  ];

  const result = students
    .sort()
    .map((el, idx) => `번호: ${idx + 1}, 이름: ${el}`);

  return result;
}

console.log(studentCount());

// *************************************************************
