// 달팽이 배열 문제

const size = 3;
const arr = Array.from(Array(size), () => new Array(size));

let len = size;
let dir = 1;
let value = 1;
let x = 0;
let y = -1;

while (true) {
  // 수평 이동
  for (let i = 0; i < len; i++) {
    y += dir;
    arr[x][y] = value;
    value++;
  }
  // 탈출 조건
  len -= 1;
  if (len == 0) break;

  // 수직 이동
  for (let i = 0; i < len; i++) {
    x += dir;
    arr[x][y] = value;
    value++;
  }

  // 방향 전환
  dir *= -1;
}
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    process.stdout.write(String(arr[i][j]) + ' ');
  }
  console.log();
}
