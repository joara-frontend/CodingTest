// 숫자를 정확하게 비교하기 위해서는 sort 를 그냥 쓰기 보다는 a, b 값 비교를 할 것!
function solution(A, B) {
  var answer = 0;
  var newArrA = A.sort((a, b) => a - b);
  var newArrB = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    answer += newArrA[i] * newArrB[i];
  }

  return answer;
}
