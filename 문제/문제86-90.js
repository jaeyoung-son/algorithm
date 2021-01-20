// *************************************************************
// 문제86 : 회전 초밥

// 쉔은 회전 초밥집에 갔습니다.
// 초밥집에 간 쉔은 각 초밥에 점수를 매기고 낮은 점수의 순서로 초밥을 먹으려 합니다.
// 이때 n위치에 놓여진 초밥을 먹고자 할 때 접시가 몇 번 지나가고 먹을 수 있을지 출력하세요.

// 1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
// 2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
// 3. 초밥은 1개 이상 존재합니다.

// 예)
// A, B, C, D, E 초밥이 있고 각 점수가 1, 1, 3, 2, 5 일 때 3번째(C초밥)을 먹게 되는 순서는
// 점수가 1인 초밥 A와 B를 먹고 다음으로 점수가 2인 D 초밥을 먹어야 됩니다.
// A B C D E 의 순서로 접시가 도착하지만 C가 도착했을때 먹지 못하는 상황이 옵니다.
// 2점을 주었던 D를 먼저 먹어야 C를 먹을 수 있습니다.
// 즉, A B C D E C 의 순서로, 접시가 5번 지나가고 먹게 된다.

function 회전초밥(point, dish) {
  dish -= 1;
  let answer = 0;

  let s = point.slice();

  s.sort((a, b) => a - b);

  while (true) {
    let p = point.shift();

    if (s[0] === p) {
      //맨앞이 최소값인지
      if (dish === 0) {
        // 내가 원하는 접시
        break;
      }
      //원하는 접시가 아님
      dish -= 1;
      s.shift();
    } else {
      //맨앞이 최소값 아닌
      point.push(p);
      if (dish === 0) {
        dish = point.length - 1;
      } else {
        dish -= 1;
      }
    }
    answer += 1;
  }

  return answer;
}

console.log(회전초밥([1, 1, 3, 2, 5], 3));
// *************************************************************
// 문제87 : 천하제일 먹기 대회

// 천하제일 먹기 대회가 개최되었습니다.
// 이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다.

// 1. 같은 이름의 선수는 없습니다.
// 2. 접시의 수가 같은 경우는 없습니다.

// 손오공 야모챠 메지터 비콜로
// 70 10 55 40

// {'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}

function eat(people, dishes) {
  const peopleArr = people.split(' ');
  const dishesArr = dishes.split(' ');
  const result = {};
  let count = 1;

  while (peopleArr.length) {
    const min = dishesArr.indexOf(Math.max.apply(null, dishesArr).toString());
    const name = peopleArr.splice(min, 1);
    result[name] = count;
    count += 1;
  }
  return result;
}

console.log(eat('손오공 야모챠 메지터 비콜로', '70 10 55 40'));
// *************************************************************
// 문제88 : 지식이의 게임 개발

// 지식이는 게임을 만드는 것을 좋아합니다. 하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 이런 불편함을 해결하기 위해 지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램을 만들고 싶습니다.  지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.

// - 가로(n), 세로(m)의 크기가 주어집니다.
// - 지형의 테두리는 벽으로 이루어져 있습니다.
// - 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
// - 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

// 지도는 n x m 크기의 배열이며 배열 안의 값은
//    -움직일 수 있는 공간(0)
//    -캐릭터(1)
//    -벽(2)
// 3개로 구분되어 있습니다.

// 입출력예시

// 입력
// 가로 = 4
// 세로 = 5
// 캐릭터위치 = [0,0]
// 장애물 = [[0,1],[1,1],[2,3],[1,3]]

// make_map(가로, 세로, 캐릭터위치, 장애물)

// 출력
// [2, 2, 2, 2, 2, 2]
// [2, 1, 2, 0, 0, 2]
// [2, 0, 2, 0, 2, 2]
// [2, 0, 0, 0, 2, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 0, 0, 0, 0, 2]
// [2, 2, 2, 2, 2, 2]

function make_map(n, m, character, obstacle) {
  // 장애물 [세로, 가로]
  const result = [];
  // n+2 xx m + 2

  for (let i = 0; i < m + 2; i++) {
    const arr = [];
    for (let j = 0; j < n + 2; j++) {
      if (i === 0 || i === m + 2 - 1) {
        arr.push(2);
      } else {
        if (j === 0 || j === n + 2 - 1) {
          arr.push(2);
        } else {
          arr.push(0);
        }
      }
    }
    result.push(arr);
  }

  result[character[0] + 1][character[1] + 1] = 1;

  for (let i of obstacle) {
    result[i[0] + 1][i[1] + 1] = 2;
  }

  return result;
}

console.log(
  make_map(
    4,
    5,
    [0, 0],
    [
      [0, 1],
      [1, 1],
      [2, 3],
      [1, 3],
    ]
  )
);

// *************************************************************
// 문제89 : 지식이의 게임 개발 2

// (연계형 문제 - 88번을 먼저 풀고 오셔야 합니다!)
// 제코베의 도움을 받아 성공적으로 지도를 만들어낸 지식이는 캐릭터의 움직임을 구현했습니다.
// 하지만 지도 위의 캐릭터 위치를 나타내는데 문제가 발생했습니다.
// 지식이는 지도 위에서 캐릭터의 위치를 나타내기 위해 다시 한번 제코베에 도움을 요청합니다.

// 지도 위에서 캐릭터의 위치를 나타내주세요

// 1. 지도는 88번 문제의 해답을 사용해 주세요
// 2. 입력값은 지도, 캐릭터의 움직임입니다.
// 3. 캐릭터의 움직임은 { 상:1, 하:2, 좌:3, 우:4 }로 정수로 이루어진 배열이 들어갑니다.
// 4. 벽과 장애물은 통과할 수 없습니다.
// 5. 마지막 캐릭터의 위치를 반영한 지도를 보여주고 위치를 반환하는 함수를 작성해 주세요.

function characterMove(characterMove) {
  let currentPos = [1, 1];

  const arr = make_map(
    4,
    5,
    [0, 0],
    [
      [0, 1],
      [1, 1],
      [2, 3],
      [1, 3],
    ]
  );
  const move = {
    1: [-1, 0],
    2: [1, 0],
    3: [0, -1],
    4: [0, +1],
  };

  for (let i of characterMove) {
    const moving = move[i];
    const to = [currentPos[0] + moving[0], currentPos[1] + moving[1]];
    // [2,1]

    if (arr[to[0]][to[1]] === 0) {
      arr[to[0]][to[1]] = 1;
      arr[currentPos[0]][currentPos[1]] = 0;
      currentPos = to;
    }
  }

  return arr;
}

console.log(characterMove([2, 2, 2, 4, 4, 4]));

// *************************************************************
// 같은 의약 성분을 찾아라!

// 의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.

// 판콜비 = 'ABCDEFGH'
// 넥타이레놀 = 'EFGHIJKL'

// 특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.

// 입력 : 'ABCDEFGH' 4
// 데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
// 출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)

// * 해당 문제는 시간제한이 있습니다.
// * 제약 데이터의 성분은 중복이 될 수 없습니다.
// (예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)

function medi(input, data) {
  let l = [];
  //아스키 코드표
  for (let i = 65; i < 91; i++) {
    l.push(String.fromCharCode(i));
  }

  function randomItem(a) {
    // 무작위 랜덤 스트링 뽑기
    let string = [];

    while (string.length !== 8) {
      let b = a[Math.floor(Math.random() * a.length)];
      // floor 소수점이하 버림 ceil 올림 round 반올림
      if (!string.includes(b)) {
        string.push(b);
      }
    }

    let medicine = string.join('');
    return medicine;
  }

  let total_medicine = [];

  while (total_medicine.length !== 100) {
    //100개 랜덤
    let m = randomItem(l);
    if (!total_medicine.includes(m)) {
      total_medicine.push(m);
    }
  }

  // ------------------------------------------------------------------------
  let result = [];
  let user_input = input.split(' ');

  for (let i of total_medicine) {
    // 교집함이 4개인것 a,b,c를돌면서 카운트를 누적하면서 풀어도된다.
    let setUserData = new Set(user_input[0]);
    let setMedicine = new Set(i);

    let intersection = new Set(
      [...setUserData].filter((x) => setMedicine.has(x))
    );

    if (intersection.size === parseInt(user_input[1])) {
      result.push(i);
    }
  }

  return result;
}

console.log(medi('ABCDEFGH 4', ['EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ']));
// *************************************************************
