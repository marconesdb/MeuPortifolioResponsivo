
// Texto que será digitado
const text = "Aqui você encontra meus projetos e detalhes sobre eles.";

// Elemento onde o texto será exibido
const typingTextElement = document.getElementById("typing-text");

// Função para exibir o texto com efeito de digitação
function typeWriter(text, element, speed) {
  let i = 0;
  // Intervalo para adicionar cada caractere ao texto
  const interval = setInterval(() => {
    // Adiciona o próximo caractere ao texto
    element.textContent += text.charAt(i);
    i++;
    // Verifica se todo o texto foi digitado
    if (i > text.length - 1) {
      clearInterval(interval);
    }
  }, speed); // Velocidade de digitação
}

// Chamada da função para iniciar o efeito de digitação
typeWriter(text, typingTextElement, 50); // Ajuste a velocidade conforme necessário