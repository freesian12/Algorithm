function solution(x) {
    var answer = 0;
    x = String(x)
    for(let i in x)
        {
            answer+= x[i]*1
        }
    console.log(answer)
    return x%answer==0 ? true : false
}