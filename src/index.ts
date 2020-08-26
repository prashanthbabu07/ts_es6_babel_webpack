// import * as _ from "lodash";
import logger from "./logger";
import { Document } from "./features/Editor/Document";
import { Page } from "./features/Editor/Page";

let component = function () {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = "hello World";

  logger("Hello World");

  var d = new Document();
  d.add(new Page(1));

  add(1, 100);


  return element;
}

document.body.appendChild(component());