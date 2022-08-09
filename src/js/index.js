const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

function esconderCartaoSelecionado(){

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

};

function mostrarCartao(indiceCartao){

    cartoes[indiceCartao].classList.add('selecionado');

};

btnAvancar.addEventListener('click', function() {

    if(cartaoAtual === cartoes.length - 1) {
        cartaoAtual = (-1)
    };

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);


});

btnVoltar.addEventListener('click', function() {

    if(cartaoAtual === 0){
        cartaoAtual = 3
    };

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
    
});
