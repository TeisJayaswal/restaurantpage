/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    height: 100vh;\\n}\\n\\n.header {\\n    height: 10vh;\\n    background-color: burlywood;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-end;\\n}\\n\\n.navigation {\\n    display: flex;\\n    justify-content: center;\\n    gap: 5vw;\\n    margin: 0;\\n}\\n\\nul {\\n    list-style-type: none;\\n}\\n\\n.nav-item {\\n    font-size: 2em;\\n    text-align: center;\\n    width: 7vw;\\n    color: burlywood; \\n    padding: 10px;\\n    border-top-left-radius: 15px;\\n    border-top-right-radius: 2px;\\n    border-bottom-right-radius: 15px;\\n    cursor: pointer;\\n    background-color: #3e2d31;\\n    font-family: \\\"Brush Script MT\\\";\\n}\\n\\n.highlight {\\n    background-color: #b88374;\\n    color: black; \\n}\\n\\n.container {\\n    height: 80vh; \\n    background-color: #b88374;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.title {\\n    font-size: 3em;\\n    font-family: \\\"Brush Script MT\\\";\\n    padding: 15px;\\n    color: burlywood; \\n    border: 1px dashed burlywood;\\n    border-radius: 25px;\\n    margin: 2% 0 0 0;\\n}\\n\\n.page {\\n    margin: 0;\\n    width: 60%;\\n    height: 75%;\\n    border-radius: 25px;\\n    background-color: #3e2d31;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n    align-items: center;\\n}\\n\\n.homePicture {\\n    width: 50%;\\n    height: auto;\\n}\\n\\n.pictureContainer {\\n    display: flex;\\n    justify-content: center;\\n    gap: 20px;\\n}\\n\\n.menuImage {\\n    width: 30%;\\n    height: auto;\\n    border-radius: 15px;\\n}\\n\\n.footer {\\n    height: 10vh;\\n    background-color: #7d5a5c;\\n    color: #3e2d31;\\n    font-weight: bold;\\n    font-family: \\\"Comic sans MS\\\";\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://package.json/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://package.json/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://package.json/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://package.json/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://package.json/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n\n\n\n\n\n\n\nfunction createHeader(currentTab, onChangeCurrentTab) {\n    console.log(`createHeader onChangeCurrentTab: ${onChangeCurrentTab}`)\n    let navSelect = (0,_nav__WEBPACK_IMPORTED_MODULE_1__.createNavigation)(currentTab, onChangeCurrentTab)\n    const header = document.createElement('div');\n    header.classList.add('header');\n    header.appendChild(navSelect.nav);\n    return header \n} \n\nfunction createContainer(currentTab) {\n    const container = document.createElement('div');\n    container.classList.add('container');\n    if (currentTab === 'home') {\n        container.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_2__.homepage)())\n    } else if (currentTab === 'menu') {\n        container.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_3__.menu)())\n    } else if (currentTab === 'contact') {\n        container.appendChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_4__.contact)())\n    }\n    return container\n}\n\nfunction createFooter() {\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    const footerText = document.createElement('div');\n    footerText.textContent = `Copyright © Pip & Al's Cake Cafe`\n    footer.appendChild(footerText)\n    return footer \n}\n\n\n\n//# sourceURL=webpack://package.json/./src/body.js?");

/***/ }),

/***/ "./src/cakeNavigation.js":
/*!*******************************!*\
  !*** ./src/cakeNavigation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cakeNavigation\": () => (/* binding */ cakeNavigation)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction cakeNavigation(currentCakeSelection, onSelectNewCakeTab) {\n    const cakeNavItems = ['Cakes', 'Pastries']\n\n    const cakeNav = document.createElement('ul');\n    cakeNav.classList.add('navigation');\n\n    const getCakeNavSelection = () => {\n        console.log(\"Inside getNavSelection, returning the _current_ value of navSelection\")\n        return cakeNavSelection\n    }\n\n    cakeNavItems.forEach((cakeNavItem) => {\n        const li = document.createElement('li');\n        li.classList.add('nav-item');\n        li.innerHTML = cakeNavItem;\n\n        if (cakeNavItem.toLowerCase() === currentCakeSelection) {\n            li.classList.add('highlight')\n        } else {\n            li.classList.remove('highlight')\n        }\n        \n        li.addEventListener('click', () => {\n            console.log(`${cakeNavItem} clicked`);\n            const cakeNavSelection = `${cakeNavItem}`.toLowerCase();\n            // createFooter();\n            onSelectNewCakeTab(cakeNavSelection);\n        })\n        cakeNav.appendChild(li)\n    });\n\n    return { cakeNav, getCakeNavSelection } \n}\n\n\n\n//# sourceURL=webpack://package.json/./src/cakeNavigation.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    const contactContent = document.createElement('div');\n    const contactHeading = document.createElement('h1');\n    contactHeading.textContent = `Here's who to call motherfucker`;\n    contactContent.appendChild(contactHeading);\n    console.log('inside of contact()')\n    return contactContent\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var _images_pipandal_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pipandal.png */ \"./src/images/pipandal.png\");\n\n\nfunction homepage() {\n    const homePageContent = document.createElement('div');\n    homePageContent.classList.add('page')\n    const title = document.createElement('h1');\n    title.textContent = `Welcome to Pip & Al's Cake Cafe`; \n    title.classList.add('title')\n    const myPicture = new Image();\n    myPicture.src = _images_pipandal_png__WEBPACK_IMPORTED_MODULE_0__;\n    myPicture.classList.add('homePicture')\n    homePageContent.appendChild(title)\n    homePageContent.appendChild(myPicture);\n    return homePageContent\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderPageContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPageContent */ \"./src/renderPageContent.js\");\n\n\n(0,_renderPageContent__WEBPACK_IMPORTED_MODULE_0__.renderPageContent)();\n\n//# sourceURL=webpack://package.json/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _cakeNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cakeNavigation */ \"./src/cakeNavigation.js\");\n/* harmony import */ var _renderPageContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPageContent */ \"./src/renderPageContent.js\");\n/* harmony import */ var _renderCakeImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderCakeImages */ \"./src/renderCakeImages.js\");\n/* harmony import */ var _renderPastryImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderPastryImages */ \"./src/renderPastryImages.js\");\n\n\n\n\n\nlet currentCakeNavigationTab = 'cakes';\n\nfunction onSelectNewCakeTabCallback(newCakeSelection) {\n    console.log('Here in the Menu Callback');\n    currentCakeNavigationTab = newCakeSelection\n    console.log(currentCakeNavigationTab)\n    menu()\n    ;(0,_renderPageContent__WEBPACK_IMPORTED_MODULE_1__.renderPageContent)()\n}\n\nfunction menu() {\n    const menuContent = document.createElement('div');\n    const menuHeading = document.createElement('h1');\n    menuContent.classList.add('page')\n    menuHeading.textContent = 'Look at this yummy ass stuff';\n    menuHeading.classList.add('title');\n    let cakeSelect = (0,_cakeNavigation__WEBPACK_IMPORTED_MODULE_0__.cakeNavigation)(currentCakeNavigationTab, onSelectNewCakeTabCallback)\n    menuContent.appendChild(menuHeading);\n    menuContent.appendChild(cakeSelect.cakeNav)\n    if (currentCakeNavigationTab === 'cakes') {\n        menuContent.appendChild((0,_renderCakeImages__WEBPACK_IMPORTED_MODULE_2__.renderCakesImages)())\n    } else if (currentCakeNavigationTab === 'pastries') {\n        menuContent.appendChild((0,_renderPastryImages__WEBPACK_IMPORTED_MODULE_3__.renderPastryImages)())\n    }\n\n    return menuContent\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/menuPage.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavigation\": () => (/* binding */ createNavigation)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n// function createNavigation(currentSelection, onSelectNewTab) {\nfunction createNavigation(currentSelection, onSelectNewTab) {\n    console.log(`createNavigation onSelectNewTab: ${onSelectNewTab}`)\n    const navItems = ['Home', 'Menu', 'Contact'];\n    console.log(`Current selection in nav: ${currentSelection}`)\n    const nav = document.createElement('ul');\n    nav.classList.add('navigation');\n    \n    const getNavSelection = () => {\n        console.log(\"Inside getNavSelection, returning the _current_ value of navSelection\")\n        return navSelection\n    }\n\n    navItems.forEach((navItem) => {\n        const li = document.createElement('li');\n        li.classList.add('nav-item');\n        li.innerHTML = navItem;\n\n        if (navItem.toLowerCase() === currentSelection) {\n            li.classList.add('highlight')\n        } else {\n            li.classList.remove('highlight')\n        }\n        \n        li.addEventListener('click', () => {\n            console.log(`${navItem} clicked`);\n            const navSelection = `${navItem}`.toLowerCase();\n            // createFooter();\n            onSelectNewTab(navSelection);\n        })\n        nav.appendChild(li)\n    });\n\n    return { nav, getNavSelection } \n}\n\n\n\n//# sourceURL=webpack://package.json/./src/nav.js?");

/***/ }),

/***/ "./src/renderCakeImages.js":
/*!*********************************!*\
  !*** ./src/renderCakeImages.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderCakesImages\": () => (/* binding */ renderCakesImages)\n/* harmony export */ });\n/* harmony import */ var _images_sports_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sports.jpeg */ \"./src/images/sports.jpeg\");\n/* harmony import */ var _images_princess_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/princess.jpeg */ \"./src/images/princess.jpeg\");\n\n\n\nfunction renderCakesImages() {\n    const picturecontainer = document.createElement('div')\n    picturecontainer.classList.add('pictureContainer')\n    const sportsPicture = new Image();\n    sportsPicture.src = _images_sports_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    sportsPicture.classList.add('menuImage')\n    const princessPicture = new Image();\n    princessPicture.src = _images_princess_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    princessPicture.classList.add('menuImage')\n    picturecontainer.appendChild(sportsPicture)\n    picturecontainer.appendChild(princessPicture)\n\n    return picturecontainer\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/renderCakeImages.js?");

/***/ }),

/***/ "./src/renderPageContent.js":
/*!**********************************!*\
  !*** ./src/renderPageContent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPageContent\": () => (/* binding */ renderPageContent)\n/* harmony export */ });\n/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ \"./src/body.js\");\n\n\nlet currentNavigationTab = 'home';\n\nfunction onSelectNewTabCallback(newSelection) {\n    console.log(\"Here in the callback\")\n    currentNavigationTab = newSelection\n    renderPageContent()\n}\n\nfunction renderPageContent() {\n    console.log(`Running renderPageContent with currentNavigationTab=${currentNavigationTab}`)\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = \"\"\n    contentDiv.appendChild((0,_body__WEBPACK_IMPORTED_MODULE_0__.createHeader)(currentNavigationTab, onSelectNewTabCallback));\n    contentDiv.appendChild((0,_body__WEBPACK_IMPORTED_MODULE_0__.createContainer)(currentNavigationTab));\n    contentDiv.appendChild((0,_body__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\n    return contentDiv\n}\n\n\n\n// function printHello(input) {\n//     console.log(\"Hello!\")\n//     console.log(input)\n// }\n\n// function addTwoNumbers(hullabolo, y) {\n//     return hullabolo + y\n// }\n\n// addTwoNumbers(10, 20)\n\n// const z = 5\n// const w = 1\n// addTwoNumbers(z, w)\n\n// import Picture from './pipandal.png'; \n// import './style.css';\n\n// function printStatement() {\n//     console.log('printing statement to check')\n// }\n// function createHeader() {\n//     console.log('creating header')\n//     const header = document.createElement('h1');\n//     header.textContent = `Welcome to Pip and Al's Cake Cafe`\n//     header.classList.add('header');\n//     return header \n// }\n\n// function getImage() {\n//     console.log('getting image')\n//     const myImage = new Image();\n//     myImage.src = Picture; \n//     return myImage\n// }\n\n// function createDescription() {\n//     console.log('creating description')\n//     const myDescription = document.createElement('div');\n//     myDescription.textContent = `Do you like yummy yummy cakes and dogs? Well then you're going to like Pip and Al's Cake Cafe!`\n//     return myDescription\n// }\n\n// export { \n//     printStatement,\n//     createHeader,\n//     createDescription,\n//     getImage   }; \n\n//# sourceURL=webpack://package.json/./src/renderPageContent.js?");

/***/ }),

/***/ "./src/renderPastryImages.js":
/*!***********************************!*\
  !*** ./src/renderPastryImages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPastryImages\": () => (/* binding */ renderPastryImages)\n/* harmony export */ });\n/* harmony import */ var _images_bolle_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bolle.jpeg */ \"./src/images/bolle.jpeg\");\n/* harmony import */ var _images_heart_bolle_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/heart_bolle.jpeg */ \"./src/images/heart_bolle.jpeg\");\n\n\n\nfunction renderPastryImages() {\n    const picturecontainer = document.createElement('div')\n    picturecontainer.classList.add('pictureContainer')\n    const semlaPicture = new Image();\n    semlaPicture.src = _images_bolle_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    semlaPicture.classList.add('menuImage')\n    const heartPicture = new Image();\n    heartPicture.src = _images_heart_bolle_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    heartPicture.classList.add('menuImage')\n    picturecontainer.appendChild(semlaPicture)\n    picturecontainer.appendChild(heartPicture)\n\n    return picturecontainer\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/renderPastryImages.js?");

/***/ }),

/***/ "./src/images/bolle.jpeg":
/*!*******************************!*\
  !*** ./src/images/bolle.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6e1a928460a3817c613.jpeg\";\n\n//# sourceURL=webpack://package.json/./src/images/bolle.jpeg?");

/***/ }),

/***/ "./src/images/heart_bolle.jpeg":
/*!*************************************!*\
  !*** ./src/images/heart_bolle.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79ba0cc89175d3c0fa30.jpeg\";\n\n//# sourceURL=webpack://package.json/./src/images/heart_bolle.jpeg?");

/***/ }),

/***/ "./src/images/pipandal.png":
/*!*********************************!*\
  !*** ./src/images/pipandal.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d246111bc23080f2547e.png\";\n\n//# sourceURL=webpack://package.json/./src/images/pipandal.png?");

/***/ }),

/***/ "./src/images/princess.jpeg":
/*!**********************************!*\
  !*** ./src/images/princess.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f5eadb2fe8a7441a8b83.jpeg\";\n\n//# sourceURL=webpack://package.json/./src/images/princess.jpeg?");

/***/ }),

/***/ "./src/images/sports.jpeg":
/*!********************************!*\
  !*** ./src/images/sports.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4d89e6dd3f4f60056fd.jpeg\";\n\n//# sourceURL=webpack://package.json/./src/images/sports.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;