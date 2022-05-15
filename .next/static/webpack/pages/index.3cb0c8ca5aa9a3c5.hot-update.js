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

/***/ "./components/GameMap.tsx":
/*!********************************!*\
  !*** ./components/GameMap.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameMap\": function() { return /* binding */ GameMap; },\n/* harmony export */   \"getBoundsFromCircle\": function() { return /* binding */ getBoundsFromCircle; }\n/* harmony export */ });\n/* harmony import */ var _Users_sigveseb_hyrdle_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_sigveseb_hyrdle_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sigveseb_hyrdle_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _googlemaps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../googlemaps */ \"./googlemaps.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar lineSymbol = {\n    path: \"M 0,-1 0,1\",\n    strokeColor: \"#000130\",\n    strokeOpacity: 0.8,\n    scale: 4\n};\nvar getBoundsFromCircle = function(param) {\n    var center = param.center, radius = param.radius;\n    var maps = window.google.maps;\n    return {\n        north: maps.geometry.spherical.computeOffset(center, radius, 0).lat(),\n        east: maps.geometry.spherical.computeOffset(center, radius, 90).lng(),\n        south: maps.geometry.spherical.computeOffset(center, radius, 180).lat(),\n        west: maps.geometry.spherical.computeOffset(center, radius, 270).lng()\n    };\n};\nvar GameMap = function(props) {\n    _s();\n    var mapsPromise = (0,_googlemaps__WEBPACK_IMPORTED_MODULE_3__.useGoogleMaps)().mapsPromise;\n    var id = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();\n    var circleObj = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var carMarkerObj = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var markerObj = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(function() {\n        return new Promise(function() {\n            var _ref = _asyncToGenerator(_Users_sigveseb_hyrdle_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(resolve) {\n                return _Users_sigveseb_hyrdle_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            console.log(\"making a new map yet again!\");\n                            _ctx.t0 = resolve;\n                            _ctx.next = 4;\n                            return mapsPromise;\n                        case 4:\n                            _ctx.t1 = _ctx.sent.Map;\n                            _ctx.t2 = document.getElementById(id);\n                            _ctx.t3 = {\n                                center: {\n                                    lat: 59.95,\n                                    lng: 10.5\n                                },\n                                zoom: 5\n                            };\n                            _ctx.t4 = new _ctx.t1(_ctx.t2, _ctx.t3);\n                            (0, _ctx.t0)(_ctx.t4);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function(resolve) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n    }), mapPromise = ref1[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var circle = props.circle;\n        if (circle) {\n            mapsPromise.then(function(maps) {\n                mapPromise.then(function(map) {\n                    var obj = new maps.Circle(_objectSpread({}, circle, {\n                        strokeColor: \"#1c5dff\",\n                        strokeOpacity: 0.8,\n                        strokeWeight: 2,\n                        fillColor: \"#1c5dff\",\n                        fillOpacity: 0.1\n                    }));\n                    obj.addListener(\"click\", function(e) {\n                        var ref;\n                        console.log(\"le click!\", (ref = props.onChange) === null || ref === void 0 ? void 0 : ref.call(props, e.latLng));\n                    });\n                    obj.setMap(map);\n                });\n            });\n        }\n    }, [\n        props.circle,\n        mapsPromise,\n        mapPromise\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var carMarker = props.carMarker;\n        if (carMarker) {\n            mapsPromise.then(function(maps) {\n                mapPromise.then(function(map) {\n                    var obj = carMarkerObj.current = carMarkerObj.current || new maps.Marker();\n                    obj.setPosition(carMarker);\n                    obj.setMap(map);\n                });\n            });\n        }\n    }, [\n        props.carMarker,\n        mapsPromise,\n        mapPromise\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var marker = props.marker;\n        if (marker) {\n            mapsPromise.then(function(maps) {\n                mapPromise.then(function(map) {\n                    var obj = markerObj.current = markerObj.current || new maps.Marker();\n                    obj.setPosition(marker);\n                    obj.setMap(map);\n                });\n            });\n        }\n    }, [\n        props.marker,\n        mapsPromise,\n        mapPromise\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            id: id,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                background: \"#888\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/sigveseb/hyrdle/components/GameMap.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(GameMap, \"tfjFiVGeKbuVCirDaB7GhufGmK8=\", false, function() {\n    return [\n        _googlemaps__WEBPACK_IMPORTED_MODULE_3__.useGoogleMaps,\n        react__WEBPACK_IMPORTED_MODULE_2__.useId\n    ];\n});\n_c = GameMap;\nvar _c;\n$RefreshReg$(_c, \"GameMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0o7S0FDRixFQUFFO1FBQUNqQixLQUFLLENBQUM0QixTQUFTO1FBQUUzQixXQUFXO1FBQUVhLFVBQVU7S0FBQyxDQUFDLENBQUM7SUFFL0N4QyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNMEQsTUFBTSxHQUFHaEMsS0FBSyxDQUFDZ0MsTUFBTTtRQUMzQixJQUFJQSxNQUFNLEVBQUU7WUFDVi9CLFdBQVcsQ0FBQ2UsSUFBSSxDQUFDLFNBQUM3QixJQUFJLEVBQUs7Z0JBQ3pCMkIsVUFBVSxDQUFDRSxJQUFJLENBQUMsU0FBQ0MsR0FBRyxFQUFLO29CQUN2QixJQUFNQyxHQUFHLEdBQUliLFNBQVMsQ0FBQ3dCLE9BQU8sR0FDNUJ4QixTQUFTLENBQUN3QixPQUFPLElBQUksSUFBSTFDLElBQUksQ0FBQzJDLE1BQU0sRUFBRTtvQkFDeENaLEdBQUcsQ0FBQ2EsV0FBVyxDQUFDQyxNQUFNLENBQUMsQ0FBQztvQkFDeEJkLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDVixHQUFHLENBQUMsQ0FBQztpQkFDakIsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1NBQ0o7S0FDRixFQUFFO1FBQUNqQixLQUFLLENBQUNnQyxNQUFNO1FBQUUvQixXQUFXO1FBQUVhLFVBQVU7S0FBQyxDQUFDLENBQUM7SUFFNUMscUJBQ0U7a0JBQ0UsNEVBQUNtQixLQUFHO1lBQ0YvQixFQUFFLEVBQUVBLEVBQUU7WUFDTmdDLEtBQUssRUFBRTtnQkFBRUMsS0FBSyxFQUFFLE1BQU07Z0JBQUVDLE1BQU0sRUFBRSxNQUFNO2dCQUFFQyxVQUFVLEVBQUUsTUFBTTthQUFFOzs7OztpQkFDdkQ7cUJBOEROLENBQ0g7Q0FDSCxDQUFDO0dBMUlXdEMsT0FBTzs7UUFDTXJCLHNEQUFhO1FBQzFCSCx3Q0FBSzs7O0FBRkx3QixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZU1hcC50c3g/MjdiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUlkLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHb29nbGVNYXBzIH0gZnJvbSBcIi4uL2dvb2dsZW1hcHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMYXRMbmdMaXRlcmFsIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgR2FtZU1hcFByb3BzIHtcbiAgbWFya2VyPzogTGF0TG5nTGl0ZXJhbDtcbiAgY2FyTWFya2VyPzogTGF0TG5nTGl0ZXJhbDtcbiAgY2lyY2xlPzogeyByYWRpdXM6IG51bWJlcjsgY2VudGVyOiBMYXRMbmdMaXRlcmFsIH0gfCBudWxsO1xuICBvbkNoYW5nZT86IChsYXRMbmc6IExhdExuZ0xpdGVyYWwpID0+IHZvaWQ7XG4gIG9uTWFwTW91bnRlZDogKG1hcDogYW55KSA9PiB2b2lkO1xufVxuXG5jb25zdCBsaW5lU3ltYm9sID0ge1xuICBwYXRoOiBcIk0gMCwtMSAwLDFcIixcbiAgc3Ryb2tlQ29sb3I6IFwiIzAwMDEzMFwiLFxuICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gIHNjYWxlOiA0LFxufTtcblxuaW50ZXJmYWNlIENpcmNsZUxpdGVyYWwge1xuICBjZW50ZXI6IExhdExuZ0xpdGVyYWw7XG4gIHJhZGl1czogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Qm91bmRzRnJvbUNpcmNsZSA9ICh7IGNlbnRlciwgcmFkaXVzIH06IENpcmNsZUxpdGVyYWwpID0+IHtcbiAgY29uc3QgbWFwcyA9IHdpbmRvdy5nb29nbGUubWFwcztcbiAgcmV0dXJuIHtcbiAgICBub3J0aDogbWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldChjZW50ZXIsIHJhZGl1cywgMCkubGF0KCksXG4gICAgZWFzdDogbWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldChjZW50ZXIsIHJhZGl1cywgOTApLmxuZygpLFxuICAgIHNvdXRoOiBtYXBzLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGNlbnRlciwgcmFkaXVzLCAxODApLmxhdCgpLFxuICAgIHdlc3Q6IG1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoY2VudGVyLCByYWRpdXMsIDI3MCkubG5nKCksXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgR2FtZU1hcCA9IChwcm9wczogR2FtZU1hcFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbWFwc1Byb21pc2UgfSA9IHVzZUdvb2dsZU1hcHMoKTtcbiAgY29uc3QgaWQgPSB1c2VJZCgpO1xuICBjb25zdCBjaXJjbGVPYmogPSB1c2VSZWY8Z29vZ2xlLm1hcHMuQ2lyY2xlIHwgbnVsbD4oKTtcbiAgY29uc3QgY2FyTWFya2VyT2JqID0gdXNlUmVmPGdvb2dsZS5tYXBzLk1hcmtlciB8IG51bGw+KCk7XG4gIGNvbnN0IG1hcmtlck9iaiA9IHVzZVJlZjxnb29nbGUubWFwcy5NYXJrZXIgfCBudWxsPigpO1xuICBjb25zdCBbbWFwUHJvbWlzZV0gPSB1c2VTdGF0ZTxQcm9taXNlPGdvb2dsZS5tYXBzLk1hcD4+KFxuICAgICgpID0+XG4gICAgICBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1ha2luZyBhIG5ldyBtYXAgeWV0IGFnYWluIVwiKTtcbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICBuZXcgKGF3YWl0IG1hcHNQcm9taXNlKS5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpISwge1xuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogNTkuOTUsIGxuZzogMTAuNSB9LFxuICAgICAgICAgICAgem9vbTogNSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSlcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNpcmNsZSA9IHByb3BzLmNpcmNsZTtcbiAgICBpZiAoY2lyY2xlKSB7XG4gICAgICBtYXBzUHJvbWlzZS50aGVuKChtYXBzKSA9PiB7XG4gICAgICAgIG1hcFByb21pc2UudGhlbigobWFwKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2JqID0gbmV3IG1hcHMuQ2lyY2xlKHtcbiAgICAgICAgICAgIC4uLmNpcmNsZSxcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiMxYzVkZmZcIixcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMixcbiAgICAgICAgICAgIGZpbGxDb2xvcjogXCIjMWM1ZGZmXCIsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9iai5hZGRMaXN0ZW5lcignY2xpY2snLCBlPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlIGNsaWNrIScsIHByb3BzLm9uQ2hhbmdlPy4oZS5sYXRMbmcpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvYmouc2V0TWFwKG1hcCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcHJvcHMuY2lyY2xlLCBtYXBzUHJvbWlzZSwgbWFwUHJvbWlzZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FyTWFya2VyID0gcHJvcHMuY2FyTWFya2VyO1xuICAgIGlmIChjYXJNYXJrZXIpIHtcbiAgICAgIG1hcHNQcm9taXNlLnRoZW4oKG1hcHMpID0+IHtcbiAgICAgICAgbWFwUHJvbWlzZS50aGVuKChtYXApID0+IHtcbiAgICAgICAgICBjb25zdCBvYmogPSAoY2FyTWFya2VyT2JqLmN1cnJlbnQgPVxuICAgICAgICAgICAgY2FyTWFya2VyT2JqLmN1cnJlbnQgfHwgbmV3IG1hcHMuTWFya2VyKCkpO1xuICAgICAgICAgIG9iai5zZXRQb3NpdGlvbihjYXJNYXJrZXIpO1xuICAgICAgICAgIG9iai5zZXRNYXAobWFwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtwcm9wcy5jYXJNYXJrZXIsIG1hcHNQcm9taXNlLCBtYXBQcm9taXNlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtYXJrZXIgPSBwcm9wcy5tYXJrZXI7XG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgbWFwc1Byb21pc2UudGhlbigobWFwcykgPT4ge1xuICAgICAgICBtYXBQcm9taXNlLnRoZW4oKG1hcCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9iaiA9IChtYXJrZXJPYmouY3VycmVudCA9XG4gICAgICAgICAgICBtYXJrZXJPYmouY3VycmVudCB8fCBuZXcgbWFwcy5NYXJrZXIoKSk7XG4gICAgICAgICAgb2JqLnNldFBvc2l0aW9uKG1hcmtlcik7XG4gICAgICAgICAgb2JqLnNldE1hcChtYXApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLm1hcmtlciwgbWFwc1Byb21pc2UsIG1hcFByb21pc2VdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kOiBcIiM4ODhcIiB9fVxuICAgICAgPjwvZGl2PlxuICAgICAgey8qXG4gICAgPEdvb2dsZU1hcFxuICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICBvbkxvYWQ9eyhtYXApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsZSBsb2FkXCIsIG1hcCk7XG4gICAgICAgIG1hcC5zZXRDZW50ZXIoeyBsYXQ6IDU5Ljk1LCBsbmc6IDEwLjUgfSk7XG4gICAgICAgIG1hcC5zZXRab29tKDUpO1xuICAgICAgICBwcm9wcy5vbk1hcE1vdW50ZWQobWFwKTtcbiAgICAgIH19XG4gICAgICBvcHRpb25zPXt7IGdlc3R1cmVIYW5kbGluZzogXCJncmVlZHlcIiB9fVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgZS5sYXRMbmcgJiYgcHJvcHMub25DaGFuZ2U/LihlLmxhdExuZy50b0pTT04oKSk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jYXJNYXJrZXIgJiYgPE1hcmtlciBwb3NpdGlvbj17cHJvcHMuY2FyTWFya2VyfSAvPn1cbiAgICAgIHshIShwcm9wcy5jYXJNYXJrZXIgJiYgcHJvcHMubWFya2VyKSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFBvbHlsaW5lXG4gICAgICAgICAgICBwYXRoPXtbcHJvcHMuY2FyTWFya2VyLCBwcm9wcy5tYXJrZXJdfVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICBjbGlja2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIGdlb2Rlc2ljOiB0cnVlLFxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLFxuICAgICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGljb246IGxpbmVTeW1ib2wsXG4gICAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgcmVwZWF0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7cHJvcHMubWFya2VyICYmIChcbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIHBvc2l0aW9uPXtwcm9wcy5tYXJrZXJ9XG4gICAgICAgICAgZHJhZ2dhYmxlPXshcHJvcHMuY2FyTWFya2VyfVxuICAgICAgICAgIG9uRHJhZ0VuZD17KGUpID0+IGUubGF0TG5nICYmIHByb3BzLm9uQ2hhbmdlPy4oZS5sYXRMbmcudG9KU09OKCkpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtwcm9wcy5jaXJjbGUgJiYgKFxuICAgICAgICA8Q2lyY2xlXG4gICAgICAgICAgY2VudGVyPXtwcm9wcy5jaXJjbGUuY2VudGVyfVxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiMxYzVkZmZcIixcbiAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IDAuOCxcbiAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMixcbiAgICAgICAgICAgIGZpbGxDb2xvcjogXCIjMWM1ZGZmXCIsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcmFkaXVzPXtwcm9wcy5jaXJjbGUucmFkaXVzfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLmxhdExuZyAmJiBwcm9wcy5vbkNoYW5nZT8uKGUubGF0TG5nLnRvSlNPTigpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0dvb2dsZU1hcD5cbiAgICAqL31cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlSWQiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUdvb2dsZU1hcHMiLCJsaW5lU3ltYm9sIiwicGF0aCIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsInNjYWxlIiwiZ2V0Qm91bmRzRnJvbUNpcmNsZSIsImNlbnRlciIsInJhZGl1cyIsIm1hcHMiLCJ3aW5kb3ciLCJnb29nbGUiLCJub3J0aCIsImdlb21ldHJ5Iiwic3BoZXJpY2FsIiwiY29tcHV0ZU9mZnNldCIsImxhdCIsImVhc3QiLCJsbmciLCJzb3V0aCIsIndlc3QiLCJHYW1lTWFwIiwicHJvcHMiLCJtYXBzUHJvbWlzZSIsImlkIiwiY2lyY2xlT2JqIiwiY2FyTWFya2VyT2JqIiwibWFya2VyT2JqIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb25zb2xlIiwibG9nIiwiTWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInpvb20iLCJtYXBQcm9taXNlIiwiY2lyY2xlIiwidGhlbiIsIm1hcCIsIm9iaiIsIkNpcmNsZSIsInN0cm9rZVdlaWdodCIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5IiwiYWRkTGlzdGVuZXIiLCJlIiwib25DaGFuZ2UiLCJsYXRMbmciLCJzZXRNYXAiLCJjYXJNYXJrZXIiLCJjdXJyZW50IiwiTWFya2VyIiwic2V0UG9zaXRpb24iLCJtYXJrZXIiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GameMap.tsx\n");

/***/ })

});