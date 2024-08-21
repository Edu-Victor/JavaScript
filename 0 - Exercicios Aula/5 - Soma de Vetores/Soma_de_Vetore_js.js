function soma(xd, yd){
    let aux = [xd.length];
    for(let i = 0; i < xd.length; i++){
        aux[i] = xd[i] + yd[i];
    }
    return aux;
}