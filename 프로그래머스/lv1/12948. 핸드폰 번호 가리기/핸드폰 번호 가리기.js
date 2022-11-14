function solution(phone_number) {
    var answer = '';
    for(let i in phone_number)
        {
            i < phone_number.length-4 ? answer+="*" : answer += phone_number[i]
        }
    return answer;
}