function menor(xs){
    let x = xs[0];
    for(let i = 0; i < xs.length; i++){
        if(x > xs[i]){
            x = xs[i]
        }
    }
    return x;
}