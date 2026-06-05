function solution(arr) {
  var answer = arr;

  if (answer.length <= 1) {
    return [-1];
  }

  var target = answer.indexOf(Math.min(...arr));
  answer.splice(target, 1);
  return answer;
}
