function solution(left, right) {
    var answer = 0;
   
    for(let i = left; i <= right ; i++)
        {
            var count = 0;
            for(let j = 1 ; j <= i; j++)
                {
                    i%j === 0 ? count++ : false
                }
            count % 2 === 0 ? answer+= i : answer -= i
        }
    
    
    
    return answer;
}