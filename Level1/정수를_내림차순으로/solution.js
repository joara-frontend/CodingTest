// 맨 처음 작성한 답
function solution(n) {
  var Arr = String(n).split("").map(Number);
  var NewArr = "";
  var answer = 0;
  for (let i = 0; i < String(n).length; i++) {
    var bestNum = Math.max(...Arr);
    NewArr += String(bestNum);
    var index = Arr.findIndex((num) => num === bestNum);
    if (index !== -1) {
      Arr.splice(index, 1);
    }
  }
  answer = Number(NewArr);
  return answer;
}

// 다른 사람의 답을 보고 좀 더 간결한 코드로 수정
function solution(n) {
  var answer = 0;
  var arr = String(n).split("").sort().reverse().join("");
  answer = Number(arr);
  return answer;
}
