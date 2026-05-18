function solution(n) {
  var answer = String(n)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
