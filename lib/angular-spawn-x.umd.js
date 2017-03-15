(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("spawn-x"));
	else if(typeof define === 'function' && define.amd)
		define("ngSpawn", ["@angular/core", "spawn-x"], factory);
	else if(typeof exports === 'object')
		exports["ngSpawn"] = factory(require("@angular/core"), require("spawn-x"));
	else
		root["ngSpawn"] = factory(root["ng"]["core"], root["Spawn"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tokens__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSpawn; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NgSpawn = (function () {
    function NgSpawn(configureStore) {
        var _this = this;
        this.connect = function (selection) { return function (component) {
            component['@@SPAWN'] = {
                selection: selection,
                callbacks: []
            };
            var updateWithState = function (component, key, selector) {
                component[key] = _this.store.select(selector);
            };
            var detect = function (_a) {
                var zone = _a.zone, component = _a.component, key = _a.key, selector = _a.selector;
                component['@@SPAWN']['callbacks'].push(updateWithState);
                return _this.store.detect(zone, updateWithState, component, key, selector);
            };
            Object.keys(selection).forEach(function (key) {
                var zone;
                var selector;
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* isString */])(selection[key])) {
                    zone = selection[key];
                    selector = selection[key];
                }
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["b" /* isArray */])(selection[key])) {
                    if (selection[key].length === 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* isString */])(selection[key][0])) {
                        zone = selection[key][0];
                        selector = selection[key][0];
                    }
                    if (selection[key].length > 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* isString */])(selection[key][0]) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["c" /* isFunc */])(selection[key][1])) {
                        zone = selection[key][0];
                        selector = selection[key][1];
                    }
                }
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["d" /* isUndefined */])(zone) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["d" /* isUndefined */])(selector)) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["e" /* error */])("angular-spawn-x: incorrect arguments for selection");
                }
                detect({ zone: zone, component: component, key: key, selector: selector });
            });
        }; };
        this.disconnect = function (component) {
            Object.keys(component['@@SPAWN']['selection']).forEach(function (key) {
                component['@@SPAWN']['callbacks'].forEach(function (cb) {
                    _this.store.reject(key, cb);
                });
            });
        };
        this.select = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = _this.store).select.apply(_a, args);
            var _a;
        };
        this.detect = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = _this.store).detect.apply(_a, args);
            var _a;
        };
        this.reject = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = _this.store).reject.apply(_a, args);
            var _a;
        };
        this.update = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (_a = _this.store).update.apply(_a, args);
            var _a;
        };
        this.store = configureStore();
    }
    return NgSpawn;
}());
NgSpawn = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__tokens__["a" /* CONFIGURE_STORE */])),
    __metadata("design:paramtypes", [Function])
], NgSpawn);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIGURE_STORE; });

var CONFIGURE_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('angular-spawn-x configureStore');


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spawn_module__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spawn_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spawn_service__ = __webpack_require__(1);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__spawn_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wrappers__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__wrappers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__wrappers__["b"]; });





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return error; });
function isArray(target) {
    return Array.isArray(target);
}
function isFunc(target) {
    return typeof target === 'function';
}
function isString(target) {
    return typeof target === 'string';
}
function isUndefined(target) {
    return typeof target === 'undefined';
}
function error(message) {
    throw new Error(message);
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers__["e"]; });



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tokens__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spawn_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgSpawnModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NgSpawnModule = NgSpawnModule_1 = (function () {
    function NgSpawnModule() {
    }
    NgSpawnModule.forRoot = function (configureStore) {
        return {
            ngModule: NgSpawnModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__tokens__["a" /* CONFIGURE_STORE */],
                    useValue: configureStore
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__spawn_service__["a" /* NgSpawn */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__spawn_service__["a" /* NgSpawn */],
                    deps: [__WEBPACK_IMPORTED_MODULE_1__tokens__["a" /* CONFIGURE_STORE */]]
                }
            ]
        };
    };
    return NgSpawnModule;
}());
NgSpawnModule = NgSpawnModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({})
], NgSpawnModule);

var NgSpawnModule_1;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_spawn_x__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_spawn_x___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_spawn_x__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;
/* harmony export (immutable) */ __webpack_exports__["b"] = addInterceptor;

function createStore() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0_spawn_x__["createStore"].apply(__WEBPACK_IMPORTED_MODULE_0_spawn_x__, args);
}
function addInterceptor() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0_spawn_x__["addInterceptor"].apply(__WEBPACK_IMPORTED_MODULE_0_spawn_x__, args);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgSpawnModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NgSpawn", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addInterceptor", function() { return __WEBPACK_IMPORTED_MODULE_0__src__["d"]; });



/***/ })
/******/ ]);
});