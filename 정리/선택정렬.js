// 선택정렬
// 일단 arr에서 가장 작은걸 뺀다.
// 가장작은게 없는 arr에서 순차적으로 가장 작은걸 뺸다.

let a = [10, 11, 9, 2, 3, 6, 5, 4];

let 정렬된배열 = [];

// for (let i = 0; i < a.length; i++) {
//   정렬된배열.push(Math.min.apply(null, a));
//   a.splice(a.indexOf(Math.min.apply(null, a)), 1);

//   // console.log(a);
//   // console.log(정렬된배열);
// }
// console.log(정렬된배열, '포문');

// a의 요소들이 빠지면서 a.length가 바뀌어서 빠지다가 멈춤 while 문으로 커버도함

while (a.length) {
  정렬된배열.push(Math.min.apply(null, a));
  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
}

console.log(정렬된배열);
