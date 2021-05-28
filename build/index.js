(window["webpackJsonp_wp_bootstrap_blocks"] = window["webpackJsonp_wp_bootstrap_blocks"] || []).push([["style-index"],{

/***/ "./src/row/style.scss":
/*!****************************!*\
  !*** ./src/row/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_wp_bootstrap_blocks"] = window["webpackJsonp_wp_bootstrap_blocks"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/column/block.js":
/*!*****************************!*\
  !*** ./src/column/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/column/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./src/icons.js");


/**
 * BLOCK: wp-bootstrap-blocks/column
 */
// WordPress dependencies







var _ref = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__,
    InnerBlocks = _ref.InnerBlocks; // Fallback to deprecated '@wordpress/editor' for backwards compatibility


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wp-bootstrap-blocks/column', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Column', 'wp-bootstrap-blocks'),
  // Block title.
  icon: _icons__WEBPACK_IMPORTED_MODULE_6__["column"],
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'wp-bootstrap-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Column', 'wp-bootstrap-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bootstrap Column', 'wp-bootstrap-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bootstrap', 'wp-bootstrap-blocks')],
  parent: ['wp-bootstrap-blocks/row'],
  // attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var sizeXxl = attributes.sizeXxl,
        sizeXl = attributes.sizeXl,
        sizeLg = attributes.sizeLg,
        sizeMd = attributes.sizeMd,
        sizeSm = attributes.sizeSm,
        sizeXs = attributes.sizeXs,
        equalWidthXxl = attributes.equalWidthXxl,
        equalWidthXl = attributes.equalWidthXl,
        equalWidthLg = attributes.equalWidthLg,
        equalWidthMd = attributes.equalWidthMd,
        equalWidthSm = attributes.equalWidthSm,
        equalWidthXs = attributes.equalWidthXs,
        bgColor = attributes.bgColor,
        padding = attributes.padding,
        centerContent = attributes.centerContent; // Prepare styles for selected background-color

    var style = {};

    if (bgColor) {
      var selectedBgColor = _edit__WEBPACK_IMPORTED_MODULE_5__["bgColorOptions"].find(function (bgColorOption) {
        return bgColorOption.name === bgColor;
      });

      if (selectedBgColor) {
        style = {
          backgroundColor: selectedBgColor.color
        };
      }
    }

    return {
      'data-size-xs': equalWidthXxl || equalWidthXl || equalWidthLg || equalWidthMd || equalWidthSm || equalWidthXs ? 0 : sizeXs,
      'data-size-sm': equalWidthXxl || equalWidthXl || equalWidthLg || equalWidthMd || equalWidthSm ? 0 : sizeSm,
      'data-size-md': equalWidthXxl || equalWidthXl || equalWidthLg || equalWidthMd ? 0 : sizeMd,
      'data-size-lg': equalWidthXxl || equalWidthXl || equalWidthLg ? 0 : sizeLg,
      'data-size-xl': equalWidthXxl || equalWidthXl ? 0 : sizeXl,
      'data-size-xxl': equalWidthXxl ? 0 : sizeXxl,
      'data-bg-color': bgColor,
      'data-padding': padding,
      'data-center-content': centerContent,
      style: style
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/column/edit.js":
/*!****************************!*\
  !*** ./src/column/edit.js ***!
  \****************************/
/*! exports provided: bgColorOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgColorOptions", function() { return bgColorOptions; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../helper */ "./src/helper.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// WordPress dependencies










var _ref = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_15__,
    InnerBlocks = _ref.InnerBlocks,
    InspectorControls = _ref.InspectorControls; // Fallback to deprecated '@wordpress/editor' for backwards compatibility


var ColumnSizeRangeControl = function ColumnSizeRangeControl(_ref2) {
  var label = _ref2.label,
      attributeName = _ref2.attributeName,
      value = _ref2.value,
      setAttributes = _ref2.setAttributes,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7___default()(_ref2, ["label", "attributeName", "value", "setAttributes"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({
    label: label,
    value: value,
    onChange: function onChange(selectedSize) {
      setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()({}, attributeName, selectedSize));
    },
    min: 0,
    max: 12
  }, props));
};

var bgColorOptions = [{
  name: 'primary',
  color: '#007bff'
}, {
  name: 'secondary',
  color: '#6c757d'
}];
bgColorOptions = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__["applyFilters"])('wpBootstrapBlocks.column.bgColorOptions', bgColorOptions);
var paddingOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('None', 'wp-bootstrap-blocks'),
  value: ''
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('1', 'wp-bootstrap-blocks'),
  value: 'p-1'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('2', 'wp-bootstrap-blocks'),
  value: 'p-2'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('3', 'wp-bootstrap-blocks'),
  value: 'p-3'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('4', 'wp-bootstrap-blocks'),
  value: 'p-4'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('5', 'wp-bootstrap-blocks'),
  value: 'p-5'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('6', 'wp-bootstrap-blocks'),
  value: 'p-6'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('7', 'wp-bootstrap-blocks'),
  value: 'p-7'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('8', 'wp-bootstrap-blocks'),
  value: 'p-8'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('9', 'wp-bootstrap-blocks'),
  value: 'p-9'
}];
paddingOptions = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_13__["applyFilters"])('wpBootstrapBlocks.column.paddingOptions', paddingOptions);

var BootstrapColumnEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BootstrapColumnEdit, _Component);

  var _super = _createSuper(BootstrapColumnEdit);

  function BootstrapColumnEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BootstrapColumnEdit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BootstrapColumnEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          className = _this$props.className,
          setAttributes = _this$props.setAttributes,
          hasChildBlocks = _this$props.hasChildBlocks;
      var sizeXxl = attributes.sizeXxl,
          sizeXl = attributes.sizeXl,
          sizeLg = attributes.sizeLg,
          sizeMd = attributes.sizeMd,
          sizeSm = attributes.sizeSm,
          sizeXs = attributes.sizeXs,
          equalWidthXxl = attributes.equalWidthXxl,
          equalWidthXl = attributes.equalWidthXl,
          equalWidthLg = attributes.equalWidthLg,
          equalWidthMd = attributes.equalWidthMd,
          equalWidthSm = attributes.equalWidthSm,
          equalWidthXs = attributes.equalWidthXs,
          bgColor = attributes.bgColor,
          padding = attributes.padding,
          centerContent = attributes.centerContent; // If centerContent is enabled but no background-color is selected -> reset attribute

      if (!bgColor && centerContent) {
        setAttributes({
          centerContent: false
        });
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Column size', 'wp-bootstrap-blocks'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ColumnSizeRangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Xs Column count', 'wp-bootstrap-blocks'),
        attributeName: "sizeXs",
        value: sizeXs,
        disabled: equalWidthXs,
        setAttributes: setAttributes
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Xs equal-width', 'wp-bootstrap-blocks'),
        checked: equalWidthXs,
        onChange: function onChange(isChecked) {
          return setAttributes({
            equalWidthXs: isChecked
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ColumnSizeRangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Sm Column count', 'wp-bootstrap-blocks'),
        attributeName: "sizeSm",
        value: sizeSm,
        disabled: equalWidthSm,
        setAttributes: setAttributes
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Sm equal-width', 'wp-bootstrap-blocks'),
        checked: equalWidthSm,
        onChange: function onChange(isChecked) {
          return setAttributes({
            equalWidthSm: isChecked
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ColumnSizeRangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Md Column count', 'wp-bootstrap-blocks'),
        attributeName: "sizeMd",
        value: sizeMd,
        disabled: equalWidthMd,
        setAttributes: setAttributes
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Md equal-width', 'wp-bootstrap-blocks'),
        checked: equalWidthMd,
        onChange: function onChange(isChecked) {
          return setAttributes({
            equalWidthMd: isChecked
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ColumnSizeRangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Lg Column count', 'wp-bootstrap-blocks'),
        attributeName: "sizeLg",
        value: sizeLg,
        disabled: equalWidthLg,
        setAttributes: setAttributes
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Lg equal-width', 'wp-bootstrap-blocks'),
        checked: equalWidthLg,
        onChange: function onChange(isChecked) {
          return setAttributes({
            equalWidthLg: isChecked
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ColumnSizeRangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Xl Column count', 'wp-bootstrap-blocks'),
        attributeName: "sizeXl",
        value: sizeXl,
        disabled: equalWidthXl,
        setAttributes: setAttributes
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Xl equal-width', 'wp-bootstrap-blocks'),
        checked: equalWidthXl,
        onChange: function onChange(isChecked) {
          return setAttributes({
            equalWidthXl: isChecked
          });
        }
      }), Object(_helper__WEBPACK_IMPORTED_MODULE_16__["isBootstrap5Active"])() && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(ColumnSizeRangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Xxl Column count', 'wp-bootstrap-blocks'),
        attributeName: "sizeXxl",
        value: sizeXxl,
        disabled: equalWidthXxl,
        setAttributes: setAttributes
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Xxl equal-width', 'wp-bootstrap-blocks'),
        checked: equalWidthXxl,
        onChange: function onChange(isChecked) {
          return setAttributes({
            equalWidthXxl: isChecked
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Background color', 'wp-bootstrap-blocks'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
        colors: bgColorOptions,
        value: bgColor,
        onChange: function onChange(value) {
          // Value is undefined if color gets cleared
          if (!value) {
            setAttributes({
              bgColor: '',
              centerContent: false
            });
          } else {
            var selectedColor = bgColorOptions.find(function (c) {
              return c.color === value;
            });

            if (selectedColor) {
              setAttributes({
                bgColor: selectedColor.name
              });
            }
          }
        },
        disableCustomColors: true
      }), bgColor ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Center content vertically in row', 'wp-bootstrap-blocks'),
        checked: centerContent,
        onChange: function onChange(isChecked) {
          return setAttributes({
            centerContent: isChecked
          });
        },
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('This setting only applies if there is no vertical alignment set on the parent row block.', 'wp-bootstrap-blocks')
      }) : null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Padding (inside column)', 'wp-bootstrap-blocks'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Size', 'wp-bootstrap-blocks'),
        value: padding,
        options: paddingOptions,
        onChange: function onChange(value) {
          setAttributes({
            padding: value
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(InnerBlocks, {
        templateLock: false,
        renderAppender: hasChildBlocks ? undefined : function () {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
        }
      })));
    }
  }]);

  return BootstrapColumnEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_12__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__["withSelect"])(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _ref3 = select('core/block-editor') || select('core/editor'),
      getBlockOrder = _ref3.getBlockOrder; // Fallback to 'core/editor' for backwards compatibility


  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}))(BootstrapColumnEdit));

/***/ }),

/***/ "./src/container/block.js":
/*!********************************!*\
  !*** ./src/container/block.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/container/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./src/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/container/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_7__);


/**
 * BLOCK: wp-bootstrap-blocks/container
 */
// WordPress dependencies








var _ref = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__,
    InnerBlocks = _ref.InnerBlocks; // Fallback to deprecated '@wordpress/editor' for backwards compatibility


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wp-bootstrap-blocks/container', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Container', 'wp-bootstrap-blocks'),
  // Block title.
  icon: _icons__WEBPACK_IMPORTED_MODULE_6__["stack"],
  category: 'wp-bootstrap-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Container', 'wp-bootstrap-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bootstrap Container', 'wp-bootstrap-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bootstrap', 'wp-bootstrap-blocks')],
  supports: {
    align: false
  },
  // attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/container/edit.js":
/*!*******************************!*\
  !*** ./src/container/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../helper */ "./src/helper.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// WordPress dependencies










var _ref = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_13__,
    InnerBlocks = _ref.InnerBlocks,
    InspectorControls = _ref.InspectorControls; // Fallback to deprecated '@wordpress/editor' for backwards compatibility


var marginAfterOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Small', 'wp-bootstrap-blocks'),
  value: 'mb-2'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Medium', 'wp-bootstrap-blocks'),
  value: 'mb-3'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Large', 'wp-bootstrap-blocks'),
  value: 'mb-5'
}];
marginAfterOptions = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_11__["applyFilters"])('wpBootstrapBlocks.container.marginAfterOptions', marginAfterOptions);
marginAfterOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('None', 'wp-bootstrap-blocks'),
  value: 'mb-0'
}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(marginAfterOptions));
var fluidBreakpointOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Xl', 'wp-bootstrap-blocks'),
  value: 'xl'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Lg', 'wp-bootstrap-blocks'),
  value: 'lg'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Md', 'wp-bootstrap-blocks'),
  value: 'md'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Sm', 'wp-bootstrap-blocks'),
  value: 'sm'
}];

if (Object(_helper__WEBPACK_IMPORTED_MODULE_14__["isBootstrap5Active"])()) {
  fluidBreakpointOptions = [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Xxl', 'wp-bootstrap-blocks'),
    value: 'xxl'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(fluidBreakpointOptions));
}

fluidBreakpointOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('No breakpoint selected', 'wp-bootstrap-blocks'),
  value: ''
}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(fluidBreakpointOptions));

var BootstrapContainerEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BootstrapContainerEdit, _Component);

  var _super = _createSuper(BootstrapContainerEdit);

  function BootstrapContainerEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BootstrapContainerEdit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BootstrapContainerEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          className = _this$props.className,
          setAttributes = _this$props.setAttributes,
          hasChildBlocks = _this$props.hasChildBlocks;
      var isFluid = attributes.isFluid,
          fluidBreakpoint = attributes.fluidBreakpoint,
          marginAfter = attributes.marginAfter;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fluid', 'wp-bootstrap-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fluid', 'wp-bootstrap-blocks'),
        checked: isFluid,
        onChange: function onChange(isChecked) {
          setAttributes({
            isFluid: isChecked
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fluid Breakpoint', 'wp-bootstrap-blocks'),
        disabled: !isFluid,
        value: fluidBreakpoint,
        options: fluidBreakpointOptions,
        onChange: function onChange(selectedFluidBreakpoint) {
          setAttributes({
            fluidBreakpoint: selectedFluidBreakpoint
          });
        },
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fluid breakpoints only work with Bootstrap v4.4+. The container will be 100% wide until the specified breakpoint is reached, after which max-widths for each of the higher breakpoints will be applied.', 'wp-bootstrap-blocks')
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Margin', 'wp-bootstrap-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Margin After', 'wp-bootstrap-blocks'),
        value: marginAfter,
        options: marginAfterOptions,
        onChange: function onChange(selectedMarginAfter) {
          setAttributes({
            marginAfter: selectedMarginAfter
          });
        }
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InnerBlocks, {
        renderAppender: hasChildBlocks ? undefined : function () {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(InnerBlocks.ButtonBlockAppender, null);
        }
      })));
    }
  }]);

  return BootstrapContainerEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["withSelect"])(function (select, ownProps) {
  var clientId = ownProps.clientId;

  var _ref2 = select('core/block-editor') || select('core/editor'),
      getBlockOrder = _ref2.getBlockOrder; // Fallback to 'core/editor' for backwards compatibility


  return {
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}))(BootstrapContainerEdit));

/***/ }),

/***/ "./src/container/editor.scss":
/*!***********************************!*\
  !*** ./src/container/editor.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/custom-category-icon.js":
/*!*************************************!*\
  !*** ./src/custom-category-icon.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

// WordPress dependencies

 // Check if updateCategory function exists

if (_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["updateCategory"]) {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["updateCategory"])('wp-bootstrap-blocks', {
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
      viewBox: "0 0 120 120",
      xmlns: "http://www.w3.org/2000/svg"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Rect"], {
      stroke: "#979797",
      fill: "#6EA644",
      x: "-110.5",
      y: "-123.5",
      width: "340",
      height: "367"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
      d: "M105.362393,45.9570783 C103.695123,44.8177711 101.427637,45.2868976 100.293893,46.9623494 C93.6915059,56.9480422 79.6864416,57.4841867 78.952843,57.4841867 C78.8194614,57.4841867 78.7527707,57.4841867 78.6193891,57.4841867 C61.3464764,57.4841867 54.744089,72.2951807 54.4773258,72.8983434 C53.6770365,74.7748494 54.5440166,76.9194277 56.3446678,77.7236446 C56.8115032,77.9246988 57.3450295,78.0587349 57.811865,78.0587349 C59.2123714,78.0587349 60.5461871,77.2545181 61.1464041,75.8471386 C61.2130949,75.7131024 65.7480681,65.5263554 77.418955,64.8561747 L77.418955,83.8222892 C76.9521195,87.9103916 75.0180868,91.127259 71.6168569,93.5399096 C68.0822455,96.0195783 63.3471999,97.2929217 57.5451018,97.2929217 C50.6092605,97.2929217 44.940544,94.8802711 40.7390247,90.121988 C36.4708146,85.3637048 34.3367095,78.5948795 34.3367095,69.8825301 L34.4034003,48.9728916 C34.7368542,41.2658133 36.8042685,35.1671687 40.7390247,30.810994 C45.0072347,26.0527108 50.6092605,23.6400602 57.5451018,23.6400602 C63.3471999,23.6400602 68.0822455,24.9134036 71.6168569,27.3930723 C75.1514684,29.872741 77.1521919,33.2906627 77.4856458,37.7138554 C77.4856458,37.8478916 77.4856458,38.0489458 77.4856458,38.1829819 C77.4856458,40.7296687 79.5530601,42.8072289 82.0873098,42.8072289 C84.6215595,42.8072289 86.6889738,40.7296687 86.6889738,38.1829819 C86.6889738,38.0489458 86.6889738,37.8478916 86.6889738,37.7138554 C86.022066,31.0790663 83.0209807,25.8516566 77.6190274,21.8975904 C72.217074,17.9435241 65.481305,16 57.3450295,16 C47.674866,16 39.8720445,19.2168675 33.9365648,25.5835843 C28.3345391,31.5481928 25.4001447,39.3893072 25.0666908,49.0399096 C25.0666908,49.7100904 25,50.3802711 25,51.0504518 L25.0666908,69.8825301 L25,69.8825301 C25,80.5384036 28.0010852,89.0496988 33.9365648,95.4164157 C39.8720445,101.783133 47.674866,105 57.3450295,105 C65.481305,105 72.217074,103.056476 77.6190274,99.1024096 C82.5541453,95.4834337 85.4885397,90.7251506 86.4889014,84.8275602 L86.6889738,63.7838855 C92.757835,62.309488 101.027492,58.9585843 106.229373,51.0504518 C107.563189,49.375 107.096353,47.0963855 105.362393,45.9570783 Z",
      stroke: "#FFFFFF",
      fill: "#FFFFFF"
    }))
  });
}

/***/ }),

/***/ "./src/deprecations.js":
/*!*****************************!*\
  !*** ./src/deprecations.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
// WordPress dependencies
 // deprecated container filters

if (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["hasFilter"])('wpBootstrapBlocks.container.customMarginOptions')) {
  // eslint-disable-next-line no-console
  console.warn('`wpBootstrapBlocks.container.customMarginOptions` filter was renamed to `wpBootstrapBlocks.container.marginAfterOptions`. Please change your filter definition.');
}

if (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["hasFilter"])('wpBootstrapBlocks.container.useFluidContainerPerDefault')) {
  // eslint-disable-next-line no-console
  console.warn('`wpBootstrapBlocks.container.useFluidContainerPerDefault` filter has been removed. Please use `wp_bootstrap_blocks_container_default_attributes` filter (PHP) instead.');
} // deprecated row filters


if (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["hasFilter"])('wpBootstrapBlocks.row.useOldObjectTemplateStructure')) {
  // eslint-disable-next-line no-console
  console.warn('`wpBootstrapBlocks.row.useOldObjectTemplateStructure` filter has no effect since the old template structure is not supported anymore. You can safely remove this filter.');
}

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: getBootstrapVersion, isBootstrap5Active */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBootstrapVersion", function() { return getBootstrapVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBootstrap5Active", function() { return isBootstrap5Active; });
/* global wpBootstrapBlocks */
var getBootstrapVersion = function getBootstrapVersion() {
  return wpBootstrapBlocks.bootstrapVersion;
};
var isBootstrap5Active = function isBootstrap5Active() {
  return wpBootstrapBlocks.isBootstrap5Active === '1';
};

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! exports provided: alignCenter, alignLeft, alignRight, verticalAlignBottom, verticalAlignCenter, verticalAlignTop, templateIconMissing, button, column, columns, stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignCenter", function() { return alignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignLeft", function() { return alignLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignRight", function() { return alignRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlignBottom", function() { return verticalAlignBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlignCenter", function() { return verticalAlignCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlignTop", function() { return verticalAlignTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateIconMissing", function() { return templateIconMissing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "column", function() { return column; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return stack; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Icons backport from @wordpress/icons package to not have a dependency to @wordpress/primitives.
 *
 * Vertical alignment icons backport from Gutenberg.
 * Source: https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/block-vertical-alignment-toolbar/icons.js
 */

var alignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
}));
var alignLeft = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
}));
var alignRight = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
}));
var verticalAlignBottom = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
}));
var verticalAlignCenter = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
}));
var verticalAlignTop = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
}));
var templateIconMissing = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
}));
var button = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 13h8v-1.5H8V13z"
}));
var column = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"
}));
var columns = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"
}));
var stack = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"
}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deprecations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deprecations */ "./src/deprecations.js");
/* harmony import */ var _custom_category_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-category-icon */ "./src/custom-category-icon.js");
/* harmony import */ var _container_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/block.js */ "./src/container/block.js");
/* harmony import */ var _column_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column/block.js */ "./src/column/block.js");
/* harmony import */ var _row_block_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row/block.js */ "./src/row/block.js");




 //import './button/block.js';

/***/ }),

/***/ "./src/row/block.js":
/*!**************************!*\
  !*** ./src/row/block.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/row/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons */ "./src/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/row/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/row/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_8__);


/**
 * BLOCK: wp-bootstrap-blocks/row
 */
// WordPress dependencies









var _ref = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__,
    InnerBlocks = _ref.InnerBlocks; // Fallback to deprecated '@wordpress/editor' for backwards compatibility


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('wp-bootstrap-blocks/row', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Row', 'wp-bootstrap-blocks'),
  // Block title.
  icon: _icons__WEBPACK_IMPORTED_MODULE_6__["columns"],
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'wp-bootstrap-blocks',
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Row', 'wp-bootstrap-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bootstrap Row', 'wp-bootstrap-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bootstrap', 'wp-bootstrap-blocks')],
  supports: {
    align: ['full']
  },
  // attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    return {
      'data-alignment': attributes.alignment,
      'data-vertical-alignment': attributes.verticalAlignment,
      'data-editor-stack-columns': attributes.editorStackColumns
    };
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/row/edit.js":
/*!*************************!*\
  !*** ./src/row/edit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../icons */ "./src/icons.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../helper */ "./src/helper.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// WordPress dependencies











var _ref = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__ || _wordpress_editor__WEBPACK_IMPORTED_MODULE_14__,
    InnerBlocks = _ref.InnerBlocks,
    InspectorControls = _ref.InspectorControls,
    BlockControls = _ref.BlockControls,
    AlignmentToolbar = _ref.AlignmentToolbar; // Fallback to deprecated '@wordpress/editor' for backwards compatibility


var ALLOWED_BLOCKS = ['wp-bootstrap-blocks/column'];

var addMissingTemplateIcons = function addMissingTemplateIcons(templates) {
  return templates.map(function (template) {
    return _objectSpread({
      icon: _icons__WEBPACK_IMPORTED_MODULE_15__["templateIconMissing"]
    }, template);
  });
};

var templates = [{
  name: '1-1',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('2 Columns (1:1)', 'wp-bootstrap-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  templateLock: 'all',
  template: [['wp-bootstrap-blocks/column', {
    sizeMd: 6
  }], ['wp-bootstrap-blocks/column', {
    sizeMd: 6
  }]]
}, {
  name: '1-2',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('2 Columns (1:2)', 'wp-bootstrap-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
  })),
  templateLock: 'all',
  template: [['wp-bootstrap-blocks/column', {
    sizeMd: 4
  }], ['wp-bootstrap-blocks/column', {
    sizeMd: 8
  }]]
}, {
  name: '2-1',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('2 Columns (2:1)', 'wp-bootstrap-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Path"], {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
  })),
  templateLock: 'all',
  template: [['wp-bootstrap-blocks/column', {
    sizeMd: 8
  }], ['wp-bootstrap-blocks/column', {
    sizeMd: 4
  }]]
}, {
  name: '1-1-1',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('3 Columns (1:1:1)', 'wp-bootstrap-blocks'),
  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SVG"], {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Path"], {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  templateLock: 'all',
  template: [['wp-bootstrap-blocks/column', {
    sizeMd: 4
  }], ['wp-bootstrap-blocks/column', {
    sizeMd: 4
  }], ['wp-bootstrap-blocks/column', {
    sizeMd: 4
  }]]
}];
templates = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["applyFilters"])('wpBootstrapBlocks.row.templates', templates);
templates = addMissingTemplateIcons(templates);
var enableCustomTemplate = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["applyFilters"])('wpBootstrapBlocks.row.enableCustomTemplate', true);

if (enableCustomTemplate) {
  templates.push({
    name: 'custom',
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Custom', 'wp-bootstrap-blocks'),
    icon: _icons__WEBPACK_IMPORTED_MODULE_15__["templateIconMissing"],
    templateLock: false,
    template: [['wp-bootstrap-blocks/column']]
  });
}

var horizontalGuttersOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('None', 'wp-bootstrap-blocks'),
  value: 'gx-0'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Small', 'wp-bootstrap-blocks'),
  value: 'gx-3'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Large', 'wp-bootstrap-blocks'),
  value: 'gx-5'
}];
horizontalGuttersOptions = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["applyFilters"])('wpBootstrapBlocks.row.horizontalGuttersOptions', horizontalGuttersOptions);
horizontalGuttersOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Bootstrap Default', 'wp-bootstrap-blocks'),
  value: ''
}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(horizontalGuttersOptions));
var verticalGuttersOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Small', 'wp-bootstrap-blocks'),
  value: 'gy-3'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Large', 'wp-bootstrap-blocks'),
  value: 'gy-5'
}];
verticalGuttersOptions = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_12__["applyFilters"])('wpBootstrapBlocks.row.verticalGuttersOptions', verticalGuttersOptions);
verticalGuttersOptions = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Bootstrap Default (None)', 'wp-bootstrap-blocks'),
  value: ''
}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(verticalGuttersOptions));

var getColumnsTemplate = function getColumnsTemplate(templateName) {
  var template = templates.find(function (t) {
    return t.name === templateName;
  });
  return template ? template.template : [];
};

var getColumnsTemplateLock = function getColumnsTemplateLock(templateName) {
  var template = templates.find(function (t) {
    return t.name === templateName;
  });
  return template ? template.templateLock : false;
};

var BootstrapRowEdit = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(BootstrapRowEdit, _Component);

  var _super = _createSuper(BootstrapRowEdit);

  function BootstrapRowEdit() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BootstrapRowEdit);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BootstrapRowEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          columns = _this$props.columns,
          updateBlockAttributes = _this$props.updateBlockAttributes;
      var selectedTemplateName = attributes.template,
          noGutters = attributes.noGutters,
          alignment = attributes.alignment,
          verticalAlignment = attributes.verticalAlignment,
          editorStackColumns = attributes.editorStackColumns,
          horizontalGutters = attributes.horizontalGutters,
          verticalGutters = attributes.verticalGutters;

      var onTemplateChange = function onTemplateChange(newSelectedTemplateName) {
        var template = templates.find(function (t) {
          return t.name === newSelectedTemplateName;
        });

        if (template) {
          // Update sizes to fit with selected template
          columns.forEach(function (column, index) {
            if (template.template.length > index) {
              var newAttributes = template.template[index][1];
              updateBlockAttributes(column.clientId, newAttributes);
            }
          });
          setAttributes({
            template: newSelectedTemplateName
          });
        }
      };

      var alignmentControls = [{
        icon: _icons__WEBPACK_IMPORTED_MODULE_15__["alignLeft"],
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Align columns left', 'wp-bootstrap-blocks'),
        align: 'left'
      }, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_15__["alignCenter"],
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Align columns center', 'wp-bootstrap-blocks'),
        align: 'center'
      }, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_15__["alignRight"],
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Align columns right', 'wp-bootstrap-blocks'),
        align: 'right'
      }];
      var verticalAlignmentControls = [{
        icon: _icons__WEBPACK_IMPORTED_MODULE_15__["verticalAlignTop"],
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Align columns top', 'wp-bootstrap-blocks'),
        align: 'top'
      }, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_15__["verticalAlignCenter"],
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Align columns center', 'wp-bootstrap-blocks'),
        align: 'center'
      }, {
        icon: _icons__WEBPACK_IMPORTED_MODULE_15__["verticalAlignBottom"],
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Align columns bottom', 'wp-bootstrap-blocks'),
        align: 'bottom'
      }];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Editor: Display columns stacked', 'wp-bootstrap-blocks'),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Displays stacked columns in editor to enhance readability of block content. This option is only used in the editor and won't affect the output of the row.", 'wp-bootstrap-blocks'),
        checked: editorStackColumns,
        onChange: function onChange(isChecked) {
          return setAttributes({
            editorStackColumns: isChecked
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Change layout', 'wp-bootstrap-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("ul", {
        className: "wp-bootstrap-blocks-template-selector-list"
      }, templates.map(function (template, index // eslint-disable-line no-shadow
      ) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("li", {
          className: "wp-bootstrap-blocks-template-selector-button",
          key: index
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["IconButton"], {
          label: template.title,
          icon: template.icon,
          onClick: function onClick() {
            onTemplateChange(template.name);
          },
          className: selectedTemplateName === template.name ? 'is-active' : null
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
          className: "wp-bootstrap-blocks-template-selector-button-label"
        }, template.title)));
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Row options', 'wp-bootstrap-blocks')
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["CheckboxControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('No Gutters', 'wp-bootstrap-blocks'),
        checked: noGutters,
        onChange: function onChange(isChecked) {
          return setAttributes({
            noGutters: isChecked
          });
        }
      }), Object(_helper__WEBPACK_IMPORTED_MODULE_16__["isBootstrap5Active"])() && !noGutters && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Horizontal Gutters', 'wp-bootstrap-blocks'),
        value: horizontalGutters,
        options: horizontalGuttersOptions,
        onChange: function onChange(value) {
          setAttributes({
            horizontalGutters: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Vertical Gutters', 'wp-bootstrap-blocks'),
        value: verticalGutters,
        options: verticalGuttersOptions,
        onChange: function onChange(value) {
          setAttributes({
            verticalGutters: value
          });
        }
      })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(AlignmentToolbar, {
        value: alignment,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Change horizontal alignment of columns', 'wp-bootstrap-blocks'),
        onChange: function onChange(newAlignment) {
          return setAttributes({
            alignment: newAlignment
          });
        },
        alignmentControls: alignmentControls
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(AlignmentToolbar, {
        value: verticalAlignment,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Change vertical alignment of columns', 'wp-bootstrap-blocks'),
        onChange: function onChange(newVerticalAlignment) {
          return setAttributes({
            verticalAlignment: newVerticalAlignment
          });
        },
        alignmentControls: verticalAlignmentControls
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])("div", {
        className: className
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["createElement"])(InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: getColumnsTemplate(selectedTemplateName),
        templateLock: getColumnsTemplateLock(selectedTemplateName)
      })));
    }
  }]);

  return BootstrapRowEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var applyWithSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withSelect"])(function (select, _ref2) {
  var clientId = _ref2.clientId;

  var _ref3 = select('core/block-editor') || select('core/editor'),
      getBlocksByClientId = _ref3.getBlocksByClientId; // Fallback to 'core/editor' for backwards compatibility


  var columns = getBlocksByClientId(clientId)[0] ? getBlocksByClientId(clientId)[0].innerBlocks : [];
  return {
    columns: columns
  };
});
var applyWithDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_10__["withDispatch"])(function (dispatch) {
  var _ref4 = dispatch('core/block-editor') || dispatch('core/editor'),
      updateBlockAttributes = _ref4.updateBlockAttributes; // Fallback to 'core/editor' for backwards compatibility


  return {
    updateBlockAttributes: updateBlockAttributes
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_11__["compose"])(applyWithSelect, applyWithDispatch)(BootstrapRowEdit));

/***/ }),

/***/ "./src/row/editor.scss":
/*!*****************************!*\
  !*** ./src/row/editor.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map