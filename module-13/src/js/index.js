import "../scss/styles.scss";
import View from "../components/View";
import Model from "../components/Model";
import Control from "../components/Control";
import axios from "axios";
console.log(axios);
const localStorageKeys = Object.keys(localStorage);
const model = new Model();
const view = new View();
new Control(model, view);

// console.log(view);
const pat = /\ |,|\.|&/g;
const str = "asdad asd,asda.asdasd& as";
const res = str.replace(pat, "");
