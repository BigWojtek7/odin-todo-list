"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-class */ "./src/todo-class.js");
/* harmony import */ var _save_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-object */ "./src/save-object.js");



console.log("Hello")

function programEngine(){
  let input = prompt("title, description, dueDate, priority, isDone").split(",");
  // ()

  console.log(input);

  let item = new _todo_class__WEBPACK_IMPORTED_MODULE_0__.ToDo(...input)

  console.log(item);
  (0,_save_object__WEBPACK_IMPORTED_MODULE_1__.saveObject)(item);
  (0,_save_object__WEBPACK_IMPORTED_MODULE_1__.loadObject)()
}

programEngine();

/***/ }),

/***/ "./src/save-object.js":
/*!****************************!*\
  !*** ./src/save-object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadObject: () => (/* binding */ loadObject),
/* harmony export */   saveObject: () => (/* binding */ saveObject)
/* harmony export */ });

function saveObject(object){
  localStorage.setItem("todos", JSON.stringify(object))
}



function loadObject(){
  const items = JSON.parse({ ...localStorage });

  console.log("load", items);

}



/***/ }),

/***/ "./src/todo-class.js":
/*!***************************!*\
  !*** ./src/todo-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
  constructor(title, description, dueDate, priority, isDone){
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNtQjs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQiw2Q0FBSTs7QUFFckI7QUFDQSxFQUFFLHdEQUFVO0FBQ1osRUFBRSx3REFBVTtBQUNaOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EsNkJBQTZCLGlCQUFpQjs7QUFFOUM7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zYXZlLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLWNsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b2RvLWNsYXNzXCI7XG5pbXBvcnQgeyBzYXZlT2JqZWN0LCBsb2FkT2JqZWN0IH0gZnJvbSBcIi4vc2F2ZS1vYmplY3RcIjtcblxuY29uc29sZS5sb2coXCJIZWxsb1wiKVxuXG5mdW5jdGlvbiBwcm9ncmFtRW5naW5lKCl7XG4gIGxldCBpbnB1dCA9IHByb21wdChcInRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZVwiKS5zcGxpdChcIixcIik7XG4gIC8vICgpXG5cbiAgY29uc29sZS5sb2coaW5wdXQpO1xuXG4gIGxldCBpdGVtID0gbmV3IFRvRG8oLi4uaW5wdXQpXG5cbiAgY29uc29sZS5sb2coaXRlbSk7XG4gIHNhdmVPYmplY3QoaXRlbSk7XG4gIGxvYWRPYmplY3QoKVxufVxuXG5wcm9ncmFtRW5naW5lKCk7IiwiXG5mdW5jdGlvbiBzYXZlT2JqZWN0KG9iamVjdCl7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcbn1cblxuXG5cbmZ1bmN0aW9uIGxvYWRPYmplY3QoKXtcbiAgY29uc3QgaXRlbXMgPSBKU09OLnBhcnNlKHsgLi4ubG9jYWxTdG9yYWdlIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwibG9hZFwiLCBpdGVtcyk7XG5cbn1cblxuZXhwb3J0IHtzYXZlT2JqZWN0LCBsb2FkT2JqZWN0fSIsImNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XG4gIH1cblxuICBkZWxldGVJdGVtKCl7XG5cbiAgfVxuXG4gIGlzRG9uZSgpe1xuXG4gIH1cbn1cblxuZXhwb3J0IHtUb0RvfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==