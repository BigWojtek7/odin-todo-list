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
  // (makeup,face,tomorrow,high,not)


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
/* harmony export */   deleteObject: () => (/* binding */ deleteObject),
/* harmony export */   loadObject: () => (/* binding */ loadObject),
/* harmony export */   saveObject: () => (/* binding */ saveObject)
/* harmony export */ });

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNtQjs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpQkFBaUIsNkNBQUk7O0FBRXJCO0FBQ0EsRUFBRSx3REFBVTtBQUNaLEVBQUUsd0RBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQSwwQkFBMEIsZUFBZSxHQUFHLGFBQWE7QUFDekQ7Ozs7QUFJQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2F2ZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby1jbGFzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kby1jbGFzc1wiO1xuaW1wb3J0IHsgc2F2ZU9iamVjdCwgbG9hZE9iamVjdCB9IGZyb20gXCIuL3NhdmUtb2JqZWN0XCI7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG9cIilcblxuZnVuY3Rpb24gcHJvZ3JhbUVuZ2luZSgpe1xuICBsZXQgaW5wdXQgPSBwcm9tcHQoXCJ0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmVcIikuc3BsaXQoXCIsXCIpO1xuICAvLyAobWFrZXVwLGZhY2UsdG9tb3Jyb3csaGlnaCxub3QpXG5cblxuICBsZXQgaXRlbSA9IG5ldyBUb0RvKC4uLmlucHV0KVxuXG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xuICBzYXZlT2JqZWN0KGl0ZW0pO1xuICBsb2FkT2JqZWN0KClcbn1cblxucHJvZ3JhbUVuZ2luZSgpOyIsIlxuZnVuY3Rpb24gc2F2ZU9iamVjdChvYmplY3Qpe1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtvYmplY3QucHJvamVjdH0uJHtvYmplY3QudGl0bGV9YCwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcbn1cblxuXG5cbmZ1bmN0aW9uIGxvYWRPYmplY3QoKXtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKSk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBkZWxldGVPYmplY3Qoa2V5KXtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KVxuXG59XG5cbmV4cG9ydCB7c2F2ZU9iamVjdCwgbG9hZE9iamVjdCwgZGVsZXRlT2JqZWN0fSIsIlxuXG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNEb25lKXtcbiAgICB0aGlzLnByb2plY3QgPSBcImRlZmF1bHRcIjtcbiAgICB0aGlzLmlkID0gU3ltYm9sKCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oKXtcblxuICB9XG5cbiAgaXNEb25lKCl7XG5cbiAgfVxufVxuXG5leHBvcnQge1RvRG99Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9