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

    if (todoArray[0] === undefined) return

    divContent.textContent = "";
    // todoArray.sort((a , b) => a.project > b.project ? 1 : -1)

    let newDivProject = document.createElement("div");
    newDivProject.dataset.project = todoArray[0].project
    newDivProject.innerHTML = `<p class="title">${todoArray[0].project}</p> <button>Expand</button>`

    todoArray.forEach((el, index) => {
      const newDiv = document.createElement("div");
      // const newButtonExpand = document.createElement("button")
      // newButtonExpand.innerHTML="Expand"
      // newDivProject.appendChild(newButtonExpand);
      console.log(el)

      newDiv.innerHTML = `${el.title}, ${el.description}, ${el.dueDate} 
      <button data-index=${index}>Delete</button> <button data-expand=${index}>Project</button>`;
      
      if (newDivProject.dataset.project === el.project){
        newDivProject.appendChild(newDiv);
      } else {
        divContent.appendChild(newDivProject);
        newDivProject = document.createElement("div");
        newDivProject.innerHTML = `<p class="title">${el.project}</p> <button>Expand</button>`
        newDivProject.dataset.project = el.project;
        // newDivProject.appendChild(newButtonExpand);
        newDivProject.appendChild(newDiv);
      }
    });
    divContent.appendChild(newDivProject)
  }

  updateDisplay();

  function clickHandler(e){
    const datasetButton = e.target.dataset.index;
    const datasetDiv = e.target.closest("div").dataset.project;

    const expandButton = e.target.dataset.expand;

    const dialogExpand = document.getElementById("dialog-expand");

    if(datasetButton){
      deleteObject(datasetButton);
      updateDisplay();
    } else if (expandButton){
      const todoArray = loadObject().getArray();
      
      const changeProjectDialog = document.getElementById("change-project-dialog");
      const changeProjectForm = document.getElementById("change-project-form");
      const closeProjectButton = document.getElementById("close-project-button");
      changeProjectDialog.showModal();
      changeProjectForm.addEventListener("submit", () =>{
        const changeProjectInput = document.getElementById("change-project-input")

        todoArray[expandButton].project = changeProjectInput.value
        saveObject(todoArray);
        updateDisplay();
        changeProjectDialog.close();
        form.reset();

      })

      closeProjectButton.addEventListener("click", () => changeProjectDialog.close());




      

    } else if(datasetDiv) {
      const todoArray = loadObject().getArray();
      dialogExpand.innerHTML= "";
      // console.log(todoArray.filter(item => div.dataset.project === item.project));
      console.log(datasetDiv)
      const projectArray = todoArray.filter(item => datasetDiv === item.project)
      console.log("funny", projectArray)
      projectArray.forEach(el => {
        
        const newDiv = document.createElement("div")
        newDiv.innerHTML=`${el.project}, ${el.title}, ${el.description}, ${el.dueDate}, ${el.priority}, ${el.isDone}`
        dialogExpand.appendChild(newDiv);
        dialogExpand.showModal();
      });
      const closeExpandButton = document.createElement("button")
      closeExpandButton.innerHTML = "Close"
      dialogExpand.appendChild(closeExpandButton);
      closeExpandButton.addEventListener("click", () => dialogExpand.close());

    }
  }

  divContent.addEventListener("click", clickHandler);
  // const deleteButton = document.querySelectorAll("[data-index]");
  // console.log("1", deleteButton)
  // deleteButton.forEach(button => {
  //   button.addEventListener("click", () => {
  //     deleteObject(button.dataset.index);
  //     updateDisplay();
  //     console.log(button.dataset.index);
  //   });
  // });

  // const dialogExpand = document.querySelector(".dialog-expand")

  // const divProject = document.querySelectorAll("[data-project]");
  // divProject.forEach(div => {
  //   div.addEventListener("click", () => {
  //     const todoArray = loadObject().getArray();
  //     dialogExpand.innerHTML= "";
  //     // console.log(todoArray.filter(item => div.dataset.project === item.project));
  //     const projectArray = todoArray.filter(item => div.dataset.project === item.project)
  //     console.log("funny", projectArray)
  //     projectArray.forEach(el => {
        
  //       const newDiv = document.createElement("div")
  //       newDiv.innerHTML=`${el.project}, ${el.title}, ${el.description}, ${el.dueDate}, ${el.priority}, ${el.isDone},`
  //       dialogExpand.appendChild(newDiv);
  //       dialogExpand.showModal();
  //     });
      
  //   });
    
  // });


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
    form.reset();
    dialog.close();
    updateDisplay()
    console.log("2", deleteButton)
    // saveObject(todoArray)
    // updateDisplay();
  });
  

  // return {updateDisplay}

}

displayHandler()

export {displayHandler}