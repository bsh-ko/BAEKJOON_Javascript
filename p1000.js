const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function(){
	/*
		솔루션 작성
	*/
    let A = input[0];
    let B = input[1];
    console.log(A+B);

    process.exit();
});