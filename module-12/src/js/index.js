const template = document.querySelector("#card").innerHTML.trim();
const cardList = document.querySelector(".js-result");
const btn = document.querySelector(".js-submit");

const fetchApi = () => {
  return fetch(
    "https://api.linkpreview.net/?key=123456&q=http://www.google.com"
  )
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("ERROR FETCH", response.statusText);
    })
    .then(data => {
      console.log(data);
      //   const markupFunc = Handlebars.compile(template);
      //   const z = markupFunc(data);
      //   console.log(z);
      //   cardList.insertAdjacentHTML("beforeend", z);
      //   localStorage.setItem("card", JSON.stringify(data));
    })
    .catch(err => console.log("err" + err.statusText));
};

btn.addEventListener("click", fetchApi);
