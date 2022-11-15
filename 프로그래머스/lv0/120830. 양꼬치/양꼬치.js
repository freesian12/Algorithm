function solution(n, k) {
    
    //몫          //서비스           //나머지값
    //n%10===0 ? k>0 ? answer =+ n :
    
    //10인분 이하 시킨애들
    if(n < 10)
        {
            return n*12000+k*2000
        }
    else
        {
            
            let moc = Math.floor(n/10),left = Math.floor(n%10);
            let sum = 0;
            sum += k-moc > 0 ? (k-moc)*2000  : 0;
            sum += left*12000 + moc*120000;
          
            
             return sum           
        }
    return answer;
}