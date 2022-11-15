function solution(numbers) {
    var answer = numbers.sort(x=(a,b)=>b-a);
    
    return answer[0]*answer[1];
}