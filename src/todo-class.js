

class ToDo {
  constructor(title, description, dueDate, priority, isDone){
    this.project = "default";
    this.id = Symbol();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }

  deleteItem(){

  }

  isDone(){

  }
}

export {ToDo}