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

export const updateSection2 = (selectedLanguage) => {
  document.getElementById("sec2-title").textContent =
    text.sec2.title[selectedLanguage];
  document.getElementById("sec2-subtitle").textContent =
    text.sec2.subtitle[selectedLanguage];
  document.getElementById("sec2-button1-title").textContent =
    text.sec2.button1.title[selectedLanguage];
  document.getElementById("sec2-button2-title").textContent =
    text.sec2.button2.title[selectedLanguage];
  document.getElementById("sec2-button3-title").textContent =
    text.sec2.button3.title[selectedLanguage];
  document.getElementById("sec2-button1-subtitle").textContent =
    text.sec2.button1.subtitle[selectedLanguage];
  document.getElementById("sec2-button2-subtitle").textContent =
    text.sec2.button2.subtitle[selectedLanguage];
  document.getElementById("sec2-button3-subtitle").textContent =
    text.sec2.button3.subtitle[selectedLanguage];
};

export const updateSection3 = (selectedLanguage) => {
  document.getElementById("sec3-title").textContent =
    text.sec3.title[selectedLanguage];
  document.getElementById("sec3-subtitle").textContent =
    text.sec3.subtitle[selectedLanguage];
  document.getElementById("sec3-cardTitle1").textContent =
    text.sec3.cardTitle1[selectedLanguage];
  document.getElementById("sec3-cardTitle2").textContent =
    text.sec3.cardTitle2[selectedLanguage];
  document.getElementById("body-back-1").textContent =
    text.sec3.bodyCard1[selectedLanguage];
  document.getElementById("body-back-2").textContent =
    text.sec3.bodyCard2[selectedLanguage];
};
