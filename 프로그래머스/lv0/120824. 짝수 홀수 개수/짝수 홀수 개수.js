function solution(num_list,countA=0,countB=0,answer = []) {
    
    for(let i of num_list)
        {
            i%2 === 0 ? countA++ : countB++
        }
    return [countA,countB];
}