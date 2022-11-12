function solution(n) {
    var answer = new Array(String(n).length)
    var j = 0;
    
    for(let i = answer.length-1 ; i >= 0 ; i--,j++)
        {
            answer[j]=(String(n)[i])*1;
         }
    return answer;
}