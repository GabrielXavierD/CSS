
    function atualizarRelogio() {
        let agora = new Date();
        // Exibindo os valores dentro dos elementos <p> com os IDs correspondentes
        document.getElementById("hora").innerText = agora.toLocaleTimeString();
    }

    // Chamando a função para iniciar e atualizar o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);
