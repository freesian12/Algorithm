function solution(n) {
    n = String(n).split("").sort(function compare(a,b){ return b-a})
    let answer = "";
    for(let i in n)
        {
            answer += n[i]
        }
    return answer*1;
}