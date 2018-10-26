import "../scss/styles.scss";
import View from "../components/View";
import Model from "../components/Model";
import Control from "../components/Control";

const model = new Model();
const view = new View();
new Control(model, view);
