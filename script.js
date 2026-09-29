var pesquisa_usuario = document.querySelector("#pesquisa-usuario");
var resultado_pesquisa = document.querySelector("#resultado-pesquisa");
var botao_novidades = document.querySelector("#novidade-btn");
var novidade_imagem = document.querySelector("#novidade-imagem");
var secao_novidades = document.querySelector("#novidade-container");
var secao_catalogo = document.querySelector("#catalogo-container");
var btn_modo_escuro = document.querySelector("#btn-modo-escuro");
var input_cupom = document.querySelector("#input-cupom");
var btn_ver_cupom = document.querySelector("#btn-ver-cupom");

pesquisa_usuario.addEventListener('input', ()=> {
    resultado_pesquisa.innerText = "Resultados para "+pesquisa_usuario.value;
});

var texto_temporizador = document.querySelector("#tempo-promocao");
var btn_pausar_tempo = document.querySelector("#btn-pausar-tempo");
var mensagem_alerta = document.querySelector("#alerta-sucesso");

var tempo_restante = 60;

var intervalo_promocao = setInterval(() => {
    tempo_restante --;
    texto_temporizador.innerText = "Oferta Relâmpago acaba em: " + tempo_restante + "s";
    if (tempo_restante <= 0) {
        clearInterval(intervalo_promocao);
        texto_temporizador.innerText = "A promoção acabou";
    }
}, 1000); 

btn_pausar_tempo.addEventListener('click', () => {
    clearInterval(intervalo_promocao);
    texto_temporizador.innerText = "Tempo pausado em: " + tempo_restante + "s";
});

botao_novidades.addEventListener('mouseover', () => {
    botao_novidades.innerText = "Ver Ofertas Especiais!";
});

botao_novidades.addEventListener('mouseout', () => {
    botao_novidades.innerText = "Confira já!";
});


botao_novidades.addEventListener('click', () => {
    
    botao_novidades.disabled = true;
    botao_novidades.innerText = "Erro";
    
    mensagem_alerta.innerText = "As novidades estão indisponíveis no momento...";
    mensagem_alerta.classList.remove("escondido");

    setTimeout(() => {
        mensagem_alerta.classList.add("escondido");
    }, 3000);
    
});

btn_modo_escuro.addEventListener('click', () => {
    document.body.classList.toggle("modo-escuro");
});

function trocarFlor(nomeImagem) {
    novidade_imagem.src = "images/" + nomeImagem;
}

btn_ver_cupom.addEventListener('click', () => {
    if (input_cupom.type === "password") {
        input_cupom.type = "text";
    } else {
        input_cupom.type = "password";
    }

    btn_ver_cupom.classList.toggle("ph-eye");
    btn_ver_cupom.classList.toggle('ph-eye-closed')
})
