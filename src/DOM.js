import { loadObject, saveObject } from "./save-object";
import { ToDo } from "./todo-class";
import { programEngine } from ".";

import './style.css';


function displayHandler(){
  const dialog = document.getElementById("add-item");
  const form = document.getElementById("get-book");

  const addButton = document.getElementById("add-button");
  const closeButton = document.getElementById("close-button");

  const divContent = document.querySelector(".content");
  
  const todoArray = loadObject().getArray();

  const updateDisplay = () => {
    divContent.textContent = "";
    

    todoArray.forEach(el => {
        const newDiv = document.createElement("div");
        const newDivProject = document.createElement("div");

        
        newDiv.innerHTML = `${el.title}, ${el.description}, ${el.dueDate} <button>Delete</button>`;
        divContent.appendChild(newDiv);
      });
  }

  updateDisplay();




  addButton.addEventListener("click", () => {
    dialog.showModal();
  })
  closeButton.addEventListener("click", (e) => dialog.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const isDone = document.getElementById("is-done").value;
    
    let todo = new ToDo(title, description, dueDate, priority, isDone);
    todoArray.push(todo)
    saveObject(todoArray)
    updateDisplay();
});
}

displayHandler()