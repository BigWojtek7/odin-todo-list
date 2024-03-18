function updateDisplay () {

  const todoArray = loadObject().getArray();

  if (todoArray[0] === undefined) return

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
export{updateDisplay}