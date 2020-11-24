/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_itemMenuAdd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/itemMenuAdd.js */ \"./js/modules/itemMenuAdd.js\");\n/* harmony import */ var _modules_itemMenuRemoveAdd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/itemMenuRemoveAdd.js */ \"./js/modules/itemMenuRemoveAdd.js\");\n/* harmony import */ var _modules_hasImagem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hasImagem.js */ \"./js/modules/hasImagem.js\");\n/* harmony import */ var _modules_hrefChange_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hrefChange.js */ \"./js/modules/hrefChange.js\");\n/* harmony import */ var _modules_teste_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/teste.js */ \"./js/modules/teste.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_itemMenuAdd_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_modules_itemMenuRemoveAdd_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_modules_hasImagem_js__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n(0,_modules_hrefChange_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n_modules_teste_js__WEBPACK_IMPORTED_MODULE_4__.teste1();\r\n_modules_teste_js__WEBPACK_IMPORTED_MODULE_4__.teste2();\r\nconsole.log(_modules_teste_js__WEBPACK_IMPORTED_MODULE_4__.senha);\n\n//# sourceURL=webpack://yarn-test/./js/main.js?");

/***/ }),

/***/ "./js/modules/hasImagem.js":
/*!*********************************!*\
  !*** ./js/modules/hasImagem.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ hasImagem\n/* harmony export */ });\nfunction hasImagem(){\r\n    const hasImg = document.querySelectorAll('.div-imagens img');\r\n    hasImg.forEach((item) =>{\r\n    console.log(item,item.hasAttribute('alt'));\r\n    });\r\n};\n\n//# sourceURL=webpack://yarn-test/./js/modules/hasImagem.js?");

/***/ }),

/***/ "./js/modules/hrefChange.js":
/*!**********************************!*\
  !*** ./js/modules/hrefChange.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ hrefChange\n/* harmony export */ });\nfunction hrefChange(){\r\n    const hrefMenu = document.querySelector('.menu a[href^=\"http\"]');\r\n    hrefMenu.setAttribute('href','https://www.google.com');\r\n    console.log(hrefMenu);\r\n};\n\n//# sourceURL=webpack://yarn-test/./js/modules/hrefChange.js?");

/***/ }),

/***/ "./js/modules/itemMenuAdd.js":
/*!***********************************!*\
  !*** ./js/modules/itemMenuAdd.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ itemMenuAdd\n/* harmony export */ });\nfunction itemMenuAdd(){\r\n    const itemMenu = document.querySelectorAll('.menu p');\r\n    itemMenu.forEach((item) =>{\r\n        item.classList.add('ativo');\r\n    });\r\n    console.log(itemMenu);\r\n};\n\n//# sourceURL=webpack://yarn-test/./js/modules/itemMenuAdd.js?");

/***/ }),

/***/ "./js/modules/itemMenuRemoveAdd.js":
/*!*****************************************!*\
  !*** ./js/modules/itemMenuRemoveAdd.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ itemMenuRemoveAdd\n/* harmony export */ });\nfunction itemMenuRemoveAdd(){\r\n    const itemMenu = document.querySelectorAll('.menu p');\r\n    itemMenu.forEach((item) =>{\r\n        item.classList.remove('ativo');\r\n    });\r\n    itemMenu[0].classList.add('ativo');\r\n    console.log(itemMenu);\r\n};\n\n//# sourceURL=webpack://yarn-test/./js/modules/itemMenuRemoveAdd.js?");

/***/ }),

/***/ "./js/modules/teste.js":
/*!*****************************!*\
  !*** ./js/modules/teste.js ***!
  \*****************************/
/*! namespace exports */
/*! export senha [provided] [no usage info] [missing usage info prevents renaming] */
/*! export teste1 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export teste2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"teste1\": () => /* binding */ teste1,\n/* harmony export */   \"teste2\": () => /* binding */ teste2,\n/* harmony export */   \"senha\": () => /* binding */ senha\n/* harmony export */ });\nfunction teste1(){\r\n    console.log(\"Teste 1\");\r\n};\r\n\r\nfunction teste2(){\r\n    console.log(\"Teste 2\");\r\n};\r\n\r\nconst senha = 8257927572923;\n\n//# sourceURL=webpack://yarn-test/./js/modules/teste.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;