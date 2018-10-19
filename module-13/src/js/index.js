import View from "../services/View.js";
import "../scss/styles.scss";
const view = new View();
console.log(view);
// const template = document.querySelector("#card").innerHTML.trim();
// const errTemplate = document.querySelector("#err").innerHTML.trim();
// const cardList = document.querySelector(".js-result");
// const btn = document.querySelector(".js-submit");
// const input = document.querySelector(".url");
// const errorContainer = document.querySelector(".err-Container");
// const preloader = document.querySelector(".banter-loader");
// let parsedItem = null;
// let err = {
//   error: null
// };
// const API_KEY = "5bb4b458291ae628454d202cf0a8b6e7f2a62a1c36d46&q";
// const pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{3,25}\.(([a-z]{2,4})\.)?([a-z]{2,4})(\/)?$/; //// ^(https?:\/\/)?(www\.)?[a-zA-Z0-9]{3,25}\.[a-z]{2,4}$
// let localStorageKeys = Object.keys(localStorage);

// const fetchPromise = e => {
//   e.preventDefault();
//   preloaderToogle();
//   if (!isValidInput()) {
//     errorCompileTemplate(err, errTemplate, "Ошибка Ввода");
//     preloaderToogle();
//     return;
//   }
//   return fetch(`https://api.linkpreview.net/?key=${API_KEY}&q=${input.value}`)
//     .then(fetchResponseHandler)
//     .then(fetchDataProcessing)
//     .catch(errr => console.log("ERROR", errr));
// };

// onPageLoadedList();

// btn.addEventListener("click", fetchPromise);
// document.body.addEventListener("click", removeHandler);
// //==============================HELPERS===================================

// function fetchResponseHandler(response) {
//   if (response.ok) {
//     return response.json();
//   }
//   errorCompileTemplate(err, errTemplate, "Ошибка Запроса");
//   preloaderToogle();
// }
// function compileCardTemplate(obj, template) {
//   const templateFunciton = Handlebars.compile(template);
//   const markup = templateFunciton(obj);
//   cardList.insertAdjacentHTML("afterbegin", markup);
// }

// function errorCompileTemplate(obj, template, StringErr) {
//   const templateFunciton = Handlebars.compile(template);
//   obj.error = StringErr;
//   const markup = templateFunciton(obj);
//   errorContainer.innerHTML = markup;
// }

// function removeHandler(event) {
//   const target = event.target;
//   if (target.className === "remove") {
//     target.parentElement.remove();
//     errorCompileTemplate(err, errTemplate, "Закладка удалена");
//     localStorage.removeItem(target.nextSibling.textContent);
//   } else return;
// }

// function preloaderToogle() {
//   preloader.classList.toggle("show");
// }

// function isValidInput() {
//   return pattern.test(input.value) ? true : false;
// }

// function onPageLoadedList() {
//   localStorageKeys.forEach(el => {
//     parsedItem = JSON.parse(localStorage.getItem(el));
//     compileCardTemplate(parsedItem, template);
//   });
// }

// function fetchDataProcessing(data) {
//   localStorageKeys = [...Object.keys(localStorage)];
//   if (!localStorageKeys.includes(data.title)) {
//     compileCardTemplate(data, template);
//     localStorage.setItem(data.title, JSON.stringify(data));
//     preloaderToogle();
//   } else {
//     preloaderToogle();
//     return errorCompileTemplate(err, errTemplate, "Такая закладка уже есть");
//   }
// }
