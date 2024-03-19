class ToDo {
  constructor(project = "default", title, description, dueDate, priority, isDone){
    this.project = project;
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