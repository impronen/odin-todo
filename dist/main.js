/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 10vh;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .sidebar {\n    display: flex;\n    flex-direction: column;\n    width: 10vw;\n    height: 90vh;\n  }\n\n  .taskDisplay {\n    display: flex;\n    width: 90vh;\n    height: 90vh;\n  }\n\n  .inputOverlay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #E46C00;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    height: 20vh;\n    width: 60vw;\n    padding: 15px;\n    z-index: 7;\n    position: absolute;\n    font-size: large;\n    margin: 20px;\n  }\n\n\n  .taskCard {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n  }\n\n  .rightTopSideCont {\n    display: flex;\n    flex-direction: row;\n  }", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,uLAAuL;IACvL,YAAY;IACZ,WAAW;IACX,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;EACd;;;EAGA;IACE,aAAa;IACb,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB","sourcesContent":[".header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    height: 10vh;\n  }\n\n  .main {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .sidebar {\n    display: flex;\n    flex-direction: column;\n    width: 10vw;\n    height: 90vh;\n  }\n\n  .taskDisplay {\n    display: flex;\n    width: 90vh;\n    height: 90vh;\n  }\n\n  .inputOverlay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #E46C00;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    height: 20vh;\n    width: 60vw;\n    padding: 15px;\n    z-index: 7;\n    position: absolute;\n    font-size: large;\n    margin: 20px;\n  }\n\n\n  .taskCard {\n    display: flex;\n    flex-direction: row;\n    margin: 20px;\n  }\n\n  .rightTopSideCont {\n    display: flex;\n    flex-direction: row;\n  }"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/components/eventListeners.js":
/*!******************************************!*\
  !*** ./src/components/eventListeners.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToTaskListListener": () => (/* binding */ addToTaskListListener),
/* harmony export */   "logArrayListener": () => (/* binding */ logArrayListener)
/* harmony export */ });
/* harmony import */ var _components_taskController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/taskController */ "./src/components/taskController.js");
/* harmony import */ var _data_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/storage */ "./src/data/storage.js");
/* harmony import */ var _components_taskInputCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/taskInputCreator */ "./src/components/taskInputCreator.js");
/* harmony import */ var _functions_storageLoopers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/storageLoopers */ "./src/functions/storageLoopers.js");






function addToTaskListListener() {
    let buttonListener2 = document.querySelector('#addToTaskList')

    buttonListener2.addEventListener('click', function(){
        let form = document.querySelector('#inputOverlay')
        let name = form.querySelector('input[name="taskName"]').value
        let project = form.querySelector('input[name="projectName"]').value
        let priority = form.querySelector('input[name="priority"]').value
        let date = form.querySelector('input[id="selectedDate"]').value
        let info = form.querySelector('input[name="info"]').value
        
        const newTask1 = new _components_taskController__WEBPACK_IMPORTED_MODULE_0__.newTask(name, project, priority, new Date(`${date}T00:00`), info)
        _data_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.taskStorage.push(newTask1)
        newTask1.isTheDate()
        ;(0,_components_taskInputCreator__WEBPACK_IMPORTED_MODULE_2__.overLayDestroyer)()
    })
}

function logArrayListener() {
    let logArrayBtn = document.querySelector('#logArrayBtn')
    logArrayBtn.addEventListener('click', function () {;(0,_functions_storageLoopers__WEBPACK_IMPORTED_MODULE_3__.looper)(_data_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.taskStorage)})
}



/* buttonListener4.addEventListener('click', function () {
    testi.changeCompletion("X"), 
    console.log(testi)
    })  */



/***/ }),

/***/ "./src/components/taskController.js":
/*!******************************************!*\
  !*** ./src/components/taskController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTask": () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var date_and_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/esm/date-and-time.mjs");


class newProject {
    constructor(project) {
        this.project = project
    }

    getProject() {
        return this.project
    }
    changeProject(x) { //this needs further work once project management is implemented
        return this.project = x
    }
}


class newTask extends newProject {
    constructor(name, project, priority, dueDate, info) {
        super(project)
        this.name = name
        this.priority = priority
        this.dueDate = dueDate
        this.info = info
        this.isCompleted = false
        this.uuid = crypto.randomUUID()
    }
    //Getters
    getName() {
        return this.name
    }
    getDate() {
        return this.dueDate
    }
    getInfo() {
        return this.info
    }
    getCompletion() {
        return this.isCompleted;
    }
    getUuid() {
        return this.uuid
    }
    
    //Changers
    changeName(x) {
        return this.name = x
    }
    changePriority(x) {
        return this.priority = x
    }
    changeDate(x) {
        return this.dueDate = x
    }
    changeInfo(x) {
        return this.info = x
    }
    changeCompletion() {
        if (this.isCompleted === false){
        return this.isCompleted = true;
        } else {
        return this.isCompleted = false; 
        }
    }

    //Other methods
    isTheDate() {
        let today = new Date().getTime()
        let dueDate = this.dueDate
        let difference = dueDate.getTime() - today;
        let days = Math.ceil(difference / (1000 * 3600 * 24));
        console.log(`Task is due in ${days} days.`)
        return days
    }

    projectConnector() {

    }
}


 

/***/ }),

/***/ "./src/components/taskInputCreator.js":
/*!********************************************!*\
  !*** ./src/components/taskInputCreator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overLayDestroyer": () => (/* binding */ overLayDestroyer),
/* harmony export */   "overLayRendered": () => (/* binding */ overLayRendered)
/* harmony export */ });


function overLayRendered () {
    let content = document.querySelector(".taskDisplay")
    let inputOverlay = document.createElement('div')
    inputOverlay.setAttribute('id', 'inputOverlay')
    inputOverlay.className = "inputOverlay"
    content.appendChild(inputOverlay)
    formCreator ()
}

function formCreator () {
    let overlay = document.querySelector("#inputOverlay");

    let form = document.createElement("form");
    form.setAttribute("method", "post");

    let taskName = document.createElement("input");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("name", "taskName");
    taskName.setAttribute("placeholder", "Task");
    
    let projectName = document.createElement("input");
    projectName.setAttribute("type", "text");
    projectName.setAttribute("name", "projectName");
    projectName.setAttribute("placeholder", "Project");

    let priority = document.createElement("input");
    priority.setAttribute("type", "select")
    priority.setAttribute("name", "priority")
    priority.setAttribute("value", "High")
    priority.setAttribute("value", "Normal")
    priority.setAttribute("value", "Low")

    let dueDate = document.createElement('input');
    dueDate.setAttribute("type", "date")
    dueDate.setAttribute("id", "selectedDate")
    
    let info = document.createElement("input");
    info.setAttribute("type", "textarea")
    info.setAttribute("name", "info")
    info.setAttribute("rows", "5")
    info.setAttribute("cols", "30")
    info.setAttribute("placeholder", "Notes")
    
    form.appendChild(taskName)
    form.appendChild(projectName)
    form.appendChild(priority)
    form.appendChild(dueDate)
    form.appendChild(info)

    overlay.appendChild(form)
}

function overLayDestroyer() {
    let overlay = document.querySelector('.inputOverlay')
    overlay.remove()

}



/***/ }),

/***/ "./src/components/uiCreator.js":
/*!*************************************!*\
  !*** ./src/components/uiCreator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskCard": () => (/* binding */ createTaskCard),
/* harmony export */   "createUI": () => (/* binding */ createUI)
/* harmony export */ });
let content = document.querySelector(".content")

function createUI() {
    createHeader()
    createMain()
    createSidebar()
    createTaskDisplay()
}

function createHeader() {
    let header = document.createElement('div');
    header.classList.add('header')
    content.appendChild(header)

    let logo = document.createElement('div');
    logo.innerHTML = `<h1>taskLister</h1>`
    logo.classList.add('headerlogo')
    header.appendChild(logo)

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer')
    header.appendChild(buttonContainer)


    let addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = "New Task"
    addTaskButton.setAttribute('id', 'addTaskButton') 
    addTaskButton.classList.add('buttonstyle1')
    buttonContainer.appendChild(addTaskButton)

    
    let addToTaskList = document.createElement('button');
    addToTaskList.innerHTML = "Add task to list"
    addToTaskList.setAttribute('id', 'addToTaskList')
    addToTaskList.classList.add('buttonstyle1') 
    buttonContainer.appendChild(addToTaskList)
}

function createMain() {
    let main = document.createElement('div');
    main.classList.add('main')
    content.appendChild(main)
}

function createSidebar () {
    let main = document.querySelector(".main")
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar')
    main.appendChild(sidebar)

    let allTasksButton = document.createElement('button');
    allTasksButton.innerHTML = "All tasks"
    allTasksButton.setAttribute('id', 'allTasksButton')
    allTasksButton.classList.add('buttonstyle2')
    sidebar.appendChild(allTasksButton)

    let dueTodayButton = document.createElement('button');
    dueTodayButton.innerHTML = "Due today"
    dueTodayButton.setAttribute('id', 'dueTodayButton')
    dueTodayButton.classList.add('buttonstyle2')
    sidebar.appendChild(dueTodayButton)

    let logArrayBtn = document.createElement('button');
    logArrayBtn.innerHTML = "Log Array"
    logArrayBtn.setAttribute('id', 'logArrayBtn')
    logArrayBtn.classList.add('buttonstyle2') 
    sidebar.appendChild(logArrayBtn)
        

    //Create List for projects that cycles the content from projects on storage array
 }


function createTaskDisplay() {
    let main = document.querySelector(".main")
    let taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay')
    main.appendChild(taskDisplay)
}

function createTaskCard(task)  {
    let taskDisplay = document.querySelector(".taskDisplay")

    let taskCard = document.createElement('div')
    taskCard.classList.add('taskCard')
    taskDisplay.appendChild(taskCard)

    let cardLeftSide = document.createElement('div')
    cardLeftSide.classList.add('cardLeftSide')
    taskCard.appendChild(cardLeftSide)

    let taskName = document.createElement('div')
    taskName.classList.add('taskName')
    taskName.innerHTML = task.getName()
    cardLeftSide.appendChild(taskName)

    let projectName = document.createElement('div')
    projectName.classList.add('projectName')
    projectName.innerHTML = task.getProject()
    cardLeftSide.appendChild(projectName)

    let cardRightSide = document.createElement('div')
    cardRightSide.classList.add('cardRightSide')
    taskCard.appendChild(cardRightSide)

    let rightTopSideCont = document.createElement('div')
    rightTopSideCont.classList.add('rightTopSideCont')
    cardRightSide.appendChild(rightTopSideCont)

    let editButtonCont = document.createElement('div')
    editButtonCont.classList.add('editButtonCont')
    editButtonCont.innerHTML = "Buttons here"
    rightTopSideCont.appendChild(editButtonCont)

    let taskDoneCheckbox = document.createElement('div')
    taskDoneCheckbox.classList.add('taskDoneCheckbox')
    taskDoneCheckbox.innerHTML = `<input type="checkbox" id="taskdone" name="taskdone"><label for="taskdone">Done</label>`
    rightTopSideCont.appendChild(taskDoneCheckbox)

    let rightLowSideCont = document.createElement('div')
    rightLowSideCont.classList.add('rightLowSideCont')
    rightLowSideCont.innerHTML = `Due date: ${task.getDate()}`
    cardRightSide.appendChild(rightLowSideCont)


}




/***/ }),

/***/ "./src/data/storage.js":
/*!*****************************!*\
  !*** ./src/data/storage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
const taskArray = {
    taskStorage: []
}




/***/ }),

/***/ "./src/functions/storageLoopers.js":
/*!*****************************************!*\
  !*** ./src/functions/storageLoopers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "looper": () => (/* binding */ looper)
/* harmony export */ });
function looper(storage) {
    storage.forEach(element => {
        console.log(element)
    });
}



/***/ }),

/***/ "./node_modules/date-and-time/esm/date-and-time.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-and-time/esm/date-and-time.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ date$1)
/* harmony export */ });
/**
 * @preserve date-and-time (c) KNOWLEDGECODE | MIT
 */

var locales = {},
    plugins = {},
    lang = 'en',
    _res = {
        MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        A: ['AM', 'PM']
    },
    _formatter = {
        YYYY: function (d/*, formatString*/) { return ('000' + d.getFullYear()).slice(-4); },
        YY: function (d/*, formatString*/) { return ('0' + d.getFullYear()).slice(-2); },
        Y: function (d/*, formatString*/) { return '' + d.getFullYear(); },
        MMMM: function (d/*, formatString*/) { return this.res.MMMM[d.getMonth()]; },
        MMM: function (d/*, formatString*/) { return this.res.MMM[d.getMonth()]; },
        MM: function (d/*, formatString*/) { return ('0' + (d.getMonth() + 1)).slice(-2); },
        M: function (d/*, formatString*/) { return '' + (d.getMonth() + 1); },
        DD: function (d/*, formatString*/) { return ('0' + d.getDate()).slice(-2); },
        D: function (d/*, formatString*/) { return '' + d.getDate(); },
        HH: function (d/*, formatString*/) { return ('0' + d.getHours()).slice(-2); },
        H: function (d/*, formatString*/) { return '' + d.getHours(); },
        A: function (d/*, formatString*/) { return this.res.A[d.getHours() > 11 | 0]; },
        hh: function (d/*, formatString*/) { return ('0' + (d.getHours() % 12 || 12)).slice(-2); },
        h: function (d/*, formatString*/) { return '' + (d.getHours() % 12 || 12); },
        mm: function (d/*, formatString*/) { return ('0' + d.getMinutes()).slice(-2); },
        m: function (d/*, formatString*/) { return '' + d.getMinutes(); },
        ss: function (d/*, formatString*/) { return ('0' + d.getSeconds()).slice(-2); },
        s: function (d/*, formatString*/) { return '' + d.getSeconds(); },
        SSS: function (d/*, formatString*/) { return ('00' + d.getMilliseconds()).slice(-3); },
        SS: function (d/*, formatString*/) { return ('0' + (d.getMilliseconds() / 10 | 0)).slice(-2); },
        S: function (d/*, formatString*/) { return '' + (d.getMilliseconds() / 100 | 0); },
        dddd: function (d/*, formatString*/) { return this.res.dddd[d.getDay()]; },
        ddd: function (d/*, formatString*/) { return this.res.ddd[d.getDay()]; },
        dd: function (d/*, formatString*/) { return this.res.dd[d.getDay()]; },
        Z: function (d/*, formatString*/) {
            var offset = d.getTimezoneOffset() / 0.6 | 0;
            return (offset > 0 ? '-' : '+') + ('000' + Math.abs(offset - (offset % 100 * 0.4 | 0))).slice(-4);
        },
        ZZ: function (d/*, formatString*/) {
            var offset = d.getTimezoneOffset();
            var mod = Math.abs(offset);
            return (offset > 0 ? '-' : '+') + ('0' + (mod / 60 | 0)).slice(-2) + ':' + ('0' + mod % 60).slice(-2);
        },
        post: function (str) { return str; },
        res: _res
    },
    _parser = {
        YYYY: function (str/*, formatString */) { return this.exec(/^\d{4}/, str); },
        Y: function (str/*, formatString */) { return this.exec(/^\d{1,4}/, str); },
        MMMM: function (str/*, formatString */) {
            var result = this.find(this.res.MMMM, str);
            result.value++;
            return result;
        },
        MMM: function (str/*, formatString */) {
            var result = this.find(this.res.MMM, str);
            result.value++;
            return result;
        },
        MM: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
        M: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
        DD: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
        D: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
        HH: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
        H: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
        A: function (str/*, formatString */) { return this.find(this.res.A, str); },
        hh: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
        h: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
        mm: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
        m: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
        ss: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
        s: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
        SSS: function (str/*, formatString */) { return this.exec(/^\d{1,3}/, str); },
        SS: function (str/*, formatString */) {
            var result = this.exec(/^\d\d?/, str);
            result.value *= 10;
            return result;
        },
        S: function (str/*, formatString */) {
            var result = this.exec(/^\d/, str);
            result.value *= 100;
            return result;
        },
        Z: function (str/*, formatString */) {
            var result = this.exec(/^[\+-]\d{2}[0-5]\d/, str);
            result.value = (result.value / 100 | 0) * -60 - result.value % 100;
            return result;
        },
        ZZ: function (str/*, formatString */) {
            var arr = /^([\+-])(\d{2}):([0-5]\d)/.exec(str) || ['', '', '', ''];
            return { value: 0 - ((arr[1] + arr[2] | 0) * 60 + (arr[1] + arr[3] | 0)), length: arr[0].length };
        },
        h12: function (h, a) { return (h === 12 ? 0 : h) + a * 12; },
        exec: function (re, str) {
            var result = (re.exec(str) || [''])[0];
            return { value: result | 0, length: result.length };
        },
        find: function (array, str) {
            var index = -1, length = 0;

            for (var i = 0, len = array.length, item; i < len; i++) {
                item = array[i];
                if (!str.indexOf(item) && item.length > length) {
                    index = i;
                    length = item.length;
                }
            }
            return { value: index, length: length };
        },
        pre: function (str) { return str; },
        res: _res
    },
    extend = function (base, props, override, res) {
        var obj = {}, key;

        for (key in base) {
            obj[key] = base[key];
        }
        for (key in props || {}) {
            if (!(!!override ^ !!obj[key])) {
                obj[key] = props[key];
            }
        }
        if (res) {
            obj.res = res;
        }
        return obj;
    },
    proto = {
        _formatter: _formatter,
        _parser: _parser
    },
    localized_proto,
    date;

/**
 * Compiling format strings
 * @param {string} formatString - A format string
 * @returns {Array.<string>} A compiled object
 */
proto.compile = function (formatString) {
    var re = /\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g, keys, pattern = [formatString];

    while ((keys = re.exec(formatString))) {
        pattern[pattern.length] = keys[0];
    }
    return pattern;
};

/**
 * Formatting date and time objects (Date -> String)
 * @param {Date} dateObj - A Date object
 * @param {string|Array.<string>} arg - A format string or its compiled object
 * @param {boolean} [utc] - Output as UTC
 * @returns {string} A formatted string
 */
proto.format = function (dateObj, arg, utc) {
    var ctx = this || date, pattern = typeof arg === 'string' ? ctx.compile(arg) : arg,
        offset = dateObj.getTimezoneOffset(),
        d = ctx.addMinutes(dateObj, utc ? offset : 0),
        formatter = ctx._formatter, str = '';

    d.getTimezoneOffset = function () { return utc ? 0 : offset; };
    for (var i = 1, len = pattern.length, token; i < len; i++) {
        token = pattern[i];
        str += formatter[token] ? formatter.post(formatter[token](d, pattern[0])) : token.replace(/\[(.*)]/, '$1');
    }
    return str;
};

/**
 * Pre-parsing date and time strings
 * @param {string} dateString - A date and time string
 * @param {string|Array.<string>} arg - A format string or its compiled object
 * @param {boolean} [utc] - Input as UTC
 * @returns {Object} A pre-parsed result object
 */
proto.preparse = function (dateString, arg) {
    var ctx = this || date, pattern = typeof arg === 'string' ? ctx.compile(arg) : arg,
        dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 },
        comment = /\[(.*)]/, parser = ctx._parser, offset = 0;

    dateString = parser.pre(dateString);
    for (var i = 1, len = pattern.length, token, result; i < len; i++) {
        token = pattern[i];
        if (parser[token]) {
            result = parser[token](dateString.slice(offset), pattern[0]);
            if (!result.length) {
                break;
            }
            offset += result.length;
            dt[result.token || token.charAt(0)] = result.value;
            dt._match++;
        } else if (token === dateString.charAt(offset) || token === ' ') {
            offset++;
        } else if (comment.test(token) && !dateString.slice(offset).indexOf(comment.exec(token)[1])) {
            offset += token.length - 2;
        } else if (token === '...') {
            offset = dateString.length;
            break;
        } else {
            break;
        }
    }
    dt.H = dt.H || parser.h12(dt.h, dt.A);
    dt._index = offset;
    dt._length = dateString.length;
    return dt;
};

/**
 * Parsing of date and time string (String -> Date)
 * @param {string} dateString - A date-time string
 * @param {string|Array.<string>} arg - A format string or its compiled object
 * @param {boolean} [utc] - Input as UTC
 * @returns {Date} A Date object
 */
proto.parse = function (dateString, arg, utc) {
    var ctx = this || date, pattern = typeof arg === 'string' ? ctx.compile(arg) : arg,
        dt = ctx.preparse(dateString, pattern);

    if (ctx.isValid(dt)) {
        dt.M -= dt.Y < 100 ? 22801 : 1; // 22801 = 1900 * 12 + 1
        if (utc || ~ctx._parser.find(pattern, 'ZZ').value) {
            return new Date(Date.UTC(dt.Y, dt.M, dt.D, dt.H, dt.m + dt.Z, dt.s, dt.S));
        }
        return new Date(dt.Y, dt.M, dt.D, dt.H, dt.m, dt.s, dt.S);
    }
    return new Date(NaN);
};

/**
 * Date and time string validation
 * @param {Object|string} arg1 - A pre-parsed result object or a date and time string
 * @param {string|Array.<string>} [arg2] - A format string or its compiled object
 * @returns {boolean} Whether the date and time string is a valid date and time
 */
proto.isValid = function (arg1, arg2) {
    var ctx = this || date, dt = typeof arg1 === 'string' ? ctx.preparse(arg1, arg2) : arg1,
        last = [31, 28 + ctx.isLeapYear(dt.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][dt.M - 1];

    return !(
        dt._index < 1 || dt._length < 1 || dt._index - dt._length || dt._match < 1 ||
        dt.Y < 1 || dt.Y > 9999 || dt.M < 1 || dt.M > 12 || dt.D < 1 || dt.D > last ||
        dt.H < 0 || dt.H > 23 || dt.m < 0 || dt.m > 59 || dt.s < 0 || dt.s > 59 || dt.S < 0 || dt.S > 999 ||
        dt.Z < -840 || dt.Z > 720
    );
};

/**
 * Format transformation of date and time string (String -> String)
 * @param {string} dateString - A date and time string
 * @param {string|Array.<string>} arg1 - A format string or its compiled object before transformation
 * @param {string|Array.<string>} arg2 - A format string or its compiled object after transformation
 * @param {boolean} [utc] - Output as UTC
 * @returns {string} A formatted string
 */
proto.transform = function (dateString, arg1, arg2, utc) {
    const ctx = this || date;
    return ctx.format(ctx.parse(dateString, arg1), arg2, utc);
};

/**
 * Adding years
 * @param {Date} dateObj - A Date object
 * @param {number} years - Number of years to add
 * @returns {Date} The Date object after adding the value
 */
proto.addYears = function (dateObj, years) {
    return (this || date).addMonths(dateObj, years * 12);
};

/**
 * Adding months
 * @param {Date} dateObj - A Date object
 * @param {number} months - Number of months to add
 * @returns {Date} The Date object after adding the value
 */
proto.addMonths = function (dateObj, months) {
    var d = new Date(dateObj.getTime());

    d.setMonth(d.getMonth() + months);
    return d;
};

/**
 * Adding days
 * @param {Date} dateObj - A Date object
 * @param {number} days - Number of days to add
 * @returns {Date} The Date object after adding the value
 */
proto.addDays = function (dateObj, days) {
    var d = new Date(dateObj.getTime());

    d.setDate(d.getDate() + days);
    return d;
};

/**
 * Adding hours
 * @param {Date} dateObj - A Date object
 * @param {number} hours - Number of hours to add
 * @returns {Date} The Date object after adding the value
 */
proto.addHours = function (dateObj, hours) {
    return (this || date).addMinutes(dateObj, hours * 60);
};

/**
 * Adding minutes
 * @param {Date} dateObj - A Date object
 * @param {number} minutes - Number of minutes to add
 * @returns {Date} The Date object after adding the value
 */
proto.addMinutes = function (dateObj, minutes) {
    return (this || date).addSeconds(dateObj, minutes * 60);
};

/**
 * Adding seconds
 * @param {Date} dateObj - A Date object
 * @param {number} seconds - Number of seconds to add
 * @returns {Date} The Date object after adding the value
 */
proto.addSeconds = function (dateObj, seconds) {
    return (this || date).addMilliseconds(dateObj, seconds * 1000);
};

/**
 * Adding milliseconds
 * @param {Date} dateObj - A Date object
 * @param {number} milliseconds - Number of milliseconds to add
 * @returns {Date} The Date object after adding the value
 */
proto.addMilliseconds = function (dateObj, milliseconds) {
    return new Date(dateObj.getTime() + milliseconds);
};

/**
 * Subtracting two dates (date1 - date2)
 * @param {Date} date1 - A Date object
 * @param {Date} date2 - A Date object
 * @returns {Object} The result object of subtracting date2 from date1
 */
proto.subtract = function (date1, date2) {
    var delta = date1.getTime() - date2.getTime();

    return {
        toMilliseconds: function () {
            return delta;
        },
        toSeconds: function () {
            return delta / 1000;
        },
        toMinutes: function () {
            return delta / 60000;
        },
        toHours: function () {
            return delta / 3600000;
        },
        toDays: function () {
            return delta / 86400000;
        }
    };
};

/**
 * Whether a year is a leap year
 * @param {number} y - A year to check
 * @returns {boolean} Whether the year is a leap year
 */
proto.isLeapYear = function (y) {
    return (!(y % 4) && !!(y % 100)) || !(y % 400);
};

/**
 * Comparison of two dates
 * @param {Date} date1 - A Date object
 * @param {Date} date2 - A Date object
 * @returns {boolean} Whether the two dates are the same day (time is ignored)
 */
proto.isSameDay = function (date1, date2) {
    return date1.toDateString() === date2.toDateString();
};

/**
 * Definition of new locale
 * @param {string} code - A language code
 * @param {Function} locale - A locale installer
 * @returns {void}
 */
proto.locale = function (code, locale) {
    if (!locales[code]) {
        locales[code] = locale;
    }
};

/**
 * Definition of new plugin
 * @param {string} name - A plugin name
 * @param {Function} plugin - A plugin installer
 * @returns {void}
 */
proto.plugin = function (name, plugin) {
    if (!plugins[name]) {
        plugins[name] = plugin;
    }
};

localized_proto = extend(proto);
date = extend(proto);

/**
 * Changing locales
 * @param {Function|string} [locale] - A locale installer or language code
 * @returns {string} The current language code
 */
date.locale = function (locale) {
    var install = typeof locale === 'function' ? locale : date.locale[locale];

    if (!install) {
        return lang;
    }
    lang = install(proto);

    var extension = locales[lang] || {};
    var res = extend(_res, extension.res, true);
    var formatter = extend(_formatter, extension.formatter, true, res);
    var parser = extend(_parser, extension.parser, true, res);

    date._formatter = localized_proto._formatter = formatter;
    date._parser = localized_proto._parser = parser;

    for (var plugin in plugins) {
        date.extend(plugins[plugin]);
    }

    return lang;
};

/**
 * Functional extension
 * @param {Object} extension - An extension object
 * @returns {void}
 */
date.extend = function (extension) {
    var res = extend(date._parser.res, extension.res);
    var extender = extension.extender || {};

    date._formatter = extend(date._formatter, extension.formatter, false, res);
    date._parser = extend(date._parser, extension.parser, false, res);

    for (var key in extender) {
        if (!date[key]) {
            date[key] = extender[key];
        }
    }
};

/**
 * Importing plugins
 * @param {Function|string} plugin - A plugin installer or plugin name
 * @returns {void}
 */
date.plugin = function (plugin) {
    var install = typeof plugin === 'function' ? plugin : date.plugin[plugin];

    if (install) {
        date.extend(plugins[install(proto, localized_proto)] || {});
    }
};

var date$1 = date;




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var date_and_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-and-time */ "./node_modules/date-and-time/esm/date-and-time.mjs");
/* harmony import */ var _components_taskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/taskController.js */ "./src/components/taskController.js");
/* harmony import */ var _data_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/storage.js */ "./src/data/storage.js");
/* harmony import */ var _components_taskInputCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/taskInputCreator */ "./src/components/taskInputCreator.js");
/* harmony import */ var _components_uiCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/uiCreator */ "./src/components/uiCreator.js");
/* harmony import */ var _components_eventListeners_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/eventListeners.js */ "./src/components/eventListeners.js");





/* import { looper } from './functions/storageLoopers' */




const testi = new _components_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");

_data_storage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.taskStorage.push(testi)
/* console.log(taskArray) */

;(0,_components_uiCreator__WEBPACK_IMPORTED_MODULE_5__.createUI)()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', _components_taskInputCreator__WEBPACK_IMPORTED_MODULE_4__.overLayRendered)

;(0,_components_eventListeners_js__WEBPACK_IMPORTED_MODULE_6__.addToTaskListListener)()
;(0,_components_eventListeners_js__WEBPACK_IMPORTED_MODULE_6__.logArrayListener)()

;(0,_components_uiCreator__WEBPACK_IMPORTED_MODULE_5__.createTaskCard)(testi) 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNLO0FBQ3dCO0FBQ1o7QUFDb0M7QUFDakYsWUFBWSxTQUFTO0FBQzRDO0FBQ3VCOzs7QUFHeEYsa0JBQWtCLGtFQUFPOztBQUV6Qix3RUFBNkI7QUFDN0I7O0FBRUEsZ0VBQVE7O0FBRVI7QUFDQSx5Q0FBeUMseUVBQWU7O0FBRXhELHFGQUFxQjtBQUNyQixnRkFBZ0I7O0FBRWhCLHNFQUFjLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9ldmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy90YXNrQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy90YXNrSW5wdXRDcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL3VpQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvZGF0YS9zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9mdW5jdGlvbnMvc3RvcmFnZUxvb3BlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtYW5kLXRpbWUvZXNtL2RhdGUtYW5kLXRpbWUubWpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcblxcbiAgLnRhc2tEaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDkwdmg7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5pbnB1dE92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0NkMwMDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB6LWluZGV4OiA3O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gIH1cXG5cXG5cXG4gIC50YXNrQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gIH1cXG5cXG4gIC5yaWdodFRvcFNpZGVDb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdUxBQXVMO0lBQ3ZMLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7O0VBR0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAudGFza0Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTB2aDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcblxcbiAgLmlucHV0T3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2QzAwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHotaW5kZXg6IDc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcblxcbiAgLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJpZ2h0VG9wU2lkZUNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90YXNrQ29udHJvbGxlclwiXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi4vZGF0YS9zdG9yYWdlXCJcbmltcG9ydCB7IG92ZXJMYXlEZXN0cm95ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90YXNrSW5wdXRDcmVhdG9yXCJcbmltcG9ydCB7IGxvb3BlciB9IGZyb20gXCIuLi9mdW5jdGlvbnMvc3RvcmFnZUxvb3BlcnNcIlxuXG5cbmZ1bmN0aW9uIGFkZFRvVGFza0xpc3RMaXN0ZW5lcigpIHtcbiAgICBsZXQgYnV0dG9uTGlzdGVuZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvVGFza0xpc3QnKVxuXG4gICAgYnV0dG9uTGlzdGVuZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRPdmVybGF5JylcbiAgICAgICAgbGV0IG5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0YXNrTmFtZVwiXScpLnZhbHVlXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvamVjdE5hbWVcIl0nKS52YWx1ZVxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICAgICAgIGxldCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInNlbGVjdGVkRGF0ZVwiXScpLnZhbHVlXG4gICAgICAgIGxldCBpbmZvID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW5mb1wiXScpLnZhbHVlXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdUYXNrMSA9IG5ldyBuZXdUYXNrKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBuZXcgRGF0ZShgJHtkYXRlfVQwMDowMGApLCBpbmZvKVxuICAgICAgICB0YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10ucHVzaChuZXdUYXNrMSlcbiAgICAgICAgbmV3VGFzazEuaXNUaGVEYXRlKClcbiAgICAgICAgb3ZlckxheURlc3Ryb3llcigpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbG9nQXJyYXlMaXN0ZW5lcigpIHtcbiAgICBsZXQgbG9nQXJyYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nQXJyYXlCdG4nKVxuICAgIGxvZ0FycmF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge2xvb3Blcih0YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10pfSlcbn1cblxuXG5cbi8qIGJ1dHRvbkxpc3RlbmVyNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0ZXN0aS5jaGFuZ2VDb21wbGV0aW9uKFwiWFwiKSwgXG4gICAgY29uc29sZS5sb2codGVzdGkpXG4gICAgfSkgICovXG5cbmV4cG9ydCB7XG4gICAgYWRkVG9UYXNrTGlzdExpc3RlbmVyLFxuICAgIGxvZ0FycmF5TGlzdGVuZXJcbn0iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tIFwiZGF0ZS1hbmQtdGltZVwiXG5cbmNsYXNzIG5ld1Byb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIH1cblxuICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RcbiAgICB9XG4gICAgY2hhbmdlUHJvamVjdCh4KSB7IC8vdGhpcyBuZWVkcyBmdXJ0aGVyIHdvcmsgb25jZSBwcm9qZWN0IG1hbmFnZW1lbnQgaXMgaW1wbGVtZW50ZWRcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdCA9IHhcbiAgICB9XG59XG5cblxuY2xhc3MgbmV3VGFzayBleHRlbmRzIG5ld1Byb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBpbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb2plY3QpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mb1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy51dWlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgIH1cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mb1xuICAgIH1cbiAgICBnZXRDb21wbGV0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZDtcbiAgICB9XG4gICAgZ2V0VXVpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZFxuICAgIH1cbiAgICBcbiAgICAvL0NoYW5nZXJzXG4gICAgY2hhbmdlTmFtZSh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPSB4XG4gICAgfVxuICAgIGNoYW5nZVByaW9yaXR5KHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHkgPSB4XG4gICAgfVxuICAgIGNoYW5nZURhdGUoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlID0geFxuICAgIH1cbiAgICBjaGFuZ2VJbmZvKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mbyA9IHhcbiAgICB9XG4gICAgY2hhbmdlQ29tcGxldGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQgPT09IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vT3RoZXIgbWV0aG9kc1xuICAgIGlzVGhlRGF0ZSgpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0aGlzLmR1ZURhdGVcbiAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSBkdWVEYXRlLmdldFRpbWUoKSAtIHRvZGF5O1xuICAgICAgICBsZXQgZGF5cyA9IE1hdGguY2VpbChkaWZmZXJlbmNlIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgaXMgZHVlIGluICR7ZGF5c30gZGF5cy5gKVxuICAgICAgICByZXR1cm4gZGF5c1xuICAgIH1cblxuICAgIHByb2plY3RDb25uZWN0b3IoKSB7XG5cbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICBuZXdUYXNrXG59ICIsIlxuXG5mdW5jdGlvbiBvdmVyTGF5UmVuZGVyZWQgKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGlzcGxheVwiKVxuICAgIGxldCBpbnB1dE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGlucHV0T3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0T3ZlcmxheScpXG4gICAgaW5wdXRPdmVybGF5LmNsYXNzTmFtZSA9IFwiaW5wdXRPdmVybGF5XCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0T3ZlcmxheSlcbiAgICBmb3JtQ3JlYXRvciAoKVxufVxuXG5mdW5jdGlvbiBmb3JtQ3JlYXRvciAoKSB7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0T3ZlcmxheVwiKTtcblxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2tcIik7XG4gICAgXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3RcIik7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNlbGVjdFwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTm9ybWFsXCIpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIilcblxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkRGF0ZVwiKVxuICAgIFxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRhcmVhXCIpXG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5mb1wiKVxuICAgIGluZm8uc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIilcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKVxuICAgIGluZm8uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlc1wiKVxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGluZm8pXG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKGZvcm0pXG59XG5cbmZ1bmN0aW9uIG92ZXJMYXlEZXN0cm95ZXIoKSB7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRPdmVybGF5JylcbiAgICBvdmVybGF5LnJlbW92ZSgpXG5cbn1cblxuZXhwb3J0IHtcbiAgICBvdmVyTGF5UmVuZGVyZWQsXG4gICAgb3ZlckxheURlc3Ryb3llclxufSIsImxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVVJKCkge1xuICAgIGNyZWF0ZUhlYWRlcigpXG4gICAgY3JlYXRlTWFpbigpXG4gICAgY3JlYXRlU2lkZWJhcigpXG4gICAgY3JlYXRlVGFza0Rpc3BsYXkoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmlubmVySFRNTCA9IGA8aDE+dGFza0xpc3RlcjwvaDE+YFxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVybG9nbycpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG5cbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcblxuXG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IFRhc2tcIlxuICAgIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uJykgXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25zdHlsZTEnKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKVxuXG4gICAgXG4gICAgbGV0IGFkZFRvVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb1Rhc2tMaXN0LmlubmVySFRNTCA9IFwiQWRkIHRhc2sgdG8gbGlzdFwiXG4gICAgYWRkVG9UYXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRvVGFza0xpc3QnKVxuICAgIGFkZFRvVGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc3R5bGUxJykgXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvVGFza0xpc3QpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhciAoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKVxuXG4gICAgbGV0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWxsVGFza3NCdXR0b24uaW5uZXJIVE1MID0gXCJBbGwgdGFza3NcIlxuICAgIGFsbFRhc2tzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsVGFza3NCdXR0b24nKVxuICAgIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0eWxlMicpXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGxUYXNrc0J1dHRvbilcblxuICAgIGxldCBkdWVUb2RheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGR1ZVRvZGF5QnV0dG9uLmlubmVySFRNTCA9IFwiRHVlIHRvZGF5XCJcbiAgICBkdWVUb2RheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZVRvZGF5QnV0dG9uJylcbiAgICBkdWVUb2RheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25zdHlsZTInKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZHVlVG9kYXlCdXR0b24pXG5cbiAgICBsZXQgbG9nQXJyYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsb2dBcnJheUJ0bi5pbm5lckhUTUwgPSBcIkxvZyBBcnJheVwiXG4gICAgbG9nQXJyYXlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dBcnJheUJ0bicpXG4gICAgbG9nQXJyYXlCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uc3R5bGUyJykgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dBcnJheUJ0bilcbiAgICAgICAgXG5cbiAgICAvL0NyZWF0ZSBMaXN0IGZvciBwcm9qZWN0cyB0aGF0IGN5Y2xlcyB0aGUgY29udGVudCBmcm9tIHByb2plY3RzIG9uIHN0b3JhZ2UgYXJyYXlcbiB9XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBsZXQgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0YXNrRGlzcGxheScpXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzaykgIHtcbiAgICBsZXQgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEaXNwbGF5XCIpXG5cbiAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkJylcbiAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrQ2FyZClcblxuICAgIGxldCBjYXJkTGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNhcmRMZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKCdjYXJkTGVmdFNpZGUnKVxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRMZWZ0U2lkZSlcblxuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFza05hbWUnKVxuICAgIHRhc2tOYW1lLmlubmVySFRNTCA9IHRhc2suZ2V0TmFtZSgpXG4gICAgY2FyZExlZnRTaWRlLmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpXG4gICAgcHJvamVjdE5hbWUuaW5uZXJIVE1MID0gdGFzay5nZXRQcm9qZWN0KClcbiAgICBjYXJkTGVmdFNpZGUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG5cbiAgICBsZXQgY2FyZFJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZFJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdjYXJkUmlnaHRTaWRlJylcbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUmlnaHRTaWRlKVxuXG4gICAgbGV0IHJpZ2h0VG9wU2lkZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHJpZ2h0VG9wU2lkZUNvbnQuY2xhc3NMaXN0LmFkZCgncmlnaHRUb3BTaWRlQ29udCcpXG4gICAgY2FyZFJpZ2h0U2lkZS5hcHBlbmRDaGlsZChyaWdodFRvcFNpZGVDb250KVxuXG4gICAgbGV0IGVkaXRCdXR0b25Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlZGl0QnV0dG9uQ29udC5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uQ29udCcpXG4gICAgZWRpdEJ1dHRvbkNvbnQuaW5uZXJIVE1MID0gXCJCdXR0b25zIGhlcmVcIlxuICAgIHJpZ2h0VG9wU2lkZUNvbnQuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbkNvbnQpXG5cbiAgICBsZXQgdGFza0RvbmVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0RvbmVDaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0YXNrRG9uZUNoZWNrYm94JylcbiAgICB0YXNrRG9uZUNoZWNrYm94LmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrZG9uZVwiIG5hbWU9XCJ0YXNrZG9uZVwiPjxsYWJlbCBmb3I9XCJ0YXNrZG9uZVwiPkRvbmU8L2xhYmVsPmBcbiAgICByaWdodFRvcFNpZGVDb250LmFwcGVuZENoaWxkKHRhc2tEb25lQ2hlY2tib3gpXG5cbiAgICBsZXQgcmlnaHRMb3dTaWRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRMb3dTaWRlQ29udC5jbGFzc0xpc3QuYWRkKCdyaWdodExvd1NpZGVDb250JylcbiAgICByaWdodExvd1NpZGVDb250LmlubmVySFRNTCA9IGBEdWUgZGF0ZTogJHt0YXNrLmdldERhdGUoKX1gXG4gICAgY2FyZFJpZ2h0U2lkZS5hcHBlbmRDaGlsZChyaWdodExvd1NpZGVDb250KVxuXG5cbn1cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVVJLFxuICAgIGNyZWF0ZVRhc2tDYXJkXG59IiwiY29uc3QgdGFza0FycmF5ID0ge1xuICAgIHRhc2tTdG9yYWdlOiBbXVxufVxuXG5cbmV4cG9ydCB7dGFza0FycmF5fSIsImZ1bmN0aW9uIGxvb3BlcihzdG9yYWdlKSB7XG4gICAgc3RvcmFnZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KVxuICAgIH0pO1xufVxuXG5leHBvcnQge1xuICAgIGxvb3BlclxufSIsIi8qKlxuICogQHByZXNlcnZlIGRhdGUtYW5kLXRpbWUgKGMpIEtOT1dMRURHRUNPREUgfCBNSVRcbiAqL1xuXG52YXIgbG9jYWxlcyA9IHt9LFxuICAgIHBsdWdpbnMgPSB7fSxcbiAgICBsYW5nID0gJ2VuJyxcbiAgICBfcmVzID0ge1xuICAgICAgICBNTU1NOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcbiAgICAgICAgTU1NOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICAgICAgIGRkZGQ6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgICAgZGRkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgICBkZDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICAgICAgICBBOiBbJ0FNJywgJ1BNJ11cbiAgICB9LFxuICAgIF9mb3JtYXR0ZXIgPSB7XG4gICAgICAgIFlZWVk6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAwMCcgKyBkLmdldEZ1bGxZZWFyKCkpLnNsaWNlKC00KTsgfSxcbiAgICAgICAgWVk6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXRGdWxsWWVhcigpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIFk6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIGQuZ2V0RnVsbFllYXIoKTsgfSxcbiAgICAgICAgTU1NTTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuIHRoaXMucmVzLk1NTU1bZC5nZXRNb250aCgpXTsgfSxcbiAgICAgICAgTU1NOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuTU1NW2QuZ2V0TW9udGgoKV07IH0sXG4gICAgICAgIE1NOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBNOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyAoZC5nZXRNb250aCgpICsgMSk7IH0sXG4gICAgICAgIEREOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0RGF0ZSgpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIEQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIGQuZ2V0RGF0ZSgpOyB9LFxuICAgICAgICBISDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyBkLmdldEhvdXJzKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgSDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXRIb3VycygpOyB9LFxuICAgICAgICBBOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuQVtkLmdldEhvdXJzKCkgPiAxMSB8IDBdOyB9LFxuICAgICAgICBoaDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyAoZC5nZXRIb3VycygpICUgMTIgfHwgMTIpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIGg6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIChkLmdldEhvdXJzKCkgJSAxMiB8fCAxMik7IH0sXG4gICAgICAgIG1tOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0TWludXRlcygpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIG06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIGQuZ2V0TWludXRlcygpOyB9LFxuICAgICAgICBzczogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyBkLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBzOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyBkLmdldFNlY29uZHMoKTsgfSxcbiAgICAgICAgU1NTOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwMCcgKyBkLmdldE1pbGxpc2Vjb25kcygpKS5zbGljZSgtMyk7IH0sXG4gICAgICAgIFNTOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIChkLmdldE1pbGxpc2Vjb25kcygpIC8gMTAgfCAwKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBTOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyAoZC5nZXRNaWxsaXNlY29uZHMoKSAvIDEwMCB8IDApOyB9LFxuICAgICAgICBkZGRkOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuZGRkZFtkLmdldERheSgpXTsgfSxcbiAgICAgICAgZGRkOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuZGRkW2QuZ2V0RGF5KCldOyB9LFxuICAgICAgICBkZDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuIHRoaXMucmVzLmRkW2QuZ2V0RGF5KCldOyB9LFxuICAgICAgICBaOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDAuNiB8IDA7XG4gICAgICAgICAgICByZXR1cm4gKG9mZnNldCA+IDAgPyAnLScgOiAnKycpICsgKCcwMDAnICsgTWF0aC5hYnMob2Zmc2V0IC0gKG9mZnNldCAlIDEwMCAqIDAuNCB8IDApKSkuc2xpY2UoLTQpO1xuICAgICAgICB9LFxuICAgICAgICBaWjogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBkLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICB2YXIgbW9kID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgICAgICAgICAgIHJldHVybiAob2Zmc2V0ID4gMCA/ICctJyA6ICcrJykgKyAoJzAnICsgKG1vZCAvIDYwIHwgMCkpLnNsaWNlKC0yKSArICc6JyArICgnMCcgKyBtb2QgJSA2MCkuc2xpY2UoLTIpO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0OiBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHI7IH0sXG4gICAgICAgIHJlczogX3Jlc1xuICAgIH0sXG4gICAgX3BhcnNlciA9IHtcbiAgICAgICAgWVlZWTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZHs0fS8sIHN0cik7IH0sXG4gICAgICAgIFk6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGR7MSw0fS8sIHN0cik7IH0sXG4gICAgICAgIE1NTU06IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5maW5kKHRoaXMucmVzLk1NTU0sIHN0cik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUrKztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIE1NTTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZpbmQodGhpcy5yZXMuTU1NLCBzdHIpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlKys7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBNTTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIE06IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgREQ6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBEOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIEhIOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgSDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBBOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5maW5kKHRoaXMucmVzLkEsIHN0cik7IH0sXG4gICAgICAgIGhoOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgaDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBtbTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIG06IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgc3M6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBzOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIFNTUzogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZHsxLDN9Lywgc3RyKTsgfSxcbiAgICAgICAgU1M6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgKj0gMTA7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBTOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZXhlYygvXlxcZC8sIHN0cik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgKj0gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgWjogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmV4ZWMoL15bXFwrLV1cXGR7Mn1bMC01XVxcZC8sIHN0cik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgPSAocmVzdWx0LnZhbHVlIC8gMTAwIHwgMCkgKiAtNjAgLSByZXN1bHQudmFsdWUgJSAxMDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBaWjogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSAvXihbXFwrLV0pKFxcZHsyfSk6KFswLTVdXFxkKS8uZXhlYyhzdHIpIHx8IFsnJywgJycsICcnLCAnJ107XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogMCAtICgoYXJyWzFdICsgYXJyWzJdIHwgMCkgKiA2MCArIChhcnJbMV0gKyBhcnJbM10gfCAwKSksIGxlbmd0aDogYXJyWzBdLmxlbmd0aCB9O1xuICAgICAgICB9LFxuICAgICAgICBoMTI6IGZ1bmN0aW9uIChoLCBhKSB7IHJldHVybiAoaCA9PT0gMTIgPyAwIDogaCkgKyBhICogMTI7IH0sXG4gICAgICAgIGV4ZWM6IGZ1bmN0aW9uIChyZSwgc3RyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gKHJlLmV4ZWMoc3RyKSB8fCBbJyddKVswXTtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHQgfCAwLCBsZW5ndGg6IHJlc3VsdC5sZW5ndGggfTtcbiAgICAgICAgfSxcbiAgICAgICAgZmluZDogZnVuY3Rpb24gKGFycmF5LCBzdHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IC0xLCBsZW5ndGggPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoLCBpdGVtOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gYXJyYXlbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzdHIuaW5kZXhPZihpdGVtKSAmJiBpdGVtLmxlbmd0aCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGl0ZW0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBpbmRleCwgbGVuZ3RoOiBsZW5ndGggfTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlOiBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHI7IH0sXG4gICAgICAgIHJlczogX3Jlc1xuICAgIH0sXG4gICAgZXh0ZW5kID0gZnVuY3Rpb24gKGJhc2UsIHByb3BzLCBvdmVycmlkZSwgcmVzKSB7XG4gICAgICAgIHZhciBvYmogPSB7fSwga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIGJhc2UpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gYmFzZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoa2V5IGluIHByb3BzIHx8IHt9KSB7XG4gICAgICAgICAgICBpZiAoISghIW92ZXJyaWRlIF4gISFvYmpba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgb2JqLnJlcyA9IHJlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgcHJvdG8gPSB7XG4gICAgICAgIF9mb3JtYXR0ZXI6IF9mb3JtYXR0ZXIsXG4gICAgICAgIF9wYXJzZXI6IF9wYXJzZXJcbiAgICB9LFxuICAgIGxvY2FsaXplZF9wcm90byxcbiAgICBkYXRlO1xuXG4vKipcbiAqIENvbXBpbGluZyBmb3JtYXQgc3RyaW5nc1xuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdFN0cmluZyAtIEEgZm9ybWF0IHN0cmluZ1xuICogQHJldHVybnMge0FycmF5LjxzdHJpbmc+fSBBIGNvbXBpbGVkIG9iamVjdFxuICovXG5wcm90by5jb21waWxlID0gZnVuY3Rpb24gKGZvcm1hdFN0cmluZykge1xuICAgIHZhciByZSA9IC9cXFsoW15cXFtcXF1dfFxcW1teXFxbXFxdXSpdKSpdfChbQS1aYS16XSlcXDIrfFxcLnszfXwuL2csIGtleXMsIHBhdHRlcm4gPSBbZm9ybWF0U3RyaW5nXTtcblxuICAgIHdoaWxlICgoa2V5cyA9IHJlLmV4ZWMoZm9ybWF0U3RyaW5nKSkpIHtcbiAgICAgICAgcGF0dGVybltwYXR0ZXJuLmxlbmd0aF0gPSBrZXlzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gcGF0dGVybjtcbn07XG5cbi8qKlxuICogRm9ybWF0dGluZyBkYXRlIGFuZCB0aW1lIG9iamVjdHMgKERhdGUgLT4gU3RyaW5nKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZyAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1dGNdIC0gT3V0cHV0IGFzIFVUQ1xuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nXG4gKi9cbnByb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIChkYXRlT2JqLCBhcmcsIHV0Yykge1xuICAgIHZhciBjdHggPSB0aGlzIHx8IGRhdGUsIHBhdHRlcm4gPSB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyA/IGN0eC5jb21waWxlKGFyZykgOiBhcmcsXG4gICAgICAgIG9mZnNldCA9IGRhdGVPYmouZ2V0VGltZXpvbmVPZmZzZXQoKSxcbiAgICAgICAgZCA9IGN0eC5hZGRNaW51dGVzKGRhdGVPYmosIHV0YyA/IG9mZnNldCA6IDApLFxuICAgICAgICBmb3JtYXR0ZXIgPSBjdHguX2Zvcm1hdHRlciwgc3RyID0gJyc7XG5cbiAgICBkLmdldFRpbWV6b25lT2Zmc2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdXRjID8gMCA6IG9mZnNldDsgfTtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcGF0dGVybi5sZW5ndGgsIHRva2VuOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSBwYXR0ZXJuW2ldO1xuICAgICAgICBzdHIgKz0gZm9ybWF0dGVyW3Rva2VuXSA/IGZvcm1hdHRlci5wb3N0KGZvcm1hdHRlclt0b2tlbl0oZCwgcGF0dGVyblswXSkpIDogdG9rZW4ucmVwbGFjZSgvXFxbKC4qKV0vLCAnJDEnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUHJlLXBhcnNpbmcgZGF0ZSBhbmQgdGltZSBzdHJpbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0cmluZyAtIEEgZGF0ZSBhbmQgdGltZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbdXRjXSAtIElucHV0IGFzIFVUQ1xuICogQHJldHVybnMge09iamVjdH0gQSBwcmUtcGFyc2VkIHJlc3VsdCBvYmplY3RcbiAqL1xucHJvdG8ucHJlcGFyc2UgPSBmdW5jdGlvbiAoZGF0ZVN0cmluZywgYXJnKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMgfHwgZGF0ZSwgcGF0dGVybiA9IHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnID8gY3R4LmNvbXBpbGUoYXJnKSA6IGFyZyxcbiAgICAgICAgZHQgPSB7IFk6IDE5NzAsIE06IDEsIEQ6IDEsIEg6IDAsIEE6IDAsIGg6IDAsIG06IDAsIHM6IDAsIFM6IDAsIFo6IDAsIF9pbmRleDogMCwgX2xlbmd0aDogMCwgX21hdGNoOiAwIH0sXG4gICAgICAgIGNvbW1lbnQgPSAvXFxbKC4qKV0vLCBwYXJzZXIgPSBjdHguX3BhcnNlciwgb2Zmc2V0ID0gMDtcblxuICAgIGRhdGVTdHJpbmcgPSBwYXJzZXIucHJlKGRhdGVTdHJpbmcpO1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aCwgdG9rZW4sIHJlc3VsdDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRva2VuID0gcGF0dGVybltpXTtcbiAgICAgICAgaWYgKHBhcnNlclt0b2tlbl0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHBhcnNlclt0b2tlbl0oZGF0ZVN0cmluZy5zbGljZShvZmZzZXQpLCBwYXR0ZXJuWzBdKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ICs9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICBkdFtyZXN1bHQudG9rZW4gfHwgdG9rZW4uY2hhckF0KDApXSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgICAgIGR0Ll9tYXRjaCsrO1xuICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSBkYXRlU3RyaW5nLmNoYXJBdChvZmZzZXQpIHx8IHRva2VuID09PSAnICcpIHtcbiAgICAgICAgICAgIG9mZnNldCsrO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbW1lbnQudGVzdCh0b2tlbikgJiYgIWRhdGVTdHJpbmcuc2xpY2Uob2Zmc2V0KS5pbmRleE9mKGNvbW1lbnQuZXhlYyh0b2tlbilbMV0pKSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gdG9rZW4ubGVuZ3RoIC0gMjtcbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJy4uLicpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IGRhdGVTdHJpbmcubGVuZ3RoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBkdC5IID0gZHQuSCB8fCBwYXJzZXIuaDEyKGR0LmgsIGR0LkEpO1xuICAgIGR0Ll9pbmRleCA9IG9mZnNldDtcbiAgICBkdC5fbGVuZ3RoID0gZGF0ZVN0cmluZy5sZW5ndGg7XG4gICAgcmV0dXJuIGR0O1xufTtcblxuLyoqXG4gKiBQYXJzaW5nIG9mIGRhdGUgYW5kIHRpbWUgc3RyaW5nIChTdHJpbmcgLT4gRGF0ZSlcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIC0gQSBkYXRlLXRpbWUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gYXJnIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3V0Y10gLSBJbnB1dCBhcyBVVENcbiAqIEByZXR1cm5zIHtEYXRlfSBBIERhdGUgb2JqZWN0XG4gKi9cbnByb3RvLnBhcnNlID0gZnVuY3Rpb24gKGRhdGVTdHJpbmcsIGFyZywgdXRjKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMgfHwgZGF0ZSwgcGF0dGVybiA9IHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnID8gY3R4LmNvbXBpbGUoYXJnKSA6IGFyZyxcbiAgICAgICAgZHQgPSBjdHgucHJlcGFyc2UoZGF0ZVN0cmluZywgcGF0dGVybik7XG5cbiAgICBpZiAoY3R4LmlzVmFsaWQoZHQpKSB7XG4gICAgICAgIGR0Lk0gLT0gZHQuWSA8IDEwMCA/IDIyODAxIDogMTsgLy8gMjI4MDEgPSAxOTAwICogMTIgKyAxXG4gICAgICAgIGlmICh1dGMgfHwgfmN0eC5fcGFyc2VyLmZpbmQocGF0dGVybiwgJ1paJykudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyhkdC5ZLCBkdC5NLCBkdC5ELCBkdC5ILCBkdC5tICsgZHQuWiwgZHQucywgZHQuUykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkdC5ZLCBkdC5NLCBkdC5ELCBkdC5ILCBkdC5tLCBkdC5zLCBkdC5TKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG59O1xuXG4vKipcbiAqIERhdGUgYW5kIHRpbWUgc3RyaW5nIHZhbGlkYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gYXJnMSAtIEEgcHJlLXBhcnNlZCByZXN1bHQgb2JqZWN0IG9yIGEgZGF0ZSBhbmQgdGltZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBbYXJnMl0gLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGRhdGUgYW5kIHRpbWUgc3RyaW5nIGlzIGEgdmFsaWQgZGF0ZSBhbmQgdGltZVxuICovXG5wcm90by5pc1ZhbGlkID0gZnVuY3Rpb24gKGFyZzEsIGFyZzIpIHtcbiAgICB2YXIgY3R4ID0gdGhpcyB8fCBkYXRlLCBkdCA9IHR5cGVvZiBhcmcxID09PSAnc3RyaW5nJyA/IGN0eC5wcmVwYXJzZShhcmcxLCBhcmcyKSA6IGFyZzEsXG4gICAgICAgIGxhc3QgPSBbMzEsIDI4ICsgY3R4LmlzTGVhcFllYXIoZHQuWSkgfCAwLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bZHQuTSAtIDFdO1xuXG4gICAgcmV0dXJuICEoXG4gICAgICAgIGR0Ll9pbmRleCA8IDEgfHwgZHQuX2xlbmd0aCA8IDEgfHwgZHQuX2luZGV4IC0gZHQuX2xlbmd0aCB8fCBkdC5fbWF0Y2ggPCAxIHx8XG4gICAgICAgIGR0LlkgPCAxIHx8IGR0LlkgPiA5OTk5IHx8IGR0Lk0gPCAxIHx8IGR0Lk0gPiAxMiB8fCBkdC5EIDwgMSB8fCBkdC5EID4gbGFzdCB8fFxuICAgICAgICBkdC5IIDwgMCB8fCBkdC5IID4gMjMgfHwgZHQubSA8IDAgfHwgZHQubSA+IDU5IHx8IGR0LnMgPCAwIHx8IGR0LnMgPiA1OSB8fCBkdC5TIDwgMCB8fCBkdC5TID4gOTk5IHx8XG4gICAgICAgIGR0LlogPCAtODQwIHx8IGR0LlogPiA3MjBcbiAgICApO1xufTtcblxuLyoqXG4gKiBGb3JtYXQgdHJhbnNmb3JtYXRpb24gb2YgZGF0ZSBhbmQgdGltZSBzdHJpbmcgKFN0cmluZyAtPiBTdHJpbmcpXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0cmluZyAtIEEgZGF0ZSBhbmQgdGltZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcxIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3QgYmVmb3JlIHRyYW5zZm9ybWF0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gYXJnMiAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0IGFmdGVyIHRyYW5zZm9ybWF0aW9uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1dGNdIC0gT3V0cHV0IGFzIFVUQ1xuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nXG4gKi9cbnByb3RvLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChkYXRlU3RyaW5nLCBhcmcxLCBhcmcyLCB1dGMpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzIHx8IGRhdGU7XG4gICAgcmV0dXJuIGN0eC5mb3JtYXQoY3R4LnBhcnNlKGRhdGVTdHJpbmcsIGFyZzEpLCBhcmcyLCB1dGMpO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgeWVhcnNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSB5ZWFycyAtIE51bWJlciBvZiB5ZWFycyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRZZWFycyA9IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFycykge1xuICAgIHJldHVybiAodGhpcyB8fCBkYXRlKS5hZGRNb250aHMoZGF0ZU9iaiwgeWVhcnMgKiAxMik7XG59O1xuXG4vKipcbiAqIEFkZGluZyBtb250aHNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtb250aHMgLSBOdW1iZXIgb2YgbW9udGhzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZE1vbnRocyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aHMpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0VGltZSgpKTtcblxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgbW9udGhzKTtcbiAgICByZXR1cm4gZDtcbn07XG5cbi8qKlxuICogQWRkaW5nIGRheXNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXlzIC0gTnVtYmVyIG9mIGRheXMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXlzKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlT2JqLmdldFRpbWUoKSk7XG5cbiAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyBkYXlzKTtcbiAgICByZXR1cm4gZDtcbn07XG5cbi8qKlxuICogQWRkaW5nIGhvdXJzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gaG91cnMgLSBOdW1iZXIgb2YgaG91cnMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkSG91cnMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cnMpIHtcbiAgICByZXR1cm4gKHRoaXMgfHwgZGF0ZSkuYWRkTWludXRlcyhkYXRlT2JqLCBob3VycyAqIDYwKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIG1pbnV0ZXNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW51dGVzIC0gTnVtYmVyIG9mIG1pbnV0ZXMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkTWludXRlcyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBtaW51dGVzKSB7XG4gICAgcmV0dXJuICh0aGlzIHx8IGRhdGUpLmFkZFNlY29uZHMoZGF0ZU9iaiwgbWludXRlcyAqIDYwKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIHNlY29uZHNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gTnVtYmVyIG9mIHNlY29uZHMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkU2Vjb25kcyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XG4gICAgcmV0dXJuICh0aGlzIHx8IGRhdGUpLmFkZE1pbGxpc2Vjb25kcyhkYXRlT2JqLCBzZWNvbmRzICogMTAwMCk7XG59O1xuXG4vKipcbiAqIEFkZGluZyBtaWxsaXNlY29uZHNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgLSBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZE1pbGxpc2Vjb25kcyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBtaWxsaXNlY29uZHMpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZU9iai5nZXRUaW1lKCkgKyBtaWxsaXNlY29uZHMpO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdGluZyB0d28gZGF0ZXMgKGRhdGUxIC0gZGF0ZTIpXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUxIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtEYXRlfSBkYXRlMiAtIEEgRGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHQgb2JqZWN0IG9mIHN1YnRyYWN0aW5nIGRhdGUyIGZyb20gZGF0ZTFcbiAqL1xucHJvdG8uc3VidHJhY3QgPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyKSB7XG4gICAgdmFyIGRlbHRhID0gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9NaWxsaXNlY29uZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9TZWNvbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGEgLyAxMDAwO1xuICAgICAgICB9LFxuICAgICAgICB0b01pbnV0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YSAvIDYwMDAwO1xuICAgICAgICB9LFxuICAgICAgICB0b0hvdXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGEgLyAzNjAwMDAwO1xuICAgICAgICB9LFxuICAgICAgICB0b0RheXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YSAvIDg2NDAwMDAwO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qKlxuICogV2hldGhlciBhIHllYXIgaXMgYSBsZWFwIHllYXJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gQSB5ZWFyIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgeWVhciBpcyBhIGxlYXAgeWVhclxuICovXG5wcm90by5pc0xlYXBZZWFyID0gZnVuY3Rpb24gKHkpIHtcbiAgICByZXR1cm4gKCEoeSAlIDQpICYmICEhKHkgJSAxMDApKSB8fCAhKHkgJSA0MDApO1xufTtcblxuLyoqXG4gKiBDb21wYXJpc29uIG9mIHR3byBkYXRlc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlMSAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTIgLSBBIERhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgdHdvIGRhdGVzIGFyZSB0aGUgc2FtZSBkYXkgKHRpbWUgaXMgaWdub3JlZClcbiAqL1xucHJvdG8uaXNTYW1lRGF5ID0gZnVuY3Rpb24gKGRhdGUxLCBkYXRlMikge1xuICAgIHJldHVybiBkYXRlMS50b0RhdGVTdHJpbmcoKSA9PT0gZGF0ZTIudG9EYXRlU3RyaW5nKCk7XG59O1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgbmV3IGxvY2FsZVxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgLSBBIGxhbmd1YWdlIGNvZGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxvY2FsZSAtIEEgbG9jYWxlIGluc3RhbGxlclxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbnByb3RvLmxvY2FsZSA9IGZ1bmN0aW9uIChjb2RlLCBsb2NhbGUpIHtcbiAgICBpZiAoIWxvY2FsZXNbY29kZV0pIHtcbiAgICAgICAgbG9jYWxlc1tjb2RlXSA9IGxvY2FsZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgbmV3IHBsdWdpblxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBBIHBsdWdpbiBuYW1lXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwbHVnaW4gLSBBIHBsdWdpbiBpbnN0YWxsZXJcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5wcm90by5wbHVnaW4gPSBmdW5jdGlvbiAobmFtZSwgcGx1Z2luKSB7XG4gICAgaWYgKCFwbHVnaW5zW25hbWVdKSB7XG4gICAgICAgIHBsdWdpbnNbbmFtZV0gPSBwbHVnaW47XG4gICAgfVxufTtcblxubG9jYWxpemVkX3Byb3RvID0gZXh0ZW5kKHByb3RvKTtcbmRhdGUgPSBleHRlbmQocHJvdG8pO1xuXG4vKipcbiAqIENoYW5naW5nIGxvY2FsZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb258c3RyaW5nfSBbbG9jYWxlXSAtIEEgbG9jYWxlIGluc3RhbGxlciBvciBsYW5ndWFnZSBjb2RlXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCBsYW5ndWFnZSBjb2RlXG4gKi9cbmRhdGUubG9jYWxlID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIHZhciBpbnN0YWxsID0gdHlwZW9mIGxvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGxvY2FsZSA6IGRhdGUubG9jYWxlW2xvY2FsZV07XG5cbiAgICBpZiAoIWluc3RhbGwpIHtcbiAgICAgICAgcmV0dXJuIGxhbmc7XG4gICAgfVxuICAgIGxhbmcgPSBpbnN0YWxsKHByb3RvKTtcblxuICAgIHZhciBleHRlbnNpb24gPSBsb2NhbGVzW2xhbmddIHx8IHt9O1xuICAgIHZhciByZXMgPSBleHRlbmQoX3JlcywgZXh0ZW5zaW9uLnJlcywgdHJ1ZSk7XG4gICAgdmFyIGZvcm1hdHRlciA9IGV4dGVuZChfZm9ybWF0dGVyLCBleHRlbnNpb24uZm9ybWF0dGVyLCB0cnVlLCByZXMpO1xuICAgIHZhciBwYXJzZXIgPSBleHRlbmQoX3BhcnNlciwgZXh0ZW5zaW9uLnBhcnNlciwgdHJ1ZSwgcmVzKTtcblxuICAgIGRhdGUuX2Zvcm1hdHRlciA9IGxvY2FsaXplZF9wcm90by5fZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICAgIGRhdGUuX3BhcnNlciA9IGxvY2FsaXplZF9wcm90by5fcGFyc2VyID0gcGFyc2VyO1xuXG4gICAgZm9yICh2YXIgcGx1Z2luIGluIHBsdWdpbnMpIHtcbiAgICAgICAgZGF0ZS5leHRlbmQocGx1Z2luc1twbHVnaW5dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFuZztcbn07XG5cbi8qKlxuICogRnVuY3Rpb25hbCBleHRlbnNpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBleHRlbnNpb24gLSBBbiBleHRlbnNpb24gb2JqZWN0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZGF0ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5zaW9uKSB7XG4gICAgdmFyIHJlcyA9IGV4dGVuZChkYXRlLl9wYXJzZXIucmVzLCBleHRlbnNpb24ucmVzKTtcbiAgICB2YXIgZXh0ZW5kZXIgPSBleHRlbnNpb24uZXh0ZW5kZXIgfHwge307XG5cbiAgICBkYXRlLl9mb3JtYXR0ZXIgPSBleHRlbmQoZGF0ZS5fZm9ybWF0dGVyLCBleHRlbnNpb24uZm9ybWF0dGVyLCBmYWxzZSwgcmVzKTtcbiAgICBkYXRlLl9wYXJzZXIgPSBleHRlbmQoZGF0ZS5fcGFyc2VyLCBleHRlbnNpb24ucGFyc2VyLCBmYWxzZSwgcmVzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBleHRlbmRlcikge1xuICAgICAgICBpZiAoIWRhdGVba2V5XSkge1xuICAgICAgICAgICAgZGF0ZVtrZXldID0gZXh0ZW5kZXJba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogSW1wb3J0aW5nIHBsdWdpbnNcbiAqIEBwYXJhbSB7RnVuY3Rpb258c3RyaW5nfSBwbHVnaW4gLSBBIHBsdWdpbiBpbnN0YWxsZXIgb3IgcGx1Z2luIG5hbWVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5kYXRlLnBsdWdpbiA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgaW5zdGFsbCA9IHR5cGVvZiBwbHVnaW4gPT09ICdmdW5jdGlvbicgPyBwbHVnaW4gOiBkYXRlLnBsdWdpbltwbHVnaW5dO1xuXG4gICAgaWYgKGluc3RhbGwpIHtcbiAgICAgICAgZGF0ZS5leHRlbmQocGx1Z2luc1tpbnN0YWxsKHByb3RvLCBsb2NhbGl6ZWRfcHJvdG8pXSB8fCB7fSk7XG4gICAgfVxufTtcblxudmFyIGRhdGUkMSA9IGRhdGU7XG5cbmV4cG9ydCB7IGRhdGUkMSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGF0ZSBmcm9tICdkYXRlLWFuZC10aW1lJztcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFza0NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSAnLi9kYXRhL3N0b3JhZ2UuanMnXG5pbXBvcnQgeyBvdmVyTGF5UmVuZGVyZWQsIG92ZXJMYXlEZXN0cm95ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFza0lucHV0Q3JlYXRvcidcbi8qIGltcG9ydCB7IGxvb3BlciB9IGZyb20gJy4vZnVuY3Rpb25zL3N0b3JhZ2VMb29wZXJzJyAqL1xuaW1wb3J0IHsgY3JlYXRlVUksIGNyZWF0ZVRhc2tDYXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL3VpQ3JlYXRvcidcbmltcG9ydCB7IGFkZFRvVGFza0xpc3RMaXN0ZW5lciwgbG9nQXJyYXlMaXN0ZW5lciB9IGZyb20gJy4vY29tcG9uZW50cy9ldmVudExpc3RlbmVycy5qcydcblxuXG5jb25zdCB0ZXN0aSA9IG5ldyBuZXdUYXNrKFwiVGVzdCBUYXNrXCIsIFwiUHJvamVjdFwiLCBcIkltcG9ydGFudFwiLCBcIjIwMjMtMDEtMjdcIiwgXCJEbyBpdCB5YSBnaXRcIik7XG5cbnRhc2tBcnJheVsndGFza1N0b3JhZ2UnXS5wdXNoKHRlc3RpKVxuLyogY29uc29sZS5sb2codGFza0FycmF5KSAqL1xuXG5jcmVhdGVVSSgpXG5cbmxldCBidXR0b25MaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrQnV0dG9uJylcbmJ1dHRvbkxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3ZlckxheVJlbmRlcmVkKVxuXG5hZGRUb1Rhc2tMaXN0TGlzdGVuZXIoKVxubG9nQXJyYXlMaXN0ZW5lcigpXG5cbmNyZWF0ZVRhc2tDYXJkKHRlc3RpKSAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=