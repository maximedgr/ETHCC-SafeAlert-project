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

/***/ "./components/Forms.tsx":
/*!******************************!*\
  !*** ./components/Forms.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_MAXD0_Desktop_ETHCCHACK_privy_front1_safealert_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_MAXD0_Desktop_ETHCCHACK_privy_front1_safealert_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_MAXD0_Desktop_ETHCCHACK_privy_front1_safealert_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _CustomTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomTextField */ \"./components/CustomTextField.tsx\");\n/* harmony import */ var _CustomDropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomDropDown */ \"./components/CustomDropDown.tsx\");\n/* harmony import */ var _components_Session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Session */ \"./components/Session.tsx\");\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n//Safe Alert - Hackathon ETHCC5\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    orientation: \"p\",\n    unit: \"mm\",\n    format: \"a4\",\n    putOnlyUsedFonts: true\n});\nvar PRIVY_API_KEY = \"lBDJpmLUcACj353vU7y73_aAMc4MulIEhNPxHyoYPM0=\";\nvar PRIVY_API_SECRET = \"cTUCAJagH1vjJFcrNgy7TVpSK0WEPj6aBP-LcCgAb1M=\";\nvar useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function() {\n    return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.createStyles)({\n        form: {\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        container: {\n            backgroundColor: \"#ffffff\",\n            position: \"relative\",\n            top: \"50%\",\n            left: \"50%\",\n            transform: \"translate(-50%,-50%)\",\n            padding: 30,\n            textAlign: \"center\"\n        },\n        title: {\n            margin: \"0px 0 20px 0\"\n        },\n        button: {\n            margin: \"20px 0\",\n            color: \"white\"\n        }\n    });\n});\nvar protocoles = [\n    {\n        value: \"AAVE\",\n        label: \"AAVE\"\n    },\n    {\n        value: \"CURVE\",\n        label: \"CURVE\"\n    },\n    {\n        value: \"1INCH\",\n        label: \"1INCH\"\n    },\n    {\n        value: \"SNX\",\n        label: \"SNX\"\n    },\n    {\n        value: \"COMETH\",\n        label: \"COMETH\"\n    }\n];\nvar impacts = [\n    {\n        value: \"Transaction\",\n        label: \"Transaction\"\n    },\n    {\n        value: \"Consensus manipulation\",\n        label: \"Consensus manipulation\"\n    },\n    {\n        value: \"Double-Spending\",\n        label: \"Double-Spending\"\n    },\n    {\n        value: \"Other\",\n        label: \"Other\"\n    }\n];\nvar severitys = [\n    {\n        value: \"Informational\",\n        label: \"Informational\"\n    },\n    {\n        value: \"Low\",\n        label: \"Low\"\n    },\n    {\n        value: \"Medium\",\n        label: \"Medium\"\n    },\n    {\n        value: \"Hard\",\n        label: \"Hard\"\n    },\n    {\n        value: \"Critical\",\n        label: \"Critical\"\n    }\n];\nvar Forms = function() {\n    _s();\n    var session = (0,_components_Session__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    var classes = useStyles();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        protocole: \"\",\n        linkbug: \"\",\n        impact: \"\",\n        severity: \"\",\n        description: \"\",\n        pob: \"\",\n        walletadd: \"\"\n    }), values = ref[0], setValues = ref[1];\n    var handleChange = function(event) {\n        setValues(_objectSpread({}, values, _defineProperty({}, event.target.name, event.target.value)));\n    };\n    var handleSubmit = function(event) {\n        createMessage(values);\n        event.preventDefault();\n        console.log(values);\n        savePDF();\n    };\n    var savePDF = function() {\n        doc.text(\"\\n\\nHello, you have a new Bug Bounty request\" + \"\\n\\n\" + \"Protocol :\\n \" + values.protocole + \"\\n \\n\" + \"Impact :\\n \" + values.impact + \"\\n\\n\" + \"Severity : \\n \" + values.severity + \"\\n\\n\" + \"Link toward the code that contains the bug :\\n \" + values.linkbug + \"\\n\\n\" + \"Description of the bug :\\n \" + values.description + \"\\n\\n\" + \"White Hat proof of bug :\\n \" + values.pob + \"\\n\\n\" + \"You can know chat anonymously with the White Hat hacker :\\n\" + session.address + \"\\n\\n\" + \"Stay safe - SAFE ALERT PROTOCOL\", 1, 1);\n        doc.save(\"WHrequest.pdf\");\n    };\n    function createMessage(message) {\n        return _createMessage.apply(this, arguments);\n    }\n    function _createMessage() {\n        _createMessage = _asyncToGenerator(C_Users_MAXD0_Desktop_ETHCCHACK_privy_front1_safealert_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(message) {\n            var result, getresult;\n            return C_Users_MAXD0_Desktop_ETHCCHACK_privy_front1_safealert_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return session.privy.put(session.address, [\n                            {\n                                field: \"protocole\",\n                                value: message.protocole\n                            },\n                            {\n                                field: \"linkbug\",\n                                value: message.linkbug\n                            },\n                            {\n                                field: \"impact\",\n                                value: message.impact\n                            },\n                            {\n                                field: \"severity\",\n                                value: message.severity\n                            },\n                            {\n                                field: \"description\",\n                                value: message.description\n                            },\n                            {\n                                field: \"pob\",\n                                value: message.pob\n                            },\n                            {\n                                field: \"walletadd\",\n                                value: message.walletadd\n                            }\n                        ]);\n                    case 2:\n                        result = _ctx.sent;\n                        console.log(\"it works !\");\n                        _ctx.next = 6;\n                        return session.privy.get(session.address, \"description\");\n                    case 6:\n                        getresult = _ctx.sent;\n                        console.log(getresult.text());\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _createMessage.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n        className: classes.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                variant: \"h4\",\n                className: classes.title,\n                children: \"Report\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                lineNumber: 136,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: function(e) {\n                    return handleSubmit(e);\n                },\n                className: classes.form,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        label: \"Protocol\",\n                        name: \"protocole\",\n                        changeHandler: handleChange,\n                        values: protocoles,\n                        currentValue: values.protocole\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        changeHandler: handleChange,\n                        label: \"Link toward the bug\",\n                        name: \"linkbug\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        label: \"Impact of the bug\",\n                        name: \"impact\",\n                        changeHandler: handleChange,\n                        values: impacts,\n                        currentValue: values.impact\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomDropDown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        label: \"Severity\",\n                        name: \"severity\",\n                        changeHandler: handleChange,\n                        values: severitys,\n                        currentValue: values.severity\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        changeHandler: handleChange,\n                        label: \"Description of the bug\",\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 142,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        changeHandler: handleChange,\n                        label: \"Proof of Bug (script that contains the operations to reproduce to exploit the bug)\",\n                        name: \"pob\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_CustomTextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        changeHandler: handleChange,\n                        label: \"Protocol Wallet Address \",\n                        name: \"walletadd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 144,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        className: classes.button,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MAXD0\\\\Desktop\\\\ETHCCHACK\\\\privy front1\\\\safealert-front\\\\components\\\\Forms.tsx\",\n        lineNumber: 135,\n        columnNumber: 9\n    }, _this);\n};\n_s(Forms, \"aPg0yIlxRNSjOC+yTfrgGYhfkdI=\", false, function() {\n    return [\n        _components_Session__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        useStyles\n    ];\n});\n_c = Forms;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Forms);\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTt3QkFBRXFCLGFBQWEsRUFBRXhCLFlBQVk7d0JBQUVGLE1BQU0sRUFBRVgsU0FBUzt3QkFBRXNDLFlBQVksRUFBRTNCLE1BQU0sQ0FBQ0osUUFBUTs7Ozs7NkJBQUc7a0NBQ3JJLDhEQUFDdEMsd0RBQWU7d0JBQUNvRSxhQUFhLEVBQUV4QixZQUFZO3dCQUFFZixLQUFLLEVBQUUsd0JBQXdCO3dCQUFFa0IsSUFBSSxFQUFFLGFBQWE7Ozs7OzZCQUFHO2tDQUNyRyw4REFBQy9DLHdEQUFlO3dCQUFDb0UsYUFBYSxFQUFFeEIsWUFBWTt3QkFBRWYsS0FBSyxFQUFFLG9GQUFvRjt3QkFBRWtCLElBQUksRUFBRSxLQUFLOzs7Ozs2QkFBRztrQ0FDekosOERBQUMvQyx3REFBZTt3QkFBQ29FLGFBQWEsRUFBRXhCLFlBQVk7d0JBQUVmLEtBQUssRUFBRSwwQkFBMEI7d0JBQUVrQixJQUFJLEVBQUUsV0FBVzs7Ozs7NkJBQUc7a0NBQ3JHLDhEQUFDaEQscURBQU07d0JBQUN1RSxJQUFJLEVBQUUsUUFBUTt3QkFBRUwsT0FBTyxFQUFFLFdBQVc7d0JBQUVELFNBQVMsRUFBRTlCLE9BQU8sQ0FBQ1QsTUFBTTtrQ0FBRSxRQUFNOzs7Ozs2QkFBUzs7Ozs7O3FCQUNyRjs7Ozs7O2FBQ0gsQ0FDVjtDQUNMO0dBeEVLTyxLQUFLOztRQUVTOUIsMkRBQVU7UUFDVlMsU0FBUzs7O0FBSHZCcUIsS0FBQUEsS0FBSztBQTBFWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybXMudHN4PzljNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9TYWZlIEFsZXJ0IC0gSGFja2F0aG9uIEVUSENDNVxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LFBhcGVyLEJ1dHRvbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDdXN0b21UZXh0RmllbGQgZnJvbSBcIi4vQ3VzdG9tVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBDdXN0b21Ecm9wRG93biBmcm9tIFwiLi9DdXN0b21Ecm9wRG93blwiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2Vzc2lvblwiO1xyXG5pbXBvcnQgSW5kZXggZnJvbSBcIi4uL3BhZ2VzL2luZGV4XCI7XHJcbmltcG9ydCBqc1BERiBmcm9tIFwianNwZGZcIjtcclxuY29uc3QgZG9jID0gbmV3IGpzUERGKHtcclxuICAgIG9yaWVudGF0aW9uOiAncCcsXHJcbiAgICB1bml0OiAnbW0nLFxyXG4gICAgZm9ybWF0OiAnYTQnLFxyXG4gICAgcHV0T25seVVzZWRGb250czp0cnVlXHJcbiAgIH0pO1xyXG5cclxuY29uc3QgUFJJVllfQVBJX0tFWSA9ICdsQkRKcG1MVWNBQ2ozNTN2VTd5NzNfYUFNYzRNdWxJRWhOUHhIeW9ZUE0wPSc7XHJcbmNvbnN0IFBSSVZZX0FQSV9TRUNSRVQgPSAnY1RVQ0FKYWdIMXZqSkZjck5neTdUVnBTSzBXRVBqNmFCUC1MY0NnQWIxTT0nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiBjcmVhdGVTdHlsZXMoe1xyXG4gICAgZm9ybSA6IHtcclxuICAgICAgICBkaXNwbGF5IDogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbiA6IFwiY29sdW1uXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIHBvc2l0aW9uIDogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIHRvcCA6IFwiNTAlXCIsXHJcbiAgICAgICAgbGVmdCA6IFwiNTAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtIDogXCJ0cmFuc2xhdGUoLTUwJSwtNTAlKVwiLFxyXG4gICAgICAgIHBhZGRpbmcgOiAzMCxcclxuICAgICAgICB0ZXh0QWxpZ24gOiBcImNlbnRlclwiXHJcbiAgICB9LFxyXG4gICAgdGl0bGUgOiB7XHJcbiAgICAgICAgbWFyZ2luOlwiMHB4IDAgMjBweCAwXCJcclxuICAgIH0sXHJcbiAgICBidXR0b24gOiB7XHJcbiAgICAgICAgbWFyZ2luOlwiMjBweCAwXCIsXHJcbiAgICAgICAgY29sb3I6XCJ3aGl0ZVwiXHJcbiAgICB9XHJcbn0pKVxyXG5cclxudHlwZSBWYWx1ZXMgPSB7XHJcbiAgICBwcm90b2NvbGUgOiBzdHJpbmcsXHJcbiAgICBsaW5rYnVnIDogc3RyaW5nLFxyXG4gICAgaW1wYWN0IDogc3RyaW5nLFxyXG4gICAgc2V2ZXJpdHkgOiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbiA6IHN0cmluZyxcclxuICAgIHBvYiA6IHN0cmluZyxcclxuICAgIHdhbGxldGFkZCA6IHN0cmluZ1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHByb3RvY29sZXMgPSBbXHJcbiAgICB7dmFsdWUgOiBcIkFBVkVcIixsYWJlbCA6XCJBQVZFXCJ9LFxyXG4gICAge3ZhbHVlIDogXCJDVVJWRVwiLGxhYmVsIDpcIkNVUlZFXCJ9LFxyXG4gICAge3ZhbHVlIDogXCIxSU5DSFwiLGxhYmVsIDpcIjFJTkNIXCJ9LFxyXG4gICAge3ZhbHVlIDogXCJTTlhcIixsYWJlbCA6XCJTTlhcIn0sXHJcbiAgICB7dmFsdWUgOiBcIkNPTUVUSFwiLGxhYmVsIDpcIkNPTUVUSFwifVxyXG5dXHJcblxyXG5jb25zdCBpbXBhY3RzID0gW1xyXG4gICAge3ZhbHVlIDogXCJUcmFuc2FjdGlvblwiLGxhYmVsIDpcIlRyYW5zYWN0aW9uXCJ9LFxyXG4gICAge3ZhbHVlIDogXCJDb25zZW5zdXMgbWFuaXB1bGF0aW9uXCIsbGFiZWwgOlwiQ29uc2Vuc3VzIG1hbmlwdWxhdGlvblwifSxcclxuICAgIHt2YWx1ZSA6IFwiRG91YmxlLVNwZW5kaW5nXCIsbGFiZWwgOlwiRG91YmxlLVNwZW5kaW5nXCJ9LFxyXG4gICAge3ZhbHVlIDogXCJPdGhlclwiLGxhYmVsIDpcIk90aGVyXCJ9XHJcbl1cclxuXHJcbmNvbnN0IHNldmVyaXR5cyA9IFtcclxuICAgIHt2YWx1ZSA6IFwiSW5mb3JtYXRpb25hbFwiLGxhYmVsIDpcIkluZm9ybWF0aW9uYWxcIn0sXHJcbiAgICB7dmFsdWUgOiBcIkxvd1wiLGxhYmVsIDpcIkxvd1wifSxcclxuICAgIHt2YWx1ZSA6IFwiTWVkaXVtXCIsbGFiZWwgOlwiTWVkaXVtXCJ9LFxyXG4gICAge3ZhbHVlIDogXCJIYXJkXCIsbGFiZWwgOlwiSGFyZFwifSxcclxuICAgIHt2YWx1ZSA6IFwiQ3JpdGljYWxcIixsYWJlbCA6XCJDcml0aWNhbFwifVxyXG5dXHJcblxyXG5jb25zdCBGb3JtcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3ZhbHVlcyxzZXRWYWx1ZXNdID0gdXNlU3RhdGU8VmFsdWVzPih7XHJcbiAgICAgICAgcHJvdG9jb2xlIDogXCJcIixcclxuICAgICAgICBsaW5rYnVnOlwiXCIsXHJcbiAgICAgICAgaW1wYWN0IDpcIlwiLFxyXG4gICAgICAgIHNldmVyaXR5OlwiXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgICAgICBwb2I6XCJcIixcclxuICAgICAgICB3YWxsZXRhZGQ6XCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50IDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRWYWx1ZXMoey4uLnZhbHVlcyxbZXZlbnQudGFyZ2V0Lm5hbWVdIDogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50IDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgICAgICBjcmVhdGVNZXNzYWdlKHZhbHVlcyk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAgICAgc2F2ZVBERigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNhdmVQREYgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jLnRleHQoXCJcXG5cXG5IZWxsbywgeW91IGhhdmUgYSBuZXcgQnVnIEJvdW50eSByZXF1ZXN0XCIgK1wiXFxuXFxuXCIrXHJcbiAgICAgICAgXCJQcm90b2NvbCA6XFxuIFwiK3ZhbHVlcy5wcm90b2NvbGUgK1wiXFxuIFxcblwiKyBcclxuICAgICAgICBcIkltcGFjdCA6XFxuIFwiK3ZhbHVlcy5pbXBhY3QrXCJcXG5cXG5cIitcclxuICAgICAgICBcIlNldmVyaXR5IDogXFxuIFwiK3ZhbHVlcy5zZXZlcml0eStcIlxcblxcblwiK1xyXG4gICAgICAgIFwiTGluayB0b3dhcmQgdGhlIGNvZGUgdGhhdCBjb250YWlucyB0aGUgYnVnIDpcXG4gXCIrdmFsdWVzLmxpbmtidWcrXCJcXG5cXG5cIitcclxuICAgICAgICBcIkRlc2NyaXB0aW9uIG9mIHRoZSBidWcgOlxcbiBcIit2YWx1ZXMuZGVzY3JpcHRpb24rXCJcXG5cXG5cIitcclxuICAgICAgICBcIldoaXRlIEhhdCBwcm9vZiBvZiBidWcgOlxcbiBcIit2YWx1ZXMucG9iK1wiXFxuXFxuXCIrXHJcbiAgICAgICAgXCJZb3UgY2FuIGtub3cgY2hhdCBhbm9ueW1vdXNseSB3aXRoIHRoZSBXaGl0ZSBIYXQgaGFja2VyIDpcXG5cIitzZXNzaW9uLmFkZHJlc3MrXCJcXG5cXG5cIitcclxuICAgICAgICBcIlN0YXkgc2FmZSAtIFNBRkUgQUxFUlQgUFJPVE9DT0xcIiwgMSwxKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGRvYy5zYXZlKFwiV0hyZXF1ZXN0LnBkZlwiKTsgIFxyXG5cclxuICAgICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6VmFsdWVzKTpQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNlc3Npb24ucHJpdnkucHV0KHNlc3Npb24uYWRkcmVzcywgW1xyXG4gICAgICAgICAge2ZpZWxkOidwcm90b2NvbGUnLCB2YWx1ZTogbWVzc2FnZS5wcm90b2NvbGV9LFxyXG4gICAgICAgICAge2ZpZWxkOlwibGlua2J1Z1wiLHZhbHVlOm1lc3NhZ2UubGlua2J1Z30sXHJcbiAgICAgICAgICB7ZmllbGQ6XCJpbXBhY3RcIix2YWx1ZTptZXNzYWdlLmltcGFjdH0sXHJcbiAgICAgICAgICB7ZmllbGQ6XCJzZXZlcml0eVwiLHZhbHVlOm1lc3NhZ2Uuc2V2ZXJpdHl9LFxyXG4gICAgICAgICAge2ZpZWxkOlwiZGVzY3JpcHRpb25cIix2YWx1ZTptZXNzYWdlLmRlc2NyaXB0aW9ufSxcclxuICAgICAgICAgIHtmaWVsZDpcInBvYlwiLHZhbHVlOm1lc3NhZ2UucG9ifSxcclxuICAgICAgICAgIHtmaWVsZDpcIndhbGxldGFkZFwiLHZhbHVlOm1lc3NhZ2Uud2FsbGV0YWRkfVxyXG4gICAgICBcclxuICAgICAgICBdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaXQgd29ya3MgIScpO1xyXG4gICAgICAgIGNvbnN0IGdldHJlc3VsdCA9IGF3YWl0IHNlc3Npb24ucHJpdnkuZ2V0KHNlc3Npb24uYWRkcmVzcywgJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0cmVzdWx0IS50ZXh0KCkpXHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD17XCJoNFwifSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlJlcG9ydDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wRG93biBsYWJlbD17XCJQcm90b2NvbFwifSBuYW1lPXtcInByb3RvY29sZVwifSBjaGFuZ2VIYW5kbGVyPXtoYW5kbGVDaGFuZ2V9IHZhbHVlcz17cHJvdG9jb2xlc30gY3VycmVudFZhbHVlPXt2YWx1ZXMucHJvdG9jb2xlfS8+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkIGNoYW5nZUhhbmRsZXI9e2hhbmRsZUNoYW5nZX0gbGFiZWw9e1wiTGluayB0b3dhcmQgdGhlIGJ1Z1wifSBuYW1lPXtcImxpbmtidWdcIn0vPlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbURyb3BEb3duIGxhYmVsPXtcIkltcGFjdCBvZiB0aGUgYnVnXCJ9IG5hbWU9e1wiaW1wYWN0XCJ9IGNoYW5nZUhhbmRsZXI9e2hhbmRsZUNoYW5nZX0gdmFsdWVzPXtpbXBhY3RzfSBjdXJyZW50VmFsdWU9e3ZhbHVlcy5pbXBhY3R9Lz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21Ecm9wRG93biBsYWJlbD17XCJTZXZlcml0eVwifSBuYW1lPXtcInNldmVyaXR5XCJ9IGNoYW5nZUhhbmRsZXI9e2hhbmRsZUNoYW5nZX0gdmFsdWVzPXtzZXZlcml0eXN9IGN1cnJlbnRWYWx1ZT17dmFsdWVzLnNldmVyaXR5fS8+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkIGNoYW5nZUhhbmRsZXI9e2hhbmRsZUNoYW5nZX0gbGFiZWw9e1wiRGVzY3JpcHRpb24gb2YgdGhlIGJ1Z1wifSBuYW1lPXtcImRlc2NyaXB0aW9uXCJ9Lz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0RmllbGQgY2hhbmdlSGFuZGxlcj17aGFuZGxlQ2hhbmdlfSBsYWJlbD17XCJQcm9vZiBvZiBCdWcgKHNjcmlwdCB0aGF0IGNvbnRhaW5zIHRoZSBvcGVyYXRpb25zIHRvIHJlcHJvZHVjZSB0byBleHBsb2l0IHRoZSBidWcpXCJ9IG5hbWU9e1wicG9iXCJ9Lz5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21UZXh0RmllbGQgY2hhbmdlSGFuZGxlcj17aGFuZGxlQ2hhbmdlfSBsYWJlbD17XCJQcm90b2NvbCBXYWxsZXQgQWRkcmVzcyBcIn0gbmFtZT17XCJ3YWxsZXRhZGRcIn0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXtcInN1Ym1pdFwifSB2YXJpYW50PXtcImNvbnRhaW5lZFwifSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJUeXBvZ3JhcGh5IiwiUGFwZXIiLCJCdXR0b24iLCJDdXN0b21UZXh0RmllbGQiLCJDdXN0b21Ecm9wRG93biIsInVzZVNlc3Npb24iLCJqc1BERiIsImRvYyIsIm9yaWVudGF0aW9uIiwidW5pdCIsImZvcm1hdCIsInB1dE9ubHlVc2VkRm9udHMiLCJQUklWWV9BUElfS0VZIiwiUFJJVllfQVBJX1NFQ1JFVCIsInVzZVN0eWxlcyIsImZvcm0iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbnRhaW5lciIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJ0aXRsZSIsIm1hcmdpbiIsImJ1dHRvbiIsImNvbG9yIiwicHJvdG9jb2xlcyIsInZhbHVlIiwibGFiZWwiLCJpbXBhY3RzIiwic2V2ZXJpdHlzIiwiRm9ybXMiLCJzZXNzaW9uIiwiY2xhc3NlcyIsInByb3RvY29sZSIsImxpbmtidWciLCJpbXBhY3QiLCJzZXZlcml0eSIsImRlc2NyaXB0aW9uIiwicG9iIiwid2FsbGV0YWRkIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiY3JlYXRlTWVzc2FnZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInNhdmVQREYiLCJ0ZXh0IiwiYWRkcmVzcyIsInNhdmUiLCJtZXNzYWdlIiwicmVzdWx0IiwiZ2V0cmVzdWx0IiwicHJpdnkiLCJwdXQiLCJmaWVsZCIsImdldCIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJvblN1Ym1pdCIsImUiLCJjaGFuZ2VIYW5kbGVyIiwiY3VycmVudFZhbHVlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Forms.tsx\n");

/***/ })

});