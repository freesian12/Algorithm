function solution(a, b) {
    
    let z = a , x = b , answer = 0;
    
    a>b ? (x=a) && (z=b)  : false
    for(let i = z ; i <= x ; i++)
        {
            answer += i;
        }
    return answer;
}