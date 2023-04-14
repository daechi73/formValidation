"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkformvalidation"] = self["webpackChunkformvalidation"] || []).push([["main"],{

/***/ "./src/components/Validator.js":
/*!*************************************!*\
  !*** ./src/components/Validator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emailValidator\": () => (/* binding */ emailValidator)\n/* harmony export */ });\nconst emailValidator = () => {\n  const emailInput = document.querySelector(\".emailInput\");\n  const emailRegex = \"/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/\";\n  emailInput.addEventListener(\"input\", () => {\n    console.log(\"jjaa\");\n    if (!emailInput.value === emailRegex) {\n      emailInput.setCustomValidity(\"I am expecting an email address!\");\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack://formvalidation/./src/components/Validator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Validator */ \"./src/components/Validator.js\");\n\n\n(0,_components_Validator__WEBPACK_IMPORTED_MODULE_0__.emailValidator)();\n\n\n//# sourceURL=webpack://formvalidation/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);