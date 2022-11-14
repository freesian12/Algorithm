function solution(a, b) {
    let answer= 0;
    a.map((x,y) => x*b[y]).reduce((a,b)=> a+b);
    return  a.map((x,y) => x*b[y]).reduce((a,b)=> a+b);
}