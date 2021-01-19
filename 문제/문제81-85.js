// *************************************************************
// 문제81 : 지뢰찾기

// 뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. 깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램을 만드세요.

// 아래 Case 외 예외 사항은 고려하지 않습니다.
// (예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.)
// 실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.

// 데이터
// let flag = []; //지뢰 없이 깃발만 있는 리스트
// let minesweeper = []; //지뢰를 찾은 리스트
// let count = 0;

// console.log(flag);
// console.log(minesweeper);

// 입력
// 0 1 0 0 0
// 0 0 0 0 0
// 0 0 0 1 0
// 0 0 1 0 0
// 0 0 0 0 0
// //"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

// 출력
// * f * 0 0
// 0 * 0 * 0
// 0 0 * f *
// 0 * f * 0
// 0 0 * 0 0

function 지뢰찾기() {
  const value = '0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0';
  const sp = value.split('\n');
  let count = 0;

  for (let i of sp) {
    sp[count] = i.replace('1', 'f').split(' ');
    count += 1;
  }

  count = 0;
  search = 0;

  for (let s of sp) {
    for (let i of s) {
      if (i === 'f') {
        if (search > 0) {
          s[search - 1] = '*';
        }
        if (search < 4) {
          s[search + 1] = '*';
        }
        if (count > 0) {
          sp[count - 1][search] = '*';
        }
        if (count < 4) {
          sp[count + 1][search] = '*';
        }
      }
      search += 1;
    }
    count += 1;
    search = 0;
  }
  return sp;
}
console.log(지뢰찾기());
// const value = [0 1 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0];
// 일차원으로 양옆으로 체크하고 위는 -5 아래는 +5

// *************************************************************
// 문제82 : 수학 괄호 파싱

// 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

// 입출력 예시
// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 3 + 5
// True

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7) * (3 * 5)
// False

let user_input = '((())';

function solution(s) {
  const m = {
    ')': '(',
    '}': '{',
  };

  let stack = [];

  for (let i in s) {
    if (s[i] === '(' || s[i] === '{') {
      stack.push(s[i]);
    } else if (m[s[i]]) {
      // 오브젝트에 매칭되는지 확인
      if (stack.length === 0) {
        return false;
        // 닫는 괄호부터 시작
      } else {
        let t = m[s[i]];
        if (t !== stack.pop()) {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}

console.log(solution(user_input));

// *************************************************************
// 문제83 : 수학 괄호 파싱 2

// 학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
// 괄호는 소괄호와 중괄호가 있습니다.

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7 * {(3 * 5)}
// True

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7){ * (3 * 5)
// False

// 데이터 입력(1), 프로그램 종료(2) : 2

// let user_input = '((())';

// function solution(s) {
//   const m = {
//     ')': '(',
//     '}': '{',
//   };

//   let stack = [];

//   for (let i in s) {
//     if (s[i] === '(' || s[i] === '{') {
//       stack.push(s[i]);
//     } else if (m[s][i]) {
//       if (stack.length === 0) {
//         return false;
//         // 닫는 괄호부터 시작
//       } else {
//         let t = m[s[i]];
//         if (t !== stack.pop()) {
//           return false;
//         }
//       }
//     }
//   }

//   return stack.length === 0;
// }

// console.log(solution(user_input));

// *************************************************************
// 문제84 : 숫자뽑기

// 소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다.
// 예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
// 이 중 가장 큰 수는 73입니다.

// 위 예시처럼 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.

function maxNum(n, k) {
  const arr = n.toString().split('');
  let result = [];

  function f(pre, chars) {
    for (let i = 0; i < chars.length; i++) {
      result.push(pre + chars[i]);

      f(pre + chars[i], chars.slice(i + 1));
    }
  }

  f('', arr);

  result = result.filter((el) => el.length === k);

  return Math.max.apply(null, result);
}

console.log(maxNum(1723, 2));
// *************************************************************
// 문제85 : 숫자놀이

// 정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
// 이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
// 이 놀이는 1부터 시작합니다.
// 다음 수는 1이 1개이기 때문에 '11'이 되고,
//  '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

// 즉,
// 1. 1  → (1)
// 2. 11 → (1이 1개)
// 3. 12 → (1이 2개)
// 4. 1121 → (1이 1개 2가 1개)
// 5. 1321 → (1이 3개 2가 1개)
// 6. 122131 → (1이 2개 2가 1개 3이 1개)
// 7. 132231 → (1이 3개 2가 2개 3이 1개)

// 위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.

// 입력
// 6

// 출력
// 122131

function n(n) {
  let answer = '1';

  function rule(answer) {
    let answerMax = 9;

    let result = '';

    for (let i = 1; i < answerMax; i++) {
      let re = new RegExp(i, 'g');

      let count = (answer.match(re) || []).length;

      if (count >= 1) {
        result = result + String(i) + String(count);
      }
    }
    return result;
  }

  if (n === 1) {
    return 1;
  }

  for (let i = 1; i < n; i++) {
    answer = rule(answer);
  }

  return answer;
}
console.log(n(6));

// *************************************************************
