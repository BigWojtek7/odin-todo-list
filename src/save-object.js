
function saveObject(object){
  localStorage.setItem("todos", JSON.stringify(object))
}

export {saveObject}

