'use strict';

const fs = require('fs');

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


function birthdayCakeCandles(candles) {
    let aux = candles[0];
    let soma = 0;
    for(let i = 0; i < candles.length; i++){
        if(aux < candles[i]){
            aux = candles[i];
        }
    }
    for(let x = 0; x < candles.length; x++){
        if(aux == candles[x]){
          soma += 1 ; 
        }
    }
    return soma;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
