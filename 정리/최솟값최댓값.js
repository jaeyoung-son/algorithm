let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

// Nan
console.log(Math.max(a));
console.log(Math.min(a));

console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));

let m = a[0];
let n = a[0];

for (let i = 0; i < a.length; i++) {
  if (a[i] > m) {
    m = a[i];
  }
}

for (let i = 0; i < a.length; i++) {
  if (a[i] < n) {
    n = a[i];
  }
}

console.log(m, '최대');
console.log(n, '최소');

const maxReducer = (acc, current) => (acc > current ? acc : current);
const minReducer = (acc, current) => (acc < current ? acc : current);
console.log(a.reduce(maxReducer), '리듀스');
console.log(a.reduce(minReducer), '리듀스');
