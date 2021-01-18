// *************************************************************
// 문제76 : 안전한 땅

// 전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다.
// 정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

// 수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 수색반은 도시를 격자무늬로 나눠놓고 자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

// 가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
// 각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

// 그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다.
// 0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.

// 각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.

// 입력
// 1
// 5 3
// 1 0 0 1 0
// 0 1 0 0 1
// 0 0 0 1 0
// 0 0 0 0 0
// 0 0 1 0 0

// 출력
// 3

function 지뢰찾기(범위, 지뢰) {
  const width = 범위.split(' ')[0];
  const searchWidth = 범위.split(' ')[1];

  const arr = 지뢰.split(' ').reduce((acc, curr, index) => {
    const idx = parseInt(index / width);
    if (acc[idx]) {
      const newArr = [...acc];
      newArr[idx].push(parseInt(curr));
      return newArr;
    } else {
      return [...acc, [parseInt(curr)]];
    }
  }, []);

  let value = 0;
  let valueArr = [];
  for (let iadd = 0; iadd <= width - searchWidth; iadd++) {
    for (let jadd = 0; jadd <= width - searchWidth; jadd++) {
      for (let i = iadd; i <= searchWidth - 1 + iadd; i++) {
        for (let j = jadd; j <= searchWidth - 1 + jadd; j++) {
          // console.log(i, j);
          value += arr[i][j];
        }
      }
      valueArr.push(value);
      value = 0;
      // console.log('-------');
    }
    // console.log('!!!!!!!!!!!!');
  }
  console.log(valueArr);
  return valueArr.reduce((acc, curr) => (acc > curr ? acc : curr));
}

// 1차원 배열로 풀어서도 가능 0 1 2 5 6 7 10 11 12 ... 1 2 3 6 7 8
console.log(
  지뢰찾기('5 3', '1 0 0 1 0 0 1 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0')
);

// *************************************************************
// 문제77 : 가장 긴 공통 부분 문자열

// 가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

// 예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

// 이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.

// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

// - Test Case -

// 입력
// THISISSTRINGS
// THISIS

// 출력
// 6

// -

// 입력
// THISISSTRINGS
// TATHISISKKQQAEW

// 출력
// 6

// -

// 입력
// THISISSTRINGS
// KIOTHIKESSISKKQQAEW

// 출력
// 3

// -

// 입력
// THISISSTRINGS
// TKHKIKSIS

// 출력
// 3

function longestStr(a, b) {
  function sliceStr(str) {
    let result = [];
    for (let i = 1; i < str.length + 1; i++) {
      for (let j = 0; j < i; j++) {
        result.push(str.slice(j, j + str.length + 1 - i));
      }
    }
    return result;
  }

  let arrOne = sliceStr(a);
  let arrTwo = sliceStr(b);

  let inter = arrOne.filter((x) => arrTwo.includes(x));
  inter.sort((a, b) => b.length - a.length);

  return inter[0].length;
}

console.log(longestStr('ABCDF', 'BCE'));
//abcdf
// bcd
// 쪼갠다 가장 긴것은 짧은문자열의 갯수
// abc bcd cdf 3개
// ab bc cd df 2개
// a b c d f 1개
// --
// bcd 3개
// bc cd
// b c d
// 교집함중 가장 긴 문자열

// *************************************************************
// 문제78 : 원형 테이블

// 기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
// 음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

// 기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
// 한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
// 하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

// 마지막으로 남는 음식은 어떤 접시인가요?

// 입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
// 첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
// 첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

// 입력
// 6 3

// 남은 음식들의 번호를 배열의 형태로 출력합니다.

// 출력
// [3, 5]

function eat(str) {
  const N = str.split(' ')[0];
  const K = str.split(' ')[1];

  const arr = [];

  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  let eatIdx = 0;
  while (arr.length > 2) {
    if (eatIdx > arr.length - 1) {
      eatIdx -= arr.length;
    } else {
      arr.splice(eatIdx, 1);
      eatIdx += K - 1;
      //하나를 먹엇으니 -1
    }
  }

  return arr;
}

// 2 3 5 6  --- 4

console.log(eat('6 3'));
// *************************************************************
// 문제79 : 순회하는 리스트

// 다음의 값이 주어졌을 때
// l = [10, 20, 25, 27, 34, 35, 39]
// n번 순회를 결정합니다. 예를 들어 2번 순회하면
// l = [35, 39, 10, 20, 25, 27, 34]
// 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

// 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

// 입력
// 순회횟수는 : 2

// 출력
// index : 6
// value : 39, 34

// ---

// 입력
// 순회횟수는 : 3

// 출력
// index : 5
// value : 35, 25

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = 2;

function rotate(inL, inN) {
  // <빈칸을 채워주세요>
  const prev = [...inL];
  for (let i = 0; i < inN; i++) {
    const val = inL.pop();
    inL.unshift(val);
  }
  const result = [];

  for (let i = 0; i < inL.length; i++) {
    result.push(Math.abs(prev[i] - inL[i]));
  }
  return Math.min.apply(null, result);
}

console.log(rotate(l, n));

// *************************************************************
// 문제80 : 순열과 조합

// 조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
// 순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

// 한글의 자모 24자 중 자음은 총 14개입니다.
// 이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

// ‘한글 맞춤법’의 제2장 제4항에서는 한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

// 나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

// <--요구 조건-->
// 1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
// 2. 두 번째 입력으로 조합의 수가 주어집니다.
// 3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.

// 입력
// ㄱ,ㄴ,ㄷ,ㄹ
// 3

// 출력
// ['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
// 4

function 조합(arr, n) {
  const result = [];

  const f = (pre, charArray) => {
    for (let i = 0; i < charArray.length; i++) {
      result.push(pre + charArray[i]);
      f(pre + charArray[i], charArray.slice(i + 1));
    }
  };

  f('', arr);

  return result.filter((el) => el.length === n);

  //pre   charArray   combi
  //''    [a,b,c,d]   [a]
  //a     [b,c,d]     [ab]
  //ab    [c,d]       [abc]
}

console.log(조합(['a', 'b', 'c', 'd'], 3));
// *************************************************************
