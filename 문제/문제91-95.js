// *************************************************************
// 문제 91 : 반평균 등수

// 한 반에 30명인 학생, 총 7개의 반 점수가 '국어, 영어, 수학, 사회, 과학' 순서로 있는 다중 리스트를 랜덤 한 값으로 만들어주시고 아래 값을 모두 출력하세요.

// 1. 반 점수 모두가 담긴 전교 점수 다중 리스트를 만들어주세요.
// 2. 반 평균을 구하세요.
// 3. 반 1등 점수를 구하세요.
// 4. 전교 평균을 구하세요.

// (출력 형식은 상관없습니다.)

function classGrade() {
  let student_score = [];
  let class_score = [];
  let total_score = [];

  for (let i = 0; i < 7; i++) {
    class_score = [];
    for (let j = 0; j < 30; j++) {
      student_score = [];
      for (let k = 0; k < 5; k++) {
        student_score.push(Math.floor(Math.random() * 100) + 1);
      }
      class_score.push(student_score);
    }
    total_score.push(class_score);
  }

  // const classAverage = total_score
  //   .map((el) =>
  //     el.reduce((acc, curr) => acc + curr.reduce((acc, curr) => acc + curr), 0)
  //   )
  //   .map((el) => parseInt(el / (5 * 30)));

  // const firstGrade = total_score.map((el) =>
  //   el.reduce((acc, curr) =>
  //     acc.reduce((acc, curr) => acc + curr) >
  //     curr.reduce((acc, curr) => acc + curr)
  //       ? acc
  //       : curr
  //   )
  // );

  // for (let c of total_score) {
  //   for (let s of c) {
  //     s_sum = s.reduce((a,b) => a+b);
  //     s_average = s_sum /5
  //     c_avaerage.push(s_average)
  //     if (일등 < s_average) {
  //       일등 = s_average
  //     }
  //   }
  // }
}

console.log(classGrade());
// *************************************************************
// 문제92 : 키보드 고장

// P 회사의 회계를 처리하던 은정은 커피를 마시다가 키보드에 커피를 쏟고 말았습니다.
// 휴지로 닦고 말려보았지만 숫자 3, 4, 6이 도통 눌리지 않습니다.
// 10분 뒤, 모든 직원들에게 월급을 입금해 주어야 합니다.
// 여유 키보드는 없으며, 프로그래밍을 매우 잘하고, 모든 작업을 수작업으로 하고 있습니다.

// 이에 눌리지 않는 키보드를 누르지 않고 월급 입금을 두 번에 나눠주고 싶습니다.

// 1. 직원은 2000명이며, 3초 이내 수행을 해야합니다.
// 2. 입력값의 형식은 csv파일형식이며 이과장 '3,000,000', 'S은행', '100-0000-0000-000' 형식으로 주어집니다.
// 3. 출력값의 형식은 csv파일형식이며 이과장 '1,500,000', '1,500,000', 'S은행', '100-0000-0000-000' 입니다. 또는 '1,000,000', '2,000,000', 'S은행', '100-0000-0000-000' 도 괜찮습니다.

// 이대표,'333,356,766','S은행','100-0000-0000-001'
// 최차장,'5,000,000','S은행','100-0000-0000-002'
// 이과장,'3,200,000','S은행','100-0000-0000-003'
// 홍팀장,'3,300,000','S은행','100-0000-0000-004'
// 이대리,'5,300,000','S은행','100-0000-0000-005'

function payment() {
  const 입력값 = `이대표,'333,356,766','S은행','100-0000-0000-001'
  최차장,'5,000,000','S은행','100-0000-0000-002'
  이과장,'3,200,000','S은행','100-0000-0000-003'
  홍팀장,'3,300,000','S은행','100-0000-0000-004'
  이대리,'5,300,000','S은행','100-0000-0000-005'`;

  const 나눠진입력값 = 입력값.split('\n');
  let 숫자값 = [];

  for (let i of 나눠진입력값) {
    let j = i.split(',');
    let k = j.slice(1, j.length - 2);
    숫자값.push(k.join(''));
  }

  let 월급하나 = '';
  let 월급둘 = '';
  let result = [];
  for (let 월급 of 숫자값) {
    for (let 나뉜월급 of 월급) {
      if (나뉜월급 !== "'") {
        if (나뉜월급 === '3') {
          월급하나 += '1';
          월급둘 += '2';
        } else if (나뉜월급 == '4') {
          월급하나 += '2';
          월급둘 += '2';
        } else {
          월급하나 += 나뉜월급;
          월급둘 += '0';
        }
      }
    }
    result.push([parseInt(월급하나), parseInt(월급둘)]);
    월급하나 = '';
    월급둘 = '';
  }

  console.log(result);
}

console.log(payment());
// *************************************************************
// 문제93 : 페이지 교체 - 선입선출 알고리즘

// 페이지 교체 알고리즘은 메모리를 관리하는 운영체제에서, 페이지 부재가 발생하여 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것을 교체할지를 결정하는 방법입니다.
// 이 알고리즘이 사용되는 시기는 페이지 부재(Page Fault)가 발생해 새로운 페이지를 적재해야 하지만 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용됩니다. 빈 페이지가 없는 상황에서 메모리에 적재된 페이지와 적재할 페이지를 교체함으로 페이지 부재 문제를 해결할 수 있습니다.
// (wikipedia)

// 메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.

// 만약 스택 안에 같은 스케줄이 있다면 hit 이라고 하며 실행시간은 1초 입니다. 스택 안에 스케줄이 없다면 miss 라고 하며 실행시간은 6초 입니다.

// 예제 1번을 보면 페이지 프레임의 개수는 3개이고 스케줄은 'BCBAEBCE' 입니다. 6번의 miss를 기록하므로 6번 * 6초 = 36초가 되고  2번의 hit을 기록하므로 2번 * 1초 = 2초입니다. 2개를 합한 값이 실행시간이므로, 38초가 됩니다.

function FIFO(i, n) {
  let runtime = 0;
  const stack = [];

  if (n === 0) {
    runtime = i.length * 6;
    return runtime;
  }

  for (let el of i) {
    if (stack.includes(el)) {
      // console.log('hit');
      runtime += 1;
    } else {
      if (!(stack.length < n)) {
        stack.shift();
      }
      stack.push(el);
      // console.log('miss');
      runtime += 6;
    }
  }

  return runtime;
}

console.log(FIFO('ABCABCABC', 3));

// *************************************************************
// 제94 : 페이지 교체 - LRU 알고리즘

// LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
// 이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
// 다음 그림을 참고해주세요.

// 메모리의 크기가 i로 주어지고 들어올 페이지들이 n으로 주어졌을 때, 전체 실행시간을 구해주세요.

// 만약 스택 안에 같은 스케줄이 있다면 hit 이라고 하며 실행시간은 1초 입니다. 스택 안에 스케줄이 없다면 miss 라고 하며 실행시간은 6초 입니다.

function LRU(i, n) {
  let runtime = 0;
  const array = [];
  const check = [];

  function lastUsed(arr) {
    const copy = [...arr];
    const filteredArr = copy
      .reverse()
      .filter((el, idx) => copy.indexOf(el) === idx);

    return filteredArr[filteredArr.length - 1];
  }

  if (n === 0) {
    runtime = i.length * 6;
    return runtime;
  }

  for (let el of i) {
    check.push(el);
    if (array.includes(el)) {
      runtime += 1;
    } else {
      if (array.length === n) {
        const removeValue = lastUsed(check);
        array.splice(array.indexOf(removeValue), 1, el);
        // array.shift();
      } else {
        array.push(el);
      } //

      runtime += 6;
    }

    // console.log(array);
  }
  return runtime;
}

console.log(LRU('BCCAEBCE', 3));

// *************************************************************
// 문제95 : 도장찍기

// 빈 종이에 stamp 모양으로 생긴 도장을 90*k 도로 회전하며 찍습니다. 도장은 N*N 크기이며 각 도장이 찍히는 부분은 1 이상의 자연수와 도장이 찍히지 않는 부분은 0으로 이루어져 있습니다.

// 도장의 크기 N과,
// 종이에 찍힌 도장 횟수를 표현한 stmp 배열과,
// 얼마만큼 회전할 것인지를 알려주는 회전수 k를 입력받았을 때 각 위치에서 몇 번 도장이 찍혔는지 그 결과값을 출력하세요.

function stamp(n, turn) {
  // 0 0 - 0 3
  // 0 1 - 1 3
  // 0 2 - 2 3

  // 1 1 - 0 2
  // 1 2 - 1 2
  // 1 3 - 2 2

  // 2 0 - 0 1
  // 2 1 - 1 1
  // 2 2 - 2 1

  // 3 0 - 0 0
  // 3 1 - 1 0
  // 3 2 - 2 0
  // const turnArr = n.slice();

  // for (let i = 0; i < turn; i++) {
  //   for (let j = 0; j < n.length; j++) {
  //     for (let k = 0; k < n.length; k++) {
  //       turnArr[k][n.length - 1 - j] = turnArr[j][k];
  //     }
  //   }
  // }

  // console.log(turnArr, '위턴');
  // console.log(n, '위엔');

  // for (let i = 0; i < n.length; i++) {
  //   for (let j = 0; j < n.length; j++) {
  //     turnArr[i][j] += n[i][j];
  //   }
  // }

  // console.log(turnArr);
  let p = [];

  for (let i = 0; i < n.length; i++) {
    p.push(Array(n.length).fill(0));
  }

  function rotate(stmp) {
    let N = stmp.length;
    let rot = [];

    for (let i = 0; i < N; i++) {
      rot.push(Array(N).fill(0));
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        rot[j][N - 1 - i] = stmp[i][j];
      }
    }

    return rot;
  }

  function sum_matrix(p, stmp) {
    let N = stmp.length;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        p[i][j] += stmp[i][j];
      }
    }

    return p;
  }

  // 회전시키기 전 최초 1번 찍기

  p = sum_matrix(p, n);
  console.log(p);

  for (let i = 0; i < turn; i++) {
    n = rotate(n);

    p = sum_matrix(p, n);
  }

  return p;
}

console.log(
  stamp(
    [
      [1, 1, 1, 2],
      [2, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    1
  )
);

// *************************************************************
