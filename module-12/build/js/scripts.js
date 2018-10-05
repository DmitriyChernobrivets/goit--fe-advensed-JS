"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var template = document.querySelector("#card").innerHTML.trim();
var errTemplate = document.querySelector("#err").innerHTML.trim();
var cardList = document.querySelector(".js-result");
var btn = document.querySelector(".js-submit");
var input = document.querySelector(".url");
var errorContainer = document.querySelector(".err-Container");
var preloader = document.querySelector(".banter-loader");
var parsedItem = null;
var err = {
  error: null
};
var API_KEY = "5bb4b458291ae628454d202cf0a8b6e7f2a62a1c36d46&q";
var pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{3,25}\.(([a-z]{2,4})\.)?([a-z]{2,4})(\/)?$/; //// ^(https?:\/\/)?(www\.)?[a-zA-Z0-9]{3,25}\.[a-z]{2,4}$
var localStorageKeys = Object.keys(localStorage);

var fetchPromise = function fetchPromise(e) {
  e.preventDefault();
  preloaderToogle();
  if (!isValidInput()) {
    errorCompileTemplate(err, errTemplate, "Ошибка Ввода");
    preloaderToogle();
    return;
  }
  return fetch("https://api.linkpreview.net/?key=" + API_KEY + "&q=" + input.value).then(fetchResponseHandler).then(fetchDataProcessing).catch(function (errr) {
    return console.log("ERROR", errr);
  });
};

onPageLoadedList();

btn.addEventListener("click", fetchPromise);

//==============================HELPERS===================================

function fetchResponseHandler(response) {
  if (response.ok) {
    return response.json();
  }
  errorCompileTemplate(err, errTemplate, "Ошибка Запроса");
  preloaderToogle();
}
function compileCardTemplate(obj, template) {
  var templateFunciton = Handlebars.compile(template);
  var markup = templateFunciton(obj);
  cardList.insertAdjacentHTML("afterbegin", markup);
}

function errorCompileTemplate(obj, template, StringErr) {
  var templateFunciton = Handlebars.compile(template);
  obj.error = StringErr;
  var markup = templateFunciton(obj);
  errorContainer.innerHTML = markup;
}

function removeHandler(storageId) {
  var removeBtn = document.querySelector(".remove");
  removeBtn.addEventListener("click", function () {
    localStorage.removeItem(storageId);
    removeBtn.parentElement.remove();
    errorCompileTemplate(err, errTemplate, "Закладка удалена");
  });
}

function preloaderToogle() {
  preloader.classList.toggle("show");
}

function isValidInput() {
  return pattern.test(input.value) ? true : false;
}

function onPageLoadedList() {
  localStorageKeys.forEach(function (el) {
    parsedItem = JSON.parse(localStorage.getItem(el));
    compileCardTemplate(parsedItem, template);
    removeHandler(parsedItem.title);
  });
}

function fetchDataProcessing(data) {
  localStorageKeys = [].concat(_toConsumableArray(Object.keys(localStorage)));
  if (!localStorageKeys.includes(data.title)) {
    compileCardTemplate(data, template);
    removeHandler(data.title);
    localStorage.setItem(data.title, JSON.stringify(data));
    preloaderToogle();
  } else {
    preloaderToogle();
    return errorCompileTemplate(err, errTemplate, "Такая закладка уже есть");
  }
}