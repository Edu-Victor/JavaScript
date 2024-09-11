function obterObjeto(){
    let obj = {numeros : [1,3,7,9,-1,0,4]
};
return obj;
}


function montarTableSoma(){
    let objDisciplina = obterObjeto();
    let geral = document.createElement("div"); 
    let quantidade = document.createElement("div");
    let somadiv = document.createElement("div");
    let soma = 0;

    for(let i = 0; i < objDisciplina.numeros.length; i++){
        let aux = document.createElement("div");
        aux.innerHTML = "Numeros: " + objDisciplina.numeros[i];
        geral.appendChild(aux);
        soma += objDisciplina.numeros[i];
    }
    quantidade.innerHTML = "Quantidade: " + objDisciplina.numeros.length;
    somadiv.innerHTML = "Soma: " + soma;
    
    document.body.appendChild(geral);
    document.body.appendChild(quantidade);
    document.body.appendChild(somadiv);
}