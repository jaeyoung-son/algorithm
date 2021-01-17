// *************************************************************
// 문제71 : 깊이 우선 탐색

// 깊이 우선 탐색이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

// 다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D F A C B

function DPS(graph, start) {
  let visited = [];
  let stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();

    if (!visited.includes(n)) {
      visited.push(n);

      let sub = graph[n].filter((x) => !visited.includes(x));

      for (let i of sub) {
        stack.push(i);
      }
    }
  }

  return visited;
}

console.log(
  DPS(
    {
      E: ['D', 'A'],
      F: ['D'],
      A: ['E', 'C', 'B'],
      B: ['A'],
      C: ['A'],
      D: ['E', 'F'],
    },
    'E'
  )
);
// *************************************************************
// 문제72 : 너비 우선 탐색

// 너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

// 다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D A F C B

function WFS(graph, start) {
  const visited = [];
  const queue = [start];

  while (queue.length !== 0) {
    const n = queue.shift();

    if (!visited.includes(n)) {
      visited.push(n);

      const sub = graph[n].filter((x) => !visited.includes(x));

      for (let i of sub) {
        queue.push(i);
      }
    }
  }

  return visited;
}

console.log(
  WFS(
    {
      E: ['D', 'A'],
      F: ['D'],
      A: ['E', 'C', 'B'],
      B: ['A'],
      C: ['A'],
      D: ['E', 'F'],
    },
    'E'
  )
);
// *************************************************************
// 문제73 : 최단 경로 찾기

// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.

// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

// 데이터
// graph = {'A': ['B', 'C'],
//          'B': ['A', 'D', 'E'],
//          'C': ['A', 'F'],
//          'D': ['B'],
//          'E': ['B', 'F'],
//          'F': ['C', 'E']}
//     a
//   b c
// d   e-f

function route(graph, ob) {
  const from = ob.split(' ')[0];
  const to = ob.split(' ')[1];
  const visited = [];
  const queue = [from];
  let count = -1;

  while (queue.length !== 0) {
    count += 1;

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (node === to) {
        return count;
      }

      for (let nextNode in graph[node]) {
        if (!visited.includes(graph[node][nextNode])) {
          queue.push(graph[node][nextNode]);
        }
      }
    }
  }
}

console.log(
  route(
    {
      A: ['B', 'C'],
      B: ['A', 'D', 'E'],
      C: ['A', 'F'],
      D: ['B'],
      E: ['B', 'F'],
      F: ['C', 'E'],
    },
    'A F'
  )
);

// 입력
// A F

// 출력
// 2

// *************************************************************
// 문제74 : 최장 경로 찾기

// 다음과 같이 노드의 연결 관계가 주어집니다.
// 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다.
// 우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다.

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

// 데이터
// graph = {1: [2, 3, 4],
// 				 2: [1, 3, 4, 5, 6],
// 				 3: [1, 2, 7],
// 				 4: [1, 2, 5, 6],
// 				 5: [2, 4, 6, 7],
// 				 6: [2, 4, 5, 7],
// 				 7: [3, 5, 6]}

// 입력
// 1 7

// 출력
// 6

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

const user_input = [1, 7];
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function sol(n, visited) {
  let node = n[n.length - 1];
  let length = 0;

  if (node == end) {
    return visited.length;
  }

  if (visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }
  let max = [];

  // [2,3,4]
  // [1,3,4,5,6]
  for (let next_node in graph[node]) {
    n.push(graph[node][next_node]); // [1,2]  [1,2,1]

    max.push(length, sol(n, visited)); // 0, sol( [1,2], [1]  )   0, sol( [1,2,1] , [1,2])
    length = Math.max.apply(null, max);

    queue.pop();
  }
  return length;
}

console.log(sol(queue, visited));
// *************************************************************
// 문제75 : 이상한 369
// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

// 입력
// '93'

// 출력
// 10

// function _369(n) {
//   let count = 0;

//   for (let i = 0; i <= parseInt(n); i++) {
//     const str = i.toString();
//     let result = true;
//     for (let j = 0; j < str.length; j++) {
//       // 369확인
//       if (
//         !(str[j].includes('3') || str[j].includes('6') || str[j].includes('9'))
//       ) {
//         result = false;
//       }
//     }
//     if (result) {
//       count += 1;
//     }
//   }

//   return count;
// }

function _369(n) {
  let answer = 0;
  let count = 1;
  const arr = n.split('');

  const obj = {
    3: 1,
    6: 2,
    9: 3,
  };

  while (arr.length !== 0) {
    answer += obj[parseInt(arr.pop())] * count;
    count *= 3;
  }

  return answer;
}

// 3   1
// 6   2
// 9   3
// 33  1*3 + 1
// 36  1*3 + 2
// 39  1*3 + 3
// 63  2*3 + 1
// 66  2*3 + 2
// 69  2*3 + 3
// 93  3*3 + 1
// 96  3*3 + 2
// 99  3*3 + 3
// 333 1*9 + 1*3 + 1

console.log(_369('3'));
// *************************************************************
