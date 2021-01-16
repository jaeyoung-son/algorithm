// *************************************************************
// 문제61 : 문자열 압축하기

// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// 입력
// aaabbbbcdddd

// 출력
// a3b4c1d4

function strSp(str) {
  let result = '';
  let mark = str[0];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (mark !== str[i]) {
      result += str[i - 1] + count;
      count = 1;
      mark = str[i];
    } else {
      count += 1;
    }
  }
  result += mark + count;
  return result;
}

console.log(strSp('aaabbbbcdddd'));

// *************************************************************
// 문제62 : 20190923출력하기

// 20190923을 출력합니다.  아래 기준만 만족하면 됩니다.

// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.

function print() {
  const s = 'aacdddddddddfffffffffgghhh';
  let result = '';

  return `${s.match(/a/g).length}${Number(s.match(/b/g))}${
    s.match(/c/g).length
  }${s.match(/d/g).length}${Number(s.match(/e/g))}${s.match(/f/g).length}${
    s.match(/g/g).length
  }${s.match(/h/g).length}
  `;
}
console.log(print());

// *************************************************************
// 문제63 : 친해지고 싶어

// 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
// 딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

// 교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
// 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.

// 입력
// 복잡한 세상 편하게 살자

// 출력
// 복세편살

function splitStr(str) {
  const arr = str.split(' ');
  let result = '';

  for (let i in arr) {
    result += arr[i][0];
  }

  return result;
}

console.log(splitStr('복잡한 세상 편하게 살자'));
// *************************************************************
// 문제64 : 이상한 엘레베이터

// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// 입력
// 정량 N이 입력됩니다.

// 출력
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

function ele(n) {
  let count = 0;
  const l = 7;
  const s = 3;

  // let div = 1;

  // while (true) {
  //   if (n - l * div < 0) {
  //     return -1;
  //   }

  //   if ((n - l * div) % s === 0) {
  //     count = div;

  //     break;
  //   } else {
  //     div += 1;
  //   }

  while (true) {
    if (n % l === 0) {
      count += n / 7;
      return count;
    }

    n -= 3;
    count += 1;
    if (n < 0) {
      return -1;
    }
  }

  // console.log(div);

  // return div + (n - div * l) / s;
}

console.log(ele(24));
// *************************************************************
// 문제65 : 변형된 리스트

// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
function arrTune() {
  const a = [1, 2, 3, 4];
  const b = ['a', 'b', 'c', 'd'];

  // const result = a.reduce((acc, curr, idx) => [...acc, [curr, b[idx]]], []);
  const result = a.map((el, index) =>
    index % 2 === 0 ? [el, b[index]] : [b[index], el]
  );

  return result;
}

console.log(arrTune());
// *************************************************************
// 문제66 : 블럭탑쌓기

// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
// 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
// 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

// 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.

// 입력
// 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"

// 출력
// ["가능", "불가능", "가능", "가능", "가능"]

function checkBlock(arr, match) {
  const result = [];

  for (let i in arr) {
    const inner = arr[i];
    let count = inner.indexOf(match[0]);
    let eachResult = '가능';

    for (let j in match) {
      const el = match[j];
      const matchIdx = inner.indexOf(el);

      if (count > matchIdx && matchIdx !== -1) {
        eachResult = '불가능';
      }

      count = matchIdx;
    }
    result.push(eachResult);
  }

  return result;
}

console.log(checkBlock(['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'], 'ABD'));

// *************************************************************
// 문제67 : 민규의 악수

// 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
// 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

// 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
// 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
// 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

// - 악수는 모두 1대 1로 진행이 됩니다.
// - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
// - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
// - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

// 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

// 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

// 입력
// 59

// 출력
// [4, 12] // [악수 횟수, 행사 참가자 수]

function handshake(n) {
  let 사람 = 0;
  let 총악수 = 0;
  let temp = 0;

  while (true) {
    총악수 = parseInt(((사람 * (사람 - 1)) / 2, 10));

    if (n < 총악수) {
      break;
    }
    temp = 총악수;
    사람 += 1;
  }
  return [n - temp, 사람];
}
// 참가자 === n

// 악수의 수 = n-1 + n-2 + n-3 .... 1
// 100 + 99 + 98 .... 3 + 2 + 1
// 101 + 101(99+2) + 101(98+3)
// n(n+1)/2
// 악수에서는 n-1부터 더하니 n-1(n)/2
// 입력보다 작은 가장 가까운 공식에 부합하는 수 --> 민규를 뺸 참가자수
// *************************************************************
// 문제68 : 버스 시간표

// 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
//    만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

// 입력
// ["12:30", "13:20", "14:13"]
// "12:40"

// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']

function busTime(arr, cur) {
  const minuteArr = arr.map(
    (el) => parseInt(el.slice(0, 2)) * 60 + parseInt(el.slice(3))
  );
  const currentMinute = parseInt(cur.slice(0, 2)) * 60 + parseInt(cur.slice(3));

  const result = [];

  for (let t of minuteArr) {
    if (currentMinute > t) {
      result.push('지나갔습니다');
    } else {
      const diff = t - currentMinute;
      const time = parseInt(diff / 60);
      const minute = parseInt(diff % 60);
      result.push(
        // `${time < 10 ? `0${time}` : time}시간 ${
        //   minute < 10 ? `0${minute}` : minute
        // }분`
        `${String(time).padStart(2, 0)}시간 ${String(minute).padStart(2, 0)}분`
      );
    }
  }

  return result;
}

console.log(busTime(['12:30', '13:20', '14:13'], '12:40'));

// *************************************************************
// 문제69 : 골드바흐의 추측

// 골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

// 위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

// 예)
// 100 == 47 + 53
// 56 == 19 + 37

// 2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요.

// * 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

function prime_list(n) {
  //에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
  let sieve = [];
  for (let i = 2; i < n; i++) {
    sieve.push(true);
  }
  // console.log(sieve);

  //n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
  let m = parseInt(n ** 0.5, 10);
  // console.log(m);
  for (let i = 2; i < m + 1; i++) {
    if (sieve[i] == true) {
      // i가 소수인 경우
      for (let j = i + i; j < n; j += i) {
        // i이후 i의 배수들을 False 판정
        sieve[j] = false;
      }
    }
  }
  // 소수 목록 산출
  let 소수목록 = [];
  for (let i = 2; i < n; i++) {
    if (sieve[i] == true) {
      소수목록.push(i);
    }
  }
  return 소수목록;
}

// 소수 구하기
// let 소수 = [];
// let 소수판별 = true;

// for(let i=2; i<100; i++){
//   for(let j=2; j<i; j++){
//     if(i%j == 0){
//       소수판별 = false;
//     }
//   }
//   if (소수판별){
//     소수.push(i);
//   }
//   소수판별 = true;
// }

function getPrimeN(num) {
  const 소수 = prime_list(num + 1);
  const 숫자 = num;

  let 골드바흐파티션 = [];

  for (let n of 소수) {
    if (소수.includes(숫자 - n) && n <= 숫자 - n) {
      // 3,97 97,3 중복방지위한 두번째 조건
      골드바흐파티션.push([n, 숫자 - n]);
    }
  }
  let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);

  let 차의인덱스_최소 = 차.indexOf(Math.min.apply(null, 차));
  let 차의인덱스_최대 = 차.indexOf(Math.max.apply(null, 차));

  return 골드바흐파티션;
}
console.log(getPrimeN(100));

// *************************************************************
// 문제70 : 행렬 곱하기

// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
// 		[2, 4]]

// b = [[1, 0],
// 		[0, 3]]

// 출력
// [[1, 6], [2, 12]]

// const value = 3; // 상수 스칼라
// const valu2 = [1,2,3]; // 벡터
// const value3 = [[1,2,3],[1,2,3,]] // 행렬(matrix)

// a = [
//   a[0][0], a[0][1],
//   a[1][0], a[1][1]
// ]

// b = [
//   b[0][0], b[0][1],
//   b[1][0], b[1][1]
// ]

// a[0][0] * b[0][0] + a[0][1] * b[1][0] , a[0][0] * b[0][1] + a[0][1] * b[1][1]
// a[1][0] * b[0][0] + a[1][1] * b[1][0] , a[1][0] * b[0][1] + a[1][1] * b[1][1]
// 곱해지는지는 a의 행과 b의 열이 같은지 확인

function solution(a, b) {
  let c = [];
  const len = a.length;

  if (len === b[0].length) {
    for (let i = 0; i < len; i++) {
      let row = [];
      for (let j = 0; j < len; j++) {
        let x = 0;
        for (let k = 0; k < len; k++) {
          x += a[i][k] * b[k][j];
        }
        row.push(x);
      }
      c.push(row);
    }

    return c;
  } else {
    return -1;
  }
}

// *************************************************************
