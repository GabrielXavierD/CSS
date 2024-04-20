function virar() {
    let conteudo = document.querySelector('.conteudo');
    conteudo.classList.toggle('virar');


    /*  O método classList.toggle() é usado para alternar a presença de uma classe em um elemento.
        Se a classe especificada ('virar') estiver presente no elemento, ela será removida.
        Se não estiver presente, ela será adicionada.
        Quando clica no botão "Verso", a função virar() é chamada. 
        Essa função seleciona a div .conteudo e usa classList.toggle('virar') para alternar a presença da 
        classe virar.
        
        Isso significa que se a classe .virar não estiver presente,
        ela será adicionada (o cartão irá girar para mostrar o verso).*/
}

function desvirar() {
    let conteudo = document.querySelector('.conteudo');
    conteudo.classList.remove('virar');

    /*removendo a classe .virar, ou seja, voltando o card pro estado original, parte da frente */
}
