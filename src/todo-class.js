import { changeProject } from "./todo-methods";

class ToDo {
  constructor(title, description, dueDate, priority, isDone){
    this.project = description;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
  changeProject(newProject){
    this.project = newProject;
  }


}


export {ToDo}