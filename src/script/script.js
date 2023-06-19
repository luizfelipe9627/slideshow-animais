import SlideNav from "./modules/slide-nav.js"; // Importa a função SlideNav do arquivo slide-nav.js e a classe Slide do arquivo slide.js.

const slide = new SlideNav(".slide", ".slide-wrapper"); // Instancia a classe Slide.
slide.init(); // Executa o método init que é responsável por iniciar o funcionamento do slide.

slide.addControl(".custom-controls"); // Executa o método addControl que é responsável por adicionar os controles de navegação do slide. Nesse caso adiciona os controles dentro da div com a classe custom-controls que contém os controles do slide em forma de bolas com sua respectiva foto.

slide.addArrow(".previous", ".next"); // Executa o método addArrow que é responsável por adicionar as setas de navegação do slide como parâmetro recebe as classes dos elementos HTML que serão as setas de navegação.

// slide.addControl(); // Executa o método addControl que é responsável por adicionar os controles de navegação do slide. Nesse caso adiciona os controles do slide em forma de bolinhas sem foto.


