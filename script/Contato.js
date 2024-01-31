// Linhas do texto que serão digitadas
const lines = [
  "Entre em contato conosco utilizando as informações abaixo:",
  "E-mail: marconebritt@gmail.com",
  "Telefone: (38) 99218-2727"
];

// Elemento onde o texto será exibido
const typingTextElement = document.getElementById("typing-text");

// Função para exibir o texto com efeito de digitação
function typeWriter(lines, element, speed) {
let lineIndex = 0;
let charIndex = 0;

// Intervalo para adicionar cada caractere ao texto
const interval = setInterval(() => {
  // Verifica se todas as linhas foram digitadas
  if (lineIndex === lines.length) {
    clearInterval(interval);
    return;
  }

  // Adiciona o próximo caractere ao texto
  element.innerHTML += lines[lineIndex].charAt(charIndex);
  charIndex++;

  // Verifica se a linha foi totalmente exibida
  if (charIndex === lines[lineIndex].length) {
    element.innerHTML += '<br>'; // Adiciona uma quebra de linha
    charIndex = 0; // Reinicia o índice de caractere para a próxima linha
    lineIndex++; // Passa para a próxima linha
  }
}, speed); // Velocidade de digitação
}

// Chamada da função para iniciar o efeito de digitação
typeWriter(lines, typingTextElement, 50); // Ajuste a velocidade conforme necessário
