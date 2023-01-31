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

/***/ "./src/components/controller/eventListeners.js":
/*!*****************************************************!*\
  !*** ./src/components/controller/eventListeners.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToTaskListListener": () => (/* binding */ addToTaskListListener),
/* harmony export */   "logArrayListener": () => (/* binding */ logArrayListener)
/* harmony export */ });
/* harmony import */ var _model_taskController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/taskController */ "./src/components/model/taskController.js");
/* harmony import */ var _data_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/storage */ "./src/data/storage.js");
/* harmony import */ var _view_taskInputCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/taskInputCreator */ "./src/components/view/taskInputCreator.js");
/* harmony import */ var _functions_storageLoopers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/storageLoopers */ "./src/functions/storageLoopers.js");






function addToTaskListListener() {
    let buttonListener2 = document.querySelector('#addToTaskList')

    buttonListener2.addEventListener('click', function(){
        let form = document.querySelector('#inputOverlay')
        let name = form.querySelector('input[name="taskName"]').value
        let project = form.querySelector('input[name="projectName"]').value
        let priority = form.querySelector('input[name="priority"]').value
        let date = form.querySelector('input[id="selectedDate"]').value
        let info = form.querySelector('input[name="info"]').value
        
        const newTask1 = new _model_taskController__WEBPACK_IMPORTED_MODULE_0__.newTask(name, project, priority, new Date(`${date}T00:00`), info)
        _data_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.taskStorage.push(newTask1)
        newTask1.isTheDate()
        ;(0,_view_taskInputCreator__WEBPACK_IMPORTED_MODULE_2__.overLayDestroyer)()
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

/***/ "./src/components/model/taskController.js":
/*!************************************************!*\
  !*** ./src/components/model/taskController.js ***!
  \************************************************/
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

/***/ "./src/components/view/taskInputCreator.js":
/*!*************************************************!*\
  !*** ./src/components/view/taskInputCreator.js ***!
  \*************************************************/
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

/***/ "./src/components/view/uiCreator.js":
/*!******************************************!*\
  !*** ./src/components/view/uiCreator.js ***!
  \******************************************/
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
/* harmony export */   "looper": () => (/* binding */ looper),
/* harmony export */   "objectLooper": () => (/* binding */ objectLooper)
/* harmony export */ });
/* harmony import */ var _components_view_uiCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/view/uiCreator */ "./src/components/view/uiCreator.js");


function looper(storage) {
    storage.forEach(element => {
        console.log(element)
    });
}

function objectLooper(storageArray) {
    storageArray.forEach(task => (0,_components_view_uiCreator__WEBPACK_IMPORTED_MODULE_0__.createTaskCard)(task))
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
/* harmony import */ var _components_model_taskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/model/taskController.js */ "./src/components/model/taskController.js");
/* harmony import */ var _data_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/storage.js */ "./src/data/storage.js");
/* harmony import */ var _components_view_taskInputCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view/taskInputCreator */ "./src/components/view/taskInputCreator.js");
/* harmony import */ var _functions_storageLoopers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/storageLoopers */ "./src/functions/storageLoopers.js");
/* harmony import */ var _components_view_uiCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view/uiCreator */ "./src/components/view/uiCreator.js");
/* harmony import */ var _components_controller_eventListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/controller/eventListeners */ "./src/components/controller/eventListeners.js");










const testi = new _components_model_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");
const test2 = new _components_model_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask("Toinen", "Project", "Important", "2023-01-27", "Do it ya git");
_data_storage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.taskStorage.push(testi)
_data_storage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.taskStorage.push(test2)


;(0,_components_view_uiCreator__WEBPACK_IMPORTED_MODULE_6__.createUI)()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', _components_view_taskInputCreator__WEBPACK_IMPORTED_MODULE_4__.overLayRendered)

;(0,_functions_storageLoopers__WEBPACK_IMPORTED_MODULE_5__.objectLooper)(_data_storage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.taskStorage)

;(0,_components_controller_eventListeners__WEBPACK_IMPORTED_MODULE_7__.addToTaskListListener)()
;(0,_components_controller_eventListeners__WEBPACK_IMPORTED_MODULE_7__.logArrayListener)()

/* createTaskCard(testi)  */
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFLQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDSztBQUM4QjtBQUNsQjtBQUN5QztBQUM3QjtBQUNhO0FBQzBCOzs7QUFHaEcsa0JBQWtCLHdFQUFPO0FBQ3pCLGtCQUFrQix3RUFBTztBQUN6Qix3RUFBNkI7QUFDN0Isd0VBQTZCOzs7QUFHN0IscUVBQVE7O0FBRVI7QUFDQSx5Q0FBeUMsOEVBQWU7O0FBRXhELHdFQUFZLENBQUMsbUVBQXdCOztBQUVyQyw2RkFBcUI7QUFDckIsd0ZBQWdCOztBQUVoQiw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvZXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvdmlldy90YXNrSW5wdXRDcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdWlDcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kYXRhL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Z1bmN0aW9ucy9zdG9yYWdlTG9vcGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1hbmQtdGltZS9lc20vZGF0ZS1hbmQtdGltZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAudGFza0Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTB2aDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcblxcbiAgLmlucHV0T3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2QzAwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHotaW5kZXg6IDc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcblxcbiAgLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJpZ2h0VG9wU2lkZUNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix1TEFBdUw7SUFDdkwsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC50YXNrRGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MHZoO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAuaW5wdXRPdmVybGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDZDMDA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgei1pbmRleDogNztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICB9XFxuXFxuXFxuICAudGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICB9XFxuXFxuICAucmlnaHRUb3BTaWRlQ29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuLi9tb2RlbC90YXNrQ29udHJvbGxlclwiXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi4vLi4vZGF0YS9zdG9yYWdlXCJcbmltcG9ydCB7IG92ZXJMYXlEZXN0cm95ZXIgfSBmcm9tIFwiLi4vdmlldy90YXNrSW5wdXRDcmVhdG9yXCJcbmltcG9ydCB7IGxvb3BlciB9IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvc3RvcmFnZUxvb3BlcnNcIlxuXG5cbmZ1bmN0aW9uIGFkZFRvVGFza0xpc3RMaXN0ZW5lcigpIHtcbiAgICBsZXQgYnV0dG9uTGlzdGVuZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvVGFza0xpc3QnKVxuXG4gICAgYnV0dG9uTGlzdGVuZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRPdmVybGF5JylcbiAgICAgICAgbGV0IG5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0YXNrTmFtZVwiXScpLnZhbHVlXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJvamVjdE5hbWVcIl0nKS52YWx1ZVxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICAgICAgIGxldCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cInNlbGVjdGVkRGF0ZVwiXScpLnZhbHVlXG4gICAgICAgIGxldCBpbmZvID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW5mb1wiXScpLnZhbHVlXG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdUYXNrMSA9IG5ldyBuZXdUYXNrKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBuZXcgRGF0ZShgJHtkYXRlfVQwMDowMGApLCBpbmZvKVxuICAgICAgICB0YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10ucHVzaChuZXdUYXNrMSlcbiAgICAgICAgbmV3VGFzazEuaXNUaGVEYXRlKClcbiAgICAgICAgb3ZlckxheURlc3Ryb3llcigpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbG9nQXJyYXlMaXN0ZW5lcigpIHtcbiAgICBsZXQgbG9nQXJyYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nQXJyYXlCdG4nKVxuICAgIGxvZ0FycmF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge2xvb3Blcih0YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10pfSlcbn1cblxuXG5cbi8qIGJ1dHRvbkxpc3RlbmVyNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0ZXN0aS5jaGFuZ2VDb21wbGV0aW9uKFwiWFwiKSwgXG4gICAgY29uc29sZS5sb2codGVzdGkpXG4gICAgfSkgICovXG5cbmV4cG9ydCB7XG4gICAgYWRkVG9UYXNrTGlzdExpc3RlbmVyLFxuICAgIGxvZ0FycmF5TGlzdGVuZXJcbn0iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tIFwiZGF0ZS1hbmQtdGltZVwiXG5cbmNsYXNzIG5ld1Byb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIH1cblxuICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RcbiAgICB9XG4gICAgY2hhbmdlUHJvamVjdCh4KSB7IC8vdGhpcyBuZWVkcyBmdXJ0aGVyIHdvcmsgb25jZSBwcm9qZWN0IG1hbmFnZW1lbnQgaXMgaW1wbGVtZW50ZWRcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdCA9IHhcbiAgICB9XG59XG5cblxuY2xhc3MgbmV3VGFzayBleHRlbmRzIG5ld1Byb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBpbmZvKSB7XG4gICAgICAgIHN1cGVyKHByb2plY3QpXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mb1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy51dWlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgIH1cbiAgICAvL0dldHRlcnNcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgfVxuICAgIGdldERhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGVcbiAgICB9XG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mb1xuICAgIH1cbiAgICBnZXRDb21wbGV0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZDtcbiAgICB9XG4gICAgZ2V0VXVpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXVpZFxuICAgIH1cbiAgICBcbiAgICAvL0NoYW5nZXJzXG4gICAgY2hhbmdlTmFtZSh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgPSB4XG4gICAgfVxuICAgIGNoYW5nZVByaW9yaXR5KHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpb3JpdHkgPSB4XG4gICAgfVxuICAgIGNoYW5nZURhdGUoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlID0geFxuICAgIH1cbiAgICBjaGFuZ2VJbmZvKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5mbyA9IHhcbiAgICB9XG4gICAgY2hhbmdlQ29tcGxldGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZWQgPT09IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vT3RoZXIgbWV0aG9kc1xuICAgIGlzVGhlRGF0ZSgpIHtcbiAgICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgbGV0IGR1ZURhdGUgPSB0aGlzLmR1ZURhdGVcbiAgICAgICAgbGV0IGRpZmZlcmVuY2UgPSBkdWVEYXRlLmdldFRpbWUoKSAtIHRvZGF5O1xuICAgICAgICBsZXQgZGF5cyA9IE1hdGguY2VpbChkaWZmZXJlbmNlIC8gKDEwMDAgKiAzNjAwICogMjQpKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgaXMgZHVlIGluICR7ZGF5c30gZGF5cy5gKVxuICAgICAgICByZXR1cm4gZGF5c1xuICAgIH1cblxuICAgIHByb2plY3RDb25uZWN0b3IoKSB7XG5cbiAgICB9XG59XG5cblxuZXhwb3J0IHtcbiAgICBuZXdUYXNrXG59ICIsIlxuXG5mdW5jdGlvbiBvdmVyTGF5UmVuZGVyZWQgKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGlzcGxheVwiKVxuICAgIGxldCBpbnB1dE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGlucHV0T3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0T3ZlcmxheScpXG4gICAgaW5wdXRPdmVybGF5LmNsYXNzTmFtZSA9IFwiaW5wdXRPdmVybGF5XCJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0T3ZlcmxheSlcbiAgICBmb3JtQ3JlYXRvciAoKVxufVxuXG5mdW5jdGlvbiBmb3JtQ3JlYXRvciAoKSB7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0T3ZlcmxheVwiKTtcblxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2tcIik7XG4gICAgXG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0TmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3RcIik7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNlbGVjdFwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTm9ybWFsXCIpXG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIilcblxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkRGF0ZVwiKVxuICAgIFxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGluZm8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRhcmVhXCIpXG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5mb1wiKVxuICAgIGluZm8uc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIilcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKVxuICAgIGluZm8uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlc1wiKVxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGluZm8pXG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKGZvcm0pXG59XG5cbmZ1bmN0aW9uIG92ZXJMYXlEZXN0cm95ZXIoKSB7XG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRPdmVybGF5JylcbiAgICBvdmVybGF5LnJlbW92ZSgpXG5cbn1cblxuZXhwb3J0IHtcbiAgICBvdmVyTGF5UmVuZGVyZWQsXG4gICAgb3ZlckxheURlc3Ryb3llclxufSIsImxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVVJKCkge1xuICAgIGNyZWF0ZUhlYWRlcigpXG4gICAgY3JlYXRlTWFpbigpXG4gICAgY3JlYXRlU2lkZWJhcigpXG4gICAgY3JlYXRlVGFza0Rpc3BsYXkoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmlubmVySFRNTCA9IGA8aDE+dGFza0xpc3RlcjwvaDE+YFxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVybG9nbycpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXG5cbiAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcilcblxuXG4gICAgbGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IFRhc2tcIlxuICAgIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUYXNrQnV0dG9uJykgXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25zdHlsZTEnKVxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKVxuXG4gICAgXG4gICAgbGV0IGFkZFRvVGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb1Rhc2tMaXN0LmlubmVySFRNTCA9IFwiQWRkIHRhc2sgdG8gbGlzdFwiXG4gICAgYWRkVG9UYXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRvVGFza0xpc3QnKVxuICAgIGFkZFRvVGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnYnV0dG9uc3R5bGUxJykgXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvVGFza0xpc3QpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhciAoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzaWRlYmFyKVxuXG4gICAgbGV0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWxsVGFza3NCdXR0b24uaW5uZXJIVE1MID0gXCJBbGwgdGFza3NcIlxuICAgIGFsbFRhc2tzQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsVGFza3NCdXR0b24nKVxuICAgIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0eWxlMicpXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhbGxUYXNrc0J1dHRvbilcblxuICAgIGxldCBkdWVUb2RheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGR1ZVRvZGF5QnV0dG9uLmlubmVySFRNTCA9IFwiRHVlIHRvZGF5XCJcbiAgICBkdWVUb2RheUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZVRvZGF5QnV0dG9uJylcbiAgICBkdWVUb2RheUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25zdHlsZTInKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZHVlVG9kYXlCdXR0b24pXG5cbiAgICBsZXQgbG9nQXJyYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsb2dBcnJheUJ0bi5pbm5lckhUTUwgPSBcIkxvZyBBcnJheVwiXG4gICAgbG9nQXJyYXlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dBcnJheUJ0bicpXG4gICAgbG9nQXJyYXlCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uc3R5bGUyJykgXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsb2dBcnJheUJ0bilcbiAgICAgICAgXG5cbiAgICAvL0NyZWF0ZSBMaXN0IGZvciBwcm9qZWN0cyB0aGF0IGN5Y2xlcyB0aGUgY29udGVudCBmcm9tIHByb2plY3RzIG9uIHN0b3JhZ2UgYXJyYXlcbiB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXNwbGF5KCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgbGV0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZCgndGFza0Rpc3BsYXknKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrKSAge1xuICAgIGxldCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Rpc3BsYXlcIilcblxuICAgIGxldCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFza0NhcmQnKVxuICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tDYXJkKVxuXG4gICAgbGV0IGNhcmRMZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZExlZnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRMZWZ0U2lkZScpXG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZExlZnRTaWRlKVxuXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrTmFtZScpXG4gICAgdGFza05hbWUuaW5uZXJIVE1MID0gdGFzay5nZXROYW1lKClcbiAgICBjYXJkTGVmdFNpZGUuYXBwZW5kQ2hpbGQodGFza05hbWUpXG5cbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJylcbiAgICBwcm9qZWN0TmFtZS5pbm5lckhUTUwgPSB0YXNrLmdldFByb2plY3QoKVxuICAgIGNhcmRMZWZ0U2lkZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcblxuICAgIGxldCBjYXJkUmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjYXJkUmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ2NhcmRSaWdodFNpZGUnKVxuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSaWdodFNpZGUpXG5cbiAgICBsZXQgcmlnaHRUb3BTaWRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcmlnaHRUb3BTaWRlQ29udC5jbGFzc0xpc3QuYWRkKCdyaWdodFRvcFNpZGVDb250JylcbiAgICBjYXJkUmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0VG9wU2lkZUNvbnQpXG5cbiAgICBsZXQgZWRpdEJ1dHRvbkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGVkaXRCdXR0b25Db250LmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b25Db250JylcbiAgICBlZGl0QnV0dG9uQ29udC5pbm5lckhUTUwgPSBcIkJ1dHRvbnMgaGVyZVwiXG4gICAgcmlnaHRUb3BTaWRlQ29udC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uQ29udClcblxuICAgIGxldCB0YXNrRG9uZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrRG9uZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEb25lQ2hlY2tib3gnKVxuICAgIHRhc2tEb25lQ2hlY2tib3guaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2tkb25lXCIgbmFtZT1cInRhc2tkb25lXCI+PGxhYmVsIGZvcj1cInRhc2tkb25lXCI+RG9uZTwvbGFiZWw+YFxuICAgIHJpZ2h0VG9wU2lkZUNvbnQuYXBwZW5kQ2hpbGQodGFza0RvbmVDaGVja2JveClcblxuICAgIGxldCByaWdodExvd1NpZGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICByaWdodExvd1NpZGVDb250LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0TG93U2lkZUNvbnQnKVxuICAgIHJpZ2h0TG93U2lkZUNvbnQuaW5uZXJIVE1MID0gYER1ZSBkYXRlOiAke3Rhc2suZ2V0RGF0ZSgpfWBcbiAgICBjYXJkUmlnaHRTaWRlLmFwcGVuZENoaWxkKHJpZ2h0TG93U2lkZUNvbnQpXG5cblxufVxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVUksXG4gICAgY3JlYXRlVGFza0NhcmRcbn0iLCJcblxuY29uc3QgdGFza0FycmF5ID0ge1xuICAgIHRhc2tTdG9yYWdlOiBbXVxufVxuXG5cbmV4cG9ydCB7dGFza0FycmF5fSIsImltcG9ydCB7IGNyZWF0ZVRhc2tDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy92aWV3L3VpQ3JlYXRvcidcblxuZnVuY3Rpb24gbG9vcGVyKHN0b3JhZ2UpIHtcbiAgICBzdG9yYWdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdExvb3BlcihzdG9yYWdlQXJyYXkpIHtcbiAgICBzdG9yYWdlQXJyYXkuZm9yRWFjaCh0YXNrID0+IGNyZWF0ZVRhc2tDYXJkKHRhc2spKVxufVxuXG5leHBvcnQge1xuICAgIGxvb3BlcixcbiAgICBvYmplY3RMb29wZXJcbn0iLCIvKipcbiAqIEBwcmVzZXJ2ZSBkYXRlLWFuZC10aW1lIChjKSBLTk9XTEVER0VDT0RFIHwgTUlUXG4gKi9cblxudmFyIGxvY2FsZXMgPSB7fSxcbiAgICBwbHVnaW5zID0ge30sXG4gICAgbGFuZyA9ICdlbicsXG4gICAgX3JlcyA9IHtcbiAgICAgICAgTU1NTTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ10sXG4gICAgICAgIE1NTTogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICAgICAgICBkZGRkOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICAgIGRkZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgICAgICAgZGQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgICAgICAgQTogWydBTScsICdQTSddXG4gICAgfSxcbiAgICBfZm9ybWF0dGVyID0ge1xuICAgICAgICBZWVlZOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwMDAnICsgZC5nZXRGdWxsWWVhcigpKS5zbGljZSgtNCk7IH0sXG4gICAgICAgIFlZOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBZOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyBkLmdldEZ1bGxZZWFyKCk7IH0sXG4gICAgICAgIE1NTU06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5NTU1NW2QuZ2V0TW9udGgoKV07IH0sXG4gICAgICAgIE1NTTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuIHRoaXMucmVzLk1NTVtkLmdldE1vbnRoKCldOyB9LFxuICAgICAgICBNTTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyAoZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgTTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgKGQuZ2V0TW9udGgoKSArIDEpOyB9LFxuICAgICAgICBERDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyBkLmdldERhdGUoKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBEOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyBkLmdldERhdGUoKTsgfSxcbiAgICAgICAgSEg6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXRIb3VycygpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIEg6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIGQuZ2V0SG91cnMoKTsgfSxcbiAgICAgICAgQTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuIHRoaXMucmVzLkFbZC5nZXRIb3VycygpID4gMTEgfCAwXTsgfSxcbiAgICAgICAgaGg6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBoOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyAoZC5nZXRIb3VycygpICUgMTIgfHwgMTIpOyB9LFxuICAgICAgICBtbTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyBkLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBtOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyBkLmdldE1pbnV0ZXMoKTsgfSxcbiAgICAgICAgc3M6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgczogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXRTZWNvbmRzKCk7IH0sXG4gICAgICAgIFNTUzogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMDAnICsgZC5nZXRNaWxsaXNlY29uZHMoKSkuc2xpY2UoLTMpOyB9LFxuICAgICAgICBTUzogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyAoZC5nZXRNaWxsaXNlY29uZHMoKSAvIDEwIHwgMCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgUzogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgKGQuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDAgfCAwKTsgfSxcbiAgICAgICAgZGRkZDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuIHRoaXMucmVzLmRkZGRbZC5nZXREYXkoKV07IH0sXG4gICAgICAgIGRkZDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuIHRoaXMucmVzLmRkZFtkLmdldERheSgpXTsgfSxcbiAgICAgICAgZGQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5kZFtkLmdldERheSgpXTsgfSxcbiAgICAgICAgWjogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBkLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAwLjYgfCAwO1xuICAgICAgICAgICAgcmV0dXJuIChvZmZzZXQgPiAwID8gJy0nIDogJysnKSArICgnMDAwJyArIE1hdGguYWJzKG9mZnNldCAtIChvZmZzZXQgJSAxMDAgKiAwLjQgfCAwKSkpLnNsaWNlKC00KTtcbiAgICAgICAgfSxcbiAgICAgICAgWlo6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIG1vZCA9IE1hdGguYWJzKG9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gKG9mZnNldCA+IDAgPyAnLScgOiAnKycpICsgKCcwJyArIChtb2QgLyA2MCB8IDApKS5zbGljZSgtMikgKyAnOicgKyAoJzAnICsgbW9kICUgNjApLnNsaWNlKC0yKTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdDogZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyOyB9LFxuICAgICAgICByZXM6IF9yZXNcbiAgICB9LFxuICAgIF9wYXJzZXIgPSB7XG4gICAgICAgIFlZWVk6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGR7NH0vLCBzdHIpOyB9LFxuICAgICAgICBZOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkezEsNH0vLCBzdHIpOyB9LFxuICAgICAgICBNTU1NOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZmluZCh0aGlzLnJlcy5NTU1NLCBzdHIpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlKys7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBNTU06IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5maW5kKHRoaXMucmVzLk1NTSwgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSsrO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgTU06IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBNOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIEREOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgRDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBISDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIEg6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgQTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZmluZCh0aGlzLnJlcy5BLCBzdHIpOyB9LFxuICAgICAgICBoaDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIGg6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgbW06IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBtOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIHNzOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgczogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBTU1M6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGR7MSwzfS8sIHN0cik7IH0sXG4gICAgICAgIFNTOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICo9IDEwO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgUzogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmV4ZWMoL15cXGQvLCBzdHIpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICo9IDEwMDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIFo6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5leGVjKC9eW1xcKy1dXFxkezJ9WzAtNV1cXGQvLCBzdHIpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gKHJlc3VsdC52YWx1ZSAvIDEwMCB8IDApICogLTYwIC0gcmVzdWx0LnZhbHVlICUgMTAwO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgWlo6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgYXJyID0gL14oW1xcKy1dKShcXGR7Mn0pOihbMC01XVxcZCkvLmV4ZWMoc3RyKSB8fCBbJycsICcnLCAnJywgJyddO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IDAgLSAoKGFyclsxXSArIGFyclsyXSB8IDApICogNjAgKyAoYXJyWzFdICsgYXJyWzNdIHwgMCkpLCBsZW5ndGg6IGFyclswXS5sZW5ndGggfTtcbiAgICAgICAgfSxcbiAgICAgICAgaDEyOiBmdW5jdGlvbiAoaCwgYSkgeyByZXR1cm4gKGggPT09IDEyID8gMCA6IGgpICsgYSAqIDEyOyB9LFxuICAgICAgICBleGVjOiBmdW5jdGlvbiAocmUsIHN0cikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IChyZS5leGVjKHN0cikgfHwgWycnXSlbMF07XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0IHwgMCwgbGVuZ3RoOiByZXN1bHQubGVuZ3RoIH07XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmQ6IGZ1bmN0aW9uIChhcnJheSwgc3RyKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAtMSwgbGVuZ3RoID0gMDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aCwgaXRlbTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGlmICghc3RyLmluZGV4T2YoaXRlbSkgJiYgaXRlbS5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGxlbmd0aDogbGVuZ3RoIH07XG4gICAgICAgIH0sXG4gICAgICAgIHByZTogZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyOyB9LFxuICAgICAgICByZXM6IF9yZXNcbiAgICB9LFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uIChiYXNlLCBwcm9wcywgb3ZlcnJpZGUsIHJlcykge1xuICAgICAgICB2YXIgb2JqID0ge30sIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBiYXNlKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IGJhc2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGtleSBpbiBwcm9wcyB8fCB7fSkge1xuICAgICAgICAgICAgaWYgKCEoISFvdmVycmlkZSBeICEhb2JqW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgb2JqW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIG9iai5yZXMgPSByZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIHByb3RvID0ge1xuICAgICAgICBfZm9ybWF0dGVyOiBfZm9ybWF0dGVyLFxuICAgICAgICBfcGFyc2VyOiBfcGFyc2VyXG4gICAgfSxcbiAgICBsb2NhbGl6ZWRfcHJvdG8sXG4gICAgZGF0ZTtcblxuLyoqXG4gKiBDb21waWxpbmcgZm9ybWF0IHN0cmluZ3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRTdHJpbmcgLSBBIGZvcm1hdCBzdHJpbmdcbiAqIEByZXR1cm5zIHtBcnJheS48c3RyaW5nPn0gQSBjb21waWxlZCBvYmplY3RcbiAqL1xucHJvdG8uY29tcGlsZSA9IGZ1bmN0aW9uIChmb3JtYXRTdHJpbmcpIHtcbiAgICB2YXIgcmUgPSAvXFxbKFteXFxbXFxdXXxcXFtbXlxcW1xcXV0qXSkqXXwoW0EtWmEtel0pXFwyK3xcXC57M318Li9nLCBrZXlzLCBwYXR0ZXJuID0gW2Zvcm1hdFN0cmluZ107XG5cbiAgICB3aGlsZSAoKGtleXMgPSByZS5leGVjKGZvcm1hdFN0cmluZykpKSB7XG4gICAgICAgIHBhdHRlcm5bcGF0dGVybi5sZW5ndGhdID0ga2V5c1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHBhdHRlcm47XG59O1xuXG4vKipcbiAqIEZvcm1hdHRpbmcgZGF0ZSBhbmQgdGltZSBvYmplY3RzIChEYXRlIC0+IFN0cmluZylcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbdXRjXSAtIE91dHB1dCBhcyBVVENcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgZm9ybWF0dGVkIHN0cmluZ1xuICovXG5wcm90by5mb3JtYXQgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgYXJnLCB1dGMpIHtcbiAgICB2YXIgY3R4ID0gdGhpcyB8fCBkYXRlLCBwYXR0ZXJuID0gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgPyBjdHguY29tcGlsZShhcmcpIDogYXJnLFxuICAgICAgICBvZmZzZXQgPSBkYXRlT2JqLmdldFRpbWV6b25lT2Zmc2V0KCksXG4gICAgICAgIGQgPSBjdHguYWRkTWludXRlcyhkYXRlT2JqLCB1dGMgPyBvZmZzZXQgOiAwKSxcbiAgICAgICAgZm9ybWF0dGVyID0gY3R4Ll9mb3JtYXR0ZXIsIHN0ciA9ICcnO1xuXG4gICAgZC5nZXRUaW1lem9uZU9mZnNldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0YyA/IDAgOiBvZmZzZXQ7IH07XG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCB0b2tlbjsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRva2VuID0gcGF0dGVybltpXTtcbiAgICAgICAgc3RyICs9IGZvcm1hdHRlclt0b2tlbl0gPyBmb3JtYXR0ZXIucG9zdChmb3JtYXR0ZXJbdG9rZW5dKGQsIHBhdHRlcm5bMF0pKSA6IHRva2VuLnJlcGxhY2UoL1xcWyguKildLywgJyQxJyk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFByZS1wYXJzaW5nIGRhdGUgYW5kIHRpbWUgc3RyaW5nc1xuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHJpbmcgLSBBIGRhdGUgYW5kIHRpbWUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gYXJnIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3V0Y10gLSBJbnB1dCBhcyBVVENcbiAqIEByZXR1cm5zIHtPYmplY3R9IEEgcHJlLXBhcnNlZCByZXN1bHQgb2JqZWN0XG4gKi9cbnByb3RvLnByZXBhcnNlID0gZnVuY3Rpb24gKGRhdGVTdHJpbmcsIGFyZykge1xuICAgIHZhciBjdHggPSB0aGlzIHx8IGRhdGUsIHBhdHRlcm4gPSB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyA/IGN0eC5jb21waWxlKGFyZykgOiBhcmcsXG4gICAgICAgIGR0ID0geyBZOiAxOTcwLCBNOiAxLCBEOiAxLCBIOiAwLCBBOiAwLCBoOiAwLCBtOiAwLCBzOiAwLCBTOiAwLCBaOiAwLCBfaW5kZXg6IDAsIF9sZW5ndGg6IDAsIF9tYXRjaDogMCB9LFxuICAgICAgICBjb21tZW50ID0gL1xcWyguKildLywgcGFyc2VyID0gY3R4Ll9wYXJzZXIsIG9mZnNldCA9IDA7XG5cbiAgICBkYXRlU3RyaW5nID0gcGFyc2VyLnByZShkYXRlU3RyaW5nKTtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gcGF0dGVybi5sZW5ndGgsIHRva2VuLCByZXN1bHQ7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0b2tlbiA9IHBhdHRlcm5baV07XG4gICAgICAgIGlmIChwYXJzZXJbdG9rZW5dKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXJzZXJbdG9rZW5dKGRhdGVTdHJpbmcuc2xpY2Uob2Zmc2V0KSwgcGF0dGVyblswXSk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCArPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgZHRbcmVzdWx0LnRva2VuIHx8IHRva2VuLmNoYXJBdCgwKV0gPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICBkdC5fbWF0Y2grKztcbiAgICAgICAgfSBlbHNlIGlmICh0b2tlbiA9PT0gZGF0ZVN0cmluZy5jaGFyQXQob2Zmc2V0KSB8fCB0b2tlbiA9PT0gJyAnKSB7XG4gICAgICAgICAgICBvZmZzZXQrKztcbiAgICAgICAgfSBlbHNlIGlmIChjb21tZW50LnRlc3QodG9rZW4pICYmICFkYXRlU3RyaW5nLnNsaWNlKG9mZnNldCkuaW5kZXhPZihjb21tZW50LmV4ZWModG9rZW4pWzFdKSkge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IHRva2VuLmxlbmd0aCAtIDI7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09ICcuLi4nKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSBkYXRlU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHQuSCA9IGR0LkggfHwgcGFyc2VyLmgxMihkdC5oLCBkdC5BKTtcbiAgICBkdC5faW5kZXggPSBvZmZzZXQ7XG4gICAgZHQuX2xlbmd0aCA9IGRhdGVTdHJpbmcubGVuZ3RoO1xuICAgIHJldHVybiBkdDtcbn07XG5cbi8qKlxuICogUGFyc2luZyBvZiBkYXRlIGFuZCB0aW1lIHN0cmluZyAoU3RyaW5nIC0+IERhdGUpXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0ZVN0cmluZyAtIEEgZGF0ZS10aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZyAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1dGNdIC0gSW5wdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7RGF0ZX0gQSBEYXRlIG9iamVjdFxuICovXG5wcm90by5wYXJzZSA9IGZ1bmN0aW9uIChkYXRlU3RyaW5nLCBhcmcsIHV0Yykge1xuICAgIHZhciBjdHggPSB0aGlzIHx8IGRhdGUsIHBhdHRlcm4gPSB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyA/IGN0eC5jb21waWxlKGFyZykgOiBhcmcsXG4gICAgICAgIGR0ID0gY3R4LnByZXBhcnNlKGRhdGVTdHJpbmcsIHBhdHRlcm4pO1xuXG4gICAgaWYgKGN0eC5pc1ZhbGlkKGR0KSkge1xuICAgICAgICBkdC5NIC09IGR0LlkgPCAxMDAgPyAyMjgwMSA6IDE7IC8vIDIyODAxID0gMTkwMCAqIDEyICsgMVxuICAgICAgICBpZiAodXRjIHx8IH5jdHguX3BhcnNlci5maW5kKHBhdHRlcm4sICdaWicpLnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoZHQuWSwgZHQuTSwgZHQuRCwgZHQuSCwgZHQubSArIGR0LlosIGR0LnMsIGR0LlMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZHQuWSwgZHQuTSwgZHQuRCwgZHQuSCwgZHQubSwgZHQucywgZHQuUyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xufTtcblxuLyoqXG4gKiBEYXRlIGFuZCB0aW1lIHN0cmluZyB2YWxpZGF0aW9uXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IGFyZzEgLSBBIHByZS1wYXJzZWQgcmVzdWx0IG9iamVjdCBvciBhIGRhdGUgYW5kIHRpbWUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gW2FyZzJdIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBkYXRlIGFuZCB0aW1lIHN0cmluZyBpcyBhIHZhbGlkIGRhdGUgYW5kIHRpbWVcbiAqL1xucHJvdG8uaXNWYWxpZCA9IGZ1bmN0aW9uIChhcmcxLCBhcmcyKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMgfHwgZGF0ZSwgZHQgPSB0eXBlb2YgYXJnMSA9PT0gJ3N0cmluZycgPyBjdHgucHJlcGFyc2UoYXJnMSwgYXJnMikgOiBhcmcxLFxuICAgICAgICBsYXN0ID0gWzMxLCAyOCArIGN0eC5pc0xlYXBZZWFyKGR0LlkpIHwgMCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW2R0Lk0gLSAxXTtcblxuICAgIHJldHVybiAhKFxuICAgICAgICBkdC5faW5kZXggPCAxIHx8IGR0Ll9sZW5ndGggPCAxIHx8IGR0Ll9pbmRleCAtIGR0Ll9sZW5ndGggfHwgZHQuX21hdGNoIDwgMSB8fFxuICAgICAgICBkdC5ZIDwgMSB8fCBkdC5ZID4gOTk5OSB8fCBkdC5NIDwgMSB8fCBkdC5NID4gMTIgfHwgZHQuRCA8IDEgfHwgZHQuRCA+IGxhc3QgfHxcbiAgICAgICAgZHQuSCA8IDAgfHwgZHQuSCA+IDIzIHx8IGR0Lm0gPCAwIHx8IGR0Lm0gPiA1OSB8fCBkdC5zIDwgMCB8fCBkdC5zID4gNTkgfHwgZHQuUyA8IDAgfHwgZHQuUyA+IDk5OSB8fFxuICAgICAgICBkdC5aIDwgLTg0MCB8fCBkdC5aID4gNzIwXG4gICAgKTtcbn07XG5cbi8qKlxuICogRm9ybWF0IHRyYW5zZm9ybWF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgc3RyaW5nIChTdHJpbmcgLT4gU3RyaW5nKVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHJpbmcgLSBBIGRhdGUgYW5kIHRpbWUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gYXJnMSAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0IGJlZm9yZSB0cmFuc2Zvcm1hdGlvblxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZzIgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdCBhZnRlciB0cmFuc2Zvcm1hdGlvblxuICogQHBhcmFtIHtib29sZWFufSBbdXRjXSAtIE91dHB1dCBhcyBVVENcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgZm9ybWF0dGVkIHN0cmluZ1xuICovXG5wcm90by50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoZGF0ZVN0cmluZywgYXJnMSwgYXJnMiwgdXRjKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcyB8fCBkYXRlO1xuICAgIHJldHVybiBjdHguZm9ybWF0KGN0eC5wYXJzZShkYXRlU3RyaW5nLCBhcmcxKSwgYXJnMiwgdXRjKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIHllYXJzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0geWVhcnMgLSBOdW1iZXIgb2YgeWVhcnMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkWWVhcnMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgeWVhcnMpIHtcbiAgICByZXR1cm4gKHRoaXMgfHwgZGF0ZSkuYWRkTW9udGhzKGRhdGVPYmosIHllYXJzICogMTIpO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgbW9udGhzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gbW9udGhzIC0gTnVtYmVyIG9mIG1vbnRocyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRNb250aHMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGhzKSB7XG4gICAgdmFyIGQgPSBuZXcgRGF0ZShkYXRlT2JqLmdldFRpbWUoKSk7XG5cbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIG1vbnRocyk7XG4gICAgcmV0dXJuIGQ7XG59O1xuXG4vKipcbiAqIEFkZGluZyBkYXlzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gZGF5cyAtIE51bWJlciBvZiBkYXlzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZERheXMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5cykge1xuICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZU9iai5nZXRUaW1lKCkpO1xuXG4gICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gICAgcmV0dXJuIGQ7XG59O1xuXG4vKipcbiAqIEFkZGluZyBob3Vyc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IGhvdXJzIC0gTnVtYmVyIG9mIGhvdXJzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZEhvdXJzID0gZnVuY3Rpb24gKGRhdGVPYmosIGhvdXJzKSB7XG4gICAgcmV0dXJuICh0aGlzIHx8IGRhdGUpLmFkZE1pbnV0ZXMoZGF0ZU9iaiwgaG91cnMgKiA2MCk7XG59O1xuXG4vKipcbiAqIEFkZGluZyBtaW51dGVzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gbWludXRlcyAtIE51bWJlciBvZiBtaW51dGVzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZE1pbnV0ZXMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgbWludXRlcykge1xuICAgIHJldHVybiAodGhpcyB8fCBkYXRlKS5hZGRTZWNvbmRzKGRhdGVPYmosIG1pbnV0ZXMgKiA2MCk7XG59O1xuXG4vKipcbiAqIEFkZGluZyBzZWNvbmRzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIE51bWJlciBvZiBzZWNvbmRzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZFNlY29uZHMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgc2Vjb25kcykge1xuICAgIHJldHVybiAodGhpcyB8fCBkYXRlKS5hZGRNaWxsaXNlY29uZHMoZGF0ZU9iaiwgc2Vjb25kcyAqIDEwMDApO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgbWlsbGlzZWNvbmRzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRNaWxsaXNlY29uZHMgPSBmdW5jdGlvbiAoZGF0ZU9iaiwgbWlsbGlzZWNvbmRzKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVPYmouZ2V0VGltZSgpICsgbWlsbGlzZWNvbmRzKTtcbn07XG5cbi8qKlxuICogU3VidHJhY3RpbmcgdHdvIGRhdGVzIChkYXRlMSAtIGRhdGUyKVxuICogQHBhcmFtIHtEYXRlfSBkYXRlMSAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTIgLSBBIERhdGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVzdWx0IG9iamVjdCBvZiBzdWJ0cmFjdGluZyBkYXRlMiBmcm9tIGRhdGUxXG4gKi9cbnByb3RvLnN1YnRyYWN0ID0gZnVuY3Rpb24gKGRhdGUxLCBkYXRlMikge1xuICAgIHZhciBkZWx0YSA9IGRhdGUxLmdldFRpbWUoKSAtIGRhdGUyLmdldFRpbWUoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvTWlsbGlzZWNvbmRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgICAgIH0sXG4gICAgICAgIHRvU2Vjb25kczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhIC8gMTAwMDtcbiAgICAgICAgfSxcbiAgICAgICAgdG9NaW51dGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGEgLyA2MDAwMDtcbiAgICAgICAgfSxcbiAgICAgICAgdG9Ib3VyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhIC8gMzYwMDAwMDtcbiAgICAgICAgfSxcbiAgICAgICAgdG9EYXlzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsdGEgLyA4NjQwMDAwMDtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG4vKipcbiAqIFdoZXRoZXIgYSB5ZWFyIGlzIGEgbGVhcCB5ZWFyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIEEgeWVhciB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHllYXIgaXMgYSBsZWFwIHllYXJcbiAqL1xucHJvdG8uaXNMZWFwWWVhciA9IGZ1bmN0aW9uICh5KSB7XG4gICAgcmV0dXJuICghKHkgJSA0KSAmJiAhISh5ICUgMTAwKSkgfHwgISh5ICUgNDAwKTtcbn07XG5cbi8qKlxuICogQ29tcGFyaXNvbiBvZiB0d28gZGF0ZXNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTEgLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUyIC0gQSBEYXRlIG9iamVjdFxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIHR3byBkYXRlcyBhcmUgdGhlIHNhbWUgZGF5ICh0aW1lIGlzIGlnbm9yZWQpXG4gKi9cbnByb3RvLmlzU2FtZURheSA9IGZ1bmN0aW9uIChkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gZGF0ZTEudG9EYXRlU3RyaW5nKCkgPT09IGRhdGUyLnRvRGF0ZVN0cmluZygpO1xufTtcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIG5ldyBsb2NhbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlIC0gQSBsYW5ndWFnZSBjb2RlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsb2NhbGUgLSBBIGxvY2FsZSBpbnN0YWxsZXJcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5wcm90by5sb2NhbGUgPSBmdW5jdGlvbiAoY29kZSwgbG9jYWxlKSB7XG4gICAgaWYgKCFsb2NhbGVzW2NvZGVdKSB7XG4gICAgICAgIGxvY2FsZXNbY29kZV0gPSBsb2NhbGU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIG5ldyBwbHVnaW5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gQSBwbHVnaW4gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGx1Z2luIC0gQSBwbHVnaW4gaW5zdGFsbGVyXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xucHJvdG8ucGx1Z2luID0gZnVuY3Rpb24gKG5hbWUsIHBsdWdpbikge1xuICAgIGlmICghcGx1Z2luc1tuYW1lXSkge1xuICAgICAgICBwbHVnaW5zW25hbWVdID0gcGx1Z2luO1xuICAgIH1cbn07XG5cbmxvY2FsaXplZF9wcm90byA9IGV4dGVuZChwcm90byk7XG5kYXRlID0gZXh0ZW5kKHByb3RvKTtcblxuLyoqXG4gKiBDaGFuZ2luZyBsb2NhbGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufHN0cmluZ30gW2xvY2FsZV0gLSBBIGxvY2FsZSBpbnN0YWxsZXIgb3IgbGFuZ3VhZ2UgY29kZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGN1cnJlbnQgbGFuZ3VhZ2UgY29kZVxuICovXG5kYXRlLmxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICB2YXIgaW5zdGFsbCA9IHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUgOiBkYXRlLmxvY2FsZVtsb2NhbGVdO1xuXG4gICAgaWYgKCFpbnN0YWxsKSB7XG4gICAgICAgIHJldHVybiBsYW5nO1xuICAgIH1cbiAgICBsYW5nID0gaW5zdGFsbChwcm90byk7XG5cbiAgICB2YXIgZXh0ZW5zaW9uID0gbG9jYWxlc1tsYW5nXSB8fCB7fTtcbiAgICB2YXIgcmVzID0gZXh0ZW5kKF9yZXMsIGV4dGVuc2lvbi5yZXMsIHRydWUpO1xuICAgIHZhciBmb3JtYXR0ZXIgPSBleHRlbmQoX2Zvcm1hdHRlciwgZXh0ZW5zaW9uLmZvcm1hdHRlciwgdHJ1ZSwgcmVzKTtcbiAgICB2YXIgcGFyc2VyID0gZXh0ZW5kKF9wYXJzZXIsIGV4dGVuc2lvbi5wYXJzZXIsIHRydWUsIHJlcyk7XG5cbiAgICBkYXRlLl9mb3JtYXR0ZXIgPSBsb2NhbGl6ZWRfcHJvdG8uX2Zvcm1hdHRlciA9IGZvcm1hdHRlcjtcbiAgICBkYXRlLl9wYXJzZXIgPSBsb2NhbGl6ZWRfcHJvdG8uX3BhcnNlciA9IHBhcnNlcjtcblxuICAgIGZvciAodmFyIHBsdWdpbiBpbiBwbHVnaW5zKSB7XG4gICAgICAgIGRhdGUuZXh0ZW5kKHBsdWdpbnNbcGx1Z2luXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmc7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uYWwgZXh0ZW5zaW9uXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5zaW9uIC0gQW4gZXh0ZW5zaW9uIG9iamVjdFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmRhdGUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuc2lvbikge1xuICAgIHZhciByZXMgPSBleHRlbmQoZGF0ZS5fcGFyc2VyLnJlcywgZXh0ZW5zaW9uLnJlcyk7XG4gICAgdmFyIGV4dGVuZGVyID0gZXh0ZW5zaW9uLmV4dGVuZGVyIHx8IHt9O1xuXG4gICAgZGF0ZS5fZm9ybWF0dGVyID0gZXh0ZW5kKGRhdGUuX2Zvcm1hdHRlciwgZXh0ZW5zaW9uLmZvcm1hdHRlciwgZmFsc2UsIHJlcyk7XG4gICAgZGF0ZS5fcGFyc2VyID0gZXh0ZW5kKGRhdGUuX3BhcnNlciwgZXh0ZW5zaW9uLnBhcnNlciwgZmFsc2UsIHJlcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZXh0ZW5kZXIpIHtcbiAgICAgICAgaWYgKCFkYXRlW2tleV0pIHtcbiAgICAgICAgICAgIGRhdGVba2V5XSA9IGV4dGVuZGVyW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIEltcG9ydGluZyBwbHVnaW5zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufHN0cmluZ30gcGx1Z2luIC0gQSBwbHVnaW4gaW5zdGFsbGVyIG9yIHBsdWdpbiBuYW1lXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZGF0ZS5wbHVnaW4gPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGwgPSB0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nID8gcGx1Z2luIDogZGF0ZS5wbHVnaW5bcGx1Z2luXTtcblxuICAgIGlmIChpbnN0YWxsKSB7XG4gICAgICAgIGRhdGUuZXh0ZW5kKHBsdWdpbnNbaW5zdGFsbChwcm90bywgbG9jYWxpemVkX3Byb3RvKV0gfHwge30pO1xuICAgIH1cbn07XG5cbnZhciBkYXRlJDEgPSBkYXRlO1xuXG5leHBvcnQgeyBkYXRlJDEgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0IGRhdGUgZnJvbSAnZGF0ZS1hbmQtdGltZSc7XG5pbXBvcnQgeyBuZXdUYXNrIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGVsL3Rhc2tDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gJy4vZGF0YS9zdG9yYWdlLmpzJ1xuaW1wb3J0IHsgb3ZlckxheVJlbmRlcmVkLCBvdmVyTGF5RGVzdHJveWVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXcvdGFza0lucHV0Q3JlYXRvcidcbmltcG9ydCB7IG9iamVjdExvb3BlciB9IGZyb20gJy4vZnVuY3Rpb25zL3N0b3JhZ2VMb29wZXJzJ1xuaW1wb3J0IHsgY3JlYXRlVUksIGNyZWF0ZVRhc2tDYXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXcvdWlDcmVhdG9yJ1xuaW1wb3J0IHsgYWRkVG9UYXNrTGlzdExpc3RlbmVyLCBsb2dBcnJheUxpc3RlbmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xsZXIvZXZlbnRMaXN0ZW5lcnMnXG5cblxuY29uc3QgdGVzdGkgPSBuZXcgbmV3VGFzayhcIlRlc3QgVGFza1wiLCBcIlByb2plY3RcIiwgXCJJbXBvcnRhbnRcIiwgXCIyMDIzLTAxLTI3XCIsIFwiRG8gaXQgeWEgZ2l0XCIpO1xuY29uc3QgdGVzdDIgPSBuZXcgbmV3VGFzayhcIlRvaW5lblwiLCBcIlByb2plY3RcIiwgXCJJbXBvcnRhbnRcIiwgXCIyMDIzLTAxLTI3XCIsIFwiRG8gaXQgeWEgZ2l0XCIpO1xudGFza0FycmF5Wyd0YXNrU3RvcmFnZSddLnB1c2godGVzdGkpXG50YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10ucHVzaCh0ZXN0MilcblxuXG5jcmVhdGVVSSgpXG5cbmxldCBidXR0b25MaXN0ZW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrQnV0dG9uJylcbmJ1dHRvbkxpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3ZlckxheVJlbmRlcmVkKVxuXG5vYmplY3RMb29wZXIodGFza0FycmF5Wyd0YXNrU3RvcmFnZSddKVxuXG5hZGRUb1Rhc2tMaXN0TGlzdGVuZXIoKVxubG9nQXJyYXlMaXN0ZW5lcigpXG5cbi8qIGNyZWF0ZVRhc2tDYXJkKHRlc3RpKSAgKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=