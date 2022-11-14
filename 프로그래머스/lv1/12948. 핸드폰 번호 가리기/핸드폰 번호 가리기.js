function solution(phone_number) {
    var answer = '';
    for(let i in phone_number)
        {
          answer +=  i < phone_number.length-4 ? "*" : phone_number[i]
        }
    return answer;
}