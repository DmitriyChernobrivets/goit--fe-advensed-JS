"use strict";
import axios from "axios";

export default class Model {
  constructor() {
    this.localStorageKeys = Object.keys(localStorage);
    this.API_KEY = "5bb4b458291ae628454d202cf0a8b6e7f2a62a1c36d46&q";
    this.error = {
      validInput: "Wrong Input",
      existUrl: "this url is already exists in your list",
      promiseError: "Try again later",
      deletedMsg: "Card has been deleted"
    };
  }
  addTempObj(data) {
    if (arguments.length !== 1) return null;
    if (typeof data !== "object" || Array.isArray(data)) return null;
    if (data.title === undefined) return undefined;

    localStorage.setItem(data.title, JSON.stringify(data));
    return data.title;
  }
  promiseItem(value) {
    return axios
      .get(`https://api.linkpreview.net/?key=${this.API_KEY}&q=${value}`)

      .catch(err => new Error("error"));
  }
  removeStorageData(id) {
    if (arguments.length === 0) return null;
    localStorage.removeItem(id);
  }
  updateStorage() {
    if (Object.keys(localStorage).length == 0) return;
    return (this.localStorageKeys = [...Object.keys(localStorage)]);
  }
}
