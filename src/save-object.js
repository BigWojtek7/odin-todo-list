
function saveObject(object){
  localStorage.setItem(`${object.project}.${object.title}`, JSON.stringify(object))
}



function loadObject(){
  for (let i = 0; i < localStorage.length; i++) {
    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }

}

function deleteObject(key){
  localStorage.removeItem(key)

}

export {saveObject, loadObject, deleteObject}