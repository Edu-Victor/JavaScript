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

function plusMinus(arr) {
    let positivo = 0;
    let negativo = 0;
    let zero = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positivo ++;
        }
        else if(arr[i] < 0){
            negativo ++;
        }
        else{
            zero ++;
        }
    }
    
    positivo /= arr.length;
    negativo /= arr.length;
    zero /= arr.length
    
    console.log(positivo)
    console.log(negativo)
    console.log(zero)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
