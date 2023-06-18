// Classe responsável por fazer o carrossel funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class Slide {
  // O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide); // Seleciona a propriedade passada pelo usuário e armazena na propriedade slide.
    this.wrapper = document.querySelector(wrapper); // Seleciona a propriedade passada pelo usuário e armazena na propriedade wrapper.

    // O objeto distance é responsável por armazenar as distâncias do mouse.
    this.distance = {
      finalPosition: 0, // Posição final do mouse, começa com 0.
      startX: 0, // Posição inicial do mouse, começa com 0.
      movement: 0, // Movimento do mouse no momento clicado, começa com 0.
    };
  }

  // Método responsável por mover o slide de acordo com a distância do mouse.
  moveSlide(distanceX) {
    this.distance.movePosition = distanceX; // Armazena a distância do mouse na propriedade movePosition.
    this.slide.style.transform = `translate3d(${distanceX}px, 0, 0)`; // Move o slide de acordo com a distância do mouse presente no parâmetro distanceX.
  }

  // Método responsável por atualizar a posição do mouse.
  updatePosition(clientX) {
    this.distance.movement = (this.distance.startX - clientX) * 1.6; // Armazena a distância do movimento do mouse na propriedade movement multiplicando por 1.6 para que o movimento do carrossel seja mais rápido.
    return this.distance.finalPosition - this.distance.movement; // Retorna a posição final do mouse menos a distância do movimento do mouse.
  }

  // Método responsável por capturar a posição do mouse quando o usuário clicar no botão do mouse.
  onStart(event) {
    let movetype; // Cria a variável movetype.

    // Se o evento for mousedown, executa o if se não, executa o else.
    if (event.type === "mousedown") {
      event.preventDefault(); // Previne o comportamento padrão do evento.
      this.distance.startX = event.clientX; // Armazena a posição inicial do mouse na propriedade startX.
      movetype = "mousemove"; // Armazena o tipo do evento na variável movetype.
    } else {
      this.distance.startX = event.changedTouches[0].clientX; // Armazena a posição inicial do touch mobile na propriedade startX.
      movetype = "touchmove"; // Armazena o tipo do evento na variável movetype.
    }

    this.wrapper.addEventListener(movetype, this.onMove); // Adiciona o evento armazenado no movetype ao wrapper que ao ser acionado executa o método onMove.
  }

  // Método responsável por capturar a posição do mouse quando o usuário mover o mouse.
  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX; // Se o evento for mousemove, armazena a posição do mouse na variável pointerPosition, se não, armazena a posição do touch mobile na variável pointerPosition.

    const finalPosition = this.updatePosition(pointerPosition); // Armazena a posição final do mouse na variável finalPosition.

    this.moveSlide(finalPosition); // Executa o método moveSlide passando a posição final do mouse como parâmetro.
  }

  // Método responsável por capturar a posição do mouse quando o usuário soltar o botão do mouse.
  onEnd(event) {
    const movetype = event.type === "mouseup" ? "mousemove" : "touchmove"; // Se o evento for mouseup armazena mousemove na variável, se não, armazena touchmove na variável movetype.
    this.wrapper.removeEventListener(movetype, this.onMove); // Remove o evento de escuta do wrapper ao ser acionado os eventos mouseup ou touchend.
    this.distance.finalPosition = this.distance.movePosition; // Armazena a posição final do mouse na propriedade finalPosition.
  }

  // Método responsável por adicionar os eventos ao wrapper.
  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart); // Adiciona o evento mousedown ao wrapper que ao ser acionado executa o método onStart.
    this.wrapper.addEventListener("touchstart", this.onStart); // Adiciona o evento touchstart ao wrapper que ao ser acionado executa o método onStart.
    this.wrapper.addEventListener("mouseup", this.onEnd); // Adiciona o evento mouseup ao wrapper que ao ser acionado executa o método onEnd.
    this.wrapper.addEventListener("touchend", this.onEnd); // Adiciona o evento touchend ao wrapper que ao ser acionado executa o método onEnd.
  }

  // Método responsável por fazer o bind refereciar o objeto da classe Slide ao invés do elemento HTML.
  bindEvents() {
    // O bind(this) está fazendo com que o this dos métodos referencie o objeto da classe Slide, é sempre usado quando for passar um método como callback, geralmente em eventos de escuta.
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
