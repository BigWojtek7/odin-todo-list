
function saveObject(object){
  localStorage.setItem("todos", JSON.stringify(object))
}



function loadObject(){
  const items = JSON.parse({ ...localStorage });

  console.log("load", items);

}

function deleteObject(key){
  localStorage.removeItem(key)

}

export {saveObject, loadObject, deleteObject}