function solution(num_list) {
    
    let arr = [];
    
    let i = num_list.length-1
    while(i>=0) // 조건 
        {
         
          arr.push(num_list[i]);
          i--; 
        }
    
    return arr
}