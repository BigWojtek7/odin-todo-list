import { ToDo } from "./todo-class";
import { saveObject } from "./save-object";

console.log("Hello")

function programEngine(){
  let input = prompt("title, description, dueDate, priority, isDone").split(",");
  // ()

  console.log(input);

  let item = new ToDo(...input)

  console.log(item);
  saveObject(item);
}

programEngine();