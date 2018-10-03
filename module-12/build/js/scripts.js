"use strict";

var template = document.querySelector("#card").innerHTML.trim();
var cardList = document.querySelector(".js-result");
var btn = document.querySelector(".js-submit");

var fetchApi = function fetchApi() {
  return fetch("http://api.linkpreview.net/?key=123456&q=https://www.google.com").then(function (response) {
    if (response.ok) return response.json();
    throw new Error("ERROR FETCH", response.statusText);
  }).then(function (data) {
    console.log(data);
    //   const markupFunc = Handlebars.compile(template);
    //   const z = markupFunc(data);
    //   console.log(z);
    //   cardList.insertAdjacentHTML("beforeend", z);
    //   localStorage.setItem("card", JSON.stringify(data));
  }).catch(function (err) {
    return console.log("err" + err.statusText);
  });
};
btn.addEventListener("click", fetchApi);