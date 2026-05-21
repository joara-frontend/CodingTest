function solution(a, b) {
  var answer = 0;
  var startNum = a;
  var endNum = b;

  if (a > b) {
    startNum = b;
    endNum = a;
  }
  for (let i = startNum; i < endNum + 1; i++) {
    answer += i;
  }

  return answer;
}
