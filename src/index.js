import { ToDo } from "./todo-class";
import { saveObject, loadObject } from "./save-object";

import './style.css';

console.log("Hello")

function programEngine(item){
  // let input = prompt("title, description, dueDate, priority, isDone").split(",");
  // // (makeup,face,tomorrow,high,not)
  

  item = new ToDo(...item);
  saveObject(item);
  const todoArray = loadObject().getArray();
  return {getArray: loadObject().getArray()}


}

export {programEngine}