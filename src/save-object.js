
function saveObject(todoArray){
  localStorage.clear();
  todoArray.forEach(el => {
  localStorage.setItem(`${el.project}.${el.title}`, JSON.stringify(el))
  });
}



function loadObject(){
  const todoArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
    todoArray.push(toDoObject);

    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  const getArray = () => todoArray;
  return {getArray}
}

function deleteObject(key){
  localStorage.removeItem(key)

}

export {saveObject, loadObject, deleteObject}