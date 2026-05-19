function solution(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    if (i === arr.length - 1) answer = answer / arr.length;
  }
  return answer;
}
