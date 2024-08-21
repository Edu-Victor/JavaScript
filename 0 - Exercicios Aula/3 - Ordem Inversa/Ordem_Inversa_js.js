function inverso (xs){
    let aux = xs;
    let aux2 = '';
    for(let i = aux.length - 1; i >= 0; i--){
        aux2+=aux[i]
    }
    return(aux2)
}