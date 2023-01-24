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
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n    color: red;\n  }\n\n  .inputOverlay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #E46C00;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    height: 20vh;\n    width: 60vw;\n    padding: 15px;\n    z-index: 7;\n    position: absolute;\n    font-size: large;\n    margin: 20px;\n  }", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,uLAAuL;IACvL,YAAY;IACZ,WAAW;IACX,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;EACd","sourcesContent":[".hello {\n    color: red;\n  }\n\n  .inputOverlay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #E46C00;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    height: 20vh;\n    width: 60vw;\n    padding: 15px;\n    z-index: 7;\n    position: absolute;\n    font-size: large;\n    margin: 20px;\n  }"],"sourceRoot":""}]);
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

/***/ "./src/components/taskController.js":
/*!******************************************!*\
  !*** ./src/components/taskController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTask": () => (/* binding */ newTask)
/* harmony export */ });

const newTask =  (name, project, priority, dueDate, info) => {
    let taskName = name;
    let isCompleted = false;
    let taskProject = project;
    let taskPriority = priority;
    let taskDueDate = dueDate;
    let taskInfo = info;

    const compStatus = completed => {
        if (completed === true) {
            isCompleted = true
            console.log(`Task ${name} has been completed`)
        }
    }

    const getCompStatus = () => isCompleted

    return { compStatus, getCompStatus, taskName, isCompleted, taskProject, taskPriority, taskDueDate, taskInfo };
}




/***/ }),

/***/ "./src/components/taskInputCreator.js":
/*!********************************************!*\
  !*** ./src/components/taskInputCreator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overLayRendered": () => (/* binding */ overLayRendered)
/* harmony export */ });


function overLayRendered () {
    let content = document.querySelector(".content")
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
    
    form.appendChild(taskName)
    form.appendChild(projectName)
    form.appendChild(priority)
    form.appendChild(dueDate)
    form.appendChild(info)

    overlay.appendChild(form)
}



/***/ }),

/***/ "./src/data/taskStorage.js":
/*!*********************************!*\
  !*** ./src/data/taskStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskArray": () => (/* binding */ taskArray),
/* harmony export */   "taskReader": () => (/* binding */ taskReader)
/* harmony export */ });
let taskArray = []

function taskReader() {
    console.log(taskArray)
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
/* harmony import */ var _data_taskStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/taskStorage.js */ "./src/data/taskStorage.js");
/* harmony import */ var _components_taskInputCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/taskInputCreator */ "./src/components/taskInputCreator.js");







const testi = (0,_components_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask)("testi", "projekti", "tärkeä", "pvm", "infoa");
console.log(testi)
testi.compStatus(true)
console.log(testi.getCompStatus())
console.log(testi)

_data_taskStorage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.push(testi)


let content = document.querySelector(".content")


function button () {
    let button = document.createElement('button');
    button.innerHTML = "Add task to list"
    button.setAttribute('id', 'btn') 
    content.appendChild(button)
}

function button2 () {
    let button = document.createElement('button');
    button.innerHTML = "New Task"
    button.setAttribute('id', 'btn2') 
    content.appendChild(button)
}

function button3 () {
    let button = document.createElement('button');
    button.innerHTML = "Log Array"
    button.setAttribute('id', 'btn3') 
    content.appendChild(button)
}

button2();
button();
button3();

let buttonListener = document.querySelector('#btn')
let buttonListener2 = document.querySelector('#btn2')
let buttonListener3 = document.querySelector('#btn3')


buttonListener.addEventListener('click', function(){
    let form = document.querySelector('#inputOverlay')
    let name = form.querySelector('input[name="taskName"]').value
    let project = form.querySelector('input[name="projectName"]').value
    let priority = form.querySelector('input[name="priority"]').value
    let date = form.querySelector('input[id="selectedDate"]').value
    let info = form.querySelector('input[name="info"]').value
    console.log(name, project, priority, date, info)
    
    const testi2 = (0,_components_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask)(name, project, priority, date, info)
    _data_taskStorage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.push(testi2)
})

buttonListener2.addEventListener('click', _components_taskInputCreator__WEBPACK_IMPORTED_MODULE_4__.overLayRendered)
buttonListener3.addEventListener('click', _data_taskStorage_js__WEBPACK_IMPORTED_MODULE_3__.taskReader)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNLO0FBQ3dCO0FBQ0k7QUFDZTs7O0FBRzVFLGNBQWMsc0VBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0VBQWM7OztBQUdkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0VBQU87QUFDMUIsSUFBSSxnRUFBYztBQUNsQixDQUFDOztBQUVELDBDQUEwQyx5RUFBZTtBQUN6RCwwQ0FBMEMsNERBQVUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL3Rhc2tJbnB1dENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2RhdGEvdGFza1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtYW5kLXRpbWUvZXNtL2RhdGUtYW5kLXRpbWUubWpzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWxsbyB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICB9XFxuXFxuICAuaW5wdXRPdmVybGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDZDMDA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgei1pbmRleDogNztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHVMQUF1TDtJQUN2TCxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlbGxvIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gIH1cXG5cXG4gIC5pbnB1dE92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0NkMwMDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB6LWluZGV4OiA3O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNvbnN0IG5ld1Rhc2sgPSAgKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBpbmZvKSA9PiB7XG4gICAgbGV0IHRhc2tOYW1lID0gbmFtZTtcbiAgICBsZXQgaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBsZXQgdGFza1Byb2plY3QgPSBwcm9qZWN0O1xuICAgIGxldCB0YXNrUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBsZXQgdGFza0R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCB0YXNrSW5mbyA9IGluZm87XG5cbiAgICBjb25zdCBjb21wU3RhdHVzID0gY29tcGxldGVkID0+IHtcbiAgICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaXNDb21wbGV0ZWQgPSB0cnVlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVGFzayAke25hbWV9IGhhcyBiZWVuIGNvbXBsZXRlZGApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRDb21wU3RhdHVzID0gKCkgPT4gaXNDb21wbGV0ZWRcblxuICAgIHJldHVybiB7IGNvbXBTdGF0dXMsIGdldENvbXBTdGF0dXMsIHRhc2tOYW1lLCBpc0NvbXBsZXRlZCwgdGFza1Byb2plY3QsIHRhc2tQcmlvcml0eSwgdGFza0R1ZURhdGUsIHRhc2tJbmZvIH07XG59XG5cblxuZXhwb3J0IHtcbiAgICBuZXdUYXNrXG59IiwiXG5cbmZ1bmN0aW9uIG92ZXJMYXlSZW5kZXJlZCAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbiAgICBsZXQgaW5wdXRPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbnB1dE92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dE92ZXJsYXknKVxuICAgIGlucHV0T3ZlcmxheS5jbGFzc05hbWUgPSBcImlucHV0T3ZlcmxheVwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnB1dE92ZXJsYXkpXG4gICAgZm9ybUNyZWF0b3IgKClcbn1cblxuZnVuY3Rpb24gZm9ybUNyZWF0b3IgKCkge1xuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dE92ZXJsYXlcIik7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcblxuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza05hbWVcIik7XG4gICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrXCIpO1xuICAgIFxuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdE5hbWVcIik7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0XCIpO1xuXG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzZWxlY3RcIilcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhpZ2hcIilcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk5vcm1hbFwiKVxuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpXG5cbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWxlY3RlZERhdGVcIilcbiAgICBcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0YXJlYVwiKVxuICAgIGluZm8uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImluZm9cIilcbiAgICBpbmZvLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpXG4gICAgaW5mby5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMzBcIilcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbmZvKVxuXG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKVxufVxuXG5leHBvcnQge1xuICAgIG92ZXJMYXlSZW5kZXJlZFxufSIsImxldCB0YXNrQXJyYXkgPSBbXVxuXG5mdW5jdGlvbiB0YXNrUmVhZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSlcbn1cblxuZXhwb3J0IHt0YXNrQXJyYXksIHRhc2tSZWFkZXJ9IiwiLyoqXG4gKiBAcHJlc2VydmUgZGF0ZS1hbmQtdGltZSAoYykgS05PV0xFREdFQ09ERSB8IE1JVFxuICovXG5cbnZhciBsb2NhbGVzID0ge30sXG4gICAgcGx1Z2lucyA9IHt9LFxuICAgIGxhbmcgPSAnZW4nLFxuICAgIF9yZXMgPSB7XG4gICAgICAgIE1NTU06IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICAgICAgICBNTU06IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgICAgICAgZGRkZDogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICAgICAgICBkZGQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgIGRkOiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gICAgICAgIEE6IFsnQU0nLCAnUE0nXVxuICAgIH0sXG4gICAgX2Zvcm1hdHRlciA9IHtcbiAgICAgICAgWVlZWTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMDAwJyArIGQuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTQpOyB9LFxuICAgICAgICBZWTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyBkLmdldEZ1bGxZZWFyKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgWTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXRGdWxsWWVhcigpOyB9LFxuICAgICAgICBNTU1NOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuTU1NTVtkLmdldE1vbnRoKCldOyB9LFxuICAgICAgICBNTU06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5NTU1bZC5nZXRNb250aCgpXTsgfSxcbiAgICAgICAgTU06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgKGQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIE06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIChkLmdldE1vbnRoKCkgKyAxKTsgfSxcbiAgICAgICAgREQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgRDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXREYXRlKCk7IH0sXG4gICAgICAgIEhIOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBIOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyBkLmdldEhvdXJzKCk7IH0sXG4gICAgICAgIEE6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5BW2QuZ2V0SG91cnMoKSA+IDExIHwgMF07IH0sXG4gICAgICAgIGhoOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIChkLmdldEhvdXJzKCkgJSAxMiB8fCAxMikpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgaDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyKTsgfSxcbiAgICAgICAgbW06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgbTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXRNaW51dGVzKCk7IH0sXG4gICAgICAgIHNzOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0U2Vjb25kcygpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIHM6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIGQuZ2V0U2Vjb25kcygpOyB9LFxuICAgICAgICBTU1M6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAwJyArIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLnNsaWNlKC0zKTsgfSxcbiAgICAgICAgU1M6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgKGQuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCB8IDApKS5zbGljZSgtMik7IH0sXG4gICAgICAgIFM6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIChkLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwIHwgMCk7IH0sXG4gICAgICAgIGRkZGQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5kZGRkW2QuZ2V0RGF5KCldOyB9LFxuICAgICAgICBkZGQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5kZGRbZC5nZXREYXkoKV07IH0sXG4gICAgICAgIGRkOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuZGRbZC5nZXREYXkoKV07IH0sXG4gICAgICAgIFo6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gMC42IHwgMDtcbiAgICAgICAgICAgIHJldHVybiAob2Zmc2V0ID4gMCA/ICctJyA6ICcrJykgKyAoJzAwMCcgKyBNYXRoLmFicyhvZmZzZXQgLSAob2Zmc2V0ICUgMTAwICogMC40IHwgMCkpKS5zbGljZSgtNCk7XG4gICAgICAgIH0sXG4gICAgICAgIFpaOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBtb2QgPSBNYXRoLmFicyhvZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIChvZmZzZXQgPiAwID8gJy0nIDogJysnKSArICgnMCcgKyAobW9kIC8gNjAgfCAwKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIG1vZCAlIDYwKS5zbGljZSgtMik7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3Q6IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0cjsgfSxcbiAgICAgICAgcmVzOiBfcmVzXG4gICAgfSxcbiAgICBfcGFyc2VyID0ge1xuICAgICAgICBZWVlZOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkezR9Lywgc3RyKTsgfSxcbiAgICAgICAgWTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZHsxLDR9Lywgc3RyKTsgfSxcbiAgICAgICAgTU1NTTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZpbmQodGhpcy5yZXMuTU1NTSwgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSsrO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgTU1NOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZmluZCh0aGlzLnJlcy5NTU0sIHN0cik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUrKztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIE1NOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgTTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBERDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIEQ6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgSEg6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBIOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIEE6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmZpbmQodGhpcy5yZXMuQSwgc3RyKTsgfSxcbiAgICAgICAgaGg6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBoOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIG1tOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgbTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBzczogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIHM6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgU1NTOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkezEsM30vLCBzdHIpOyB9LFxuICAgICAgICBTUzogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAqPSAxMDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIFM6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5leGVjKC9eXFxkLywgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAqPSAxMDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBaOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZXhlYygvXltcXCstXVxcZHsyfVswLTVdXFxkLywgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IChyZXN1bHQudmFsdWUgLyAxMDAgfCAwKSAqIC02MCAtIHJlc3VsdC52YWx1ZSAlIDEwMDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIFpaOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIGFyciA9IC9eKFtcXCstXSkoXFxkezJ9KTooWzAtNV1cXGQpLy5leGVjKHN0cikgfHwgWycnLCAnJywgJycsICcnXTtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAwIC0gKChhcnJbMV0gKyBhcnJbMl0gfCAwKSAqIDYwICsgKGFyclsxXSArIGFyclszXSB8IDApKSwgbGVuZ3RoOiBhcnJbMF0ubGVuZ3RoIH07XG4gICAgICAgIH0sXG4gICAgICAgIGgxMjogZnVuY3Rpb24gKGgsIGEpIHsgcmV0dXJuIChoID09PSAxMiA/IDAgOiBoKSArIGEgKiAxMjsgfSxcbiAgICAgICAgZXhlYzogZnVuY3Rpb24gKHJlLCBzdHIpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAocmUuZXhlYyhzdHIpIHx8IFsnJ10pWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHJlc3VsdCB8IDAsIGxlbmd0aDogcmVzdWx0Lmxlbmd0aCB9O1xuICAgICAgICB9LFxuICAgICAgICBmaW5kOiBmdW5jdGlvbiAoYXJyYXksIHN0cikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gLTEsIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGgsIGl0ZW07IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJheVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0ci5pbmRleE9mKGl0ZW0pICYmIGl0ZW0ubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gaXRlbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGluZGV4LCBsZW5ndGg6IGxlbmd0aCB9O1xuICAgICAgICB9LFxuICAgICAgICBwcmU6IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0cjsgfSxcbiAgICAgICAgcmVzOiBfcmVzXG4gICAgfSxcbiAgICBleHRlbmQgPSBmdW5jdGlvbiAoYmFzZSwgcHJvcHMsIG92ZXJyaWRlLCByZXMpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9LCBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYmFzZSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBiYXNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcHMgfHwge30pIHtcbiAgICAgICAgICAgIGlmICghKCEhb3ZlcnJpZGUgXiAhIW9ialtrZXldKSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBvYmoucmVzID0gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBwcm90byA9IHtcbiAgICAgICAgX2Zvcm1hdHRlcjogX2Zvcm1hdHRlcixcbiAgICAgICAgX3BhcnNlcjogX3BhcnNlclxuICAgIH0sXG4gICAgbG9jYWxpemVkX3Byb3RvLFxuICAgIGRhdGU7XG5cbi8qKlxuICogQ29tcGlsaW5nIGZvcm1hdCBzdHJpbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0U3RyaW5nIC0gQSBmb3JtYXQgc3RyaW5nXG4gKiBAcmV0dXJucyB7QXJyYXkuPHN0cmluZz59IEEgY29tcGlsZWQgb2JqZWN0XG4gKi9cbnByb3RvLmNvbXBpbGUgPSBmdW5jdGlvbiAoZm9ybWF0U3RyaW5nKSB7XG4gICAgdmFyIHJlID0gL1xcWyhbXlxcW1xcXV18XFxbW15cXFtcXF1dKl0pKl18KFtBLVphLXpdKVxcMit8XFwuezN9fC4vZywga2V5cywgcGF0dGVybiA9IFtmb3JtYXRTdHJpbmddO1xuXG4gICAgd2hpbGUgKChrZXlzID0gcmUuZXhlYyhmb3JtYXRTdHJpbmcpKSkge1xuICAgICAgICBwYXR0ZXJuW3BhdHRlcm4ubGVuZ3RoXSA9IGtleXNbMF07XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuO1xufTtcblxuLyoqXG4gKiBGb3JtYXR0aW5nIGRhdGUgYW5kIHRpbWUgb2JqZWN0cyAoRGF0ZSAtPiBTdHJpbmcpXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gYXJnIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3V0Y10gLSBPdXRwdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmdcbiAqL1xucHJvdG8uZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGVPYmosIGFyZywgdXRjKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMgfHwgZGF0ZSwgcGF0dGVybiA9IHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnID8gY3R4LmNvbXBpbGUoYXJnKSA6IGFyZyxcbiAgICAgICAgb2Zmc2V0ID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgICAgICBkID0gY3R4LmFkZE1pbnV0ZXMoZGF0ZU9iaiwgdXRjID8gb2Zmc2V0IDogMCksXG4gICAgICAgIGZvcm1hdHRlciA9IGN0eC5fZm9ybWF0dGVyLCBzdHIgPSAnJztcblxuICAgIGQuZ2V0VGltZXpvbmVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGMgPyAwIDogb2Zmc2V0OyB9O1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aCwgdG9rZW47IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0b2tlbiA9IHBhdHRlcm5baV07XG4gICAgICAgIHN0ciArPSBmb3JtYXR0ZXJbdG9rZW5dID8gZm9ybWF0dGVyLnBvc3QoZm9ybWF0dGVyW3Rva2VuXShkLCBwYXR0ZXJuWzBdKSkgOiB0b2tlbi5yZXBsYWNlKC9cXFsoLiopXS8sICckMScpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQcmUtcGFyc2luZyBkYXRlIGFuZCB0aW1lIHN0cmluZ3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIC0gQSBkYXRlIGFuZCB0aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZyAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1dGNdIC0gSW5wdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIHByZS1wYXJzZWQgcmVzdWx0IG9iamVjdFxuICovXG5wcm90by5wcmVwYXJzZSA9IGZ1bmN0aW9uIChkYXRlU3RyaW5nLCBhcmcpIHtcbiAgICB2YXIgY3R4ID0gdGhpcyB8fCBkYXRlLCBwYXR0ZXJuID0gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgPyBjdHguY29tcGlsZShhcmcpIDogYXJnLFxuICAgICAgICBkdCA9IHsgWTogMTk3MCwgTTogMSwgRDogMSwgSDogMCwgQTogMCwgaDogMCwgbTogMCwgczogMCwgUzogMCwgWjogMCwgX2luZGV4OiAwLCBfbGVuZ3RoOiAwLCBfbWF0Y2g6IDAgfSxcbiAgICAgICAgY29tbWVudCA9IC9cXFsoLiopXS8sIHBhcnNlciA9IGN0eC5fcGFyc2VyLCBvZmZzZXQgPSAwO1xuXG4gICAgZGF0ZVN0cmluZyA9IHBhcnNlci5wcmUoZGF0ZVN0cmluZyk7XG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCB0b2tlbiwgcmVzdWx0OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSBwYXR0ZXJuW2ldO1xuICAgICAgICBpZiAocGFyc2VyW3Rva2VuXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VyW3Rva2VuXShkYXRlU3RyaW5nLnNsaWNlKG9mZnNldCksIHBhdHRlcm5bMF0pO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgKz0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgIGR0W3Jlc3VsdC50b2tlbiB8fCB0b2tlbi5jaGFyQXQoMCldID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgZHQuX21hdGNoKys7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09IGRhdGVTdHJpbmcuY2hhckF0KG9mZnNldCkgfHwgdG9rZW4gPT09ICcgJykge1xuICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWVudC50ZXN0KHRva2VuKSAmJiAhZGF0ZVN0cmluZy5zbGljZShvZmZzZXQpLmluZGV4T2YoY29tbWVudC5leGVjKHRva2VuKVsxXSkpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSB0b2tlbi5sZW5ndGggLSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnLi4uJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gZGF0ZVN0cmluZy5sZW5ndGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGR0LkggPSBkdC5IIHx8IHBhcnNlci5oMTIoZHQuaCwgZHQuQSk7XG4gICAgZHQuX2luZGV4ID0gb2Zmc2V0O1xuICAgIGR0Ll9sZW5ndGggPSBkYXRlU3RyaW5nLmxlbmd0aDtcbiAgICByZXR1cm4gZHQ7XG59O1xuXG4vKipcbiAqIFBhcnNpbmcgb2YgZGF0ZSBhbmQgdGltZSBzdHJpbmcgKFN0cmluZyAtPiBEYXRlKVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHJpbmcgLSBBIGRhdGUtdGltZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbdXRjXSAtIElucHV0IGFzIFVUQ1xuICogQHJldHVybnMge0RhdGV9IEEgRGF0ZSBvYmplY3RcbiAqL1xucHJvdG8ucGFyc2UgPSBmdW5jdGlvbiAoZGF0ZVN0cmluZywgYXJnLCB1dGMpIHtcbiAgICB2YXIgY3R4ID0gdGhpcyB8fCBkYXRlLCBwYXR0ZXJuID0gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgPyBjdHguY29tcGlsZShhcmcpIDogYXJnLFxuICAgICAgICBkdCA9IGN0eC5wcmVwYXJzZShkYXRlU3RyaW5nLCBwYXR0ZXJuKTtcblxuICAgIGlmIChjdHguaXNWYWxpZChkdCkpIHtcbiAgICAgICAgZHQuTSAtPSBkdC5ZIDwgMTAwID8gMjI4MDEgOiAxOyAvLyAyMjgwMSA9IDE5MDAgKiAxMiArIDFcbiAgICAgICAgaWYgKHV0YyB8fCB+Y3R4Ll9wYXJzZXIuZmluZChwYXR0ZXJuLCAnWlonKS52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGR0LlksIGR0Lk0sIGR0LkQsIGR0LkgsIGR0Lm0gKyBkdC5aLCBkdC5zLCBkdC5TKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGR0LlksIGR0Lk0sIGR0LkQsIGR0LkgsIGR0Lm0sIGR0LnMsIGR0LlMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbn07XG5cbi8qKlxuICogRGF0ZSBhbmQgdGltZSBzdHJpbmcgdmFsaWRhdGlvblxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBhcmcxIC0gQSBwcmUtcGFyc2VkIHJlc3VsdCBvYmplY3Qgb3IgYSBkYXRlIGFuZCB0aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IFthcmcyXSAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZGF0ZSBhbmQgdGltZSBzdHJpbmcgaXMgYSB2YWxpZCBkYXRlIGFuZCB0aW1lXG4gKi9cbnByb3RvLmlzVmFsaWQgPSBmdW5jdGlvbiAoYXJnMSwgYXJnMikge1xuICAgIHZhciBjdHggPSB0aGlzIHx8IGRhdGUsIGR0ID0gdHlwZW9mIGFyZzEgPT09ICdzdHJpbmcnID8gY3R4LnByZXBhcnNlKGFyZzEsIGFyZzIpIDogYXJnMSxcbiAgICAgICAgbGFzdCA9IFszMSwgMjggKyBjdHguaXNMZWFwWWVhcihkdC5ZKSB8IDAsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVtkdC5NIC0gMV07XG5cbiAgICByZXR1cm4gIShcbiAgICAgICAgZHQuX2luZGV4IDwgMSB8fCBkdC5fbGVuZ3RoIDwgMSB8fCBkdC5faW5kZXggLSBkdC5fbGVuZ3RoIHx8IGR0Ll9tYXRjaCA8IDEgfHxcbiAgICAgICAgZHQuWSA8IDEgfHwgZHQuWSA+IDk5OTkgfHwgZHQuTSA8IDEgfHwgZHQuTSA+IDEyIHx8IGR0LkQgPCAxIHx8IGR0LkQgPiBsYXN0IHx8XG4gICAgICAgIGR0LkggPCAwIHx8IGR0LkggPiAyMyB8fCBkdC5tIDwgMCB8fCBkdC5tID4gNTkgfHwgZHQucyA8IDAgfHwgZHQucyA+IDU5IHx8IGR0LlMgPCAwIHx8IGR0LlMgPiA5OTkgfHxcbiAgICAgICAgZHQuWiA8IC04NDAgfHwgZHQuWiA+IDcyMFxuICAgICk7XG59O1xuXG4vKipcbiAqIEZvcm1hdCB0cmFuc2Zvcm1hdGlvbiBvZiBkYXRlIGFuZCB0aW1lIHN0cmluZyAoU3RyaW5nIC0+IFN0cmluZylcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIC0gQSBkYXRlIGFuZCB0aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZzEgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdCBiZWZvcmUgdHJhbnNmb3JtYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcyIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3QgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3V0Y10gLSBPdXRwdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmdcbiAqL1xucHJvdG8udHJhbnNmb3JtID0gZnVuY3Rpb24gKGRhdGVTdHJpbmcsIGFyZzEsIGFyZzIsIHV0Yykge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMgfHwgZGF0ZTtcbiAgICByZXR1cm4gY3R4LmZvcm1hdChjdHgucGFyc2UoZGF0ZVN0cmluZywgYXJnMSksIGFyZzIsIHV0Yyk7XG59O1xuXG4vKipcbiAqIEFkZGluZyB5ZWFyc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHllYXJzIC0gTnVtYmVyIG9mIHllYXJzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZFllYXJzID0gZnVuY3Rpb24gKGRhdGVPYmosIHllYXJzKSB7XG4gICAgcmV0dXJuICh0aGlzIHx8IGRhdGUpLmFkZE1vbnRocyhkYXRlT2JqLCB5ZWFycyAqIDEyKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIG1vbnRoc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1vbnRocyAtIE51bWJlciBvZiBtb250aHMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkTW9udGhzID0gZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRocykge1xuICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZU9iai5nZXRUaW1lKCkpO1xuXG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyBtb250aHMpO1xuICAgIHJldHVybiBkO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgZGF5c1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IGRheXMgLSBOdW1iZXIgb2YgZGF5cyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGREYXlzID0gZnVuY3Rpb24gKGRhdGVPYmosIGRheXMpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0VGltZSgpKTtcblxuICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGRheXMpO1xuICAgIHJldHVybiBkO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgaG91cnNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VycyAtIE51bWJlciBvZiBob3VycyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRIb3VycyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBob3Vycykge1xuICAgIHJldHVybiAodGhpcyB8fCBkYXRlKS5hZGRNaW51dGVzKGRhdGVPYmosIGhvdXJzICogNjApO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgbWludXRlc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbnV0ZXMgLSBOdW1iZXIgb2YgbWludXRlcyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRNaW51dGVzID0gZnVuY3Rpb24gKGRhdGVPYmosIG1pbnV0ZXMpIHtcbiAgICByZXR1cm4gKHRoaXMgfHwgZGF0ZSkuYWRkU2Vjb25kcyhkYXRlT2JqLCBtaW51dGVzICogNjApO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgc2Vjb25kc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBOdW1iZXIgb2Ygc2Vjb25kcyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRTZWNvbmRzID0gZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcbiAgICByZXR1cm4gKHRoaXMgfHwgZGF0ZSkuYWRkTWlsbGlzZWNvbmRzKGRhdGVPYmosIHNlY29uZHMgKiAxMDAwKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIG1pbGxpc2Vjb25kc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKGRhdGVPYmosIG1pbGxpc2Vjb25kcykge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldFRpbWUoKSArIG1pbGxpc2Vjb25kcyk7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0aW5nIHR3byBkYXRlcyAoZGF0ZTEgLSBkYXRlMilcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTEgLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUyIC0gQSBEYXRlIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBvYmplY3Qgb2Ygc3VidHJhY3RpbmcgZGF0ZTIgZnJvbSBkYXRlMVxuICovXG5wcm90by5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChkYXRlMSwgZGF0ZTIpIHtcbiAgICB2YXIgZGVsdGEgPSBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b01pbGxpc2Vjb25kczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhO1xuICAgICAgICB9LFxuICAgICAgICB0b1NlY29uZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YSAvIDEwMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvTWludXRlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhIC8gNjAwMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvSG91cnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YSAvIDM2MDAwMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvRGF5czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhIC8gODY0MDAwMDA7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLyoqXG4gKiBXaGV0aGVyIGEgeWVhciBpcyBhIGxlYXAgeWVhclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBBIHllYXIgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSB5ZWFyIGlzIGEgbGVhcCB5ZWFyXG4gKi9cbnByb3RvLmlzTGVhcFllYXIgPSBmdW5jdGlvbiAoeSkge1xuICAgIHJldHVybiAoISh5ICUgNCkgJiYgISEoeSAlIDEwMCkpIHx8ICEoeSAlIDQwMCk7XG59O1xuXG4vKipcbiAqIENvbXBhcmlzb24gb2YgdHdvIGRhdGVzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUxIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtEYXRlfSBkYXRlMiAtIEEgRGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgYXJlIHRoZSBzYW1lIGRheSAodGltZSBpcyBpZ25vcmVkKVxuICovXG5wcm90by5pc1NhbWVEYXkgPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIGRhdGUxLnRvRGF0ZVN0cmluZygpID09PSBkYXRlMi50b0RhdGVTdHJpbmcoKTtcbn07XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBuZXcgbG9jYWxlXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEEgbGFuZ3VhZ2UgY29kZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbG9jYWxlIC0gQSBsb2NhbGUgaW5zdGFsbGVyXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xucHJvdG8ubG9jYWxlID0gZnVuY3Rpb24gKGNvZGUsIGxvY2FsZSkge1xuICAgIGlmICghbG9jYWxlc1tjb2RlXSkge1xuICAgICAgICBsb2NhbGVzW2NvZGVdID0gbG9jYWxlO1xuICAgIH1cbn07XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBuZXcgcGx1Z2luXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEEgcGx1Z2luIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBsdWdpbiAtIEEgcGx1Z2luIGluc3RhbGxlclxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbnByb3RvLnBsdWdpbiA9IGZ1bmN0aW9uIChuYW1lLCBwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbnNbbmFtZV0pIHtcbiAgICAgICAgcGx1Z2luc1tuYW1lXSA9IHBsdWdpbjtcbiAgICB9XG59O1xuXG5sb2NhbGl6ZWRfcHJvdG8gPSBleHRlbmQocHJvdG8pO1xuZGF0ZSA9IGV4dGVuZChwcm90byk7XG5cbi8qKlxuICogQ2hhbmdpbmcgbG9jYWxlc1xuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IFtsb2NhbGVdIC0gQSBsb2NhbGUgaW5zdGFsbGVyIG9yIGxhbmd1YWdlIGNvZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IGxhbmd1YWdlIGNvZGVcbiAqL1xuZGF0ZS5sb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgdmFyIGluc3RhbGwgPSB0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nID8gbG9jYWxlIDogZGF0ZS5sb2NhbGVbbG9jYWxlXTtcblxuICAgIGlmICghaW5zdGFsbCkge1xuICAgICAgICByZXR1cm4gbGFuZztcbiAgICB9XG4gICAgbGFuZyA9IGluc3RhbGwocHJvdG8pO1xuXG4gICAgdmFyIGV4dGVuc2lvbiA9IGxvY2FsZXNbbGFuZ10gfHwge307XG4gICAgdmFyIHJlcyA9IGV4dGVuZChfcmVzLCBleHRlbnNpb24ucmVzLCB0cnVlKTtcbiAgICB2YXIgZm9ybWF0dGVyID0gZXh0ZW5kKF9mb3JtYXR0ZXIsIGV4dGVuc2lvbi5mb3JtYXR0ZXIsIHRydWUsIHJlcyk7XG4gICAgdmFyIHBhcnNlciA9IGV4dGVuZChfcGFyc2VyLCBleHRlbnNpb24ucGFyc2VyLCB0cnVlLCByZXMpO1xuXG4gICAgZGF0ZS5fZm9ybWF0dGVyID0gbG9jYWxpemVkX3Byb3RvLl9mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgZGF0ZS5fcGFyc2VyID0gbG9jYWxpemVkX3Byb3RvLl9wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICBmb3IgKHZhciBwbHVnaW4gaW4gcGx1Z2lucykge1xuICAgICAgICBkYXRlLmV4dGVuZChwbHVnaW5zW3BsdWdpbl0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYW5nO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbmFsIGV4dGVuc2lvblxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbiAtIEFuIGV4dGVuc2lvbiBvYmplY3RcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5kYXRlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbnNpb24pIHtcbiAgICB2YXIgcmVzID0gZXh0ZW5kKGRhdGUuX3BhcnNlci5yZXMsIGV4dGVuc2lvbi5yZXMpO1xuICAgIHZhciBleHRlbmRlciA9IGV4dGVuc2lvbi5leHRlbmRlciB8fCB7fTtcblxuICAgIGRhdGUuX2Zvcm1hdHRlciA9IGV4dGVuZChkYXRlLl9mb3JtYXR0ZXIsIGV4dGVuc2lvbi5mb3JtYXR0ZXIsIGZhbHNlLCByZXMpO1xuICAgIGRhdGUuX3BhcnNlciA9IGV4dGVuZChkYXRlLl9wYXJzZXIsIGV4dGVuc2lvbi5wYXJzZXIsIGZhbHNlLCByZXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGV4dGVuZGVyKSB7XG4gICAgICAgIGlmICghZGF0ZVtrZXldKSB7XG4gICAgICAgICAgICBkYXRlW2tleV0gPSBleHRlbmRlcltrZXldO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBJbXBvcnRpbmcgcGx1Z2luc1xuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IHBsdWdpbiAtIEEgcGx1Z2luIGluc3RhbGxlciBvciBwbHVnaW4gbmFtZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmRhdGUucGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIHZhciBpbnN0YWxsID0gdHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJyA/IHBsdWdpbiA6IGRhdGUucGx1Z2luW3BsdWdpbl07XG5cbiAgICBpZiAoaW5zdGFsbCkge1xuICAgICAgICBkYXRlLmV4dGVuZChwbHVnaW5zW2luc3RhbGwocHJvdG8sIGxvY2FsaXplZF9wcm90byldIHx8IHt9KTtcbiAgICB9XG59O1xuXG52YXIgZGF0ZSQxID0gZGF0ZTtcblxuZXhwb3J0IHsgZGF0ZSQxIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBkYXRlIGZyb20gJ2RhdGUtYW5kLXRpbWUnO1xuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gJy4vY29tcG9uZW50cy90YXNrQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyB0YXNrQXJyYXksIHRhc2tSZWFkZXIgfSBmcm9tICcuL2RhdGEvdGFza1N0b3JhZ2UuanMnXG5pbXBvcnQgeyBvdmVyTGF5UmVuZGVyZWQsIGZvcm1DcmVhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL3Rhc2tJbnB1dENyZWF0b3InXG5cblxuY29uc3QgdGVzdGkgPSBuZXdUYXNrKFwidGVzdGlcIiwgXCJwcm9qZWt0aVwiLCBcInTDpHJrZcOkXCIsIFwicHZtXCIsIFwiaW5mb2FcIik7XG5jb25zb2xlLmxvZyh0ZXN0aSlcbnRlc3RpLmNvbXBTdGF0dXModHJ1ZSlcbmNvbnNvbGUubG9nKHRlc3RpLmdldENvbXBTdGF0dXMoKSlcbmNvbnNvbGUubG9nKHRlc3RpKVxuXG50YXNrQXJyYXkucHVzaCh0ZXN0aSlcblxuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxuXG5cbmZ1bmN0aW9uIGJ1dHRvbiAoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCB0YXNrIHRvIGxpc3RcIlxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bicpIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuXG5mdW5jdGlvbiBidXR0b24yICgpIHtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IFRhc2tcIlxuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bjInKSBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cblxuZnVuY3Rpb24gYnV0dG9uMyAoKSB7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkxvZyBBcnJheVwiXG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuMycpIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuXG5idXR0b24yKCk7XG5idXR0b24oKTtcbmJ1dHRvbjMoKTtcblxubGV0IGJ1dHRvbkxpc3RlbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bicpXG5sZXQgYnV0dG9uTGlzdGVuZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bjInKVxubGV0IGJ1dHRvbkxpc3RlbmVyMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4zJylcblxuXG5idXR0b25MaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRPdmVybGF5JylcbiAgICBsZXQgbmFtZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRhc2tOYW1lXCJdJykudmFsdWVcbiAgICBsZXQgcHJvamVjdCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByb2plY3ROYW1lXCJdJykudmFsdWVcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICAgbGV0IGRhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwic2VsZWN0ZWREYXRlXCJdJykudmFsdWVcbiAgICBsZXQgaW5mbyA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImluZm9cIl0nKS52YWx1ZVxuICAgIGNvbnNvbGUubG9nKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkYXRlLCBpbmZvKVxuICAgIFxuICAgIGNvbnN0IHRlc3RpMiA9IG5ld1Rhc2sobmFtZSwgcHJvamVjdCwgcHJpb3JpdHksIGRhdGUsIGluZm8pXG4gICAgdGFza0FycmF5LnB1c2godGVzdGkyKVxufSlcblxuYnV0dG9uTGlzdGVuZXIyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3ZlckxheVJlbmRlcmVkKVxuYnV0dG9uTGlzdGVuZXIzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza1JlYWRlcikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=