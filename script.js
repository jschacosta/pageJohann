import { text } from "./js/text.js";
import { submitForm } from "./js/fetch.js";
import {
  updateNavbarTexts,
  updateTitles,
  updateSection2,
  updateSection3,
} from "./js/language.js";
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Agrega la función al objeto global window
window.toggleMenu = toggleMenu;

// Declarar la variable global
var selectedLanguage;
document.querySelector(".components5").addEventListener("submit", submitForm);
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

  cards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      // Cuando el mouse pasa sobre la tarjeta, cambia el contenido de .aboutDescription
      // basado en el id de la tarjeta
      switch (card.id) {
        case "card1":
          aboutDescription.textContent = text.sec2.text1[selectedLanguage];
          break;
        case "card2":
          aboutDescription.textContent = text.sec2.text2[selectedLanguage];
          break;
        case "card3":
          aboutDescription.textContent = text.sec2.text3[selectedLanguage];
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
  let arrowUp = document.querySelector(".arrowUp");
  let arrowDown = document.querySelector(".arrowDown");
  let offsetAdjustment = document.documentElement.clientHeight * 0.5; // Ajusta este valor según sea necesario
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = document.documentElement.scrollTop;
      let offset = sec.offsetTop - offsetAdjustment;
      let height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        sec.classList.add("show-animate");
        if (
          sec.classList.contains("sec-1") ||
          sec.classList.contains("sec-5")
        ) {
          arrowUp.style.opacity = "0";
          arrowUp.style.display = "none";
          arrowDown.style.opacity = "0";
          arrowDown.style.display = "none";
        } else {
          arrowUp.style.opacity = "1";
          arrowUp.style.display = "block";
          arrowDown.style.opacity = "1";
          arrowDown.style.display = "block";
        }
      } else {
        sec.classList.remove("show-animate");
      }
    });
  };
}

function keySpaceNavigation() {
  let navbar = document.querySelector("#desktop-nav"); // Selecciona el navbar
  let sections = document.querySelectorAll("section");
  sections = Array.from(sections); // Convierte NodeList a Array
  sections = sections.slice(1); // Elimina la primera sección
  sections.unshift(navbar); // Agrega el navbar al principio de la lista de secciones
  console.log(sections);

  let currentSectionIndex = 0; // Contador para la sección actual

  document.addEventListener("keydown", function (event) {
    if (event.code == "Space") {
      // Si se presiona la tecla espacio
      event.preventDefault(); // Prevenir el comportamiento predeterminado de desplazamiento
      currentSectionIndex++; // Incrementar el contador
      if (currentSectionIndex >= sections.length) {
        // Si hemos pasado la última sección
        currentSectionIndex = 0; // Volver a la primera sección
      }
      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" }); // Desplazarse a la sección
    }
  });
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
      console.log("previous", previousSection.id);
      if (previousSection.id == "home") {
        let navbar = document.querySelector("#desktop-nav");
        navbar.scrollIntoView({ behavior: "smooth" });
      } else {
        previousSection.scrollIntoView({ behavior: "smooth" });
      }
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

function selectButton() {
  // Detectar el idioma del navegador
  var lang = navigator.language || navigator.userLanguage;
  lang = lang.substr(0, 2); // Obtener solo los primeros dos caracteres

  // Establecer el idioma del botón y llamar a changeLanguage() con el idioma detectado
  var defaultOption = document.querySelector(
    '.dropdown-content a[data-lang="' + lang + '"]'
  );
  if (defaultOption) {
    document.getElementById("dropbtn").innerText = defaultOption.innerText;
    selectedLanguage = lang;
    changeLanguage(selectedLanguage);
  }

  // Cuando se selecciona una opción, cambiar el texto del botón y llamar a changeLanguage() con el nuevo idioma
  document.querySelectorAll(".dropdown-content a").forEach(function (element) {
    element.onclick = function () {
      document.getElementById("dropbtn").innerText = this.innerText;
      selectedLanguage = this.dataset.lang;
      changeLanguage(selectedLanguage);
      // Cerrar el menú desplegable
      document.getElementById("dropdown-content").style.maxHeight = null;
    };
  });

  document.getElementById("dropbtn").onclick = function () {
    var content = document.getElementById("dropdown-content");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}

function changeLanguage(lang) {
  // Aquí puedes poner tu lógica para cambiar el idioma de la página
  console.log("Language changed to: " + lang);
  updateNavbarTexts(selectedLanguage);
  updateTitles(selectedLanguage);
  updateSection2(selectedLanguage);
  updateSection3(selectedLanguage);
}

function experienceData() {
  // Paso 1: Define la estructura de datos
  var skills = [
    { title: "HTML-CSS", level: "Experienced", icon: "./assets/checkmark.png" },
    {
      title: "Javascript",
      level: "Experienced",
      icon: "./assets/checkmark.png",
    },
    { title: "Vue js", level: "Experienced", icon: "./assets/checkmark.png" },
    {
      title: "React-Next",
      level: "Intermediate",
      icon: "./assets/checkmark.png",
    },
    { title: "Mongo DB", level: "Experienced", icon: "./assets/checkmark.png" },
    { title: "AWS", level: "Intermediate", icon: "./assets/checkmark.png" },
    // Añade más objetos aquí según sea necesario
  ];

  var experience = [
    { title: "Team Leadership", level: "", icon: "./assets/checkmark.png" },
    {
      title: "Scrum Methodology",
      level: "",
      icon: "./assets/checkmark.png",
    },
    { title: "Strategic Planning", level: "", icon: "./assets/checkmark.png" },
    {
      title: "Group Leadership",
      level: "",
      icon: "./assets/checkmark.png",
    },
    { title: "Team Collaboration", level: "", icon: "./assets/checkmark.png" },
    {
      title: "Project Coordination",
      level: "",
      icon: "./assets/checkmark.png",
    },
    // Añade más objetos aquí según sea necesario
  ];

  // Paso 2: Selecciona el elemento .body-front
  var bodyFront = document.getElementById("body-front-1");

  var bodyFront2 = document.getElementById("body-front-2");

  // Paso 3: Itera sobre la estructura de datos
  skills.forEach(function (skill) {
    // Paso 4: Crea los elementos HTML
    var itemFront = document.createElement("div");
    itemFront.className = "item-front";

    var img = document.createElement("img");
    img.src = skill.icon;
    img.alt = "Experience icon";
    img.className = "icon";

    var div = document.createElement("div");

    var h3 = document.createElement("h3");
    h3.innerText = skill.title;

    var p = document.createElement("p");
    p.innerText = skill.level;

    // Añade los elementos creados al .item-front
    div.appendChild(h3);
    div.appendChild(p);
    itemFront.appendChild(img);
    itemFront.appendChild(div);

    // Paso 5: Añade el .item-front al .body-front
    bodyFront.appendChild(itemFront);
  });

  experience.forEach(function (skill) {
    // Paso 4: Crea los elementos HTML
    var itemFront = document.createElement("div");
    itemFront.className = "item-front";

    var img = document.createElement("img");
    img.src = skill.icon;
    img.alt = "Experience icon";
    img.className = "icon";

    var div = document.createElement("div");

    var h3 = document.createElement("h3");
    h3.innerText = skill.title;

    // Añade los elementos creados al .item-front
    div.appendChild(h3);
    itemFront.appendChild(img);
    itemFront.appendChild(div);

    // Paso 5: Añade el .item-front al .body-front
    bodyFront2.appendChild(itemFront);
  });
}

function flipCardOnClick(flipCard) {
  var flipCard = document.getElementById(flipCard);
  console.log(flipCard.style.transform);
  if (flipCard.style.transform == "rotateY(180deg)") {
    flipCard.style.transform = "rotateY(0deg)";
  } else {
    flipCard.style.transform = "rotateY(180deg)";
  }
}
window.flipCardOnClick = flipCardOnClick;

function validateEmail() {
  var emailInput = document.getElementById("email");
  var errorElement = document.getElementById("email-error");
  var submitButton = document.getElementById("buttonSubmit");

  // Simple pattern for email validation
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  emailInput.addEventListener("input", function () {
    var email = this.value;

    if (email.match(pattern)) {
      errorElement.style.display = "none";
      submitButton.disabled = false;
    } else {
      errorElement.style.display = "none";
      submitButton.disabled = true;
    }
  });

  emailInput.addEventListener("focus", function () {
    errorElement.style.display = "none";
  });

  emailInput.addEventListener("blur", function () {
    var email = this.value;

    if (!email.match(pattern)) {
      errorElement.style.display = "block";
      submitButton.disabled = true;
    }
  });
}

function initAll() {
  scrolling();
  initSlides();
  setTexts();
  arrowsScroll();
  keySpaceNavigation();
  selectButton();
  experienceData();
  validateEmail();
}

// Llama a la función init cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", initAll);
