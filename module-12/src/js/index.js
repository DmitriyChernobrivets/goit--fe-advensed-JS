"use strict";
const template = document.querySelector("#card").innerHTML.trim();
const errTemplate = document.querySelector("#err").innerHTML.trim();
const cardList = document.querySelector(".js-result");
const btn = document.querySelector(".js-submit");
const input = document.querySelector(".url");
const errorContainer = document.querySelector(".err-Container");
const preloader = document.querySelector(".banter-loader");
let parsedItem = null;
let err = {
  error: null
};
const pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{3,25}\.(([a-z]{2,4})\.)?([a-z]{2,4})(\/)?$/; //// ^(https?:\/\/)?(www\.)?[a-zA-Z0-9]{3,25}\.[a-z]{2,4}$
let localStorageKeys = Object.keys(localStorage);

const compileCardTemplate = (obj, template) => {
  const templateFunciton = Handlebars.compile(template);
  const markup = templateFunciton(obj);
  cardList.insertAdjacentHTML("afterbegin", markup);
};

const errorCompileTemplate = (obj, template, StringErr) => {
  const templateFunciton = Handlebars.compile(template);
  obj.error = StringErr;
  const markup = templateFunciton(obj);
  errorContainer.innerHTML = markup;
};

const removeHandler = storageId => {
  const removeBtn = document.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    localStorage.removeItem(storageId);
    removeBtn.parentElement.remove();
    errorCompileTemplate(err, errTemplate, "Закладка удалена");
  });
};

const preloaderToogle = () => preloader.classList.toggle("show");

const isValidInput = () => (pattern.test(input.value) ? true : false);

const onPageLoadedList = () => {
  localStorageKeys.forEach(el => {
    parsedItem = JSON.parse(localStorage.getItem(el));
    compileCardTemplate(parsedItem, template);
    removeHandler(parsedItem.title);
  });
};
onPageLoadedList();

const fetchDataProcessing = data => {
  localStorageKeys = [...Object.keys(localStorage)];
  if (!localStorageKeys.includes(data.title)) {
    compileCardTemplate(data, template);
    removeHandler(data.title);
    localStorage.setItem(data.title, JSON.stringify(data));
    preloaderToogle();
  } else {
    preloaderToogle();
    return errorCompileTemplate(err, errTemplate, "Такая закладка уже есть");
  }
};

const fetchPromise = e => {
  e.preventDefault();
  preloaderToogle();
  if (!isValidInput()) {
    errorCompileTemplate(err, errTemplate, "Ошибка Ввода");
    preloaderToogle();
    return;
  }
  return fetch(
    `https://api.linkpreview.net/?key=5bb4b458291ae628454d202cf0a8b6e7f2a62a1c36d46&q=${
      input.value
    }`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      errorCompileTemplate(err, errTemplate, "Ошибка Запроса");
      preloaderToogle();
    })
    .then(fetchDataProcessing)
    .catch(errr => console.log("ERROR", errr));
};

btn.addEventListener("click", fetchPromise);
