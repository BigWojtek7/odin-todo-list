"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

body {
  font-family: sans-serif, Helvetica;
  background-color: #e7e5e4
}

header {
  color: #ffffff;
  padding: 30px;
  background-color: #477bff;
  text-align: center;
  font-size: 2rem;
}

.content {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  margin: 30px 50px;
}

div [data-project] {
  color: #477bff;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 3px 4px 3px #bebebe;
  border-radius: 7px;
  line-height: 2em;
}

.title {
  font-size: 1.2rem;
  font-weight: 900;
  display: inline-block;
  
}
.title-expand {
  font-size: 1.5rem;
  font-weight: 900;
}
.description {
  font-size: 0.7rem;
}

ol {
  display: grid;
  grid-auto-flow: column;
}

.add-item #add-button {
  font-size: 3rem;
  margin: 20px 0 0 20px;
  padding: 10px 20px;
  background-color: #477bff;
  color: #ffffff;
  border: none;
}

button {
  font-size: 1rem;
  padding: 5px 10px;
  background-color: #477bff;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

#dialog-expand,
#change-project-dialog {
  font-size: 1.2rem;
  min-width: 500px;
  margin: 0 auto;
  margin-top: 200px;
  background: #f6f6f6;
  padding: 30px;
  line-height: 2em;
}

::backdrop {
  background-image: linear-gradient(#b5b5b5,#ffffff);
  opacity: 0.75;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kCAAkC;EAClC;AACF;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oDAAoD;EACpD,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,+BAA+B;EAC/B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;;AAEvB;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,eAAe;EACf,mBAAmB;AACrB;;AAEA;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,kDAAkD;EAClD,aAAa;AACf","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: sans-serif, Helvetica;\n  background-color: #e7e5e4\n}\n\nheader {\n  color: #ffffff;\n  padding: 30px;\n  background-color: #477bff;\n  text-align: center;\n  font-size: 2rem;\n}\n\n.content {\n  display: grid;\n  gap: 30px;\n  grid-template-columns: repeat(3, minmax(250px, 1fr));\n  margin: 30px 50px;\n}\n\ndiv [data-project] {\n  color: #477bff;\n  padding: 20px;\n  background-color: #ffffff;\n  box-shadow: 3px 4px 3px #bebebe;\n  border-radius: 7px;\n  line-height: 2em;\n}\n\n.title {\n  font-size: 1.2rem;\n  font-weight: 900;\n  display: inline-block;\n  \n}\n.title-expand {\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n.description {\n  font-size: 0.7rem;\n}\n\nol {\n  display: grid;\n  grid-auto-flow: column;\n}\n\n.add-item #add-button {\n  font-size: 3rem;\n  margin: 20px 0 0 20px;\n  padding: 10px 20px;\n  background-color: #477bff;\n  color: #ffffff;\n  border: none;\n}\n\nbutton {\n  font-size: 1rem;\n  padding: 5px 10px;\n  background-color: #477bff;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n}\n\n#dialog-expand,\n#change-project-dialog {\n  font-size: 1.2rem;\n  min-width: 500px;\n  margin: 0 auto;\n  margin-top: 200px;\n  background: #f6f6f6;\n  padding: 30px;\n  line-height: 2em;\n}\n\n::backdrop {\n  background-image: linear-gradient(#b5b5b5,#ffffff);\n  opacity: 0.75;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHandler: () => (/* binding */ displayHandler)
/* harmony export */ });
/* harmony import */ var _save_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-object */ "./src/save-object.js");
/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-class */ "./src/todo-class.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







function displayHandler(){
  const dialog = document.getElementById("add-item");
  const form = document.getElementById("get-book");

  const addButton = document.getElementById("add-button");
  const closeButton = document.getElementById("close-button");

  const divContent = document.querySelector(".content");
  
  


  const updateDisplay = () => {

    const todoArray = (0,_save_object__WEBPACK_IMPORTED_MODULE_0__.loadObject)().getArray();

    if (todoArray[0] === undefined) return

    divContent.textContent = "";
    // todoArray.sort((a , b) => a.project > b.project ? 1 : -1)

    let newDivProject = document.createElement("div");
    newDivProject.dataset.project = todoArray[0].project
    newDivProject.innerHTML = `<p class="title">${todoArray[0].project}</p> <button>&bull;&bull;&bull;</button>`

    todoArray.forEach((el, index) => {
      const newDiv = document.createElement("div");
      // const newButtonExpand = document.createElement("button")
      // newButtonExpand.innerHTML="Expand"
      // newDivProject.appendChild(newButtonExpand);
      console.log(el)

      newDiv.innerHTML = `${el.title} &bull; ${el.description} &bull; ${el.dueDate} 
      <button data-index=${index}>-</button> <button data-expand=${index}>Edit</button>`;
      
      if (newDivProject.dataset.project === el.project){
        newDivProject.appendChild(newDiv);
      } else {
        divContent.appendChild(newDivProject);
        newDivProject = document.createElement("div");
        newDivProject.innerHTML = `<p class="title">${el.project}</p> <button>&bull;&bull;&bull;</button>`
        newDivProject.dataset.project = el.project;
        // newDivProject.appendChild(newButtonExpand);
        newDivProject.appendChild(newDiv);
      }
    });
    divContent.appendChild(newDivProject)
  }

  updateDisplay();

  function clickHandler(e){
    const datasetButton = e.target.dataset.index;
    const datasetDiv = e.target.closest("div").dataset.project;

    const expandButton = e.target.dataset.expand;

    const dialogExpand = document.getElementById("dialog-expand");

    if(datasetButton){
      (0,_save_object__WEBPACK_IMPORTED_MODULE_0__.deleteObject)(datasetButton);
      updateDisplay();
    } else if (expandButton){
      const todoArray = (0,_save_object__WEBPACK_IMPORTED_MODULE_0__.loadObject)().getArray();
      
      const changeProjectDialog = document.getElementById("change-project-dialog");
      const changeProjectForm = document.getElementById("change-project-form");
      const closeProjectButton = document.getElementById("close-project-button");
      changeProjectDialog.showModal();
      changeProjectForm.addEventListener("submit", () =>{
        const changeProjectInput = document.getElementById("change-project-input")

        todoArray[expandButton].project = changeProjectInput.value
        ;(0,_save_object__WEBPACK_IMPORTED_MODULE_0__.saveObject)(todoArray);
        updateDisplay();
        changeProjectDialog.close();
        form.reset();

      })

      closeProjectButton.addEventListener("click", () => changeProjectDialog.close());




      

    } else if(datasetDiv) {
      const todoArray = (0,_save_object__WEBPACK_IMPORTED_MODULE_0__.loadObject)().getArray();
      dialogExpand.innerHTML= "";
      // console.log(todoArray.filter(item => div.dataset.project === item.project));
      console.log(datasetDiv)
      const projectArray = todoArray.filter(item => datasetDiv === item.project)

      const newTitleDiv = document.createElement("div")
      newTitleDiv.classList.add("title-expand")
      newTitleDiv.innerHTML=`<p class="title-expand">${projectArray[0].project}<p>
      <ol class="description"><li>Title</li><li>Description</li><li>DueDate</li><li>Priority</li><li>isDone</li>`
      dialogExpand.appendChild(newTitleDiv);
      console.log("funny", projectArray)
      projectArray.forEach(el => {
        
        const newDiv = document.createElement("div")
        newDiv.innerHTML=`<ol><li>${el.title}</li><li>${el.description}</li>
        <li>${el.dueDate}</li><li>${el.priority}</li><li>${el.isDone}</li></ol>`
        dialogExpand.appendChild(newDiv);
        dialogExpand.showModal();
      });
      const closeExpandButton = document.createElement("button")
      closeExpandButton.innerHTML = "Close"
      dialogExpand.appendChild(closeExpandButton);
      closeExpandButton.addEventListener("click", () => dialogExpand.close());

    }
  }

  divContent.addEventListener("click", clickHandler);
  // const deleteButton = document.querySelectorAll("[data-index]");
  // console.log("1", deleteButton)
  // deleteButton.forEach(button => {
  //   button.addEventListener("click", () => {
  //     deleteObject(button.dataset.index);
  //     updateDisplay();
  //     console.log(button.dataset.index);
  //   });
  // });

  // const dialogExpand = document.querySelector(".dialog-expand")

  // const divProject = document.querySelectorAll("[data-project]");
  // divProject.forEach(div => {
  //   div.addEventListener("click", () => {
  //     const todoArray = loadObject().getArray();
  //     dialogExpand.innerHTML= "";
  //     // console.log(todoArray.filter(item => div.dataset.project === item.project));
  //     const projectArray = todoArray.filter(item => div.dataset.project === item.project)
  //     console.log("funny", projectArray)
  //     projectArray.forEach(el => {
        
  //       const newDiv = document.createElement("div")
  //       newDiv.innerHTML=`${el.project}, ${el.title}, ${el.description}, ${el.dueDate}, ${el.priority}, ${el.isDone},`
  //       dialogExpand.appendChild(newDiv);
  //       dialogExpand.showModal();
  //     });
      
  //   });
    
  // });


  addButton.addEventListener("click", () => {
    dialog.showModal();
  })
  closeButton.addEventListener("click", (e) => dialog.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let project = document.getElementById("project").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value.replace("T", " ");
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const isDone = document.querySelector('input[name="is-done"]:checked').value;

    if(!project) project = undefined;

    let todo = new _todo_class__WEBPACK_IMPORTED_MODULE_1__.ToDo(project, title, description, dueDate, priority, isDone);
    (0,_save_object__WEBPACK_IMPORTED_MODULE_0__.addTodo)(todo);
    form.reset();
    dialog.close();
    updateDisplay()
    // saveObject(todoArray)
    // updateDisplay();
  });
  

  // return {updateDisplay}

}

displayHandler()



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   programEngine: () => (/* binding */ programEngine)
/* harmony export */ });
/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-class */ "./src/todo-class.js");
/* harmony import */ var _save_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save-object */ "./src/save-object.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





console.log("Hello")

function programEngine(item){
  // let input = prompt("title, description, dueDate, priority, isDone").split(",");
  // // (makeup,face,tomorrow,high,not)
  

  item = new _todo_class__WEBPACK_IMPORTED_MODULE_0__.ToDo(...item);
  (0,_save_object__WEBPACK_IMPORTED_MODULE_1__.saveObject)(item);
  const todoArray = (0,_save_object__WEBPACK_IMPORTED_MODULE_1__.loadObject)().getArray();
  return {getArray: (0,_save_object__WEBPACK_IMPORTED_MODULE_1__.loadObject)().getArray()}


}



/***/ }),

/***/ "./src/save-object.js":
/*!****************************!*\
  !*** ./src/save-object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   deleteObject: () => (/* binding */ deleteObject),
/* harmony export */   loadObject: () => (/* binding */ loadObject),
/* harmony export */   saveObject: () => (/* binding */ saveObject)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


function saveObject(todoArray){
  localStorage.clear();
  todoArray.forEach((todo, index) => {
    localStorage.setItem(`${index}`, JSON.stringify(todo));
  });
}



function loadObject(){
  const todoArray = [];
  for (let i = 0; i < localStorage.length; i++) {
    let toDoObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
    todoArray.push(toDoObject);

    // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  // todoArray.sort((a , b) => a.project > b.project ? 1 : -1);

  todoArray.sort((a,b) => a.project.localeCompare(b.project) || a.dueDate < b.dueDate);
  const getArray = () => todoArray;
  return {getArray}
}

function deleteObject(index){
  const todoArray = loadObject().getArray();
  todoArray.splice(index, 1);
  saveObject(todoArray);
  // localStorage.removeItem(key)

}

function addTodo(todo){
  const todoArray = loadObject().getArray();
  todoArray.push(todo)
  saveObject(todoArray)

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
/* harmony import */ var _todo_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-methods */ "./src/todo-methods.js");


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




/***/ }),

/***/ "./src/todo-methods.js":
/*!*****************************!*\
  !*** ./src/todo-methods.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProject: () => (/* binding */ changeProject)
/* harmony export */ });

function Addmethods(object){
  changeProject
}











function changeProject(newProject){
  todo.project = newProject;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOM.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NhdmUtb2JqZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8tY2xhc3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby1tZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEhlbHZldGljYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNFxufVxuXG5oZWFkZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3N2JmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBtYXJnaW46IDMwcHggNTBweDtcbn1cblxuZGl2IFtkYXRhLXByb2plY3RdIHtcbiAgY29sb3I6ICM0NzdiZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggM3B4ICNiZWJlYmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgXG59XG4udGl0bGUtZXhwYW5kIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cblxub2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4uYWRkLWl0ZW0gI2FkZC1idXR0b24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbjogMjBweCAwIDAgMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3YmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3YmZmO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNkaWFsb2ctZXhwYW5kLFxuI2NoYW5nZS1wcm9qZWN0LWRpYWxvZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbjo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2I1YjViNSwjZmZmZmZmKTtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQztBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCOztBQUV2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBIZWx2ZXRpY2E7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWU0XFxufVxcblxcbmhlYWRlciB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3YmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIG1hcmdpbjogMzBweCA1MHB4O1xcbn1cXG5cXG5kaXYgW2RhdGEtcHJvamVjdF0ge1xcbiAgY29sb3I6ICM0NzdiZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6IDNweCA0cHggM3B4ICNiZWJlYmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgXFxufVxcbi50aXRsZS1leHBhbmQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbm9sIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uYWRkLWl0ZW0gI2FkZC1idXR0b24ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3N2JmZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc3YmZmO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jZGlhbG9nLWV4cGFuZCxcXG4jY2hhbmdlLXByb2plY3QtZGlhbG9nIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNiNWI1YjUsI2ZmZmZmZik7XFxuICBvcGFjaXR5OiAwLjc1O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbG9hZE9iamVjdCwgc2F2ZU9iamVjdCwgZGVsZXRlT2JqZWN0LCBhZGRUb2RvIH0gZnJvbSBcIi4vc2F2ZS1vYmplY3RcIjtcbmltcG9ydCB7IFRvRG8gfSBmcm9tIFwiLi90b2RvLWNsYXNzXCI7XG5pbXBvcnQgeyBwcm9ncmFtRW5naW5lIH0gZnJvbSBcIi5cIjtcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gZGlzcGxheUhhbmRsZXIoKXtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtaXRlbVwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0LWJvb2tcIik7XG5cbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtYnV0dG9uXCIpO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIFxuICBcblxuXG4gIGNvbnN0IHVwZGF0ZURpc3BsYXkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCB0b2RvQXJyYXkgPSBsb2FkT2JqZWN0KCkuZ2V0QXJyYXkoKTtcblxuICAgIGlmICh0b2RvQXJyYXlbMF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuXG5cbiAgICBkaXZDb250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAvLyB0b2RvQXJyYXkuc29ydCgoYSAsIGIpID0+IGEucHJvamVjdCA+IGIucHJvamVjdCA/IDEgOiAtMSlcblxuICAgIGxldCBuZXdEaXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdEaXZQcm9qZWN0LmRhdGFzZXQucHJvamVjdCA9IHRvZG9BcnJheVswXS5wcm9qZWN0XG4gICAgbmV3RGl2UHJvamVjdC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7dG9kb0FycmF5WzBdLnByb2plY3R9PC9wPiA8YnV0dG9uPiZidWxsOyZidWxsOyZidWxsOzwvYnV0dG9uPmBcblxuICAgIHRvZG9BcnJheS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAvLyBjb25zdCBuZXdCdXR0b25FeHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAvLyBuZXdCdXR0b25FeHBhbmQuaW5uZXJIVE1MPVwiRXhwYW5kXCJcbiAgICAgIC8vIG5ld0RpdlByb2plY3QuYXBwZW5kQ2hpbGQobmV3QnV0dG9uRXhwYW5kKTtcbiAgICAgIGNvbnNvbGUubG9nKGVsKVxuXG4gICAgICBuZXdEaXYuaW5uZXJIVE1MID0gYCR7ZWwudGl0bGV9ICZidWxsOyAke2VsLmRlc2NyaXB0aW9ufSAmYnVsbDsgJHtlbC5kdWVEYXRlfSBcbiAgICAgIDxidXR0b24gZGF0YS1pbmRleD0ke2luZGV4fT4tPC9idXR0b24+IDxidXR0b24gZGF0YS1leHBhbmQ9JHtpbmRleH0+RWRpdDwvYnV0dG9uPmA7XG4gICAgICBcbiAgICAgIGlmIChuZXdEaXZQcm9qZWN0LmRhdGFzZXQucHJvamVjdCA9PT0gZWwucHJvamVjdCl7XG4gICAgICAgIG5ld0RpdlByb2plY3QuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RGl2UHJvamVjdCk7XG4gICAgICAgIG5ld0RpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuZXdEaXZQcm9qZWN0LmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInRpdGxlXCI+JHtlbC5wcm9qZWN0fTwvcD4gPGJ1dHRvbj4mYnVsbDsmYnVsbDsmYnVsbDs8L2J1dHRvbj5gXG4gICAgICAgIG5ld0RpdlByb2plY3QuZGF0YXNldC5wcm9qZWN0ID0gZWwucHJvamVjdDtcbiAgICAgICAgLy8gbmV3RGl2UHJvamVjdC5hcHBlbmRDaGlsZChuZXdCdXR0b25FeHBhbmQpO1xuICAgICAgICBuZXdEaXZQcm9qZWN0LmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChuZXdEaXZQcm9qZWN0KVxuICB9XG5cbiAgdXBkYXRlRGlzcGxheSgpO1xuXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKXtcbiAgICBjb25zdCBkYXRhc2V0QnV0dG9uID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICBjb25zdCBkYXRhc2V0RGl2ID0gZS50YXJnZXQuY2xvc2VzdChcImRpdlwiKS5kYXRhc2V0LnByb2plY3Q7XG5cbiAgICBjb25zdCBleHBhbmRCdXR0b24gPSBlLnRhcmdldC5kYXRhc2V0LmV4cGFuZDtcblxuICAgIGNvbnN0IGRpYWxvZ0V4cGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlhbG9nLWV4cGFuZFwiKTtcblxuICAgIGlmKGRhdGFzZXRCdXR0b24pe1xuICAgICAgZGVsZXRlT2JqZWN0KGRhdGFzZXRCdXR0b24pO1xuICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIH0gZWxzZSBpZiAoZXhwYW5kQnV0dG9uKXtcbiAgICAgIGNvbnN0IHRvZG9BcnJheSA9IGxvYWRPYmplY3QoKS5nZXRBcnJheSgpO1xuICAgICAgXG4gICAgICBjb25zdCBjaGFuZ2VQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2UtcHJvamVjdC1kaWFsb2dcIik7XG4gICAgICBjb25zdCBjaGFuZ2VQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhbmdlLXByb2plY3QtZm9ybVwiKTtcbiAgICAgIGNvbnN0IGNsb3NlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtcHJvamVjdC1idXR0b25cIik7XG4gICAgICBjaGFuZ2VQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgY2hhbmdlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PntcbiAgICAgICAgY29uc3QgY2hhbmdlUHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2UtcHJvamVjdC1pbnB1dFwiKVxuXG4gICAgICAgIHRvZG9BcnJheVtleHBhbmRCdXR0b25dLnByb2plY3QgPSBjaGFuZ2VQcm9qZWN0SW5wdXQudmFsdWVcbiAgICAgICAgc2F2ZU9iamVjdCh0b2RvQXJyYXkpO1xuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgICAgIGNoYW5nZVByb2plY3REaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICB9KVxuXG4gICAgICBjbG9zZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZVByb2plY3REaWFsb2cuY2xvc2UoKSk7XG5cblxuXG5cbiAgICAgIFxuXG4gICAgfSBlbHNlIGlmKGRhdGFzZXREaXYpIHtcbiAgICAgIGNvbnN0IHRvZG9BcnJheSA9IGxvYWRPYmplY3QoKS5nZXRBcnJheSgpO1xuICAgICAgZGlhbG9nRXhwYW5kLmlubmVySFRNTD0gXCJcIjtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG9BcnJheS5maWx0ZXIoaXRlbSA9PiBkaXYuZGF0YXNldC5wcm9qZWN0ID09PSBpdGVtLnByb2plY3QpKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGFzZXREaXYpXG4gICAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSB0b2RvQXJyYXkuZmlsdGVyKGl0ZW0gPT4gZGF0YXNldERpdiA9PT0gaXRlbS5wcm9qZWN0KVxuXG4gICAgICBjb25zdCBuZXdUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgIG5ld1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1leHBhbmRcIilcbiAgICAgIG5ld1RpdGxlRGl2LmlubmVySFRNTD1gPHAgY2xhc3M9XCJ0aXRsZS1leHBhbmRcIj4ke3Byb2plY3RBcnJheVswXS5wcm9qZWN0fTxwPlxuICAgICAgPG9sIGNsYXNzPVwiZGVzY3JpcHRpb25cIj48bGk+VGl0bGU8L2xpPjxsaT5EZXNjcmlwdGlvbjwvbGk+PGxpPkR1ZURhdGU8L2xpPjxsaT5Qcmlvcml0eTwvbGk+PGxpPmlzRG9uZTwvbGk+YFxuICAgICAgZGlhbG9nRXhwYW5kLmFwcGVuZENoaWxkKG5ld1RpdGxlRGl2KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZnVubnlcIiwgcHJvamVjdEFycmF5KVxuICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goZWwgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBuZXdEaXYuaW5uZXJIVE1MPWA8b2w+PGxpPiR7ZWwudGl0bGV9PC9saT48bGk+JHtlbC5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICA8bGk+JHtlbC5kdWVEYXRlfTwvbGk+PGxpPiR7ZWwucHJpb3JpdHl9PC9saT48bGk+JHtlbC5pc0RvbmV9PC9saT48L29sPmBcbiAgICAgICAgZGlhbG9nRXhwYW5kLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIGRpYWxvZ0V4cGFuZC5zaG93TW9kYWwoKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgY2xvc2VFeHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICBjbG9zZUV4cGFuZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkNsb3NlXCJcbiAgICAgIGRpYWxvZ0V4cGFuZC5hcHBlbmRDaGlsZChjbG9zZUV4cGFuZEJ1dHRvbik7XG4gICAgICBjbG9zZUV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGlhbG9nRXhwYW5kLmNsb3NlKCkpO1xuXG4gICAgfVxuICB9XG5cbiAgZGl2Q29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgLy8gY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWluZGV4XVwiKTtcbiAgLy8gY29uc29sZS5sb2coXCIxXCIsIGRlbGV0ZUJ1dHRvbilcbiAgLy8gZGVsZXRlQnV0dG9uLmZvckVhY2goYnV0dG9uID0+IHtcbiAgLy8gICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gICAgIGRlbGV0ZU9iamVjdChidXR0b24uZGF0YXNldC5pbmRleCk7XG4gIC8vICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhidXR0b24uZGF0YXNldC5pbmRleCk7XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xuXG4gIC8vIGNvbnN0IGRpYWxvZ0V4cGFuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nLWV4cGFuZFwiKVxuXG4gIC8vIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcHJvamVjdF1cIik7XG4gIC8vIGRpdlByb2plY3QuZm9yRWFjaChkaXYgPT4ge1xuICAvLyAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyAgICAgY29uc3QgdG9kb0FycmF5ID0gbG9hZE9iamVjdCgpLmdldEFycmF5KCk7XG4gIC8vICAgICBkaWFsb2dFeHBhbmQuaW5uZXJIVE1MPSBcIlwiO1xuICAvLyAgICAgLy8gY29uc29sZS5sb2codG9kb0FycmF5LmZpbHRlcihpdGVtID0+IGRpdi5kYXRhc2V0LnByb2plY3QgPT09IGl0ZW0ucHJvamVjdCkpO1xuICAvLyAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gdG9kb0FycmF5LmZpbHRlcihpdGVtID0+IGRpdi5kYXRhc2V0LnByb2plY3QgPT09IGl0ZW0ucHJvamVjdClcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiZnVubnlcIiwgcHJvamVjdEFycmF5KVxuICAvLyAgICAgcHJvamVjdEFycmF5LmZvckVhY2goZWwgPT4ge1xuICAgICAgICBcbiAgLy8gICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAvLyAgICAgICBuZXdEaXYuaW5uZXJIVE1MPWAke2VsLnByb2plY3R9LCAke2VsLnRpdGxlfSwgJHtlbC5kZXNjcmlwdGlvbn0sICR7ZWwuZHVlRGF0ZX0sICR7ZWwucHJpb3JpdHl9LCAke2VsLmlzRG9uZX0sYFxuICAvLyAgICAgICBkaWFsb2dFeHBhbmQuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgLy8gICAgICAgZGlhbG9nRXhwYW5kLnNob3dNb2RhbCgpO1xuICAvLyAgICAgfSk7XG4gICAgICBcbiAgLy8gICB9KTtcbiAgICBcbiAgLy8gfSk7XG5cblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gIH0pXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gZGlhbG9nLmNsb3NlKCkpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFwiKS52YWx1ZTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZS1kYXRlXCIpLnZhbHVlLnJlcGxhY2UoXCJUXCIsIFwiIFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gICAgY29uc3QgaXNEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImlzLWRvbmVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXG4gICAgaWYoIXByb2plY3QpIHByb2plY3QgPSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgdG9kbyA9IG5ldyBUb0RvKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSk7XG4gICAgYWRkVG9kbyh0b2RvKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgdXBkYXRlRGlzcGxheSgpXG4gICAgLy8gc2F2ZU9iamVjdCh0b2RvQXJyYXkpXG4gICAgLy8gdXBkYXRlRGlzcGxheSgpO1xuICB9KTtcbiAgXG5cbiAgLy8gcmV0dXJuIHt1cGRhdGVEaXNwbGF5fVxuXG59XG5cbmRpc3BsYXlIYW5kbGVyKClcblxuZXhwb3J0IHtkaXNwbGF5SGFuZGxlcn0iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSBcIi4vdG9kby1jbGFzc1wiO1xuaW1wb3J0IHsgc2F2ZU9iamVjdCwgbG9hZE9iamVjdCB9IGZyb20gXCIuL3NhdmUtb2JqZWN0XCI7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvXCIpXG5cbmZ1bmN0aW9uIHByb2dyYW1FbmdpbmUoaXRlbSl7XG4gIC8vIGxldCBpbnB1dCA9IHByb21wdChcInRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZVwiKS5zcGxpdChcIixcIik7XG4gIC8vIC8vIChtYWtldXAsZmFjZSx0b21vcnJvdyxoaWdoLG5vdClcbiAgXG5cbiAgaXRlbSA9IG5ldyBUb0RvKC4uLml0ZW0pO1xuICBzYXZlT2JqZWN0KGl0ZW0pO1xuICBjb25zdCB0b2RvQXJyYXkgPSBsb2FkT2JqZWN0KCkuZ2V0QXJyYXkoKTtcbiAgcmV0dXJuIHtnZXRBcnJheTogbG9hZE9iamVjdCgpLmdldEFycmF5KCl9XG5cblxufVxuXG5leHBvcnQge3Byb2dyYW1FbmdpbmV9IiwiaW1wb3J0IHsgZGlzcGxheUhhbmRsZXIgfSBmcm9tIFwiLi9ET01cIjtcblxuZnVuY3Rpb24gc2F2ZU9iamVjdCh0b2RvQXJyYXkpe1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgdG9kb0FycmF5LmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7aW5kZXh9YCwgSlNPTi5zdHJpbmdpZnkodG9kbykpO1xuICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIGxvYWRPYmplY3QoKXtcbiAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvRG9PYmplY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICB0b2RvQXJyYXkucHVzaCh0b0RvT2JqZWN0KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpKTtcbiAgfVxuICAvLyB0b2RvQXJyYXkuc29ydCgoYSAsIGIpID0+IGEucHJvamVjdCA+IGIucHJvamVjdCA/IDEgOiAtMSk7XG5cbiAgdG9kb0FycmF5LnNvcnQoKGEsYikgPT4gYS5wcm9qZWN0LmxvY2FsZUNvbXBhcmUoYi5wcm9qZWN0KSB8fCBhLmR1ZURhdGUgPCBiLmR1ZURhdGUpO1xuICBjb25zdCBnZXRBcnJheSA9ICgpID0+IHRvZG9BcnJheTtcbiAgcmV0dXJuIHtnZXRBcnJheX1cbn1cblxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KGluZGV4KXtcbiAgY29uc3QgdG9kb0FycmF5ID0gbG9hZE9iamVjdCgpLmdldEFycmF5KCk7XG4gIHRvZG9BcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICBzYXZlT2JqZWN0KHRvZG9BcnJheSk7XG4gIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcblxufVxuXG5mdW5jdGlvbiBhZGRUb2RvKHRvZG8pe1xuICBjb25zdCB0b2RvQXJyYXkgPSBsb2FkT2JqZWN0KCkuZ2V0QXJyYXkoKTtcbiAgdG9kb0FycmF5LnB1c2godG9kbylcbiAgc2F2ZU9iamVjdCh0b2RvQXJyYXkpXG5cbn1cblxuZXhwb3J0IHtzYXZlT2JqZWN0LCBsb2FkT2JqZWN0LCBkZWxldGVPYmplY3QsIGFkZFRvZG99IiwiaW1wb3J0IHsgY2hhbmdlUHJvamVjdCB9IGZyb20gXCIuL3RvZG8tbWV0aG9kc1wiO1xuXG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IocHJvamVjdCA9IFwiZGVmYXVsdFwiLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgfVxuICBjaGFuZ2VQcm9qZWN0KG5ld1Byb2plY3Qpe1xuICAgIHRoaXMucHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gIH1cblxuXG59XG5cblxuZXhwb3J0IHtUb0RvfSIsIlxuZnVuY3Rpb24gQWRkbWV0aG9kcyhvYmplY3Qpe1xuICBjaGFuZ2VQcm9qZWN0XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChuZXdQcm9qZWN0KXtcbiAgdG9kby5wcm9qZWN0ID0gbmV3UHJvamVjdDtcbn1cblxuZXhwb3J0IHtjaGFuZ2VQcm9qZWN0fSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==