(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("orange"), require("collection"), require("views.form"), require("views"));
	else if(typeof define === 'function' && define.amd)
		define(["orange", "collection", "views.form", "views"], factory);
	else if(typeof exports === 'object')
		exports["editors"] = factory(require("orange"), require("collection"), require("views.form"), require("views"));
	else
		root["views"] = root["views"] || {}, root["views"]["form"] = root["views"]["form"] || {}, root["views"]["form"]["editors"] = factory(root["orange"], root["collection"], root["views"]["form"], root["views"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_11__) {
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
	__export(__webpack_require__(8));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	var adaptor_1 = __webpack_require__(2);
	var views_form_1 = __webpack_require__(7);
	var utils = __webpack_require__(5);
	var collection_1 = __webpack_require__(6);
	var Select2 = function (_views_form_1$BaseEdi) {
	    _inherits(Select2, _views_form_1$BaseEdi);

	    function Select2(options) {
	        _classCallCheck(this, Select2);

	        var _this = _possibleConstructorReturn(this, (Select2.__proto__ || Object.getPrototypeOf(Select2)).call(this, options));

	        _this.options = options || {};
	        _this.data = _this._normalizeData(options.data);
	        return _this;
	    }

	    _createClass(Select2, [{
	        key: "onCollection",
	        value: function onCollection(collection) {
	            this.data = collection;
	        }
	    }, {
	        key: "setValue",
	        value: function setValue(value) {
	            var _this2 = this;

	            if (this.data == null) {
	                console.warn('data is not set');
	                return;
	            }
	            var $el = $(this.el);
	            var curVal = $el.val();
	            if (value == null) return $el.val(null);
	            if (!Array.isArray(value)) value = [value];
	            var ids = value.map(function (m) {
	                if (typeof m === 'string') {
	                    if (m === "") return null;
	                    return m;
	                } else if (m instanceof collection_1.Model) {
	                    return String(m.id);
	                } else if (utils.isObject(m)) {
	                    return String(m[_this2.options.idAttribute]);
	                }
	                return String(m);
	            }).filter(function (e) {
	                return e !== null;
	            });
	            ids = utils.unique(ids);
	            if (curVal) {
	                if (utils.equal(ids, curVal)) {
	                    return;
	                }
	            }
	            $el.html('');
	            value.forEach(function (e) {
	                var id = void 0,
	                    text = void 0;
	                if (typeof e === 'string') {
	                    id = e;
	                    text = e;
	                } else if (e instanceof collection_1.Model) {
	                    id = e.get(_this2.idAttribute);
	                    text = e.get(_this2.textAttribute);
	                } else if (utils.isObject(value)) {
	                    id = String(e[_this2.idAttribute]);
	                    text = e[_this2.textAttribute];
	                }
	                $el.append("<option value=\"" + id + "\">" + text + "</option>");
	            });
	            $el.val(ids);
	            $el.trigger('change.select2');
	        }
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            var _this3 = this;

	            var out = void 0,
	                val = $(this.el).val();
	            if (val == null) return out;
	            if (this.data) {
	                if (this.options.multiple) {
	                    out = val.map(function (m) {
	                        var model = _this3.data.find(m);
	                        return model != null ? model.toJSON() : null;
	                    }).filter(function (e) {
	                        return e != null;
	                    });
	                } else {
	                    out = this.data.find(val);
	                }
	            } else {
	                out = this.options.multiple ? [] : null;
	            }
	            return out;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.setValue(null);
	        }
	    }, {
	        key: "_normalizeData",
	        value: function _normalizeData(data) {
	            var _this4 = this;

	            if (data == null) return null;
	            if (Array.isArray(data)) {
	                return new collection_1.Collection(data.map(function (m) {
	                    var _ref;

	                    if (typeof m === 'string') return _ref = {}, _defineProperty(_ref, _this4.options.idAttribute || 'id', m), _defineProperty(_ref, _this4.options.textAttribute || 'text', m), _ref;
	                    return m;
	                }));
	            } else if (data instanceof collection_1.Collection) {
	                return data;
	            } else {
	                throw new Error('no data');
	            }
	        }
	    }, {
	        key: "onRender",
	        value: function onRender() {
	            var _this5 = this;

	            if ($(this.el).data('select2')) {
	                $(this.el).data('select2').destroy();
	                $(this.el).off();
	            }
	            this._get_options(this.options).then(function (options) {
	                _this5.options = options;
	                $(_this5.el).select2(options);
	                $(_this5.el).on('change', function () {
	                    _this5.trigger('change');
	                });
	            }).catch(function (e) {
	                console.log('error', e);
	            });
	        }
	    }, {
	        key: "_get_options",
	        value: function _get_options(attr) {
	            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
	                var _this6 = this;

	                var opt;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.t0 = utils;
	                                _context.t1 = {};
	                                _context.t2 = attr;
	                                _context.next = 5;
	                                return adaptor_1.customAdapter(this);

	                            case 5:
	                                _context.t3 = _context.sent;
	                                _context.t4 = {
	                                    dataAdapter: _context.t3
	                                };
	                                opt = _context.t0.extend.call(_context.t0, _context.t1, _context.t2, _context.t4);

	                                ['multiple', 'theme', 'min', 'max', 'text-param', 'id-param', 'placeholder', 'allow-clear', 'tags', 'theme'].forEach(function (s) {
	                                    var has = _this6.el.getAttribute(s);
	                                    if (has == "") has = true;else if (has == null) return;
	                                    if (s == 'min') s = 'minimumInputLength';
	                                    if (s == 'max') s = 'maximumSelectionLength';
	                                    if (s == 'text-param') s = 'textAttribute';
	                                    if (s == 'id-param') s = 'idAttribute';
	                                    opt[s] = has;
	                                });
	                                if (!opt.idAttribute) opt.idAttribute = 'id';
	                                if (!opt.textAttribute) opt.textAttribute = 'text';
	                                return _context.abrupt("return", opt);

	                            case 12:
	                            case "end":
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: "data",
	        get: function get() {
	            return this._data;
	        },
	        set: function set(data) {
	            this._data = this._normalizeData(data);
	        }
	    }]);

	    return Select2;
	}(views_form_1.BaseEditor);
	Select2 = __decorate([views_form_1.editor('select2'), __metadata('design:paramtypes', [Object])], Select2);
	exports.Select2 = Select2;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) {
	            try {
	                step(generator.next(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function rejected(value) {
	            try {
	                step(generator.throw(value));
	            } catch (e) {
	                reject(e);
	            }
	        }
	        function step(result) {
	            result.done ? resolve(result.value) : new P(function (resolve) {
	                resolve(result.value);
	            }).then(fulfilled, rejected);
	        }
	        step((generator = generator.apply(thisArg, _arguments)).next());
	    });
	};
	__webpack_require__(3);
	var $ = __webpack_require__(4);
	var orange_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(6);
	function findInData(q, select) {
	    return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
	        var reg, out, rest, found;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        reg = new RegExp('.*' + q + '.*', 'ig');
	                        out = select.data.filter(function (e) {
	                            if (e instanceof collection_1.Model) {
	                                e = e.toJSON();
	                            }
	                            if (e[select.textAttribute] && e[select.textAttribute].match(reg)) {
	                                return true;
	                            } else if (e[select.idAttribute] && String(e[select.idAttribute]).match(reg)) {
	                                return true;
	                            }
	                            return false;
	                        });

	                        if (!(select.data instanceof collection_1.RestCollection)) {
	                            _context.next = 8;
	                            break;
	                        }

	                        rest = select.data;
	                        _context.next = 6;
	                        return rest.query(q);

	                    case 6:
	                        found = _context.sent;

	                        if (found.length) out = found;

	                    case 8:
	                        return _context.abrupt('return', out);

	                    case 9:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	}
	function customAdapter(select) {
	    var promise = orange_1.deferred();
	    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], function (ArrayData) {
	        var CustomData = function (_ArrayData) {
	            _inherits(CustomData, _ArrayData);

	            function CustomData() {
	                var _ref;

	                _classCallCheck(this, CustomData);

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                var _this = _possibleConstructorReturn(this, (_ref = CustomData.__proto__ || Object.getPrototypeOf(CustomData)).call.apply(_ref, [this].concat(args)));

	                _this.found = [];
	                return _this;
	            }

	            _createClass(CustomData, [{
	                key: 'current',
	                value: function current(cb) {
	                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
	                        var _this2 = this;

	                        var val, out, _loop, i, ii;

	                        return regeneratorRuntime.wrap(function _callee2$(_context3) {
	                            while (1) {
	                                switch (_context3.prev = _context3.next) {
	                                    case 0:
	                                        val = $(select.el).val();

	                                        if (!(val == null || select.data == null)) {
	                                            _context3.next = 3;
	                                            break;
	                                        }

	                                        return _context3.abrupt('return', cb([]));

	                                    case 3:
	                                        out = [];
	                                        //if (!select.options.multiple) val = [val];

	                                        _loop = regeneratorRuntime.mark(function _loop(i, ii) {
	                                            var found, data;
	                                            return regeneratorRuntime.wrap(function _loop$(_context2) {
	                                                while (1) {
	                                                    switch (_context2.prev = _context2.next) {
	                                                        case 0:
	                                                            found = orange_1.find(_this2.found, function (item) {
	                                                                return String(item.id) === val[i];
	                                                            });

	                                                            if (found) {
	                                                                _context2.next = 9;
	                                                                break;
	                                                            }

	                                                            /*if (Array.isArray(select.data)) {
	                                                              
	                                                              found = find<IModel>(select.data, (item) => {
	                                                                if (typeof item === 'string') {
	                                                                  return item == val[i];
	                                                                } else {
	                                                                  return item[select.options.idAttribute||'id'] == val[i];
	                                                                }
	                                                              });
	                                                            } else if (select.data instanceof Collection) {
	                                                              found = select.data.find(val[i]);
	                                                            }*/
	                                                            data = select.data;

	                                                            found = data.find(val[i]);

	                                                            if (found) {
	                                                                _context2.next = 9;
	                                                                break;
	                                                            }

	                                                            if (!(data instanceof collection_1.RestCollection)) {
	                                                                _context2.next = 9;
	                                                                break;
	                                                            }

	                                                            _context2.next = 8;
	                                                            return data.fetch();

	                                                        case 8:
	                                                            found = data.find(val[i]);

	                                                        case 9:
	                                                            if (found) out.push(found);

	                                                        case 10:
	                                                        case 'end':
	                                                            return _context2.stop();
	                                                    }
	                                                }
	                                            }, _loop, _this2);
	                                        });
	                                        i = 0, ii = val.length;

	                                    case 6:
	                                        if (!(i < ii)) {
	                                            _context3.next = 11;
	                                            break;
	                                        }

	                                        return _context3.delegateYield(_loop(i, ii), 't0', 8);

	                                    case 8:
	                                        i++;
	                                        _context3.next = 6;
	                                        break;

	                                    case 11:
	                                        this.found = out;
	                                        cb(out.map(function (m) {
	                                            return m.toJSON();
	                                        }));

	                                    case 13:
	                                    case 'end':
	                                        return _context3.stop();
	                                }
	                            }
	                        }, _callee2, this);
	                    }));
	                }
	            }, {
	                key: 'query',
	                value: function query(params, done) {
	                    var min = select.options.minimumInputLength || 0;
	                    var results = { results: [] };
	                    if (params.term == null && min > 0 || min > 0 && params.term.length < min || select.data == null) {
	                        return done(results);
	                    }
	                    if (params.term == null) {
	                        results.results = select.data.map(function (m) {
	                            return m.toJSON();
	                        });
	                        return done(results);
	                    }
	                    findInData(params.term, select).then(function (found) {
	                        results.results = found;
	                        done(results);
	                    }).catch(function (e) {
	                        throw e;
	                    });
	                }
	            }]);

	            return CustomData;
	        }(ArrayData);

	        promise.resolve(CustomData);
	    });
	    return promise.promise;
	}
	exports.customAdapter = customAdapter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;/*!
	 * Select2 4.0.3
	 * https://select2.github.io
	 *
	 * Released under the MIT license
	 * https://github.com/select2/select2/blob/master/LICENSE.md
	 */
	(function (factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node/CommonJS
	    factory(require('jquery'));
	  } else {
	    // Browser globals
	    factory(jQuery);
	  }
	}(function (jQuery) {
	  // This is needed so we can catch the AMD loader configuration and use it
	  // The inner file should be wrapped (by `banner.start.js`) in a function that
	  // returns the AMD loader references.
	  var S2 =
	(function () {
	  // Restore the Select2 AMD loader so it can be used
	  // Needed mostly in the language files, where the loader is not inserted
	  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
	    var S2 = jQuery.fn.select2.amd;
	  }
	var S2;(function () { if (!S2 || !S2.requirejs) {
	if (!S2) { S2 = {}; } else { require = S2; }
	/**
	 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
	 * Available via the MIT or new BSD license.
	 * see: http://github.com/jrburke/almond for details
	 */
	//Going sloppy to avoid 'use strict' string cost, but strict practices should
	//be followed.
	/*jslint sloppy: true */
	/*global setTimeout: false */

	var requirejs, require, define;
	(function (undef) {
	    var main, req, makeMap, handlers,
	        defined = {},
	        waiting = {},
	        config = {},
	        defining = {},
	        hasOwn = Object.prototype.hasOwnProperty,
	        aps = [].slice,
	        jsSuffixRegExp = /\.js$/;

	    function hasProp(obj, prop) {
	        return hasOwn.call(obj, prop);
	    }

	    /**
	     * Given a relative module name, like ./something, normalize it to
	     * a real name that can be mapped to a path.
	     * @param {String} name the relative name
	     * @param {String} baseName a real name that the name arg is relative
	     * to.
	     * @returns {String} normalized name
	     */
	    function normalize(name, baseName) {
	        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
	            foundI, foundStarMap, starI, i, j, part,
	            baseParts = baseName && baseName.split("/"),
	            map = config.map,
	            starMap = (map && map['*']) || {};

	        //Adjust any relative paths.
	        if (name && name.charAt(0) === ".") {
	            //If have a base name, try to normalize against it,
	            //otherwise, assume it is a top-level require that will
	            //be relative to baseUrl in the end.
	            if (baseName) {
	                name = name.split('/');
	                lastIndex = name.length - 1;

	                // Node .js allowance:
	                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
	                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
	                }

	                //Lop off the last part of baseParts, so that . matches the
	                //"directory" and not name of the baseName's module. For instance,
	                //baseName of "one/two/three", maps to "one/two/three.js", but we
	                //want the directory, "one/two" for this normalization.
	                name = baseParts.slice(0, baseParts.length - 1).concat(name);

	                //start trimDots
	                for (i = 0; i < name.length; i += 1) {
	                    part = name[i];
	                    if (part === ".") {
	                        name.splice(i, 1);
	                        i -= 1;
	                    } else if (part === "..") {
	                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
	                            //End of the line. Keep at least one non-dot
	                            //path segment at the front so it can be mapped
	                            //correctly to disk. Otherwise, there is likely
	                            //no path mapping for a path starting with '..'.
	                            //This can still fail, but catches the most reasonable
	                            //uses of ..
	                            break;
	                        } else if (i > 0) {
	                            name.splice(i - 1, 2);
	                            i -= 2;
	                        }
	                    }
	                }
	                //end trimDots

	                name = name.join("/");
	            } else if (name.indexOf('./') === 0) {
	                // No baseName, so this is ID is resolved relative
	                // to baseUrl, pull off the leading dot.
	                name = name.substring(2);
	            }
	        }

	        //Apply map config if available.
	        if ((baseParts || starMap) && map) {
	            nameParts = name.split('/');

	            for (i = nameParts.length; i > 0; i -= 1) {
	                nameSegment = nameParts.slice(0, i).join("/");

	                if (baseParts) {
	                    //Find the longest baseName segment match in the config.
	                    //So, do joins on the biggest to smallest lengths of baseParts.
	                    for (j = baseParts.length; j > 0; j -= 1) {
	                        mapValue = map[baseParts.slice(0, j).join('/')];

	                        //baseName segment has  config, find if it has one for
	                        //this name.
	                        if (mapValue) {
	                            mapValue = mapValue[nameSegment];
	                            if (mapValue) {
	                                //Match, update name to the new value.
	                                foundMap = mapValue;
	                                foundI = i;
	                                break;
	                            }
	                        }
	                    }
	                }

	                if (foundMap) {
	                    break;
	                }

	                //Check for a star map match, but just hold on to it,
	                //if there is a shorter segment match later in a matching
	                //config, then favor over this star map.
	                if (!foundStarMap && starMap && starMap[nameSegment]) {
	                    foundStarMap = starMap[nameSegment];
	                    starI = i;
	                }
	            }

	            if (!foundMap && foundStarMap) {
	                foundMap = foundStarMap;
	                foundI = starI;
	            }

	            if (foundMap) {
	                nameParts.splice(0, foundI, foundMap);
	                name = nameParts.join('/');
	            }
	        }

	        return name;
	    }

	    function makeRequire(relName, forceSync) {
	        return function () {
	            //A version of a require function that passes a moduleName
	            //value for items that may need to
	            //look up paths relative to the moduleName
	            var args = aps.call(arguments, 0);

	            //If first arg is not require('string'), and there is only
	            //one arg, it is the array form without a callback. Insert
	            //a null so that the following concat is correct.
	            if (typeof args[0] !== 'string' && args.length === 1) {
	                args.push(null);
	            }
	            return req.apply(undef, args.concat([relName, forceSync]));
	        };
	    }

	    function makeNormalize(relName) {
	        return function (name) {
	            return normalize(name, relName);
	        };
	    }

	    function makeLoad(depName) {
	        return function (value) {
	            defined[depName] = value;
	        };
	    }

	    function callDep(name) {
	        if (hasProp(waiting, name)) {
	            var args = waiting[name];
	            delete waiting[name];
	            defining[name] = true;
	            main.apply(undef, args);
	        }

	        if (!hasProp(defined, name) && !hasProp(defining, name)) {
	            throw new Error('No ' + name);
	        }
	        return defined[name];
	    }

	    //Turns a plugin!resource to [plugin, resource]
	    //with the plugin being undefined if the name
	    //did not have a plugin prefix.
	    function splitPrefix(name) {
	        var prefix,
	            index = name ? name.indexOf('!') : -1;
	        if (index > -1) {
	            prefix = name.substring(0, index);
	            name = name.substring(index + 1, name.length);
	        }
	        return [prefix, name];
	    }

	    /**
	     * Makes a name map, normalizing the name, and using a plugin
	     * for normalization if necessary. Grabs a ref to plugin
	     * too, as an optimization.
	     */
	    makeMap = function (name, relName) {
	        var plugin,
	            parts = splitPrefix(name),
	            prefix = parts[0];

	        name = parts[1];

	        if (prefix) {
	            prefix = normalize(prefix, relName);
	            plugin = callDep(prefix);
	        }

	        //Normalize according
	        if (prefix) {
	            if (plugin && plugin.normalize) {
	                name = plugin.normalize(name, makeNormalize(relName));
	            } else {
	                name = normalize(name, relName);
	            }
	        } else {
	            name = normalize(name, relName);
	            parts = splitPrefix(name);
	            prefix = parts[0];
	            name = parts[1];
	            if (prefix) {
	                plugin = callDep(prefix);
	            }
	        }

	        //Using ridiculous property names for space reasons
	        return {
	            f: prefix ? prefix + '!' + name : name, //fullName
	            n: name,
	            pr: prefix,
	            p: plugin
	        };
	    };

	    function makeConfig(name) {
	        return function () {
	            return (config && config.config && config.config[name]) || {};
	        };
	    }

	    handlers = {
	        require: function (name) {
	            return makeRequire(name);
	        },
	        exports: function (name) {
	            var e = defined[name];
	            if (typeof e !== 'undefined') {
	                return e;
	            } else {
	                return (defined[name] = {});
	            }
	        },
	        module: function (name) {
	            return {
	                id: name,
	                uri: '',
	                exports: defined[name],
	                config: makeConfig(name)
	            };
	        }
	    };

	    main = function (name, deps, callback, relName) {
	        var cjsModule, depName, ret, map, i,
	            args = [],
	            callbackType = typeof callback,
	            usingExports;

	        //Use name if no relName
	        relName = relName || name;

	        //Call the callback to define the module, if necessary.
	        if (callbackType === 'undefined' || callbackType === 'function') {
	            //Pull out the defined dependencies and pass the ordered
	            //values to the callback.
	            //Default to [require, exports, module] if no deps
	            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
	            for (i = 0; i < deps.length; i += 1) {
	                map = makeMap(deps[i], relName);
	                depName = map.f;

	                //Fast path CommonJS standard dependencies.
	                if (depName === "require") {
	                    args[i] = handlers.require(name);
	                } else if (depName === "exports") {
	                    //CommonJS module spec 1.1
	                    args[i] = handlers.exports(name);
	                    usingExports = true;
	                } else if (depName === "module") {
	                    //CommonJS module spec 1.1
	                    cjsModule = args[i] = handlers.module(name);
	                } else if (hasProp(defined, depName) ||
	                           hasProp(waiting, depName) ||
	                           hasProp(defining, depName)) {
	                    args[i] = callDep(depName);
	                } else if (map.p) {
	                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
	                    args[i] = defined[depName];
	                } else {
	                    throw new Error(name + ' missing ' + depName);
	                }
	            }

	            ret = callback ? callback.apply(defined[name], args) : undefined;

	            if (name) {
	                //If setting exports via "module" is in play,
	                //favor that over return value and exports. After that,
	                //favor a non-undefined return value over exports use.
	                if (cjsModule && cjsModule.exports !== undef &&
	                        cjsModule.exports !== defined[name]) {
	                    defined[name] = cjsModule.exports;
	                } else if (ret !== undef || !usingExports) {
	                    //Use the return value from the function.
	                    defined[name] = ret;
	                }
	            }
	        } else if (name) {
	            //May just be an object definition for the module. Only
	            //worry about defining if have a module name.
	            defined[name] = callback;
	        }
	    };

	    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
	        if (typeof deps === "string") {
	            if (handlers[deps]) {
	                //callback in this case is really relName
	                return handlers[deps](callback);
	            }
	            //Just return the module wanted. In this scenario, the
	            //deps arg is the module name, and second arg (if passed)
	            //is just the relName.
	            //Normalize module name, if it contains . or ..
	            return callDep(makeMap(deps, callback).f);
	        } else if (!deps.splice) {
	            //deps is a config object, not an array.
	            config = deps;
	            if (config.deps) {
	                req(config.deps, config.callback);
	            }
	            if (!callback) {
	                return;
	            }

	            if (callback.splice) {
	                //callback is an array, which means it is a dependency list.
	                //Adjust args if there are dependencies
	                deps = callback;
	                callback = relName;
	                relName = null;
	            } else {
	                deps = undef;
	            }
	        }

	        //Support require(['a'])
	        callback = callback || function () {};

	        //If relName is a function, it is an errback handler,
	        //so remove it.
	        if (typeof relName === 'function') {
	            relName = forceSync;
	            forceSync = alt;
	        }

	        //Simulate async callback;
	        if (forceSync) {
	            main(undef, deps, callback, relName);
	        } else {
	            //Using a non-zero value because of concern for what old browsers
	            //do, and latest browsers "upgrade" to 4 if lower value is used:
	            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
	            //If want a value immediately, use require('id') instead -- something
	            //that works in almond on the global level, but not guaranteed and
	            //unlikely to work in other AMD implementations.
	            setTimeout(function () {
	                main(undef, deps, callback, relName);
	            }, 4);
	        }

	        return req;
	    };

	    /**
	     * Just drops the config on the floor, but returns req in case
	     * the config return value is used.
	     */
	    req.config = function (cfg) {
	        return req(cfg);
	    };

	    /**
	     * Expose module registry for debugging and tooling
	     */
	    requirejs._defined = defined;

	    define = function (name, deps, callback) {
	        if (typeof name !== 'string') {
	            throw new Error('See almond README: incorrect module build, no module name');
	        }

	        //This module may not have dependencies
	        if (!deps.splice) {
	            //deps is not an array, so probably means
	            //an object literal or factory function for
	            //the value. Adjust args.
	            callback = deps;
	            deps = [];
	        }

	        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
	            waiting[name] = [name, deps, callback];
	        }
	    };

	    define.amd = {
	        jQuery: true
	    };
	}());

	S2.requirejs = requirejs;S2.require = require;S2.define = define;
	}
	}());
	S2.define("almond", function(){});

	/* global jQuery:false, $:false */
	S2.define('jquery',[],function () {
	  var _$ = jQuery || $;

	  if (_$ == null && console && console.error) {
	    console.error(
	      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
	      'found. Make sure that you are including jQuery before Select2 on your ' +
	      'web page.'
	    );
	  }

	  return _$;
	});

	S2.define('select2/utils',[
	  'jquery'
	], function ($) {
	  var Utils = {};

	  Utils.Extend = function (ChildClass, SuperClass) {
	    var __hasProp = {}.hasOwnProperty;

	    function BaseConstructor () {
	      this.constructor = ChildClass;
	    }

	    for (var key in SuperClass) {
	      if (__hasProp.call(SuperClass, key)) {
	        ChildClass[key] = SuperClass[key];
	      }
	    }

	    BaseConstructor.prototype = SuperClass.prototype;
	    ChildClass.prototype = new BaseConstructor();
	    ChildClass.__super__ = SuperClass.prototype;

	    return ChildClass;
	  };

	  function getMethods (theClass) {
	    var proto = theClass.prototype;

	    var methods = [];

	    for (var methodName in proto) {
	      var m = proto[methodName];

	      if (typeof m !== 'function') {
	        continue;
	      }

	      if (methodName === 'constructor') {
	        continue;
	      }

	      methods.push(methodName);
	    }

	    return methods;
	  }

	  Utils.Decorate = function (SuperClass, DecoratorClass) {
	    var decoratedMethods = getMethods(DecoratorClass);
	    var superMethods = getMethods(SuperClass);

	    function DecoratedClass () {
	      var unshift = Array.prototype.unshift;

	      var argCount = DecoratorClass.prototype.constructor.length;

	      var calledConstructor = SuperClass.prototype.constructor;

	      if (argCount > 0) {
	        unshift.call(arguments, SuperClass.prototype.constructor);

	        calledConstructor = DecoratorClass.prototype.constructor;
	      }

	      calledConstructor.apply(this, arguments);
	    }

	    DecoratorClass.displayName = SuperClass.displayName;

	    function ctr () {
	      this.constructor = DecoratedClass;
	    }

	    DecoratedClass.prototype = new ctr();

	    for (var m = 0; m < superMethods.length; m++) {
	        var superMethod = superMethods[m];

	        DecoratedClass.prototype[superMethod] =
	          SuperClass.prototype[superMethod];
	    }

	    var calledMethod = function (methodName) {
	      // Stub out the original method if it's not decorating an actual method
	      var originalMethod = function () {};

	      if (methodName in DecoratedClass.prototype) {
	        originalMethod = DecoratedClass.prototype[methodName];
	      }

	      var decoratedMethod = DecoratorClass.prototype[methodName];

	      return function () {
	        var unshift = Array.prototype.unshift;

	        unshift.call(arguments, originalMethod);

	        return decoratedMethod.apply(this, arguments);
	      };
	    };

	    for (var d = 0; d < decoratedMethods.length; d++) {
	      var decoratedMethod = decoratedMethods[d];

	      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
	    }

	    return DecoratedClass;
	  };

	  var Observable = function () {
	    this.listeners = {};
	  };

	  Observable.prototype.on = function (event, callback) {
	    this.listeners = this.listeners || {};

	    if (event in this.listeners) {
	      this.listeners[event].push(callback);
	    } else {
	      this.listeners[event] = [callback];
	    }
	  };

	  Observable.prototype.trigger = function (event) {
	    var slice = Array.prototype.slice;
	    var params = slice.call(arguments, 1);

	    this.listeners = this.listeners || {};

	    // Params should always come in as an array
	    if (params == null) {
	      params = [];
	    }

	    // If there are no arguments to the event, use a temporary object
	    if (params.length === 0) {
	      params.push({});
	    }

	    // Set the `_type` of the first object to the event
	    params[0]._type = event;

	    if (event in this.listeners) {
	      this.invoke(this.listeners[event], slice.call(arguments, 1));
	    }

	    if ('*' in this.listeners) {
	      this.invoke(this.listeners['*'], arguments);
	    }
	  };

	  Observable.prototype.invoke = function (listeners, params) {
	    for (var i = 0, len = listeners.length; i < len; i++) {
	      listeners[i].apply(this, params);
	    }
	  };

	  Utils.Observable = Observable;

	  Utils.generateChars = function (length) {
	    var chars = '';

	    for (var i = 0; i < length; i++) {
	      var randomChar = Math.floor(Math.random() * 36);
	      chars += randomChar.toString(36);
	    }

	    return chars;
	  };

	  Utils.bind = function (func, context) {
	    return function () {
	      func.apply(context, arguments);
	    };
	  };

	  Utils._convertData = function (data) {
	    for (var originalKey in data) {
	      var keys = originalKey.split('-');

	      var dataLevel = data;

	      if (keys.length === 1) {
	        continue;
	      }

	      for (var k = 0; k < keys.length; k++) {
	        var key = keys[k];

	        // Lowercase the first letter
	        // By default, dash-separated becomes camelCase
	        key = key.substring(0, 1).toLowerCase() + key.substring(1);

	        if (!(key in dataLevel)) {
	          dataLevel[key] = {};
	        }

	        if (k == keys.length - 1) {
	          dataLevel[key] = data[originalKey];
	        }

	        dataLevel = dataLevel[key];
	      }

	      delete data[originalKey];
	    }

	    return data;
	  };

	  Utils.hasScroll = function (index, el) {
	    // Adapted from the function created by @ShadowScripter
	    // and adapted by @BillBarry on the Stack Exchange Code Review website.
	    // The original code can be found at
	    // http://codereview.stackexchange.com/q/13338
	    // and was designed to be used with the Sizzle selector engine.

	    var $el = $(el);
	    var overflowX = el.style.overflowX;
	    var overflowY = el.style.overflowY;

	    //Check both x and y declarations
	    if (overflowX === overflowY &&
	        (overflowY === 'hidden' || overflowY === 'visible')) {
	      return false;
	    }

	    if (overflowX === 'scroll' || overflowY === 'scroll') {
	      return true;
	    }

	    return ($el.innerHeight() < el.scrollHeight ||
	      $el.innerWidth() < el.scrollWidth);
	  };

	  Utils.escapeMarkup = function (markup) {
	    var replaceMap = {
	      '\\': '&#92;',
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '"': '&quot;',
	      '\'': '&#39;',
	      '/': '&#47;'
	    };

	    // Do not try to escape the markup if it's not a string
	    if (typeof markup !== 'string') {
	      return markup;
	    }

	    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
	      return replaceMap[match];
	    });
	  };

	  // Append an array of jQuery nodes to a given element.
	  Utils.appendMany = function ($element, $nodes) {
	    // jQuery 1.7.x does not support $.fn.append() with an array
	    // Fall back to a jQuery object collection using $.fn.add()
	    if ($.fn.jquery.substr(0, 3) === '1.7') {
	      var $jqNodes = $();

	      $.map($nodes, function (node) {
	        $jqNodes = $jqNodes.add(node);
	      });

	      $nodes = $jqNodes;
	    }

	    $element.append($nodes);
	  };

	  return Utils;
	});

	S2.define('select2/results',[
	  'jquery',
	  './utils'
	], function ($, Utils) {
	  function Results ($element, options, dataAdapter) {
	    this.$element = $element;
	    this.data = dataAdapter;
	    this.options = options;

	    Results.__super__.constructor.call(this);
	  }

	  Utils.Extend(Results, Utils.Observable);

	  Results.prototype.render = function () {
	    var $results = $(
	      '<ul class="select2-results__options" role="tree"></ul>'
	    );

	    if (this.options.get('multiple')) {
	      $results.attr('aria-multiselectable', 'true');
	    }

	    this.$results = $results;

	    return $results;
	  };

	  Results.prototype.clear = function () {
	    this.$results.empty();
	  };

	  Results.prototype.displayMessage = function (params) {
	    var escapeMarkup = this.options.get('escapeMarkup');

	    this.clear();
	    this.hideLoading();

	    var $message = $(
	      '<li role="treeitem" aria-live="assertive"' +
	      ' class="select2-results__option"></li>'
	    );

	    var message = this.options.get('translations').get(params.message);

	    $message.append(
	      escapeMarkup(
	        message(params.args)
	      )
	    );

	    $message[0].className += ' select2-results__message';

	    this.$results.append($message);
	  };

	  Results.prototype.hideMessages = function () {
	    this.$results.find('.select2-results__message').remove();
	  };

	  Results.prototype.append = function (data) {
	    this.hideLoading();

	    var $options = [];

	    if (data.results == null || data.results.length === 0) {
	      if (this.$results.children().length === 0) {
	        this.trigger('results:message', {
	          message: 'noResults'
	        });
	      }

	      return;
	    }

	    data.results = this.sort(data.results);

	    for (var d = 0; d < data.results.length; d++) {
	      var item = data.results[d];

	      var $option = this.option(item);

	      $options.push($option);
	    }

	    this.$results.append($options);
	  };

	  Results.prototype.position = function ($results, $dropdown) {
	    var $resultsContainer = $dropdown.find('.select2-results');
	    $resultsContainer.append($results);
	  };

	  Results.prototype.sort = function (data) {
	    var sorter = this.options.get('sorter');

	    return sorter(data);
	  };

	  Results.prototype.highlightFirstItem = function () {
	    var $options = this.$results
	      .find('.select2-results__option[aria-selected]');

	    var $selected = $options.filter('[aria-selected=true]');

	    // Check if there are any selected options
	    if ($selected.length > 0) {
	      // If there are selected options, highlight the first
	      $selected.first().trigger('mouseenter');
	    } else {
	      // If there are no selected options, highlight the first option
	      // in the dropdown
	      $options.first().trigger('mouseenter');
	    }

	    this.ensureHighlightVisible();
	  };

	  Results.prototype.setClasses = function () {
	    var self = this;

	    this.data.current(function (selected) {
	      var selectedIds = $.map(selected, function (s) {
	        return s.id.toString();
	      });

	      var $options = self.$results
	        .find('.select2-results__option[aria-selected]');

	      $options.each(function () {
	        var $option = $(this);

	        var item = $.data(this, 'data');

	        // id needs to be converted to a string when comparing
	        var id = '' + item.id;

	        if ((item.element != null && item.element.selected) ||
	            (item.element == null && $.inArray(id, selectedIds) > -1)) {
	          $option.attr('aria-selected', 'true');
	        } else {
	          $option.attr('aria-selected', 'false');
	        }
	      });

	    });
	  };

	  Results.prototype.showLoading = function (params) {
	    this.hideLoading();

	    var loadingMore = this.options.get('translations').get('searching');

	    var loading = {
	      disabled: true,
	      loading: true,
	      text: loadingMore(params)
	    };
	    var $loading = this.option(loading);
	    $loading.className += ' loading-results';

	    this.$results.prepend($loading);
	  };

	  Results.prototype.hideLoading = function () {
	    this.$results.find('.loading-results').remove();
	  };

	  Results.prototype.option = function (data) {
	    var option = document.createElement('li');
	    option.className = 'select2-results__option';

	    var attrs = {
	      'role': 'treeitem',
	      'aria-selected': 'false'
	    };

	    if (data.disabled) {
	      delete attrs['aria-selected'];
	      attrs['aria-disabled'] = 'true';
	    }

	    if (data.id == null) {
	      delete attrs['aria-selected'];
	    }

	    if (data._resultId != null) {
	      option.id = data._resultId;
	    }

	    if (data.title) {
	      option.title = data.title;
	    }

	    if (data.children) {
	      attrs.role = 'group';
	      attrs['aria-label'] = data.text;
	      delete attrs['aria-selected'];
	    }

	    for (var attr in attrs) {
	      var val = attrs[attr];

	      option.setAttribute(attr, val);
	    }

	    if (data.children) {
	      var $option = $(option);

	      var label = document.createElement('strong');
	      label.className = 'select2-results__group';

	      var $label = $(label);
	      this.template(data, label);

	      var $children = [];

	      for (var c = 0; c < data.children.length; c++) {
	        var child = data.children[c];

	        var $child = this.option(child);

	        $children.push($child);
	      }

	      var $childrenContainer = $('<ul></ul>', {
	        'class': 'select2-results__options select2-results__options--nested'
	      });

	      $childrenContainer.append($children);

	      $option.append(label);
	      $option.append($childrenContainer);
	    } else {
	      this.template(data, option);
	    }

	    $.data(option, 'data', data);

	    return option;
	  };

	  Results.prototype.bind = function (container, $container) {
	    var self = this;

	    var id = container.id + '-results';

	    this.$results.attr('id', id);

	    container.on('results:all', function (params) {
	      self.clear();
	      self.append(params.data);

	      if (container.isOpen()) {
	        self.setClasses();
	        self.highlightFirstItem();
	      }
	    });

	    container.on('results:append', function (params) {
	      self.append(params.data);

	      if (container.isOpen()) {
	        self.setClasses();
	      }
	    });

	    container.on('query', function (params) {
	      self.hideMessages();
	      self.showLoading(params);
	    });

	    container.on('select', function () {
	      if (!container.isOpen()) {
	        return;
	      }

	      self.setClasses();
	      self.highlightFirstItem();
	    });

	    container.on('unselect', function () {
	      if (!container.isOpen()) {
	        return;
	      }

	      self.setClasses();
	      self.highlightFirstItem();
	    });

	    container.on('open', function () {
	      // When the dropdown is open, aria-expended="true"
	      self.$results.attr('aria-expanded', 'true');
	      self.$results.attr('aria-hidden', 'false');

	      self.setClasses();
	      self.ensureHighlightVisible();
	    });

	    container.on('close', function () {
	      // When the dropdown is closed, aria-expended="false"
	      self.$results.attr('aria-expanded', 'false');
	      self.$results.attr('aria-hidden', 'true');
	      self.$results.removeAttr('aria-activedescendant');
	    });

	    container.on('results:toggle', function () {
	      var $highlighted = self.getHighlightedResults();

	      if ($highlighted.length === 0) {
	        return;
	      }

	      $highlighted.trigger('mouseup');
	    });

	    container.on('results:select', function () {
	      var $highlighted = self.getHighlightedResults();

	      if ($highlighted.length === 0) {
	        return;
	      }

	      var data = $highlighted.data('data');

	      if ($highlighted.attr('aria-selected') == 'true') {
	        self.trigger('close', {});
	      } else {
	        self.trigger('select', {
	          data: data
	        });
	      }
	    });

	    container.on('results:previous', function () {
	      var $highlighted = self.getHighlightedResults();

	      var $options = self.$results.find('[aria-selected]');

	      var currentIndex = $options.index($highlighted);

	      // If we are already at te top, don't move further
	      if (currentIndex === 0) {
	        return;
	      }

	      var nextIndex = currentIndex - 1;

	      // If none are highlighted, highlight the first
	      if ($highlighted.length === 0) {
	        nextIndex = 0;
	      }

	      var $next = $options.eq(nextIndex);

	      $next.trigger('mouseenter');

	      var currentOffset = self.$results.offset().top;
	      var nextTop = $next.offset().top;
	      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

	      if (nextIndex === 0) {
	        self.$results.scrollTop(0);
	      } else if (nextTop - currentOffset < 0) {
	        self.$results.scrollTop(nextOffset);
	      }
	    });

	    container.on('results:next', function () {
	      var $highlighted = self.getHighlightedResults();

	      var $options = self.$results.find('[aria-selected]');

	      var currentIndex = $options.index($highlighted);

	      var nextIndex = currentIndex + 1;

	      // If we are at the last option, stay there
	      if (nextIndex >= $options.length) {
	        return;
	      }

	      var $next = $options.eq(nextIndex);

	      $next.trigger('mouseenter');

	      var currentOffset = self.$results.offset().top +
	        self.$results.outerHeight(false);
	      var nextBottom = $next.offset().top + $next.outerHeight(false);
	      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

	      if (nextIndex === 0) {
	        self.$results.scrollTop(0);
	      } else if (nextBottom > currentOffset) {
	        self.$results.scrollTop(nextOffset);
	      }
	    });

	    container.on('results:focus', function (params) {
	      params.element.addClass('select2-results__option--highlighted');
	    });

	    container.on('results:message', function (params) {
	      self.displayMessage(params);
	    });

	    if ($.fn.mousewheel) {
	      this.$results.on('mousewheel', function (e) {
	        var top = self.$results.scrollTop();

	        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

	        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
	        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

	        if (isAtTop) {
	          self.$results.scrollTop(0);

	          e.preventDefault();
	          e.stopPropagation();
	        } else if (isAtBottom) {
	          self.$results.scrollTop(
	            self.$results.get(0).scrollHeight - self.$results.height()
	          );

	          e.preventDefault();
	          e.stopPropagation();
	        }
	      });
	    }

	    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
	      function (evt) {
	      var $this = $(this);

	      var data = $this.data('data');

	      if ($this.attr('aria-selected') === 'true') {
	        if (self.options.get('multiple')) {
	          self.trigger('unselect', {
	            originalEvent: evt,
	            data: data
	          });
	        } else {
	          self.trigger('close', {});
	        }

	        return;
	      }

	      self.trigger('select', {
	        originalEvent: evt,
	        data: data
	      });
	    });

	    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
	      function (evt) {
	      var data = $(this).data('data');

	      self.getHighlightedResults()
	          .removeClass('select2-results__option--highlighted');

	      self.trigger('results:focus', {
	        data: data,
	        element: $(this)
	      });
	    });
	  };

	  Results.prototype.getHighlightedResults = function () {
	    var $highlighted = this.$results
	    .find('.select2-results__option--highlighted');

	    return $highlighted;
	  };

	  Results.prototype.destroy = function () {
	    this.$results.remove();
	  };

	  Results.prototype.ensureHighlightVisible = function () {
	    var $highlighted = this.getHighlightedResults();

	    if ($highlighted.length === 0) {
	      return;
	    }

	    var $options = this.$results.find('[aria-selected]');

	    var currentIndex = $options.index($highlighted);

	    var currentOffset = this.$results.offset().top;
	    var nextTop = $highlighted.offset().top;
	    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

	    var offsetDelta = nextTop - currentOffset;
	    nextOffset -= $highlighted.outerHeight(false) * 2;

	    if (currentIndex <= 2) {
	      this.$results.scrollTop(0);
	    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
	      this.$results.scrollTop(nextOffset);
	    }
	  };

	  Results.prototype.template = function (result, container) {
	    var template = this.options.get('templateResult');
	    var escapeMarkup = this.options.get('escapeMarkup');

	    var content = template(result, container);

	    if (content == null) {
	      container.style.display = 'none';
	    } else if (typeof content === 'string') {
	      container.innerHTML = escapeMarkup(content);
	    } else {
	      $(container).append(content);
	    }
	  };

	  return Results;
	});

	S2.define('select2/keys',[

	], function () {
	  var KEYS = {
	    BACKSPACE: 8,
	    TAB: 9,
	    ENTER: 13,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    ESC: 27,
	    SPACE: 32,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    END: 35,
	    HOME: 36,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    DELETE: 46
	  };

	  return KEYS;
	});

	S2.define('select2/selection/base',[
	  'jquery',
	  '../utils',
	  '../keys'
	], function ($, Utils, KEYS) {
	  function BaseSelection ($element, options) {
	    this.$element = $element;
	    this.options = options;

	    BaseSelection.__super__.constructor.call(this);
	  }

	  Utils.Extend(BaseSelection, Utils.Observable);

	  BaseSelection.prototype.render = function () {
	    var $selection = $(
	      '<span class="select2-selection" role="combobox" ' +
	      ' aria-haspopup="true" aria-expanded="false">' +
	      '</span>'
	    );

	    this._tabindex = 0;

	    if (this.$element.data('old-tabindex') != null) {
	      this._tabindex = this.$element.data('old-tabindex');
	    } else if (this.$element.attr('tabindex') != null) {
	      this._tabindex = this.$element.attr('tabindex');
	    }

	    $selection.attr('title', this.$element.attr('title'));
	    $selection.attr('tabindex', this._tabindex);

	    this.$selection = $selection;

	    return $selection;
	  };

	  BaseSelection.prototype.bind = function (container, $container) {
	    var self = this;

	    var id = container.id + '-container';
	    var resultsId = container.id + '-results';

	    this.container = container;

	    this.$selection.on('focus', function (evt) {
	      self.trigger('focus', evt);
	    });

	    this.$selection.on('blur', function (evt) {
	      self._handleBlur(evt);
	    });

	    this.$selection.on('keydown', function (evt) {
	      self.trigger('keypress', evt);

	      if (evt.which === KEYS.SPACE) {
	        evt.preventDefault();
	      }
	    });

	    container.on('results:focus', function (params) {
	      self.$selection.attr('aria-activedescendant', params.data._resultId);
	    });

	    container.on('selection:update', function (params) {
	      self.update(params.data);
	    });

	    container.on('open', function () {
	      // When the dropdown is open, aria-expanded="true"
	      self.$selection.attr('aria-expanded', 'true');
	      self.$selection.attr('aria-owns', resultsId);

	      self._attachCloseHandler(container);
	    });

	    container.on('close', function () {
	      // When the dropdown is closed, aria-expanded="false"
	      self.$selection.attr('aria-expanded', 'false');
	      self.$selection.removeAttr('aria-activedescendant');
	      self.$selection.removeAttr('aria-owns');

	      self.$selection.focus();

	      self._detachCloseHandler(container);
	    });

	    container.on('enable', function () {
	      self.$selection.attr('tabindex', self._tabindex);
	    });

	    container.on('disable', function () {
	      self.$selection.attr('tabindex', '-1');
	    });
	  };

	  BaseSelection.prototype._handleBlur = function (evt) {
	    var self = this;

	    // This needs to be delayed as the active element is the body when the tab
	    // key is pressed, possibly along with others.
	    window.setTimeout(function () {
	      // Don't trigger `blur` if the focus is still in the selection
	      if (
	        (document.activeElement == self.$selection[0]) ||
	        ($.contains(self.$selection[0], document.activeElement))
	      ) {
	        return;
	      }

	      self.trigger('blur', evt);
	    }, 1);
	  };

	  BaseSelection.prototype._attachCloseHandler = function (container) {
	    var self = this;

	    $(document.body).on('mousedown.select2.' + container.id, function (e) {
	      var $target = $(e.target);

	      var $select = $target.closest('.select2');

	      var $all = $('.select2.select2-container--open');

	      $all.each(function () {
	        var $this = $(this);

	        if (this == $select[0]) {
	          return;
	        }

	        var $element = $this.data('element');

	        $element.select2('close');
	      });
	    });
	  };

	  BaseSelection.prototype._detachCloseHandler = function (container) {
	    $(document.body).off('mousedown.select2.' + container.id);
	  };

	  BaseSelection.prototype.position = function ($selection, $container) {
	    var $selectionContainer = $container.find('.selection');
	    $selectionContainer.append($selection);
	  };

	  BaseSelection.prototype.destroy = function () {
	    this._detachCloseHandler(this.container);
	  };

	  BaseSelection.prototype.update = function (data) {
	    throw new Error('The `update` method must be defined in child classes.');
	  };

	  return BaseSelection;
	});

	S2.define('select2/selection/single',[
	  'jquery',
	  './base',
	  '../utils',
	  '../keys'
	], function ($, BaseSelection, Utils, KEYS) {
	  function SingleSelection () {
	    SingleSelection.__super__.constructor.apply(this, arguments);
	  }

	  Utils.Extend(SingleSelection, BaseSelection);

	  SingleSelection.prototype.render = function () {
	    var $selection = SingleSelection.__super__.render.call(this);

	    $selection.addClass('select2-selection--single');

	    $selection.html(
	      '<span class="select2-selection__rendered"></span>' +
	      '<span class="select2-selection__arrow" role="presentation">' +
	        '<b role="presentation"></b>' +
	      '</span>'
	    );

	    return $selection;
	  };

	  SingleSelection.prototype.bind = function (container, $container) {
	    var self = this;

	    SingleSelection.__super__.bind.apply(this, arguments);

	    var id = container.id + '-container';

	    this.$selection.find('.select2-selection__rendered').attr('id', id);
	    this.$selection.attr('aria-labelledby', id);

	    this.$selection.on('mousedown', function (evt) {
	      // Only respond to left clicks
	      if (evt.which !== 1) {
	        return;
	      }

	      self.trigger('toggle', {
	        originalEvent: evt
	      });
	    });

	    this.$selection.on('focus', function (evt) {
	      // User focuses on the container
	    });

	    this.$selection.on('blur', function (evt) {
	      // User exits the container
	    });

	    container.on('focus', function (evt) {
	      if (!container.isOpen()) {
	        self.$selection.focus();
	      }
	    });

	    container.on('selection:update', function (params) {
	      self.update(params.data);
	    });
	  };

	  SingleSelection.prototype.clear = function () {
	    this.$selection.find('.select2-selection__rendered').empty();
	  };

	  SingleSelection.prototype.display = function (data, container) {
	    var template = this.options.get('templateSelection');
	    var escapeMarkup = this.options.get('escapeMarkup');

	    return escapeMarkup(template(data, container));
	  };

	  SingleSelection.prototype.selectionContainer = function () {
	    return $('<span></span>');
	  };

	  SingleSelection.prototype.update = function (data) {
	    if (data.length === 0) {
	      this.clear();
	      return;
	    }

	    var selection = data[0];

	    var $rendered = this.$selection.find('.select2-selection__rendered');
	    var formatted = this.display(selection, $rendered);

	    $rendered.empty().append(formatted);
	    $rendered.prop('title', selection.title || selection.text);
	  };

	  return SingleSelection;
	});

	S2.define('select2/selection/multiple',[
	  'jquery',
	  './base',
	  '../utils'
	], function ($, BaseSelection, Utils) {
	  function MultipleSelection ($element, options) {
	    MultipleSelection.__super__.constructor.apply(this, arguments);
	  }

	  Utils.Extend(MultipleSelection, BaseSelection);

	  MultipleSelection.prototype.render = function () {
	    var $selection = MultipleSelection.__super__.render.call(this);

	    $selection.addClass('select2-selection--multiple');

	    $selection.html(
	      '<ul class="select2-selection__rendered"></ul>'
	    );

	    return $selection;
	  };

	  MultipleSelection.prototype.bind = function (container, $container) {
	    var self = this;

	    MultipleSelection.__super__.bind.apply(this, arguments);

	    this.$selection.on('click', function (evt) {
	      self.trigger('toggle', {
	        originalEvent: evt
	      });
	    });

	    this.$selection.on(
	      'click',
	      '.select2-selection__choice__remove',
	      function (evt) {
	        // Ignore the event if it is disabled
	        if (self.options.get('disabled')) {
	          return;
	        }

	        var $remove = $(this);
	        var $selection = $remove.parent();

	        var data = $selection.data('data');

	        self.trigger('unselect', {
	          originalEvent: evt,
	          data: data
	        });
	      }
	    );
	  };

	  MultipleSelection.prototype.clear = function () {
	    this.$selection.find('.select2-selection__rendered').empty();
	  };

	  MultipleSelection.prototype.display = function (data, container) {
	    var template = this.options.get('templateSelection');
	    var escapeMarkup = this.options.get('escapeMarkup');

	    return escapeMarkup(template(data, container));
	  };

	  MultipleSelection.prototype.selectionContainer = function () {
	    var $container = $(
	      '<li class="select2-selection__choice">' +
	        '<span class="select2-selection__choice__remove" role="presentation">' +
	          '&times;' +
	        '</span>' +
	      '</li>'
	    );

	    return $container;
	  };

	  MultipleSelection.prototype.update = function (data) {
	    this.clear();

	    if (data.length === 0) {
	      return;
	    }

	    var $selections = [];

	    for (var d = 0; d < data.length; d++) {
	      var selection = data[d];

	      var $selection = this.selectionContainer();
	      var formatted = this.display(selection, $selection);

	      $selection.append(formatted);
	      $selection.prop('title', selection.title || selection.text);

	      $selection.data('data', selection);

	      $selections.push($selection);
	    }

	    var $rendered = this.$selection.find('.select2-selection__rendered');

	    Utils.appendMany($rendered, $selections);
	  };

	  return MultipleSelection;
	});

	S2.define('select2/selection/placeholder',[
	  '../utils'
	], function (Utils) {
	  function Placeholder (decorated, $element, options) {
	    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

	    decorated.call(this, $element, options);
	  }

	  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
	    if (typeof placeholder === 'string') {
	      placeholder = {
	        id: '',
	        text: placeholder
	      };
	    }

	    return placeholder;
	  };

	  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
	    var $placeholder = this.selectionContainer();

	    $placeholder.html(this.display(placeholder));
	    $placeholder.addClass('select2-selection__placeholder')
	                .removeClass('select2-selection__choice');

	    return $placeholder;
	  };

	  Placeholder.prototype.update = function (decorated, data) {
	    var singlePlaceholder = (
	      data.length == 1 && data[0].id != this.placeholder.id
	    );
	    var multipleSelections = data.length > 1;

	    if (multipleSelections || singlePlaceholder) {
	      return decorated.call(this, data);
	    }

	    this.clear();

	    var $placeholder = this.createPlaceholder(this.placeholder);

	    this.$selection.find('.select2-selection__rendered').append($placeholder);
	  };

	  return Placeholder;
	});

	S2.define('select2/selection/allowClear',[
	  'jquery',
	  '../keys'
	], function ($, KEYS) {
	  function AllowClear () { }

	  AllowClear.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    if (this.placeholder == null) {
	      if (this.options.get('debug') && window.console && console.error) {
	        console.error(
	          'Select2: The `allowClear` option should be used in combination ' +
	          'with the `placeholder` option.'
	        );
	      }
	    }

	    this.$selection.on('mousedown', '.select2-selection__clear',
	      function (evt) {
	        self._handleClear(evt);
	    });

	    container.on('keypress', function (evt) {
	      self._handleKeyboardClear(evt, container);
	    });
	  };

	  AllowClear.prototype._handleClear = function (_, evt) {
	    // Ignore the event if it is disabled
	    if (this.options.get('disabled')) {
	      return;
	    }

	    var $clear = this.$selection.find('.select2-selection__clear');

	    // Ignore the event if nothing has been selected
	    if ($clear.length === 0) {
	      return;
	    }

	    evt.stopPropagation();

	    var data = $clear.data('data');

	    for (var d = 0; d < data.length; d++) {
	      var unselectData = {
	        data: data[d]
	      };

	      // Trigger the `unselect` event, so people can prevent it from being
	      // cleared.
	      this.trigger('unselect', unselectData);

	      // If the event was prevented, don't clear it out.
	      if (unselectData.prevented) {
	        return;
	      }
	    }

	    this.$element.val(this.placeholder.id).trigger('change');

	    this.trigger('toggle', {});
	  };

	  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
	    if (container.isOpen()) {
	      return;
	    }

	    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
	      this._handleClear(evt);
	    }
	  };

	  AllowClear.prototype.update = function (decorated, data) {
	    decorated.call(this, data);

	    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
	        data.length === 0) {
	      return;
	    }

	    var $remove = $(
	      '<span class="select2-selection__clear">' +
	        '&times;' +
	      '</span>'
	    );
	    $remove.data('data', data);

	    this.$selection.find('.select2-selection__rendered').prepend($remove);
	  };

	  return AllowClear;
	});

	S2.define('select2/selection/search',[
	  'jquery',
	  '../utils',
	  '../keys'
	], function ($, Utils, KEYS) {
	  function Search (decorated, $element, options) {
	    decorated.call(this, $element, options);
	  }

	  Search.prototype.render = function (decorated) {
	    var $search = $(
	      '<li class="select2-search select2-search--inline">' +
	        '<input class="select2-search__field" type="search" tabindex="-1"' +
	        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
	        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
	      '</li>'
	    );

	    this.$searchContainer = $search;
	    this.$search = $search.find('input');

	    var $rendered = decorated.call(this);

	    this._transferTabIndex();

	    return $rendered;
	  };

	  Search.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('open', function () {
	      self.$search.trigger('focus');
	    });

	    container.on('close', function () {
	      self.$search.val('');
	      self.$search.removeAttr('aria-activedescendant');
	      self.$search.trigger('focus');
	    });

	    container.on('enable', function () {
	      self.$search.prop('disabled', false);

	      self._transferTabIndex();
	    });

	    container.on('disable', function () {
	      self.$search.prop('disabled', true);
	    });

	    container.on('focus', function (evt) {
	      self.$search.trigger('focus');
	    });

	    container.on('results:focus', function (params) {
	      self.$search.attr('aria-activedescendant', params.id);
	    });

	    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
	      self.trigger('focus', evt);
	    });

	    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
	      self._handleBlur(evt);
	    });

	    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
	      evt.stopPropagation();

	      self.trigger('keypress', evt);

	      self._keyUpPrevented = evt.isDefaultPrevented();

	      var key = evt.which;

	      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
	        var $previousChoice = self.$searchContainer
	          .prev('.select2-selection__choice');

	        if ($previousChoice.length > 0) {
	          var item = $previousChoice.data('data');

	          self.searchRemoveChoice(item);

	          evt.preventDefault();
	        }
	      }
	    });

	    // Try to detect the IE version should the `documentMode` property that
	    // is stored on the document. This is only implemented in IE and is
	    // slightly cleaner than doing a user agent check.
	    // This property is not available in Edge, but Edge also doesn't have
	    // this bug.
	    var msie = document.documentMode;
	    var disableInputEvents = msie && msie <= 11;

	    // Workaround for browsers which do not support the `input` event
	    // This will prevent double-triggering of events for browsers which support
	    // both the `keyup` and `input` events.
	    this.$selection.on(
	      'input.searchcheck',
	      '.select2-search--inline',
	      function (evt) {
	        // IE will trigger the `input` event when a placeholder is used on a
	        // search box. To get around this issue, we are forced to ignore all
	        // `input` events in IE and keep using `keyup`.
	        if (disableInputEvents) {
	          self.$selection.off('input.search input.searchcheck');
	          return;
	        }

	        // Unbind the duplicated `keyup` event
	        self.$selection.off('keyup.search');
	      }
	    );

	    this.$selection.on(
	      'keyup.search input.search',
	      '.select2-search--inline',
	      function (evt) {
	        // IE will trigger the `input` event when a placeholder is used on a
	        // search box. To get around this issue, we are forced to ignore all
	        // `input` events in IE and keep using `keyup`.
	        if (disableInputEvents && evt.type === 'input') {
	          self.$selection.off('input.search input.searchcheck');
	          return;
	        }

	        var key = evt.which;

	        // We can freely ignore events from modifier keys
	        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
	          return;
	        }

	        // Tabbing will be handled during the `keydown` phase
	        if (key == KEYS.TAB) {
	          return;
	        }

	        self.handleSearch(evt);
	      }
	    );
	  };

	  /**
	   * This method will transfer the tabindex attribute from the rendered
	   * selection to the search box. This allows for the search box to be used as
	   * the primary focus instead of the selection container.
	   *
	   * @private
	   */
	  Search.prototype._transferTabIndex = function (decorated) {
	    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
	    this.$selection.attr('tabindex', '-1');
	  };

	  Search.prototype.createPlaceholder = function (decorated, placeholder) {
	    this.$search.attr('placeholder', placeholder.text);
	  };

	  Search.prototype.update = function (decorated, data) {
	    var searchHadFocus = this.$search[0] == document.activeElement;

	    this.$search.attr('placeholder', '');

	    decorated.call(this, data);

	    this.$selection.find('.select2-selection__rendered')
	                   .append(this.$searchContainer);

	    this.resizeSearch();
	    if (searchHadFocus) {
	      this.$search.focus();
	    }
	  };

	  Search.prototype.handleSearch = function () {
	    this.resizeSearch();

	    if (!this._keyUpPrevented) {
	      var input = this.$search.val();

	      this.trigger('query', {
	        term: input
	      });
	    }

	    this._keyUpPrevented = false;
	  };

	  Search.prototype.searchRemoveChoice = function (decorated, item) {
	    this.trigger('unselect', {
	      data: item
	    });

	    this.$search.val(item.text);
	    this.handleSearch();
	  };

	  Search.prototype.resizeSearch = function () {
	    this.$search.css('width', '25px');

	    var width = '';

	    if (this.$search.attr('placeholder') !== '') {
	      width = this.$selection.find('.select2-selection__rendered').innerWidth();
	    } else {
	      var minimumWidth = this.$search.val().length + 1;

	      width = (minimumWidth * 0.75) + 'em';
	    }

	    this.$search.css('width', width);
	  };

	  return Search;
	});

	S2.define('select2/selection/eventRelay',[
	  'jquery'
	], function ($) {
	  function EventRelay () { }

	  EventRelay.prototype.bind = function (decorated, container, $container) {
	    var self = this;
	    var relayEvents = [
	      'open', 'opening',
	      'close', 'closing',
	      'select', 'selecting',
	      'unselect', 'unselecting'
	    ];

	    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

	    decorated.call(this, container, $container);

	    container.on('*', function (name, params) {
	      // Ignore events that should not be relayed
	      if ($.inArray(name, relayEvents) === -1) {
	        return;
	      }

	      // The parameters should always be an object
	      params = params || {};

	      // Generate the jQuery event for the Select2 event
	      var evt = $.Event('select2:' + name, {
	        params: params
	      });

	      self.$element.trigger(evt);

	      // Only handle preventable events if it was one
	      if ($.inArray(name, preventableEvents) === -1) {
	        return;
	      }

	      params.prevented = evt.isDefaultPrevented();
	    });
	  };

	  return EventRelay;
	});

	S2.define('select2/translation',[
	  'jquery',
	  'require'
	], function ($, require) {
	  function Translation (dict) {
	    this.dict = dict || {};
	  }

	  Translation.prototype.all = function () {
	    return this.dict;
	  };

	  Translation.prototype.get = function (key) {
	    return this.dict[key];
	  };

	  Translation.prototype.extend = function (translation) {
	    this.dict = $.extend({}, translation.all(), this.dict);
	  };

	  // Static functions

	  Translation._cache = {};

	  Translation.loadPath = function (path) {
	    if (!(path in Translation._cache)) {
	      var translations = require(path);

	      Translation._cache[path] = translations;
	    }

	    return new Translation(Translation._cache[path]);
	  };

	  return Translation;
	});

	S2.define('select2/diacritics',[

	], function () {
	  var diacritics = {
	    '\u24B6': 'A',
	    '\uFF21': 'A',
	    '\u00C0': 'A',
	    '\u00C1': 'A',
	    '\u00C2': 'A',
	    '\u1EA6': 'A',
	    '\u1EA4': 'A',
	    '\u1EAA': 'A',
	    '\u1EA8': 'A',
	    '\u00C3': 'A',
	    '\u0100': 'A',
	    '\u0102': 'A',
	    '\u1EB0': 'A',
	    '\u1EAE': 'A',
	    '\u1EB4': 'A',
	    '\u1EB2': 'A',
	    '\u0226': 'A',
	    '\u01E0': 'A',
	    '\u00C4': 'A',
	    '\u01DE': 'A',
	    '\u1EA2': 'A',
	    '\u00C5': 'A',
	    '\u01FA': 'A',
	    '\u01CD': 'A',
	    '\u0200': 'A',
	    '\u0202': 'A',
	    '\u1EA0': 'A',
	    '\u1EAC': 'A',
	    '\u1EB6': 'A',
	    '\u1E00': 'A',
	    '\u0104': 'A',
	    '\u023A': 'A',
	    '\u2C6F': 'A',
	    '\uA732': 'AA',
	    '\u00C6': 'AE',
	    '\u01FC': 'AE',
	    '\u01E2': 'AE',
	    '\uA734': 'AO',
	    '\uA736': 'AU',
	    '\uA738': 'AV',
	    '\uA73A': 'AV',
	    '\uA73C': 'AY',
	    '\u24B7': 'B',
	    '\uFF22': 'B',
	    '\u1E02': 'B',
	    '\u1E04': 'B',
	    '\u1E06': 'B',
	    '\u0243': 'B',
	    '\u0182': 'B',
	    '\u0181': 'B',
	    '\u24B8': 'C',
	    '\uFF23': 'C',
	    '\u0106': 'C',
	    '\u0108': 'C',
	    '\u010A': 'C',
	    '\u010C': 'C',
	    '\u00C7': 'C',
	    '\u1E08': 'C',
	    '\u0187': 'C',
	    '\u023B': 'C',
	    '\uA73E': 'C',
	    '\u24B9': 'D',
	    '\uFF24': 'D',
	    '\u1E0A': 'D',
	    '\u010E': 'D',
	    '\u1E0C': 'D',
	    '\u1E10': 'D',
	    '\u1E12': 'D',
	    '\u1E0E': 'D',
	    '\u0110': 'D',
	    '\u018B': 'D',
	    '\u018A': 'D',
	    '\u0189': 'D',
	    '\uA779': 'D',
	    '\u01F1': 'DZ',
	    '\u01C4': 'DZ',
	    '\u01F2': 'Dz',
	    '\u01C5': 'Dz',
	    '\u24BA': 'E',
	    '\uFF25': 'E',
	    '\u00C8': 'E',
	    '\u00C9': 'E',
	    '\u00CA': 'E',
	    '\u1EC0': 'E',
	    '\u1EBE': 'E',
	    '\u1EC4': 'E',
	    '\u1EC2': 'E',
	    '\u1EBC': 'E',
	    '\u0112': 'E',
	    '\u1E14': 'E',
	    '\u1E16': 'E',
	    '\u0114': 'E',
	    '\u0116': 'E',
	    '\u00CB': 'E',
	    '\u1EBA': 'E',
	    '\u011A': 'E',
	    '\u0204': 'E',
	    '\u0206': 'E',
	    '\u1EB8': 'E',
	    '\u1EC6': 'E',
	    '\u0228': 'E',
	    '\u1E1C': 'E',
	    '\u0118': 'E',
	    '\u1E18': 'E',
	    '\u1E1A': 'E',
	    '\u0190': 'E',
	    '\u018E': 'E',
	    '\u24BB': 'F',
	    '\uFF26': 'F',
	    '\u1E1E': 'F',
	    '\u0191': 'F',
	    '\uA77B': 'F',
	    '\u24BC': 'G',
	    '\uFF27': 'G',
	    '\u01F4': 'G',
	    '\u011C': 'G',
	    '\u1E20': 'G',
	    '\u011E': 'G',
	    '\u0120': 'G',
	    '\u01E6': 'G',
	    '\u0122': 'G',
	    '\u01E4': 'G',
	    '\u0193': 'G',
	    '\uA7A0': 'G',
	    '\uA77D': 'G',
	    '\uA77E': 'G',
	    '\u24BD': 'H',
	    '\uFF28': 'H',
	    '\u0124': 'H',
	    '\u1E22': 'H',
	    '\u1E26': 'H',
	    '\u021E': 'H',
	    '\u1E24': 'H',
	    '\u1E28': 'H',
	    '\u1E2A': 'H',
	    '\u0126': 'H',
	    '\u2C67': 'H',
	    '\u2C75': 'H',
	    '\uA78D': 'H',
	    '\u24BE': 'I',
	    '\uFF29': 'I',
	    '\u00CC': 'I',
	    '\u00CD': 'I',
	    '\u00CE': 'I',
	    '\u0128': 'I',
	    '\u012A': 'I',
	    '\u012C': 'I',
	    '\u0130': 'I',
	    '\u00CF': 'I',
	    '\u1E2E': 'I',
	    '\u1EC8': 'I',
	    '\u01CF': 'I',
	    '\u0208': 'I',
	    '\u020A': 'I',
	    '\u1ECA': 'I',
	    '\u012E': 'I',
	    '\u1E2C': 'I',
	    '\u0197': 'I',
	    '\u24BF': 'J',
	    '\uFF2A': 'J',
	    '\u0134': 'J',
	    '\u0248': 'J',
	    '\u24C0': 'K',
	    '\uFF2B': 'K',
	    '\u1E30': 'K',
	    '\u01E8': 'K',
	    '\u1E32': 'K',
	    '\u0136': 'K',
	    '\u1E34': 'K',
	    '\u0198': 'K',
	    '\u2C69': 'K',
	    '\uA740': 'K',
	    '\uA742': 'K',
	    '\uA744': 'K',
	    '\uA7A2': 'K',
	    '\u24C1': 'L',
	    '\uFF2C': 'L',
	    '\u013F': 'L',
	    '\u0139': 'L',
	    '\u013D': 'L',
	    '\u1E36': 'L',
	    '\u1E38': 'L',
	    '\u013B': 'L',
	    '\u1E3C': 'L',
	    '\u1E3A': 'L',
	    '\u0141': 'L',
	    '\u023D': 'L',
	    '\u2C62': 'L',
	    '\u2C60': 'L',
	    '\uA748': 'L',
	    '\uA746': 'L',
	    '\uA780': 'L',
	    '\u01C7': 'LJ',
	    '\u01C8': 'Lj',
	    '\u24C2': 'M',
	    '\uFF2D': 'M',
	    '\u1E3E': 'M',
	    '\u1E40': 'M',
	    '\u1E42': 'M',
	    '\u2C6E': 'M',
	    '\u019C': 'M',
	    '\u24C3': 'N',
	    '\uFF2E': 'N',
	    '\u01F8': 'N',
	    '\u0143': 'N',
	    '\u00D1': 'N',
	    '\u1E44': 'N',
	    '\u0147': 'N',
	    '\u1E46': 'N',
	    '\u0145': 'N',
	    '\u1E4A': 'N',
	    '\u1E48': 'N',
	    '\u0220': 'N',
	    '\u019D': 'N',
	    '\uA790': 'N',
	    '\uA7A4': 'N',
	    '\u01CA': 'NJ',
	    '\u01CB': 'Nj',
	    '\u24C4': 'O',
	    '\uFF2F': 'O',
	    '\u00D2': 'O',
	    '\u00D3': 'O',
	    '\u00D4': 'O',
	    '\u1ED2': 'O',
	    '\u1ED0': 'O',
	    '\u1ED6': 'O',
	    '\u1ED4': 'O',
	    '\u00D5': 'O',
	    '\u1E4C': 'O',
	    '\u022C': 'O',
	    '\u1E4E': 'O',
	    '\u014C': 'O',
	    '\u1E50': 'O',
	    '\u1E52': 'O',
	    '\u014E': 'O',
	    '\u022E': 'O',
	    '\u0230': 'O',
	    '\u00D6': 'O',
	    '\u022A': 'O',
	    '\u1ECE': 'O',
	    '\u0150': 'O',
	    '\u01D1': 'O',
	    '\u020C': 'O',
	    '\u020E': 'O',
	    '\u01A0': 'O',
	    '\u1EDC': 'O',
	    '\u1EDA': 'O',
	    '\u1EE0': 'O',
	    '\u1EDE': 'O',
	    '\u1EE2': 'O',
	    '\u1ECC': 'O',
	    '\u1ED8': 'O',
	    '\u01EA': 'O',
	    '\u01EC': 'O',
	    '\u00D8': 'O',
	    '\u01FE': 'O',
	    '\u0186': 'O',
	    '\u019F': 'O',
	    '\uA74A': 'O',
	    '\uA74C': 'O',
	    '\u01A2': 'OI',
	    '\uA74E': 'OO',
	    '\u0222': 'OU',
	    '\u24C5': 'P',
	    '\uFF30': 'P',
	    '\u1E54': 'P',
	    '\u1E56': 'P',
	    '\u01A4': 'P',
	    '\u2C63': 'P',
	    '\uA750': 'P',
	    '\uA752': 'P',
	    '\uA754': 'P',
	    '\u24C6': 'Q',
	    '\uFF31': 'Q',
	    '\uA756': 'Q',
	    '\uA758': 'Q',
	    '\u024A': 'Q',
	    '\u24C7': 'R',
	    '\uFF32': 'R',
	    '\u0154': 'R',
	    '\u1E58': 'R',
	    '\u0158': 'R',
	    '\u0210': 'R',
	    '\u0212': 'R',
	    '\u1E5A': 'R',
	    '\u1E5C': 'R',
	    '\u0156': 'R',
	    '\u1E5E': 'R',
	    '\u024C': 'R',
	    '\u2C64': 'R',
	    '\uA75A': 'R',
	    '\uA7A6': 'R',
	    '\uA782': 'R',
	    '\u24C8': 'S',
	    '\uFF33': 'S',
	    '\u1E9E': 'S',
	    '\u015A': 'S',
	    '\u1E64': 'S',
	    '\u015C': 'S',
	    '\u1E60': 'S',
	    '\u0160': 'S',
	    '\u1E66': 'S',
	    '\u1E62': 'S',
	    '\u1E68': 'S',
	    '\u0218': 'S',
	    '\u015E': 'S',
	    '\u2C7E': 'S',
	    '\uA7A8': 'S',
	    '\uA784': 'S',
	    '\u24C9': 'T',
	    '\uFF34': 'T',
	    '\u1E6A': 'T',
	    '\u0164': 'T',
	    '\u1E6C': 'T',
	    '\u021A': 'T',
	    '\u0162': 'T',
	    '\u1E70': 'T',
	    '\u1E6E': 'T',
	    '\u0166': 'T',
	    '\u01AC': 'T',
	    '\u01AE': 'T',
	    '\u023E': 'T',
	    '\uA786': 'T',
	    '\uA728': 'TZ',
	    '\u24CA': 'U',
	    '\uFF35': 'U',
	    '\u00D9': 'U',
	    '\u00DA': 'U',
	    '\u00DB': 'U',
	    '\u0168': 'U',
	    '\u1E78': 'U',
	    '\u016A': 'U',
	    '\u1E7A': 'U',
	    '\u016C': 'U',
	    '\u00DC': 'U',
	    '\u01DB': 'U',
	    '\u01D7': 'U',
	    '\u01D5': 'U',
	    '\u01D9': 'U',
	    '\u1EE6': 'U',
	    '\u016E': 'U',
	    '\u0170': 'U',
	    '\u01D3': 'U',
	    '\u0214': 'U',
	    '\u0216': 'U',
	    '\u01AF': 'U',
	    '\u1EEA': 'U',
	    '\u1EE8': 'U',
	    '\u1EEE': 'U',
	    '\u1EEC': 'U',
	    '\u1EF0': 'U',
	    '\u1EE4': 'U',
	    '\u1E72': 'U',
	    '\u0172': 'U',
	    '\u1E76': 'U',
	    '\u1E74': 'U',
	    '\u0244': 'U',
	    '\u24CB': 'V',
	    '\uFF36': 'V',
	    '\u1E7C': 'V',
	    '\u1E7E': 'V',
	    '\u01B2': 'V',
	    '\uA75E': 'V',
	    '\u0245': 'V',
	    '\uA760': 'VY',
	    '\u24CC': 'W',
	    '\uFF37': 'W',
	    '\u1E80': 'W',
	    '\u1E82': 'W',
	    '\u0174': 'W',
	    '\u1E86': 'W',
	    '\u1E84': 'W',
	    '\u1E88': 'W',
	    '\u2C72': 'W',
	    '\u24CD': 'X',
	    '\uFF38': 'X',
	    '\u1E8A': 'X',
	    '\u1E8C': 'X',
	    '\u24CE': 'Y',
	    '\uFF39': 'Y',
	    '\u1EF2': 'Y',
	    '\u00DD': 'Y',
	    '\u0176': 'Y',
	    '\u1EF8': 'Y',
	    '\u0232': 'Y',
	    '\u1E8E': 'Y',
	    '\u0178': 'Y',
	    '\u1EF6': 'Y',
	    '\u1EF4': 'Y',
	    '\u01B3': 'Y',
	    '\u024E': 'Y',
	    '\u1EFE': 'Y',
	    '\u24CF': 'Z',
	    '\uFF3A': 'Z',
	    '\u0179': 'Z',
	    '\u1E90': 'Z',
	    '\u017B': 'Z',
	    '\u017D': 'Z',
	    '\u1E92': 'Z',
	    '\u1E94': 'Z',
	    '\u01B5': 'Z',
	    '\u0224': 'Z',
	    '\u2C7F': 'Z',
	    '\u2C6B': 'Z',
	    '\uA762': 'Z',
	    '\u24D0': 'a',
	    '\uFF41': 'a',
	    '\u1E9A': 'a',
	    '\u00E0': 'a',
	    '\u00E1': 'a',
	    '\u00E2': 'a',
	    '\u1EA7': 'a',
	    '\u1EA5': 'a',
	    '\u1EAB': 'a',
	    '\u1EA9': 'a',
	    '\u00E3': 'a',
	    '\u0101': 'a',
	    '\u0103': 'a',
	    '\u1EB1': 'a',
	    '\u1EAF': 'a',
	    '\u1EB5': 'a',
	    '\u1EB3': 'a',
	    '\u0227': 'a',
	    '\u01E1': 'a',
	    '\u00E4': 'a',
	    '\u01DF': 'a',
	    '\u1EA3': 'a',
	    '\u00E5': 'a',
	    '\u01FB': 'a',
	    '\u01CE': 'a',
	    '\u0201': 'a',
	    '\u0203': 'a',
	    '\u1EA1': 'a',
	    '\u1EAD': 'a',
	    '\u1EB7': 'a',
	    '\u1E01': 'a',
	    '\u0105': 'a',
	    '\u2C65': 'a',
	    '\u0250': 'a',
	    '\uA733': 'aa',
	    '\u00E6': 'ae',
	    '\u01FD': 'ae',
	    '\u01E3': 'ae',
	    '\uA735': 'ao',
	    '\uA737': 'au',
	    '\uA739': 'av',
	    '\uA73B': 'av',
	    '\uA73D': 'ay',
	    '\u24D1': 'b',
	    '\uFF42': 'b',
	    '\u1E03': 'b',
	    '\u1E05': 'b',
	    '\u1E07': 'b',
	    '\u0180': 'b',
	    '\u0183': 'b',
	    '\u0253': 'b',
	    '\u24D2': 'c',
	    '\uFF43': 'c',
	    '\u0107': 'c',
	    '\u0109': 'c',
	    '\u010B': 'c',
	    '\u010D': 'c',
	    '\u00E7': 'c',
	    '\u1E09': 'c',
	    '\u0188': 'c',
	    '\u023C': 'c',
	    '\uA73F': 'c',
	    '\u2184': 'c',
	    '\u24D3': 'd',
	    '\uFF44': 'd',
	    '\u1E0B': 'd',
	    '\u010F': 'd',
	    '\u1E0D': 'd',
	    '\u1E11': 'd',
	    '\u1E13': 'd',
	    '\u1E0F': 'd',
	    '\u0111': 'd',
	    '\u018C': 'd',
	    '\u0256': 'd',
	    '\u0257': 'd',
	    '\uA77A': 'd',
	    '\u01F3': 'dz',
	    '\u01C6': 'dz',
	    '\u24D4': 'e',
	    '\uFF45': 'e',
	    '\u00E8': 'e',
	    '\u00E9': 'e',
	    '\u00EA': 'e',
	    '\u1EC1': 'e',
	    '\u1EBF': 'e',
	    '\u1EC5': 'e',
	    '\u1EC3': 'e',
	    '\u1EBD': 'e',
	    '\u0113': 'e',
	    '\u1E15': 'e',
	    '\u1E17': 'e',
	    '\u0115': 'e',
	    '\u0117': 'e',
	    '\u00EB': 'e',
	    '\u1EBB': 'e',
	    '\u011B': 'e',
	    '\u0205': 'e',
	    '\u0207': 'e',
	    '\u1EB9': 'e',
	    '\u1EC7': 'e',
	    '\u0229': 'e',
	    '\u1E1D': 'e',
	    '\u0119': 'e',
	    '\u1E19': 'e',
	    '\u1E1B': 'e',
	    '\u0247': 'e',
	    '\u025B': 'e',
	    '\u01DD': 'e',
	    '\u24D5': 'f',
	    '\uFF46': 'f',
	    '\u1E1F': 'f',
	    '\u0192': 'f',
	    '\uA77C': 'f',
	    '\u24D6': 'g',
	    '\uFF47': 'g',
	    '\u01F5': 'g',
	    '\u011D': 'g',
	    '\u1E21': 'g',
	    '\u011F': 'g',
	    '\u0121': 'g',
	    '\u01E7': 'g',
	    '\u0123': 'g',
	    '\u01E5': 'g',
	    '\u0260': 'g',
	    '\uA7A1': 'g',
	    '\u1D79': 'g',
	    '\uA77F': 'g',
	    '\u24D7': 'h',
	    '\uFF48': 'h',
	    '\u0125': 'h',
	    '\u1E23': 'h',
	    '\u1E27': 'h',
	    '\u021F': 'h',
	    '\u1E25': 'h',
	    '\u1E29': 'h',
	    '\u1E2B': 'h',
	    '\u1E96': 'h',
	    '\u0127': 'h',
	    '\u2C68': 'h',
	    '\u2C76': 'h',
	    '\u0265': 'h',
	    '\u0195': 'hv',
	    '\u24D8': 'i',
	    '\uFF49': 'i',
	    '\u00EC': 'i',
	    '\u00ED': 'i',
	    '\u00EE': 'i',
	    '\u0129': 'i',
	    '\u012B': 'i',
	    '\u012D': 'i',
	    '\u00EF': 'i',
	    '\u1E2F': 'i',
	    '\u1EC9': 'i',
	    '\u01D0': 'i',
	    '\u0209': 'i',
	    '\u020B': 'i',
	    '\u1ECB': 'i',
	    '\u012F': 'i',
	    '\u1E2D': 'i',
	    '\u0268': 'i',
	    '\u0131': 'i',
	    '\u24D9': 'j',
	    '\uFF4A': 'j',
	    '\u0135': 'j',
	    '\u01F0': 'j',
	    '\u0249': 'j',
	    '\u24DA': 'k',
	    '\uFF4B': 'k',
	    '\u1E31': 'k',
	    '\u01E9': 'k',
	    '\u1E33': 'k',
	    '\u0137': 'k',
	    '\u1E35': 'k',
	    '\u0199': 'k',
	    '\u2C6A': 'k',
	    '\uA741': 'k',
	    '\uA743': 'k',
	    '\uA745': 'k',
	    '\uA7A3': 'k',
	    '\u24DB': 'l',
	    '\uFF4C': 'l',
	    '\u0140': 'l',
	    '\u013A': 'l',
	    '\u013E': 'l',
	    '\u1E37': 'l',
	    '\u1E39': 'l',
	    '\u013C': 'l',
	    '\u1E3D': 'l',
	    '\u1E3B': 'l',
	    '\u017F': 'l',
	    '\u0142': 'l',
	    '\u019A': 'l',
	    '\u026B': 'l',
	    '\u2C61': 'l',
	    '\uA749': 'l',
	    '\uA781': 'l',
	    '\uA747': 'l',
	    '\u01C9': 'lj',
	    '\u24DC': 'm',
	    '\uFF4D': 'm',
	    '\u1E3F': 'm',
	    '\u1E41': 'm',
	    '\u1E43': 'm',
	    '\u0271': 'm',
	    '\u026F': 'm',
	    '\u24DD': 'n',
	    '\uFF4E': 'n',
	    '\u01F9': 'n',
	    '\u0144': 'n',
	    '\u00F1': 'n',
	    '\u1E45': 'n',
	    '\u0148': 'n',
	    '\u1E47': 'n',
	    '\u0146': 'n',
	    '\u1E4B': 'n',
	    '\u1E49': 'n',
	    '\u019E': 'n',
	    '\u0272': 'n',
	    '\u0149': 'n',
	    '\uA791': 'n',
	    '\uA7A5': 'n',
	    '\u01CC': 'nj',
	    '\u24DE': 'o',
	    '\uFF4F': 'o',
	    '\u00F2': 'o',
	    '\u00F3': 'o',
	    '\u00F4': 'o',
	    '\u1ED3': 'o',
	    '\u1ED1': 'o',
	    '\u1ED7': 'o',
	    '\u1ED5': 'o',
	    '\u00F5': 'o',
	    '\u1E4D': 'o',
	    '\u022D': 'o',
	    '\u1E4F': 'o',
	    '\u014D': 'o',
	    '\u1E51': 'o',
	    '\u1E53': 'o',
	    '\u014F': 'o',
	    '\u022F': 'o',
	    '\u0231': 'o',
	    '\u00F6': 'o',
	    '\u022B': 'o',
	    '\u1ECF': 'o',
	    '\u0151': 'o',
	    '\u01D2': 'o',
	    '\u020D': 'o',
	    '\u020F': 'o',
	    '\u01A1': 'o',
	    '\u1EDD': 'o',
	    '\u1EDB': 'o',
	    '\u1EE1': 'o',
	    '\u1EDF': 'o',
	    '\u1EE3': 'o',
	    '\u1ECD': 'o',
	    '\u1ED9': 'o',
	    '\u01EB': 'o',
	    '\u01ED': 'o',
	    '\u00F8': 'o',
	    '\u01FF': 'o',
	    '\u0254': 'o',
	    '\uA74B': 'o',
	    '\uA74D': 'o',
	    '\u0275': 'o',
	    '\u01A3': 'oi',
	    '\u0223': 'ou',
	    '\uA74F': 'oo',
	    '\u24DF': 'p',
	    '\uFF50': 'p',
	    '\u1E55': 'p',
	    '\u1E57': 'p',
	    '\u01A5': 'p',
	    '\u1D7D': 'p',
	    '\uA751': 'p',
	    '\uA753': 'p',
	    '\uA755': 'p',
	    '\u24E0': 'q',
	    '\uFF51': 'q',
	    '\u024B': 'q',
	    '\uA757': 'q',
	    '\uA759': 'q',
	    '\u24E1': 'r',
	    '\uFF52': 'r',
	    '\u0155': 'r',
	    '\u1E59': 'r',
	    '\u0159': 'r',
	    '\u0211': 'r',
	    '\u0213': 'r',
	    '\u1E5B': 'r',
	    '\u1E5D': 'r',
	    '\u0157': 'r',
	    '\u1E5F': 'r',
	    '\u024D': 'r',
	    '\u027D': 'r',
	    '\uA75B': 'r',
	    '\uA7A7': 'r',
	    '\uA783': 'r',
	    '\u24E2': 's',
	    '\uFF53': 's',
	    '\u00DF': 's',
	    '\u015B': 's',
	    '\u1E65': 's',
	    '\u015D': 's',
	    '\u1E61': 's',
	    '\u0161': 's',
	    '\u1E67': 's',
	    '\u1E63': 's',
	    '\u1E69': 's',
	    '\u0219': 's',
	    '\u015F': 's',
	    '\u023F': 's',
	    '\uA7A9': 's',
	    '\uA785': 's',
	    '\u1E9B': 's',
	    '\u24E3': 't',
	    '\uFF54': 't',
	    '\u1E6B': 't',
	    '\u1E97': 't',
	    '\u0165': 't',
	    '\u1E6D': 't',
	    '\u021B': 't',
	    '\u0163': 't',
	    '\u1E71': 't',
	    '\u1E6F': 't',
	    '\u0167': 't',
	    '\u01AD': 't',
	    '\u0288': 't',
	    '\u2C66': 't',
	    '\uA787': 't',
	    '\uA729': 'tz',
	    '\u24E4': 'u',
	    '\uFF55': 'u',
	    '\u00F9': 'u',
	    '\u00FA': 'u',
	    '\u00FB': 'u',
	    '\u0169': 'u',
	    '\u1E79': 'u',
	    '\u016B': 'u',
	    '\u1E7B': 'u',
	    '\u016D': 'u',
	    '\u00FC': 'u',
	    '\u01DC': 'u',
	    '\u01D8': 'u',
	    '\u01D6': 'u',
	    '\u01DA': 'u',
	    '\u1EE7': 'u',
	    '\u016F': 'u',
	    '\u0171': 'u',
	    '\u01D4': 'u',
	    '\u0215': 'u',
	    '\u0217': 'u',
	    '\u01B0': 'u',
	    '\u1EEB': 'u',
	    '\u1EE9': 'u',
	    '\u1EEF': 'u',
	    '\u1EED': 'u',
	    '\u1EF1': 'u',
	    '\u1EE5': 'u',
	    '\u1E73': 'u',
	    '\u0173': 'u',
	    '\u1E77': 'u',
	    '\u1E75': 'u',
	    '\u0289': 'u',
	    '\u24E5': 'v',
	    '\uFF56': 'v',
	    '\u1E7D': 'v',
	    '\u1E7F': 'v',
	    '\u028B': 'v',
	    '\uA75F': 'v',
	    '\u028C': 'v',
	    '\uA761': 'vy',
	    '\u24E6': 'w',
	    '\uFF57': 'w',
	    '\u1E81': 'w',
	    '\u1E83': 'w',
	    '\u0175': 'w',
	    '\u1E87': 'w',
	    '\u1E85': 'w',
	    '\u1E98': 'w',
	    '\u1E89': 'w',
	    '\u2C73': 'w',
	    '\u24E7': 'x',
	    '\uFF58': 'x',
	    '\u1E8B': 'x',
	    '\u1E8D': 'x',
	    '\u24E8': 'y',
	    '\uFF59': 'y',
	    '\u1EF3': 'y',
	    '\u00FD': 'y',
	    '\u0177': 'y',
	    '\u1EF9': 'y',
	    '\u0233': 'y',
	    '\u1E8F': 'y',
	    '\u00FF': 'y',
	    '\u1EF7': 'y',
	    '\u1E99': 'y',
	    '\u1EF5': 'y',
	    '\u01B4': 'y',
	    '\u024F': 'y',
	    '\u1EFF': 'y',
	    '\u24E9': 'z',
	    '\uFF5A': 'z',
	    '\u017A': 'z',
	    '\u1E91': 'z',
	    '\u017C': 'z',
	    '\u017E': 'z',
	    '\u1E93': 'z',
	    '\u1E95': 'z',
	    '\u01B6': 'z',
	    '\u0225': 'z',
	    '\u0240': 'z',
	    '\u2C6C': 'z',
	    '\uA763': 'z',
	    '\u0386': '\u0391',
	    '\u0388': '\u0395',
	    '\u0389': '\u0397',
	    '\u038A': '\u0399',
	    '\u03AA': '\u0399',
	    '\u038C': '\u039F',
	    '\u038E': '\u03A5',
	    '\u03AB': '\u03A5',
	    '\u038F': '\u03A9',
	    '\u03AC': '\u03B1',
	    '\u03AD': '\u03B5',
	    '\u03AE': '\u03B7',
	    '\u03AF': '\u03B9',
	    '\u03CA': '\u03B9',
	    '\u0390': '\u03B9',
	    '\u03CC': '\u03BF',
	    '\u03CD': '\u03C5',
	    '\u03CB': '\u03C5',
	    '\u03B0': '\u03C5',
	    '\u03C9': '\u03C9',
	    '\u03C2': '\u03C3'
	  };

	  return diacritics;
	});

	S2.define('select2/data/base',[
	  '../utils'
	], function (Utils) {
	  function BaseAdapter ($element, options) {
	    BaseAdapter.__super__.constructor.call(this);
	  }

	  Utils.Extend(BaseAdapter, Utils.Observable);

	  BaseAdapter.prototype.current = function (callback) {
	    throw new Error('The `current` method must be defined in child classes.');
	  };

	  BaseAdapter.prototype.query = function (params, callback) {
	    throw new Error('The `query` method must be defined in child classes.');
	  };

	  BaseAdapter.prototype.bind = function (container, $container) {
	    // Can be implemented in subclasses
	  };

	  BaseAdapter.prototype.destroy = function () {
	    // Can be implemented in subclasses
	  };

	  BaseAdapter.prototype.generateResultId = function (container, data) {
	    var id = container.id + '-result-';

	    id += Utils.generateChars(4);

	    if (data.id != null) {
	      id += '-' + data.id.toString();
	    } else {
	      id += '-' + Utils.generateChars(4);
	    }
	    return id;
	  };

	  return BaseAdapter;
	});

	S2.define('select2/data/select',[
	  './base',
	  '../utils',
	  'jquery'
	], function (BaseAdapter, Utils, $) {
	  function SelectAdapter ($element, options) {
	    this.$element = $element;
	    this.options = options;

	    SelectAdapter.__super__.constructor.call(this);
	  }

	  Utils.Extend(SelectAdapter, BaseAdapter);

	  SelectAdapter.prototype.current = function (callback) {
	    var data = [];
	    var self = this;

	    this.$element.find(':selected').each(function () {
	      var $option = $(this);

	      var option = self.item($option);

	      data.push(option);
	    });

	    callback(data);
	  };

	  SelectAdapter.prototype.select = function (data) {
	    var self = this;

	    data.selected = true;

	    // If data.element is a DOM node, use it instead
	    if ($(data.element).is('option')) {
	      data.element.selected = true;

	      this.$element.trigger('change');

	      return;
	    }

	    if (this.$element.prop('multiple')) {
	      this.current(function (currentData) {
	        var val = [];

	        data = [data];
	        data.push.apply(data, currentData);

	        for (var d = 0; d < data.length; d++) {
	          var id = data[d].id;

	          if ($.inArray(id, val) === -1) {
	            val.push(id);
	          }
	        }

	        self.$element.val(val);
	        self.$element.trigger('change');
	      });
	    } else {
	      var val = data.id;

	      this.$element.val(val);
	      this.$element.trigger('change');
	    }
	  };

	  SelectAdapter.prototype.unselect = function (data) {
	    var self = this;

	    if (!this.$element.prop('multiple')) {
	      return;
	    }

	    data.selected = false;

	    if ($(data.element).is('option')) {
	      data.element.selected = false;

	      this.$element.trigger('change');

	      return;
	    }

	    this.current(function (currentData) {
	      var val = [];

	      for (var d = 0; d < currentData.length; d++) {
	        var id = currentData[d].id;

	        if (id !== data.id && $.inArray(id, val) === -1) {
	          val.push(id);
	        }
	      }

	      self.$element.val(val);

	      self.$element.trigger('change');
	    });
	  };

	  SelectAdapter.prototype.bind = function (container, $container) {
	    var self = this;

	    this.container = container;

	    container.on('select', function (params) {
	      self.select(params.data);
	    });

	    container.on('unselect', function (params) {
	      self.unselect(params.data);
	    });
	  };

	  SelectAdapter.prototype.destroy = function () {
	    // Remove anything added to child elements
	    this.$element.find('*').each(function () {
	      // Remove any custom data set by Select2
	      $.removeData(this, 'data');
	    });
	  };

	  SelectAdapter.prototype.query = function (params, callback) {
	    var data = [];
	    var self = this;

	    var $options = this.$element.children();

	    $options.each(function () {
	      var $option = $(this);

	      if (!$option.is('option') && !$option.is('optgroup')) {
	        return;
	      }

	      var option = self.item($option);

	      var matches = self.matches(params, option);

	      if (matches !== null) {
	        data.push(matches);
	      }
	    });

	    callback({
	      results: data
	    });
	  };

	  SelectAdapter.prototype.addOptions = function ($options) {
	    Utils.appendMany(this.$element, $options);
	  };

	  SelectAdapter.prototype.option = function (data) {
	    var option;

	    if (data.children) {
	      option = document.createElement('optgroup');
	      option.label = data.text;
	    } else {
	      option = document.createElement('option');

	      if (option.textContent !== undefined) {
	        option.textContent = data.text;
	      } else {
	        option.innerText = data.text;
	      }
	    }

	    if (data.id) {
	      option.value = data.id;
	    }

	    if (data.disabled) {
	      option.disabled = true;
	    }

	    if (data.selected) {
	      option.selected = true;
	    }

	    if (data.title) {
	      option.title = data.title;
	    }

	    var $option = $(option);

	    var normalizedData = this._normalizeItem(data);
	    normalizedData.element = option;

	    // Override the option's data with the combined data
	    $.data(option, 'data', normalizedData);

	    return $option;
	  };

	  SelectAdapter.prototype.item = function ($option) {
	    var data = {};

	    data = $.data($option[0], 'data');

	    if (data != null) {
	      return data;
	    }

	    if ($option.is('option')) {
	      data = {
	        id: $option.val(),
	        text: $option.text(),
	        disabled: $option.prop('disabled'),
	        selected: $option.prop('selected'),
	        title: $option.prop('title')
	      };
	    } else if ($option.is('optgroup')) {
	      data = {
	        text: $option.prop('label'),
	        children: [],
	        title: $option.prop('title')
	      };

	      var $children = $option.children('option');
	      var children = [];

	      for (var c = 0; c < $children.length; c++) {
	        var $child = $($children[c]);

	        var child = this.item($child);

	        children.push(child);
	      }

	      data.children = children;
	    }

	    data = this._normalizeItem(data);
	    data.element = $option[0];

	    $.data($option[0], 'data', data);

	    return data;
	  };

	  SelectAdapter.prototype._normalizeItem = function (item) {
	    if (!$.isPlainObject(item)) {
	      item = {
	        id: item,
	        text: item
	      };
	    }

	    item = $.extend({}, {
	      text: ''
	    }, item);

	    var defaults = {
	      selected: false,
	      disabled: false
	    };

	    if (item.id != null) {
	      item.id = item.id.toString();
	    }

	    if (item.text != null) {
	      item.text = item.text.toString();
	    }

	    if (item._resultId == null && item.id && this.container != null) {
	      item._resultId = this.generateResultId(this.container, item);
	    }

	    return $.extend({}, defaults, item);
	  };

	  SelectAdapter.prototype.matches = function (params, data) {
	    var matcher = this.options.get('matcher');

	    return matcher(params, data);
	  };

	  return SelectAdapter;
	});

	S2.define('select2/data/array',[
	  './select',
	  '../utils',
	  'jquery'
	], function (SelectAdapter, Utils, $) {
	  function ArrayAdapter ($element, options) {
	    var data = options.get('data') || [];

	    ArrayAdapter.__super__.constructor.call(this, $element, options);

	    this.addOptions(this.convertToOptions(data));
	  }

	  Utils.Extend(ArrayAdapter, SelectAdapter);

	  ArrayAdapter.prototype.select = function (data) {
	    var $option = this.$element.find('option').filter(function (i, elm) {
	      return elm.value == data.id.toString();
	    });

	    if ($option.length === 0) {
	      $option = this.option(data);

	      this.addOptions($option);
	    }

	    ArrayAdapter.__super__.select.call(this, data);
	  };

	  ArrayAdapter.prototype.convertToOptions = function (data) {
	    var self = this;

	    var $existing = this.$element.find('option');
	    var existingIds = $existing.map(function () {
	      return self.item($(this)).id;
	    }).get();

	    var $options = [];

	    // Filter out all items except for the one passed in the argument
	    function onlyItem (item) {
	      return function () {
	        return $(this).val() == item.id;
	      };
	    }

	    for (var d = 0; d < data.length; d++) {
	      var item = this._normalizeItem(data[d]);

	      // Skip items which were pre-loaded, only merge the data
	      if ($.inArray(item.id, existingIds) >= 0) {
	        var $existingOption = $existing.filter(onlyItem(item));

	        var existingData = this.item($existingOption);
	        var newData = $.extend(true, {}, item, existingData);

	        var $newOption = this.option(newData);

	        $existingOption.replaceWith($newOption);

	        continue;
	      }

	      var $option = this.option(item);

	      if (item.children) {
	        var $children = this.convertToOptions(item.children);

	        Utils.appendMany($option, $children);
	      }

	      $options.push($option);
	    }

	    return $options;
	  };

	  return ArrayAdapter;
	});

	S2.define('select2/data/ajax',[
	  './array',
	  '../utils',
	  'jquery'
	], function (ArrayAdapter, Utils, $) {
	  function AjaxAdapter ($element, options) {
	    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

	    if (this.ajaxOptions.processResults != null) {
	      this.processResults = this.ajaxOptions.processResults;
	    }

	    AjaxAdapter.__super__.constructor.call(this, $element, options);
	  }

	  Utils.Extend(AjaxAdapter, ArrayAdapter);

	  AjaxAdapter.prototype._applyDefaults = function (options) {
	    var defaults = {
	      data: function (params) {
	        return $.extend({}, params, {
	          q: params.term
	        });
	      },
	      transport: function (params, success, failure) {
	        var $request = $.ajax(params);

	        $request.then(success);
	        $request.fail(failure);

	        return $request;
	      }
	    };

	    return $.extend({}, defaults, options, true);
	  };

	  AjaxAdapter.prototype.processResults = function (results) {
	    return results;
	  };

	  AjaxAdapter.prototype.query = function (params, callback) {
	    var matches = [];
	    var self = this;

	    if (this._request != null) {
	      // JSONP requests cannot always be aborted
	      if ($.isFunction(this._request.abort)) {
	        this._request.abort();
	      }

	      this._request = null;
	    }

	    var options = $.extend({
	      type: 'GET'
	    }, this.ajaxOptions);

	    if (typeof options.url === 'function') {
	      options.url = options.url.call(this.$element, params);
	    }

	    if (typeof options.data === 'function') {
	      options.data = options.data.call(this.$element, params);
	    }

	    function request () {
	      var $request = options.transport(options, function (data) {
	        var results = self.processResults(data, params);

	        if (self.options.get('debug') && window.console && console.error) {
	          // Check to make sure that the response included a `results` key.
	          if (!results || !results.results || !$.isArray(results.results)) {
	            console.error(
	              'Select2: The AJAX results did not return an array in the ' +
	              '`results` key of the response.'
	            );
	          }
	        }

	        callback(results);
	      }, function () {
	        // Attempt to detect if a request was aborted
	        // Only works if the transport exposes a status property
	        if ($request.status && $request.status === '0') {
	          return;
	        }

	        self.trigger('results:message', {
	          message: 'errorLoading'
	        });
	      });

	      self._request = $request;
	    }

	    if (this.ajaxOptions.delay && params.term != null) {
	      if (this._queryTimeout) {
	        window.clearTimeout(this._queryTimeout);
	      }

	      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
	    } else {
	      request();
	    }
	  };

	  return AjaxAdapter;
	});

	S2.define('select2/data/tags',[
	  'jquery'
	], function ($) {
	  function Tags (decorated, $element, options) {
	    var tags = options.get('tags');

	    var createTag = options.get('createTag');

	    if (createTag !== undefined) {
	      this.createTag = createTag;
	    }

	    var insertTag = options.get('insertTag');

	    if (insertTag !== undefined) {
	        this.insertTag = insertTag;
	    }

	    decorated.call(this, $element, options);

	    if ($.isArray(tags)) {
	      for (var t = 0; t < tags.length; t++) {
	        var tag = tags[t];
	        var item = this._normalizeItem(tag);

	        var $option = this.option(item);

	        this.$element.append($option);
	      }
	    }
	  }

	  Tags.prototype.query = function (decorated, params, callback) {
	    var self = this;

	    this._removeOldTags();

	    if (params.term == null || params.page != null) {
	      decorated.call(this, params, callback);
	      return;
	    }

	    function wrapper (obj, child) {
	      var data = obj.results;

	      for (var i = 0; i < data.length; i++) {
	        var option = data[i];

	        var checkChildren = (
	          option.children != null &&
	          !wrapper({
	            results: option.children
	          }, true)
	        );

	        var checkText = option.text === params.term;

	        if (checkText || checkChildren) {
	          if (child) {
	            return false;
	          }

	          obj.data = data;
	          callback(obj);

	          return;
	        }
	      }

	      if (child) {
	        return true;
	      }

	      var tag = self.createTag(params);

	      if (tag != null) {
	        var $option = self.option(tag);
	        $option.attr('data-select2-tag', true);

	        self.addOptions([$option]);

	        self.insertTag(data, tag);
	      }

	      obj.results = data;

	      callback(obj);
	    }

	    decorated.call(this, params, wrapper);
	  };

	  Tags.prototype.createTag = function (decorated, params) {
	    var term = $.trim(params.term);

	    if (term === '') {
	      return null;
	    }

	    return {
	      id: term,
	      text: term
	    };
	  };

	  Tags.prototype.insertTag = function (_, data, tag) {
	    data.unshift(tag);
	  };

	  Tags.prototype._removeOldTags = function (_) {
	    var tag = this._lastTag;

	    var $options = this.$element.find('option[data-select2-tag]');

	    $options.each(function () {
	      if (this.selected) {
	        return;
	      }

	      $(this).remove();
	    });
	  };

	  return Tags;
	});

	S2.define('select2/data/tokenizer',[
	  'jquery'
	], function ($) {
	  function Tokenizer (decorated, $element, options) {
	    var tokenizer = options.get('tokenizer');

	    if (tokenizer !== undefined) {
	      this.tokenizer = tokenizer;
	    }

	    decorated.call(this, $element, options);
	  }

	  Tokenizer.prototype.bind = function (decorated, container, $container) {
	    decorated.call(this, container, $container);

	    this.$search =  container.dropdown.$search || container.selection.$search ||
	      $container.find('.select2-search__field');
	  };

	  Tokenizer.prototype.query = function (decorated, params, callback) {
	    var self = this;

	    function createAndSelect (data) {
	      // Normalize the data object so we can use it for checks
	      var item = self._normalizeItem(data);

	      // Check if the data object already exists as a tag
	      // Select it if it doesn't
	      var $existingOptions = self.$element.find('option').filter(function () {
	        return $(this).val() === item.id;
	      });

	      // If an existing option wasn't found for it, create the option
	      if (!$existingOptions.length) {
	        var $option = self.option(item);
	        $option.attr('data-select2-tag', true);

	        self._removeOldTags();
	        self.addOptions([$option]);
	      }

	      // Select the item, now that we know there is an option for it
	      select(item);
	    }

	    function select (data) {
	      self.trigger('select', {
	        data: data
	      });
	    }

	    params.term = params.term || '';

	    var tokenData = this.tokenizer(params, this.options, createAndSelect);

	    if (tokenData.term !== params.term) {
	      // Replace the search term if we have the search box
	      if (this.$search.length) {
	        this.$search.val(tokenData.term);
	        this.$search.focus();
	      }

	      params.term = tokenData.term;
	    }

	    decorated.call(this, params, callback);
	  };

	  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
	    var separators = options.get('tokenSeparators') || [];
	    var term = params.term;
	    var i = 0;

	    var createTag = this.createTag || function (params) {
	      return {
	        id: params.term,
	        text: params.term
	      };
	    };

	    while (i < term.length) {
	      var termChar = term[i];

	      if ($.inArray(termChar, separators) === -1) {
	        i++;

	        continue;
	      }

	      var part = term.substr(0, i);
	      var partParams = $.extend({}, params, {
	        term: part
	      });

	      var data = createTag(partParams);

	      if (data == null) {
	        i++;
	        continue;
	      }

	      callback(data);

	      // Reset the term to not include the tokenized portion
	      term = term.substr(i + 1) || '';
	      i = 0;
	    }

	    return {
	      term: term
	    };
	  };

	  return Tokenizer;
	});

	S2.define('select2/data/minimumInputLength',[

	], function () {
	  function MinimumInputLength (decorated, $e, options) {
	    this.minimumInputLength = options.get('minimumInputLength');

	    decorated.call(this, $e, options);
	  }

	  MinimumInputLength.prototype.query = function (decorated, params, callback) {
	    params.term = params.term || '';

	    if (params.term.length < this.minimumInputLength) {
	      this.trigger('results:message', {
	        message: 'inputTooShort',
	        args: {
	          minimum: this.minimumInputLength,
	          input: params.term,
	          params: params
	        }
	      });

	      return;
	    }

	    decorated.call(this, params, callback);
	  };

	  return MinimumInputLength;
	});

	S2.define('select2/data/maximumInputLength',[

	], function () {
	  function MaximumInputLength (decorated, $e, options) {
	    this.maximumInputLength = options.get('maximumInputLength');

	    decorated.call(this, $e, options);
	  }

	  MaximumInputLength.prototype.query = function (decorated, params, callback) {
	    params.term = params.term || '';

	    if (this.maximumInputLength > 0 &&
	        params.term.length > this.maximumInputLength) {
	      this.trigger('results:message', {
	        message: 'inputTooLong',
	        args: {
	          maximum: this.maximumInputLength,
	          input: params.term,
	          params: params
	        }
	      });

	      return;
	    }

	    decorated.call(this, params, callback);
	  };

	  return MaximumInputLength;
	});

	S2.define('select2/data/maximumSelectionLength',[

	], function (){
	  function MaximumSelectionLength (decorated, $e, options) {
	    this.maximumSelectionLength = options.get('maximumSelectionLength');

	    decorated.call(this, $e, options);
	  }

	  MaximumSelectionLength.prototype.query =
	    function (decorated, params, callback) {
	      var self = this;

	      this.current(function (currentData) {
	        var count = currentData != null ? currentData.length : 0;
	        if (self.maximumSelectionLength > 0 &&
	          count >= self.maximumSelectionLength) {
	          self.trigger('results:message', {
	            message: 'maximumSelected',
	            args: {
	              maximum: self.maximumSelectionLength
	            }
	          });
	          return;
	        }
	        decorated.call(self, params, callback);
	      });
	  };

	  return MaximumSelectionLength;
	});

	S2.define('select2/dropdown',[
	  'jquery',
	  './utils'
	], function ($, Utils) {
	  function Dropdown ($element, options) {
	    this.$element = $element;
	    this.options = options;

	    Dropdown.__super__.constructor.call(this);
	  }

	  Utils.Extend(Dropdown, Utils.Observable);

	  Dropdown.prototype.render = function () {
	    var $dropdown = $(
	      '<span class="select2-dropdown">' +
	        '<span class="select2-results"></span>' +
	      '</span>'
	    );

	    $dropdown.attr('dir', this.options.get('dir'));

	    this.$dropdown = $dropdown;

	    return $dropdown;
	  };

	  Dropdown.prototype.bind = function () {
	    // Should be implemented in subclasses
	  };

	  Dropdown.prototype.position = function ($dropdown, $container) {
	    // Should be implmented in subclasses
	  };

	  Dropdown.prototype.destroy = function () {
	    // Remove the dropdown from the DOM
	    this.$dropdown.remove();
	  };

	  return Dropdown;
	});

	S2.define('select2/dropdown/search',[
	  'jquery',
	  '../utils'
	], function ($, Utils) {
	  function Search () { }

	  Search.prototype.render = function (decorated) {
	    var $rendered = decorated.call(this);

	    var $search = $(
	      '<span class="select2-search select2-search--dropdown">' +
	        '<input class="select2-search__field" type="search" tabindex="-1"' +
	        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
	        ' spellcheck="false" role="textbox" />' +
	      '</span>'
	    );

	    this.$searchContainer = $search;
	    this.$search = $search.find('input');

	    $rendered.prepend($search);

	    return $rendered;
	  };

	  Search.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    this.$search.on('keydown', function (evt) {
	      self.trigger('keypress', evt);

	      self._keyUpPrevented = evt.isDefaultPrevented();
	    });

	    // Workaround for browsers which do not support the `input` event
	    // This will prevent double-triggering of events for browsers which support
	    // both the `keyup` and `input` events.
	    this.$search.on('input', function (evt) {
	      // Unbind the duplicated `keyup` event
	      $(this).off('keyup');
	    });

	    this.$search.on('keyup input', function (evt) {
	      self.handleSearch(evt);
	    });

	    container.on('open', function () {
	      self.$search.attr('tabindex', 0);

	      self.$search.focus();

	      window.setTimeout(function () {
	        self.$search.focus();
	      }, 0);
	    });

	    container.on('close', function () {
	      self.$search.attr('tabindex', -1);

	      self.$search.val('');
	    });

	    container.on('focus', function () {
	      if (container.isOpen()) {
	        self.$search.focus();
	      }
	    });

	    container.on('results:all', function (params) {
	      if (params.query.term == null || params.query.term === '') {
	        var showSearch = self.showSearch(params);

	        if (showSearch) {
	          self.$searchContainer.removeClass('select2-search--hide');
	        } else {
	          self.$searchContainer.addClass('select2-search--hide');
	        }
	      }
	    });
	  };

	  Search.prototype.handleSearch = function (evt) {
	    if (!this._keyUpPrevented) {
	      var input = this.$search.val();

	      this.trigger('query', {
	        term: input
	      });
	    }

	    this._keyUpPrevented = false;
	  };

	  Search.prototype.showSearch = function (_, params) {
	    return true;
	  };

	  return Search;
	});

	S2.define('select2/dropdown/hidePlaceholder',[

	], function () {
	  function HidePlaceholder (decorated, $element, options, dataAdapter) {
	    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

	    decorated.call(this, $element, options, dataAdapter);
	  }

	  HidePlaceholder.prototype.append = function (decorated, data) {
	    data.results = this.removePlaceholder(data.results);

	    decorated.call(this, data);
	  };

	  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
	    if (typeof placeholder === 'string') {
	      placeholder = {
	        id: '',
	        text: placeholder
	      };
	    }

	    return placeholder;
	  };

	  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
	    var modifiedData = data.slice(0);

	    for (var d = data.length - 1; d >= 0; d--) {
	      var item = data[d];

	      if (this.placeholder.id === item.id) {
	        modifiedData.splice(d, 1);
	      }
	    }

	    return modifiedData;
	  };

	  return HidePlaceholder;
	});

	S2.define('select2/dropdown/infiniteScroll',[
	  'jquery'
	], function ($) {
	  function InfiniteScroll (decorated, $element, options, dataAdapter) {
	    this.lastParams = {};

	    decorated.call(this, $element, options, dataAdapter);

	    this.$loadingMore = this.createLoadingMore();
	    this.loading = false;
	  }

	  InfiniteScroll.prototype.append = function (decorated, data) {
	    this.$loadingMore.remove();
	    this.loading = false;

	    decorated.call(this, data);

	    if (this.showLoadingMore(data)) {
	      this.$results.append(this.$loadingMore);
	    }
	  };

	  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('query', function (params) {
	      self.lastParams = params;
	      self.loading = true;
	    });

	    container.on('query:append', function (params) {
	      self.lastParams = params;
	      self.loading = true;
	    });

	    this.$results.on('scroll', function () {
	      var isLoadMoreVisible = $.contains(
	        document.documentElement,
	        self.$loadingMore[0]
	      );

	      if (self.loading || !isLoadMoreVisible) {
	        return;
	      }

	      var currentOffset = self.$results.offset().top +
	        self.$results.outerHeight(false);
	      var loadingMoreOffset = self.$loadingMore.offset().top +
	        self.$loadingMore.outerHeight(false);

	      if (currentOffset + 50 >= loadingMoreOffset) {
	        self.loadMore();
	      }
	    });
	  };

	  InfiniteScroll.prototype.loadMore = function () {
	    this.loading = true;

	    var params = $.extend({}, {page: 1}, this.lastParams);

	    params.page++;

	    this.trigger('query:append', params);
	  };

	  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
	    return data.pagination && data.pagination.more;
	  };

	  InfiniteScroll.prototype.createLoadingMore = function () {
	    var $option = $(
	      '<li ' +
	      'class="select2-results__option select2-results__option--load-more"' +
	      'role="treeitem" aria-disabled="true"></li>'
	    );

	    var message = this.options.get('translations').get('loadingMore');

	    $option.html(message(this.lastParams));

	    return $option;
	  };

	  return InfiniteScroll;
	});

	S2.define('select2/dropdown/attachBody',[
	  'jquery',
	  '../utils'
	], function ($, Utils) {
	  function AttachBody (decorated, $element, options) {
	    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

	    decorated.call(this, $element, options);
	  }

	  AttachBody.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    var setupResultsEvents = false;

	    decorated.call(this, container, $container);

	    container.on('open', function () {
	      self._showDropdown();
	      self._attachPositioningHandler(container);

	      if (!setupResultsEvents) {
	        setupResultsEvents = true;

	        container.on('results:all', function () {
	          self._positionDropdown();
	          self._resizeDropdown();
	        });

	        container.on('results:append', function () {
	          self._positionDropdown();
	          self._resizeDropdown();
	        });
	      }
	    });

	    container.on('close', function () {
	      self._hideDropdown();
	      self._detachPositioningHandler(container);
	    });

	    this.$dropdownContainer.on('mousedown', function (evt) {
	      evt.stopPropagation();
	    });
	  };

	  AttachBody.prototype.destroy = function (decorated) {
	    decorated.call(this);

	    this.$dropdownContainer.remove();
	  };

	  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
	    // Clone all of the container classes
	    $dropdown.attr('class', $container.attr('class'));

	    $dropdown.removeClass('select2');
	    $dropdown.addClass('select2-container--open');

	    $dropdown.css({
	      position: 'absolute',
	      top: -999999
	    });

	    this.$container = $container;
	  };

	  AttachBody.prototype.render = function (decorated) {
	    var $container = $('<span></span>');

	    var $dropdown = decorated.call(this);
	    $container.append($dropdown);

	    this.$dropdownContainer = $container;

	    return $container;
	  };

	  AttachBody.prototype._hideDropdown = function (decorated) {
	    this.$dropdownContainer.detach();
	  };

	  AttachBody.prototype._attachPositioningHandler =
	      function (decorated, container) {
	    var self = this;

	    var scrollEvent = 'scroll.select2.' + container.id;
	    var resizeEvent = 'resize.select2.' + container.id;
	    var orientationEvent = 'orientationchange.select2.' + container.id;

	    var $watchers = this.$container.parents().filter(Utils.hasScroll);
	    $watchers.each(function () {
	      $(this).data('select2-scroll-position', {
	        x: $(this).scrollLeft(),
	        y: $(this).scrollTop()
	      });
	    });

	    $watchers.on(scrollEvent, function (ev) {
	      var position = $(this).data('select2-scroll-position');
	      $(this).scrollTop(position.y);
	    });

	    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
	      function (e) {
	      self._positionDropdown();
	      self._resizeDropdown();
	    });
	  };

	  AttachBody.prototype._detachPositioningHandler =
	      function (decorated, container) {
	    var scrollEvent = 'scroll.select2.' + container.id;
	    var resizeEvent = 'resize.select2.' + container.id;
	    var orientationEvent = 'orientationchange.select2.' + container.id;

	    var $watchers = this.$container.parents().filter(Utils.hasScroll);
	    $watchers.off(scrollEvent);

	    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
	  };

	  AttachBody.prototype._positionDropdown = function () {
	    var $window = $(window);

	    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
	    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

	    var newDirection = null;

	    var offset = this.$container.offset();

	    offset.bottom = offset.top + this.$container.outerHeight(false);

	    var container = {
	      height: this.$container.outerHeight(false)
	    };

	    container.top = offset.top;
	    container.bottom = offset.top + container.height;

	    var dropdown = {
	      height: this.$dropdown.outerHeight(false)
	    };

	    var viewport = {
	      top: $window.scrollTop(),
	      bottom: $window.scrollTop() + $window.height()
	    };

	    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
	    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

	    var css = {
	      left: offset.left,
	      top: container.bottom
	    };

	    // Determine what the parent element is to use for calciulating the offset
	    var $offsetParent = this.$dropdownParent;

	    // For statically positoned elements, we need to get the element
	    // that is determining the offset
	    if ($offsetParent.css('position') === 'static') {
	      $offsetParent = $offsetParent.offsetParent();
	    }

	    var parentOffset = $offsetParent.offset();

	    css.top -= parentOffset.top;
	    css.left -= parentOffset.left;

	    if (!isCurrentlyAbove && !isCurrentlyBelow) {
	      newDirection = 'below';
	    }

	    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
	      newDirection = 'above';
	    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
	      newDirection = 'below';
	    }

	    if (newDirection == 'above' ||
	      (isCurrentlyAbove && newDirection !== 'below')) {
	      css.top = container.top - parentOffset.top - dropdown.height;
	    }

	    if (newDirection != null) {
	      this.$dropdown
	        .removeClass('select2-dropdown--below select2-dropdown--above')
	        .addClass('select2-dropdown--' + newDirection);
	      this.$container
	        .removeClass('select2-container--below select2-container--above')
	        .addClass('select2-container--' + newDirection);
	    }

	    this.$dropdownContainer.css(css);
	  };

	  AttachBody.prototype._resizeDropdown = function () {
	    var css = {
	      width: this.$container.outerWidth(false) + 'px'
	    };

	    if (this.options.get('dropdownAutoWidth')) {
	      css.minWidth = css.width;
	      css.position = 'relative';
	      css.width = 'auto';
	    }

	    this.$dropdown.css(css);
	  };

	  AttachBody.prototype._showDropdown = function (decorated) {
	    this.$dropdownContainer.appendTo(this.$dropdownParent);

	    this._positionDropdown();
	    this._resizeDropdown();
	  };

	  return AttachBody;
	});

	S2.define('select2/dropdown/minimumResultsForSearch',[

	], function () {
	  function countResults (data) {
	    var count = 0;

	    for (var d = 0; d < data.length; d++) {
	      var item = data[d];

	      if (item.children) {
	        count += countResults(item.children);
	      } else {
	        count++;
	      }
	    }

	    return count;
	  }

	  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
	    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

	    if (this.minimumResultsForSearch < 0) {
	      this.minimumResultsForSearch = Infinity;
	    }

	    decorated.call(this, $element, options, dataAdapter);
	  }

	  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
	    if (countResults(params.data.results) < this.minimumResultsForSearch) {
	      return false;
	    }

	    return decorated.call(this, params);
	  };

	  return MinimumResultsForSearch;
	});

	S2.define('select2/dropdown/selectOnClose',[

	], function () {
	  function SelectOnClose () { }

	  SelectOnClose.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('close', function (params) {
	      self._handleSelectOnClose(params);
	    });
	  };

	  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
	    if (params && params.originalSelect2Event != null) {
	      var event = params.originalSelect2Event;

	      // Don't select an item if the close event was triggered from a select or
	      // unselect event
	      if (event._type === 'select' || event._type === 'unselect') {
	        return;
	      }
	    }

	    var $highlightedResults = this.getHighlightedResults();

	    // Only select highlighted results
	    if ($highlightedResults.length < 1) {
	      return;
	    }

	    var data = $highlightedResults.data('data');

	    // Don't re-select already selected resulte
	    if (
	      (data.element != null && data.element.selected) ||
	      (data.element == null && data.selected)
	    ) {
	      return;
	    }

	    this.trigger('select', {
	        data: data
	    });
	  };

	  return SelectOnClose;
	});

	S2.define('select2/dropdown/closeOnSelect',[

	], function () {
	  function CloseOnSelect () { }

	  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
	    var self = this;

	    decorated.call(this, container, $container);

	    container.on('select', function (evt) {
	      self._selectTriggered(evt);
	    });

	    container.on('unselect', function (evt) {
	      self._selectTriggered(evt);
	    });
	  };

	  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
	    var originalEvent = evt.originalEvent;

	    // Don't close if the control key is being held
	    if (originalEvent && originalEvent.ctrlKey) {
	      return;
	    }

	    this.trigger('close', {
	      originalEvent: originalEvent,
	      originalSelect2Event: evt
	    });
	  };

	  return CloseOnSelect;
	});

	S2.define('select2/i18n/en',[],function () {
	  // English
	  return {
	    errorLoading: function () {
	      return 'The results could not be loaded.';
	    },
	    inputTooLong: function (args) {
	      var overChars = args.input.length - args.maximum;

	      var message = 'Please delete ' + overChars + ' character';

	      if (overChars != 1) {
	        message += 's';
	      }

	      return message;
	    },
	    inputTooShort: function (args) {
	      var remainingChars = args.minimum - args.input.length;

	      var message = 'Please enter ' + remainingChars + ' or more characters';

	      return message;
	    },
	    loadingMore: function () {
	      return 'Loading more results…';
	    },
	    maximumSelected: function (args) {
	      var message = 'You can only select ' + args.maximum + ' item';

	      if (args.maximum != 1) {
	        message += 's';
	      }

	      return message;
	    },
	    noResults: function () {
	      return 'No results found';
	    },
	    searching: function () {
	      return 'Searching…';
	    }
	  };
	});

	S2.define('select2/defaults',[
	  'jquery',
	  'require',

	  './results',

	  './selection/single',
	  './selection/multiple',
	  './selection/placeholder',
	  './selection/allowClear',
	  './selection/search',
	  './selection/eventRelay',

	  './utils',
	  './translation',
	  './diacritics',

	  './data/select',
	  './data/array',
	  './data/ajax',
	  './data/tags',
	  './data/tokenizer',
	  './data/minimumInputLength',
	  './data/maximumInputLength',
	  './data/maximumSelectionLength',

	  './dropdown',
	  './dropdown/search',
	  './dropdown/hidePlaceholder',
	  './dropdown/infiniteScroll',
	  './dropdown/attachBody',
	  './dropdown/minimumResultsForSearch',
	  './dropdown/selectOnClose',
	  './dropdown/closeOnSelect',

	  './i18n/en'
	], function ($, require,

	             ResultsList,

	             SingleSelection, MultipleSelection, Placeholder, AllowClear,
	             SelectionSearch, EventRelay,

	             Utils, Translation, DIACRITICS,

	             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
	             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

	             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
	             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

	             EnglishTranslation) {
	  function Defaults () {
	    this.reset();
	  }

	  Defaults.prototype.apply = function (options) {
	    options = $.extend(true, {}, this.defaults, options);

	    if (options.dataAdapter == null) {
	      if (options.ajax != null) {
	        options.dataAdapter = AjaxData;
	      } else if (options.data != null) {
	        options.dataAdapter = ArrayData;
	      } else {
	        options.dataAdapter = SelectData;
	      }

	      if (options.minimumInputLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MinimumInputLength
	        );
	      }

	      if (options.maximumInputLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MaximumInputLength
	        );
	      }

	      if (options.maximumSelectionLength > 0) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          MaximumSelectionLength
	        );
	      }

	      if (options.tags) {
	        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
	      }

	      if (options.tokenSeparators != null || options.tokenizer != null) {
	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          Tokenizer
	        );
	      }

	      if (options.query != null) {
	        var Query = require(options.amdBase + 'compat/query');

	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          Query
	        );
	      }

	      if (options.initSelection != null) {
	        var InitSelection = require(options.amdBase + 'compat/initSelection');

	        options.dataAdapter = Utils.Decorate(
	          options.dataAdapter,
	          InitSelection
	        );
	      }
	    }

	    if (options.resultsAdapter == null) {
	      options.resultsAdapter = ResultsList;

	      if (options.ajax != null) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          InfiniteScroll
	        );
	      }

	      if (options.placeholder != null) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          HidePlaceholder
	        );
	      }

	      if (options.selectOnClose) {
	        options.resultsAdapter = Utils.Decorate(
	          options.resultsAdapter,
	          SelectOnClose
	        );
	      }
	    }

	    if (options.dropdownAdapter == null) {
	      if (options.multiple) {
	        options.dropdownAdapter = Dropdown;
	      } else {
	        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

	        options.dropdownAdapter = SearchableDropdown;
	      }

	      if (options.minimumResultsForSearch !== 0) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          MinimumResultsForSearch
	        );
	      }

	      if (options.closeOnSelect) {
	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          CloseOnSelect
	        );
	      }

	      if (
	        options.dropdownCssClass != null ||
	        options.dropdownCss != null ||
	        options.adaptDropdownCssClass != null
	      ) {
	        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

	        options.dropdownAdapter = Utils.Decorate(
	          options.dropdownAdapter,
	          DropdownCSS
	        );
	      }

	      options.dropdownAdapter = Utils.Decorate(
	        options.dropdownAdapter,
	        AttachBody
	      );
	    }

	    if (options.selectionAdapter == null) {
	      if (options.multiple) {
	        options.selectionAdapter = MultipleSelection;
	      } else {
	        options.selectionAdapter = SingleSelection;
	      }

	      // Add the placeholder mixin if a placeholder was specified
	      if (options.placeholder != null) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          Placeholder
	        );
	      }

	      if (options.allowClear) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          AllowClear
	        );
	      }

	      if (options.multiple) {
	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          SelectionSearch
	        );
	      }

	      if (
	        options.containerCssClass != null ||
	        options.containerCss != null ||
	        options.adaptContainerCssClass != null
	      ) {
	        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

	        options.selectionAdapter = Utils.Decorate(
	          options.selectionAdapter,
	          ContainerCSS
	        );
	      }

	      options.selectionAdapter = Utils.Decorate(
	        options.selectionAdapter,
	        EventRelay
	      );
	    }

	    if (typeof options.language === 'string') {
	      // Check if the language is specified with a region
	      if (options.language.indexOf('-') > 0) {
	        // Extract the region information if it is included
	        var languageParts = options.language.split('-');
	        var baseLanguage = languageParts[0];

	        options.language = [options.language, baseLanguage];
	      } else {
	        options.language = [options.language];
	      }
	    }

	    if ($.isArray(options.language)) {
	      var languages = new Translation();
	      options.language.push('en');

	      var languageNames = options.language;

	      for (var l = 0; l < languageNames.length; l++) {
	        var name = languageNames[l];
	        var language = {};

	        try {
	          // Try to load it with the original name
	          language = Translation.loadPath(name);
	        } catch (e) {
	          try {
	            // If we couldn't load it, check if it wasn't the full path
	            name = this.defaults.amdLanguageBase + name;
	            language = Translation.loadPath(name);
	          } catch (ex) {
	            // The translation could not be loaded at all. Sometimes this is
	            // because of a configuration problem, other times this can be
	            // because of how Select2 helps load all possible translation files.
	            if (options.debug && window.console && console.warn) {
	              console.warn(
	                'Select2: The language file for "' + name + '" could not be ' +
	                'automatically loaded. A fallback will be used instead.'
	              );
	            }

	            continue;
	          }
	        }

	        languages.extend(language);
	      }

	      options.translations = languages;
	    } else {
	      var baseTranslation = Translation.loadPath(
	        this.defaults.amdLanguageBase + 'en'
	      );
	      var customTranslation = new Translation(options.language);

	      customTranslation.extend(baseTranslation);

	      options.translations = customTranslation;
	    }

	    return options;
	  };

	  Defaults.prototype.reset = function () {
	    function stripDiacritics (text) {
	      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
	      function match(a) {
	        return DIACRITICS[a] || a;
	      }

	      return text.replace(/[^\u0000-\u007E]/g, match);
	    }

	    function matcher (params, data) {
	      // Always return the object if there is nothing to compare
	      if ($.trim(params.term) === '') {
	        return data;
	      }

	      // Do a recursive check for options with children
	      if (data.children && data.children.length > 0) {
	        // Clone the data object if there are children
	        // This is required as we modify the object to remove any non-matches
	        var match = $.extend(true, {}, data);

	        // Check each child of the option
	        for (var c = data.children.length - 1; c >= 0; c--) {
	          var child = data.children[c];

	          var matches = matcher(params, child);

	          // If there wasn't a match, remove the object in the array
	          if (matches == null) {
	            match.children.splice(c, 1);
	          }
	        }

	        // If any children matched, return the new object
	        if (match.children.length > 0) {
	          return match;
	        }

	        // If there were no matching children, check just the plain object
	        return matcher(params, match);
	      }

	      var original = stripDiacritics(data.text).toUpperCase();
	      var term = stripDiacritics(params.term).toUpperCase();

	      // Check if the text contains the term
	      if (original.indexOf(term) > -1) {
	        return data;
	      }

	      // If it doesn't contain the term, don't return anything
	      return null;
	    }

	    this.defaults = {
	      amdBase: './',
	      amdLanguageBase: './i18n/',
	      closeOnSelect: true,
	      debug: false,
	      dropdownAutoWidth: false,
	      escapeMarkup: Utils.escapeMarkup,
	      language: EnglishTranslation,
	      matcher: matcher,
	      minimumInputLength: 0,
	      maximumInputLength: 0,
	      maximumSelectionLength: 0,
	      minimumResultsForSearch: 0,
	      selectOnClose: false,
	      sorter: function (data) {
	        return data;
	      },
	      templateResult: function (result) {
	        return result.text;
	      },
	      templateSelection: function (selection) {
	        return selection.text;
	      },
	      theme: 'default',
	      width: 'resolve'
	    };
	  };

	  Defaults.prototype.set = function (key, value) {
	    var camelKey = $.camelCase(key);

	    var data = {};
	    data[camelKey] = value;

	    var convertedData = Utils._convertData(data);

	    $.extend(this.defaults, convertedData);
	  };

	  var defaults = new Defaults();

	  return defaults;
	});

	S2.define('select2/options',[
	  'require',
	  'jquery',
	  './defaults',
	  './utils'
	], function (require, $, Defaults, Utils) {
	  function Options (options, $element) {
	    this.options = options;

	    if ($element != null) {
	      this.fromElement($element);
	    }

	    this.options = Defaults.apply(this.options);

	    if ($element && $element.is('input')) {
	      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

	      this.options.dataAdapter = Utils.Decorate(
	        this.options.dataAdapter,
	        InputCompat
	      );
	    }
	  }

	  Options.prototype.fromElement = function ($e) {
	    var excludedData = ['select2'];

	    if (this.options.multiple == null) {
	      this.options.multiple = $e.prop('multiple');
	    }

	    if (this.options.disabled == null) {
	      this.options.disabled = $e.prop('disabled');
	    }

	    if (this.options.language == null) {
	      if ($e.prop('lang')) {
	        this.options.language = $e.prop('lang').toLowerCase();
	      } else if ($e.closest('[lang]').prop('lang')) {
	        this.options.language = $e.closest('[lang]').prop('lang');
	      }
	    }

	    if (this.options.dir == null) {
	      if ($e.prop('dir')) {
	        this.options.dir = $e.prop('dir');
	      } else if ($e.closest('[dir]').prop('dir')) {
	        this.options.dir = $e.closest('[dir]').prop('dir');
	      } else {
	        this.options.dir = 'ltr';
	      }
	    }

	    $e.prop('disabled', this.options.disabled);
	    $e.prop('multiple', this.options.multiple);

	    if ($e.data('select2Tags')) {
	      if (this.options.debug && window.console && console.warn) {
	        console.warn(
	          'Select2: The `data-select2-tags` attribute has been changed to ' +
	          'use the `data-data` and `data-tags="true"` attributes and will be ' +
	          'removed in future versions of Select2.'
	        );
	      }

	      $e.data('data', $e.data('select2Tags'));
	      $e.data('tags', true);
	    }

	    if ($e.data('ajaxUrl')) {
	      if (this.options.debug && window.console && console.warn) {
	        console.warn(
	          'Select2: The `data-ajax-url` attribute has been changed to ' +
	          '`data-ajax--url` and support for the old attribute will be removed' +
	          ' in future versions of Select2.'
	        );
	      }

	      $e.attr('ajax--url', $e.data('ajaxUrl'));
	      $e.data('ajax--url', $e.data('ajaxUrl'));
	    }

	    var dataset = {};

	    // Prefer the element's `dataset` attribute if it exists
	    // jQuery 1.x does not correctly handle data attributes with multiple dashes
	    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
	      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
	    } else {
	      dataset = $e.data();
	    }

	    var data = $.extend(true, {}, dataset);

	    data = Utils._convertData(data);

	    for (var key in data) {
	      if ($.inArray(key, excludedData) > -1) {
	        continue;
	      }

	      if ($.isPlainObject(this.options[key])) {
	        $.extend(this.options[key], data[key]);
	      } else {
	        this.options[key] = data[key];
	      }
	    }

	    return this;
	  };

	  Options.prototype.get = function (key) {
	    return this.options[key];
	  };

	  Options.prototype.set = function (key, val) {
	    this.options[key] = val;
	  };

	  return Options;
	});

	S2.define('select2/core',[
	  'jquery',
	  './options',
	  './utils',
	  './keys'
	], function ($, Options, Utils, KEYS) {
	  var Select2 = function ($element, options) {
	    if ($element.data('select2') != null) {
	      $element.data('select2').destroy();
	    }

	    this.$element = $element;

	    this.id = this._generateId($element);

	    options = options || {};

	    this.options = new Options(options, $element);

	    Select2.__super__.constructor.call(this);

	    // Set up the tabindex

	    var tabindex = $element.attr('tabindex') || 0;
	    $element.data('old-tabindex', tabindex);
	    $element.attr('tabindex', '-1');

	    // Set up containers and adapters

	    var DataAdapter = this.options.get('dataAdapter');
	    this.dataAdapter = new DataAdapter($element, this.options);

	    var $container = this.render();

	    this._placeContainer($container);

	    var SelectionAdapter = this.options.get('selectionAdapter');
	    this.selection = new SelectionAdapter($element, this.options);
	    this.$selection = this.selection.render();

	    this.selection.position(this.$selection, $container);

	    var DropdownAdapter = this.options.get('dropdownAdapter');
	    this.dropdown = new DropdownAdapter($element, this.options);
	    this.$dropdown = this.dropdown.render();

	    this.dropdown.position(this.$dropdown, $container);

	    var ResultsAdapter = this.options.get('resultsAdapter');
	    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
	    this.$results = this.results.render();

	    this.results.position(this.$results, this.$dropdown);

	    // Bind events

	    var self = this;

	    // Bind the container to all of the adapters
	    this._bindAdapters();

	    // Register any DOM event handlers
	    this._registerDomEvents();

	    // Register any internal event handlers
	    this._registerDataEvents();
	    this._registerSelectionEvents();
	    this._registerDropdownEvents();
	    this._registerResultsEvents();
	    this._registerEvents();

	    // Set the initial state
	    this.dataAdapter.current(function (initialData) {
	      self.trigger('selection:update', {
	        data: initialData
	      });
	    });

	    // Hide the original select
	    $element.addClass('select2-hidden-accessible');
	    $element.attr('aria-hidden', 'true');

	    // Synchronize any monitored attributes
	    this._syncAttributes();

	    $element.data('select2', this);
	  };

	  Utils.Extend(Select2, Utils.Observable);

	  Select2.prototype._generateId = function ($element) {
	    var id = '';

	    if ($element.attr('id') != null) {
	      id = $element.attr('id');
	    } else if ($element.attr('name') != null) {
	      id = $element.attr('name') + '-' + Utils.generateChars(2);
	    } else {
	      id = Utils.generateChars(4);
	    }

	    id = id.replace(/(:|\.|\[|\]|,)/g, '');
	    id = 'select2-' + id;

	    return id;
	  };

	  Select2.prototype._placeContainer = function ($container) {
	    $container.insertAfter(this.$element);

	    var width = this._resolveWidth(this.$element, this.options.get('width'));

	    if (width != null) {
	      $container.css('width', width);
	    }
	  };

	  Select2.prototype._resolveWidth = function ($element, method) {
	    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

	    if (method == 'resolve') {
	      var styleWidth = this._resolveWidth($element, 'style');

	      if (styleWidth != null) {
	        return styleWidth;
	      }

	      return this._resolveWidth($element, 'element');
	    }

	    if (method == 'element') {
	      var elementWidth = $element.outerWidth(false);

	      if (elementWidth <= 0) {
	        return 'auto';
	      }

	      return elementWidth + 'px';
	    }

	    if (method == 'style') {
	      var style = $element.attr('style');

	      if (typeof(style) !== 'string') {
	        return null;
	      }

	      var attrs = style.split(';');

	      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
	        var attr = attrs[i].replace(/\s/g, '');
	        var matches = attr.match(WIDTH);

	        if (matches !== null && matches.length >= 1) {
	          return matches[1];
	        }
	      }

	      return null;
	    }

	    return method;
	  };

	  Select2.prototype._bindAdapters = function () {
	    this.dataAdapter.bind(this, this.$container);
	    this.selection.bind(this, this.$container);

	    this.dropdown.bind(this, this.$container);
	    this.results.bind(this, this.$container);
	  };

	  Select2.prototype._registerDomEvents = function () {
	    var self = this;

	    this.$element.on('change.select2', function () {
	      self.dataAdapter.current(function (data) {
	        self.trigger('selection:update', {
	          data: data
	        });
	      });
	    });

	    this.$element.on('focus.select2', function (evt) {
	      self.trigger('focus', evt);
	    });

	    this._syncA = Utils.bind(this._syncAttributes, this);
	    this._syncS = Utils.bind(this._syncSubtree, this);

	    if (this.$element[0].attachEvent) {
	      this.$element[0].attachEvent('onpropertychange', this._syncA);
	    }

	    var observer = window.MutationObserver ||
	      window.WebKitMutationObserver ||
	      window.MozMutationObserver
	    ;

	    if (observer != null) {
	      this._observer = new observer(function (mutations) {
	        $.each(mutations, self._syncA);
	        $.each(mutations, self._syncS);
	      });
	      this._observer.observe(this.$element[0], {
	        attributes: true,
	        childList: true,
	        subtree: false
	      });
	    } else if (this.$element[0].addEventListener) {
	      this.$element[0].addEventListener(
	        'DOMAttrModified',
	        self._syncA,
	        false
	      );
	      this.$element[0].addEventListener(
	        'DOMNodeInserted',
	        self._syncS,
	        false
	      );
	      this.$element[0].addEventListener(
	        'DOMNodeRemoved',
	        self._syncS,
	        false
	      );
	    }
	  };

	  Select2.prototype._registerDataEvents = function () {
	    var self = this;

	    this.dataAdapter.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerSelectionEvents = function () {
	    var self = this;
	    var nonRelayEvents = ['toggle', 'focus'];

	    this.selection.on('toggle', function () {
	      self.toggleDropdown();
	    });

	    this.selection.on('focus', function (params) {
	      self.focus(params);
	    });

	    this.selection.on('*', function (name, params) {
	      if ($.inArray(name, nonRelayEvents) !== -1) {
	        return;
	      }

	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerDropdownEvents = function () {
	    var self = this;

	    this.dropdown.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerResultsEvents = function () {
	    var self = this;

	    this.results.on('*', function (name, params) {
	      self.trigger(name, params);
	    });
	  };

	  Select2.prototype._registerEvents = function () {
	    var self = this;

	    this.on('open', function () {
	      self.$container.addClass('select2-container--open');
	    });

	    this.on('close', function () {
	      self.$container.removeClass('select2-container--open');
	    });

	    this.on('enable', function () {
	      self.$container.removeClass('select2-container--disabled');
	    });

	    this.on('disable', function () {
	      self.$container.addClass('select2-container--disabled');
	    });

	    this.on('blur', function () {
	      self.$container.removeClass('select2-container--focus');
	    });

	    this.on('query', function (params) {
	      if (!self.isOpen()) {
	        self.trigger('open', {});
	      }

	      this.dataAdapter.query(params, function (data) {
	        self.trigger('results:all', {
	          data: data,
	          query: params
	        });
	      });
	    });

	    this.on('query:append', function (params) {
	      this.dataAdapter.query(params, function (data) {
	        self.trigger('results:append', {
	          data: data,
	          query: params
	        });
	      });
	    });

	    this.on('keypress', function (evt) {
	      var key = evt.which;

	      if (self.isOpen()) {
	        if (key === KEYS.ESC || key === KEYS.TAB ||
	            (key === KEYS.UP && evt.altKey)) {
	          self.close();

	          evt.preventDefault();
	        } else if (key === KEYS.ENTER) {
	          self.trigger('results:select', {});

	          evt.preventDefault();
	        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
	          self.trigger('results:toggle', {});

	          evt.preventDefault();
	        } else if (key === KEYS.UP) {
	          self.trigger('results:previous', {});

	          evt.preventDefault();
	        } else if (key === KEYS.DOWN) {
	          self.trigger('results:next', {});

	          evt.preventDefault();
	        }
	      } else {
	        if (key === KEYS.ENTER || key === KEYS.SPACE ||
	            (key === KEYS.DOWN && evt.altKey)) {
	          self.open();

	          evt.preventDefault();
	        }
	      }
	    });
	  };

	  Select2.prototype._syncAttributes = function () {
	    this.options.set('disabled', this.$element.prop('disabled'));

	    if (this.options.get('disabled')) {
	      if (this.isOpen()) {
	        this.close();
	      }

	      this.trigger('disable', {});
	    } else {
	      this.trigger('enable', {});
	    }
	  };

	  Select2.prototype._syncSubtree = function (evt, mutations) {
	    var changed = false;
	    var self = this;

	    // Ignore any mutation events raised for elements that aren't options or
	    // optgroups. This handles the case when the select element is destroyed
	    if (
	      evt && evt.target && (
	        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
	      )
	    ) {
	      return;
	    }

	    if (!mutations) {
	      // If mutation events aren't supported, then we can only assume that the
	      // change affected the selections
	      changed = true;
	    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
	      for (var n = 0; n < mutations.addedNodes.length; n++) {
	        var node = mutations.addedNodes[n];

	        if (node.selected) {
	          changed = true;
	        }
	      }
	    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
	      changed = true;
	    }

	    // Only re-pull the data if we think there is a change
	    if (changed) {
	      this.dataAdapter.current(function (currentData) {
	        self.trigger('selection:update', {
	          data: currentData
	        });
	      });
	    }
	  };

	  /**
	   * Override the trigger method to automatically trigger pre-events when
	   * there are events that can be prevented.
	   */
	  Select2.prototype.trigger = function (name, args) {
	    var actualTrigger = Select2.__super__.trigger;
	    var preTriggerMap = {
	      'open': 'opening',
	      'close': 'closing',
	      'select': 'selecting',
	      'unselect': 'unselecting'
	    };

	    if (args === undefined) {
	      args = {};
	    }

	    if (name in preTriggerMap) {
	      var preTriggerName = preTriggerMap[name];
	      var preTriggerArgs = {
	        prevented: false,
	        name: name,
	        args: args
	      };

	      actualTrigger.call(this, preTriggerName, preTriggerArgs);

	      if (preTriggerArgs.prevented) {
	        args.prevented = true;

	        return;
	      }
	    }

	    actualTrigger.call(this, name, args);
	  };

	  Select2.prototype.toggleDropdown = function () {
	    if (this.options.get('disabled')) {
	      return;
	    }

	    if (this.isOpen()) {
	      this.close();
	    } else {
	      this.open();
	    }
	  };

	  Select2.prototype.open = function () {
	    if (this.isOpen()) {
	      return;
	    }

	    this.trigger('query', {});
	  };

	  Select2.prototype.close = function () {
	    if (!this.isOpen()) {
	      return;
	    }

	    this.trigger('close', {});
	  };

	  Select2.prototype.isOpen = function () {
	    return this.$container.hasClass('select2-container--open');
	  };

	  Select2.prototype.hasFocus = function () {
	    return this.$container.hasClass('select2-container--focus');
	  };

	  Select2.prototype.focus = function (data) {
	    // No need to re-trigger focus events if we are already focused
	    if (this.hasFocus()) {
	      return;
	    }

	    this.$container.addClass('select2-container--focus');
	    this.trigger('focus', {});
	  };

	  Select2.prototype.enable = function (args) {
	    if (this.options.get('debug') && window.console && console.warn) {
	      console.warn(
	        'Select2: The `select2("enable")` method has been deprecated and will' +
	        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
	        ' instead.'
	      );
	    }

	    if (args == null || args.length === 0) {
	      args = [true];
	    }

	    var disabled = !args[0];

	    this.$element.prop('disabled', disabled);
	  };

	  Select2.prototype.data = function () {
	    if (this.options.get('debug') &&
	        arguments.length > 0 && window.console && console.warn) {
	      console.warn(
	        'Select2: Data can no longer be set using `select2("data")`. You ' +
	        'should consider setting the value instead using `$element.val()`.'
	      );
	    }

	    var data = [];

	    this.dataAdapter.current(function (currentData) {
	      data = currentData;
	    });

	    return data;
	  };

	  Select2.prototype.val = function (args) {
	    if (this.options.get('debug') && window.console && console.warn) {
	      console.warn(
	        'Select2: The `select2("val")` method has been deprecated and will be' +
	        ' removed in later Select2 versions. Use $element.val() instead.'
	      );
	    }

	    if (args == null || args.length === 0) {
	      return this.$element.val();
	    }

	    var newVal = args[0];

	    if ($.isArray(newVal)) {
	      newVal = $.map(newVal, function (obj) {
	        return obj.toString();
	      });
	    }

	    this.$element.val(newVal).trigger('change');
	  };

	  Select2.prototype.destroy = function () {
	    this.$container.remove();

	    if (this.$element[0].detachEvent) {
	      this.$element[0].detachEvent('onpropertychange', this._syncA);
	    }

	    if (this._observer != null) {
	      this._observer.disconnect();
	      this._observer = null;
	    } else if (this.$element[0].removeEventListener) {
	      this.$element[0]
	        .removeEventListener('DOMAttrModified', this._syncA, false);
	      this.$element[0]
	        .removeEventListener('DOMNodeInserted', this._syncS, false);
	      this.$element[0]
	        .removeEventListener('DOMNodeRemoved', this._syncS, false);
	    }

	    this._syncA = null;
	    this._syncS = null;

	    this.$element.off('.select2');
	    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

	    this.$element.removeClass('select2-hidden-accessible');
	    this.$element.attr('aria-hidden', 'false');
	    this.$element.removeData('select2');

	    this.dataAdapter.destroy();
	    this.selection.destroy();
	    this.dropdown.destroy();
	    this.results.destroy();

	    this.dataAdapter = null;
	    this.selection = null;
	    this.dropdown = null;
	    this.results = null;
	  };

	  Select2.prototype.render = function () {
	    var $container = $(
	      '<span class="select2 select2-container">' +
	        '<span class="selection"></span>' +
	        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
	      '</span>'
	    );

	    $container.attr('dir', this.options.get('dir'));

	    this.$container = $container;

	    this.$container.addClass('select2-container--' + this.options.get('theme'));

	    $container.data('element', this.$element);

	    return $container;
	  };

	  return Select2;
	});

	S2.define('jquery-mousewheel',[
	  'jquery'
	], function ($) {
	  // Used to shim jQuery.mousewheel for non-full builds.
	  return $;
	});

	S2.define('jquery.select2',[
	  'jquery',
	  'jquery-mousewheel',

	  './select2/core',
	  './select2/defaults'
	], function ($, _, Select2, Defaults) {
	  if ($.fn.select2 == null) {
	    // All methods that should return the element
	    var thisMethods = ['open', 'close', 'destroy'];

	    $.fn.select2 = function (options) {
	      options = options || {};

	      if (typeof options === 'object') {
	        this.each(function () {
	          var instanceOptions = $.extend(true, {}, options);

	          var instance = new Select2($(this), instanceOptions);
	        });

	        return this;
	      } else if (typeof options === 'string') {
	        var ret;
	        var args = Array.prototype.slice.call(arguments, 1);

	        this.each(function () {
	          var instance = $(this).data('select2');

	          if (instance == null && window.console && console.error) {
	            console.error(
	              'The select2(\'' + options + '\') method was called on an ' +
	              'element that is not using Select2.'
	            );
	          }

	          ret = instance[options].apply(instance, args);
	        });

	        // Check if we should be returning `this`
	        if ($.inArray(options, thisMethods) > -1) {
	          return this;
	        }

	        return ret;
	      } else {
	        throw new Error('Invalid arguments for Select2: ' + options);
	      }
	    };
	  }

	  if ($.fn.select2.defaults == null) {
	    $.fn.select2.defaults = Defaults;
	  }

	  return Select2;
	});

	  // Return the AMD loader configuration so it can be used outside of this file
	  return {
	    define: S2.define,
	    require: S2.require
	  };
	}());

	  // Autoload the jQuery bindings
	  // We know that all of the modules exist above this, so we're safe
	  var select2 = S2.require('jquery.select2');

	  // Hold the AMD module references on the jQuery function that was just loaded
	  // This allows Select2 to use the internal loader outside of this file, such
	  // as in the language files.
	  jQuery.fn.select2.amd = S2;

	  // Return the Select2 instance for anyone who is importing it.
	  return select2;
	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} );


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(9));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	var assets_gallery_1 = __webpack_require__(10);
	var views_form_1 = __webpack_require__(7);
	var views_1 = __webpack_require__(11);
	var modal_1 = __webpack_require__(63);
	var orange_1 = __webpack_require__(5);
	var _template = "\n  <div class=\"modal-container\"></div>\n  <div class=\"crop-container\">\n  </div>\n  <!--<label class=\"btn btn-sm btn-default\">\n    <span>Upload</span>\n    <input style=\"display:none;\" type=\"file\" class=\"upload-btn\" name=\"upload-button\" />\n  </label>-->\n  <button class=\"gallery-btn btn btn-sm btn-default\" title=\"Vælg fra galleri\">Vælg</button>\n  <button class=\"crop-btn btn btn-sm btn-default pull-right\">Beskær</button>\n";
	var CropEditor = function (_views_form_1$BaseEdi) {
	    _inherits(CropEditor, _views_form_1$BaseEdi);

	    function CropEditor() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? { resize: false } : arguments[0];

	        _classCallCheck(this, CropEditor);

	        var _this = _possibleConstructorReturn(this, (CropEditor.__proto__ || Object.getPrototypeOf(CropEditor)).call(this, options));

	        ['host', 'maxSize', 'mimeType', 'ratio', 'cropping'].forEach(function (m) {
	            var l = m.toLowerCase();
	            var attr = _this.el.getAttribute(l); //||this.el.getAttribute('o-' + l);
	            if (attr == null) attr = _this.el.getAttribute('o-' + l);
	            if (attr != null) {
	                if (attr == "") attr = true;
	                options[m] = attr;
	            }
	        });
	        _this.options = options || { client: null, resize: false };
	        var client = options.client;
	        if (client == null) {
	            if (options.host == null) throw new Error('client or host expected');
	            client = assets_gallery_1.createClient({
	                url: options.host
	            });
	        }
	        _this.modal = new modal_1.Modal(client, {});
	        if (_this.options.cropping != null) {
	            _this.crop = new assets_gallery_1.CropView({
	                zoomable: false,
	                scalable: false,
	                autoCropArea: 0.6,
	                resize: true
	            });
	        }
	        _this.uploader = new assets_gallery_1.FileUploader({
	            url: client.url,
	            maxSize: _this.options.maxSize,
	            mimeType: _this.options.mimeType
	        });
	        _this.listenTo(_this.modal, 'selected', _this.onAssetSelected);
	        //this.listenTo('crop', '')
	        return _this;
	    }

	    _createClass(CropEditor, [{
	        key: "getValue",
	        value: function getValue() {
	            return this.model;
	        }
	    }, {
	        key: "setValue",
	        value: function setValue(model) {
	            if (this.model === model) return;
	            this.model = model;
	        }
	    }, {
	        key: "onModel",
	        value: function onModel(model) {
	            if (this.crop) this.crop.model = model;
	        }
	    }, {
	        key: "onSetElement",
	        value: function onSetElement() {
	            var _this2 = this;

	            ['host', 'maxSize', 'mimeType', 'ratio'].forEach(function (m) {
	                var l = m.toLowerCase();
	                var attr = _this2.el.getAttribute(l) || _this2.el.getAttribute('o-' + l);
	                if (attr && attr != "") {
	                    _this2.options[m] = attr;
	                }
	            });
	        }
	    }, {
	        key: "onRender",
	        value: function onRender() {
	            this.ui['modal'].appendChild(this.modal.render().el);
	            if (this.crop) {
	                this.ui['crop'].appendChild(this.crop.render().el);
	                orange_1.addClass(this.crop.el, 'crop-preview cropping-preview');
	                orange_1.addClass(this.crop.ui['image'], 'content');
	                if (this.crop.options.previewView) {
	                    this.crop.options.previewView.destroy();
	                }
	            }
	            var preview = new assets_gallery_1.CropPreView({
	                el: this.crop ? this.crop.el : null
	            });
	            if (!this.crop) {
	                preview.el.innerHTML = '<img class="content">';
	            } else {
	                this.crop.options.previewView = preview;
	            }
	            preview.render();
	            if (this.crop) {
	                var el = orange_1.Html.query(document.createElement('div')).addClass('upload-progress-container').css({ display: 'none' });
	                el.html('<div class="upload-progress" style="width:0;"></div>');
	                this.crop.el.appendChild(el.get(0));
	            } else {
	                this.ui['crop'].appendChild(preview.el);
	            }
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.model = null;
	        }
	    }, {
	        key: "_onToggleCropper",
	        value: function _onToggleCropper(e) {
	            e.preventDefault();
	            if (this.model == null) return;
	            this.crop.toggle();
	            this._toggled = !this._toggled;
	            if (this._toggled) {
	                orange_1.addClass(e.target, 'active');
	            } else {
	                orange_1.removeClass(e.target, 'active');
	                this.model.set('meta.cropping', this.crop.cropping);
	                this.triggerMethod('change');
	            }
	        }
	    }, {
	        key: "_onDrop",
	        value: function _onDrop(e) {
	            var _this3 = this;

	            e.preventDefault();
	            var files = e.dataTransfer.files;
	            if (!files.length) {
	                return;
	            }
	            var file = files.item(0);
	            try {
	                this._validateFile(file);
	            } catch (e) {
	                console.log('validate error');
	                return;
	            }
	            var div = this.crop.el.querySelector('.upload-progress');
	            this.uploader.upload(file, function (loaded, total) {
	                var progress = loaded / total * 100 || 0;
	                if (div) div.style.width = progress + '%';
	            }).then(function (b) {
	                if (div) div.style.width = '0';
	                var model = new _this3.modal.gallery.collection.Model(b);
	                _this3.modal.gallery.collection.add(model);
	                _this3.modal.value = model;
	                _this3.onAssetSelected();
	            }).catch(function (e) {
	                console.log(e);
	                if (div) div.style.width = '0';
	            });
	        }
	    }, {
	        key: "_cancel",
	        value: function _cancel(e) {
	            if (e.preventDefault) {
	                e.preventDefault();
	            }
	            var el = orange_1.Html.query(this.crop.el);
	            //if (!e.dataTransfer.files.length) return false;
	            if (e.type == 'dragenter') {
	                el.addClass('dragenter');
	            } else if (e.type == 'dragleave') {
	                el.removeClass('dragenter');
	            }
	            return false;
	        }
	    }, {
	        key: "_validateFile",
	        value: function _validateFile(file) {
	            var maxSize = this.options.maxSize * 1000;
	            if (maxSize !== 0 && file.size > maxSize) {
	                throw new Error('file to big');
	            }
	            var type = file.type;
	            var mimeTypes;
	            if (typeof this.options.mimeType === 'string') {
	                mimeTypes = [this.options.mimeType];
	            } else {
	                mimeTypes = this.options.mimeType;
	            }
	            if (!mimeTypes) return;
	            for (var i = 0; i < mimeTypes.length; i++) {
	                var mime = new RegExp(mimeTypes[i].replace('*', '.*'));
	                if (mime.test(type)) return;else throw new Error('Wrong mime type');
	            }
	        }
	    }, {
	        key: "onAssetSelected",
	        value: function onAssetSelected() {
	            var value = this.modal.value;
	            this.model = value;
	            this.crop.ui['image'].src = value.getURL();
	            this.trigger('change');
	        }
	        /*validate(form: Form) {
	            return validate(form, this, this.value);
	        }*/

	    }, {
	        key: "destroy",
	        value: function destroy() {
	            if (this.crop.options.previewView) {
	                this.crop.options.previewView.destroy();
	            }
	            this.crop.destroy();
	            this.modal.destroy();
	        }
	    }]);

	    return CropEditor;
	}(views_form_1.BaseEditor);
	CropEditor = __decorate([views_1.attributes({
	    template: function template() {
	        return _template;
	    },
	    ui: {
	        modal: '.modal-container',
	        crop: '.crop-container'
	    },
	    events: {
	        drop: '_onDrop',
	        dragenter: '_cancel',
	        dragover: '_cancel',
	        dragleave: '_cancel',
	        'click .gallery-btn': function clickGalleryBtn(e) {
	            e.preventDefault();
	            this.modal.toggle();
	        },
	        'click .crop-btn': '_onToggleCropper'
	    }
	}), views_form_1.editor('assets.crop'), __metadata('design:paramtypes', [Object])], CropEditor);
	exports.CropEditor = CropEditor;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	const views = __webpack_require__(11);
	__export(__webpack_require__(12));
	__export(__webpack_require__(26));
	__export(__webpack_require__(29));
	__export(__webpack_require__(58));
	class View extends views.View {
	}
	exports.View = View;
	const client_2 = __webpack_require__(58);
	function createClient(options) {
	    return new client_2.AssetsClient(options);
	}
	exports.createClient = createClient;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const eventsjs_1 = __webpack_require__(13);
	const utils = __webpack_require__(14);
	const interface_1 = __webpack_require__(25);
	class FileUploader extends eventsjs_1.EventEmitter {
	    constructor(options) {
	        super();
	        this.options = utils.extend({}, {
	            parameter: 'file',
	            method: interface_1.HttpMethod.POST,
	            maxSize: 2048
	        }, options);
	    }
	    upload(file, progressFn, attributes) {
	        try {
	            this.validateFile(file);
	        }
	        catch (e) {
	            return utils.Promise.reject(e);
	        }
	        let formData = new FormData();
	        formData.append(this.options.parameter, file);
	        attributes = attributes || {};
	        Object.keys(attributes).forEach(function (key) {
	            var value = attributes[key];
	            formData.append(key, value);
	        });
	        return utils.request.post(this.options.url)
	            .header({
	            'Content-Type': file.type,
	        })
	            .params({ filename: file.name })
	            .uploadProgress((event) => {
	            if (event.lengthComputable) {
	                let progress = (event.loaded / event.total * 100 || 0);
	                this.trigger('progress', file, progress);
	                if (progressFn != null) {
	                    progressFn(event.loaded, event.total);
	                }
	            }
	        })
	            .end(file)
	            .then((res) => {
	            if (!res.isValid) {
	                throw new utils.HttpError(res.status, res.statusText, res.body);
	            }
	            return JSON.parse(res.body);
	        });
	    }
	    validateFile(file) {
	        let maxSize = this.options.maxSize * 1000;
	        if (maxSize !== 0 && file.size > maxSize) {
	            throw new Error('file to big');
	        }
	        var type = file.type;
	        var mimeTypes;
	        if (typeof this.options.mimeType === 'string') {
	            mimeTypes = [this.options.mimeType];
	        }
	        else {
	            mimeTypes = this.options.mimeType;
	        }
	        if (!mimeTypes)
	            return;
	        for (var i = 0; i < mimeTypes.length; i++) {
	            let mime = new RegExp(mimeTypes[i].replace('*', '.*'));
	            if (mime.test(type))
	                return;
	            else
	                throw new Error('Wrong mime type');
	        }
	    }
	}
	exports.FileUploader = FileUploader;
	function formatResponse(response) {
	    var ret = null;
	    try {
	        ret = JSON.parse(response);
	    }
	    catch (e) {
	        ret = response;
	    }
	    return ret;
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var idCounter = 0;
	function getID() {
	    return "" + (++idCounter);
	}
	function callFunc(fn, args) {
	    if (args === void 0) { args = []; }
	    var l = fn.length, i = -1, a1 = args[0], a2 = args[1], a3 = args[2], a4 = args[3];
	    switch (args.length) {
	        case 0:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx);
	            return;
	        case 1:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1);
	            return;
	        case 2:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2);
	            return;
	        case 3:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3);
	            return;
	        case 4:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
	            return;
	        default:
	            while (++i < l)
	                fn[i].handler.apply(fn[i].ctx, args);
	            return;
	    }
	}
	exports.callFunc = callFunc;
	function isFunction(a) {
	    return typeof a === 'function';
	}
	exports.isFunction = isFunction;
	function isEventEmitter(a) {
	    return a instanceof EventEmitter || (isFunction(a.on) && isFunction(a.off) && isFunction(a.trigger));
	}
	exports.isEventEmitter = isEventEmitter;
	var EventEmitter = (function () {
	    function EventEmitter() {
	    }
	    Object.defineProperty(EventEmitter.prototype, "listeners", {
	        get: function () {
	            return this._listeners;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    EventEmitter.prototype.on = function (event, fn, ctx, once) {
	        if (once === void 0) { once = false; }
	        var events = (this._listeners || (this._listeners = {}))[event] || (this._listeners[event] = []);
	        events.push({
	            name: event,
	            once: once,
	            handler: fn,
	            ctx: ctx || this
	        });
	        return this;
	    };
	    EventEmitter.prototype.once = function (event, fn, ctx) {
	        return this.on(event, fn, ctx, true);
	    };
	    EventEmitter.prototype.off = function (eventName, fn) {
	        this._listeners = this._listeners || {};
	        if (eventName == null) {
	            this._listeners = {};
	        }
	        else if (this._listeners[eventName]) {
	            var events = this._listeners[eventName];
	            if (fn == null) {
	                this._listeners[eventName] = [];
	            }
	            else {
	                for (var i = 0; i < events.length; i++) {
	                    var event_1 = events[i];
	                    if (events[i].handler == fn) {
	                        this._listeners[eventName].splice(i, 1);
	                    }
	                }
	            }
	        }
	    };
	    EventEmitter.prototype.trigger = function (eventName) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        //let events = (this._listeners|| (this._listeners = {}))[eventName]||(this._listeners[eventName]=[])
	        //.concat(this._listeners['all']||[])
	        this._listeners = this._listeners || {};
	        var events = (this._listeners[eventName] || []).concat(this._listeners['all'] || []);
	        if (EventEmitter.debugCallback)
	            EventEmitter.debugCallback(this.constructor.name, this.name, eventName, args, events);
	        var event, a, len = events.length, index;
	        var calls = [];
	        for (var i = 0, ii = events.length; i < ii; i++) {
	            event = events[i];
	            a = args;
	            if (event.name == 'all') {
	                a = [eventName].concat(args);
	                callFunc([event], a);
	            }
	            else {
	                calls.push(event);
	            }
	            if (event.once === true) {
	                index = this._listeners[event.name].indexOf(event);
	                this._listeners[event.name].splice(index, 1);
	            }
	        }
	        if (calls.length)
	            this._executeListener(calls, args);
	        return this;
	    };
	    EventEmitter.prototype._executeListener = function (func, args) {
	        var executor = callFunc;
	        if (this.constructor.executeListenerFunction) {
	            executor = this.constructor.executeListenerFunction;
	        }
	        executor(func, args);
	    };
	    EventEmitter.prototype.listenTo = function (obj, event, fn, ctx, once) {
	        if (once === void 0) { once = false; }
	        var listeningTo, id, meth;
	        listeningTo = this._listeningTo || (this._listeningTo = {});
	        id = obj.listenId || (obj.listenId = getID());
	        listeningTo[id] = obj;
	        meth = once ? 'once' : 'on';
	        obj[meth](event, fn, this);
	        return this;
	    };
	    EventEmitter.prototype.listenToOnce = function (obj, event, fn, ctx) {
	        return this.listenTo(obj, event, fn, ctx, true);
	    };
	    EventEmitter.prototype.stopListening = function (obj, event, callback) {
	        var listeningTo = this._listeningTo;
	        if (!listeningTo)
	            return this;
	        var remove = !event && !callback;
	        if (!callback && typeof event === 'object')
	            callback = this;
	        if (obj)
	            (listeningTo = {})[obj.listenId] = obj;
	        for (var id in listeningTo) {
	            obj = listeningTo[id];
	            obj.off(event, callback, this);
	            if (remove || !Object.keys(obj.listeners).length)
	                delete this._listeningTo[id];
	        }
	        return this;
	    };
	    EventEmitter.prototype.destroy = function () {
	        this.stopListening();
	        this.off();
	    };
	    return EventEmitter;
	}());
	exports.EventEmitter = EventEmitter;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(15));
	__export(__webpack_require__(17));
	__export(__webpack_require__(19));
	__export(__webpack_require__(16));
	__export(__webpack_require__(18));
	__export(__webpack_require__(20));
	__export(__webpack_require__(24));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(16);
	var __slice = Array.prototype.slice;
	function isArray(array) {
	    return Array.isArray(array);
	}
	exports.isArray = isArray;
	function unique(array) {
	    return array.filter(function (e, i) {
	        for (i += 1; i < array.length; i += 1) {
	            if (utils_1.equal(e, array[i])) {
	                return false;
	            }
	        }
	        return true;
	    });
	}
	exports.unique = unique;
	function any(array, predicate) {
	    for (var i = 0, ii = array.length; i < ii; i++) {
	        if (predicate(array[i]))
	            return true;
	    }
	    return false;
	}
	exports.any = any;
	function indexOf(array, item) {
	    for (var i = 0, len = array.length; i < len; i++)
	        if (array[i] === item)
	            return i;
	    return -1;
	}
	exports.indexOf = indexOf;
	function find(array, callback, ctx) {
	    var v;
	    for (var i = 0, ii = array.length; i < ii; i++) {
	        if (callback.call(ctx, array[i]))
	            return array[i];
	    }
	    return null;
	}
	exports.find = find;
	function filter(array, callback, ctx) {
	    return array.filter(function (e, i) {
	        return callback.call(ctx, e, i);
	    });
	}
	exports.filter = filter;
	function slice(array, begin, end) {
	    return __slice.call(array, begin, end);
	}
	exports.slice = slice;
	function flatten(arr) {
	    return arr.reduce(function (flat, toFlatten) {
	        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	    }, []);
	}
	exports.flatten = flatten;
	function sortBy(obj, value, context) {
	    var iterator = typeof value === 'function' ? value : function (obj) { return obj[value]; };
	    return obj
	        .map(function (value, index, list) {
	        return {
	            value: value,
	            index: index,
	            criteria: iterator.call(context, value, index, list)
	        };
	    })
	        .sort(function (left, right) {
	        var a = left.criteria, b = right.criteria;
	        if (a !== b) {
	            if (a > b || a === void 0)
	                return 1;
	            if (a < b || b === void 0)
	                return -1;
	        }
	        return left.index - right.index;
	    })
	        .map(function (item) {
	        return item.value;
	    });
	}
	exports.sortBy = sortBy;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var objects_1 = __webpack_require__(17);
	var arrays_1 = __webpack_require__(15);
	var strings_1 = __webpack_require__(18);
	var idCounter = 0;
	var nativeBind = Function.prototype.bind;
	function ajax() {
	    var e;
	    if (window.hasOwnProperty('XMLHttpRequest')) {
	        return new XMLHttpRequest();
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.6.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.3.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    return e;
	}
	exports.ajax = ajax;
	;
	function uniqueId(prefix) {
	    if (prefix === void 0) { prefix = ''; }
	    return prefix + (++idCounter);
	}
	exports.uniqueId = uniqueId;
	function proxy(from, to, fns) {
	    if (!Array.isArray(fns))
	        fns = [fns];
	    fns.forEach(function (fn) {
	        if (typeof to[fn] === 'function') {
	            from[fn] = bind(to[fn], to);
	        }
	    });
	}
	exports.proxy = proxy;
	function bind(method, context) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    if (typeof method !== 'function')
	        throw new Error('method not at function');
	    if (nativeBind != null)
	        return nativeBind.call.apply(nativeBind, [method, context].concat(args));
	    args = args || [];
	    var fnoop = function () { };
	    var fBound = function () {
	        var ctx = this instanceof fnoop ? this : context;
	        return callFunc(method, ctx, args.concat(arrays_1.slice(arguments)));
	    };
	    fnoop.prototype = this.prototype;
	    fBound.prototype = new fnoop();
	    return fBound;
	}
	exports.bind = bind;
	function callFunc(fn, ctx, args) {
	    if (args === void 0) { args = []; }
	    switch (args.length) {
	        case 0:
	            return fn.call(ctx);
	        case 1:
	            return fn.call(ctx, args[0]);
	        case 2:
	            return fn.call(ctx, args[0], args[1]);
	        case 3:
	            return fn.call(ctx, args[0], args[1], args[2]);
	        case 4:
	            return fn.call(ctx, args[0], args[1], args[2], args[3]);
	        case 5:
	            return fn.call(ctx, args[0], args[1], args[2], args[3], args[4]);
	        default:
	            return fn.apply(ctx, args);
	    }
	}
	exports.callFunc = callFunc;
	function equal(a, b) {
	    return eq(a, b, [], []);
	}
	exports.equal = equal;
	function triggerMethodOn(obj, eventName, args) {
	    var ev = strings_1.camelcase("on-" + eventName.replace(':', '-'));
	    if (obj[ev] && typeof obj[ev] === 'function') {
	        callFunc(obj[ev], obj, args);
	    }
	    if (typeof obj.trigger === 'function') {
	        args = [eventName].concat(args);
	        callFunc(obj.trigger, obj, args);
	    }
	}
	exports.triggerMethodOn = triggerMethodOn;
	function getOption(option, objs) {
	    for (var _i = 0, objs_1 = objs; _i < objs_1.length; _i++) {
	        var o = objs_1[_i];
	        if (objects_1.isObject(o) && o[option])
	            return o[option];
	    }
	    return null;
	}
	exports.getOption = getOption;
	function inherits(parent, protoProps, staticProps) {
	    var child;
	    if (protoProps && objects_1.has(protoProps, 'constructor')) {
	        child = protoProps.constructor;
	    }
	    else {
	        child = function () { return parent.apply(this, arguments); };
	    }
	    objects_1.extend(child, parent, staticProps);
	    var Surrogate = function () { this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;
	    if (protoProps)
	        objects_1.extend(child.prototype, protoProps);
	    child.__super__ = parent.prototype;
	    return child;
	}
	exports.inherits = inherits;
	exports.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	        && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	        && window.postMessage && window.addEventListener;
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f); };
	    }
	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	function eq(a, b, aStack, bStack) {
	    if (a === b)
	        return a !== 0 || 1 / a == 1 / b;
	    if (a == null || b == null)
	        return a === b;
	    var className = toString.call(a);
	    if (className != toString.call(b))
	        return false;
	    switch (className) {
	        case '[object String]':
	            return a == String(b);
	        case '[object Number]':
	            return a !== +a ? b !== +b : (a === 0 ? 1 / a === 1 / b : a === +b);
	        case '[object Date]':
	        case '[object Boolean]':
	            return +a == +b;
	        case '[object RegExp]':
	            return a.source == b.source &&
	                a.global == b.global &&
	                a.multiline == b.multiline &&
	                a.ignoreCase == b.ignoreCase;
	    }
	    if (typeof a != 'object' || typeof b != 'object')
	        return false;
	    var length = aStack.length;
	    while (length--) {
	        if (aStack[length] == a)
	            return bStack[length] == b;
	    }
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (aCtor !== bCtor && !(typeof aCtor === 'function' && (aCtor instanceof aCtor) &&
	        typeof bCtor === 'function' && (bCtor instanceof bCtor))) {
	        return false;
	    }
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0, result = true;
	    if (className === '[object Array]') {
	        size = a.length;
	        result = size === b.length;
	        if (result) {
	            while (size--) {
	                if (!(result = eq(a[size], b[size], aStack, bStack)))
	                    break;
	            }
	        }
	    }
	    else {
	        for (var key in a) {
	            if (objects_1.has(a, key)) {
	                size++;
	                if (!(result = objects_1.has(b, key) && eq(a[key], b[key], aStack, bStack)))
	                    break;
	            }
	        }
	        if (result) {
	            for (key in b) {
	                if (objects_1.has(b, key) && !(size--))
	                    break;
	            }
	            result = !size;
	        }
	    }
	    aStack.pop();
	    bStack.pop();
	    return result;
	}
	;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(16);
	var __has = Object.prototype.hasOwnProperty;
	function objToPaths(obj, separator) {
	    if (separator === void 0) { separator = "."; }
	    var ret = {};
	    for (var key in obj) {
	        var val = obj[key];
	        if (val && (val.constructor === Object || val.constructor === Array) && !isEmpty(val)) {
	            var obj2 = objToPaths(val);
	            for (var key2 in obj2) {
	                var val2 = obj2[key2];
	                ret[key + separator + key2] = val2;
	            }
	        }
	        else {
	            ret[key] = val;
	        }
	    }
	    return ret;
	}
	exports.objToPaths = objToPaths;
	function isObject(obj) {
	    return obj === Object(obj);
	}
	exports.isObject = isObject;
	function isEmpty(obj) {
	    return Object.keys(obj).length === 0;
	}
	exports.isEmpty = isEmpty;
	function extend(obj) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (!isObject(obj))
	        return obj;
	    var o, k;
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        o = args_1[_a];
	        if (!isObject(o))
	            continue;
	        for (k in o) {
	            if (has(o, k))
	                obj[k] = o[k];
	        }
	    }
	    return obj;
	}
	exports.extend = extend;
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert first argument to object');
	    }
	    var to = Object(target);
	    for (var i = 0, ii = args.length; i < ii; i++) {
	        var nextSource = args[i];
	        if (nextSource === undefined || nextSource === null) {
	            continue;
	        }
	        nextSource = Object(nextSource);
	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	                to[nextKey] = nextSource[nextKey];
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	function has(obj, prop) {
	    return __has.call(obj, prop);
	}
	exports.has = has;
	function pick(obj, props) {
	    var out = {}, prop;
	    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
	        prop = props_1[_i];
	        if (has(obj, prop))
	            out[prop] = obj[prop];
	    }
	    return out;
	}
	exports.pick = pick;
	function omit(obj, props) {
	    var out = {};
	    for (var key in obj) {
	        if (!!~props.indexOf(key))
	            continue;
	        out[key] = obj[key];
	    }
	    return out;
	}
	exports.omit = omit;
	function result(obj, prop, ctx, args) {
	    var ret = obj[prop];
	    return (typeof ret === 'function') ? utils_1.callFunc(ret, ctx, args || []) : ret;
	}
	exports.result = result;
	function values(obj) {
	    var output = [];
	    for (var k in obj)
	        if (has(obj, k)) {
	            output.push(obj[k]);
	        }
	    return output;
	}
	exports.values = values;
	function intersectionObjects(a, b, predicate) {
	    var results = [], aElement, existsInB;
	    for (var i = 0, ii = a.length; i < ii; i++) {
	        aElement = a[i];
	        existsInB = (b, function (bElement) { return predicate(bElement, aElement); });
	        if (existsInB) {
	            results.push(aElement);
	        }
	    }
	    return results;
	}
	function intersection(results) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    var lastArgument = args[args.length - 1];
	    var arrayCount = args.length;
	    var areEqualFunction = utils_1.equal;
	    if (typeof lastArgument === "function") {
	        areEqualFunction = lastArgument;
	        arrayCount--;
	    }
	    for (var i = 0; i < arrayCount; i++) {
	        var array = args[i];
	        results = intersectionObjects(results, array, areEqualFunction);
	        if (results.length === 0)
	            break;
	    }
	    return results;
	}
	exports.intersection = intersection;


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	function isString(a) {
	    return typeof a === 'string';
	}
	exports.isString = isString;
	function camelcase(input) {
	    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
	        return group1.toUpperCase();
	    });
	}
	exports.camelcase = camelcase;
	;
	function truncate(str, length) {
	    var n = str.substring(0, Math.min(length, str.length));
	    return n + (n.length == str.length ? '' : '...');
	}
	exports.truncate = truncate;
	function humanFileSize(bytes, si) {
	    if (si === void 0) { si = false; }
	    var thresh = si ? 1000 : 1024;
	    if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	    }
	    var units = si
	        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	    return bytes.toFixed(1) + ' ' + units[u];
	}
	exports.humanFileSize = humanFileSize;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var objects_1 = __webpack_require__(17);
	var arrays_1 = __webpack_require__(15);
	var utils_1 = __webpack_require__(16);
	exports.Promise = (typeof window === 'undefined') ? global.Promise : window.Promise;
	function isPromise(obj) {
	    return obj && typeof obj.then === 'function';
	}
	exports.isPromise = isPromise;
	function toPromise(obj) {
	    if (!obj) {
	        return obj;
	    }
	    if (isPromise(obj)) {
	        return obj;
	    }
	    if ("function" == typeof obj) {
	        return thunkToPromise.call(this, obj);
	    }
	    if (Array.isArray(obj)) {
	        return arrayToPromise.call(this, obj);
	    }
	    if (objects_1.isObject(obj)) {
	        return objectToPromise.call(this, obj);
	    }
	    return exports.Promise.resolve(obj);
	}
	exports.toPromise = toPromise;
	function thunkToPromise(fn) {
	    var ctx = this;
	    return new exports.Promise(function (resolve, reject) {
	        fn.call(ctx, function (err, res) {
	            if (err)
	                return reject(err);
	            if (arguments.length > 2)
	                res = arrays_1.slice(arguments, 1);
	            resolve(res);
	        });
	    });
	}
	exports.thunkToPromise = thunkToPromise;
	function arrayToPromise(obj) {
	    return exports.Promise.all(obj.map(toPromise, this));
	}
	exports.arrayToPromise = arrayToPromise;
	function objectToPromise(obj) {
	    var results = new obj.constructor();
	    var keys = Object.keys(obj);
	    var promises = [];
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var promise = toPromise.call(this, obj[key]);
	        if (promise && isPromise(promise))
	            defer(promise, key);
	        else
	            results[key] = obj[key];
	    }
	    return exports.Promise.all(promises).then(function () {
	        return results;
	    });
	    function defer(promise, key) {
	        results[key] = undefined;
	        promises.push(promise.then(function (res) {
	            results[key] = res;
	        }));
	    }
	}
	exports.objectToPromise = objectToPromise;
	function deferred(fn, ctx) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    var ret = {};
	    ret.promise = new exports.Promise(function (resolve, reject) {
	        ret.resolve = resolve;
	        ret.reject = reject;
	        ret.done = function (err, result) { if (err)
	            return reject(err);
	        else
	            resolve(result); };
	    });
	    return ret;
	}
	exports.deferred = deferred;
	;
	function callback(promise, callback, ctx) {
	    promise.then(function (result) {
	        callback.call(ctx, null, result);
	    }).catch(function (err) {
	        callback.call(ctx, err);
	    });
	}
	exports.callback = callback;
	function delay(timeout) {
	    var defer = deferred();
	    timeout == null ? utils_1.nextTick(defer.resolve) : setTimeout(defer.resolve, timeout);
	    return defer.promise;
	}
	exports.delay = delay;
	;
	function eachAsync(array, iterator, context, accumulate) {
	    if (accumulate === void 0) { accumulate = false; }
	    return mapAsync(array, iterator, context, accumulate)
	        .then(function () { return void 0; });
	}
	exports.eachAsync = eachAsync;
	function mapAsync(array, iterator, context, accumulate) {
	    if (accumulate === void 0) { accumulate = false; }
	    return new exports.Promise(function (resolve, reject) {
	        var i = 0, len = array.length, errors = [], results = [];
	        function next(err, result) {
	            if (err && !accumulate)
	                return reject(err);
	            if (err)
	                errors.push(err);
	            if (i === len)
	                return errors.length ? reject(arrays_1.flatten(errors)) : resolve(results);
	            var ret = iterator.call(context, array[i++]);
	            if (isPromise(ret)) {
	                ret.then(function (r) { results.push(r); next(null, r); }, next);
	            }
	            else if (ret instanceof Error) {
	                next(ret);
	            }
	            else {
	                next(null);
	            }
	        }
	        next(null);
	    });
	}
	exports.mapAsync = mapAsync;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(21));
	__export(__webpack_require__(23));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	(function (Browser) {
	    Browser[Browser["Chrome"] = 0] = "Chrome";
	    Browser[Browser["Explorer"] = 1] = "Explorer";
	    Browser[Browser["Firefox"] = 2] = "Firefox";
	    Browser[Browser["Safari"] = 3] = "Safari";
	    Browser[Browser["Opera"] = 4] = "Opera";
	    Browser[Browser["Unknown"] = 5] = "Unknown";
	})(exports.Browser || (exports.Browser = {}));
	var Browser = exports.Browser;
	var browser = (function () {
	    var ua = navigator.userAgent;
	    if (!!~ua.indexOf('MSIE'))
	        return Browser.Explorer;
	    var isOpera = !!~ua.toLowerCase().indexOf('op'), isChrome = !!~ua.indexOf('Chrome'), isSafari = !!~ua.indexOf('Safari');
	    if (isChrome && isSafari)
	        return Browser.Safari;
	    if (isChrome && isOpera)
	        return Browser.Opera;
	    if (isChrome)
	        return Browser.Chrome;
	    return Browser.Unknown;
	})();
	var is_node = (function () {
	    try {
	        return 'object' === typeof process && Object.prototype.toString.call(process) === '[object process]';
	    }
	    catch (e) {
	        return false;
	    }
	})();
	function isNode() { return is_node; }
	exports.isNode = isNode;
	function isSafari() {
	    return browser === Browser.Safari;
	}
	exports.isSafari = isSafari;
	function isChrome() {
	    return browser === Browser.Chrome;
	}
	exports.isChrome = isChrome;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22)))

/***/ },
/* 22 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrays_1 = __webpack_require__(15);
	var objects_1 = __webpack_require__(17);
	var utils_1 = __webpack_require__(21);
	var ElementProto = (typeof Element !== 'undefined' && Element.prototype) || {};
	var matchesSelector = ElementProto.matches ||
	    ElementProto.webkitMatchesSelector ||
	    ElementProto.mozMatchesSelector ||
	    ElementProto.msMatchesSelector ||
	    ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~arrays_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	var transitionEndEvent = (function transitionEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'oTransitionEnd otransitionend',
	        'transition': 'transitionend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	var animationEndEvent = (function animationEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitAnimation': 'webkitAnimationEnd',
	        'MozAnimation': 'animationend',
	        'OAnimation': 'oAnimationEnd oanimationend',
	        'animation': 'animationend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener, capture) {
	    if (capture === void 0) { capture = false; }
	    if (utils_1.isSafari() && elm === window) {
	        elm.addEventListener(eventName, listener, capture);
	    }
	    else {
	        elementAddEventListener.call(elm, eventName, listener, capture);
	    }
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    if (utils_1.isSafari() && elm === window) {
	        elm.removeEventListener(eventName, listener);
	    }
	    else {
	        elementRemoveEventListener.call(elm, eventName, listener);
	    }
	}
	exports.removeEventListener = removeEventListener;
	var unbubblebles = 'focus blur change'.split(' ');
	var domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    var root = elm;
	    var handler = function (e) {
	        var node = e.target || e.srcElement;
	        if (e.delegateTarget)
	            return;
	        for (; node && node != root; node = node.parentNode) {
	            if (matches(node, selector)) {
	                e.delegateTarget = node;
	                callback(e);
	            }
	        }
	    };
	    var useCap = !!~unbubblebles.indexOf(eventName);
	    addEventListener(elm, eventName, handler, useCap);
	    domEvents.push({ elm: elm, eventName: eventName, handler: handler, listener: callback, selector: selector });
	    return handler;
	}
	exports.delegate = delegate;
	function undelegate(elm, selector, eventName, callback) {
	    var handlers = domEvents.slice();
	    for (var i = 0, len = handlers.length; i < len; i++) {
	        var item = handlers[i];
	        var match = elm === item.elm &&
	            (eventName ? item.eventName === eventName : true) &&
	            (callback ? item.listener === callback : true) &&
	            (selector ? item.selector === selector : true);
	        if (!match)
	            continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(arrays_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim()))
	                continue;
	            elm.classList.add(split[i].trim());
	        }
	    }
	    else {
	        elm.className = arrays_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    }
	    else {
	        var split = elm.className.split(' '), classNames = className.split(' '), tmp = split, index = void 0;
	        for (var i = 0, ii = classNames.length; i < ii; i++) {
	            index = split.indexOf(classNames[i]);
	            if (!!~index)
	                split = split.splice(index, 1);
	        }
	    }
	}
	exports.removeClass = removeClass;
	function hasClass(elm, className) {
	    if (elm.classList) {
	        return elm.classList.contains(className);
	    }
	    var reg = new RegExp('\b' + className);
	    return reg.test(elm.className);
	}
	exports.hasClass = hasClass;
	function selectionStart(elm) {
	    if ('selectionStart' in elm) {
	        return elm.selectionStart;
	    }
	    else if (document.selection) {
	        elm.focus();
	        var sel = document.selection.createRange();
	        var selLen = document.selection.createRange().text.length;
	        sel.moveStart('character', -elm.value.length);
	        return sel.text.length - selLen;
	    }
	}
	exports.selectionStart = selectionStart;
	var _events = {
	    animationEnd: null,
	    transitionEnd: null
	};
	function transitionEnd(elm, fn, ctx, duration) {
	    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = (function () {
	    var fns = [], listener, doc = document, hack = doc.documentElement.doScroll, domContentLoaded = 'DOMContentLoaded', loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, listener = function () {
	            doc.removeEventListener(domContentLoaded, listener);
	            loaded = true;
	            while (listener = fns.shift())
	                listener();
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	});
	var Html = (function () {
	    function Html(el) {
	        if (!Array.isArray(el))
	            el = [el];
	        this._elements = el || [];
	    }
	    Html.query = function (query, context) {
	        if (typeof context === 'string') {
	            context = document.querySelectorAll(context);
	        }
	        var html;
	        var els;
	        if (typeof query === 'string') {
	            if (context) {
	                if (context instanceof HTMLElement) {
	                    els = arrays_1.slice(context.querySelectorAll(query));
	                }
	                else {
	                    html = new Html(arrays_1.slice(context));
	                    return html.find(query);
	                }
	            }
	            else {
	                els = arrays_1.slice(document.querySelectorAll(query));
	            }
	        }
	        else if (query && query instanceof Element) {
	            els = [query];
	        }
	        else if (query && query instanceof NodeList) {
	            els = arrays_1.slice(query);
	        }
	        return new Html(els);
	    };
	    Object.defineProperty(Html.prototype, "length", {
	        get: function () {
	            return this._elements.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Html.prototype.get = function (n) {
	        n = n === undefined ? 0 : n;
	        return n >= this.length ? undefined : this._elements[n];
	    };
	    Html.prototype.addClass = function (str) {
	        return this.forEach(function (e) {
	            addClass(e, str);
	        });
	    };
	    Html.prototype.removeClass = function (str) {
	        return this.forEach(function (e) {
	            removeClass(e, str);
	        });
	    };
	    Html.prototype.hasClass = function (str) {
	        return this._elements.reduce(function (p, c) {
	            return hasClass(c, str);
	        }, false);
	    };
	    Html.prototype.attr = function (key, value) {
	        var attr;
	        if (typeof key === 'string' && value) {
	            attr = (_a = {}, _a[key] = value, _a);
	        }
	        else if (typeof key == 'string') {
	            if (this.length)
	                return this.get(0).getAttribute(key);
	        }
	        else if (objects_1.isObject(key)) {
	            attr = key;
	        }
	        return this.forEach(function (e) {
	            for (var k in attr) {
	                e.setAttribute(k, attr[k]);
	            }
	        });
	        var _a;
	    };
	    Html.prototype._setValue = function (node, value) {
	        var type = node.type || "";
	        var isCheckbox = /checkbox/.test(type);
	        var isRadio = /radio/.test(type);
	        var isRadioOrCheckbox = isCheckbox || isRadio;
	        var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
	        var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
	        var isSelect = /select/i.test(node.nodeName);
	        if (value == null)
	            value = "";
	        if (isRadioOrCheckbox) {
	            if (isRadio) {
	                if (String(value) === String(node.value)) {
	                    node.checked = true;
	                }
	            }
	            else {
	                node.checked = value;
	            }
	        }
	        else {
	            if (isInput || isSelect) {
	                node.value = value;
	            }
	            else {
	                node.textContent = value;
	            }
	        }
	    };
	    Html.prototype._getValue = function (node) {
	        var type = node.type || "";
	        var isCheckbox = /checkbox/.test(type);
	        var isRadio = /radio/.test(type);
	        var isRadioOrCheckbox = isCheckbox || isRadio;
	        var hasValue = Object.prototype.hasOwnProperty.call(node, "value");
	        var isInput = hasValue || /input|textarea|checkbox/.test(node.nodeName.toLowerCase());
	        var isSelect = /select/i.test(node.nodeName);
	        if (isCheckbox) {
	            return Boolean(node.checked);
	        }
	        else if (isInput || isSelect) {
	            return node.value || "";
	        }
	        else {
	            return node.textContent || "";
	        }
	    };
	    Html.prototype.val = function (value) {
	        var _this = this;
	        if (arguments.length === 0) {
	            var first = this.get(0);
	            if (first === undefined)
	                return undefined;
	            return this._getValue(first);
	        }
	        else {
	            return this.forEach(function (e) { return _this._setValue(e, value); });
	        }
	    };
	    Html.prototype.text = function (str) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).textContent : null;
	        }
	        return this.forEach(function (e) { return e.textContent = str; });
	    };
	    Html.prototype.html = function (html) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).innerHTML : null;
	        }
	        return this.forEach(function (e) { return e.innerHTML = html; });
	    };
	    Html.prototype.css = function (attr, value) {
	        if (arguments.length === 2) {
	            return this.forEach(function (e) {
	                if (attr in e.style)
	                    e.style[attr] = String(value);
	            });
	        }
	        else {
	            return this.forEach(function (e) {
	                for (var k in attr) {
	                    if (attr in e.style)
	                        e.style[k] = String(attr[k]);
	                }
	            });
	        }
	    };
	    Html.prototype.parent = function () {
	        var out = [];
	        this.forEach(function (e) {
	            if (e.parentElement) {
	                out.push(e.parentElement);
	            }
	        });
	        return new Html(out);
	    };
	    Html.prototype.find = function (str) {
	        var out = [];
	        this.forEach(function (e) {
	            out = out.concat(arrays_1.slice(e.querySelectorAll(str)));
	        });
	        return new Html(out);
	    };
	    Html.prototype.map = function (fn) {
	        var out = new Array(this.length);
	        this.forEach(function (e, i) {
	            out[i] = fn(e, i);
	        });
	        return out;
	    };
	    Html.prototype.forEach = function (fn) {
	        this._elements.forEach(fn);
	        return this;
	    };
	    return Html;
	}());
	exports.Html = Html;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var strings_1 = __webpack_require__(18);
	var objects_1 = __webpack_require__(17);
	var promises_1 = __webpack_require__(19);
	var utils_1 = __webpack_require__(16);
	(function (HttpMethod) {
	    HttpMethod[HttpMethod["GET"] = 0] = "GET";
	    HttpMethod[HttpMethod["PUT"] = 1] = "PUT";
	    HttpMethod[HttpMethod["POST"] = 2] = "POST";
	    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
	    HttpMethod[HttpMethod["HEAD"] = 4] = "HEAD";
	})(exports.HttpMethod || (exports.HttpMethod = {}));
	var HttpMethod = exports.HttpMethod;
	function isResponse(a) {
	    return objects_1.isObject(status) && objects_1.has(a, 'status') && objects_1.has(a, 'statusText') && objects_1.has(a, 'body');
	}
	exports.isResponse = isResponse;
	var HttpError = (function (_super) {
	    __extends(HttpError, _super);
	    function HttpError(status, message, body) {
	        _super.call(this, message);
	        if (arguments.length === 1) {
	            if (isResponse(status)) {
	                this.status = status.status;
	                this.message = status.statusText;
	                this.body = status.body;
	            }
	            else {
	                this.status = status;
	            }
	        }
	        else {
	            this.status = status;
	            this.message = message;
	            this.body = body;
	        }
	    }
	    return HttpError;
	}(Error));
	exports.HttpError = HttpError;
	var ResponseError = (function (_super) {
	    __extends(ResponseError, _super);
	    function ResponseError(message) {
	        _super.call(this, message);
	    }
	    return ResponseError;
	}(Error));
	exports.ResponseError = ResponseError;
	function queryStringToParams(qs) {
	    var kvp, k, v, ls, params = {}, decode = decodeURIComponent;
	    var kvps = qs.split('&');
	    for (var i = 0, l = kvps.length; i < l; i++) {
	        var param = kvps[i];
	        kvp = param.split('='), k = kvp[0], v = kvp[1];
	        if (v == null)
	            v = true;
	        k = decode(k), v = decode(v), ls = params[k];
	        if (Array.isArray(ls))
	            ls.push(v);
	        else if (ls)
	            params[k] = [ls, v];
	        else
	            params[k] = v;
	    }
	    return params;
	}
	exports.queryStringToParams = queryStringToParams;
	function queryParam(obj) {
	    return Object.keys(obj).reduce(function (a, k) { a.push(k + '=' + encodeURIComponent(obj[k])); return a; }, []).join('&');
	}
	exports.queryParam = queryParam;
	var jsonRe = /^application\/json/, fileProto = /^file:/;
	var isValid = function (xhr, url) {
	    return (xhr.status >= 200 && xhr.status < 300) ||
	        (xhr.status === 304) ||
	        (xhr.status === 0 && fileProto.test(url)) ||
	        (xhr.status === 0 && window.location.protocol === 'file:');
	};
	var Request = (function () {
	    function Request(_method, _url) {
	        this._method = _method;
	        this._url = _url;
	        this._params = {};
	        this._headers = { 'X-Requested-With': 'XMLHttpRequest' };
	        this._xhr = utils_1.ajax();
	    }
	    Request.prototype.uploadProgress = function (fn) {
	        this._xhr.upload.addEventListener('progress', fn);
	        return this;
	    };
	    Request.prototype.downloadProgress = function (fn) {
	        this._xhr.addEventListener('progress', fn);
	        return this;
	    };
	    Request.prototype.header = function (field, value) {
	        if (strings_1.isString(field) && strings_1.isString(value)) {
	            this._headers[field] = value;
	        }
	        else if (objects_1.isObject(field)) {
	            objects_1.extend(this._headers, field);
	        }
	        return this;
	    };
	    Request.prototype.params = function (key, value) {
	        if (arguments.length === 1 && objects_1.isObject(key)) {
	            objects_1.extend(this._params, key);
	        }
	        else if (arguments.length === 2) {
	            this._params[key] = value;
	        }
	        return this;
	    };
	    Request.prototype.withCredentials = function (ret) {
	        this._xhr.withCredentials = ret;
	        return this;
	    };
	    Request.prototype.json = function (data, throwOnInvalid) {
	        var _this = this;
	        if (throwOnInvalid === void 0) { throwOnInvalid = false; }
	        this.header('content-type', 'application/json; charset=utf-8');
	        if (!strings_1.isString(data)) {
	            data = JSON.stringify(data);
	        }
	        return this.end(data, throwOnInvalid)
	            .then(function (resp) {
	            var accepts = _this._xhr.getResponseHeader('content-type');
	            if (jsonRe.test(accepts) && resp.body != "") {
	                var json = JSON.parse(resp.body);
	                var jResp = resp;
	                jResp.body = json;
	                return jResp;
	            }
	            else {
	                throw new ResponseError("type error");
	            }
	        });
	    };
	    Request.prototype.end = function (data, throwOnInvalid) {
	        var _this = this;
	        if (throwOnInvalid === void 0) { throwOnInvalid = false; }
	        data = data || this._data;
	        var defer = promises_1.deferred();
	        this._xhr.addEventListener('readystatechange', function () {
	            if (_this._xhr.readyState !== XMLHttpRequest.DONE)
	                return;
	            var resp = {
	                status: _this._xhr.status,
	                statusText: _this._xhr.statusText,
	                body: null,
	                headers: {},
	                isValid: false,
	                contentLength: 0,
	                contentType: null
	            };
	            var headers = _this._xhr.getAllResponseHeaders().split('\r\n');
	            if (headers.length) {
	                for (var i = 0, ii = headers.length; i < ii; i++) {
	                    if (headers[i] === '')
	                        continue;
	                    var split = headers[i].split(':');
	                    resp.headers[split[0].trim()] = split[1].trim();
	                }
	            }
	            resp.contentType = resp.headers['Content-Type'];
	            resp.contentLength = parseInt(resp.headers['Content-Length']);
	            if (isNaN(resp.contentLength))
	                resp.contentLength = 0;
	            resp.body = _this._xhr.response;
	            resp.isValid = isValid(_this._xhr, _this._url);
	            if (!resp.isValid && throwOnInvalid) {
	                return defer.reject(new HttpError(resp));
	            }
	            defer.resolve(resp);
	        });
	        var method = HttpMethod[this._method];
	        var url = this._url;
	        if (data && data === Object(data) && this._method == HttpMethod.GET) {
	            var sep = (url.indexOf('?') === -1) ? '?' : '&';
	            var d = sep + queryParam(data);
	            url += d;
	        }
	        url = this._apply_params(url);
	        this._xhr.open(method, url, true);
	        for (var key in this._headers) {
	            this._xhr.setRequestHeader(key, this._headers[key]);
	        }
	        this._xhr.send(data);
	        return defer.promise;
	    };
	    Request.prototype._apply_params = function (url) {
	        var params = {};
	        var idx = url.indexOf('?');
	        if (idx > -1) {
	            params = objects_1.extend(params, queryStringToParams(url.substr(idx + 1)));
	            url = url.substr(0, idx);
	        }
	        objects_1.extend(params, this._params);
	        if (!objects_1.isEmpty(params)) {
	            var sep = (url.indexOf('?') === -1) ? '?' : '&';
	            url += sep + queryParam(params);
	        }
	        return url;
	    };
	    return Request;
	}());
	exports.Request = Request;
	exports.request = {};
	['get', 'post', 'put', 'delete', 'patch', 'head']
	    .forEach(function (m) {
	    exports.request[m === 'delete' ? 'del' : m] = function (url) {
	        var mm = HttpMethod[m.toUpperCase()];
	        return new Request(mm, url);
	    };
	});


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const utilities_1 = __webpack_require__(14);
	(function (HttpMethod) {
	    HttpMethod[HttpMethod["GET"] = 0] = "GET";
	    HttpMethod[HttpMethod["POST"] = 1] = "POST";
	    HttpMethod[HttpMethod["PUT"] = 2] = "PUT";
	    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
	})(exports.HttpMethod || (exports.HttpMethod = {}));
	var HttpMethod = exports.HttpMethod;
	class AssetsError extends Error {
	    constructor(status, message) {
	        if (utilities_1.isString(status)) {
	            message = status;
	            status = 200;
	        }
	        else if (arguments.length === 1) {
	            message = "";
	        }
	        super(message);
	        this.message = message;
	        this.status = status;
	    }
	    toJSON() {
	        let out = {
	            status: this.status,
	            message: this.message
	        };
	        if (this.name)
	            out.name = this.name;
	        return out;
	    }
	}
	exports.AssetsError = AssetsError;
	class HttpError extends AssetsError {
	}
	exports.HttpError = HttpError;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(27));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const collection_1 = __webpack_require__(6);
	const utilities_1 = __webpack_require__(28);
	const utils = __webpack_require__(14);
	class AssetsModel extends collection_1.RestModel {
	    constructor(data, options) {
	        super(data, options);
	        this.idAttribute = "id";
	    }
	    get fullPath() {
	        let path = this.get('path');
	        if (path !== '/') {
	            if (path[path.length - 1] !== '/')
	                path += '/';
	        }
	        path = path + this.get('filename');
	        return path;
	    }
	    getURL() {
	        let baseURL = utils.result(this, 'rootURL');
	        if (this.collection) {
	            baseURL = this.collection.getURL();
	        }
	        if (baseURL == null)
	            throw new Error("no url");
	        let path = this.get('path');
	        path = utilities_1.normalizeURL(baseURL, path, encodeURIComponent(this.get('filename')));
	        return path;
	    }
	    toJSON() {
	        return super.toJSON();
	    }
	}
	exports.AssetsModel = AssetsModel;
	class AssetsCollection extends collection_1.PaginatedCollection {
	    constructor(client, options) {
	        super(null, {
	            url: client.url
	        });
	        this.Model = AssetsModel;
	        this.comparator = 'name';
	        options = options || { fetchOnUrl: true };
	        this._state.size = 30;
	        this.listenTo(client, 'change:url', () => {
	            this.url = client.url;
	            if (options.fetchOnUrl)
	                this.fetch();
	        });
	    }
	}
	exports.AssetsCollection = AssetsCollection;


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	function ajax() {
	    var e;
	    if (window.hasOwnProperty('XMLHttpRequest')) {
	        return new XMLHttpRequest();
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.6.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.3.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    return e;
	}
	exports.ajax = ajax;
	;
	function truncate(str, length) {
	    let n = str.substring(0, Math.min(length, str.length));
	    return n + (n.length == str.length ? '' : '...');
	}
	exports.truncate = truncate;
	function humanFileSize(bytes, si = false) {
	    var thresh = si ? 1000 : 1024;
	    if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	    }
	    var units = si
	        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	    return bytes.toFixed(1) + ' ' + units[u];
	}
	exports.humanFileSize = humanFileSize;
	function normalizeURL(url, ...segments) {
	    let i, p = "";
	    if ((i = url.indexOf('?')) >= 0) {
	        p = url.substr(i);
	        url = url.substr(0, i);
	    }
	    if (url[url.length - 1] !== '/')
	        url += '/';
	    for (let i = 0, ii = segments.length; i < ii; i++) {
	        let s = segments[i];
	        if (s === '/')
	            continue;
	        if (s[0] === '/')
	            s = s.substr(1);
	        if (s[s.length - 1] !== '/')
	            s += '/';
	        url += s;
	    }
	    if (url[url.length - 1] === '/')
	        url = url.substr(0, url.length - 1);
	    return url + p;
	}
	exports.normalizeURL = normalizeURL;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(30);
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(55));
	__export(__webpack_require__(57));
	__export(__webpack_require__(59));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(31));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const interfaces_1 = __webpack_require__(32);
	let AudioPreview = class AudioPreview extends views_1.View {
	    constructor(...args) {
	        super(...args);
	        this.template = function (data) {
	            return `
				<audio controls>
					<source src="${this.model.getURL()}" type="${data.mime}" />
				</audio>
			`;
	        };
	    }
	};
	AudioPreview = __decorate([
	    interfaces_1.preview('audio/mpeg', 'audio/wav', 'audio/ogg'), 
	    __metadata('design:paramtypes', [])
	], AudioPreview);
	exports.AudioPreview = AudioPreview;


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	var previewHandlers = {};
	function setPreviewHandler(mime, view) {
	    if (!Array.isArray(mime)) {
	        mime = [mime];
	    }
	    mime.forEach(function (m) {
	        previewHandlers[m] = view;
	    });
	}
	function getPreviewHandler(mime) {
	    let reg, k;
	    for (k in previewHandlers) {
	        if ((new RegExp(k)).test(mime))
	            return previewHandlers[k];
	    }
	    return null;
	}
	exports.getPreviewHandler = getPreviewHandler;
	function preview(...mimetypes) {
	    return function (target) {
	        setPreviewHandler(mimetypes, target);
	    };
	}
	exports.preview = preview;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const views_1 = __webpack_require__(11);
	const interfaces_1 = __webpack_require__(32);
	interfaces_1.preview('video/mp4', 'video/ogg', 'video/webm', 'video/x-m4v');
	class VideoPreview extends views_1.View {
	    constructor(...args) {
	        super(...args);
	        this.template = function (data) {
	            return `
				<video controls>
					<source src="${this.model.getURL()}" type="${data.mime}" />
				</video>
			`;
	        };
	    }
	}
	exports.VideoPreview = VideoPreview;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const views_1 = __webpack_require__(11);
	const interfaces_1 = __webpack_require__(32);
	interfaces_1.preview('image/*');
	class ImagePreview extends views_1.View {
	    constructor(...args) {
	        super(...args);
	        this.template = function (data) {
	            return `<img src="${this.model.getURL()}"/>`;
	        };
	    }
	}
	exports.ImagePreview = ImagePreview;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const fileuploader_1 = __webpack_require__(12);
	const views_1 = __webpack_require__(11);
	const utils = __webpack_require__(5);
	let defaults = { maxSize: 2048, mimeType: '*', autoUpload: false };
	class MessageView extends views_1.View {
	    show() { this.el.style.display = 'block'; }
	    hide() { this.el.style.display = 'none'; }
	    setMessage(msg) {
	        this.el.textContent = msg;
	    }
	}
	class ProgressView extends views_1.View {
	    show() { this.el.style.display = 'block'; }
	    hide() { this.el.style.display = 'none'; }
	    setProgress(progress, total, percent) {
	        percent = Math.floor(percent * 100) / 100;
	        this.el.textContent = `${percent}/100`;
	    }
	}
	function createButton(options) {
	    let progressView = new ProgressView();
	    let errorView = new MessageView();
	    options.progressView = progressView;
	    options.errorView = errorView;
	    let uploadButton = new UploadButton(options);
	    let div = document.createElement('div');
	    div.appendChild(uploadButton.el);
	    progressView.appendTo(div);
	    errorView.appendTo(div);
	    return div;
	}
	exports.createButton = createButton;
	let UploadButton = class UploadButton extends views_1.View {
	    constructor(options) {
	        options = utils.extend({}, defaults, options);
	        super(options);
	        utils.extend(this, utils.pick(options, ['errorView', 'progressView']));
	        this.uploader = options.uploader || new fileuploader_1.FileUploader(options);
	        this.options = options;
	    }
	    set url(url) {
	        this.uploader.options.url = url;
	    }
	    get url() {
	        return this.uploader.options.url;
	    }
	    onRender() {
	        if (this.options.mimeType) {
	            let mime;
	            if (Array.isArray(this.options.mimeType)) {
	                mime = this.options.mimeType.join(',');
	            }
	            else {
	                mime = this.options.mimeType;
	            }
	            this.el.setAttribute('accept', mime);
	        }
	    }
	    _onChange(e) {
	        this.hideErrorView();
	        let files = this.el.files;
	        if (files.length === 0)
	            return;
	        let file = files[0];
	        this.trigger('change', file);
	        if (this.options.autoUpload === true) {
	            this.upload(file);
	        }
	        else {
	            try {
	                this.uploader.validateFile(file);
	            }
	            catch (e) {
	                this.trigger('error', e);
	            }
	        }
	    }
	    upload(file) {
	        let pv = this.progressView;
	        if (pv != null) {
	            pv.show();
	        }
	        return this.uploader.upload(file, (progress, total) => {
	            this.trigger('progress', { progress: progress, total: total });
	            this.showProgress(progress, total);
	        }).then((result) => {
	            this.trigger('upload', result);
	            if (pv != null)
	                pv.hide();
	            this.clear();
	        }).catch((e) => {
	            this.trigger('error', e);
	            this.showErrorMessage(e);
	            this.clear();
	            if (pv != null)
	                pv.hide();
	        });
	    }
	    clear() {
	        try {
	            this.el.value = '';
	            if (this.el.value) {
	                this.el.type = 'text';
	                this.el.type = 'file';
	            }
	        }
	        catch (e) {
	            console.error('could not clear file-input');
	        }
	    }
	    showErrorMessage(error) {
	        if (this.errorView != null) {
	            this.errorView.setMessage(error.message);
	            this.errorView.show();
	        }
	    }
	    hideErrorView() {
	        if (this.errorView) {
	            this.errorView.hide();
	        }
	    }
	    showProgress(progress, total) {
	        if (this.progressView != null) {
	            let percent = (progress / total) * 100;
	            this.progressView.setProgress(progress, total, percent);
	        }
	    }
	};
	UploadButton = __decorate([
	    views_1.attributes({
	        tagName: 'input',
	        attributes: { type: 'file' },
	        events: {
	            change: '_onChange'
	        }
	    }), 
	    __metadata('design:paramtypes', [Object])
	], UploadButton);
	exports.UploadButton = UploadButton;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(37));
	__export(__webpack_require__(52));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const utils_1 = __webpack_require__(38);
	const utils = __webpack_require__(40);
	const mime_types_1 = __webpack_require__(51);
	let AssetsListItemView = class AssetsListItemView extends views_1.View {
	    onRender() {
	        let model = this.model;
	        let mime = model.get('mime');
	        utils.removeClass(this.ui['mime'], 'mime-unknown');
	        mime = mime_types_1.getMimeIcon(mime.replace(/\//, '-'));
	        utils.addClass(this.ui['mime'], mime);
	        this.ui['name'].textContent = utils.truncate(model.get('name') || model.get('filename'), 25);
	        let url = model.getURL();
	        let img = new Image();
	        img.src = "data:image/png;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAI=";
	        img.setAttribute('data-src', `${url}?thumbnail=true`);
	        this.ui['mime'].parentNode.insertBefore(img, this.ui['mime']);
	        this.ui['mime'].style.display = 'none';
	        this.trigger('image');
	    }
	    _onClick(e) {
	        e.preventDefault();
	        let target = e.target;
	        if (target === this.ui['remove'])
	            return;
	        this.triggerMethod('click', this.model);
	    }
	    _onDblClick(e) {
	        this.triggerMethod('dblclick', this.model);
	    }
	};
	AssetsListItemView = __decorate([
	    utils_1.template('list-item'),
	    views_1.attributes({
	        tagName: 'div',
	        className: 'assets-list-item',
	        ui: {
	            remove: '.assets-list-item-close-button',
	            name: '.name',
	            mime: '.mime'
	        },
	        triggers: {
	            'click @ui.remove': 'remove'
	        },
	        events: {
	            'click': '_onClick',
	            'dblclick': '_onDblClick'
	        }
	    }), 
	    __metadata('design:paramtypes', [])
	], AssetsListItemView);
	exports.AssetsListItemView = AssetsListItemView;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const templates_1 = __webpack_require__(39);
	function template(name) {
	    return function (target) {
	        let t;
	        if (!(t = templates_1.default[name])) {
	            throw new Error('could not find template: ' + name);
	        }
	        target.prototype.template = t;
	    };
	}
	exports.template = template;
	function getImageSize(image) {
	    const load = () => {
	        return new Promise((resolve, reject) => {
	            let i = new Image();
	            i.onload = () => {
	                resolve({
	                    width: i.naturalWidth || i.width,
	                    height: i.naturalHeight || i.height
	                });
	            };
	            i.onerror = reject;
	            i.src = image.src;
	        });
	    };
	    if (image.naturalHeight === undefined) {
	        return load();
	    }
	    else if (image.naturalHeight === 0) {
	        return new Promise((resolve, reject) => {
	            var time = setTimeout(() => {
	                time = null;
	                load().then(resolve, reject);
	            }, 200);
	            image.onload = () => {
	                if (time !== null) {
	                    clearTimeout(time);
	                }
	                resolve({
	                    width: image.naturalWidth,
	                    height: image.naturalHeight
	                });
	            };
	        });
	    }
	    else {
	        return Promise.resolve({
	            width: image.naturalWidth,
	            height: image.naturalHeight
	        });
	    }
	}
	exports.getImageSize = getImageSize;
	function getCropping(size, ratio) {
	    let width = size.width, height = size.height;
	    let nh = height, nw = width;
	    if (width > height) {
	        nh = width / ratio;
	    }
	    else {
	        nw = height * ratio;
	    }
	    return {
	        x: 0,
	        y: 0,
	        width: nw,
	        height: nh,
	        rotate: 0,
	        scaleX: 1,
	        scaleY: 1
	    };
	}
	exports.getCropping = getCropping;


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    "gallery": "<div class=\"gallery-area\">  <div class=\"gallery-list\">  </div>  <div class=\"gallery-preview\"></div>  </div>\n<div class=\"upload-progress-container\">  <div class=\"upload-progress\"></div>\n</div>\n<!--div class=\"gallery-toolbar\">  <label class=\"assets-button\">  <span>Upload</span>  <input class=\"upload-button\" style=\"display:none;\" type=\"file\" />  </label>  <input class=\"assets-button assets-search-input\" type=\"text\" />\n</div-->",
	    "list-item": "<a class=\"assets-list-item-close-button\"></a>\n<div class=\"thumbnail-container\">  <i class=\"mime mime-unknown\"></i>\n</div>\n<div class=\"name\"></div>",
	    "preview-info": "<table>  <tr>  <td>Name</td>  <td class=\"name\"></td>  </tr>  <tr>  <td>Mime</td>  <td class=\"mimetype\"></td>  </tr>  <tr>  <td>Size</td>  <td class=\"size\"></td>  </tr>  <tr>  <td>Download</td>  <td class=\"download\">  <a></a>  </td>  </tr>\n</table>",
	    "preview": "<div class=\"preview-region\">\n</div>\n<div class=\"info-region\">\n</div>"
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(41));
	__export(__webpack_require__(49));
	__export(__webpack_require__(50));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(42));
	__export(__webpack_require__(43));
	__export(__webpack_require__(46));
	__export(__webpack_require__(44));
	__export(__webpack_require__(47));
	__export(__webpack_require__(45));
	__export(__webpack_require__(48));


/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	function isObject(obj) {
	    return obj === Object(obj);
	}
	exports.isObject = isObject;
	function isString(a) {
	    return typeof a === 'function';
	}
	exports.isString = isString;
	function isNumber(a) {
	    return typeof a === 'number';
	}
	exports.isNumber = isNumber;
	function isRegExp(a) {
	    return a && a instanceof RegExp;
	}
	exports.isRegExp = isRegExp;
	function isDate(a) {
	    return a && a instanceof Date;
	}
	exports.isDate = isDate;
	function isArray(a) {
	    return Array.isArray(a);
	}
	exports.isArray = isArray;
	function isFunction(a) {
	    return typeof a === 'function';
	}
	exports.isFunction = isFunction;
	var idCounter = 0;
	/** Generate an unique id with an optional prefix
	 * @param { string } prefix
	 * @return { string }
	 */
	function uniqueId(prefix = '') {
	    return prefix + (++idCounter);
	}
	exports.uniqueId = uniqueId;
	function equal(a, b) {
	    return eq(a, b, [], []);
	}
	exports.equal = equal;
	function getOption(option, objs) {
	    for (let o of objs) {
	        if (isObject(o) && o[option])
	            return o[option];
	    }
	    return null;
	}
	exports.getOption = getOption;
	exports.nextTick = (function () {
	    var canSetImmediate = typeof window !== 'undefined'
	        && window.setImmediate;
	    var canPost = typeof window !== 'undefined'
	        && window.postMessage && window.addEventListener;
	    if (canSetImmediate) {
	        return function (f) { return window.setImmediate(f); };
	    }
	    if (canPost) {
	        var queue = [];
	        window.addEventListener('message', function (ev) {
	            var source = ev.source;
	            if ((source === window || source === null) && ev.data === 'process-tick') {
	                ev.stopPropagation();
	                if (queue.length > 0) {
	                    var fn = queue.shift();
	                    fn();
	                }
	            }
	        }, true);
	        return function nextTick(fn) {
	            queue.push(fn);
	            window.postMessage('process-tick', '*');
	        };
	    }
	    return function nextTick(fn) {
	        setTimeout(fn, 0);
	    };
	})();
	function xmlHttpRequest() {
	    var e;
	    if (window.hasOwnProperty('XMLHttpRequest')) {
	        return new XMLHttpRequest();
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.6.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp.3.0');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    try {
	        return new ActiveXObject('msxml2.xmlhttp');
	    }
	    catch (_error) {
	        e = _error;
	    }
	    throw e;
	}
	exports.xmlHttpRequest = xmlHttpRequest;
	const _has = Object.prototype.hasOwnProperty;
	function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b)
	        return a !== 0 || 1 / a == 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null)
	        return a === b;
	    // Unwrap any wrapped objects.
	    //if (a instanceof _) a = a._wrapped;
	    //if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className != toString.call(b))
	        return false;
	    switch (className) {
	        // Strings, numbers, dates, and booleans are compared by value.
	        case '[object String]':
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return a == String(b);
	        case '[object Number]':
	            // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
	            // other numeric values.
	            return a !== +a ? b !== +b : (a === 0 ? 1 / a === 1 / b : a === +b);
	        case '[object Date]':
	        case '[object Boolean]':
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a == +b;
	        // RegExps are compared by their source patterns and flags.
	        case '[object RegExp]':
	            return a.source == b.source &&
	                a.global == b.global &&
	                a.multiline == b.multiline &&
	                a.ignoreCase == b.ignoreCase;
	    }
	    if (typeof a != 'object' || typeof b != 'object')
	        return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] == a)
	            return bStack[length] == b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (aCtor !== bCtor && !(typeof aCtor === 'function' && (aCtor instanceof aCtor) &&
	        typeof bCtor === 'function' && (bCtor instanceof bCtor))) {
	        return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size = 0, result = true;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        size = a.length;
	        result = size === b.length;
	        if (result) {
	            // Deep compare the contents, ignoring non-numeric properties.
	            while (size--) {
	                if (!(result = eq(a[size], b[size], aStack, bStack)))
	                    break;
	            }
	        }
	    }
	    else {
	        // Deep compare objects.
	        for (var key in a) {
	            if (_has.call(a, key)) {
	                // Count the expected number of properties.
	                size++;
	                // Deep compare each member.
	                if (!(result = _has.call(b, key) && eq(a[key], b[key], aStack, bStack)))
	                    break;
	            }
	        }
	        // Ensure that both objects contain the same number of properties.
	        if (result) {
	            for (key in b) {
	                if (_has.call(b, key) && !(size--))
	                    break;
	            }
	            result = !size;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	}
	;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const arrays_1 = __webpack_require__(44);
	const strings_1 = __webpack_require__(45);
	const objects_1 = __webpack_require__(46);
	const nativeBind = Function.prototype.bind;
	function proxy(from, to, fns) {
	    if (!Array.isArray(fns))
	        fns = [fns];
	    fns.forEach(function (fn) {
	        if (typeof to[fn] === 'function') {
	            from[fn] = bind(to[fn], to);
	        }
	    });
	}
	exports.proxy = proxy;
	function bind(method, context, ...args) {
	    if (typeof method !== 'function')
	        throw new Error('method not at function');
	    if (nativeBind != null)
	        return nativeBind.call(method, context, ...args);
	    args = args || [];
	    let fnoop = function () { };
	    let fBound = function () {
	        let ctx = this instanceof fnoop ? this : context;
	        return callFunc(method, ctx, args.concat(arrays_1.slice(arguments)));
	    };
	    fnoop.prototype = this.prototype;
	    fBound.prototype = new fnoop();
	    return fBound;
	}
	exports.bind = bind;
	function callFunc(fn, ctx, args = []) {
	    switch (args.length) {
	        case 0:
	            return fn.call(ctx);
	        case 1:
	            return fn.call(ctx, args[0]);
	        case 2:
	            return fn.call(ctx, args[0], args[1]);
	        case 3:
	            return fn.call(ctx, args[0], args[1], args[2]);
	        case 4:
	            return fn.call(ctx, args[0], args[1], args[2], args[3]);
	        case 5:
	            return fn.call(ctx, args[0], args[1], args[2], args[3], args[4]);
	        default:
	            return fn.apply(ctx, args);
	    }
	}
	exports.callFunc = callFunc;
	function triggerMethodOn(obj, eventName, args) {
	    let ev = strings_1.camelcase("on-" + eventName.replace(':', '-'));
	    if (obj[ev] && typeof obj[ev] === 'function') {
	        callFunc(obj[ev], obj, args);
	    }
	    if (typeof obj.trigger === 'function') {
	        args = [eventName].concat(args);
	        callFunc(obj.trigger, obj, args);
	    }
	}
	exports.triggerMethodOn = triggerMethodOn;
	function inherits(parent, protoProps, staticProps) {
	    var child;
	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && objects_1.has(protoProps, 'constructor')) {
	        child = protoProps.constructor;
	    }
	    else {
	        child = function () { return parent.apply(this, arguments); };
	    }
	    // Add static properties to the constructor function, if supplied.
	    objects_1.extend(child, parent, staticProps);
	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    var Surrogate = function () { this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;
	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps)
	        objects_1.extend(child.prototype, protoProps);
	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;
	    return child;
	}
	exports.inherits = inherits;


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	/*class KeyValuePair<K, V> {
	    key: K;
	    value: V;
	    constructor(key: K, value: V) {
	        this.key = key;
	        this.value = value;
	    }
	}
	export class Map<K, V> { // class MapDDD<K,V> implements Map
	    // -------------- Fields -----------------------
	    private keyAndValues: Array<KeyValuePair<K, V>>;
	    // ---------------------------------------------
	    constructor() {
	        this.keyAndValues = [];
	    }
	    // --- Public Methods ---
	    getKeysOfValue(value: V) {
	        var keysToReturn: Array<K> = [];
	        var valueToFind = value;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (value.value === valueToFind) {
	                keysToReturn.push(value.key);
	            }
	        });
	        return keysToReturn;
	    }

	    // Standard:
	    clear(): void {
	        this.keyAndValues = [];
	    }
	    delete(key: K): boolean {
	        var found = false;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (found) return;
	            if (key === value.key) {
	                array = array.slice(0, index).concat(array.slice(index + 1));
	                found = true;
	            }
	        });
	        return found;
	    }
	    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            callbackfn.apply(thisArg, [value.value, value.key, this]);
	        }, this);
	    }
	    get(key: K): V {
	        var valueToReturn: V = undefined;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (valueToReturn !== undefined) return;
	            if (key === value.key) {
	                valueToReturn = value.value;
	            }
	        });
	        return valueToReturn;
	    }
	    has(key: K): boolean {
	        var found = false;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (found) return;
	            if (key === value.key) {
	                found = true;
	            }
	        });
	        return found;
	    }
	    set(key: K, value: V): Map<K, V> {
	        var found = false;
	        var valueToSet = value;
	        this.keyAndValues.forEach(function (value: KeyValuePair<K, V>, index: number, array: KeyValuePair<K, V>[]): void {
	            if (found) return;
	            if (key === value.key) {
	                found = true;
	                value.value = valueToSet;
	            }
	        });
	        if (!found) {
	            this.keyAndValues.push(new KeyValuePair<K, V>(key, valueToSet));
	        }
	        return this;
	    }
	    // ----------------------

	    // Getters:
	    // Standard:
	    get size() {
	        return this.keyAndValues.length;
	    }
	}*/
	// Return a new array with duplicates removed
	function unique(array) {
	    let seen = new Map();
	    return array.filter(function (e, i) {
	        if (seen.has(e))
	            return false;
	        /*for (i += 1; i < array.length; i += 1) {
	          if (equal(e, array[i])) {
	            return false;
	          }
	        }*/
	        seen.set(e, true);
	        return true;
	    });
	}
	exports.unique = unique;
	function any(array, predicate) {
	    for (let i = 0, ii = array.length; i < ii; i++) {
	        if (predicate(array[i]))
	            return true;
	    }
	    return false;
	}
	exports.any = any;
	function indexOf(array, item) {
	    for (var i = 0, len = array.length; i < len; i++)
	        if (array[i] === item)
	            return i;
	    return -1;
	}
	exports.indexOf = indexOf;
	function find(array, callback, ctx) {
	    let v;
	    for (let i = 0, ii = array.length; i < ii; i++) {
	        if (callback.call(ctx, array[i]))
	            return array[i];
	    }
	    return null;
	}
	exports.find = find;
	function slice(array, begin, end) {
	    return Array.prototype.slice.call(array, begin, end);
	}
	exports.slice = slice;
	function flatten(arr) {
	    return arr.reduce(function (flat, toFlatten) {
	        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
	    }, []);
	}
	exports.flatten = flatten;
	function sortBy(obj, value, context) {
	    var iterator = typeof value === 'function' ? value : function (obj) { return obj[value]; };
	    return obj
	        .map(function (value, index, list) {
	        return {
	            value: value,
	            index: index,
	            criteria: iterator.call(context, value, index, list)
	        };
	    })
	        .sort(function (left, right) {
	        let a = left.criteria, b = right.criteria;
	        if (a !== b) {
	            if (a > b || a === void 0)
	                return 1;
	            if (a < b || b === void 0)
	                return -1;
	        }
	        return left.index - right.index;
	    })
	        .map(function (item) {
	        return item.value;
	    });
	}
	exports.sortBy = sortBy;


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	function camelcase(input) {
	    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
	        return group1.toUpperCase();
	    });
	}
	exports.camelcase = camelcase;
	;
	function truncate(str, length) {
	    let n = str.substring(0, Math.min(length, str.length));
	    return n + (n.length == str.length ? '' : '...');
	}
	exports.truncate = truncate;
	function humanFileSize(bytes, si = false) {
	    var thresh = si ? 1000 : 1024;
	    if (Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	    }
	    var units = si
	        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
	    return bytes.toFixed(1) + ' ' + units[u];
	}
	exports.humanFileSize = humanFileSize;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const utils_1 = __webpack_require__(42);
	const arrays_1 = __webpack_require__(44);
	/**
	 * Takes a nested object and returns a shallow object keyed with the path names
	 * e.g. { "level1.level2": "value" }
	 *
	 * @param  {Object}      Nested object e.g. { level1: { level2: 'value' } }
	 * @return {Object}      Shallow object with path names e.g. { 'level1.level2': 'value' }
	 */
	function objToPaths(obj, separator = ".") {
	    var ret = {};
	    for (var key in obj) {
	        var val = obj[key];
	        if (val && (val.constructor === Object || val.constructor === Array) && !isEmpty(val)) {
	            //Recursion for embedded objects
	            var obj2 = objToPaths(val);
	            for (var key2 in obj2) {
	                var val2 = obj2[key2];
	                ret[key + separator + key2] = val2;
	            }
	        }
	        else {
	            ret[key] = val;
	        }
	    }
	    return ret;
	}
	exports.objToPaths = objToPaths;
	function isEmpty(obj) {
	    return Object.keys(obj).length === 0;
	}
	exports.isEmpty = isEmpty;
	function extend(obj, ...args) {
	    if (!utils_1.isObject(obj))
	        return obj;
	    let o, k;
	    for (o of args) {
	        if (!utils_1.isObject(o))
	            continue;
	        for (k in o) {
	            if (has(o, k))
	                obj[k] = o[k];
	        }
	    }
	    return obj;
	}
	exports.extend = extend;
	const nativeAssign = Object.assign;
	function assign(target, ...args) {
	    if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert first argument to object');
	    }
	    if (nativeAssign)
	        return nativeAssign(target, ...args);
	    var to = Object(target);
	    for (let i = 0, ii = args.length; i < ii; i++) {
	        var nextSource = args[i];
	        if (nextSource === undefined || nextSource === null) {
	            continue;
	        }
	        nextSource = Object(nextSource);
	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	                to[nextKey] = nextSource[nextKey];
	            }
	        }
	    }
	    return to;
	}
	exports.assign = assign;
	const _has = Object.prototype.hasOwnProperty;
	function has(obj, prop) {
	    return _has.call(obj, prop);
	}
	exports.has = has;
	function pick(obj, props) {
	    let out = {}, prop;
	    for (prop of props) {
	        if (has(obj, prop))
	            out[prop] = obj[prop];
	    }
	    return out;
	}
	exports.pick = pick;
	function omit(obj, props) {
	    let out = {};
	    for (let key in obj) {
	        if (!!~props.indexOf(key))
	            continue;
	        out[key] = obj[key];
	    }
	    return out;
	}
	exports.omit = omit;
	function result(obj, prop, ctx, args) {
	    let ret = obj[prop];
	    return (typeof ret === 'function') ? ret.appl(ctx, args || []) : ret;
	}
	exports.result = result;
	function values(obj) {
	    let output = [];
	    for (let k in obj)
	        if (has(obj, k)) {
	            output.push(obj[k]);
	        }
	    return output;
	}
	exports.values = values;
	function intersectionObjects(a, b, predicate) {
	    var results = [], aElement, existsInB;
	    for (let i = 0, ii = a.length; i < ii; i++) {
	        aElement = a[i];
	        existsInB = arrays_1.any(b, function (bElement) { return predicate(bElement, aElement); });
	        if (existsInB) {
	            results.push(aElement);
	        }
	    }
	    return results;
	}
	function intersection(results, ...args) {
	    var lastArgument = args[args.length - 1];
	    var arrayCount = args.length;
	    var areEqualFunction = utils_1.equal;
	    if (typeof lastArgument === "function") {
	        areEqualFunction = lastArgument;
	        arrayCount--;
	    }
	    for (var i = 0; i < arrayCount; i++) {
	        var array = args[i];
	        results = intersectionObjects(results, array, areEqualFunction);
	        if (results.length === 0)
	            break;
	    }
	    return results;
	}
	exports.intersection = intersection;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	const arrays_1 = __webpack_require__(44);
	const utils_1 = __webpack_require__(42);
	exports.Promise = (typeof window === 'undefined') ? global.Promise : window.Promise;
	// Promises
	function isPromise(obj) {
	    return obj && typeof obj.then === 'function';
	}
	exports.isPromise = isPromise;
	function toPromise(obj) {
	    /* jshint validthis:true */
	    if (!obj) {
	        return obj;
	    }
	    if (isPromise(obj)) {
	        return obj;
	    }
	    if (utils_1.isFunction(obj)) {
	        return thunkToPromise.call(this, obj);
	    }
	    if (Array.isArray(obj)) {
	        return arrayToPromise.call(this, obj);
	    }
	    if (utils_1.isObject(obj)) {
	        return objectToPromise.call(this, obj);
	    }
	    return exports.Promise.resolve(obj);
	}
	exports.toPromise = toPromise;
	/**
	 * Convert a thunk to a promise.
	 *
	 * @param {Function}
	 * @return {Promise}
	 * @api private
	 */
	function thunkToPromise(fn) {
	    /* jshint validthis:true */
	    var ctx = this;
	    return new exports.Promise(function (resolve, reject) {
	        fn.call(ctx, function (err, res) {
	            if (err)
	                return reject(err);
	            if (arguments.length > 2)
	                res = arrays_1.slice(arguments, 1);
	            resolve(res);
	        });
	    });
	}
	exports.thunkToPromise = thunkToPromise;
	/**
	 * Convert an array of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Array} obj
	 * @return {Promise}
	 * @api private
	 */
	function arrayToPromise(obj) {
	    return exports.Promise.all(obj.map(toPromise, this));
	}
	exports.arrayToPromise = arrayToPromise;
	/**
	 * Convert an object of "yieldables" to a promise.
	 * Uses `Promise.all()` internally.
	 *
	 * @param {Object} obj
	 * @return {Promise}
	 * @api private
	 */
	function objectToPromise(obj) {
	    var results = new obj.constructor();
	    var keys = Object.keys(obj);
	    var promises = [];
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var promise = toPromise.call(this, obj[key]);
	        if (promise && isPromise(promise))
	            defer(promise, key);
	        else
	            results[key] = obj[key];
	    }
	    return exports.Promise.all(promises).then(function () {
	        return results;
	    });
	    function defer(promise, key) {
	        // predefine the key in the result
	        results[key] = undefined;
	        promises.push(promise.then(function (res) {
	            results[key] = res;
	        }));
	    }
	}
	exports.objectToPromise = objectToPromise;
	function deferred() {
	    let ret = {};
	    ret.promise = new exports.Promise(function (resolve, reject) {
	        ret.resolve = resolve;
	        ret.reject = reject;
	        ret.done = function (err, result) { if (err)
	            return reject(err);
	        else
	            resolve(result); };
	    });
	    return ret;
	}
	exports.deferred = deferred;
	;
	function callback(promise, callback, ctx) {
	    promise.then(function (result) {
	        callback.call(ctx, null, result);
	    }).catch(function (err) {
	        callback.call(ctx, err);
	    });
	}
	exports.callback = callback;
	function delay(timeout) {
	    let defer = deferred();
	    timeout == null ? utils_1.nextTick(defer.resolve) : setTimeout(defer.resolve, timeout);
	    return defer.promise;
	}
	exports.delay = delay;
	;
	function eachAsync(array, iterator, context, accumulate = false) {
	    return mapAsync(array, iterator, context, accumulate)
	        .then(function () { return void 0; });
	}
	exports.eachAsync = eachAsync;
	function mapAsync(array, iterator, context, accumulate = false) {
	    return new exports.Promise(function (resolve, reject) {
	        let i = 0, len = array.length, errors = [], results = [];
	        function next(err, result) {
	            if (err && !accumulate)
	                return reject(err);
	            if (err)
	                errors.push(err);
	            if (i === len)
	                return errors.length ? reject(arrays_1.flatten(errors)) : resolve(results);
	            let ret = iterator.call(context, array[i++]);
	            if (isPromise(ret)) {
	                ret.then(function (r) { results.push(r); next(null, r); }, next);
	            }
	            else if (ret instanceof Error) {
	                next(ret);
	            }
	            else {
	                next(null);
	            }
	        }
	        next(null);
	    });
	}
	exports.mapAsync = mapAsync;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var self = global || Window;
	const iterable = 'Symbol' in self && 'iterator' in Symbol;
	// Build a destructive iterator for the value list
	function iteratorFor(items) {
	    var iterator = {
	        next: function () {
	            var value = items.shift();
	            return { done: value === undefined, value: value };
	        }
	    };
	    if (iterable) {
	        iterator[Symbol.iterator] = function () {
	            return iterator;
	        };
	    }
	    return iterator;
	}
	class KeyValuePair {
	    constructor(key, value) {
	        this.key = key;
	        this.value = value;
	    }
	}
	class MapShim {
	    // ---------------------------------------------
	    constructor() {
	        this.keyAndValues = [];
	    }
	    // --- Public Methods ---
	    getKeysOfValue(value) {
	        var keysToReturn = [];
	        var valueToFind = value;
	        this.keyAndValues.forEach(function (value, index, array) {
	            if (value.value === valueToFind) {
	                keysToReturn.push(value.key);
	            }
	        });
	        return keysToReturn;
	    }
	    // Standard:
	    clear() {
	        this.keyAndValues = [];
	    }
	    delete(key) {
	        var found = false;
	        this.keyAndValues.forEach(function (value, index, array) {
	            if (found)
	                return;
	            if (key === value.key) {
	                array = array.slice(0, index).concat(array.slice(index + 1));
	                found = true;
	            }
	        });
	        return found;
	    }
	    forEach(callbackfn, thisArg) {
	        this.keyAndValues.forEach(function (value, index, array) {
	            callbackfn.apply(thisArg, [value.value, value.key, this]);
	        }, this);
	    }
	    get(key) {
	        var valueToReturn = undefined;
	        this.keyAndValues.forEach(function (value, index, array) {
	            if (valueToReturn !== undefined)
	                return;
	            if (key === value.key) {
	                valueToReturn = value.value;
	            }
	        });
	        return valueToReturn;
	    }
	    has(key) {
	        var found = false;
	        this.keyAndValues.forEach(function (value, index, array) {
	            if (found)
	                return;
	            if (key === value.key) {
	                found = true;
	            }
	        });
	        return found;
	    }
	    set(key, value) {
	        var found = false;
	        var valueToSet = value;
	        this.keyAndValues.forEach(function (value, index, array) {
	            if (found)
	                return;
	            if (key === value.key) {
	                found = true;
	                value.value = valueToSet;
	            }
	        });
	        if (!found) {
	            this.keyAndValues.push(new KeyValuePair(key, valueToSet));
	        }
	        return this;
	    }
	    keys() {
	        var items = [];
	        this.forEach(function (value, name) { items.push(name); });
	        return iteratorFor(items);
	    }
	    values() {
	        var items = [];
	        this.forEach(function (value) { items.push(value); });
	        return iteratorFor(items);
	    }
	    entries() {
	        var items = [];
	        this.forEach(function (value, name) { items.push([name, value]); });
	        return iteratorFor(items);
	    }
	    // ----------------------
	    // Getters:
	    // Standard:
	    get size() {
	        return this.keyAndValues.length;
	    }
	    [Symbol.iterator]() {
	        return this.entries();
	    }
	}
	if (!global.Map) {
	    global.Map = MapShim;
	}
	exports.Map = global.Map;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const arrays_1 = __webpack_require__(44);
	var ElementProto = (typeof Element !== 'undefined' && Element.prototype) || {};
	var matchesSelector = ElementProto.matches ||
	    ElementProto.webkitMatchesSelector ||
	    ElementProto.mozMatchesSelector ||
	    ElementProto.msMatchesSelector ||
	    ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~arrays_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	const transitionEndEvent = (function transitionEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'oTransitionEnd otransitionend',
	        'transition': 'transitionend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	const animationEndEvent = (function animationEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitAnimation': 'webkitAnimationEnd',
	        'MozAnimation': 'animationend',
	        'OAnimation': 'oAnimationEnd oanimationend',
	        'animation': 'animationend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener, useCap = false) {
	    elementAddEventListener.call(elm, eventName, listener, useCap);
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    elementRemoveEventListener.call(elm, eventName, listener);
	}
	exports.removeEventListener = removeEventListener;
	const unbubblebles = 'focus blur change'.split(' ');
	let domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    let root = elm;
	    let handler = function (e) {
	        let node = e.target || e.srcElement;
	        // Already handled
	        if (e.delegateTarget)
	            return;
	        for (; node && node != root; node = node.parentNode) {
	            if (matches(node, selector)) {
	                e.delegateTarget = node;
	                callback(e);
	            }
	        }
	    };
	    let useCap = !!~unbubblebles.indexOf(eventName);
	    addEventListener(elm, eventName, handler, useCap);
	    domEvents.push({ eventName: eventName, handler: handler, listener: callback, selector: selector });
	    return handler;
	}
	exports.delegate = delegate;
	function undelegate(elm, selector, eventName, callback) {
	    /*if (typeof selector === 'function') {
	        listener = <Function>selector;
	        selector = null;
	      }*/
	    var handlers = domEvents.slice();
	    for (var i = 0, len = handlers.length; i < len; i++) {
	        var item = handlers[i];
	        var match = item.eventName === eventName &&
	            (callback ? item.listener === callback : true) &&
	            (selector ? item.selector === selector : true);
	        if (!match)
	            continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(arrays_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        let split = className.split(' ');
	        for (let i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim()))
	                continue;
	            elm.classList.add(split[i].trim());
	        }
	    }
	    else {
	        elm.className = arrays_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        let split = className.split(' ');
	        for (let i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    }
	    else {
	        let split = elm.className.split(' '), classNames = className.split(' '), tmp = split, index;
	        for (let i = 0, ii = classNames.length; i < ii; i++) {
	            index = split.indexOf(classNames[i]);
	            if (!!~index)
	                split = split.splice(index, 1);
	        }
	    }
	}
	exports.removeClass = removeClass;
	function hasClass(elm, className) {
	    if (elm.classList) {
	        return elm.classList.contains(className);
	    }
	    var reg = new RegExp('\b' + className);
	    return reg.test(elm.className);
	}
	exports.hasClass = hasClass;
	function selectionStart(elm) {
	    if ('selectionStart' in elm) {
	        // Standard-compliant browsers
	        return elm.selectionStart;
	    }
	    else if (document.selection) {
	        // IE
	        elm.focus();
	        var sel = document.selection.createRange();
	        var selLen = document.selection.createRange().text.length;
	        sel.moveStart('character', -elm.value.length);
	        return sel.text.length - selLen;
	    }
	}
	exports.selectionStart = selectionStart;
	var _events = {
	    animationEnd: null,
	    transitionEnd: null
	};
	function transitionEnd(elm, fn, ctx, duration) {
	    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = (function () {
	    var fns = [], listener, doc = document, hack = doc.documentElement.doScroll, domContentLoaded = 'DOMContentLoaded', loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, listener = function () {
	            doc.removeEventListener(domContentLoaded, listener);
	            loaded = true;
	            while (listener = fns.shift())
	                listener();
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	})();
	function createElement(tag, attr) {
	    let elm = document.createElement(tag);
	    if (attr) {
	        for (let key in attr) {
	            elm.setAttribute(key, attr[key]);
	        }
	    }
	    return elm;
	}
	exports.createElement = createElement;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const utils_1 = __webpack_require__(42);
	const arrays_1 = __webpack_require__(44);
	const dom = __webpack_require__(49);
	var domEvents;
	var singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function parseHTML(html) {
	    let parsed = singleTag.exec(html);
	    if (parsed) {
	        return document.createElement(parsed[0]);
	    }
	    var div = document.createElement('div');
	    div.innerHTML = html;
	    var element = div.firstChild;
	    return element;
	}
	class Html {
	    constructor(el) {
	        if (!Array.isArray(el))
	            el = [el];
	        this._elements = el || [];
	    }
	    static query(query, context) {
	        if (typeof context === 'string') {
	            context = document.querySelectorAll(context);
	        }
	        let html;
	        let els;
	        if (typeof query === 'string') {
	            if (query.length > 0 && query[0] === '<' && query[query.length - 1] === ">"
	                && query.length >= 3) {
	                return new Html([parseHTML(query)]);
	            }
	            if (context) {
	                if (context instanceof HTMLElement) {
	                    els = arrays_1.slice(context.querySelectorAll(query));
	                }
	                else {
	                    html = new Html(arrays_1.slice(context));
	                    return html.find(query);
	                }
	            }
	            else {
	                els = arrays_1.slice(document.querySelectorAll(query));
	            }
	        }
	        else if (query && query instanceof Element) {
	            els = [query];
	        }
	        else if (query && query instanceof NodeList) {
	            els = arrays_1.slice(query);
	        }
	        return new Html(els);
	    }
	    get length() {
	        return this._elements.length;
	    }
	    get(n) {
	        n = n === undefined ? 0 : n;
	        return n >= this.length ? undefined : this._elements[n];
	    }
	    addClass(str) {
	        return this.forEach((e) => {
	            dom.addClass(e, str);
	        });
	    }
	    removeClass(str) {
	        return this.forEach((e) => {
	            dom.removeClass(e, str);
	        });
	    }
	    hasClass(str) {
	        return this._elements.reduce((p, c) => {
	            return dom.hasClass(c, str);
	        }, false);
	    }
	    attr(key, value) {
	        let attr;
	        if (typeof key === 'string' && value) {
	            attr = { [key]: value };
	        }
	        else if (typeof key == 'string') {
	            if (this.length)
	                return this.get(0).getAttribute(key);
	        }
	        else if (utils_1.isObject(key)) {
	            attr = key;
	        }
	        return this.forEach(e => {
	            for (let k in attr) {
	                e.setAttribute(k, attr[k]);
	            }
	        });
	    }
	    text(str) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).textContent : null;
	        }
	        return this.forEach(e => e.textContent = str);
	    }
	    html(html) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).innerHTML : null;
	        }
	        return this.forEach(e => e.innerHTML = html);
	    }
	    css(attr, value) {
	        if (arguments.length === 2) {
	            return this.forEach(e => {
	                if (attr in e.style)
	                    e.style[attr] = String(value);
	            });
	        }
	        else {
	            return this.forEach(e => {
	                for (let k in attr) {
	                    if (attr in e.style)
	                        e.style[k] = String(attr[k]);
	                }
	            });
	        }
	    }
	    parent() {
	        var out = [];
	        this.forEach(e => {
	            if (e.parentElement) {
	                out.push(e.parentElement);
	            }
	        });
	        return new Html(out);
	    }
	    clone() {
	        return new Html(this.map(m => m.cloneNode()));
	    }
	    find(str) {
	        var out = [];
	        this.forEach(e => {
	            out = out.concat(arrays_1.slice(e.querySelectorAll(str)));
	        });
	        return new Html(out);
	    }
	    map(fn) {
	        let out = new Array(this.length);
	        this.forEach((e, i) => {
	            out[i] = fn(e, i);
	        });
	        return out;
	    }
	    forEach(fn) {
	        this._elements.forEach(fn);
	        return this;
	    }
	}
	exports.Html = Html;


/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	const MimeTypes = {
	    "application-x-7zip": "mime-application-x-7zip",
	    "application-rss+xml": "mime-application-rss+xml",
	    "x-office-drawing": "mime-x-office-drawing",
	    "text-javascript": "mime-text-x-javascript",
	    "text-x-javascript": "mime-text-x-javascript",
	    "message": "mime-message",
	    "application-msword": "mime-application-msword",
	    "multipart-encrypted": "mime-multipart-encrypted",
	    "audio-x-vorbis+ogg": "mime-audio-x-vorbis+ogg",
	    "application-pdf": "mime-application-pdf",
	    "encrypted": "mime-encrypted",
	    "application-pgp-keys": "mime-application-pgp-keys",
	    "text-richtext": "mime-text-richtext",
	    "text-plain": "mime-text-plain",
	    "text-sql": "mime-text-x-sql",
	    "text-x-sql": "mime-text-x-sql",
	    "application-vnd.ms-excel": "mime-application-vnd.ms-excel",
	    "application-vnd.ms-powerpoint": "mime-application-vnd.ms-powerpoint",
	    "application-vnd.oasis.opendocument.formula": "mime-application-vnd.oasis.opendocument.formula",
	    "x-office-spreadsheet": "mime-x-office-spreadsheet",
	    "text-html": "mime-text-html",
	    "x-office-document": "mime-x-office-document",
	    "video-generic": "mime-video-x-generic",
	    "video-x-generic": "mime-video-x-generic",
	    "application-vnd.scribus": "mime-application-vnd.scribus",
	    "application-ace": "mime-application-x-ace",
	    "application-x-ace": "mime-application-x-ace",
	    "application-tar": "mime-application-x-tar",
	    "application-x-tar": "mime-application-x-tar",
	    "application-bittorrent": "mime-application-x-bittorrent",
	    "application-x-bittorrent": "mime-application-x-bittorrent",
	    "application-x-cd-image": "mime-application-x-cd-image",
	    "text-java": "mime-text-x-java",
	    "text-x-java": "mime-text-x-java",
	    "application-gzip": "mime-application-x-gzip",
	    "application-x-gzip": "mime-application-x-gzip",
	    "application-sln": "mime-application-x-sln",
	    "application-x-sln": "mime-application-x-sln",
	    "application-cue": "mime-application-x-cue",
	    "application-x-cue": "mime-application-x-cue",
	    "deb": "mime-deb",
	    "application-glade": "mime-application-x-glade",
	    "application-x-glade": "mime-application-x-glade",
	    "application-theme": "mime-application-x-theme",
	    "application-x-theme": "mime-application-x-theme",
	    "application-executable": "mime-application-x-executable",
	    "application-x-executable": "mime-application-x-executable",
	    "application-x-flash-video": "mime-application-x-flash-video",
	    "application-jar": "mime-application-x-jar",
	    "application-x-jar": "mime-application-x-jar",
	    "application-x-ms-dos-executable": "mime-application-x-ms-dos-executable",
	    "application-msdownload": "mime-application-x-msdownload",
	    "application-x-msdownload": "mime-application-x-msdownload",
	    "package-generic": "mime-package-x-generic",
	    "package-x-generic": "mime-package-x-generic",
	    "application-php": "mime-application-x-php",
	    "application-x-php": "mime-application-x-php",
	    "text-python": "mime-text-x-python",
	    "text-x-python": "mime-text-x-python",
	    "application-rar": "mime-application-x-rar",
	    "application-x-rar": "mime-application-x-rar",
	    "rpm": "mime-rpm",
	    "application-ruby": "mime-application-x-ruby",
	    "application-x-ruby": "mime-application-x-ruby",
	    "text-script": "mime-text-x-script",
	    "text-x-script": "mime-text-x-script",
	    "text-bak": "mime-text-x-bak",
	    "text-x-bak": "mime-text-x-bak",
	    "application-zip": "mime-application-x-zip",
	    "application-x-zip": "mime-application-x-zip",
	    "text-xml": "mime-text-xml",
	    "audio-mpeg": "mime-audio-x-mpeg",
	    "audio-x-mpeg": "mime-audio-x-mpeg",
	    "audio-wav": "mime-audio-x-wav",
	    "audio-x-wav": "mime-audio-x-wav",
	    "audio-generic": "mime-audio-x-generic",
	    "audio-x-generic": "mime-audio-x-generic",
	    "audio-x-mp3-playlist": "mime-audio-x-mp3-playlist",
	    "audio-x-ms-wma": "mime-audio-x-ms-wma",
	    "authors": "mime-authors",
	    "empty": "mime-empty",
	    "extension": "mime-extension",
	    "font-generic": "mime-font-x-generic",
	    "font-x-generic": "mime-font-x-generic",
	    "image-bmp": "mime-image-bmp",
	    "image-gif": "mime-image-gif",
	    "image-jpeg": "mime-image-jpeg",
	    "image-png": "mime-image-png",
	    "image-tiff": "mime-image-tiff",
	    "image-ico": "mime-image-x-ico",
	    "image-x-ico": "mime-image-x-ico",
	    "image-eps": "mime-image-x-eps",
	    "image-x-eps": "mime-image-x-eps",
	    "image-generic": "mime-image-x-generic",
	    "image-x-generic": "mime-image-x-generic",
	    "image-psd": "mime-image-x-psd",
	    "image-x-psd": "mime-image-x-psd",
	    "image-xcf": "mime-image-x-xcf",
	    "image-x-xcf": "mime-image-x-xcf",
	    "x-office-presentation": "mime-x-office-presentation",
	    "unknown": "mime-unknown",
	    "opera-extension": "mime-opera-extension",
	    "opera-unite-application": "mime-opera-unite-application",
	    "opera-widget": "mime-opera-widget",
	    "phatch-actionlist": "mime-phatch-actionlist",
	    "text-makefile": "mime-text-x-makefile",
	    "text-x-makefile": "mime-text-x-makefile",
	    "x-office-address-book": "mime-x-office-address-book",
	    "vcalendar": "mime-vcalendar",
	    "text-source": "mime-text-x-source",
	    "text-x-source": "mime-text-x-source",
	    "text-x-generic-template": "mime-text-x-generic-template",
	    "text-css": "mime-text-css",
	    "text-bibtex": "mime-text-x-bibtex",
	    "text-x-bibtex": "mime-text-x-bibtex",
	    "text-x-c++": "mime-text-x-c++",
	    "text-x-c++hdr": "mime-text-x-c++hdr",
	    "text-c": "mime-text-x-c",
	    "text-x-c": "mime-text-x-c",
	    "text-changelog": "mime-text-x-changelog",
	    "text-x-changelog": "mime-text-x-changelog",
	    "text-chdr": "mime-text-x-chdr",
	    "text-x-chdr": "mime-text-x-chdr",
	    "text-copying": "mime-text-x-copying",
	    "text-x-copying": "mime-text-x-copying",
	    "text-install": "mime-text-x-install",
	    "text-x-install": "mime-text-x-install",
	    "text-preview": "mime-text-x-preview",
	    "text-x-preview": "mime-text-x-preview",
	    "text-readme": "mime-text-x-readme",
	    "text-x-readme": "mime-text-x-readme",
	    "text-tex": "mime-text-x-tex",
	    "text-x-tex": "mime-text-x-tex",
	    "text-xhtml+xml": "mime-text-xhtml+xml",
	    "x-dia-diagram": "mime-x-dia-diagram"
	};
	function getMimeIcon(mime) {
	    if (MimeTypes[mime]) {
	        return MimeTypes[mime];
	    }
	    return MimeTypes['unknown'];
	}
	exports.getMimeIcon = getMimeIcon;
	;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const html = __webpack_require__(53);
	const utilities_1 = __webpack_require__(14);
	const list_item_1 = __webpack_require__(37);
	const Blazy = __webpack_require__(54);
	exports.AssetsEmptyView = views_1.View.extend({
	    className: 'assets-list-empty-view',
	    template: 'No files uploaded yet.'
	});
	let AssetsListView = class AssetsListView extends views_1.CollectionView {
	    constructor(options) {
	        super(options);
	        this.options = options || {};
	        this.sort = false;
	        this._onSroll = throttle(utilities_1.bind(this._onSroll, this), 0);
	        this._initEvents();
	        this._initBlazy();
	    }
	    _initEvents() {
	        this.listenTo(this, 'childview:click', function (view, model) {
	            if (this._current)
	                html.removeClass(this._current.el, 'active');
	            this._current = view;
	            html.addClass(view.el, 'active');
	            this.trigger('selected', view, model);
	        });
	        this.listenTo(this, 'childview:dblclick', function (view, model) {
	            if (this._current)
	                html.removeClass(this._current.el, 'active');
	            this._current = view;
	            html.addClass(view.el, 'active');
	            this.trigger('selected', view, model);
	            this.trigger('dblclick', view, model);
	        });
	        this.listenTo(this, 'childview:remove', function (view, { model }) {
	            if (this.options.deleteable === true) {
	                let remove = true;
	                if (model.has('deleteable')) {
	                    remove = !!model.get('deleteable');
	                }
	                if (remove)
	                    model.remove();
	            }
	            else {
	            }
	        });
	        this.listenTo(this, 'childview:image', function (view) {
	            let img = view.$('img')[0];
	            if (img.src === img.getAttribute('data-src')) {
	                return;
	            }
	            setTimeout(() => {
	                if (elementInView(view.el, this.el)) {
	                    this._blazy.load(view.$('img')[0]);
	                }
	            }, 100);
	        });
	        this.listenTo(this.collection, 'before:fetch', () => {
	            let loader = this.el.querySelector('.loader');
	            if (loader)
	                return;
	            loader = document.createElement('div');
	            html.addClass(loader, 'loader');
	            this.el.appendChild(loader);
	        });
	        this.listenTo(this.collection, 'fetch', () => {
	            let loader = this.el.querySelector('.loader');
	            if (loader) {
	                this.el.removeChild(loader);
	            }
	        });
	    }
	    onRenderCollection() {
	        if (this._blazy) {
	            this._blazy.revalidate();
	        }
	        else {
	            this._initBlazy();
	        }
	    }
	    _onSroll(e) {
	        let index = this.index ? this.index : (this.index = 0), len = this.children.length;
	        for (let i = index; i < len; i++) {
	            let view = this.children[i], img = view.$('img')[0];
	            if (img == null)
	                continue;
	            if (img.src === img.getAttribute('data-src')) {
	                index = i;
	            }
	            else if (elementInView(img, this.el)) {
	                index = i;
	                this._blazy.load(img, true);
	            }
	        }
	        this.index = index;
	        let el = this.el;
	        if (el.scrollTop < (el.scrollHeight - el.clientHeight) - el.clientHeight) {
	        }
	        else if (this.collection.hasNext()) {
	            this.collection.getNextPage();
	        }
	    }
	    _initBlazy() {
	        this._blazy = new Blazy({
	            container: '.assets-list',
	            selector: 'img',
	            error: function (img) {
	                if (!img || !img.parentNode)
	                    return;
	                let m = img.parentNode.querySelector('.mime');
	                if (m) {
	                    m.style.display = 'block';
	                    img.style.display = 'none';
	                }
	            }
	        });
	    }
	    _initHeight() {
	        let parent = this.el.parentElement;
	        if (!parent || parent.clientHeight === 0) {
	            if (!this._timer) {
	                this._timer = setInterval(() => this._initHeight(), 200);
	            }
	            return;
	        }
	        if (this._timer) {
	            clearInterval(this._timer);
	            this._timer = void 0;
	        }
	        this.el.style.height = parent.clientHeight + 'px';
	    }
	    onShow() {
	        this._initHeight();
	    }
	};
	AssetsListView = __decorate([
	    views_1.attributes({
	        className: 'assets-list collection-mode',
	        childView: list_item_1.AssetsListItemView,
	        emptyView: exports.AssetsEmptyView,
	        events: {
	            scroll: '_onSroll'
	        }
	    }), 
	    __metadata('design:paramtypes', [Object])
	], AssetsListView);
	exports.AssetsListView = AssetsListView;
	function elementInView(ele, container) {
	    var viewport = {
	        top: 0,
	        left: 0,
	        bottom: 0,
	        right: 0
	    };
	    viewport.bottom = (container.innerHeight || document.documentElement.clientHeight);
	    viewport.right = (container.innerWidth || document.documentElement.clientWidth);
	    var rect = ele.getBoundingClientRect();
	    return (rect.right >= viewport.left
	        && rect.bottom >= viewport.top
	        && rect.left <= viewport.right
	        && rect.top <= viewport.bottom) && !ele.classList.contains('b-error');
	}
	function throttle(fn, minDelay) {
	    var lastCall = 0;
	    return function () {
	        var now = +new Date();
	        if (now - lastCall < minDelay) {
	            return;
	        }
	        lastCall = now;
	        fn.apply(this, arguments);
	    };
	}


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var arrays_1 = __webpack_require__(15);
	var objects_1 = __webpack_require__(17);
	var ElementProto = (typeof Element !== 'undefined' && Element.prototype) || {};
	var matchesSelector = ElementProto.matches ||
	    ElementProto.webkitMatchesSelector ||
	    ElementProto.mozMatchesSelector ||
	    ElementProto.msMatchesSelector ||
	    ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~arrays_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	var transitionEndEvent = (function transitionEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitTransition': 'webkitTransitionEnd',
	        'MozTransition': 'transitionend',
	        'OTransition': 'oTransitionEnd otransitionend',
	        'transition': 'transitionend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	var animationEndEvent = (function animationEnd() {
	    var el = document.createElement('bootstrap');
	    var transEndEventNames = {
	        'WebkitAnimation': 'webkitAnimationEnd',
	        'MozAnimation': 'animationend',
	        'OAnimation': 'oAnimationEnd oanimationend',
	        'animation': 'animationend'
	    };
	    for (var name in transEndEventNames) {
	        if (el.style[name] !== undefined) {
	            return transEndEventNames[name];
	        }
	    }
	    return null;
	});
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener, useCap) {
	    if (useCap === void 0) { useCap = false; }
	    elementAddEventListener.call(elm, eventName, listener, useCap);
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    elementRemoveEventListener.call(elm, eventName, listener);
	}
	exports.removeEventListener = removeEventListener;
	var unbubblebles = 'focus blur change'.split(' ');
	var domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    var root = elm;
	    var handler = function (e) {
	        var node = e.target || e.srcElement;
	        if (e.delegateTarget)
	            return;
	        for (; node && node != root; node = node.parentNode) {
	            if (matches(node, selector)) {
	                e.delegateTarget = node;
	                callback(e);
	            }
	        }
	    };
	    var useCap = !!~unbubblebles.indexOf(eventName);
	    addEventListener(elm, eventName, handler, useCap);
	    domEvents.push({ eventName: eventName, handler: handler, listener: callback, selector: selector });
	    return handler;
	}
	exports.delegate = delegate;
	function undelegate(elm, selector, eventName, callback) {
	    /*if (typeof selector === 'function') {
	        listener = <Function>selector;
	        selector = null;
	      }*/
	    var handlers = domEvents.slice();
	    for (var i = 0, len = handlers.length; i < len; i++) {
	        var item = handlers[i];
	        var match = item.eventName === eventName &&
	            (callback ? item.listener === callback : true) &&
	            (selector ? item.selector === selector : true);
	        if (!match)
	            continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(arrays_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim()))
	                continue;
	            elm.classList.add(split[i].trim());
	        }
	    }
	    else {
	        elm.className = arrays_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    }
	    else {
	        var split = elm.className.split(' '), classNames = className.split(' '), tmp = split, index;
	        for (var i = 0, ii = classNames.length; i < ii; i++) {
	            index = split.indexOf(classNames[i]);
	            if (!!~index)
	                split = split.splice(index, 1);
	        }
	    }
	}
	exports.removeClass = removeClass;
	function hasClass(elm, className) {
	    if (elm.classList) {
	        return elm.classList.contains(className);
	    }
	    var reg = new RegExp('\b' + className);
	    return reg.test(elm.className);
	}
	exports.hasClass = hasClass;
	function selectionStart(elm) {
	    if ('selectionStart' in elm) {
	        return elm.selectionStart;
	    }
	    else if (document.selection) {
	        elm.focus();
	        var sel = document.selection.createRange();
	        var selLen = document.selection.createRange().text.length;
	        sel.moveStart('character', -elm.value.length);
	        return sel.text.length - selLen;
	    }
	}
	exports.selectionStart = selectionStart;
	var _events = {
	    animationEnd: null,
	    transitionEnd: null
	};
	function transitionEnd(elm, fn, ctx, duration) {
	    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function (e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = (function () {
	    var fns = [], listener, doc = document, hack = doc.documentElement.doScroll, domContentLoaded = 'DOMContentLoaded', loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, listener = function () {
	            doc.removeEventListener(domContentLoaded, listener);
	            loaded = true;
	            while (listener = fns.shift())
	                listener();
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	});
	var Html = (function () {
	    function Html(el) {
	        if (!Array.isArray(el))
	            el = [el];
	        this._elements = el || [];
	    }
	    Html.query = function (query, context) {
	        if (typeof context === 'string') {
	            context = document.querySelectorAll(context);
	        }
	        var html;
	        var els;
	        if (typeof query === 'string') {
	            if (context) {
	                if (context instanceof HTMLElement) {
	                    els = arrays_1.slice(context.querySelectorAll(query));
	                }
	                else {
	                    html = new Html(arrays_1.slice(context));
	                    return html.find(query);
	                }
	            }
	            else {
	                els = arrays_1.slice(document.querySelectorAll(query));
	            }
	        }
	        else if (query && query instanceof Element) {
	            els = [query];
	        }
	        else if (query && query instanceof NodeList) {
	            els = arrays_1.slice(query);
	        }
	        return new Html(els);
	    };
	    Object.defineProperty(Html.prototype, "length", {
	        get: function () {
	            return this._elements.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Html.prototype.get = function (n) {
	        n = n === undefined ? 0 : n;
	        return n >= this.length ? undefined : this._elements[n];
	    };
	    Html.prototype.addClass = function (str) {
	        return this.forEach(function (e) {
	            addClass(e, str);
	        });
	    };
	    Html.prototype.removeClass = function (str) {
	        return this.forEach(function (e) {
	            removeClass(e, str);
	        });
	    };
	    Html.prototype.hasClass = function (str) {
	        return this._elements.reduce(function (p, c) {
	            return hasClass(c, str);
	        }, false);
	    };
	    Html.prototype.attr = function (key, value) {
	        var attr;
	        if (typeof key === 'string' && value) {
	            attr = (_a = {}, _a[key] = value, _a);
	        }
	        else if (typeof key == 'string') {
	            if (this.length)
	                return this.get(0).getAttribute(key);
	        }
	        else if (objects_1.isObject(key)) {
	            attr = key;
	        }
	        return this.forEach(function (e) {
	            for (var k in attr) {
	                e.setAttribute(k, attr[k]);
	            }
	        });
	        var _a;
	    };
	    Html.prototype.text = function (str) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).textContent : null;
	        }
	        return this.forEach(function (e) { return e.textContent = str; });
	    };
	    Html.prototype.html = function (html) {
	        if (arguments.length === 0) {
	            return this.length > 0 ? this.get(0).innerHTML : null;
	        }
	        return this.forEach(function (e) { return e.innerHTML = html; });
	    };
	    Html.prototype.css = function (attr, value) {
	        if (arguments.length === 2) {
	            return this.forEach(function (e) {
	                if (attr in e.style)
	                    e.style[attr] = String(value);
	            });
	        }
	        else {
	            return this.forEach(function (e) {
	                for (var k in attr) {
	                    if (attr in e.style)
	                        e.style[k] = String(attr[k]);
	                }
	            });
	        }
	    };
	    Html.prototype.parent = function () {
	        var out = [];
	        this.forEach(function (e) {
	            if (e.parentElement) {
	                out.push(e.parentElement);
	            }
	        });
	        return new Html(out);
	    };
	    Html.prototype.find = function (str) {
	        var out = [];
	        this.forEach(function (e) {
	            out = out.concat(arrays_1.slice(e.querySelectorAll(str)));
	        });
	        return new Html(out);
	    };
	    Html.prototype.map = function (fn) {
	        var out = new Array(this.length);
	        this.forEach(function (e, i) {
	            out[i] = fn(e, i);
	        });
	        return out;
	    };
	    Html.prototype.forEach = function (fn) {
	        this._elements.forEach(fn);
	        return this;
	    };
	    return Html;
	})();
	exports.Html = Html;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  hey, [be]Lazy.js - v1.6.2 - 2016.05.09
	  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
	  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
	*/
	;
	(function(root, blazy) {
	    if (true) {
	        // AMD. Register bLazy as an anonymous module
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (blazy), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = blazy();
	    } else {
	        // Browser globals. Register bLazy on window
	        root.Blazy = blazy();
	    }
	})(this, function() {
	    'use strict';

	    //private vars
	    var _source, _viewport, _isRetina, _attrSrc = 'src',
	        _attrSrcset = 'srcset';

	    // constructor
	    return function Blazy(options) {
	        //IE7- fallback for missing querySelectorAll support
	        if (!document.querySelectorAll) {
	            var s = document.createStyleSheet();
	            document.querySelectorAll = function(r, c, i, j, a) {
	                a = document.all, c = [], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
	                for (i = r.length; i--;) {
	                    s.addRule(r[i], 'k:v');
	                    for (j = a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
	                    s.removeRule(0);
	                }
	                return c;
	            };
	        }

	        //options and helper vars
	        var scope = this;
	        var util = scope._util = {};
	        util.elements = [];
	        util.destroyed = true;
	        scope.options = options || {};
	        scope.options.error = scope.options.error || false;
	        scope.options.offset = scope.options.offset || 100;
	        scope.options.success = scope.options.success || false;
	        scope.options.selector = scope.options.selector || '.b-lazy';
	        scope.options.separator = scope.options.separator || '|';
	        scope.options.container = scope.options.container ? document.querySelectorAll(scope.options.container) : false;
	        scope.options.errorClass = scope.options.errorClass || 'b-error';
	        scope.options.breakpoints = scope.options.breakpoints || false; // obsolete
	        scope.options.loadInvisible = scope.options.loadInvisible || false;
	        scope.options.successClass = scope.options.successClass || 'b-loaded';
	        scope.options.validateDelay = scope.options.validateDelay || 25;
	        scope.options.saveViewportOffsetDelay = scope.options.saveViewportOffsetDelay || 50;
	        scope.options.srcset = scope.options.srcset || 'data-srcset';
	        scope.options.src = _source = scope.options.src || 'data-src';
	        _isRetina = window.devicePixelRatio > 1;
	        _viewport = {};
	        _viewport.top = 0 - scope.options.offset;
	        _viewport.left = 0 - scope.options.offset;


	        /* public functions
	         ************************************/
	        scope.revalidate = function() {
	            initialize(this);
	        };
	        scope.load = function(elements, force) {
	            var opt = this.options;
	            if (elements.length === undefined) {
	                loadElement(elements, force, opt);
	            } else {
	                each(elements, function(element) {
	                    loadElement(element, force, opt);
	                });
	            }
	        };
	        scope.destroy = function() {
	            var self = this;
	            var util = self._util;
	            if (self.options.container) {
	                each(self.options.container, function(object) {
	                    unbindEvent(object, 'scroll', util.validateT);
	                });
	            }
	            unbindEvent(window, 'scroll', util.validateT);
	            unbindEvent(window, 'resize', util.validateT);
	            unbindEvent(window, 'resize', util.saveViewportOffsetT);
	            util.count = 0;
	            util.elements.length = 0;
	            util.destroyed = true;
	        };

	        //throttle, ensures that we don't call the functions too often
	        util.validateT = throttle(function() {
	            validate(scope);
	        }, scope.options.validateDelay, scope);
	        util.saveViewportOffsetT = throttle(function() {
	            saveViewportOffset(scope.options.offset);
	        }, scope.options.saveViewportOffsetDelay, scope);
	        saveViewportOffset(scope.options.offset);

	        //handle multi-served image src (obsolete)
	        each(scope.options.breakpoints, function(object) {
	            if (object.width >= window.screen.width) {
	                _source = object.src;
	                return false;
	            }
	        });

	        // start lazy load
	        setTimeout(function() {
	            initialize(scope);
	        }); // "dom ready" fix

	    };


	    /* Private helper functions
	     ************************************/
	    function initialize(self) {
	        var util = self._util;
	        // First we create an array of elements to lazy load
	        util.elements = toArray(self.options.selector);
	        util.count = util.elements.length;
	        // Then we bind resize and scroll events if not already binded
	        if (util.destroyed) {
	            util.destroyed = false;
	            if (self.options.container) {
	                each(self.options.container, function(object) {
	                    bindEvent(object, 'scroll', util.validateT);
	                });
	            }
	            bindEvent(window, 'resize', util.saveViewportOffsetT);
	            bindEvent(window, 'resize', util.validateT);
	            bindEvent(window, 'scroll', util.validateT);
	        }
	        // And finally, we start to lazy load.
	        validate(self);
	    }

	    function validate(self) {
	        var util = self._util;
	        for (var i = 0; i < util.count; i++) {
	            var element = util.elements[i];
	            if (elementInView(element) || hasClass(element, self.options.successClass)) {
	                self.load(element);
	                util.elements.splice(i, 1);
	                util.count--;
	                i--;
	            }
	        }
	        if (util.count === 0) {
	            self.destroy();
	        }
	    }

	    function elementInView(ele) {
	        var rect = ele.getBoundingClientRect();
	        return (
	            // Intersection
	            rect.right >= _viewport.left && rect.bottom >= _viewport.top && rect.left <= _viewport.right && rect.top <= _viewport.bottom
	        );
	    }

	    function loadElement(ele, force, options) {
	        // if element is visible, not loaded or forced
	        if (!hasClass(ele, options.successClass) && (force || options.loadInvisible || (ele.offsetWidth > 0 && ele.offsetHeight > 0))) {
	            var dataSrc = ele.getAttribute(_source) || ele.getAttribute(options.src); // fallback to default 'data-src'
	            if (dataSrc) {
	                var dataSrcSplitted = dataSrc.split(options.separator);
	                var src = dataSrcSplitted[_isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
	                var isImage = equal(ele, 'img');
	                // Image or background image
	                if (isImage || ele.src === undefined) {
	                    var img = new Image();
	                    // using EventListener instead of onerror and onload
	                    // due to bug introduced in chrome v50 
	                    // (https://productforums.google.com/forum/#!topic/chrome/p51Lk7vnP2o)
	                    var onErrorHandler = function() {
	                        if (options.error) options.error(ele, "invalid");
	                        addClass(ele, options.errorClass);
	                        unbindEvent(img, 'error', onErrorHandler);
	                        unbindEvent(img, 'load', onLoadHandler);
	                    };
	                    var onLoadHandler = function() {
	                        // Is element an image
	                        if (isImage) {
	                            setSrc(ele, src); //src
	                            handleSource(ele, _attrSrcset, options.srcset); //srcset
	                            //picture element
	                            var parent = ele.parentNode;
	                            if (parent && equal(parent, 'picture')) {
	                                each(parent.getElementsByTagName('source'), function(source) {
	                                    handleSource(source, _attrSrcset, options.srcset);
	                                });
	                            }
	                        // or background-image
	                        } else {
	                            ele.style.backgroundImage = 'url("' + src + '")';
	                        }
	                        itemLoaded(ele, options);
	                        unbindEvent(img, 'load', onLoadHandler);
	                        unbindEvent(img, 'error', onErrorHandler);
	                    };
	                    bindEvent(img, 'error', onErrorHandler);
	                    bindEvent(img, 'load', onLoadHandler);
	                    setSrc(img, src); //preload
	                } else { // An item with src like iframe, unity, simpelvideo etc
	                    setSrc(ele, src);
	                    itemLoaded(ele, options);
	                }
	            } else {
	                // video with child source
	                if (equal(ele, 'video')) {
	                    each(ele.getElementsByTagName('source'), function(source) {
	                        handleSource(source, _attrSrc, options.src);
	                    });
	                    ele.load();
	                    itemLoaded(ele, options);
	                } else {
	                    if (options.error) options.error(ele, "missing");
	                    addClass(ele, options.errorClass);
	                }
	            }
	        }
	    }

	    function itemLoaded(ele, options) {
	        addClass(ele, options.successClass);
	        if (options.success) options.success(ele);
	        // cleanup markup, remove data source attributes
	        ele.removeAttribute(options.src);
	        each(options.breakpoints, function(object) {
	            ele.removeAttribute(object.src);
	        });
	    }

	    function setSrc(ele, src) {
	        ele[_attrSrc] = src;
	    }

	    function handleSource(ele, attr, dataAttr) {
	        var dataSrc = ele.getAttribute(dataAttr);
	        if (dataSrc) {
	            ele[attr] = dataSrc;
	            ele.removeAttribute(dataAttr);
	        }
	    }

	    function equal(ele, str) {
	        return ele.nodeName.toLowerCase() === str;
	    }

	    function hasClass(ele, className) {
	        return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1;
	    }

	    function addClass(ele, className) {
	        if (!hasClass(ele, className)) {
	            ele.className += ' ' + className;
	        }
	    }

	    function toArray(selector) {
	        var array = [];
	        var nodelist = document.querySelectorAll(selector);
	        for (var i = nodelist.length; i--; array.unshift(nodelist[i])) {}
	        return array;
	    }

	    function saveViewportOffset(offset) {
	        _viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
	        _viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
	    }

	    function bindEvent(ele, type, fn) {
	        if (ele.attachEvent) {
	            ele.attachEvent && ele.attachEvent('on' + type, fn);
	        } else {
	            ele.addEventListener(type, fn, false);
	        }
	    }

	    function unbindEvent(ele, type, fn) {
	        if (ele.detachEvent) {
	            ele.detachEvent && ele.detachEvent('on' + type, fn);
	        } else {
	            ele.removeEventListener(type, fn, false);
	        }
	    }

	    function each(object, fn) {
	        if (object && fn) {
	            var l = object.length;
	            for (var i = 0; i < l && fn(object[i], i) !== false; i++) {}
	        }
	    }

	    function throttle(fn, minDelay, scope) {
	        var lastCall = 0;
	        return function() {
	            var now = +new Date();
	            if (now - lastCall < minDelay) {
	                return;
	            }
	            lastCall = now;
	            fn.apply(scope, arguments);
	        };
	    }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const utilities_1 = __webpack_require__(28);
	const html = __webpack_require__(40);
	const thumbnailer_1 = __webpack_require__(56);
	const templates_1 = __webpack_require__(39);
	const interfaces_1 = __webpack_require__(32);
	let AssetsInfoPreview = class AssetsInfoPreview extends views_1.View {
	    onModel(model) {
	        if (model == null) {
	            this.clear();
	            return;
	        }
	        this.ui['name'].textContent = model.get('filename');
	        this.ui['mime'].textContent = model.get('mime');
	        this.ui['size'].textContent = utilities_1.humanFileSize(model.get('size'), true);
	        let link = this.ui['download'].querySelector('a');
	        let url = model.getURL();
	        views_1.View.prototype.setModel.call(this, model);
	        link.textContent = model.get('name');
	        link.href = url + '?download=true';
	    }
	    clear() {
	        if (this.ui['name']) {
	            this.ui['name'].textContent = "";
	        }
	        if (this.ui['mime']) {
	            this.ui['mime'].textContent = "";
	        }
	        if (this.ui['size']) {
	            this.ui['size'].textContent = "";
	        }
	        if (this.ui['download']) {
	            let fp = this.model.fullPath;
	            let link = this.ui['download'].querySelector('a');
	            link.textContent = fp;
	            link.href = fp + '?download=true';
	        }
	    }
	    onItemRemove() {
	        this.model.remove().then(() => {
	            let link = this.ui['download'].querySelector('a');
	        });
	    }
	};
	AssetsInfoPreview = __decorate([
	    views_1.attributes({
	        ui: {
	            name: '.name',
	            mime: '.mimetype',
	            size: '.size',
	            download: '.download'
	        },
	        events: {
	            "click a.remove": "onItemRemove"
	        },
	        tagName: 'table',
	        className: 'info',
	        template: templates_1.default['preview-info']
	    }), 
	    __metadata('design:paramtypes', [])
	], AssetsInfoPreview);
	class AssetsPreview extends views_1.LayoutView {
	    constructor(options = {}) {
	        let opts = options.infoViewOptions || {};
	        super({
	            regions: {
	                preview: '.preview-region',
	                info: '.info-region'
	            },
	            className: 'assets-preview',
	            template: templates_1.default['preview']
	        });
	        this.infoView = options.infoView ? new options.infoView(opts) : new AssetsInfoPreview(opts);
	    }
	    setModel(model) {
	        super.setModel(model);
	        this.hideInfoView(model == null ? true : false);
	        this.infoView.model = model;
	        if (model == null) {
	            this.infoView.clear();
	            return;
	        }
	        let Handler = interfaces_1.getPreviewHandler(model.get('mime'));
	        let region = this.regions['preview'];
	        region.empty();
	        this.listenTo(model, 'remove', () => {
	            region.empty();
	            this.infoView.clear();
	        });
	        if (Handler) {
	            let view = new Handler({ model: model });
	            html.addClass(view.el, 'preview');
	            region.show(view);
	        }
	        else {
	            let image = new Image();
	            let div = document.createElement('div');
	            html.addClass(div, 'preview');
	            region.el.innerHTML = '';
	            region.el.appendChild(div);
	            thumbnailer_1.Thumbnailer.has(model)
	                .then((test) => {
	                if (!test)
	                    return;
	                image.src = test;
	                div.appendChild(image);
	            }).catch((e) => {
	                console.log(e);
	            });
	        }
	        return this;
	    }
	    onRender() {
	        this.regions['info'].show(this.infoView);
	        this.hideInfoView();
	    }
	    hideInfoView(hide = true) {
	        this.infoView.el.style.display = hide ? 'none' : 'table';
	    }
	}
	exports.AssetsPreview = AssetsPreview;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const utilities_1 = __webpack_require__(14);
	exports.MimeList = {
	    'audio/mpeg': 'audio-generic',
	    'audio/ogg': 'audio-generic',
	    'application/pdf': 'application-pdf',
	    'video/ogg': 'video-generic',
	    'video/mp4': 'video-generic',
	    'video/x-m4v': 'video-generic',
	    'video/quicktime': 'video-generic'
	};
	class Thumbnailer {
	    static request(asset) {
	        let url = asset.getURL();
	        return utilities_1.request.get(url).params({
	            thumbnail: true,
	            base64: false
	        }).end().then(function () {
	            return "";
	        });
	    }
	    static has(asset) {
	        return utilities_1.request.get(asset.getURL()).params({
	            thumbnail: true,
	            check: true
	        }).end().then(function (msg) {
	            return `${asset.getURL()}?thumbnail=true`;
	        }).catch(function () {
	            return null;
	        });
	    }
	}
	exports.Thumbnailer = Thumbnailer;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const index_1 = __webpack_require__(36);
	const assets_preview_1 = __webpack_require__(55);
	const filebutton_1 = __webpack_require__(35);
	const utils = __webpack_require__(40);
	const client_1 = __webpack_require__(58);
	const utils_1 = __webpack_require__(38);
	let GalleryView = class GalleryView extends views_1.LayoutView {
	    constructor(client, options = {}) {
	        options.regions = {
	            list: '.gallery-list',
	            preview: '.gallery-preview'
	        };
	        super(options);
	        this._options = options;
	        this._client = client;
	        this.collection = client.getCollection();
	        this._listView = new index_1.AssetsListView({
	            collection: this.collection,
	            deleteable: true
	        });
	        this._preView = new assets_preview_1.AssetsPreview();
	        this.listenTo(this._listView, 'selected', this._onItemSelect);
	        this.listenTo(this._listView, 'remove', this._onItemRemove);
	        this.listenTo(this._listView, 'dblclick', () => {
	            this.trigger('dblclick');
	        });
	    }
	    get options() {
	        return this._options;
	    }
	    get listView() {
	        return this._listView;
	    }
	    get preView() {
	        return this._preView;
	    }
	    get url() {
	        return this.collection.getURL();
	    }
	    set url(url) {
	        this.collection.url = url;
	        this._uploadButton.url = url;
	    }
	    onRender() {
	        this.regions['list'].show(this._listView);
	        this.regions['preview'].show(this._preView);
	        if (this.options.uploadButton) {
	            this._uploadButton = new filebutton_1.UploadButton({
	                el: this.ui['button'],
	                autoUpload: true,
	                url: this._client.url,
	                maxSize: this.options.maxSize || 1024 * 1000,
	                mimeType: this.options.mimeType
	            });
	            this.listenTo(this._client, 'change:url', () => {
	                this._uploadButton.url = this._client.url;
	            });
	            this.listenTo(this._uploadButton, 'upload', this._onItemCreate);
	            this.listenTo(this._uploadButton, 'progress', this._onUploadProgress);
	            this._uploadButton.render();
	        }
	    }
	    _onUploadProgress(e) {
	        let p = Math.round((e.progress / e.total) * 100);
	        this.$('.upload-progress')[0].style.width = p + '%';
	    }
	    _onItemCreate(asset) {
	        setTimeout(() => {
	            let elm = this.$('.upload-progress')[0];
	            utils.transitionEnd(elm, (e) => {
	                elm.style.width = '0';
	                utils.transitionEnd(elm, e => {
	                    elm.style.opacity = '1';
	                }, 1000);
	            }, 600);
	            elm.style.opacity = '0';
	        }, 800);
	        this.collection.on('error', (e) => {
	            console.log(e);
	        });
	        try {
	            this.collection.add(asset, { silent: false, parse: true });
	        }
	        catch (e) {
	            console.log(e);
	        }
	    }
	    _onItemSelect({ model }) {
	        if (this._preView.model === model)
	            return;
	        this._preView.model = model;
	        this.selected = model;
	    }
	    _onItemRemove({ model }) {
	        if (this._preView.model === model) {
	            this._preView.model = null;
	        }
	    }
	    _onSearch() {
	        let search = this.ui['search'];
	        this.collection.query(search.value).catch(e => {
	            console.log(e);
	        });
	    }
	};
	GalleryView = __decorate([
	    utils_1.template('gallery'),
	    views_1.attributes({
	        className: 'assets-gallery gallery',
	        tagName: 'div',
	        ui: {
	            button: '.upload-button',
	        },
	        events: {
	            'change @ui.search': '_onSearch'
	        }
	    }), 
	    __metadata('design:paramtypes', [client_1.AssetsClient, Object])
	], GalleryView);
	exports.GalleryView = GalleryView;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const eventsjs_1 = __webpack_require__(13);
	const utilities_1 = __webpack_require__(14);
	const index_1 = __webpack_require__(26);
	const utilities_2 = __webpack_require__(28);
	const interface_1 = __webpack_require__(25);
	class AssetsClient extends eventsjs_1.EventEmitter {
	    constructor(options = {}) {
	        super();
	        this.__options = utilities_1.extend({}, options);
	        if (!options.url || options.url === '') {
	            this.__options.url = '/';
	        }
	    }
	    toModel(attr) {
	        return new index_1.AssetsModel(attr, {
	            url: this.url
	        });
	    }
	    get options() {
	        return utilities_1.extend({}, this.__options);
	    }
	    get url() {
	        return this.__options.url;
	    }
	    set url(url) {
	        if (this.url === url)
	            return;
	        this.__options.url = url;
	        this.trigger('change:url', url);
	    }
	    getCollection() {
	        return new index_1.AssetsCollection(this);
	    }
	    getById(id) {
	        return utilities_1.request.get(this.url)
	            .params({
	            id: id
	        }).json().then(value => {
	            if (!value.isValid)
	                return null;
	            return new index_1.AssetsModel(value.body, {
	                url: this.url
	            });
	        });
	    }
	    getByPath(path) {
	        if (path == null || path === '' || path === '/') {
	            return utilities_1.Promise.reject(new interface_1.HttpError(500, ""));
	        }
	        let url = utilities_2.normalizeURL(this.url, path);
	        return utilities_1.request.get(url)
	            .json().then(value => {
	            if (!value.isValid)
	                return null;
	            return new index_1.AssetsModel(value.body, {
	                url: this.url
	            });
	        });
	    }
	}
	exports.AssetsClient = AssetsClient;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(60));
	__export(__webpack_require__(61));


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const utils_1 = __webpack_require__(38);
	let CropPreView = class CropPreView extends views_1.View {
	    constructor(options = {}) {
	        super(options);
	        this.options = options;
	    }
	    set cropping(cropping) {
	        this._cropping = cropping;
	        this.update();
	    }
	    get cropping() {
	        return this._cropping;
	    }
	    render() {
	        this.triggerMethod('before:render');
	        this.undelegateEvents();
	        let image = this.el.querySelector('img');
	        if (image == null) {
	            image = document.createElement('img');
	            this.el.appendChild(image);
	        }
	        this.delegateEvents();
	        this.triggerMethod('render');
	        if (image.src !== '') {
	            this.update();
	        }
	        return this;
	    }
	    update() {
	        this.triggerMethod('before:update');
	        var img = this.ui['image'];
	        return utils_1.getImageSize(img)
	            .then(size => {
	            if (this.ui['image'] == null)
	                return this;
	            let el = this.el;
	            if (this._cropping == null) {
	                if (this.options.aspectRatio == null) {
	                    return this;
	                }
	                this._cropping = utils_1.getCropping(size, this.options.aspectRatio);
	            }
	            let cropping = this._cropping;
	            let cw = el.clientWidth, ch = el.clientHeight, rx = cw / cropping.width, ry = ch / cropping.height;
	            let width = size.width, height = size.height;
	            let e = {
	                width: Math.round(rx * width) + 'px',
	                height: Math.round(ry * height) + 'px',
	                marginLeft: '-' + Math.round(rx * cropping.x) + 'px',
	                marginTop: '-' + Math.round(ry * cropping.y) + 'px'
	            };
	            for (let key in e) {
	                img.style[key] = e[key];
	            }
	            this.triggerMethod('update');
	        });
	    }
	};
	CropPreView = __decorate([
	    views_1.attributes({
	        className: 'assets cropping-preview',
	        ui: {
	            image: 'img'
	        }
	    }), 
	    __metadata('design:paramtypes', [Object])
	], CropPreView);
	exports.CropPreView = CropPreView;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const views_1 = __webpack_require__(11);
	const Cropper = __webpack_require__(62);
	const utils_1 = __webpack_require__(38);
	const orange_1 = __webpack_require__(5);
	function isFunction(a) {
	    return (typeof a === 'function');
	}
	let CropView = class CropView extends views_1.View {
	    constructor(options = { resize: false }) {
	        super(options);
	        this.options = options;
	    }
	    get cropper() {
	        if (this._cropper != null)
	            return this._cropper;
	        if (this.ui['image'] == null)
	            return null;
	        return this.activate()._cropper;
	    }
	    get cropping() {
	        return this._cropping;
	    }
	    set cropping(cropping) {
	        this._cropping = cropping;
	        if (this.options.previewView)
	            this.options.previewView.cropping = cropping;
	    }
	    setModel(model) {
	        if (this.ui['image'] == null)
	            return this;
	        let image = this.ui['image'];
	        if (model == null) {
	            image.src = "";
	            if (this.model)
	                this.stopListening(this.model);
	            this._model = model;
	            return;
	        }
	        image.src = model.getURL();
	        super.setModel(model);
	        if (this.options.aspectRatio != null) {
	            utils_1.getImageSize(image).then(size => {
	                this._cropping = utils_1.getCropping(size, this.options.aspectRatio);
	            }).catch(e => {
	                this.trigger('error', e);
	            });
	        }
	        return this;
	    }
	    activate() {
	        if (this._cropper != null) {
	            return this;
	        }
	        let o = this.options;
	        let opts = {
	            crop: e => {
	                this._cropping = e.detail;
	                if (this.options.previewView) {
	                    this.options.previewView.cropping = this._cropping;
	                }
	                this.triggerMethod('crop', e.detail);
	                if (isFunction(o.crop))
	                    o.crop(e);
	            },
	            data: this.cropping,
	            built: () => {
	                this.triggerMethod('built');
	                if (isFunction(o.built))
	                    o.built();
	            },
	            cropstart: e => {
	                this.triggerMethod('cropstart');
	                if (isFunction(o.cropstart))
	                    o.cropstart(e);
	            },
	            cropmove: e => {
	                this.triggerMethod('cropmove', e);
	                if (isFunction(o.cropmove))
	                    o.cropmove(e);
	            },
	            cropend: e => {
	                this.triggerMethod('cropend', e);
	                if (isFunction(o.cropend))
	                    o.cropend(e);
	            }
	        };
	        opts = orange_1.extend({}, this.options, opts);
	        this._cropper = new Cropper(this.ui['image'], opts);
	        return this;
	    }
	    deactivate() {
	        if (this.cropper) {
	            this._cropper.destroy();
	            this._cropper = void 0;
	        }
	        return this;
	    }
	    toggle() {
	        return this._cropper != null ? this.deactivate() : this.activate();
	    }
	    onCrop(cropping) {
	    }
	    render() {
	        this.triggerMethod('before:render');
	        this.undelegateEvents();
	        let image = this.el.querySelector('img');
	        if (image == null) {
	            image = document.createElement('img');
	            this.el.appendChild(image);
	        }
	        this.delegateEvents();
	        this.triggerMethod('render');
	        return this;
	    }
	    destroy() {
	        this.deactivate();
	        super.destroy();
	    }
	};
	CropView = __decorate([
	    views_1.attributes({
	        className: 'assets cropping-view',
	        ui: {
	            image: 'img'
	        }
	    }), 
	    __metadata('design:paramtypes', [Object])
	], CropView);
	exports.CropView = CropView;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Cropper.js v0.7.2
	 * https://github.com/fengyuanchen/cropperjs
	 *
	 * Copyright (c) 2015-2016 Fengyuan Chen
	 * Released under the MIT license
	 *
	 * Date: 2016-06-08T12:25:05.932Z
	 */

	(function (global, factory) {
	  if (typeof module === 'object' && typeof module.exports === 'object') {
	    module.exports = global.document ? factory(global, true) : function (window) {
	      if (!window.document) {
	        throw new Error('Cropper requires a window with a document');
	      }

	      return factory(window);
	    };
	  } else {
	    factory(global);
	  }
	})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {

	  'use strict';

	  // Globals
	  var document = window.document;
	  var location = window.location;
	  var navigator = window.navigator;
	  var ArrayBuffer = window.ArrayBuffer;
	  var Object = window.Object;
	  var Array = window.Array;
	  var String = window.String;
	  var Number = window.Number;
	  var Math = window.Math;

	  // Constants
	  var NAMESPACE = 'cropper';

	  // Classes
	  var CLASS_MODAL = NAMESPACE + '-modal';
	  var CLASS_HIDE = NAMESPACE + '-hide';
	  var CLASS_HIDDEN = NAMESPACE + '-hidden';
	  var CLASS_INVISIBLE = NAMESPACE + '-invisible';
	  var CLASS_MOVE = NAMESPACE + '-move';
	  var CLASS_CROP = NAMESPACE + '-crop';
	  var CLASS_DISABLED = NAMESPACE + '-disabled';
	  var CLASS_BG = NAMESPACE + '-bg';

	  // Events
	  var EVENT_MOUSE_DOWN = 'mousedown touchstart pointerdown MSPointerDown';
	  var EVENT_MOUSE_MOVE = 'mousemove touchmove pointermove MSPointerMove';
	  var EVENT_MOUSE_UP = 'mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel';
	  var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';
	  var EVENT_DBLCLICK = 'dblclick';
	  var EVENT_RESIZE = 'resize';
	  var EVENT_ERROR = 'error';
	  var EVENT_LOAD = 'load';
	  var EVENT_BUILD = 'build';
	  var EVENT_BUILT = 'built';
	  var EVENT_CROP_START = 'cropstart';
	  var EVENT_CROP_MOVE = 'cropmove';
	  var EVENT_CROP_END = 'cropend';
	  var EVENT_CROP = 'crop';
	  var EVENT_ZOOM = 'zoom';

	  // RegExps
	  var REGEXP_ACTIONS = /e|w|s|n|se|sw|ne|nw|all|crop|move|zoom/;
	  var REGEXP_SUFFIX = /width|height|left|top|marginLeft|marginTop/;
	  var REGEXP_ORIGINS = /^(https?:)\/\/([^\:\/\?#]+):?(\d*)/i;
	  var REGEXP_TRIM = /^\s+(.*)\s+$/;
	  var REGEXP_SPACES = /\s+/;
	  var REGEXP_DATA_URL = /^data\:/;
	  var REGEXP_DATA_URL_HEAD = /^data\:([^\;]+)\;base64,/;
	  var REGEXP_DATA_URL_JPEG = /^data\:image\/jpeg.*;base64,/;
	  var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;

	  // Data
	  var DATA_PREVIEW = 'preview';
	  var DATA_ACTION = 'action';

	  // Actions
	  var ACTION_EAST = 'e';
	  var ACTION_WEST = 'w';
	  var ACTION_SOUTH = 's';
	  var ACTION_NORTH = 'n';
	  var ACTION_SOUTH_EAST = 'se';
	  var ACTION_SOUTH_WEST = 'sw';
	  var ACTION_NORTH_EAST = 'ne';
	  var ACTION_NORTH_WEST = 'nw';
	  var ACTION_ALL = 'all';
	  var ACTION_CROP = 'crop';
	  var ACTION_MOVE = 'move';
	  var ACTION_ZOOM = 'zoom';
	  var ACTION_NONE = 'none';

	  // Supports
	  var SUPPORT_CANVAS = !!document.createElement('canvas').getContext;
	  var IS_SAFARI_OR_UIWEBVIEW = navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);

	  // Maths
	  var min = Math.min;
	  var max = Math.max;
	  var abs = Math.abs;
	  var sin = Math.sin;
	  var cos = Math.cos;
	  var sqrt = Math.sqrt;
	  var round = Math.round;
	  var floor = Math.floor;
	  var PI = Math.PI;

	  // Utilities
	  var objectProto = Object.prototype;
	  var toString = objectProto.toString;
	  var hasOwnProperty = objectProto.hasOwnProperty;
	  var slice = Array.prototype.slice;
	  var fromCharCode = String.fromCharCode;

	  function typeOf(obj) {
	    return toString.call(obj).slice(8, -1).toLowerCase();
	  }

	  function isNumber(num) {
	    return typeof num === 'number' && !isNaN(num);
	  }

	  function isUndefined(obj) {
	    return typeof obj === 'undefined';
	  }

	  function isObject(obj) {
	    return typeof obj === 'object' && obj !== null;
	  }

	  function isPlainObject(obj) {
	    var constructor;
	    var prototype;

	    if (!isObject(obj)) {
	      return false;
	    }

	    try {
	      constructor = obj.constructor;
	      prototype = constructor.prototype;

	      return constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
	    } catch (e) {
	      return false;
	    }
	  }

	  function isFunction(fn) {
	    return typeOf(fn) === 'function';
	  }

	  function isArray(arr) {
	    return Array.isArray ? Array.isArray(arr) : typeOf(arr) === 'array';
	  }

	  function toArray(obj, offset) {
	    offset = offset >= 0 ? offset : 0;

	    if (Array.from) {
	      return Array.from(obj).slice(offset);
	    }

	    return slice.call(obj, offset);
	  }

	  function trim(str) {
	    if (typeof str === 'string') {
	      str = str.trim ? str.trim() : str.replace(REGEXP_TRIM, '$1');
	    }

	    return str;
	  }

	  function each(obj, callback) {
	    var length;
	    var i;

	    if (obj && isFunction(callback)) {
	      if (isArray(obj) || isNumber(obj.length)/* array-like */) {
	        for (i = 0, length = obj.length; i < length; i++) {
	          if (callback.call(obj, obj[i], i, obj) === false) {
	            break;
	          }
	        }
	      } else if (isObject(obj)) {
	        for (i in obj) {
	          if (obj.hasOwnProperty(i)) {
	            if (callback.call(obj, obj[i], i, obj) === false) {
	              break;
	            }
	          }
	        }
	      }
	    }

	    return obj;
	  }

	  function extend(obj) {
	    var args;

	    if (arguments.length > 1) {
	      args = toArray(arguments);

	      if (Object.assign) {
	        return Object.assign.apply(Object, args);
	      }

	      args.shift();

	      each(args, function (arg) {
	        each(arg, function (prop, i) {
	          obj[i] = prop;
	        });
	      });
	    }

	    return obj;
	  }

	  function proxy(fn, context) {
	    var args = toArray(arguments, 2);

	    return function () {
	      return fn.apply(context, args.concat(toArray(arguments)));
	    };
	  }

	  function setStyle(element, styles) {
	    var style = element.style;

	    each(styles, function (value, property) {
	      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
	        value += 'px';
	      }

	      style[property] = value;
	    });
	  }

	  function hasClass(element, value) {
	    return element.classList ?
	      element.classList.contains(value) :
	      element.className.indexOf(value) > -1;
	  }

	  function addClass(element, value) {
	    var className;

	    if (isNumber(element.length)) {
	      return each(element, function (elem) {
	        addClass(elem, value);
	      });
	    }

	    if (element.classList) {
	      return element.classList.add(value);
	    }

	    className = trim(element.className);

	    if (!className) {
	      element.className = value;
	    } else if (className.indexOf(value) < 0) {
	      element.className = className + ' ' + value;
	    }
	  }

	  function removeClass(element, value) {
	    if (isNumber(element.length)) {
	      return each(element, function (elem) {
	        removeClass(elem, value);
	      });
	    }

	    if (element.classList) {
	      return element.classList.remove(value);
	    }

	    if (element.className.indexOf(value) >= 0) {
	      element.className = element.className.replace(value, '');
	    }
	  }

	  function toggleClass(element, value, added) {
	    if (isNumber(element.length)) {
	      return each(element, function (elem) {
	        toggleClass(elem, value, added);
	      });
	    }

	    // IE10-11 doesn't support the second parameter of `classList.toggle`
	    if (added) {
	      addClass(element, value);
	    } else {
	      removeClass(element, value);
	    }
	  }

	  function hyphenate(str) {
	    return str.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
	  }

	  function getData(element, name) {
	    if (isObject(element[name])) {
	      return element[name];
	    } else if (element.dataset) {
	      return element.dataset[name];
	    }

	    return element.getAttribute('data-' + hyphenate(name));
	  }

	  function setData(element, name, data) {
	    if (isObject(data)) {
	      element[name] = data;
	    } else if (element.dataset) {
	      element.dataset[name] = data;
	    } else {
	      element.setAttribute('data-' + hyphenate(name), data);
	    }
	  }

	  function removeData(element, name) {
	    if (isObject(element[name])) {
	      delete element[name];
	    } else if (element.dataset) {
	      delete element.dataset[name];
	    } else {
	      element.removeAttribute('data-' + hyphenate(name));
	    }
	  }

	  function removeListener(element, type, handler) {
	    var types = trim(type).split(REGEXP_SPACES);

	    if (types.length > 1) {
	      return each(types, function (type) {
	        removeListener(element, type, handler);
	      });
	    }

	    if (element.removeEventListener) {
	      element.removeEventListener(type, handler, false);
	    } else if (element.detachEvent) {
	      element.detachEvent('on' + type, handler);
	    }
	  }

	  function addListener(element, type, handler, once) {
	    var types = trim(type).split(REGEXP_SPACES);
	    var originalHandler = handler;

	    if (types.length > 1) {
	      return each(types, function (type) {
	        addListener(element, type, handler);
	      });
	    }

	    if (once) {
	      handler = function () {
	        removeListener(element, type, handler);

	        return originalHandler.apply(element, arguments);
	      };
	    }

	    if (element.addEventListener) {
	      element.addEventListener(type, handler, false);
	    } else if (element.attachEvent) {
	      element.attachEvent('on' + type, handler);
	    }
	  }

	  function dispatchEvent(element, type, data) {
	    var event;

	    if (element.dispatchEvent) {

	      // Event and CustomEvent on IE9-11 are global objects, not constructors
	      if (isFunction(Event) && isFunction(CustomEvent)) {
	        if (isUndefined(data)) {
	          event = new Event(type, {
	            bubbles: true,
	            cancelable: true
	          });
	        } else {
	          event = new CustomEvent(type, {
	            detail: data,
	            bubbles: true,
	            cancelable: true
	          });
	        }
	      } else {
	        // IE9-11
	        if (isUndefined(data)) {
	          event = document.createEvent('Event');
	          event.initEvent(type, true, true);
	        } else {
	          event = document.createEvent('CustomEvent');
	          event.initCustomEvent(type, true, true, data);
	        }
	      }

	      // IE9+
	      return element.dispatchEvent(event);
	    } else if (element.fireEvent) {

	      // IE6-10 (native events only)
	      return element.fireEvent('on' + type);
	    }
	  }

	  function preventDefault(e) {
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      e.returnValue = false;
	    }
	  }

	  function getEvent(event) {
	    var e = event || window.event;
	    var doc;

	    // Fix target property (IE8)
	    if (!e.target) {
	      e.target = e.srcElement || document;
	    }

	    if (!isNumber(e.pageX)) {
	      doc = document.documentElement;
	      e.pageX = e.clientX + (window.scrollX || doc && doc.scrollLeft || 0) - (doc && doc.clientLeft || 0);
	      e.pageY = e.clientY + (window.scrollY || doc && doc.scrollTop || 0) - (doc && doc.clientTop || 0);
	    }

	    return e;
	  }

	  function getOffset(element) {
	    var doc = document.documentElement;
	    var box = element.getBoundingClientRect();

	    return {
	      left: box.left + (window.scrollX || doc && doc.scrollLeft || 0) - (doc && doc.clientLeft || 0),
	      top: box.top + (window.scrollY || doc && doc.scrollTop || 0) - (doc && doc.clientTop || 0)
	    };
	  }

	  function getTouchesCenter(touches) {
	    var length = touches.length;
	    var pageX = 0;
	    var pageY = 0;

	    if (length) {
	      each(touches, function (touch) {
	        pageX += touch.pageX;
	        pageY += touch.pageY;
	      });

	      pageX /= length;
	      pageY /= length;
	    }

	    return {
	      pageX: pageX,
	      pageY: pageY
	    };
	  }

	  function getByTag(element, tagName) {
	    return element.getElementsByTagName(tagName);
	  }

	  function getByClass(element, className) {
	    return element.getElementsByClassName ?
	      element.getElementsByClassName(className) :
	      element.querySelectorAll('.' + className);
	  }

	  function createElement(tagName) {
	    return document.createElement(tagName);
	  }

	  function appendChild(element, elem) {
	    element.appendChild(elem);
	  }

	  function removeChild(element) {
	    if (element.parentNode) {
	      element.parentNode.removeChild(element);
	    }
	  }

	  function empty(element) {
	    while (element.firstChild) {
	      element.removeChild(element.firstChild);
	    }
	  }

	  function isCrossOriginURL(url) {
	    var parts = url.match(REGEXP_ORIGINS);

	    return parts && (
	      parts[1] !== location.protocol ||
	      parts[2] !== location.hostname ||
	      parts[3] !== location.port
	    );
	  }

	  function addTimestamp(url) {
	    var timestamp = 'timestamp=' + (new Date()).getTime();

	    return (url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp);
	  }

	  function getImageSize(image, callback) {
	    var newImage;

	    // Modern browsers (ignore Safari)
	    if (image.naturalWidth && !IS_SAFARI_OR_UIWEBVIEW) {
	      return callback(image.naturalWidth, image.naturalHeight);
	    }

	    // IE8: Don't use `new Image()` here
	    newImage = createElement('img');

	    newImage.onload = function () {
	      callback(this.width, this.height);
	    };

	    newImage.src = image.src;
	  }

	  function getTransform(data) {
	    var transforms = [];
	    var rotate = data.rotate;
	    var scaleX = data.scaleX;
	    var scaleY = data.scaleY;

	    // Scale should come first before rotate
	    if (isNumber(scaleX) && isNumber(scaleY)) {
	      transforms.push('scale(' + scaleX + ',' + scaleY + ')');
	    }

	    if (isNumber(rotate)) {
	      transforms.push('rotate(' + rotate + 'deg)');
	    }

	    return transforms.length ? transforms.join(' ') : 'none';
	  }

	  function getRotatedSizes(data, reversed) {
	    var deg = abs(data.degree) % 180;
	    var arc = (deg > 90 ? (180 - deg) : deg) * PI / 180;
	    var sinArc = sin(arc);
	    var cosArc = cos(arc);
	    var width = data.width;
	    var height = data.height;
	    var aspectRatio = data.aspectRatio;
	    var newWidth;
	    var newHeight;

	    if (!reversed) {
	      newWidth = width * cosArc + height * sinArc;
	      newHeight = width * sinArc + height * cosArc;
	    } else {
	      newWidth = width / (cosArc + sinArc / aspectRatio);
	      newHeight = newWidth / aspectRatio;
	    }

	    return {
	      width: newWidth,
	      height: newHeight
	    };
	  }

	  function getSourceCanvas(image, data) {
	    var canvas = createElement('canvas');
	    var context = canvas.getContext('2d');
	    var dstX = 0;
	    var dstY = 0;
	    var dstWidth = data.naturalWidth;
	    var dstHeight = data.naturalHeight;
	    var rotate = data.rotate;
	    var scaleX = data.scaleX;
	    var scaleY = data.scaleY;
	    var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
	    var rotatable = isNumber(rotate) && rotate !== 0;
	    var advanced = rotatable || scalable;
	    var canvasWidth = dstWidth * abs(scaleX || 1);
	    var canvasHeight = dstHeight * abs(scaleY || 1);
	    var translateX;
	    var translateY;
	    var rotated;

	    if (scalable) {
	      translateX = canvasWidth / 2;
	      translateY = canvasHeight / 2;
	    }

	    if (rotatable) {
	      rotated = getRotatedSizes({
	        width: canvasWidth,
	        height: canvasHeight,
	        degree: rotate
	      });

	      canvasWidth = rotated.width;
	      canvasHeight = rotated.height;
	      translateX = canvasWidth / 2;
	      translateY = canvasHeight / 2;
	    }

	    canvas.width = canvasWidth;
	    canvas.height = canvasHeight;

	    if (advanced) {
	      dstX = -dstWidth / 2;
	      dstY = -dstHeight / 2;

	      context.save();
	      context.translate(translateX, translateY);
	    }

	    // Scale should come first before rotate as in the "getTransform" function
	    if (scalable) {
	      context.scale(scaleX, scaleY);
	    }

	    if (rotatable) {
	      context.rotate(rotate * PI / 180);
	    }

	    context.drawImage(image, floor(dstX), floor(dstY), floor(dstWidth), floor(dstHeight));

	    if (advanced) {
	      context.restore();
	    }

	    return canvas;
	  }

	  function getStringFromCharCode(dataView, start, length) {
	    var str = '';
	    var i = start;

	    for (length += start; i < length; i++) {
	      str += fromCharCode(dataView.getUint8(i));
	    }

	    return str;
	  }

	  function getOrientation(arrayBuffer) {
	    var dataView = new DataView(arrayBuffer);
	    var length = dataView.byteLength;
	    var orientation;
	    var exifIDCode;
	    var tiffOffset;
	    var firstIFDOffset;
	    var littleEndian;
	    var endianness;
	    var app1Start;
	    var ifdStart;
	    var offset;
	    var i;

	    // Only handle JPEG image (start by 0xFFD8)
	    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
	      offset = 2;

	      while (offset < length) {
	        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
	          app1Start = offset;
	          break;
	        }

	        offset++;
	      }
	    }

	    if (app1Start) {
	      exifIDCode = app1Start + 4;
	      tiffOffset = app1Start + 10;

	      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
	        endianness = dataView.getUint16(tiffOffset);
	        littleEndian = endianness === 0x4949;

	        if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
	          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
	            firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

	            if (firstIFDOffset >= 0x00000008) {
	              ifdStart = tiffOffset + firstIFDOffset;
	            }
	          }
	        }
	      }
	    }

	    if (ifdStart) {
	      length = dataView.getUint16(ifdStart, littleEndian);

	      for (i = 0; i < length; i++) {
	        offset = ifdStart + i * 12 + 2;

	        if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

	          // 8 is the offset of the current tag's value
	          offset += 8;

	          // Get the original orientation value
	          orientation = dataView.getUint16(offset, littleEndian);

	          // Override the orientation with its default value for Safari
	          if (IS_SAFARI_OR_UIWEBVIEW) {
	            dataView.setUint16(offset, 1, littleEndian);
	          }

	          break;
	        }
	      }
	    }

	    return orientation;
	  }

	  function dataURLToArrayBuffer(dataURL) {
	    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
	    var binary = atob(base64);
	    var length = binary.length;
	    var arrayBuffer = new ArrayBuffer(length);
	    var dataView = new Uint8Array(arrayBuffer);
	    var i;

	    for (i = 0; i < length; i++) {
	      dataView[i] = binary.charCodeAt(i);
	    }

	    return arrayBuffer;
	  }

	  // Only available for JPEG image
	  function arrayBufferToDataURL(arrayBuffer) {
	    var dataView = new Uint8Array(arrayBuffer);
	    var length = dataView.length;
	    var base64 = '';
	    var i;

	    for (i = 0; i < length; i++) {
	      base64 += fromCharCode(dataView[i]);
	    }

	    return 'data:image/jpeg;base64,' + btoa(base64);
	  }

	  function Cropper(element, options) {
	    var _this = this;

	    _this.element = element;
	    _this.options = extend({}, Cropper.DEFAULTS, isPlainObject(options) && options);
	    _this.ready = false;
	    _this.built = false;
	    _this.complete = false;
	    _this.rotated = false;
	    _this.cropped = false;
	    _this.disabled = false;
	    _this.replaced = false;
	    _this.limited = false;
	    _this.wheeling = false;
	    _this.isImg = false;
	    _this.originalUrl = '';
	    _this.canvasData = null;
	    _this.cropBoxData = null;
	    _this.previews = null;
	    _this.init();
	  }

	  Cropper.prototype = {
	    constructor: Cropper,

	    init: function () {
	      var _this = this;
	      var element = _this.element;
	      var tagName = element.tagName.toLowerCase();
	      var url;

	      if (getData(element, NAMESPACE)) {
	        return;
	      }

	      setData(element, NAMESPACE, _this);

	      if (tagName === 'img') {
	        _this.isImg = true;

	        // e.g.: "img/picture.jpg"
	        _this.originalUrl = url = element.getAttribute('src');

	        // Stop when it's a blank image
	        if (!url) {
	          return;
	        }

	        // e.g.: "http://example.com/img/picture.jpg"
	        url = element.src;
	      } else if (tagName === 'canvas' && SUPPORT_CANVAS) {
	        url = element.toDataURL();
	      }

	      _this.load(url);
	    },

	    load: function (url) {
	      var _this = this;
	      var options = _this.options;
	      var element = _this.element;
	      var xhr;

	      if (!url) {
	        return;
	      }

	      if (isFunction(options.build)) {
	        addListener(element, EVENT_BUILD, options.build, true);
	      }

	      if (dispatchEvent(element, EVENT_BUILD) === false) {
	        return;
	      }

	      _this.url = url;
	      _this.imageData = {};

	      if (!options.checkOrientation || !ArrayBuffer) {
	        return _this.clone();
	      }

	      // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
	      if (REGEXP_DATA_URL.test(url)) {
	        return REGEXP_DATA_URL_JPEG.test(url) ?
	          _this.read(dataURLToArrayBuffer(url)) :
	          _this.clone();
	      }

	      xhr = new XMLHttpRequest();

	      xhr.onerror = xhr.onabort = function () {
	        _this.clone();
	      };

	      xhr.onload = function () {
	        _this.read(this.response);
	      };

	      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
	        url = addTimestamp(url);
	      }

	      xhr.open('get', url);
	      xhr.responseType = 'arraybuffer';
	      xhr.send();
	    },

	    read: function (arrayBuffer) {
	      var _this = this;
	      var options = _this.options;
	      var orientation = getOrientation(arrayBuffer);
	      var imageData = _this.imageData;
	      var rotate;
	      var scaleX;
	      var scaleY;

	      if (orientation > 1) {
	        _this.url = arrayBufferToDataURL(arrayBuffer);

	        switch (orientation) {

	          // flip horizontal
	          case 2:
	            scaleX = -1;
	            break;

	          // rotate left 180°
	          case 3:
	            rotate = -180;
	            break;

	          // flip vertical
	          case 4:
	            scaleY = -1;
	            break;

	          // flip vertical + rotate right 90°
	          case 5:
	            rotate = 90;
	            scaleY = -1;
	            break;

	          // rotate right 90°
	          case 6:
	            rotate = 90;
	            break;

	          // flip horizontal + rotate right 90°
	          case 7:
	            rotate = 90;
	            scaleX = -1;
	            break;

	          // rotate left 90°
	          case 8:
	            rotate = -90;
	            break;
	        }
	      }

	      if (options.rotatable) {
	        imageData.rotate = rotate;
	      }

	      if (options.scalable) {
	        imageData.scaleX = scaleX;
	        imageData.scaleY = scaleY;
	      }

	      _this.clone();
	    },

	    clone: function () {
	      var _this = this;
	      var element = _this.element;
	      var url = _this.url;
	      var crossOrigin;
	      var crossOriginUrl;
	      var image;
	      var start;
	      var stop;

	      if (_this.options.checkCrossOrigin && isCrossOriginURL(url)) {
	        crossOrigin = element.crossOrigin;

	        if (crossOrigin) {
	          crossOriginUrl = url;
	        } else {
	          crossOrigin = 'anonymous';

	          // Bust cache when there is not a "crossOrigin" property
	          crossOriginUrl = addTimestamp(url);
	        }
	      }

	      _this.crossOrigin = crossOrigin;
	      _this.crossOriginUrl = crossOriginUrl;
	      image = createElement('img');

	      if (crossOrigin) {
	        image.crossOrigin = crossOrigin;
	      }

	      image.src = crossOriginUrl || url;
	      _this.image = image;
	      _this._start = start = proxy(_this.start, _this);
	      _this._stop = stop = proxy(_this.stop, _this);

	      if (_this.isImg) {
	        if (element.complete) {
	          _this.start();
	        } else {
	          addListener(element, EVENT_LOAD, start);
	        }
	      } else {
	        addListener(image, EVENT_LOAD, start);
	        addListener(image, EVENT_ERROR, stop);
	        addClass(image, CLASS_HIDE);
	        element.parentNode.insertBefore(image, element.nextSibling);
	      }
	    },

	    start: function (event) {
	      var _this = this;
	      var image = _this.isImg ? _this.element : _this.image;

	      if (event) {
	        removeListener(image, EVENT_LOAD, _this._start);
	        removeListener(image, EVENT_ERROR, _this._stop);
	      }

	      getImageSize(image, function (naturalWidth, naturalHeight) {
	        extend(_this.imageData, {
	          naturalWidth: naturalWidth,
	          naturalHeight: naturalHeight,
	          aspectRatio: naturalWidth / naturalHeight
	        });

	        _this.ready = true;
	        _this.build();
	      });
	    },

	    stop: function () {
	      var _this = this;
	      var image = _this.image;

	      removeListener(image, EVENT_LOAD, _this._start);
	      removeListener(image, EVENT_ERROR, _this._stop);

	      removeChild(image);
	      _this.image = null;
	    },

	    build: function () {
	      var _this = this;
	      var options = _this.options;
	      var element = _this.element;
	      var image = _this.image;
	      var container;
	      var template;
	      var cropper;
	      var canvas;
	      var dragBox;
	      var cropBox;
	      var face;

	      if (!_this.ready) {
	        return;
	      }

	      // Unbuild first when replace
	      if (_this.built) {
	        _this.unbuild();
	      }

	      template = createElement('div');
	      template.innerHTML = Cropper.TEMPLATE;

	      // Create cropper elements
	      _this.container = container = element.parentNode;
	      _this.cropper = cropper = getByClass(template, 'cropper-container')[0];
	      _this.canvas = canvas = getByClass(cropper, 'cropper-canvas')[0];
	      _this.dragBox = dragBox = getByClass(cropper, 'cropper-drag-box')[0];
	      _this.cropBox = cropBox = getByClass(cropper, 'cropper-crop-box')[0];
	      _this.viewBox = getByClass(cropper, 'cropper-view-box')[0];
	      _this.face = face = getByClass(cropBox, 'cropper-face')[0];

	      appendChild(canvas, image);

	      // Hide the original image
	      addClass(element, CLASS_HIDDEN);

	      // Inserts the cropper after to the current image
	      container.insertBefore(cropper, element.nextSibling);

	      // Show the image if is hidden
	      if (!_this.isImg) {
	        removeClass(image, CLASS_HIDE);
	      }

	      _this.initPreview();
	      _this.bind();

	      options.aspectRatio = max(0, options.aspectRatio) || NaN;
	      options.viewMode = max(0, min(3, round(options.viewMode))) || 0;

	      if (options.autoCrop) {
	        _this.cropped = true;

	        if (options.modal) {
	          addClass(dragBox, CLASS_MODAL);
	        }
	      } else {
	        addClass(cropBox, CLASS_HIDDEN);
	      }

	      if (!options.guides) {
	        addClass(getByClass(cropBox, 'cropper-dashed'), CLASS_HIDDEN);
	      }

	      if (!options.center) {
	        addClass(getByClass(cropBox, 'cropper-center'), CLASS_HIDDEN);
	      }

	      if (options.background) {
	        addClass(cropper, CLASS_BG);
	      }

	      if (!options.highlight) {
	        addClass(face, CLASS_INVISIBLE);
	      }

	      if (options.cropBoxMovable) {
	        addClass(face, CLASS_MOVE);
	        setData(face, DATA_ACTION, ACTION_ALL);
	      }

	      if (!options.cropBoxResizable) {
	        addClass(getByClass(cropBox, 'cropper-line'), CLASS_HIDDEN);
	        addClass(getByClass(cropBox, 'cropper-point'), CLASS_HIDDEN);
	      }

	      _this.setDragMode(options.dragMode);
	      _this.render();
	      _this.built = true;
	      _this.setData(options.data);

	      // Call the built asynchronously to keep "image.cropper" is defined
	      setTimeout(function () {
	        if (isFunction(options.built)) {
	          addListener(element, EVENT_BUILT, options.built, true);
	        }

	        dispatchEvent(element, EVENT_BUILT);
	        dispatchEvent(element, EVENT_CROP, _this.getData());

	        _this.complete = true;
	      }, 0);
	    },

	    unbuild: function () {
	      var _this = this;

	      if (!_this.built) {
	        return;
	      }

	      _this.built = false;
	      _this.complete = false;
	      _this.initialImageData = null;

	      // Clear `initialCanvasData` is necessary when replace
	      _this.initialCanvasData = null;
	      _this.initialCropBoxData = null;
	      _this.containerData = null;
	      _this.canvasData = null;

	      // Clear `cropBoxData` is necessary when replace
	      _this.cropBoxData = null;
	      _this.unbind();

	      _this.resetPreview();
	      _this.previews = null;

	      _this.viewBox = null;
	      _this.cropBox = null;
	      _this.dragBox = null;
	      _this.canvas = null;
	      _this.container = null;

	      removeChild(_this.cropper);
	      _this.cropper = null;
	    },

	    render: function () {
	      var _this = this;

	      _this.initContainer();
	      _this.initCanvas();
	      _this.initCropBox();

	      _this.renderCanvas();

	      if (_this.cropped) {
	        _this.renderCropBox();
	      }
	    },

	    initContainer: function () {
	      var _this = this;
	      var options = _this.options;
	      var element = _this.element;
	      var container = _this.container;
	      var cropper = _this.cropper;
	      var containerData;

	      addClass(cropper, CLASS_HIDDEN);
	      removeClass(element, CLASS_HIDDEN);

	      _this.containerData = containerData = {
	        width: max(
	          container.offsetWidth,
	          Number(options.minContainerWidth) || 200
	        ),
	        height: max(
	          container.offsetHeight,
	          Number(options.minContainerHeight) || 100
	        )
	      };

	      setStyle(cropper, {
	        width: containerData.width,
	        height: containerData.height
	      });

	      addClass(element, CLASS_HIDDEN);
	      removeClass(cropper, CLASS_HIDDEN);
	    },

	    // Canvas (image wrapper)
	    initCanvas: function () {
	      var _this = this;
	      var viewMode = _this.options.viewMode;
	      var containerData = _this.containerData;
	      var imageData = _this.imageData;
	      var rotated = abs(imageData.rotate) === 90;
	      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
	      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
	      var aspectRatio = naturalWidth / naturalHeight;
	      var canvasWidth = containerData.width;
	      var canvasHeight = containerData.height;
	      var canvasData;

	      if (containerData.height * aspectRatio > containerData.width) {
	        if (viewMode === 3) {
	          canvasWidth = containerData.height * aspectRatio;
	        } else {
	          canvasHeight = containerData.width / aspectRatio;
	        }
	      } else {
	        if (viewMode === 3) {
	          canvasHeight = containerData.width / aspectRatio;
	        } else {
	          canvasWidth = containerData.height * aspectRatio;
	        }
	      }

	      canvasData = {
	        naturalWidth: naturalWidth,
	        naturalHeight: naturalHeight,
	        aspectRatio: aspectRatio,
	        width: canvasWidth,
	        height: canvasHeight
	      };

	      canvasData.oldLeft = canvasData.left = (containerData.width - canvasWidth) / 2;
	      canvasData.oldTop = canvasData.top = (containerData.height - canvasHeight) / 2;

	      _this.canvasData = canvasData;
	      _this.limited = (viewMode === 1 || viewMode === 2);
	      _this.limitCanvas(true, true);
	      _this.initialImageData = extend({}, imageData);
	      _this.initialCanvasData = extend({}, canvasData);
	    },

	    limitCanvas: function (sizeLimited, positionLimited) {
	      var _this = this;
	      var options = _this.options;
	      var viewMode = options.viewMode;
	      var containerData = _this.containerData;
	      var canvasData = _this.canvasData;
	      var aspectRatio = canvasData.aspectRatio;
	      var cropBoxData = _this.cropBoxData;
	      var cropped = _this.cropped && cropBoxData;
	      var minCanvasWidth;
	      var minCanvasHeight;
	      var newCanvasLeft;
	      var newCanvasTop;

	      if (sizeLimited) {
	        minCanvasWidth = Number(options.minCanvasWidth) || 0;
	        minCanvasHeight = Number(options.minCanvasHeight) || 0;

	        if (viewMode > 1) {
	          minCanvasWidth = max(minCanvasWidth, containerData.width);
	          minCanvasHeight = max(minCanvasHeight, containerData.height);

	          if (viewMode === 3) {
	            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
	              minCanvasWidth = minCanvasHeight * aspectRatio;
	            } else {
	              minCanvasHeight = minCanvasWidth / aspectRatio;
	            }
	          }
	        } else if (viewMode > 0) {
	          if (minCanvasWidth) {
	            minCanvasWidth = max(
	              minCanvasWidth,
	              cropped ? cropBoxData.width : 0
	            );
	          } else if (minCanvasHeight) {
	            minCanvasHeight = max(
	              minCanvasHeight,
	              cropped ? cropBoxData.height : 0
	            );
	          } else if (cropped) {
	            minCanvasWidth = cropBoxData.width;
	            minCanvasHeight = cropBoxData.height;

	            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
	              minCanvasWidth = minCanvasHeight * aspectRatio;
	            } else {
	              minCanvasHeight = minCanvasWidth / aspectRatio;
	            }
	          }
	        }

	        if (minCanvasWidth && minCanvasHeight) {
	          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
	            minCanvasHeight = minCanvasWidth / aspectRatio;
	          } else {
	            minCanvasWidth = minCanvasHeight * aspectRatio;
	          }
	        } else if (minCanvasWidth) {
	          minCanvasHeight = minCanvasWidth / aspectRatio;
	        } else if (minCanvasHeight) {
	          minCanvasWidth = minCanvasHeight * aspectRatio;
	        }

	        canvasData.minWidth = minCanvasWidth;
	        canvasData.minHeight = minCanvasHeight;
	        canvasData.maxWidth = Infinity;
	        canvasData.maxHeight = Infinity;
	      }

	      if (positionLimited) {
	        if (viewMode) {
	          newCanvasLeft = containerData.width - canvasData.width;
	          newCanvasTop = containerData.height - canvasData.height;

	          canvasData.minLeft = min(0, newCanvasLeft);
	          canvasData.minTop = min(0, newCanvasTop);
	          canvasData.maxLeft = max(0, newCanvasLeft);
	          canvasData.maxTop = max(0, newCanvasTop);

	          if (cropped && _this.limited) {
	            canvasData.minLeft = min(
	              cropBoxData.left,
	              cropBoxData.left + cropBoxData.width - canvasData.width
	            );
	            canvasData.minTop = min(
	              cropBoxData.top,
	              cropBoxData.top + cropBoxData.height - canvasData.height
	            );
	            canvasData.maxLeft = cropBoxData.left;
	            canvasData.maxTop = cropBoxData.top;

	            if (viewMode === 2) {
	              if (canvasData.width >= containerData.width) {
	                canvasData.minLeft = min(0, newCanvasLeft);
	                canvasData.maxLeft = max(0, newCanvasLeft);
	              }

	              if (canvasData.height >= containerData.height) {
	                canvasData.minTop = min(0, newCanvasTop);
	                canvasData.maxTop = max(0, newCanvasTop);
	              }
	            }
	          }
	        } else {
	          canvasData.minLeft = -canvasData.width;
	          canvasData.minTop = -canvasData.height;
	          canvasData.maxLeft = containerData.width;
	          canvasData.maxTop = containerData.height;
	        }
	      }
	    },

	    renderCanvas: function (changed) {
	      var _this = this;
	      var canvasData = _this.canvasData;
	      var imageData = _this.imageData;
	      var rotate = imageData.rotate;
	      var aspectRatio;
	      var rotatedData;

	      if (_this.rotated) {
	        _this.rotated = false;

	        // Computes rotated sizes with image sizes
	        rotatedData = getRotatedSizes({
	          width: imageData.width,
	          height: imageData.height,
	          degree: rotate
	        });

	        aspectRatio = rotatedData.width / rotatedData.height;

	        if (aspectRatio !== canvasData.aspectRatio) {
	          canvasData.left -= (rotatedData.width - canvasData.width) / 2;
	          canvasData.top -= (rotatedData.height - canvasData.height) / 2;
	          canvasData.width = rotatedData.width;
	          canvasData.height = rotatedData.height;
	          canvasData.aspectRatio = aspectRatio;
	          canvasData.naturalWidth = imageData.naturalWidth;
	          canvasData.naturalHeight = imageData.naturalHeight;

	          // Computes rotated sizes with natural image sizes
	          if (rotate % 180) {
	            rotatedData = getRotatedSizes({
	              width: imageData.naturalWidth,
	              height: imageData.naturalHeight,
	              degree: rotate
	            });

	            canvasData.naturalWidth = rotatedData.width;
	            canvasData.naturalHeight = rotatedData.height;
	          }

	          _this.limitCanvas(true, false);
	        }
	      }

	      if (canvasData.width > canvasData.maxWidth ||
	        canvasData.width < canvasData.minWidth) {
	        canvasData.left = canvasData.oldLeft;
	      }

	      if (canvasData.height > canvasData.maxHeight ||
	        canvasData.height < canvasData.minHeight) {
	        canvasData.top = canvasData.oldTop;
	      }

	      canvasData.width = min(
	        max(canvasData.width, canvasData.minWidth),
	        canvasData.maxWidth
	      );
	      canvasData.height = min(
	        max(canvasData.height, canvasData.minHeight),
	        canvasData.maxHeight
	      );

	      _this.limitCanvas(false, true);

	      canvasData.oldLeft = canvasData.left = min(
	        max(canvasData.left, canvasData.minLeft),
	        canvasData.maxLeft
	      );
	      canvasData.oldTop = canvasData.top = min(
	        max(canvasData.top, canvasData.minTop),
	        canvasData.maxTop
	      );

	      setStyle(_this.canvas, {
	        width: canvasData.width,
	        height: canvasData.height,
	        left: canvasData.left,
	        top: canvasData.top
	      });

	      _this.renderImage();

	      if (_this.cropped && _this.limited) {
	        _this.limitCropBox(true, true);
	      }

	      if (changed) {
	        _this.output();
	      }
	    },

	    renderImage: function (changed) {
	      var _this = this;
	      var canvasData = _this.canvasData;
	      var imageData = _this.imageData;
	      var newImageData;
	      var reversedData;
	      var reversedWidth;
	      var reversedHeight;
	      var transform;

	      if (imageData.rotate) {
	        reversedData = getRotatedSizes({
	          width: canvasData.width,
	          height: canvasData.height,
	          degree: imageData.rotate,
	          aspectRatio: imageData.aspectRatio
	        }, true);

	        reversedWidth = reversedData.width;
	        reversedHeight = reversedData.height;

	        newImageData = {
	          width: reversedWidth,
	          height: reversedHeight,
	          left: (canvasData.width - reversedWidth) / 2,
	          top: (canvasData.height - reversedHeight) / 2
	        };
	      }

	      extend(imageData, newImageData || {
	        width: canvasData.width,
	        height: canvasData.height,
	        left: 0,
	        top: 0
	      });

	      transform = getTransform(imageData);

	      setStyle(_this.image, {
	        width: imageData.width,
	        height: imageData.height,
	        marginLeft: imageData.left,
	        marginTop: imageData.top,
	        WebkitTransform: transform,
	        msTransform: transform,
	        transform: transform
	      });

	      if (changed) {
	        _this.output();
	      }
	    },

	    initCropBox: function () {
	      var _this = this;
	      var options = _this.options;
	      var aspectRatio = options.aspectRatio;
	      var autoCropArea = Number(options.autoCropArea) || 0.8;
	      var canvasData = _this.canvasData;
	      var cropBoxData = {
	            width: canvasData.width,
	            height: canvasData.height
	          };

	      if (aspectRatio) {
	        if (canvasData.height * aspectRatio > canvasData.width) {
	          cropBoxData.height = cropBoxData.width / aspectRatio;
	        } else {
	          cropBoxData.width = cropBoxData.height * aspectRatio;
	        }
	      }

	      _this.cropBoxData = cropBoxData;
	      _this.limitCropBox(true, true);

	      // Initialize auto crop area
	      cropBoxData.width = min(
	        max(cropBoxData.width, cropBoxData.minWidth),
	        cropBoxData.maxWidth
	      );
	      cropBoxData.height = min(
	        max(cropBoxData.height, cropBoxData.minHeight),
	        cropBoxData.maxHeight
	      );

	      // The width/height of auto crop area must large than "minWidth/Height"
	      cropBoxData.width = max(
	        cropBoxData.minWidth,
	        cropBoxData.width * autoCropArea
	      );
	      cropBoxData.height = max(
	        cropBoxData.minHeight,
	        cropBoxData.height * autoCropArea
	      );
	      cropBoxData.oldLeft = cropBoxData.left = (
	        canvasData.left + (canvasData.width - cropBoxData.width) / 2
	      );
	      cropBoxData.oldTop = cropBoxData.top = (
	        canvasData.top + (canvasData.height - cropBoxData.height) / 2
	      );

	      _this.initialCropBoxData = extend({}, cropBoxData);
	    },

	    limitCropBox: function (sizeLimited, positionLimited) {
	      var _this = this;
	      var options = _this.options;
	      var aspectRatio = options.aspectRatio;
	      var containerData = _this.containerData;
	      var canvasData = _this.canvasData;
	      var cropBoxData = _this.cropBoxData;
	      var limited = _this.limited;
	      var minCropBoxWidth;
	      var minCropBoxHeight;
	      var maxCropBoxWidth;
	      var maxCropBoxHeight;

	      if (sizeLimited) {
	        minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
	        minCropBoxHeight = Number(options.minCropBoxHeight) || 0;

	        // The min/maxCropBoxWidth/Height must be less than containerWidth/Height
	        minCropBoxWidth = min(minCropBoxWidth, containerData.width);
	        minCropBoxHeight = min(minCropBoxHeight, containerData.height);
	        maxCropBoxWidth = min(
	          containerData.width,
	          limited ? canvasData.width : containerData.width
	        );
	        maxCropBoxHeight = min(
	          containerData.height,
	          limited ? canvasData.height : containerData.height
	        );

	        if (aspectRatio) {
	          if (minCropBoxWidth && minCropBoxHeight) {
	            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
	              minCropBoxHeight = minCropBoxWidth / aspectRatio;
	            } else {
	              minCropBoxWidth = minCropBoxHeight * aspectRatio;
	            }
	          } else if (minCropBoxWidth) {
	            minCropBoxHeight = minCropBoxWidth / aspectRatio;
	          } else if (minCropBoxHeight) {
	            minCropBoxWidth = minCropBoxHeight * aspectRatio;
	          }

	          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
	            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
	          } else {
	            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
	          }
	        }

	        // The minWidth/Height must be less than maxWidth/Height
	        cropBoxData.minWidth = min(minCropBoxWidth, maxCropBoxWidth);
	        cropBoxData.minHeight = min(minCropBoxHeight, maxCropBoxHeight);
	        cropBoxData.maxWidth = maxCropBoxWidth;
	        cropBoxData.maxHeight = maxCropBoxHeight;
	      }

	      if (positionLimited) {
	        if (limited) {
	          cropBoxData.minLeft = max(0, canvasData.left);
	          cropBoxData.minTop = max(0, canvasData.top);
	          cropBoxData.maxLeft = min(
	            containerData.width,
	            canvasData.left + canvasData.width
	          ) - cropBoxData.width;
	          cropBoxData.maxTop = min(
	            containerData.height,
	            canvasData.top + canvasData.height
	          ) - cropBoxData.height;
	        } else {
	          cropBoxData.minLeft = 0;
	          cropBoxData.minTop = 0;
	          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
	          cropBoxData.maxTop = containerData.height - cropBoxData.height;
	        }
	      }
	    },

	    renderCropBox: function () {
	      var _this = this;
	      var options = _this.options;
	      var containerData = _this.containerData;
	      var cropBoxData = _this.cropBoxData;

	      if (cropBoxData.width > cropBoxData.maxWidth ||
	        cropBoxData.width < cropBoxData.minWidth) {
	        cropBoxData.left = cropBoxData.oldLeft;
	      }

	      if (cropBoxData.height > cropBoxData.maxHeight ||
	        cropBoxData.height < cropBoxData.minHeight) {
	        cropBoxData.top = cropBoxData.oldTop;
	      }

	      cropBoxData.width = min(
	        max(cropBoxData.width, cropBoxData.minWidth),
	        cropBoxData.maxWidth
	      );
	      cropBoxData.height = min(
	        max(cropBoxData.height, cropBoxData.minHeight),
	        cropBoxData.maxHeight
	      );

	      _this.limitCropBox(false, true);

	      cropBoxData.oldLeft = cropBoxData.left = min(
	        max(cropBoxData.left, cropBoxData.minLeft),
	        cropBoxData.maxLeft
	      );
	      cropBoxData.oldTop = cropBoxData.top = min(
	        max(cropBoxData.top, cropBoxData.minTop),
	        cropBoxData.maxTop
	      );

	      if (options.movable && options.cropBoxMovable) {

	        // Turn to move the canvas when the crop box is equal to the container
	        setData(_this.face, DATA_ACTION, cropBoxData.width === containerData.width &&
	          cropBoxData.height === containerData.height ? ACTION_MOVE : ACTION_ALL);
	      }

	      setStyle(_this.cropBox, {
	        width: cropBoxData.width,
	        height: cropBoxData.height,
	        left: cropBoxData.left,
	        top: cropBoxData.top
	      });

	      if (_this.cropped && _this.limited) {
	        _this.limitCanvas(true, true);
	      }

	      if (!_this.disabled) {
	        _this.output();
	      }
	    },

	    output: function () {
	      var _this = this;

	      _this.preview();

	      if (_this.complete) {
	        dispatchEvent(_this.element, EVENT_CROP, _this.getData());
	      }
	    },

	    initPreview: function () {
	      var _this = this;
	      var preview = _this.options.preview;
	      var image = createElement('img');
	      var crossOrigin = _this.crossOrigin;
	      var url = crossOrigin ? _this.crossOriginUrl : _this.url;
	      var previews;

	      if (crossOrigin) {
	        image.crossOrigin = crossOrigin;
	      }

	      image.src = url;
	      appendChild(_this.viewBox, image);
	      _this.image2 = image;

	      if (!preview) {
	        return;
	      }

	      _this.previews = previews = document.querySelectorAll(preview);

	      each(previews, function (element) {
	        var image = createElement('img');

	        // Save the original size for recover
	        setData(element, DATA_PREVIEW, {
	          width: element.offsetWidth,
	          height: element.offsetHeight,
	          html: element.innerHTML
	        });

	        if (crossOrigin) {
	          image.crossOrigin = crossOrigin;
	        }

	        image.src = url;

	        /**
	         * Override img element styles
	         * Add `display:block` to avoid margin top issue
	         * Add `height:auto` to override `height` attribute on IE8
	         * (Occur only when margin-top <= -height)
	         */

	        image.style.cssText = (
	          'display:block;' +
	          'width:100%;' +
	          'height:auto;' +
	          'min-width:0!important;' +
	          'min-height:0!important;' +
	          'max-width:none!important;' +
	          'max-height:none!important;' +
	          'image-orientation:0deg!important;"'
	        );

	        empty(element);
	        appendChild(element, image);
	      });
	    },

	    resetPreview: function () {
	      each(this.previews, function (element) {
	        var data = getData(element, DATA_PREVIEW);

	        setStyle(element, {
	          width: data.width,
	          height: data.height
	        });

	        element.innerHTML = data.html;
	        removeData(element, DATA_PREVIEW);
	      });
	    },

	    preview: function () {
	      var _this = this;
	      var imageData = _this.imageData;
	      var canvasData = _this.canvasData;
	      var cropBoxData = _this.cropBoxData;
	      var cropBoxWidth = cropBoxData.width;
	      var cropBoxHeight = cropBoxData.height;
	      var width = imageData.width;
	      var height = imageData.height;
	      var left = cropBoxData.left - canvasData.left - imageData.left;
	      var top = cropBoxData.top - canvasData.top - imageData.top;
	      var transform = getTransform(imageData);
	      var transforms = {
	            WebkitTransform: transform,
	            msTransform: transform,
	            transform: transform
	          };

	      if (!_this.cropped || _this.disabled) {
	        return;
	      }

	      setStyle(_this.image2, extend({
	        width: width,
	        height: height,
	        marginLeft: -left,
	        marginTop: -top
	      }, transforms));

	      each(_this.previews, function (element) {
	        var data = getData(element, DATA_PREVIEW);
	        var originalWidth = data.width;
	        var originalHeight = data.height;
	        var newWidth = originalWidth;
	        var newHeight = originalHeight;
	        var ratio = 1;

	        if (cropBoxWidth) {
	          ratio = originalWidth / cropBoxWidth;
	          newHeight = cropBoxHeight * ratio;
	        }

	        if (cropBoxHeight && newHeight > originalHeight) {
	          ratio = originalHeight / cropBoxHeight;
	          newWidth = cropBoxWidth * ratio;
	          newHeight = originalHeight;
	        }

	        setStyle(element, {
	          width: newWidth,
	          height: newHeight
	        });

	        setStyle(getByTag(element, 'img')[0], extend({
	          width: width * ratio,
	          height: height * ratio,
	          marginLeft: -left * ratio,
	          marginTop: -top * ratio
	        }, transforms));
	      });
	    },

	    bind: function () {
	      var _this = this;
	      var options = _this.options;
	      var element = _this.element;
	      var cropper = _this.cropper;

	      if (isFunction(options.cropstart)) {
	        addListener(element, EVENT_CROP_START, options.cropstart);
	      }

	      if (isFunction(options.cropmove)) {
	        addListener(element, EVENT_CROP_MOVE, options.cropmove);
	      }

	      if (isFunction(options.cropend)) {
	        addListener(element, EVENT_CROP_END, options.cropend);
	      }

	      if (isFunction(options.crop)) {
	        addListener(element, EVENT_CROP, options.crop);
	      }

	      if (isFunction(options.zoom)) {
	        addListener(element, EVENT_ZOOM, options.zoom);
	      }

	      addListener(cropper, EVENT_MOUSE_DOWN, (_this._cropStart = proxy(_this.cropStart, _this)));

	      if (options.zoomable && options.zoomOnWheel) {
	        addListener(cropper, EVENT_WHEEL, (_this._wheel = proxy(_this.wheel, _this)));
	      }

	      if (options.toggleDragModeOnDblclick) {
	        addListener(cropper, EVENT_DBLCLICK, (_this._dblclick = proxy(_this.dblclick, _this)));
	      }

	      addListener(document, EVENT_MOUSE_MOVE, (_this._cropMove = proxy(_this.cropMove, _this)));
	      addListener(document, EVENT_MOUSE_UP, (_this._cropEnd = proxy(_this.cropEnd, _this)));

	      if (options.responsive) {
	        addListener(window, EVENT_RESIZE, (_this._resize = proxy(_this.resize, _this)));
	      }
	    },

	    unbind: function () {
	      var _this = this;
	      var options = _this.options;
	      var element = _this.element;
	      var cropper = _this.cropper;

	      if (isFunction(options.cropstart)) {
	        removeListener(element, EVENT_CROP_START, options.cropstart);
	      }

	      if (isFunction(options.cropmove)) {
	        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
	      }

	      if (isFunction(options.cropend)) {
	        removeListener(element, EVENT_CROP_END, options.cropend);
	      }

	      if (isFunction(options.crop)) {
	        removeListener(element, EVENT_CROP, options.crop);
	      }

	      if (isFunction(options.zoom)) {
	        removeListener(element, EVENT_ZOOM, options.zoom);
	      }

	      removeListener(cropper, EVENT_MOUSE_DOWN, _this._cropStart);

	      if (options.zoomable && options.zoomOnWheel) {
	        removeListener(cropper, EVENT_WHEEL, _this._wheel);
	      }

	      if (options.toggleDragModeOnDblclick) {
	        removeListener(cropper, EVENT_DBLCLICK, _this._dblclick);
	      }

	      removeListener(document, EVENT_MOUSE_MOVE, _this._cropMove);
	      removeListener(document, EVENT_MOUSE_UP, _this._cropEnd);

	      if (options.responsive) {
	        removeListener(window, EVENT_RESIZE, _this._resize);
	      }
	    },

	    resize: function () {
	      var _this = this;
	      var restore = _this.options.restore;
	      var container = _this.container;
	      var containerData = _this.containerData;
	      var canvasData;
	      var cropBoxData;
	      var ratio;

	      // Check `container` is necessary for IE8
	      if (_this.disabled || !containerData) {
	        return;
	      }

	      ratio = container.offsetWidth / containerData.width;

	      // Resize when width changed or height changed
	      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
	        if (restore) {
	          canvasData = _this.getCanvasData();
	          cropBoxData = _this.getCropBoxData();
	        }

	        _this.render();

	        if (restore) {
	          _this.setCanvasData(each(canvasData, function (n, i) {
	            canvasData[i] = n * ratio;
	          }));
	          _this.setCropBoxData(each(cropBoxData, function (n, i) {
	            cropBoxData[i] = n * ratio;
	          }));
	        }
	      }
	    },

	    dblclick: function () {
	      var _this = this;

	      if (_this.disabled) {
	        return;
	      }

	      _this.setDragMode(hasClass(_this.dragBox, CLASS_CROP) ? ACTION_MOVE : ACTION_CROP);
	    },

	    wheel: function (event) {
	      var _this = this;
	      var e = getEvent(event);
	      var ratio = Number(_this.options.wheelZoomRatio) || 0.1;
	      var delta = 1;

	      if (_this.disabled) {
	        return;
	      }

	      preventDefault(e);

	      // Limit wheel speed to prevent zoom too fast (#21)
	      if (_this.wheeling) {
	        return;
	      }

	      _this.wheeling = true;

	      setTimeout(function () {
	        _this.wheeling = false;
	      }, 50);

	      if (e.deltaY) {
	        delta = e.deltaY > 0 ? 1 : -1;
	      } else if (e.wheelDelta) {
	        delta = -e.wheelDelta / 120;
	      } else if (e.detail) {
	        delta = e.detail > 0 ? 1 : -1;
	      }

	      _this.zoom(-delta * ratio, e);
	    },

	    cropStart: function (event) {
	      var _this = this;
	      var options = _this.options;
	      var e = getEvent(event);
	      var touches = e.touches;
	      var touchesLength;
	      var touch;
	      var action;

	      if (_this.disabled) {
	        return;
	      }

	      if (touches) {
	        touchesLength = touches.length;

	        if (touchesLength > 1) {
	          if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
	            touch = touches[1];
	            _this.startX2 = touch.pageX;
	            _this.startY2 = touch.pageY;
	            action = ACTION_ZOOM;
	          } else {
	            return;
	          }
	        }

	        touch = touches[0];
	      }

	      action = action || getData(e.target, DATA_ACTION);

	      if (REGEXP_ACTIONS.test(action)) {
	        if (dispatchEvent(_this.element, EVENT_CROP_START, {
	          originalEvent: e,
	          action: action
	        }) === false) {
	          return;
	        }

	        preventDefault(e);

	        _this.action = action;
	        _this.cropping = false;

	        _this.startX = touch ? touch.pageX : e.pageX;
	        _this.startY = touch ? touch.pageY : e.pageY;

	        if (action === ACTION_CROP) {
	          _this.cropping = true;
	          addClass(_this.dragBox, CLASS_MODAL);
	        }
	      }
	    },

	    cropMove: function (event) {
	      var _this = this;
	      var options = _this.options;
	      var e = getEvent(event);
	      var touches = e.touches;
	      var action = _this.action;
	      var touchesLength;
	      var touch;

	      if (_this.disabled) {
	        return;
	      }

	      if (touches) {
	        touchesLength = touches.length;

	        if (touchesLength > 1) {
	          if (options.zoomable && options.zoomOnTouch && touchesLength === 2) {
	            touch = touches[1];
	            _this.endX2 = touch.pageX;
	            _this.endY2 = touch.pageY;
	          } else {
	            return;
	          }
	        }

	        touch = touches[0];
	      }

	      if (action) {
	        if (dispatchEvent(_this.element, EVENT_CROP_MOVE, {
	          originalEvent: e,
	          action: action
	        }) === false) {
	          return;
	        }

	        preventDefault(e);

	        _this.endX = touch ? touch.pageX : e.pageX;
	        _this.endY = touch ? touch.pageY : e.pageY;

	        _this.change(e.shiftKey, action === ACTION_ZOOM ? e : null);
	      }
	    },

	    cropEnd: function (event) {
	      var _this = this;
	      var options = _this.options;
	      var e = getEvent(event);
	      var action = _this.action;

	      if (_this.disabled) {
	        return;
	      }

	      if (action) {
	        preventDefault(e);

	        if (_this.cropping) {
	          _this.cropping = false;
	          toggleClass(_this.dragBox, CLASS_MODAL, _this.cropped && options.modal);
	        }

	        _this.action = '';

	        dispatchEvent(_this.element, EVENT_CROP_END, {
	          originalEvent: e,
	          action: action
	        });
	      }
	    },

	    change: function (shiftKey, originalEvent) {
	      var _this = this;
	      var options = _this.options;
	      var aspectRatio = options.aspectRatio;
	      var action = _this.action;
	      var containerData = _this.containerData;
	      var canvasData = _this.canvasData;
	      var cropBoxData = _this.cropBoxData;
	      var width = cropBoxData.width;
	      var height = cropBoxData.height;
	      var left = cropBoxData.left;
	      var top = cropBoxData.top;
	      var right = left + width;
	      var bottom = top + height;
	      var minLeft = 0;
	      var minTop = 0;
	      var maxWidth = containerData.width;
	      var maxHeight = containerData.height;
	      var renderable = true;
	      var offset;
	      var range;

	      // Locking aspect ratio in "free mode" by holding shift key
	      if (!aspectRatio && shiftKey) {
	        aspectRatio = width && height ? width / height : 1;
	      }

	      if (_this.limited) {
	        minLeft = cropBoxData.minLeft;
	        minTop = cropBoxData.minTop;
	        maxWidth = minLeft + min(containerData.width, canvasData.left + canvasData.width);
	        maxHeight = minTop + min(containerData.height, canvasData.top + canvasData.height);
	      }

	      range = {
	        x: _this.endX - _this.startX,
	        y: _this.endY - _this.startY
	      };

	      if (aspectRatio) {
	        range.X = range.y * aspectRatio;
	        range.Y = range.x / aspectRatio;
	      }

	      switch (action) {
	        // Move crop box
	        case ACTION_ALL:
	          left += range.x;
	          top += range.y;
	          break;

	        // Resize crop box
	        case ACTION_EAST:
	          if (range.x >= 0 && (right >= maxWidth || aspectRatio &&
	            (top <= minTop || bottom >= maxHeight))) {

	            renderable = false;
	            break;
	          }

	          width += range.x;

	          if (aspectRatio) {
	            height = width / aspectRatio;
	            top -= range.Y / 2;
	          }

	          if (width < 0) {
	            action = ACTION_WEST;
	            width = 0;
	          }

	          break;

	        case ACTION_NORTH:
	          if (range.y <= 0 && (top <= minTop || aspectRatio &&
	            (left <= minLeft || right >= maxWidth))) {

	            renderable = false;
	            break;
	          }

	          height -= range.y;
	          top += range.y;

	          if (aspectRatio) {
	            width = height * aspectRatio;
	            left += range.X / 2;
	          }

	          if (height < 0) {
	            action = ACTION_SOUTH;
	            height = 0;
	          }

	          break;

	        case ACTION_WEST:
	          if (range.x <= 0 && (left <= minLeft || aspectRatio &&
	            (top <= minTop || bottom >= maxHeight))) {

	            renderable = false;
	            break;
	          }

	          width -= range.x;
	          left += range.x;

	          if (aspectRatio) {
	            height = width / aspectRatio;
	            top += range.Y / 2;
	          }

	          if (width < 0) {
	            action = ACTION_EAST;
	            width = 0;
	          }

	          break;

	        case ACTION_SOUTH:
	          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio &&
	            (left <= minLeft || right >= maxWidth))) {

	            renderable = false;
	            break;
	          }

	          height += range.y;

	          if (aspectRatio) {
	            width = height * aspectRatio;
	            left -= range.X / 2;
	          }

	          if (height < 0) {
	            action = ACTION_NORTH;
	            height = 0;
	          }

	          break;

	        case ACTION_NORTH_EAST:
	          if (aspectRatio) {
	            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
	              renderable = false;
	              break;
	            }

	            height -= range.y;
	            top += range.y;
	            width = height * aspectRatio;
	          } else {
	            if (range.x >= 0) {
	              if (right < maxWidth) {
	                width += range.x;
	              } else if (range.y <= 0 && top <= minTop) {
	                renderable = false;
	              }
	            } else {
	              width += range.x;
	            }

	            if (range.y <= 0) {
	              if (top > minTop) {
	                height -= range.y;
	                top += range.y;
	              }
	            } else {
	              height -= range.y;
	              top += range.y;
	            }
	          }

	          if (width < 0 && height < 0) {
	            action = ACTION_SOUTH_WEST;
	            height = 0;
	            width = 0;
	          } else if (width < 0) {
	            action = ACTION_NORTH_WEST;
	            width = 0;
	          } else if (height < 0) {
	            action = ACTION_SOUTH_EAST;
	            height = 0;
	          }

	          break;

	        case ACTION_NORTH_WEST:
	          if (aspectRatio) {
	            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
	              renderable = false;
	              break;
	            }

	            height -= range.y;
	            top += range.y;
	            width = height * aspectRatio;
	            left += range.X;
	          } else {
	            if (range.x <= 0) {
	              if (left > minLeft) {
	                width -= range.x;
	                left += range.x;
	              } else if (range.y <= 0 && top <= minTop) {
	                renderable = false;
	              }
	            } else {
	              width -= range.x;
	              left += range.x;
	            }

	            if (range.y <= 0) {
	              if (top > minTop) {
	                height -= range.y;
	                top += range.y;
	              }
	            } else {
	              height -= range.y;
	              top += range.y;
	            }
	          }

	          if (width < 0 && height < 0) {
	            action = ACTION_SOUTH_EAST;
	            height = 0;
	            width = 0;
	          } else if (width < 0) {
	            action = ACTION_NORTH_EAST;
	            width = 0;
	          } else if (height < 0) {
	            action = ACTION_SOUTH_WEST;
	            height = 0;
	          }

	          break;

	        case ACTION_SOUTH_WEST:
	          if (aspectRatio) {
	            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
	              renderable = false;
	              break;
	            }

	            width -= range.x;
	            left += range.x;
	            height = width / aspectRatio;
	          } else {
	            if (range.x <= 0) {
	              if (left > minLeft) {
	                width -= range.x;
	                left += range.x;
	              } else if (range.y >= 0 && bottom >= maxHeight) {
	                renderable = false;
	              }
	            } else {
	              width -= range.x;
	              left += range.x;
	            }

	            if (range.y >= 0) {
	              if (bottom < maxHeight) {
	                height += range.y;
	              }
	            } else {
	              height += range.y;
	            }
	          }

	          if (width < 0 && height < 0) {
	            action = ACTION_NORTH_EAST;
	            height = 0;
	            width = 0;
	          } else if (width < 0) {
	            action = ACTION_SOUTH_EAST;
	            width = 0;
	          } else if (height < 0) {
	            action = ACTION_NORTH_WEST;
	            height = 0;
	          }

	          break;

	        case ACTION_SOUTH_EAST:
	          if (aspectRatio) {
	            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
	              renderable = false;
	              break;
	            }

	            width += range.x;
	            height = width / aspectRatio;
	          } else {
	            if (range.x >= 0) {
	              if (right < maxWidth) {
	                width += range.x;
	              } else if (range.y >= 0 && bottom >= maxHeight) {
	                renderable = false;
	              }
	            } else {
	              width += range.x;
	            }

	            if (range.y >= 0) {
	              if (bottom < maxHeight) {
	                height += range.y;
	              }
	            } else {
	              height += range.y;
	            }
	          }

	          if (width < 0 && height < 0) {
	            action = ACTION_NORTH_WEST;
	            height = 0;
	            width = 0;
	          } else if (width < 0) {
	            action = ACTION_SOUTH_WEST;
	            width = 0;
	          } else if (height < 0) {
	            action = ACTION_NORTH_EAST;
	            height = 0;
	          }

	          break;

	        // Move canvas
	        case ACTION_MOVE:
	          _this.move(range.x, range.y);
	          renderable = false;
	          break;

	        // Zoom canvas
	        case ACTION_ZOOM:
	          _this.zoom((function (x1, y1, x2, y2) {
	            var z1 = sqrt(x1 * x1 + y1 * y1);
	            var z2 = sqrt(x2 * x2 + y2 * y2);

	            return (z2 - z1) / z1;
	          })(
	            abs(_this.startX - _this.startX2),
	            abs(_this.startY - _this.startY2),
	            abs(_this.endX - _this.endX2),
	            abs(_this.endY - _this.endY2)
	          ), originalEvent);
	          _this.startX2 = _this.endX2;
	          _this.startY2 = _this.endY2;
	          renderable = false;
	          break;

	        // Create crop box
	        case ACTION_CROP:
	          if (!range.x || !range.y) {
	            renderable = false;
	            break;
	          }

	          offset = getOffset(_this.cropper);
	          left = _this.startX - offset.left;
	          top = _this.startY - offset.top;
	          width = cropBoxData.minWidth;
	          height = cropBoxData.minHeight;

	          if (range.x > 0) {
	            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
	          } else if (range.x < 0) {
	            left -= width;
	            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
	          }

	          if (range.y < 0) {
	            top -= height;
	          }

	          // Show the crop box if is hidden
	          if (!_this.cropped) {
	            removeClass(_this.cropBox, CLASS_HIDDEN);
	            _this.cropped = true;

	            if (_this.limited) {
	              _this.limitCropBox(true, true);
	            }
	          }

	          break;

	        // No default
	      }

	      if (renderable) {
	        cropBoxData.width = width;
	        cropBoxData.height = height;
	        cropBoxData.left = left;
	        cropBoxData.top = top;
	        _this.action = action;

	        _this.renderCropBox();
	      }

	      // Override
	      _this.startX = _this.endX;
	      _this.startY = _this.endY;
	    },

	    // Show the crop box manually
	    crop: function () {
	      var _this = this;

	      if (_this.built && !_this.disabled) {
	        if (!_this.cropped) {
	          _this.cropped = true;
	          _this.limitCropBox(true, true);

	          if (_this.options.modal) {
	            addClass(_this.dragBox, CLASS_MODAL);
	          }

	          removeClass(_this.cropBox, CLASS_HIDDEN);
	        }

	        _this.setCropBoxData(_this.initialCropBoxData);
	      }

	      return _this;
	    },

	    // Reset the image and crop box to their initial states
	    reset: function () {
	      var _this = this;

	      if (_this.built && !_this.disabled) {
	        _this.imageData = extend({}, _this.initialImageData);
	        _this.canvasData = extend({}, _this.initialCanvasData);
	        _this.cropBoxData = extend({}, _this.initialCropBoxData);

	        _this.renderCanvas();

	        if (_this.cropped) {
	          _this.renderCropBox();
	        }
	      }

	      return _this;
	    },

	    // Clear the crop box
	    clear: function () {
	      var _this = this;

	      if (_this.cropped && !_this.disabled) {
	        extend(_this.cropBoxData, {
	          left: 0,
	          top: 0,
	          width: 0,
	          height: 0
	        });

	        _this.cropped = false;
	        _this.renderCropBox();

	        _this.limitCanvas();

	        // Render canvas after crop box rendered
	        _this.renderCanvas();

	        removeClass(_this.dragBox, CLASS_MODAL);
	        addClass(_this.cropBox, CLASS_HIDDEN);
	      }

	      return _this;
	    },

	    /**
	     * Replace the image's src and rebuild the cropper
	     *
	     * @param {String} url
	     * @param {Boolean} onlyColorChanged (optional)
	     */
	    replace: function (url, onlyColorChanged) {
	      var _this = this;

	      if (!_this.disabled && url) {
	        if (_this.isImg) {
	          _this.element.src = url;
	        }

	        if (onlyColorChanged) {
	          _this.url = url;
	          _this.image.src = url;

	          if (_this.built) {
	            _this.image2.src = url;

	            each(_this.previews, function (element) {
	              getByTag(element, 'img')[0].src = url;
	            });
	          }
	        } else {
	          if (_this.isImg) {
	            _this.replaced = true;
	          }

	          // Clear previous data
	          _this.options.data = null;
	          _this.load(url);
	        }
	      }

	      return _this;
	    },

	    // Enable (unfreeze) the cropper
	    enable: function () {
	      var _this = this;

	      if (_this.built) {
	        _this.disabled = false;
	        removeClass(_this.cropper, CLASS_DISABLED);
	      }

	      return _this;
	    },

	    // Disable (freeze) the cropper
	    disable: function () {
	      var _this = this;

	      if (_this.built) {
	        _this.disabled = true;
	        addClass(_this.cropper, CLASS_DISABLED);
	      }

	      return _this;
	    },

	    // Destroy the cropper and remove the instance from the image
	    destroy: function () {
	      var _this = this;
	      var element = _this.element;
	      var image = _this.image;

	      if (_this.ready) {
	        if (_this.isImg && _this.replaced) {
	          element.src = _this.originalUrl;
	        }

	        _this.unbuild();
	        removeClass(element, CLASS_HIDDEN);
	      } else {
	        if (_this.isImg) {
	          removeListener(element, EVENT_LOAD, _this.start);
	        } else if (image) {
	          removeChild(image);
	        }
	      }

	      removeData(element, NAMESPACE);

	      return _this;
	    },

	    /**
	     * Move the canvas with relative offsets
	     *
	     * @param {Number} offsetX
	     * @param {Number} offsetY (optional)
	     */
	    move: function (offsetX, offsetY) {
	      var _this = this;
	      var canvasData = _this.canvasData;

	      return _this.moveTo(
	        isUndefined(offsetX) ? offsetX : canvasData.left + Number(offsetX),
	        isUndefined(offsetY) ? offsetY : canvasData.top + Number(offsetY)
	      );
	    },

	    /**
	     * Move the canvas to an absolute point
	     *
	     * @param {Number} x
	     * @param {Number} y (optional)
	     */
	    moveTo: function (x, y) {
	      var _this = this;
	      var canvasData = _this.canvasData;
	      var changed = false;

	      // If "y" is not present, its default value is "x"
	      if (isUndefined(y)) {
	        y = x;
	      }

	      x = Number(x);
	      y = Number(y);

	      if (_this.built && !_this.disabled && _this.options.movable) {
	        if (isNumber(x)) {
	          canvasData.left = x;
	          changed = true;
	        }

	        if (isNumber(y)) {
	          canvasData.top = y;
	          changed = true;
	        }

	        if (changed) {
	          _this.renderCanvas(true);
	        }
	      }

	      return _this;
	    },

	    /**
	     * Zoom the canvas with a relative ratio
	     *
	     * @param {Number} ratio
	     * @param {Event} _originalEvent (private)
	     */
	    zoom: function (ratio, _originalEvent) {
	      var _this = this;
	      var canvasData = _this.canvasData;

	      ratio = Number(ratio);

	      if (ratio < 0) {
	        ratio = 1 / (1 - ratio);
	      } else {
	        ratio = 1 + ratio;
	      }

	      return _this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, _originalEvent);
	    },

	    /**
	     * Zoom the canvas to an absolute ratio
	     *
	     * @param {Number} ratio
	     * @param {Event} _originalEvent (private)
	     */
	    zoomTo: function (ratio, _originalEvent) {
	      var _this = this;
	      var options = _this.options;
	      var canvasData = _this.canvasData;
	      var width = canvasData.width;
	      var height = canvasData.height;
	      var naturalWidth = canvasData.naturalWidth;
	      var naturalHeight = canvasData.naturalHeight;
	      var newWidth;
	      var newHeight;
	      var offset;
	      var center;

	      ratio = Number(ratio);

	      if (ratio >= 0 && _this.built && !_this.disabled && options.zoomable) {
	        newWidth = naturalWidth * ratio;
	        newHeight = naturalHeight * ratio;

	        if (dispatchEvent(_this.element, EVENT_ZOOM, {
	          originalEvent: _originalEvent,
	          oldRatio: width / naturalWidth,
	          ratio: newWidth / naturalWidth
	        }) === false) {
	          return _this;
	        }

	        if (_originalEvent) {
	          offset = getOffset(_this.cropper);
	          center = _originalEvent.touches ? getTouchesCenter(_originalEvent.touches) : {
	            pageX: _originalEvent.pageX,
	            pageY: _originalEvent.pageY
	          };

	          // Zoom from the triggering point of the event
	          canvasData.left -= (newWidth - width) * (
	            ((center.pageX - offset.left) - canvasData.left) / width
	          );
	          canvasData.top -= (newHeight - height) * (
	            ((center.pageY - offset.top) - canvasData.top) / height
	          );
	        } else {

	          // Zoom from the center of the canvas
	          canvasData.left -= (newWidth - width) / 2;
	          canvasData.top -= (newHeight - height) / 2;
	        }

	        canvasData.width = newWidth;
	        canvasData.height = newHeight;
	        _this.renderCanvas(true);
	      }

	      return _this;
	    },

	    /**
	     * Rotate the canvas with a relative degree
	     *
	     * @param {Number} degree
	     */
	    rotate: function (degree) {
	      var _this = this;

	      return _this.rotateTo((_this.imageData.rotate || 0) + Number(degree));
	    },

	    /**
	     * Rotate the canvas to an absolute degree
	     * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
	     *
	     * @param {Number} degree
	     */
	    rotateTo: function (degree) {
	      var _this = this;

	      degree = Number(degree);

	      if (isNumber(degree) && _this.built && !_this.disabled && _this.options.rotatable) {
	        _this.imageData.rotate = degree % 360;
	        _this.rotated = true;
	        _this.renderCanvas(true);
	      }

	      return _this;
	    },

	    /**
	     * Scale the image
	     * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
	     *
	     * @param {Number} scaleX
	     * @param {Number} scaleY (optional)
	     */
	    scale: function (scaleX, scaleY) {
	      var _this = this;
	      var imageData = _this.imageData;
	      var changed = false;

	      // If "scaleY" is not present, its default value is "scaleX"
	      if (isUndefined(scaleY)) {
	        scaleY = scaleX;
	      }

	      scaleX = Number(scaleX);
	      scaleY = Number(scaleY);

	      if (_this.built && !_this.disabled && _this.options.scalable) {
	        if (isNumber(scaleX)) {
	          imageData.scaleX = scaleX;
	          changed = true;
	        }

	        if (isNumber(scaleY)) {
	          imageData.scaleY = scaleY;
	          changed = true;
	        }

	        if (changed) {
	          _this.renderImage(true);
	        }
	      }

	      return _this;
	    },

	    /**
	     * Scale the abscissa of the image
	     *
	     * @param {Number} scaleX
	     */
	    scaleX: function (scaleX) {
	      var _this = this;
	      var scaleY = _this.imageData.scaleY;

	      return _this.scale(scaleX, isNumber(scaleY) ? scaleY : 1);
	    },

	    /**
	     * Scale the ordinate of the image
	     *
	     * @param {Number} scaleY
	     */
	    scaleY: function (scaleY) {
	      var _this = this;
	      var scaleX = _this.imageData.scaleX;

	      return _this.scale(isNumber(scaleX) ? scaleX : 1, scaleY);
	    },

	    /**
	     * Get the cropped area position and size data (base on the original image)
	     *
	     * @param {Boolean} rounded (optional)
	     * @return {Object} data
	     */
	    getData: function (rounded) {
	      var _this = this;
	      var options = _this.options;
	      var imageData = _this.imageData;
	      var canvasData = _this.canvasData;
	      var cropBoxData = _this.cropBoxData;
	      var ratio;
	      var data;

	      if (_this.built && _this.cropped) {
	        data = {
	          x: cropBoxData.left - canvasData.left,
	          y: cropBoxData.top - canvasData.top,
	          width: cropBoxData.width,
	          height: cropBoxData.height
	        };

	        ratio = imageData.width / imageData.naturalWidth;

	        each(data, function (n, i) {
	          n = n / ratio;
	          data[i] = rounded ? round(n) : n;
	        });

	      } else {
	        data = {
	          x: 0,
	          y: 0,
	          width: 0,
	          height: 0
	        };
	      }

	      if (options.rotatable) {
	        data.rotate = imageData.rotate || 0;
	      }

	      if (options.scalable) {
	        data.scaleX = imageData.scaleX || 1;
	        data.scaleY = imageData.scaleY || 1;
	      }

	      return data;
	    },

	    /**
	     * Set the cropped area position and size with new data
	     *
	     * @param {Object} data
	     */
	    setData: function (data) {
	      var _this = this;
	      var options = _this.options;
	      var imageData = _this.imageData;
	      var canvasData = _this.canvasData;
	      var cropBoxData = {};
	      var rotated;
	      var scaled;
	      var ratio;

	      if (isFunction(data)) {
	        data = data.call(_this.element);
	      }

	      if (_this.built && !_this.disabled && isPlainObject(data)) {
	        if (options.rotatable) {
	          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
	            imageData.rotate = data.rotate;
	            _this.rotated = rotated = true;
	          }
	        }

	        if (options.scalable) {
	          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
	            imageData.scaleX = data.scaleX;
	            scaled = true;
	          }

	          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
	            imageData.scaleY = data.scaleY;
	            scaled = true;
	          }
	        }

	        if (rotated) {
	          _this.renderCanvas();
	        } else if (scaled) {
	          _this.renderImage();
	        }

	        ratio = imageData.width / imageData.naturalWidth;

	        if (isNumber(data.x)) {
	          cropBoxData.left = data.x * ratio + canvasData.left;
	        }

	        if (isNumber(data.y)) {
	          cropBoxData.top = data.y * ratio + canvasData.top;
	        }

	        if (isNumber(data.width)) {
	          cropBoxData.width = data.width * ratio;
	        }

	        if (isNumber(data.height)) {
	          cropBoxData.height = data.height * ratio;
	        }

	        _this.setCropBoxData(cropBoxData);
	      }

	      return _this;
	    },

	    /**
	     * Get the container size data
	     *
	     * @return {Object} data
	     */
	    getContainerData: function () {
	      var _this = this;

	      return _this.built ? _this.containerData : {};
	    },

	    /**
	     * Get the image position and size data
	     *
	     * @return {Object} data
	     */
	    getImageData: function () {
	      var _this = this;

	      return _this.ready ? _this.imageData : {};
	    },

	    /**
	     * Get the canvas position and size data
	     *
	     * @return {Object} data
	     */
	    getCanvasData: function () {
	      var _this = this;
	      var canvasData = _this.canvasData;
	      var data = {};

	      if (_this.built) {
	        each([
	          'left',
	          'top',
	          'width',
	          'height',
	          'naturalWidth',
	          'naturalHeight'
	        ], function (n) {
	          data[n] = canvasData[n];
	        });
	      }

	      return data;
	    },

	    /**
	     * Set the canvas position and size with new data
	     *
	     * @param {Object} data
	     */
	    setCanvasData: function (data) {
	      var _this = this;
	      var canvasData = _this.canvasData;
	      var aspectRatio = canvasData.aspectRatio;

	      if (isFunction(data)) {
	        data = data.call(_this.element);
	      }

	      if (_this.built && !_this.disabled && isPlainObject(data)) {
	        if (isNumber(data.left)) {
	          canvasData.left = data.left;
	        }

	        if (isNumber(data.top)) {
	          canvasData.top = data.top;
	        }

	        if (isNumber(data.width)) {
	          canvasData.width = data.width;
	          canvasData.height = data.width / aspectRatio;
	        } else if (isNumber(data.height)) {
	          canvasData.height = data.height;
	          canvasData.width = data.height * aspectRatio;
	        }

	        _this.renderCanvas(true);
	      }

	      return _this;
	    },

	    /**
	     * Get the crop box position and size data
	     *
	     * @return {Object} data
	     */
	    getCropBoxData: function () {
	      var _this = this;
	      var cropBoxData = _this.cropBoxData;
	      var data;

	      if (_this.built && _this.cropped) {
	        data = {
	          left: cropBoxData.left,
	          top: cropBoxData.top,
	          width: cropBoxData.width,
	          height: cropBoxData.height
	        };
	      }

	      return data || {};
	    },

	    /**
	     * Set the crop box position and size with new data
	     *
	     * @param {Object} data
	     */
	    setCropBoxData: function (data) {
	      var _this = this;
	      var cropBoxData = _this.cropBoxData;
	      var aspectRatio = _this.options.aspectRatio;
	      var widthChanged;
	      var heightChanged;

	      if (isFunction(data)) {
	        data = data.call(_this.element);
	      }

	      if (_this.built && _this.cropped && !_this.disabled && isPlainObject(data)) {

	        if (isNumber(data.left)) {
	          cropBoxData.left = data.left;
	        }

	        if (isNumber(data.top)) {
	          cropBoxData.top = data.top;
	        }

	        if (isNumber(data.width)) {
	          widthChanged = true;
	          cropBoxData.width = data.width;
	        }

	        if (isNumber(data.height)) {
	          heightChanged = true;
	          cropBoxData.height = data.height;
	        }

	        if (aspectRatio) {
	          if (widthChanged) {
	            cropBoxData.height = cropBoxData.width / aspectRatio;
	          } else if (heightChanged) {
	            cropBoxData.width = cropBoxData.height * aspectRatio;
	          }
	        }

	        _this.renderCropBox();
	      }

	      return _this;
	    },

	    /**
	     * Get a canvas drawn the cropped image
	     *
	     * @param {Object} options (optional)
	     * @return {HTMLCanvasElement} canvas
	     */
	    getCroppedCanvas: function (options) {
	      var _this = this;
	      var originalWidth;
	      var originalHeight;
	      var canvasWidth;
	      var canvasHeight;
	      var scaledWidth;
	      var scaledHeight;
	      var scaledRatio;
	      var aspectRatio;
	      var canvas;
	      var context;
	      var data;

	      if (!_this.built || !SUPPORT_CANVAS) {
	        return;
	      }

	      // Return the whole canvas if not cropped
	      if (!_this.cropped) {
	        return getSourceCanvas(_this.image, _this.imageData);
	      }

	      if (!isPlainObject(options)) {
	        options = {};
	      }

	      data = _this.getData();
	      originalWidth = data.width;
	      originalHeight = data.height;
	      aspectRatio = originalWidth / originalHeight;

	      if (isPlainObject(options)) {
	        scaledWidth = options.width;
	        scaledHeight = options.height;

	        if (scaledWidth) {
	          scaledHeight = scaledWidth / aspectRatio;
	          scaledRatio = scaledWidth / originalWidth;
	        } else if (scaledHeight) {
	          scaledWidth = scaledHeight * aspectRatio;
	          scaledRatio = scaledHeight / originalHeight;
	        }
	      }

	      // The canvas element will use `Math.floor` on a float number, so floor first
	      canvasWidth = floor(scaledWidth || originalWidth);
	      canvasHeight = floor(scaledHeight || originalHeight);

	      canvas = createElement('canvas');
	      canvas.width = canvasWidth;
	      canvas.height = canvasHeight;
	      context = canvas.getContext('2d');

	      if (options.fillColor) {
	        context.fillStyle = options.fillColor;
	        context.fillRect(0, 0, canvasWidth, canvasHeight);
	      }

	      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
	      context.drawImage.apply(context, (function () {
	        var source = getSourceCanvas(_this.image, _this.imageData);
	        var sourceWidth = source.width;
	        var sourceHeight = source.height;
	        var canvasData = _this.canvasData;
	        var params = [source];

	        // Source canvas
	        var srcX = data.x + canvasData.naturalWidth * (abs(data.scaleX || 1) - 1) / 2;
	        var srcY = data.y + canvasData.naturalHeight * (abs(data.scaleY || 1) - 1) / 2;
	        var srcWidth;
	        var srcHeight;

	        // Destination canvas
	        var dstX;
	        var dstY;
	        var dstWidth;
	        var dstHeight;

	        if (srcX <= -originalWidth || srcX > sourceWidth) {
	          srcX = srcWidth = dstX = dstWidth = 0;
	        } else if (srcX <= 0) {
	          dstX = -srcX;
	          srcX = 0;
	          srcWidth = dstWidth = min(sourceWidth, originalWidth + srcX);
	        } else if (srcX <= sourceWidth) {
	          dstX = 0;
	          srcWidth = dstWidth = min(originalWidth, sourceWidth - srcX);
	        }

	        if (srcWidth <= 0 || srcY <= -originalHeight || srcY > sourceHeight) {
	          srcY = srcHeight = dstY = dstHeight = 0;
	        } else if (srcY <= 0) {
	          dstY = -srcY;
	          srcY = 0;
	          srcHeight = dstHeight = min(sourceHeight, originalHeight + srcY);
	        } else if (srcY <= sourceHeight) {
	          dstY = 0;
	          srcHeight = dstHeight = min(originalHeight, sourceHeight - srcY);
	        }

	        params.push(floor(srcX), floor(srcY), floor(srcWidth), floor(srcHeight));

	        // Scale destination sizes
	        if (scaledRatio) {
	          dstX *= scaledRatio;
	          dstY *= scaledRatio;
	          dstWidth *= scaledRatio;
	          dstHeight *= scaledRatio;
	        }

	        // Avoid "IndexSizeError" in IE and Firefox
	        if (dstWidth > 0 && dstHeight > 0) {
	          params.push(floor(dstX), floor(dstY), floor(dstWidth), floor(dstHeight));
	        }

	        return params;
	      }).call(_this));

	      return canvas;
	    },

	    /**
	     * Change the aspect ratio of the crop box
	     *
	     * @param {Number} aspectRatio
	     */
	    setAspectRatio: function (aspectRatio) {
	      var _this = this;
	      var options = _this.options;

	      if (!_this.disabled && !isUndefined(aspectRatio)) {

	        // 0 -> NaN
	        options.aspectRatio = max(0, aspectRatio) || NaN;

	        if (_this.built) {
	          _this.initCropBox();

	          if (_this.cropped) {
	            _this.renderCropBox();
	          }
	        }
	      }

	      return _this;
	    },

	    /**
	     * Change the drag mode
	     *
	     * @param {String} mode (optional)
	     */
	    setDragMode: function (mode) {
	      var _this = this;
	      var options = _this.options;
	      var dragBox = _this.dragBox;
	      var face = _this.face;
	      var croppable;
	      var movable;

	      if (_this.ready && !_this.disabled) {
	        croppable = mode === ACTION_CROP;
	        movable = options.movable && mode === ACTION_MOVE;
	        mode = (croppable || movable) ? mode : ACTION_NONE;

	        setData(dragBox, DATA_ACTION, mode);
	        toggleClass(dragBox, CLASS_CROP, croppable);
	        toggleClass(dragBox, CLASS_MOVE, movable);

	        if (!options.cropBoxMovable) {

	          // Sync drag mode to crop box when it is not movable
	          setData(face, DATA_ACTION, mode);
	          toggleClass(face, CLASS_CROP, croppable);
	          toggleClass(face, CLASS_MOVE, movable);
	        }
	      }

	      return _this;
	    }
	  };

	  Cropper.DEFAULTS = {

	    // Define the view mode of the cropper
	    viewMode: 0, // 0, 1, 2, 3

	    // Define the dragging mode of the cropper
	    dragMode: 'crop', // 'crop', 'move' or 'none'

	    // Define the aspect ratio of the crop box
	    aspectRatio: NaN,

	    // An object with the previous cropping result data
	    data: null,

	    // A selector for adding extra containers to preview
	    preview: '',

	    // Re-render the cropper when resize the window
	    responsive: true,

	    // Restore the cropped area after resize the window
	    restore: true,

	    // Check if the current image is a cross-origin image
	    checkCrossOrigin: true,

	    // Check the current image's Exif Orientation information
	    checkOrientation: true,

	    // Show the black modal
	    modal: true,

	    // Show the dashed lines for guiding
	    guides: true,

	    // Show the center indicator for guiding
	    center: true,

	    // Show the white modal to highlight the crop box
	    highlight: true,

	    // Show the grid background
	    background: true,

	    // Enable to crop the image automatically when initialize
	    autoCrop: true,

	    // Define the percentage of automatic cropping area when initializes
	    autoCropArea: 0.8,

	    // Enable to move the image
	    movable: true,

	    // Enable to rotate the image
	    rotatable: true,

	    // Enable to scale the image
	    scalable: true,

	    // Enable to zoom the image
	    zoomable: true,

	    // Enable to zoom the image by dragging touch
	    zoomOnTouch: true,

	    // Enable to zoom the image by wheeling mouse
	    zoomOnWheel: true,

	    // Define zoom ratio when zoom the image by wheeling mouse
	    wheelZoomRatio: 0.1,

	    // Enable to move the crop box
	    cropBoxMovable: true,

	    // Enable to resize the crop box
	    cropBoxResizable: true,

	    // Toggle drag mode between "crop" and "move" when click twice on the cropper
	    toggleDragModeOnDblclick: true,

	    // Size limitation
	    minCanvasWidth: 0,
	    minCanvasHeight: 0,
	    minCropBoxWidth: 0,
	    minCropBoxHeight: 0,
	    minContainerWidth: 200,
	    minContainerHeight: 100,

	    // Shortcuts of events
	    build: null,
	    built: null,
	    cropstart: null,
	    cropmove: null,
	    cropend: null,
	    crop: null,
	    zoom: null
	  };

	  Cropper.TEMPLATE = (function (source, words) {
	    words = words.split(',');

	    return source.replace(/\d+/g, function (i) {
	      return words[i];
	    });
	  })('<0 6="5-container"><0 6="5-wrap-9"><0 6="5-canvas"></0></0><0 6="5-drag-9"></0><0 6="5-crop-9"><1 6="5-view-9"></1><1 6="5-8 8-h"></1><1 6="5-8 8-v"></1><1 6="5-center"></1><1 6="5-face"></1><1 6="5-7 7-e" 3-2="e"></1><1 6="5-7 7-n" 3-2="n"></1><1 6="5-7 7-w" 3-2="w"></1><1 6="5-7 7-s" 3-2="s"></1><1 6="5-4 4-e" 3-2="e"></1><1 6="5-4 4-n" 3-2="n"></1><1 6="5-4 4-w" 3-2="w"></1><1 6="5-4 4-s" 3-2="s"></1><1 6="5-4 4-ne" 3-2="ne"></1><1 6="5-4 4-nw" 3-2="nw"></1><1 6="5-4 4-sw" 3-2="sw"></1><1 6="5-4 4-se" 3-2="se"></1></0></0>', 'div,span,action,data,point,cropper,class,line,dashed,box');

	  /*Cropper.TEMPLATE = (
	    '<div class="cropper-container">' +
	      '<div class="cropper-wrap-box">' +
	        '<div class="cropper-canvas"></div>' +
	      '</div>' +
	      '<div class="cropper-drag-box"></div>' +
	      '<div class="cropper-crop-box">' +
	        '<span class="cropper-view-box"></span>' +
	        '<span class="cropper-dashed dashed-h"></span>' +
	        '<span class="cropper-dashed dashed-v"></span>' +
	        '<span class="cropper-center"></span>' +
	        '<span class="cropper-face"></span>' +
	        '<span class="cropper-line line-e" data-action="e"></span>' +
	        '<span class="cropper-line line-n" data-action="n"></span>' +
	        '<span class="cropper-line line-w" data-action="w"></span>' +
	        '<span class="cropper-line line-s" data-action="s"></span>' +
	        '<span class="cropper-point point-e" data-action="e"></span>' +
	        '<span class="cropper-point point-n" data-action="n"></span>' +
	        '<span class="cropper-point point-w" data-action="w"></span>' +
	        '<span class="cropper-point point-s" data-action="s"></span>' +
	        '<span class="cropper-point point-ne" data-action="ne"></span>' +
	        '<span class="cropper-point point-nw" data-action="nw"></span>' +
	        '<span class="cropper-point point-sw" data-action="sw"></span>' +
	        '<span class="cropper-point point-se" data-action="se"></span>' +
	      '</div>' +
	    '</div>'
	  );*/

	  var _Cropper = window.Cropper;

	  Cropper.noConflict = function () {
	    window.Cropper = _Cropper;
	    return Cropper;
	  };

	  Cropper.setDefaults = function (options) {
	    extend(Cropper.DEFAULTS, options);
	  };

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return Cropper;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }

	  if (!noGlobal) {
	    window.Cropper = Cropper;
	  }

	  return Cropper;

	});


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _get = function get(object, property, receiver) {
	    if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	        var parent = Object.getPrototypeOf(object);if (parent === null) {
	            return undefined;
	        } else {
	            return get(parent, property, receiver);
	        }
	    } else if ("value" in desc) {
	        return desc.value;
	    } else {
	        var getter = desc.get;if (getter === undefined) {
	            return undefined;
	        }return getter.call(receiver);
	    }
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	var views_1 = __webpack_require__(11);
	var assets_gallery_1 = __webpack_require__(10);
	var TEMPLATE = "\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Vælg Billede</h4>\n        </div>\n        <div class=\"modal-body gallery\">\n        </div>\n        <div class=\"modal-footer\">\n          <input type=\"file\" class=\"btn btn-default pull-left\" />\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Luk</button>\n          <button type=\"button\" class=\"btn btn-primary select-btn\">Vælg</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  ";
	var Modal = function (_views_1$View) {
	    _inherits(Modal, _views_1$View);

	    function Modal(client, options) {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	        _this.client = client;
	        _this._gallery = new assets_gallery_1.GalleryView(client, options);
	        _this.listenTo(_this._gallery, 'dblclick', function () {
	            if (_this._gallery.selected !== null) {
	                _this.trigger('selected');
	            }
	            _this.close();
	        });
	        return _this;
	    }

	    _createClass(Modal, [{
	        key: "onRender",
	        value: function onRender() {
	            var _this2 = this;

	            $(this.el).modal('hide');
	            this.el.querySelector('.modal-body.gallery').appendChild(this._gallery.render().el);
	            $(this.el).on('hidden.bs.modal', function () {
	                return _this2._isOpen = false;
	            });
	        }
	    }, {
	        key: "toggle",
	        value: function toggle() {
	            this._isOpen ? this.close() : this.open();
	        }
	    }, {
	        key: "open",
	        value: function open() {
	            var _this3 = this;

	            if (this._isOpen) return;
	            this.gallery.selected = null;
	            $(this.el).modal('show');
	            $(this.el).one('shown.bs.modal', function () {
	                _this3.gallery.collection.fetch();
	            });
	            this._isOpen = true;
	        }
	    }, {
	        key: "close",
	        value: function close() {
	            if (!this._isOpen) return;
	            $(this.el).modal('hide');
	            this._isOpen = false;
	        }
	    }, {
	        key: "_onSelectBtn",
	        value: function _onSelectBtn(e) {
	            e.preventDefault();
	            if (this._gallery.selected !== null) {
	                this.trigger('selected');
	            }
	            this.close();
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            this.close();
	            this._gallery.destroy();
	            this._gallery = void 0;
	            $(this.el).off();
	            _get(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), "destroy", this).call(this);
	        }
	    }, {
	        key: "gallery",
	        get: function get() {
	            return this._gallery;
	        }
	    }, {
	        key: "value",
	        set: function set(asset) {
	            this._gallery.selected = asset;
	        },
	        get: function get() {
	            return this._gallery.selected;
	        }
	    }]);

	    return Modal;
	}(views_1.View);
	Modal = __decorate([views_1.attributes({
	    className: 'modal fade',
	    template: function template() {
	        return TEMPLATE;
	    },
	    events: {
	        'click .select-btn': '_onSelectBtn'
	    }
	}), __metadata('design:paramtypes', [assets_gallery_1.AssetsClient, Object])], Modal);
	exports.Modal = Modal;

/***/ }
/******/ ])
});
;