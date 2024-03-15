import { ToDo } from "./todo-class";
import { saveObject, loadObject } from "./save-object";

console.log("Hello")

function programEngine(){
  let input = prompt("title, description, dueDate, priority, isDone").split(",");
  // (makeup,face,tomorrow,high,not)


  let item = new ToDo(...input)

  console.log(item);
  saveObject(item);
  loadObject()
}

programEngine();