import Slide from "./modules/slide.js"; // Importa a classe Slide.

const slide = new Slide(".slide", ".slide-wrapper"); // Instancia a classe Slide.
slide.init(); // Executa o método init.
console.log(slide);
slide.changeSlide(1);
