process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a); // 가로
    // console.log(b); // 세로
    
    console.log(('*'.repeat(a)+'\n').repeat(b))
    
    
    
});