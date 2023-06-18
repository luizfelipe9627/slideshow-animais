import SlideNav from "./modules/slide-nav.js"; // Importa a função SlideNav do arquivo slide-nav.js e a classe Slide do arquivo slide.js.

const slide = new SlideNav(".slide", ".slide-wrapper"); // Instancia a classe Slide.
slide.init(); // Executa o método init que é responsável por iniciar o funcionamento do slide.

slide.addArrow(".previous", ".next"); // Executa o método addArrow que é responsável por adicionar as setas de navegação do slide como parâmetro recebe as classes dos elementos HTML que serão as setas de navegação.

console.log(slide); // Exibe no console o objeto slide.
