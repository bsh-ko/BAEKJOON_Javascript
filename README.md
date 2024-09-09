# BAEKJOON_Javascript

백준 알고리즘 문제를 자바스크립트로 풀기 위해 만든 레파지토리.
채점 완료(정답)된 문제만 올릴 것. 

// 백준 알고리즘 문제를 javascript로 풀기 위한 가이드라인

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
    process.exit();
	
});

참고 : https://velog.io/@bami/%EB%B0%B1%EC%A4%80%EC%97%90%EC%84%9C-Javascript-%EC%9D%B4%EC%9A%A9%ED%95%98%EA%B8%B0 
