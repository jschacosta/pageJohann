import { text } from "./text.js";
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Agrega la función al objeto global window
window.toggleMenu = toggleMenu;

// Segunda función:carrusel de fotos

function initSlides() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  let currentIndex = 0;

  function nextSlide() {
    // Elimina la clase 'active' de la diapositiva actual
    slides[currentIndex].classList.remove("active");

    // Incrementa el índice
    currentIndex++;

    // Si el índice es mayor que el número de diapositivas, vuelve a 0
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    // Añade la clase 'active' a la nueva diapositiva
    slides[currentIndex].classList.add("active");
  }

  // Inicia el carrusel
  slides[currentIndex].classList.add("active");
  setInterval(nextSlide, 6000); // Cambia la diapositiva cada 3 segundos
}

function setTexts() {
  // Primero, selecciona el elemento .aboutDescription
  var aboutDescription = document.querySelector(".about-description");

  // Luego, selecciona todos los elementos .cardAbout
  var cards = document.querySelectorAll(".cardAbout");

  // Para cada tarjeta, añade un event listener para el evento 'mouseover'
  cards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      // Cuando el mouse pasa sobre la tarjeta, cambia el contenido de .aboutDescription
      // basado en el id de la tarjeta
      switch (card.id) {
        case "card1":
          aboutDescription.textContent = text.text1.en;
          break;
        case "card2":
          aboutDescription.textContent = text.text2.en;
          break;
        case "card3":
          aboutDescription.textContent = text.text3.en;
          break;
      }
    });
  });

  document.addEventListener("click", function (event) {
    // Si el elemento clickeado no es una tarjeta, limpia el texto de .aboutDescription
    if (!event.target.closest(".cardAbout")) {
      aboutDescription.textContent = "";
    }
  });
}

function scrolling() {
  let sections = document.querySelectorAll("section");
  let offsetAdjustment = window.innerHeight * 0.2; // Ajusta este valor según sea necesario
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - offsetAdjustment;
      let height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate");
      } else {
        sec.classList.remove("show-animate");
      }
    });
  };
}

function arrowsScroll() {
  // Obtén los iconos de flecha
  let arrowUp = document.querySelector(".arrowUp");
  let arrowDown = document.querySelector(".arrowDown");
  // Agrega un controlador de eventos al icono de flecha hacia arriba
  arrowUp.addEventListener("click", () => {
    // Encuentra la sección actual
    let currentSection = document.querySelector(".show-animate");
    // Encuentra la sección anterior
    let previousSection = currentSection.previousElementSibling;
    // Si hay una sección anterior, desplázate hasta ella
    if (previousSection) {
      previousSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Agrega un controlador de eventos al icono de flecha hacia abajo
  arrowDown.addEventListener("click", () => {
    // Encuentra la sección actual
    let currentSection = document.querySelector(".show-animate");
    // Encuentra la sección siguiente
    let nextSection = currentSection.nextElementSibling;
    // Si hay una sección siguiente, desplázate hasta ella
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function initAll() {
  scrolling();
  initSlides();
  setTexts();
  arrowsScroll();
}

// Llama a la función init cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", initAll);
