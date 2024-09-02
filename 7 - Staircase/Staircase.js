'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function staircase(n) {
    
    for (let i = 0; i < n; i++) {
        let espaco = '';

        for(let x = 0; x < (n - 1) - i; x++){
            espaco += ' ';
        }

        for(let y = n; y >= n - i; y--){
            espaco += '#';
        }
        
        console.log(espaco)
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
