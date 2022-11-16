function solution(s) {
   return s.search(/[a-zA-Z]/g) < 0 ? (s.length==4||s.length==6) ? true : false : false ;
}