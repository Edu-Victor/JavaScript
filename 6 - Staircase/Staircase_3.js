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
    let quebra = '';

    for(let i = 1; i <= n; i++){
        quebra += ' '.repeat(n-i);
        quebra += '#'.repeat(i);
        quebra += '\n';
    }
    
    console.log(quebra);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
