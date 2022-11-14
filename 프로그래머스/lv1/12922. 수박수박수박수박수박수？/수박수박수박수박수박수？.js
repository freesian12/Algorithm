
function solution(n) {
  var answer = "";
  var count = 1;
    while(count <= n)
        {
           answer += count % 2 == 0 ? "박" : "수"
           count++;
        }
    return answer;
}