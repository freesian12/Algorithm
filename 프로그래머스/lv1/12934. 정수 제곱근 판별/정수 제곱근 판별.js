function solution(n) {
    let i = 1;
    let answer = 1;
    let working = 1;
    while(working)
        {
            i*i === n ? (answer=(i+1)*(i+1)) && (working = 0)
            : i*i > n ? (answer = -1) && (working = 0) : i++;
        }
    return answer;
}