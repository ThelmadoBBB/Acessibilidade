document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Mostra/oculta opções de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    // Botões de fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < 1.8) { 
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.8) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Botão de alto contraste
    const botaoContraste = document.getElementById('contraste');
    botaoContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });

    // Botão reset
    const botaoReset = document.getElementById('resetar');
    botaoReset.addEventListener('click', function () {
        tamanhoAtualFonte = 1;
        document.body.style.fontSize = '1rem';
        document.body.classList.remove('alto-contraste');
    });
});
