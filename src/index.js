import { ToDo } from "./todo-class";
import { saveObject, loadObject } from "./save-object";

console.log("Hello")

function programEngine(){
  let input = prompt("title, description, dueDate, priority, isDone").split(",");
  // ()

  console.log(input);

  let item = new ToDo(...input)

  console.log(item);
  saveObject(item);
  loadObject()
}

programEngine();