function solution(arr) {
    let sum = 0;
    
    return arr.reduce((first, second) =>first + second,sum)/arr.length;
}