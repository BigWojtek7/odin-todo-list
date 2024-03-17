import { displayHandler } from "./DOM";

function saveObject(todoArray){
  localStorage.clear();
  todoArray.forEach((todo, index) => {
  localStorage.setItem(`${index}`, JSON.stringify(todo));
  displayHandler();
  });
}



function loadObject(){
  const todoArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
    todoArray.push(toDoObject);

    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  todoArray.sort((a , b) => a.project > b.project ? 1 : -1);
  const getArray = () => todoArray;
  return {getArray}
}

function deleteObject(index){
  const todoArray = loadObject().getArray();
  todoArray.splice(index, 1);
  saveObject(todoArray);
  // localStorage.removeItem(key)

}

function addTodo(todo){
  const todoArray = loadObject().getArray();
  todoArray.push(todo)
  saveObject(todoArray)

}

export {saveObject, loadObject, deleteObject, addTodo}