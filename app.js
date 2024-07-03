let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','jogo do número secreto');
exibirTextoNaTela('p', 'Escoha um número entre 1 e 10');

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p', 'Escoha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 5 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 5) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// teste do botão
function verificarChute() {
    let chute = document.querySelector('input').value

    if (numeroSecreto == chute) {
        exibirTextoNaTela ('h1', 'Acertou');
        exibirTextoNaTela ('p', 'Voce acertou a escolha do número secreto');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        limparCampo();
    }


    
}