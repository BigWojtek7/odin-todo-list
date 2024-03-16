
import { programEngine } from ".";

function displayHandler(){
  const dialog = document.getElementById("add-item");
  const form = document.getElementById("get-book");
  const addButton = document.getElementById("add-button");


  addButton.addEventListener("click", () => {
    dialog.showModal();
  })



  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const isDone = document.getElementById("is-done").value;
    
    let item = [title, description, dueDate, priority, isDone];
    programEngine(item);

    // console.log(item);
    // saveObject(item);
    // loadObject()
});
}

displayHandler()