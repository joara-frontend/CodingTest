function solution(s) {
  var answer = "";
  var arr = s.split(" ").map(Number);
  answer = "" + Math.min(...arr) + " " + Math.max(...arr);
  return answer;
}
