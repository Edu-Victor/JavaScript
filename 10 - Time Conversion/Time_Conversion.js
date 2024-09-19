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

function timeConversion(s) {
   let aux = s.split(':');
    let ampm = aux[2];
    let hora = aux[0];
    let resultado = '';

    if(ampm.slice(2,4) == 'AM'){
        if(hora == '12'){
            hora = '00'
        }
    }
    else{
        if(hora != '12'){
            hora = parseInt(hora, 10) + 12
        }
    }
    return resultado = hora + ':' + aux[1] + ':' + ampm.slice(0,2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
