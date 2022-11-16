function solution(arr,answer = [])
{
    
    answer.push(arr[0])
    
    for(let i = 0; i < arr.length-1; i++)
        {
          //다른게 나올때마다 push 하기
            if(arr[i] !== arr[i+1])
                answer.push(arr[i+1])
            
        }
    return answer;
}