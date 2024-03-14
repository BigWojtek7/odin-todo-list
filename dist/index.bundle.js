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
  // (MakeUp,face lifting,tomorrow,high,not')

  console.log(input);

  let item = new _todo_class__WEBPACK_IMPORTED_MODULE_0__.ToDo(...input)

  console.log(item);
  (0,_save_object__WEBPACK_IMPORTED_MODULE_1__.saveObject)(item);
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
/* harmony export */   saveObject: () => (/* binding */ saveObject)
/* harmony export */ });

function saveObject(object){
  localStorage.setItem("todos", JSON.stringify(object))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvQztBQUNPOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLDZDQUFJOztBQUVyQjtBQUNBLEVBQUUsd0RBQVU7QUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc2F2ZS1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby1jbGFzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kby1jbGFzc1wiO1xuaW1wb3J0IHsgc2F2ZU9iamVjdCB9IGZyb20gXCIuL3NhdmUtb2JqZWN0XCI7XG5cbmNvbnNvbGUubG9nKFwiSGVsbG9cIilcblxuZnVuY3Rpb24gcHJvZ3JhbUVuZ2luZSgpe1xuICBsZXQgaW5wdXQgPSBwcm9tcHQoXCJ0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmVcIikuc3BsaXQoXCIsXCIpO1xuICAvLyAoTWFrZVVwLGZhY2UgbGlmdGluZyx0b21vcnJvdyxoaWdoLG5vdCcpXG5cbiAgY29uc29sZS5sb2coaW5wdXQpO1xuXG4gIGxldCBpdGVtID0gbmV3IFRvRG8oLi4uaW5wdXQpXG5cbiAgY29uc29sZS5sb2coaXRlbSk7XG4gIHNhdmVPYmplY3QoaXRlbSk7XG59XG5cbnByb2dyYW1FbmdpbmUoKTsiLCJcbmZ1bmN0aW9uIHNhdmVPYmplY3Qob2JqZWN0KXtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeShvYmplY3QpKVxufVxuXG5leHBvcnQge3NhdmVPYmplY3R9XG5cbiIsImNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XG4gIH1cblxuICBkZWxldGVJdGVtKCl7XG5cbiAgfVxuXG4gIGlzRG9uZSgpe1xuXG4gIH1cbn1cblxuZXhwb3J0IHtUb0RvfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==