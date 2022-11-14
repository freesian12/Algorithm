function solution(arr) {
    
    if(arr.length<2) return [-1];
    
    
    let answer = []
    let min = Math.min(...arr);
    for(let i in arr)
        {
            if(arr[i]===min) continue
            else answer.push(arr[i])
           
        }
    return answer
    
}