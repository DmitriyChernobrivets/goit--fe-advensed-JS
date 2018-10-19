export default class View {
  constructor() {
    this.form = document.querySelector(".search-form");
    this.list = document.querySelector(".js-result");
    this.input = document.querySelector(".url");
  }
  createItem(obj) {
    const li = document.createElement("li");
    li.append(divImg, btnRmv, title, discription);

    const divImg = document.createElement("div");
    divImg.classList.add("img-container");
    divImg.appendChild(img);

    const img = document.createElement("img");
    img.setAttribute("src", obj.image);

    const btnRmv = document.createElement("button");
    btnRmv.classList.add("remove");
    btnRmv.textContent = "X";

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = obj.title;

    const discription = document.createElement("p");
    discription.classList.add("discription");
    discription.textContent = obj.description;
    return li;
  }
  addEventListeners() {
    this.form.addEventListener("submit", this.createItem.bind(this, obj));
  }
}
