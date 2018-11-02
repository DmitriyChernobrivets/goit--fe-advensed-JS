import EventEmmiter from "../services/EventEmmiter";

export default class View extends EventEmmiter {
  constructor() {
    super();
    this.form = document.querySelector(".search-form");
    this.list = document.querySelector(".js-result");
    this.input = document.querySelector(".url");
    this.btn = document.querySelector(".js-submit");
    this.error = document.querySelector(".error");
    this.preloader = document.querySelector(".banter-loader");
    this.pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{3,25}\.(([a-z]{2,4})\.)?([a-z]{2,4})(\/)?$/;
  }
  createNote(obj, id) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const divImg = document.createElement("div");
    const btnRmv = document.createElement("button");
    const paragraph = document.createElement("p");
    const discription = document.createElement("p");

    divImg.classList.add("img-container");
    divImg.appendChild(img);
    img.setAttribute("src", obj.image);

    btnRmv.classList.add("remove");
    btnRmv.textContent = "X";

    paragraph.classList.add("title");
    paragraph.textContent = obj.title;

    discription.classList.add("discription");
    discription.textContent = obj.description;

    li.dataset.remove = id;
    li.append(divImg, btnRmv, paragraph, discription);
    this.appendEventListeners(li);
    return li;
  }
  errorMessage(message) {
    this.error.textContent = message;
    this.error.classList.add("show-error");
  }

  addNote(note, id) {
    const item = this.createNote(note, id);
    this.form.reset();
    this.list.appendChild(item);
  }
  appendEventListeners(item) {
    const removeBtn = item.querySelector(".remove");
    removeBtn.addEventListener("click", this.handleRemove.bind(this));
  }
  handleRemove({ target }) {
    const parent = target.closest("li");
    this.emite("remove", parent.dataset.remove);
  }
  handleAdd(evt) {
    evt.preventDefault();
    const { value } = this.input;
    !(value === "" || !this.pattern.test(value))
      ? this.emite("add", value)
      : this.errorMessage("Wrong Input");
  }
  removeNote(id) {
    const item = this.list.querySelector(`[data-remove="${id}"]`);
    this.list.removeChild(item);
  }
  onPageLoadeditems(storageKey) {
    storageKey.forEach(el => {
      if (el === "loglevel:webpack-dev-server") return;
      let obj = JSON.parse(localStorage.getItem(el));
      this.addNote(obj, el);
    });
  }
  preloaderToogle() {
    this.preloader.classList.toggle("show");
  }
}
