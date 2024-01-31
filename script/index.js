// Texto a ser digitado
const texto = '"Um byte por tecla, enquanto escrevo código e contribuo para transformar a Web."';
        
// Elemento onde o texto será exibido
const elemento = document.getElementById('typingEffect');

// Função para simular o efeito de digitação
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        // Adiciona o próximo caractere ao texto
        elemento.innerHTML += text.charAt(i);
        // Aguarda um tempo antes de chamar a próxima iteração
        setTimeout(() => typeWriter(text, i + 1, fnCallback), 50);
    } else {
        // Se a digitação for concluída, chama a função de callback, se existir
        if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 1000);
        }
    }
}

// Inicia o efeito de digitação
function startTypingEffect() {
    if (texto.length) {
        typeWriter(texto, 0, () => {
            // Função de callback (opcional) - aqui você pode realizar ações após a digitação completa
        });
    }
}

// Inicia o efeito de digitação quando a página carrega
document.addEventListener('DOMContentLoaded', startTypingEffect);