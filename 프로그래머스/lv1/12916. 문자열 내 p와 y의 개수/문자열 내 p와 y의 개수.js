function solution(s){
    var y_length = [...s.matchAll(/[yY]/g)].length
    var p_length = [...s.matchAll(/[pP]/g)].length
    return y_length === p_length ? true : false
}