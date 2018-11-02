import "../scss/styles.scss";
import View from "../components/View";
import Model from "../components/Model";
import Control from "../components/Control";
const view = new View();
const model = new Model();

new Control(model, view);
