function solution(s) {
  var answer = true;
  var target = s.toLowerCase();
  var pNum = target.split("p").length - 1;
  var yNum = target.split("y").length - 1;
  if (pNum !== yNum) answer = false;

  return answer;
}
