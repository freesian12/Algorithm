function solution(sides,answer = 0) {
    
    //가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
    // a < b+c
    // [a,b,c]
    // 만들수 있으면 1 못하면 2
    
    let arr = sides.sort((x,y)=>x-y)
    return arr[0]+arr[1] > arr[2] ? 1 : 2;
}