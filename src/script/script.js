// Função que recebe um callback e um delay como parâmetro.
function debounce(callback, delay) {
  let timer; // Variável que armazena o timer.

  // Ao executar a função debounce retorna e executa uma função anônima. Essa função anônima recebe os parâmetros passados na função debounce.
  return (...args) => {
    // Verifica se o timer existe se existir executa o if.
    if (timer) {
      clearTimeout(timer); // Limpa o timer.
    }
    timer = setTimeout(() => {
      callback(...args); // Executa a função callback passando os parâmetros recebidos.
      timer = null; // Atribui null a variável timer.
    }, delay); // Atribui o timer a função setTimeout que recebe como parâmetro o callback e o delay.
  };
}

// Função que será executada quando o evento de scroll for disparado.
function onScroll() {
  console.log("Opa eu fui executado!");
}

const debouncedScroll = debounce(onScroll, 200); // Chama a função debounce passando a função onScroll como valor do parâmetro callback e como valor do delay 1 segundo.

// Adiciona o evento de scroll na janela.
window.addEventListener("scroll", debouncedScroll);
