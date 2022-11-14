function solution(num) {
    var count = 0;
    
    while(count<500 && num > 1)
        {
            count++; 
            num%2===0 ? num = num/2 : num = num*3+1
        }
    return count<500 ? count : -1;
}