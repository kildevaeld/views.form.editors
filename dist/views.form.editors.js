(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("views.form"), require("views"), require("orange"));
	else if(typeof define === 'function' && define.amd)
		define(["views.form", "views", "orange"], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory(require("views.form"), require("views"), require("orange"));
	else
		root["views"] = root["views"] || {}, root["views"]["form"] = factory(root["views"]["form"], root["views"], root["orange"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(3));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var views_form_1 = __webpack_require__(2);

	var Select2 = function (_views_form_1$BaseEdi) {
	    _inherits(Select2, _views_form_1$BaseEdi);

	    function Select2() {
	        _classCallCheck(this, Select2);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Select2).apply(this, arguments));
	    }

	    _createClass(Select2, [{
	        key: "setValue",
	        value: function setValue(value) {}
	    }, {
	        key: "getValue",
	        value: function getValue() {}
	    }, {
	        key: "clear",
	        value: function clear() {}
	    }]);

	    return Select2;
	}(views_form_1.BaseEditor);

	exports.Select2 = Select2;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    }return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = undefined && undefined.__metadata || function (k, v) {
	    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var views_1 = __webpack_require__(4);
	var views_form_1 = __webpack_require__(2);
	var orange_1 = __webpack_require__(5);
	var imageTemplate = "\n  <div class=\"modal-container\"></div>\n  <div class=\"crop-container\"></div>\n  <!--<label class=\"btn btn-sm btn-default\">\n    <span>Upload</span>\n    <input style=\"display:none;\" type=\"file\" class=\"upload-btn\" name=\"upload-button\" />\n  </label>-->\n  <button class=\"gallery-btn btn btn-sm btn-default\" title=\"Vælg fra galleri\">Vælg</button>\n  <button class=\"crop-btn btn btn-sm btn-default pull-right\">Crop</button>\n";
	var ImagePicker = function (_views_form_1$BaseLay) {
	    _inherits(ImagePicker, _views_form_1$BaseLay);

	    function ImagePicker(options) {
	        _classCallCheck(this, ImagePicker);

	        var o = orange_1.extend({}, options || {}, {
	            regions: {
	                modal: '.modal-container',
	                crop: '.crop-container'
	            }
	        });

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImagePicker).call(this, o));

	        _this._options = options;
	        //this._container = container;
	        _this._loaded = false;
	        _this._client = options.client;
	        if (_this._client == null) {
	            throw new Error('client not defined');
	        }
	        return _this;
	    }

	    _createClass(ImagePicker, [{
	        key: "setValue",
	        value: function setValue(value) {}
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            return null;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {}
	    }]);

	    return ImagePicker;
	}(views_form_1.BaseLayoutEditor);
	ImagePicker = __decorate([views_form_1.editor('image'), views_1.attributes({
	    template: function template() {
	        return imageTemplate;
	    },
	    ui: {
	        //modal: 'div.modal',
	        button: '.upload-button'
	    },
	    events: {
	        'click .gallery-btn': function clickGalleryBtn(e) {
	            e.preventDefault();this.modal.toggle();
	        },
	        'click .crop-btn': 'onToggleCropper'
	    },
	    attributes: {
	        'form-editor': 'image-crop'
	    }
	}), __metadata('design:paramtypes', [Object])], ImagePicker);
	exports.ImagePicker = ImagePicker;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;