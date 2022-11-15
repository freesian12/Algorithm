function solution(numbers,arr=[]) {
    
    for(let i of numbers)
        {
            arr.push(i*2)
        }
    return arr
    //return numbers.map(x => x * 2)
}