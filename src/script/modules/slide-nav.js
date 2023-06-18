import Slide from "./slide.js"; // Importa a classe Slide do arquivo slide.js.

// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
// Classe que extende a classe Slide, sendo assim ela herda todos os métodos e atributos da classe Slide.
export default class SlideNav extends Slide {
  // Método construtor da classe SlideNav, ele é executado assim que a classe é instanciada.
  addArrow(previous, next) {
    this.previousElement = document.querySelector(previous); // Seleciona o elemento HTML que possui a classe passada como parâmetro.
    this.nextElement = document.querySelector(next); // Seleciona o elemento HTML que possui a classe passada como parâmetro.
    
    this.addArrowEvent(); // Executa o método addArrowEvent que é responsável por adicionar o evento de click nos elementos HTML que são as setas de navegação do slide.
  }

  // Método responsável por adicionar o evento de click nos elementos HTML que são as setas de navegação do slide.
  addArrowEvent() {
    this.previousElement.addEventListener("click", this.activePreviousSlide); // Adiciona o evento de click no elemento HTML que possui a classe passada como parâmetro e executa o método activePreviousSlide responsável por voltar o slide.
    this.nextElement.addEventListener("click", this.activeNextSlide); // Adiciona o evento de click no elemento HTML que possui a classe passada como parâmetro e executa o método activeNextSlide responsável por avançar o slide.
  }
}