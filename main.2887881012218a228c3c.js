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

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/texts */ \"./assets/texts.json\");\n\n\n\nfunction getBrowserName() {\n    let userAgent = navigator.userAgent;\n    let browserName;\n    if(userAgent.match(/chrome|chromium|crios/i)){\n        browserName = \"chrome\";\n    }else if(userAgent.match(/firefox|fxios/i)){\n        browserName = \"firefox\";\n    }  else if(userAgent.match(/safari/i)){\n        browserName = \"safari\";\n    }else if(userAgent.match(/opr\\//i)){\n        browserName = \"opera\";\n    } else if(userAgent.match(/edg/i)){\n        browserName = \"edge\";\n    }else{\n        browserName=\"No browser detection\";\n    }\n    return browserName;\n}\n\nfunction logInfo(pageInfo) {\n    return function readyLog() {\n        console.log(`${pageInfo.taskName},${getBrowserName()},${performance.now()}`)\n    }\n}\n\nconst perfLogByEventListener = logInfo({\n    taskName: 'adaptive',\n});\nwindow.addEventListener(\"load\", perfLogByEventListener);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./assets/texts.json":
/*!***************************!*\
  !*** ./assets/texts.json ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"title\":\"title\",\"content\":\"content1\"},{\"title\":\"titile\",\"content\":\"content\"}]');\n\n//# sourceURL=webpack:///./assets/texts.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;