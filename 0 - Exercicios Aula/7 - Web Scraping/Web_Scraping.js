// Filtrar o nome de todos os senadores
function buscarSenadores() {
    let nomes = document.querySelectorAll('.titulo');
    for (let i = 3; i < nomes.length; i++) {
        if(!nomes[i].textContent.includes('Reeleição')){
            console.log(nomes[i].textContent);
        }
    }
}


// Filtrar o nome de todos os Partidos
function buscarPartidos() {
    let siglaPartidos = document.querySelectorAll('.sigla');
    for (let i = 0; i < siglaPartidos.length; i++) {
        console.log(siglaPartidos[i].textContent)
    }
}


// Contabilizar os partidos repetidos
function contarPartidosRepetidos() {
    let siglaPartidos = document.querySelectorAll('.sigla');
    let partidos = {};

    for (let i = 0; i < siglaPartidos.length; i++) {
        let sigla = siglaPartidos[i].textContent.split(' - ')[0];

        if (partidos[sigla]) {
            partidos[sigla]++;
        } else {
            partidos[sigla] = 1;
        }
    }

    for (let sigla in partidos) {
        console.log("Partido " + sigla + ": " + partidos[sigla] + " vezes");
    }
}


// Aleterar a foto do hitler brasileiro
function fotoAlexandre(){
    let novoUrl = 'https://i.imgur.com/LLR1QPc.png';
            let imagens = document.querySelectorAll('img');
            for (let i = 0; i < imagens.length; i++) {
                let imagem = imagens[i];
                if (imagem.src === 'https://votossenadores.com.br/wp-content/uploads/2024/07/foto-moraes.png') {
                    imagem.src = novoUrl;
                    imagem.title = 'nova-imagem';
                    imagem.alt = 'nova-imagem';
                }
            }
}


// Alterar a foto dos senadores
function fotoSenadores(){
    let fotinha = document.querySelectorAll('img')
    for(let i = 0; i < fotinha.length; i++){
        if(fotinha[i].src.includes('avatar_cache')){
            fotinha[i].src = 'https://i.imgur.com/PXey502.jpeg'
            fotinha[i].style.borderColor = 'black';
            fotinha[i].style.borderRadius = '20px';
            fotinha[i].style.padding = '0';

        }
    }
}


// Alterar a foto do banner inicial
function fotoBanner(){
    let novoUrl = 'https://i.imgur.com/kcxnr8P.png';
            let imagens = document.querySelectorAll('img');
            for (let i = 0; i < imagens.length; i++) {
                let imagem = imagens[i];
                if (imagem.src === 'https://votossenadores.com.br/wp-content/uploads/2024/07/logo-votossenadores.png') {
                    imagem.src = novoUrl;
                    imagem.title = 'nova-imagem';
                    imagem.alt = 'nova-imagem';
                }
            }
}


// Alterar o placar de votação
function placar(){
    let spans = document.querySelectorAll('span.numero');

        for(let i = 0; i < spans.length; i++){
            if(spans[i]==spans[0]){
                spans[i].innerHTML = '81';
            }
            else{
                spans[i].innerHTML = '0';
            }
        }
}


// Alterar o fundo da pagina
function bodyColor(){
    let fundo1 = document.querySelector('body')
    fundo1.style.backgroundColor = 'black'
}


//Remover rede social
function redeSocial(){
    let redes = document.querySelectorAll('.social-midia')
    for(let i = 0; i < redes.length; i++){
        redes[i].style.display = 'none'
    }
}

//Remover partidos
function removerpartidos(){
    let siglas = document.querySelectorAll('.sigla')
    for(let i = 0; i < siglas.length; i++){
        siglas[i].style.display = 'none'
    }
}


//Alterar nomes
function trocarNomes() {
    let trocarNomes = document.querySelectorAll('.titulo');
    for (let i = 3; i < trocarNomes.length; i++) {
        if(!trocarNomes[i].textContent.includes('Reeleição')){
            trocarNomes[i].innerHTML = 'Luladrão'
        }
    }
}

//Remover ano de reeleição
function removerReeleicao() {
    let reeleicao = document.querySelectorAll('.titulo');
    for (let i = 3; i < reeleicao.length; i++) {
        if(reeleicao[i].textContent.includes('Reeleição')){
            reeleicao[i].style.display = 'none'
        }
    }
}


// Função principal
function inicio() {
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1. Buscar Senadores\n" +
        "2. Buscar Partidos\n" +
        "3. Contar Partidos\n" +
        "4. Modo Verdade\n" +
        "5. Sair"
    );
    opcao = parseInt(opcao);

    switch (opcao) {
        case 1:
            buscarSenadores();
            break;
        case 2:
            buscarPartidos();
            break;
        case 3:
            contarPartidosRepetidos()
            break;
        case 4:
            alert("Modo Verdade");
            fotoSenadores();
            placar();
            bodyColor();
            fotoAlexandre();
            fotoBanner();
            removerReeleicao();
            trocarNomes();
            removerpartidos();
            redeSocial();
            break;
        case 5:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida! Tente novamente.");
    }
}