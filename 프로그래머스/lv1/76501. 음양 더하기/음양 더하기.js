function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((x,y)=> {
        answer += signs[y] === true ? x*1 : x*-1
    });
    return answer;
}