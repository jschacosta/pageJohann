import { text } from "./text.js";
export const updateNavbarTexts = (selectedLanguage) => {
  Array.from(document.getElementsByClassName("nav-about")).forEach(
    (element) => {
      element.textContent = text.navbar.first[selectedLanguage];
    }
  );
  Array.from(document.getElementsByClassName("nav-experience")).forEach(
    (element) => {
      element.textContent = text.navbar.second[selectedLanguage];
    }
  );
  Array.from(document.getElementsByClassName("nav-projects")).forEach(
    (element) => {
      element.textContent = text.navbar.third[selectedLanguage];
    }
  );
  Array.from(document.getElementsByClassName("nav-contact")).forEach(
    (element) => {
      element.textContent = text.navbar.fourth[selectedLanguage];
    }
  );
};
export const updateTitles = (selectedLanguage) => {
  document.getElementById("subtitle").textContent =
    text.titles.subtitle[selectedLanguage];
  document.getElementById("button1").textContent =
    text.titles.button1[selectedLanguage];
  document.getElementById("button2").textContent =
    text.titles.button2[selectedLanguage];
};
