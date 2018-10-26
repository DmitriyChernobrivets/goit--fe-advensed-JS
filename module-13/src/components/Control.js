"use strict";
export default class Control {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.on("add", this.addTodo.bind(this));
    view.on("remove", this.removeNote.bind(this));
    this.view.btn.addEventListener("click", this.view.handleAdd.bind(view));
    document.addEventListener(
      "DOMContentLoaded",
      this.view.onPageLoadeditems.bind(this.view, this.model.localStorageKeys)
    );
  }

  addTodo(text) {
    const { existUrl } = this.model.error;
    this.model
      .promiseItem(text)
      .then(({ data }) => {
        this.view.preloaderToogle();
        console.log(data);
        this.model.updateStorage();
        if (this.model.localStorageKeys.includes(data.title)) {
          return this.view.errorMessage(existUrl);
        }
        let item = this.model.addTempObj(data);
        this.view.addNote(data, item);
      })
      .catch(() => this.view.errorMessage(existUrl));
    this.view.preloaderToogle();
  }
  removeNote(text) {
    const { deletedMsg } = this.model.error;
    this.view.removeNote(text);
    this.model.removeStorageData(text);
    this.view.errorMessage(deletedMsg);
  }
}
