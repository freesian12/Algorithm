function solution(arr, divisor) {
    let arrs = arr.filter(number => number % divisor === 0).sort(function compare(a,b){return a-b});
  
    return arrs.length > 0 ? arrs :[-1]
}