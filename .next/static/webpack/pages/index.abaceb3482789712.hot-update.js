"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./googlemaps.ts":
/*!***********************!*\
  !*** ./googlemaps.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useGoogleMaps\": function() { return /* binding */ useGoogleMaps; }\n/* harmony export */ });\n/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ \"./node_modules/@googlemaps/js-api-loader/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mapsPromise = new Promise(function(resolve) {\n    var loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({\n        apiKey: \"AIzaSyBrPsXcvS0lOSrlOQQZQQ0x5IywJvv5PQI\",\n        version: \"weekly\"\n    });\n    loader.load().then(function() {\n        resolve(google.maps);\n    });\n});\nvar useGoogleMaps = function() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), maps = ref[0], setMaps = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        mapsPromise.then(setMaps);\n    }, []);\n    return {\n        maps: maps,\n        promise: mapsPromise\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nb29nbGVtYXBzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDQztBQUVwRCxJQUFNRyxXQUFXLEdBQUcsSUFBSUMsT0FBTyxDQUFxQixTQUFDQyxPQUFPLEVBQUs7SUFDL0QsSUFBTUMsTUFBTSxHQUFHLElBQUlOLDZEQUFNLENBQUM7UUFDeEJPLE1BQU0sRUFBRSx5Q0FBeUM7UUFDakRDLE9BQU8sRUFBRSxRQUFRO0tBQ2xCLENBQUM7SUFFRkYsTUFBTSxDQUFDRyxJQUFJLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFdBQU07UUFDdkJMLE9BQU8sQ0FBQ00sTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBQztLQUN0QixDQUFDLENBQUM7Q0FDSixDQUFDO0FBRUssSUFBTUMsYUFBYSxHQUFHLFdBQU07SUFDakMsSUFBd0JYLEdBQXlDLEdBQXpDQSwrQ0FBUSxDQUE0QixJQUFJLENBQUMsRUFmbkUsSUFlYSxHQUFhQSxHQUF5QyxHQUF0RCxFQWZiLE9BZXNCLEdBQUlBLEdBQXlDLEdBQTdDO0lBQ3BCRCxnREFBUyxDQUFDLFdBQU07UUFDZEUsV0FBVyxDQUFDTyxJQUFJLENBQUNJLE9BQU8sQ0FBQyxDQUFDO0tBQzNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxPQUFPO1FBQUVGLElBQUksRUFBSkEsSUFBSTtRQUFFRyxPQUFPLEVBQUVaLFdBQVc7S0FBRSxDQUFDO0NBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ29vZ2xlbWFwcy50cz9jYWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRlciB9IGZyb20gXCJAZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgbWFwc1Byb21pc2UgPSBuZXcgUHJvbWlzZTx0eXBlb2YgZ29vZ2xlLm1hcHM+KChyZXNvbHZlKSA9PiB7XG4gIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoe1xuICAgIGFwaUtleTogXCJBSXphU3lCclBzWGN2UzBsT1NybE9RUVpRUTB4NUl5d0p2djVQUUlcIixcbiAgICB2ZXJzaW9uOiBcIndlZWtseVwiLFxuICB9KTtcblxuICBsb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgIHJlc29sdmUoZ29vZ2xlLm1hcHMpO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgY29uc3QgdXNlR29vZ2xlTWFwcyA9ICgpID0+IHtcbiAgY29uc3QgW21hcHMsIHNldE1hcHNdID0gdXNlU3RhdGU8dHlwZW9mIGdvb2dsZS5tYXBzIHwgbnVsbD4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFwc1Byb21pc2UudGhlbihzZXRNYXBzKTtcbiAgfSwgW10pO1xuICByZXR1cm4geyBtYXBzLCBwcm9taXNlOiBtYXBzUHJvbWlzZSB9O1xufTtcbiJdLCJuYW1lcyI6WyJMb2FkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1hcHNQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJsb2FkZXIiLCJhcGlLZXkiLCJ2ZXJzaW9uIiwibG9hZCIsInRoZW4iLCJnb29nbGUiLCJtYXBzIiwidXNlR29vZ2xlTWFwcyIsInNldE1hcHMiLCJwcm9taXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./googlemaps.ts\n");

/***/ })

});