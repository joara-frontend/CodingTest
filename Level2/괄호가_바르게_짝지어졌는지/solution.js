function solution(s) {
  var answer = true;

  var sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") sum += 1;
    else sum += -1;

    if (sum < 0) return (answer = false);
    else if (i === s.length - 1 && sum !== 0) answer = false;
  }

  return answer;
}
