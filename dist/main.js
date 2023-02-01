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

/***/ "./src/components/controller/taskController.js":
/*!*****************************************************!*\
  !*** ./src/components/controller/taskController.js ***!
  \*****************************************************/
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

/***/ "./src/components/model/storage.js":
/*!*****************************************!*\
  !*** ./src/components/model/storage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });


const taskArray = {
    taskStorage: []
}




/***/ }),

/***/ "./src/components/view/DOM.js":
/*!************************************!*\
  !*** ./src/components/view/DOM.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/taskController */ "./src/components/controller/taskController.js");
/* harmony import */ var _model_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/storage */ "./src/components/model/storage.js");
/* harmony import */ var _functions_storageLoopers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/storageLoopers */ "./src/functions/storageLoopers.js");




const DOM = (() => {


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


    function addToTaskListListener() {
        let buttonListener2 = document.querySelector('#addToTaskList')
    
        buttonListener2.addEventListener('click', function(){
            let form = document.querySelector('#inputOverlay')
            let name = form.querySelector('input[name="taskName"]').value
            let project = form.querySelector('input[name="projectName"]').value
            let priority = form.querySelector('input[name="priority"]').value
            let date = form.querySelector('input[id="selectedDate"]').value
            let info = form.querySelector('input[name="info"]').value
            
            const newTask1 = new _controller_taskController__WEBPACK_IMPORTED_MODULE_0__.newTask(name, project, priority, new Date(`${date}T00:00`), info)
            _model_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.taskStorage.push(newTask1)
            newTask1.isTheDate()
            overLayDestroyer()
        })
    }
    
    function logArrayListener() {
        let logArrayBtn = document.querySelector('#logArrayBtn')
        logArrayBtn.addEventListener('click', function () {;(0,_functions_storageLoopers__WEBPACK_IMPORTED_MODULE_2__.looper)(_model_storage__WEBPACK_IMPORTED_MODULE_1__.taskArray.taskStorage)})
    }
    return { createUI, overLayRendered, createTaskCard, addToTaskListListener, logArrayListener }
})()




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
/* harmony import */ var _components_view_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/view/DOM */ "./src/components/view/DOM.js");


function looper(storage) {
    storage.forEach(element => {
        console.log(element)
    });
}

function objectLooper(storageArray) {
    storageArray.forEach(task => _components_view_DOM__WEBPACK_IMPORTED_MODULE_0__.DOM.createTaskCard(task))
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
/* harmony import */ var _components_controller_taskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/controller/taskController.js */ "./src/components/controller/taskController.js");
/* harmony import */ var _components_model_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/model/storage.js */ "./src/components/model/storage.js");
/* harmony import */ var _components_view_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view/DOM */ "./src/components/view/DOM.js");
/* harmony import */ var _functions_storageLoopers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/storageLoopers */ "./src/functions/storageLoopers.js");









const testi = new _components_controller_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask("Test Task", "Project", "Important", "2023-01-27", "Do it ya git");
const test2 = new _components_controller_taskController_js__WEBPACK_IMPORTED_MODULE_2__.newTask("Toinen", "Project", "Important", "2023-01-27", "Do it ya git");
_components_model_storage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.taskStorage.push(testi)
_components_model_storage_js__WEBPACK_IMPORTED_MODULE_3__.taskArray.taskStorage.push(test2)


_components_view_DOM__WEBPACK_IMPORTED_MODULE_4__.DOM.createUI()

let buttonListener = document.querySelector('#addTaskButton')
buttonListener.addEventListener('click', _components_view_DOM__WEBPACK_IMPORTED_MODULE_4__.DOM.overLayRendered)

/* objectLooper(taskArray['taskStorage']) */

_components_view_DOM__WEBPACK_IMPORTED_MODULE_4__.DOM.addToTaskListListener()
_components_view_DOM__WEBPACK_IMPORTED_MODULE_4__.DOM.logArrayListener()

_components_view_DOM__WEBPACK_IMPORTED_MODULE_4__.DOM.createTaskCard(testi)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pzRDtBQUNWO0FBQ1c7O0FBRXZEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCxlQUFlO0FBQ2pFOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNLO0FBQ21DO0FBQ1g7QUFDYjtBQUNhOzs7O0FBSXpELGtCQUFrQiw2RUFBTztBQUN6QixrQkFBa0IsNkVBQU87QUFDekIsb0ZBQTZCO0FBQzdCLG9GQUE2Qjs7O0FBRzdCLDhEQUFZOztBQUVaO0FBQ0EseUNBQXlDLHFFQUFtQjs7QUFFNUQ7O0FBRUEsMkVBQXlCO0FBQ3pCLHNFQUFvQjs7QUFFcEIsb0VBQWtCLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9jb21wb25lbnRzL21vZGVsL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2NvbXBvbmVudHMvdmlldy9ET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Z1bmN0aW9ucy9zdG9yYWdlTG9vcGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1hbmQtdGltZS9lc20vZGF0ZS1hbmQtdGltZS5tanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAudGFza0Rpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTB2aDtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcblxcbiAgLmlucHV0T3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTQ2QzAwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHotaW5kZXg6IDc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcblxcbiAgLnRhc2tDYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgfVxcblxcbiAgLnJpZ2h0VG9wU2lkZUNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix1TEFBdUw7SUFDdkwsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC50YXNrRGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5MHZoO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAuaW5wdXRPdmVybGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDZDMDA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgei1pbmRleDogNztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICB9XFxuXFxuXFxuICAudGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICB9XFxuXFxuICAucmlnaHRUb3BTaWRlQ29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSBcImRhdGUtYW5kLXRpbWVcIlxuXG5jbGFzcyBuZXdQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0XG4gICAgfVxuICAgIGNoYW5nZVByb2plY3QoeCkgeyAvL3RoaXMgbmVlZHMgZnVydGhlciB3b3JrIG9uY2UgcHJvamVjdCBtYW5hZ2VtZW50IGlzIGltcGxlbWVudGVkXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3QgPSB4XG4gICAgfVxufVxuXG5cbmNsYXNzIG5ld1Rhc2sgZXh0ZW5kcyBuZXdQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgaW5mbykge1xuICAgICAgICBzdXBlcihwcm9qZWN0KVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMuaW5mbyA9IGluZm9cbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMudXVpZCA9IGNyeXB0by5yYW5kb21VVUlEKClcbiAgICB9XG4gICAgLy9HZXR0ZXJzXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgIH1cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlXG4gICAgfVxuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZm9cbiAgICB9XG4gICAgZ2V0Q29tcGxldGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZWQ7XG4gICAgfVxuICAgIGdldFV1aWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnV1aWRcbiAgICB9XG4gICAgXG4gICAgLy9DaGFuZ2Vyc1xuICAgIGNoYW5nZU5hbWUoeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID0geFxuICAgIH1cbiAgICBjaGFuZ2VQcmlvcml0eSh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5ID0geFxuICAgIH1cbiAgICBjaGFuZ2VEYXRlKHgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVlRGF0ZSA9IHhcbiAgICB9XG4gICAgY2hhbmdlSW5mbyh4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZm8gPSB4XG4gICAgfVxuICAgIGNoYW5nZUNvbXBsZXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29tcGxldGVkID09PSBmYWxzZSl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL090aGVyIG1ldGhvZHNcbiAgICBpc1RoZURhdGUoKSB7XG4gICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgIGxldCBkdWVEYXRlID0gdGhpcy5kdWVEYXRlXG4gICAgICAgIGxldCBkaWZmZXJlbmNlID0gZHVlRGF0ZS5nZXRUaW1lKCkgLSB0b2RheTtcbiAgICAgICAgbGV0IGRheXMgPSBNYXRoLmNlaWwoZGlmZmVyZW5jZSAvICgxMDAwICogMzYwMCAqIDI0KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrIGlzIGR1ZSBpbiAke2RheXN9IGRheXMuYClcbiAgICAgICAgcmV0dXJuIGRheXNcbiAgICB9XG5cbiAgICBwcm9qZWN0Q29ubmVjdG9yKCkge1xuXG4gICAgfVxufVxuXG5cbmV4cG9ydCB7XG4gICAgbmV3VGFza1xufSAiLCJcblxuY29uc3QgdGFza0FycmF5ID0ge1xuICAgIHRhc2tTdG9yYWdlOiBbXVxufVxuXG5cbmV4cG9ydCB7dGFza0FycmF5fSIsImltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi4vY29udHJvbGxlci90YXNrQ29udHJvbGxlclwiXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi4vbW9kZWwvc3RvcmFnZVwiXG5pbXBvcnQgeyBsb29wZXIgfSBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL3N0b3JhZ2VMb29wZXJzXCJcblxuY29uc3QgRE9NID0gKCgpID0+IHtcblxuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVJKCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoKVxuICAgICAgICBjcmVhdGVNYWluKClcbiAgICAgICAgY3JlYXRlU2lkZWJhcigpXG4gICAgICAgIGNyZWF0ZVRhc2tEaXNwbGF5KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvZ28uaW5uZXJIVE1MID0gYDxoMT50YXNrTGlzdGVyPC9oMT5gXG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnaGVhZGVybG9nbycpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkNvbnRhaW5lcicpXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXG5cblxuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLmlubmVySFRNTCA9IFwiTmV3IFRhc2tcIlxuICAgICAgICBhZGRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkVGFza0J1dHRvbicpIFxuICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0eWxlMScpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKVxuXG4gICAgICAgIFxuICAgICAgICBsZXQgYWRkVG9UYXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRUb1Rhc2tMaXN0LmlubmVySFRNTCA9IFwiQWRkIHRhc2sgdG8gbGlzdFwiXG4gICAgICAgIGFkZFRvVGFza0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdhZGRUb1Rhc2tMaXN0JylcbiAgICAgICAgYWRkVG9UYXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdidXR0b25zdHlsZTEnKSBcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvVGFza0xpc3QpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICAgICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIgKCkge1xuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgICAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNpZGViYXIpXG5cbiAgICAgICAgbGV0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFsbFRhc2tzQnV0dG9uLmlubmVySFRNTCA9IFwiQWxsIHRhc2tzXCJcbiAgICAgICAgYWxsVGFza3NCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhbGxUYXNrc0J1dHRvbicpXG4gICAgICAgIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0eWxlMicpXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWxsVGFza3NCdXR0b24pXG5cbiAgICAgICAgbGV0IGR1ZVRvZGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGR1ZVRvZGF5QnV0dG9uLmlubmVySFRNTCA9IFwiRHVlIHRvZGF5XCJcbiAgICAgICAgZHVlVG9kYXlCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkdWVUb2RheUJ1dHRvbicpXG4gICAgICAgIGR1ZVRvZGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0eWxlMicpXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZHVlVG9kYXlCdXR0b24pXG5cbiAgICAgICAgbGV0IGxvZ0FycmF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxvZ0FycmF5QnRuLmlubmVySFRNTCA9IFwiTG9nIEFycmF5XCJcbiAgICAgICAgbG9nQXJyYXlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdsb2dBcnJheUJ0bicpXG4gICAgICAgIGxvZ0FycmF5QnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnN0eWxlMicpIFxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxvZ0FycmF5QnRuKVxuICAgICAgICAgICAgXG5cbiAgICAgICAgLy9DcmVhdGUgTGlzdCBmb3IgcHJvamVjdHMgdGhhdCBjeWNsZXMgdGhlIGNvbnRlbnQgZnJvbSBwcm9qZWN0cyBvbiBzdG9yYWdlIGFycmF5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgICAgIGxldCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKCd0YXNrRGlzcGxheScpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spICB7XG4gICAgICAgIGxldCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Rpc3BsYXlcIilcblxuICAgICAgICBsZXQgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpXG4gICAgICAgIHRhc2tEaXNwbGF5LmFwcGVuZENoaWxkKHRhc2tDYXJkKVxuXG4gICAgICAgIGxldCBjYXJkTGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjYXJkTGVmdFNpZGUuY2xhc3NMaXN0LmFkZCgnY2FyZExlZnRTaWRlJylcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZExlZnRTaWRlKVxuXG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJylcbiAgICAgICAgdGFza05hbWUuaW5uZXJIVE1MID0gdGFzay5nZXROYW1lKClcbiAgICAgICAgY2FyZExlZnRTaWRlLmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJylcbiAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJIVE1MID0gdGFzay5nZXRQcm9qZWN0KClcbiAgICAgICAgY2FyZExlZnRTaWRlLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuXG4gICAgICAgIGxldCBjYXJkUmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2FyZFJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdjYXJkUmlnaHRTaWRlJylcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJpZ2h0U2lkZSlcblxuICAgICAgICBsZXQgcmlnaHRUb3BTaWRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJpZ2h0VG9wU2lkZUNvbnQuY2xhc3NMaXN0LmFkZCgncmlnaHRUb3BTaWRlQ29udCcpXG4gICAgICAgIGNhcmRSaWdodFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRUb3BTaWRlQ29udClcblxuICAgICAgICBsZXQgZWRpdEJ1dHRvbkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBlZGl0QnV0dG9uQ29udC5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uQ29udCcpXG4gICAgICAgIGVkaXRCdXR0b25Db250LmlubmVySFRNTCA9IFwiQnV0dG9ucyBoZXJlXCJcbiAgICAgICAgcmlnaHRUb3BTaWRlQ29udC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uQ29udClcblxuICAgICAgICBsZXQgdGFza0RvbmVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEb25lQ2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFza0RvbmVDaGVja2JveCcpXG4gICAgICAgIHRhc2tEb25lQ2hlY2tib3guaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2tkb25lXCIgbmFtZT1cInRhc2tkb25lXCI+PGxhYmVsIGZvcj1cInRhc2tkb25lXCI+RG9uZTwvbGFiZWw+YFxuICAgICAgICByaWdodFRvcFNpZGVDb250LmFwcGVuZENoaWxkKHRhc2tEb25lQ2hlY2tib3gpXG5cbiAgICAgICAgbGV0IHJpZ2h0TG93U2lkZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICByaWdodExvd1NpZGVDb250LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0TG93U2lkZUNvbnQnKVxuICAgICAgICByaWdodExvd1NpZGVDb250LmlubmVySFRNTCA9IGBEdWUgZGF0ZTogJHt0YXNrLmdldERhdGUoKX1gXG4gICAgICAgIGNhcmRSaWdodFNpZGUuYXBwZW5kQ2hpbGQocmlnaHRMb3dTaWRlQ29udClcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3ZlckxheVJlbmRlcmVkICgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEaXNwbGF5XCIpXG4gICAgICAgIGxldCBpbnB1dE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbnB1dE92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dE92ZXJsYXknKVxuICAgICAgICBpbnB1dE92ZXJsYXkuY2xhc3NOYW1lID0gXCJpbnB1dE92ZXJsYXlcIlxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0T3ZlcmxheSlcbiAgICAgICAgZm9ybUNyZWF0b3IgKClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZm9ybUNyZWF0b3IgKCkge1xuICAgICAgICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRPdmVybGF5XCIpO1xuICAgIFxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgXG4gICAgICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgICAgICAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrXCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3ROYW1lXCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByb2plY3RcIik7XG4gICAgXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNlbGVjdFwiKVxuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpXG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTm9ybWFsXCIpXG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpXG4gICAgXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWREYXRlXCIpXG4gICAgICAgIFxuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5mby5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dGFyZWFcIilcbiAgICAgICAgaW5mby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiaW5mb1wiKVxuICAgICAgICBpbmZvLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpXG4gICAgICAgIGluZm8uc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjMwXCIpXG4gICAgICAgIGluZm8uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlc1wiKVxuICAgICAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZSlcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSlcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSlcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGluZm8pXG4gICAgXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb3ZlckxheURlc3Ryb3llcigpIHtcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRPdmVybGF5JylcbiAgICAgICAgb3ZlcmxheS5yZW1vdmUoKVxuICAgIFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYWRkVG9UYXNrTGlzdExpc3RlbmVyKCkge1xuICAgICAgICBsZXQgYnV0dG9uTGlzdGVuZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvVGFza0xpc3QnKVxuICAgIFxuICAgICAgICBidXR0b25MaXN0ZW5lcjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRPdmVybGF5JylcbiAgICAgICAgICAgIGxldCBuYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGFza05hbWVcIl0nKS52YWx1ZVxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcm9qZWN0TmFtZVwiXScpLnZhbHVlXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpLnZhbHVlXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJzZWxlY3RlZERhdGVcIl0nKS52YWx1ZVxuICAgICAgICAgICAgbGV0IGluZm8gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbmZvXCJdJykudmFsdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3VGFzazEgPSBuZXcgbmV3VGFzayhuYW1lLCBwcm9qZWN0LCBwcmlvcml0eSwgbmV3IERhdGUoYCR7ZGF0ZX1UMDA6MDBgKSwgaW5mbylcbiAgICAgICAgICAgIHRhc2tBcnJheVsndGFza1N0b3JhZ2UnXS5wdXNoKG5ld1Rhc2sxKVxuICAgICAgICAgICAgbmV3VGFzazEuaXNUaGVEYXRlKClcbiAgICAgICAgICAgIG92ZXJMYXlEZXN0cm95ZXIoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2dBcnJheUxpc3RlbmVyKCkge1xuICAgICAgICBsZXQgbG9nQXJyYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nQXJyYXlCdG4nKVxuICAgICAgICBsb2dBcnJheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtsb29wZXIodGFza0FycmF5Wyd0YXNrU3RvcmFnZSddKX0pXG4gICAgfVxuICAgIHJldHVybiB7IGNyZWF0ZVVJLCBvdmVyTGF5UmVuZGVyZWQsIGNyZWF0ZVRhc2tDYXJkLCBhZGRUb1Rhc2tMaXN0TGlzdGVuZXIsIGxvZ0FycmF5TGlzdGVuZXIgfVxufSkoKVxuXG5cbmV4cG9ydCB7XG4gICAgRE9NXG59IiwiaW1wb3J0IHsgRE9NIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdmlldy9ET01cIjtcblxuZnVuY3Rpb24gbG9vcGVyKHN0b3JhZ2UpIHtcbiAgICBzdG9yYWdlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdExvb3BlcihzdG9yYWdlQXJyYXkpIHtcbiAgICBzdG9yYWdlQXJyYXkuZm9yRWFjaCh0YXNrID0+IERPTS5jcmVhdGVUYXNrQ2FyZCh0YXNrKSlcbn1cblxuZXhwb3J0IHtcbiAgICBsb29wZXIsXG4gICAgb2JqZWN0TG9vcGVyXG59IiwiLyoqXG4gKiBAcHJlc2VydmUgZGF0ZS1hbmQtdGltZSAoYykgS05PV0xFREdFQ09ERSB8IE1JVFxuICovXG5cbnZhciBsb2NhbGVzID0ge30sXG4gICAgcGx1Z2lucyA9IHt9LFxuICAgIGxhbmcgPSAnZW4nLFxuICAgIF9yZXMgPSB7XG4gICAgICAgIE1NTU06IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICAgICAgICBNTU06IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgICAgICAgZGRkZDogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICAgICAgICBkZGQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgIGRkOiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gICAgICAgIEE6IFsnQU0nLCAnUE0nXVxuICAgIH0sXG4gICAgX2Zvcm1hdHRlciA9IHtcbiAgICAgICAgWVlZWTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMDAwJyArIGQuZ2V0RnVsbFllYXIoKSkuc2xpY2UoLTQpOyB9LFxuICAgICAgICBZWTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICgnMCcgKyBkLmdldEZ1bGxZZWFyKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgWTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXRGdWxsWWVhcigpOyB9LFxuICAgICAgICBNTU1NOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuTU1NTVtkLmdldE1vbnRoKCldOyB9LFxuICAgICAgICBNTU06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5NTU1bZC5nZXRNb250aCgpXTsgfSxcbiAgICAgICAgTU06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgKGQuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIE06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIChkLmdldE1vbnRoKCkgKyAxKTsgfSxcbiAgICAgICAgREQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgRDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXREYXRlKCk7IH0sXG4gICAgICAgIEhIOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0SG91cnMoKSkuc2xpY2UoLTIpOyB9LFxuICAgICAgICBIOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gJycgKyBkLmdldEhvdXJzKCk7IH0sXG4gICAgICAgIEE6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5BW2QuZ2V0SG91cnMoKSA+IDExIHwgMF07IH0sXG4gICAgICAgIGhoOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIChkLmdldEhvdXJzKCkgJSAxMiB8fCAxMikpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgaDogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgKGQuZ2V0SG91cnMoKSAlIDEyIHx8IDEyKTsgfSxcbiAgICAgICAgbW06IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgZC5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTsgfSxcbiAgICAgICAgbTogZnVuY3Rpb24gKGQvKiwgZm9ybWF0U3RyaW5nKi8pIHsgcmV0dXJuICcnICsgZC5nZXRNaW51dGVzKCk7IH0sXG4gICAgICAgIHNzOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gKCcwJyArIGQuZ2V0U2Vjb25kcygpKS5zbGljZSgtMik7IH0sXG4gICAgICAgIHM6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIGQuZ2V0U2Vjb25kcygpOyB9LFxuICAgICAgICBTU1M6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAwJyArIGQuZ2V0TWlsbGlzZWNvbmRzKCkpLnNsaWNlKC0zKTsgfSxcbiAgICAgICAgU1M6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAoJzAnICsgKGQuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMCB8IDApKS5zbGljZSgtMik7IH0sXG4gICAgICAgIFM6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiAnJyArIChkLmdldE1pbGxpc2Vjb25kcygpIC8gMTAwIHwgMCk7IH0sXG4gICAgICAgIGRkZGQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5kZGRkW2QuZ2V0RGF5KCldOyB9LFxuICAgICAgICBkZGQ6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7IHJldHVybiB0aGlzLnJlcy5kZGRbZC5nZXREYXkoKV07IH0sXG4gICAgICAgIGRkOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykgeyByZXR1cm4gdGhpcy5yZXMuZGRbZC5nZXREYXkoKV07IH0sXG4gICAgICAgIFo6IGZ1bmN0aW9uIChkLyosIGZvcm1hdFN0cmluZyovKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gMC42IHwgMDtcbiAgICAgICAgICAgIHJldHVybiAob2Zmc2V0ID4gMCA/ICctJyA6ICcrJykgKyAoJzAwMCcgKyBNYXRoLmFicyhvZmZzZXQgLSAob2Zmc2V0ICUgMTAwICogMC40IHwgMCkpKS5zbGljZSgtNCk7XG4gICAgICAgIH0sXG4gICAgICAgIFpaOiBmdW5jdGlvbiAoZC8qLCBmb3JtYXRTdHJpbmcqLykge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBtb2QgPSBNYXRoLmFicyhvZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIChvZmZzZXQgPiAwID8gJy0nIDogJysnKSArICgnMCcgKyAobW9kIC8gNjAgfCAwKSkuc2xpY2UoLTIpICsgJzonICsgKCcwJyArIG1vZCAlIDYwKS5zbGljZSgtMik7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3Q6IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0cjsgfSxcbiAgICAgICAgcmVzOiBfcmVzXG4gICAgfSxcbiAgICBfcGFyc2VyID0ge1xuICAgICAgICBZWVlZOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkezR9Lywgc3RyKTsgfSxcbiAgICAgICAgWTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZHsxLDR9Lywgc3RyKTsgfSxcbiAgICAgICAgTU1NTTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZpbmQodGhpcy5yZXMuTU1NTSwgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSsrO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgTU1NOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZmluZCh0aGlzLnJlcy5NTU0sIHN0cik7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUrKztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIE1NOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgTTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBERDogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIEQ6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgSEg6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBIOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIEE6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmZpbmQodGhpcy5yZXMuQSwgc3RyKTsgfSxcbiAgICAgICAgaGg6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQvLCBzdHIpOyB9LFxuICAgICAgICBoOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkPy8sIHN0cik7IH0sXG4gICAgICAgIG1tOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkXFxkLywgc3RyKTsgfSxcbiAgICAgICAgbTogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZD8vLCBzdHIpOyB9LFxuICAgICAgICBzczogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHsgcmV0dXJuIHRoaXMuZXhlYygvXlxcZFxcZC8sIHN0cik7IH0sXG4gICAgICAgIHM6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7IHJldHVybiB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTsgfSxcbiAgICAgICAgU1NTOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykgeyByZXR1cm4gdGhpcy5leGVjKC9eXFxkezEsM30vLCBzdHIpOyB9LFxuICAgICAgICBTUzogZnVuY3Rpb24gKHN0ci8qLCBmb3JtYXRTdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmV4ZWMoL15cXGRcXGQ/Lywgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAqPSAxMDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIFM6IGZ1bmN0aW9uIChzdHIvKiwgZm9ybWF0U3RyaW5nICovKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5leGVjKC9eXFxkLywgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAqPSAxMDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBaOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZXhlYygvXltcXCstXVxcZHsyfVswLTVdXFxkLywgc3RyKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IChyZXN1bHQudmFsdWUgLyAxMDAgfCAwKSAqIC02MCAtIHJlc3VsdC52YWx1ZSAlIDEwMDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIFpaOiBmdW5jdGlvbiAoc3RyLyosIGZvcm1hdFN0cmluZyAqLykge1xuICAgICAgICAgICAgdmFyIGFyciA9IC9eKFtcXCstXSkoXFxkezJ9KTooWzAtNV1cXGQpLy5leGVjKHN0cikgfHwgWycnLCAnJywgJycsICcnXTtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiAwIC0gKChhcnJbMV0gKyBhcnJbMl0gfCAwKSAqIDYwICsgKGFyclsxXSArIGFyclszXSB8IDApKSwgbGVuZ3RoOiBhcnJbMF0ubGVuZ3RoIH07XG4gICAgICAgIH0sXG4gICAgICAgIGgxMjogZnVuY3Rpb24gKGgsIGEpIHsgcmV0dXJuIChoID09PSAxMiA/IDAgOiBoKSArIGEgKiAxMjsgfSxcbiAgICAgICAgZXhlYzogZnVuY3Rpb24gKHJlLCBzdHIpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAocmUuZXhlYyhzdHIpIHx8IFsnJ10pWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHJlc3VsdCB8IDAsIGxlbmd0aDogcmVzdWx0Lmxlbmd0aCB9O1xuICAgICAgICB9LFxuICAgICAgICBmaW5kOiBmdW5jdGlvbiAoYXJyYXksIHN0cikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gLTEsIGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGgsIGl0ZW07IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBhcnJheVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0ci5pbmRleE9mKGl0ZW0pICYmIGl0ZW0ubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gaXRlbS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGluZGV4LCBsZW5ndGg6IGxlbmd0aCB9O1xuICAgICAgICB9LFxuICAgICAgICBwcmU6IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0cjsgfSxcbiAgICAgICAgcmVzOiBfcmVzXG4gICAgfSxcbiAgICBleHRlbmQgPSBmdW5jdGlvbiAoYmFzZSwgcHJvcHMsIG92ZXJyaWRlLCByZXMpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9LCBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYmFzZSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBiYXNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcHMgfHwge30pIHtcbiAgICAgICAgICAgIGlmICghKCEhb3ZlcnJpZGUgXiAhIW9ialtrZXldKSkge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBvYmoucmVzID0gcmVzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBwcm90byA9IHtcbiAgICAgICAgX2Zvcm1hdHRlcjogX2Zvcm1hdHRlcixcbiAgICAgICAgX3BhcnNlcjogX3BhcnNlclxuICAgIH0sXG4gICAgbG9jYWxpemVkX3Byb3RvLFxuICAgIGRhdGU7XG5cbi8qKlxuICogQ29tcGlsaW5nIGZvcm1hdCBzdHJpbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0U3RyaW5nIC0gQSBmb3JtYXQgc3RyaW5nXG4gKiBAcmV0dXJucyB7QXJyYXkuPHN0cmluZz59IEEgY29tcGlsZWQgb2JqZWN0XG4gKi9cbnByb3RvLmNvbXBpbGUgPSBmdW5jdGlvbiAoZm9ybWF0U3RyaW5nKSB7XG4gICAgdmFyIHJlID0gL1xcWyhbXlxcW1xcXV18XFxbW15cXFtcXF1dKl0pKl18KFtBLVphLXpdKVxcMit8XFwuezN9fC4vZywga2V5cywgcGF0dGVybiA9IFtmb3JtYXRTdHJpbmddO1xuXG4gICAgd2hpbGUgKChrZXlzID0gcmUuZXhlYyhmb3JtYXRTdHJpbmcpKSkge1xuICAgICAgICBwYXR0ZXJuW3BhdHRlcm4ubGVuZ3RoXSA9IGtleXNbMF07XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuO1xufTtcblxuLyoqXG4gKiBGb3JtYXR0aW5nIGRhdGUgYW5kIHRpbWUgb2JqZWN0cyAoRGF0ZSAtPiBTdHJpbmcpXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmogLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheS48c3RyaW5nPn0gYXJnIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3V0Y10gLSBPdXRwdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmdcbiAqL1xucHJvdG8uZm9ybWF0ID0gZnVuY3Rpb24gKGRhdGVPYmosIGFyZywgdXRjKSB7XG4gICAgdmFyIGN0eCA9IHRoaXMgfHwgZGF0ZSwgcGF0dGVybiA9IHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnID8gY3R4LmNvbXBpbGUoYXJnKSA6IGFyZyxcbiAgICAgICAgb2Zmc2V0ID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgICAgICBkID0gY3R4LmFkZE1pbnV0ZXMoZGF0ZU9iaiwgdXRjID8gb2Zmc2V0IDogMCksXG4gICAgICAgIGZvcm1hdHRlciA9IGN0eC5fZm9ybWF0dGVyLCBzdHIgPSAnJztcblxuICAgIGQuZ2V0VGltZXpvbmVPZmZzZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1dGMgPyAwIDogb2Zmc2V0OyB9O1xuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aCwgdG9rZW47IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0b2tlbiA9IHBhdHRlcm5baV07XG4gICAgICAgIHN0ciArPSBmb3JtYXR0ZXJbdG9rZW5dID8gZm9ybWF0dGVyLnBvc3QoZm9ybWF0dGVyW3Rva2VuXShkLCBwYXR0ZXJuWzBdKSkgOiB0b2tlbi5yZXBsYWNlKC9cXFsoLiopXS8sICckMScpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcblxuLyoqXG4gKiBQcmUtcGFyc2luZyBkYXRlIGFuZCB0aW1lIHN0cmluZ3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIC0gQSBkYXRlIGFuZCB0aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZyAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1dGNdIC0gSW5wdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBIHByZS1wYXJzZWQgcmVzdWx0IG9iamVjdFxuICovXG5wcm90by5wcmVwYXJzZSA9IGZ1bmN0aW9uIChkYXRlU3RyaW5nLCBhcmcpIHtcbiAgICB2YXIgY3R4ID0gdGhpcyB8fCBkYXRlLCBwYXR0ZXJuID0gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgPyBjdHguY29tcGlsZShhcmcpIDogYXJnLFxuICAgICAgICBkdCA9IHsgWTogMTk3MCwgTTogMSwgRDogMSwgSDogMCwgQTogMCwgaDogMCwgbTogMCwgczogMCwgUzogMCwgWjogMCwgX2luZGV4OiAwLCBfbGVuZ3RoOiAwLCBfbWF0Y2g6IDAgfSxcbiAgICAgICAgY29tbWVudCA9IC9cXFsoLiopXS8sIHBhcnNlciA9IGN0eC5fcGFyc2VyLCBvZmZzZXQgPSAwO1xuXG4gICAgZGF0ZVN0cmluZyA9IHBhcnNlci5wcmUoZGF0ZVN0cmluZyk7XG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoLCB0b2tlbiwgcmVzdWx0OyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdG9rZW4gPSBwYXR0ZXJuW2ldO1xuICAgICAgICBpZiAocGFyc2VyW3Rva2VuXSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcGFyc2VyW3Rva2VuXShkYXRlU3RyaW5nLnNsaWNlKG9mZnNldCksIHBhdHRlcm5bMF0pO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgKz0gcmVzdWx0Lmxlbmd0aDtcbiAgICAgICAgICAgIGR0W3Jlc3VsdC50b2tlbiB8fCB0b2tlbi5jaGFyQXQoMCldID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICAgICAgZHQuX21hdGNoKys7XG4gICAgICAgIH0gZWxzZSBpZiAodG9rZW4gPT09IGRhdGVTdHJpbmcuY2hhckF0KG9mZnNldCkgfHwgdG9rZW4gPT09ICcgJykge1xuICAgICAgICAgICAgb2Zmc2V0Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWVudC50ZXN0KHRva2VuKSAmJiAhZGF0ZVN0cmluZy5zbGljZShvZmZzZXQpLmluZGV4T2YoY29tbWVudC5leGVjKHRva2VuKVsxXSkpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSB0b2tlbi5sZW5ndGggLSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnLi4uJykge1xuICAgICAgICAgICAgb2Zmc2V0ID0gZGF0ZVN0cmluZy5sZW5ndGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGR0LkggPSBkdC5IIHx8IHBhcnNlci5oMTIoZHQuaCwgZHQuQSk7XG4gICAgZHQuX2luZGV4ID0gb2Zmc2V0O1xuICAgIGR0Ll9sZW5ndGggPSBkYXRlU3RyaW5nLmxlbmd0aDtcbiAgICByZXR1cm4gZHQ7XG59O1xuXG4vKipcbiAqIFBhcnNpbmcgb2YgZGF0ZSBhbmQgdGltZSBzdHJpbmcgKFN0cmluZyAtPiBEYXRlKVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVTdHJpbmcgLSBBIGRhdGUtdGltZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbdXRjXSAtIElucHV0IGFzIFVUQ1xuICogQHJldHVybnMge0RhdGV9IEEgRGF0ZSBvYmplY3RcbiAqL1xucHJvdG8ucGFyc2UgPSBmdW5jdGlvbiAoZGF0ZVN0cmluZywgYXJnLCB1dGMpIHtcbiAgICB2YXIgY3R4ID0gdGhpcyB8fCBkYXRlLCBwYXR0ZXJuID0gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgPyBjdHguY29tcGlsZShhcmcpIDogYXJnLFxuICAgICAgICBkdCA9IGN0eC5wcmVwYXJzZShkYXRlU3RyaW5nLCBwYXR0ZXJuKTtcblxuICAgIGlmIChjdHguaXNWYWxpZChkdCkpIHtcbiAgICAgICAgZHQuTSAtPSBkdC5ZIDwgMTAwID8gMjI4MDEgOiAxOyAvLyAyMjgwMSA9IDE5MDAgKiAxMiArIDFcbiAgICAgICAgaWYgKHV0YyB8fCB+Y3R4Ll9wYXJzZXIuZmluZChwYXR0ZXJuLCAnWlonKS52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGR0LlksIGR0Lk0sIGR0LkQsIGR0LkgsIGR0Lm0gKyBkdC5aLCBkdC5zLCBkdC5TKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGR0LlksIGR0Lk0sIGR0LkQsIGR0LkgsIGR0Lm0sIGR0LnMsIGR0LlMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbn07XG5cbi8qKlxuICogRGF0ZSBhbmQgdGltZSBzdHJpbmcgdmFsaWRhdGlvblxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBhcmcxIC0gQSBwcmUtcGFyc2VkIHJlc3VsdCBvYmplY3Qgb3IgYSBkYXRlIGFuZCB0aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IFthcmcyXSAtIEEgZm9ybWF0IHN0cmluZyBvciBpdHMgY29tcGlsZWQgb2JqZWN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZGF0ZSBhbmQgdGltZSBzdHJpbmcgaXMgYSB2YWxpZCBkYXRlIGFuZCB0aW1lXG4gKi9cbnByb3RvLmlzVmFsaWQgPSBmdW5jdGlvbiAoYXJnMSwgYXJnMikge1xuICAgIHZhciBjdHggPSB0aGlzIHx8IGRhdGUsIGR0ID0gdHlwZW9mIGFyZzEgPT09ICdzdHJpbmcnID8gY3R4LnByZXBhcnNlKGFyZzEsIGFyZzIpIDogYXJnMSxcbiAgICAgICAgbGFzdCA9IFszMSwgMjggKyBjdHguaXNMZWFwWWVhcihkdC5ZKSB8IDAsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVtkdC5NIC0gMV07XG5cbiAgICByZXR1cm4gIShcbiAgICAgICAgZHQuX2luZGV4IDwgMSB8fCBkdC5fbGVuZ3RoIDwgMSB8fCBkdC5faW5kZXggLSBkdC5fbGVuZ3RoIHx8IGR0Ll9tYXRjaCA8IDEgfHxcbiAgICAgICAgZHQuWSA8IDEgfHwgZHQuWSA+IDk5OTkgfHwgZHQuTSA8IDEgfHwgZHQuTSA+IDEyIHx8IGR0LkQgPCAxIHx8IGR0LkQgPiBsYXN0IHx8XG4gICAgICAgIGR0LkggPCAwIHx8IGR0LkggPiAyMyB8fCBkdC5tIDwgMCB8fCBkdC5tID4gNTkgfHwgZHQucyA8IDAgfHwgZHQucyA+IDU5IHx8IGR0LlMgPCAwIHx8IGR0LlMgPiA5OTkgfHxcbiAgICAgICAgZHQuWiA8IC04NDAgfHwgZHQuWiA+IDcyMFxuICAgICk7XG59O1xuXG4vKipcbiAqIEZvcm1hdCB0cmFuc2Zvcm1hdGlvbiBvZiBkYXRlIGFuZCB0aW1lIHN0cmluZyAoU3RyaW5nIC0+IFN0cmluZylcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIC0gQSBkYXRlIGFuZCB0aW1lIHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8QXJyYXkuPHN0cmluZz59IGFyZzEgLSBBIGZvcm1hdCBzdHJpbmcgb3IgaXRzIGNvbXBpbGVkIG9iamVjdCBiZWZvcmUgdHJhbnNmb3JtYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBhcmcyIC0gQSBmb3JtYXQgc3RyaW5nIG9yIGl0cyBjb21waWxlZCBvYmplY3QgYWZ0ZXIgdHJhbnNmb3JtYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3V0Y10gLSBPdXRwdXQgYXMgVVRDXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmdcbiAqL1xucHJvdG8udHJhbnNmb3JtID0gZnVuY3Rpb24gKGRhdGVTdHJpbmcsIGFyZzEsIGFyZzIsIHV0Yykge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMgfHwgZGF0ZTtcbiAgICByZXR1cm4gY3R4LmZvcm1hdChjdHgucGFyc2UoZGF0ZVN0cmluZywgYXJnMSksIGFyZzIsIHV0Yyk7XG59O1xuXG4vKipcbiAqIEFkZGluZyB5ZWFyc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHllYXJzIC0gTnVtYmVyIG9mIHllYXJzIHRvIGFkZFxuICogQHJldHVybnMge0RhdGV9IFRoZSBEYXRlIG9iamVjdCBhZnRlciBhZGRpbmcgdGhlIHZhbHVlXG4gKi9cbnByb3RvLmFkZFllYXJzID0gZnVuY3Rpb24gKGRhdGVPYmosIHllYXJzKSB7XG4gICAgcmV0dXJuICh0aGlzIHx8IGRhdGUpLmFkZE1vbnRocyhkYXRlT2JqLCB5ZWFycyAqIDEyKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIG1vbnRoc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1vbnRocyAtIE51bWJlciBvZiBtb250aHMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkTW9udGhzID0gZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRocykge1xuICAgIHZhciBkID0gbmV3IERhdGUoZGF0ZU9iai5nZXRUaW1lKCkpO1xuXG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyBtb250aHMpO1xuICAgIHJldHVybiBkO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgZGF5c1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IGRheXMgLSBOdW1iZXIgb2YgZGF5cyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGREYXlzID0gZnVuY3Rpb24gKGRhdGVPYmosIGRheXMpIHtcbiAgICB2YXIgZCA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0VGltZSgpKTtcblxuICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGRheXMpO1xuICAgIHJldHVybiBkO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgaG91cnNcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZU9iaiAtIEEgRGF0ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBob3VycyAtIE51bWJlciBvZiBob3VycyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRIb3VycyA9IGZ1bmN0aW9uIChkYXRlT2JqLCBob3Vycykge1xuICAgIHJldHVybiAodGhpcyB8fCBkYXRlKS5hZGRNaW51dGVzKGRhdGVPYmosIGhvdXJzICogNjApO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgbWludXRlc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbnV0ZXMgLSBOdW1iZXIgb2YgbWludXRlcyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRNaW51dGVzID0gZnVuY3Rpb24gKGRhdGVPYmosIG1pbnV0ZXMpIHtcbiAgICByZXR1cm4gKHRoaXMgfHwgZGF0ZSkuYWRkU2Vjb25kcyhkYXRlT2JqLCBtaW51dGVzICogNjApO1xufTtcblxuLyoqXG4gKiBBZGRpbmcgc2Vjb25kc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgLSBOdW1iZXIgb2Ygc2Vjb25kcyB0byBhZGRcbiAqIEByZXR1cm5zIHtEYXRlfSBUaGUgRGF0ZSBvYmplY3QgYWZ0ZXIgYWRkaW5nIHRoZSB2YWx1ZVxuICovXG5wcm90by5hZGRTZWNvbmRzID0gZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcbiAgICByZXR1cm4gKHRoaXMgfHwgZGF0ZSkuYWRkTWlsbGlzZWNvbmRzKGRhdGVPYmosIHNlY29uZHMgKiAxMDAwKTtcbn07XG5cbi8qKlxuICogQWRkaW5nIG1pbGxpc2Vjb25kc1xuICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gYWRkXG4gKiBAcmV0dXJucyB7RGF0ZX0gVGhlIERhdGUgb2JqZWN0IGFmdGVyIGFkZGluZyB0aGUgdmFsdWVcbiAqL1xucHJvdG8uYWRkTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKGRhdGVPYmosIG1pbGxpc2Vjb25kcykge1xuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldFRpbWUoKSArIG1pbGxpc2Vjb25kcyk7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0aW5nIHR3byBkYXRlcyAoZGF0ZTEgLSBkYXRlMilcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTEgLSBBIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUyIC0gQSBEYXRlIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBvYmplY3Qgb2Ygc3VidHJhY3RpbmcgZGF0ZTIgZnJvbSBkYXRlMVxuICovXG5wcm90by5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChkYXRlMSwgZGF0ZTIpIHtcbiAgICB2YXIgZGVsdGEgPSBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0b01pbGxpc2Vjb25kczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhO1xuICAgICAgICB9LFxuICAgICAgICB0b1NlY29uZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YSAvIDEwMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvTWludXRlczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhIC8gNjAwMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvSG91cnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWx0YSAvIDM2MDAwMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHRvRGF5czogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbHRhIC8gODY0MDAwMDA7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLyoqXG4gKiBXaGV0aGVyIGEgeWVhciBpcyBhIGxlYXAgeWVhclxuICogQHBhcmFtIHtudW1iZXJ9IHkgLSBBIHllYXIgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSB5ZWFyIGlzIGEgbGVhcCB5ZWFyXG4gKi9cbnByb3RvLmlzTGVhcFllYXIgPSBmdW5jdGlvbiAoeSkge1xuICAgIHJldHVybiAoISh5ICUgNCkgJiYgISEoeSAlIDEwMCkpIHx8ICEoeSAlIDQwMCk7XG59O1xuXG4vKipcbiAqIENvbXBhcmlzb24gb2YgdHdvIGRhdGVzXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUxIC0gQSBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtEYXRlfSBkYXRlMiAtIEEgRGF0ZSBvYmplY3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSB0d28gZGF0ZXMgYXJlIHRoZSBzYW1lIGRheSAodGltZSBpcyBpZ25vcmVkKVxuICovXG5wcm90by5pc1NhbWVEYXkgPSBmdW5jdGlvbiAoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIGRhdGUxLnRvRGF0ZVN0cmluZygpID09PSBkYXRlMi50b0RhdGVTdHJpbmcoKTtcbn07XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBuZXcgbG9jYWxlXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSAtIEEgbGFuZ3VhZ2UgY29kZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbG9jYWxlIC0gQSBsb2NhbGUgaW5zdGFsbGVyXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xucHJvdG8ubG9jYWxlID0gZnVuY3Rpb24gKGNvZGUsIGxvY2FsZSkge1xuICAgIGlmICghbG9jYWxlc1tjb2RlXSkge1xuICAgICAgICBsb2NhbGVzW2NvZGVdID0gbG9jYWxlO1xuICAgIH1cbn07XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiBuZXcgcGx1Z2luXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEEgcGx1Z2luIG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHBsdWdpbiAtIEEgcGx1Z2luIGluc3RhbGxlclxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbnByb3RvLnBsdWdpbiA9IGZ1bmN0aW9uIChuYW1lLCBwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbnNbbmFtZV0pIHtcbiAgICAgICAgcGx1Z2luc1tuYW1lXSA9IHBsdWdpbjtcbiAgICB9XG59O1xuXG5sb2NhbGl6ZWRfcHJvdG8gPSBleHRlbmQocHJvdG8pO1xuZGF0ZSA9IGV4dGVuZChwcm90byk7XG5cbi8qKlxuICogQ2hhbmdpbmcgbG9jYWxlc1xuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IFtsb2NhbGVdIC0gQSBsb2NhbGUgaW5zdGFsbGVyIG9yIGxhbmd1YWdlIGNvZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IGxhbmd1YWdlIGNvZGVcbiAqL1xuZGF0ZS5sb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgdmFyIGluc3RhbGwgPSB0eXBlb2YgbG9jYWxlID09PSAnZnVuY3Rpb24nID8gbG9jYWxlIDogZGF0ZS5sb2NhbGVbbG9jYWxlXTtcblxuICAgIGlmICghaW5zdGFsbCkge1xuICAgICAgICByZXR1cm4gbGFuZztcbiAgICB9XG4gICAgbGFuZyA9IGluc3RhbGwocHJvdG8pO1xuXG4gICAgdmFyIGV4dGVuc2lvbiA9IGxvY2FsZXNbbGFuZ10gfHwge307XG4gICAgdmFyIHJlcyA9IGV4dGVuZChfcmVzLCBleHRlbnNpb24ucmVzLCB0cnVlKTtcbiAgICB2YXIgZm9ybWF0dGVyID0gZXh0ZW5kKF9mb3JtYXR0ZXIsIGV4dGVuc2lvbi5mb3JtYXR0ZXIsIHRydWUsIHJlcyk7XG4gICAgdmFyIHBhcnNlciA9IGV4dGVuZChfcGFyc2VyLCBleHRlbnNpb24ucGFyc2VyLCB0cnVlLCByZXMpO1xuXG4gICAgZGF0ZS5fZm9ybWF0dGVyID0gbG9jYWxpemVkX3Byb3RvLl9mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgZGF0ZS5fcGFyc2VyID0gbG9jYWxpemVkX3Byb3RvLl9wYXJzZXIgPSBwYXJzZXI7XG5cbiAgICBmb3IgKHZhciBwbHVnaW4gaW4gcGx1Z2lucykge1xuICAgICAgICBkYXRlLmV4dGVuZChwbHVnaW5zW3BsdWdpbl0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYW5nO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbmFsIGV4dGVuc2lvblxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuc2lvbiAtIEFuIGV4dGVuc2lvbiBvYmplY3RcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5kYXRlLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbnNpb24pIHtcbiAgICB2YXIgcmVzID0gZXh0ZW5kKGRhdGUuX3BhcnNlci5yZXMsIGV4dGVuc2lvbi5yZXMpO1xuICAgIHZhciBleHRlbmRlciA9IGV4dGVuc2lvbi5leHRlbmRlciB8fCB7fTtcblxuICAgIGRhdGUuX2Zvcm1hdHRlciA9IGV4dGVuZChkYXRlLl9mb3JtYXR0ZXIsIGV4dGVuc2lvbi5mb3JtYXR0ZXIsIGZhbHNlLCByZXMpO1xuICAgIGRhdGUuX3BhcnNlciA9IGV4dGVuZChkYXRlLl9wYXJzZXIsIGV4dGVuc2lvbi5wYXJzZXIsIGZhbHNlLCByZXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGV4dGVuZGVyKSB7XG4gICAgICAgIGlmICghZGF0ZVtrZXldKSB7XG4gICAgICAgICAgICBkYXRlW2tleV0gPSBleHRlbmRlcltrZXldO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBJbXBvcnRpbmcgcGx1Z2luc1xuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IHBsdWdpbiAtIEEgcGx1Z2luIGluc3RhbGxlciBvciBwbHVnaW4gbmFtZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmRhdGUucGx1Z2luID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIHZhciBpbnN0YWxsID0gdHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJyA/IHBsdWdpbiA6IGRhdGUucGx1Z2luW3BsdWdpbl07XG5cbiAgICBpZiAoaW5zdGFsbCkge1xuICAgICAgICBkYXRlLmV4dGVuZChwbHVnaW5zW2luc3RhbGwocHJvdG8sIGxvY2FsaXplZF9wcm90byldIHx8IHt9KTtcbiAgICB9XG59O1xuXG52YXIgZGF0ZSQxID0gZGF0ZTtcblxuZXhwb3J0IHsgZGF0ZSQxIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBkYXRlIGZyb20gJ2RhdGUtYW5kLXRpbWUnO1xuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sbGVyL3Rhc2tDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9zdG9yYWdlLmpzJ1xuaW1wb3J0IHsgRE9NIH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXcvRE9NJztcbmltcG9ydCB7IG9iamVjdExvb3BlciB9IGZyb20gJy4vZnVuY3Rpb25zL3N0b3JhZ2VMb29wZXJzJ1xuXG5cblxuY29uc3QgdGVzdGkgPSBuZXcgbmV3VGFzayhcIlRlc3QgVGFza1wiLCBcIlByb2plY3RcIiwgXCJJbXBvcnRhbnRcIiwgXCIyMDIzLTAxLTI3XCIsIFwiRG8gaXQgeWEgZ2l0XCIpO1xuY29uc3QgdGVzdDIgPSBuZXcgbmV3VGFzayhcIlRvaW5lblwiLCBcIlByb2plY3RcIiwgXCJJbXBvcnRhbnRcIiwgXCIyMDIzLTAxLTI3XCIsIFwiRG8gaXQgeWEgZ2l0XCIpO1xudGFza0FycmF5Wyd0YXNrU3RvcmFnZSddLnB1c2godGVzdGkpXG50YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10ucHVzaCh0ZXN0MilcblxuXG5ET00uY3JlYXRlVUkoKVxuXG5sZXQgYnV0dG9uTGlzdGVuZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J1dHRvbicpXG5idXR0b25MaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTS5vdmVyTGF5UmVuZGVyZWQpXG5cbi8qIG9iamVjdExvb3Blcih0YXNrQXJyYXlbJ3Rhc2tTdG9yYWdlJ10pICovXG5cbkRPTS5hZGRUb1Rhc2tMaXN0TGlzdGVuZXIoKVxuRE9NLmxvZ0FycmF5TGlzdGVuZXIoKVxuXG5ET00uY3JlYXRlVGFza0NhcmQodGVzdGkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9