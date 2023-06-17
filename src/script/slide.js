// Classe responsável por fazer o carrossel funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class Slide {
  // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide); // Seleciona a propriedade passada pelo usuário e armazena na propriedade slide.
    this.wrapper = document.querySelector(wrapper); // Seleciona a propriedade passada pelo usuário e armazena na propriedade wrapper.
  }

  // Método responsável por capturar a posição do mouse quando o usuário clicar no wrapper.
  onStart(event) {
    event.preventDefault(); // Previne o comportamento padrão do evento.
    this.wrapper.addEventListener("mousemove", this.onMove); // Adiciona o evento mousemove ao wrapper que ao ser acionado executa o método onMove.
  }

  // Método responsável por capturar a posição do mouse quando o usuário mover o mouse.
  onMove(event) {
    console.log("Moveu")
  }

  // Método responsável por capturar a posição do mouse quando o usuário soltar o botão do mouse.
  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove); // Remove o evento mousemove do wrapper que ao ser acionado executa o método onMove.
  }

  // Método responsável por adicionar os eventos de mousedown e mouseup ao wrapper.
  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart); // Adiciona o evento mousedown ao wrapper que ao ser acionado executa o método onStart.
    this.wrapper.addEventListener("mouseup", this.onEnd); // Adiciona o evento mouseup ao wrapper que ao ser acionado executa o método onEnd.
  }

  // Método responsável por fazer o bind refereciar o objeto da classe Slide ao invés do elemento HTML.
  bindEvents() {
    // O bind(this) está fazendo com que o this dos métodos referencie o objeto da classe Slide, é sempre usado quando for passar um método como callback.
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  // Método responsável por iniciar o carrossel.
  init() {
    // Se o wrapper e o slide existirem, executa o if.
    if (this.wrapper && this.slide) {
      this.bindEvents(); // Executa o método bindEvents.
      this.addSlideEvents(); // Executa o método addSlideEvents.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
