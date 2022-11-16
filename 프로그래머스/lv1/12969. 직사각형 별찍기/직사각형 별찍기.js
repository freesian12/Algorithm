process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a); // 가로
    // console.log(b); // 세로
    let answer = "";
    //console.log(('*'.repeat(a)+'\n').repeat(b))
    
    for(let i = 0; i < b; i++) // 세로 
        {
            for(let j = 0 ; j < a ; j++) // 가로
                {
                    answer += "*";
                }
            answer += '\n'
        }
    console.log(answer)
    
    
    
});