
function saveObject(object){
  localStorage.setItem(`${object.project}.${object.title}`, JSON.stringify(object))
}



function loadObject(){
  const todoArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
    todoArr.push(toDoObject);

    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  const getArray = () => todoArr;
  return {getArray}
}

function deleteObject(key){
  localStorage.removeItem(key)

}

export {saveObject, loadObject, deleteObject}