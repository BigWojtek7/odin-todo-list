import { loadObject, saveObject, deleteObject, addTodo } from "./save-object";
import { ToDo } from "./todo-class";
import { programEngine } from ".";

import './style.css';


function displayHandler(){
  const dialog = document.getElementById("add-item");
  const form = document.getElementById("get-book");

  const addButton = document.getElementById("add-button");
  const closeButton = document.getElementById("close-button");

  const divContent = document.querySelector(".content");
  
  


  const updateDisplay = () => {

    const todoArray = loadObject().getArray();

    divContent.textContent = "";
    // todoArray.sort((a , b) => a.project > b.project ? 1 : -1)

    let newDivProject = document.createElement("div");
    newDivProject.dataset.project = todoArray[0].project
    newDivProject.textContent = todoArray[0].project

    todoArray.forEach((el, index) => {
      const newDiv = document.createElement("div");
      console.log(el)

      newDiv.innerHTML = `${el.title}, ${el.description}, ${el.dueDate} <button data-index=${index}>Delete</button>`;
      
      if (newDivProject.dataset.project === el.project){
        newDivProject.appendChild(newDiv);
      } else {
        divContent.appendChild(newDivProject);
        newDivProject = document.createElement("div");
        newDivProject.textContent = el.project;
        newDivProject.dataset.project = el.project;
        newDivProject.appendChild(newDiv);
      }
    });
    divContent.appendChild(newDivProject)
  }


  updateDisplay();

  const deleteButton = document.querySelectorAll("[data-index]");

  deleteButton.forEach(button => {
    button.addEventListener("click", () => {
      deleteObject(button.dataset.index);
    })
  });

  const divProject = document.querySelectorAll("[data-project]");
  divProject.forEach(div => {
    div.addEventListener("click", () => {
      console.log(div.dataset.project);
    });
    
  });


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
    addTodo(todo);
    // saveObject(todoArray)
    // updateDisplay();
  });
  return {updateDisplay}

}

displayHandler()

export {displayHandler}