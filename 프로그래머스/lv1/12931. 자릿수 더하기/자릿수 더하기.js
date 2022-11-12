function solution(n)
{
   let result = 0;
   return (String(n).split("")).reduce((index,next)=>parseInt(index)+parseInt(next),result)
}