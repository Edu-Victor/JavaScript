function palindromo(xs){
    let aux = xs;
    let aux2 = '';
    for(let i = aux.length - 1; i >= 0; i--){
        aux2+=aux[i]
    }
    if(aux2 == xs){
        console.log('A palavra ' + aux + ' é um palindromo \n')
    }
    else{
        console.log('A palavra ' + aux + ' não é um palindromo \n')
    }
}