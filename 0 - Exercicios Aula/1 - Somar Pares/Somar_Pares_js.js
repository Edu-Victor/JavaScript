function somarpares(xs){
    let total = 0;
    for(let i = 0; i < xs.length; i++){
        
        if(xs[i]%2 == 0){
            total += xs[i];
        }
    }
    return total;
}