document.addEventListener("DOMContentLoaded", function() {
    // Encontre todos os botões com a classe 'receita__botao'
    const botoesReceita = document.querySelectorAll('.receita__botao');
    
    // Adicione um evento de clique a cada botão
    botoesReceita.forEach(botao => {
        botao.addEventListener('click', function(event) {
            // Impede o comportamento padrão do botão
            event.preventDefault();
            
            // Obtenha o target do botão a partir do atributo data-target
            const targetId = botao.getAttribute('data-target');
            
            // Encontre o contêiner correspondente com o ID do target
            const targetElement = document.querySelector(targetId);
            
            // Verifique se o elemento existe
            if (targetElement) {
                // Altere a visibilidade do contêiner alternando a classe 'hidden'
                targetElement.classList.toggle('hidden');
            }
        });
    });
});

