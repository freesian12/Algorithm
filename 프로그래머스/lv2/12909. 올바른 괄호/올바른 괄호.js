function solution(s){
    var answer = 0;
   
   for(let i of s)
       {
           if(i==="(") answer += 1
           if(i===")") answer -= 1
           if(answer < 0) return false
       }
    
    
    return answer===0
}