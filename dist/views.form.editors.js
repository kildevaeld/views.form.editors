(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("orange"), require("collection"), require("views.form"), require("torsten.views"), require("views"));
	else if(typeof define === 'function' && define.amd)
		define(["orange", "collection", "views.form", "torsten.views", "views"], factory);
	else if(typeof exports === 'object')
		exports["editors"] = factory(require("orange"), require("collection"), require("views.form"), require("torsten.views"), require("views"));
	else
		root["views"] = root["views"] || {}, root["views"]["form"] = root["views"]["form"] || {}, root["views"]["form"]["editors"] = factory(root["orange"], root["collection"], root["views"]["form"], root["torsten"]["views"], root["views"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
	__export(__webpack_require__(6));
	__export(__webpack_require__(15));

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
	var views_form_1 = __webpack_require__(5);
	var utils = __webpack_require__(3);
	var collection_1 = __webpack_require__(4);
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
	            if (value == null) {
	                $el.val(null);
	                $el.trigger('change.select2');
	                return;
	            }
	            if (!Array.isArray(value)) value = [value];
	            var ids = value.map(function (m) {
	                if (typeof m === 'string') {
	                    if (m === "") return null;
	                    return m;
	                } else if (collection_1.isModel(m)) {
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
	                } else if (collection_1.isModel(e)) {
	                    id = e.get(_this2.options.idAttribute);
	                    text = e.get(_this2.options.textAttribute);
	                } else if (utils.isObject(e)) {
	                    id = String(e[_this2.options.idAttribute]);
	                    text = e[_this2.options.textAttribute];
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
	            } else if (collection_1.isCollection(data)) {
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
	                                    if (s == 'min') {
	                                        s = 'minimumInputLength';
	                                        has = parseInt(has);
	                                    }
	                                    if (s == 'max') {
	                                        s = 'maximumSelectionLength';
	                                        has = parseInt(has);
	                                    }
	                                    if (s == 'text-param') s = 'textAttribute';
	                                    if (s == 'id-param') s = 'idAttribute';
	                                    if (s == 'allow-clear') s = 'allowClear';
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
	var orange_1 = __webpack_require__(3);
	var collection_1 = __webpack_require__(4);
	function findInData(q, select) {
	    return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
	        var reg, out, data, found;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        reg = new RegExp('.*' + q + '.*', 'ig');
	                        out = select.data.filter(function (e) {
	                            if (e instanceof collection_1.Model) {
	                                e = e.toJSON();
	                            }
	                            if (e[select.options.textAttribute] && e[select.options.textAttribute].match(reg)) {
	                                return true;
	                            } else if (e[select.options.idAttribute] && String(e[select.options.idAttribute]).match(reg)) {
	                                return true;
	                            }
	                            return false;
	                        });
	                        data = select.data;

	                        if (!collection_1.isRestCollection(data)) {
	                            _context.next = 8;
	                            break;
	                        }

	                        _context.next = 6;
	                        return data.query(q);

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

	                                        if (!select.options.multiple) val = [val];
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

	                                                            if (!collection_1.isRestCollection(data)) {
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

	                                    case 7:
	                                        if (!(i < ii)) {
	                                            _context3.next = 12;
	                                            break;
	                                        }

	                                        return _context3.delegateYield(_loop(i, ii), 't0', 9);

	                                    case 9:
	                                        i++;
	                                        _context3.next = 7;
	                                        break;

	                                    case 12:
	                                        this.found = out;
	                                        cb(out.map(function (m) {
	                                            return m.toJSON();
	                                        }));

	                                    case 14:
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
	                        results.results = found.map(function (m) {
	                            return m.toJSON();
	                        });
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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(7));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*import {CropView, AssetsModel, CropViewOptions, CropPreView,
	    ICropping, AssetsClient, FileUploader, createClient} from 'assets.gallery';*/
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
	var torsten_views_1 = __webpack_require__(8);
	var views_form_1 = __webpack_require__(5);
	var views_1 = __webpack_require__(9);
	var modal_1 = __webpack_require__(10);
	var orange_dom_1 = __webpack_require__(11);
	var orange_1 = __webpack_require__(3);
	var _template = "\n  <div class=\"modal-container\"></div>\n  <div class=\"crop-container\">\n  </div>\n  <!--<label class=\"btn btn-sm btn-default\">\n    <span>Upload</span>\n    <input style=\"display:none;\" type=\"file\" class=\"upload-btn\" name=\"upload-button\" />\n  </label>-->\n  <button class=\"gallery-btn btn btn-sm btn-default\" title=\"Vælg fra galleri\">Vælg</button>\n  <button class=\"crop-btn btn btn-sm btn-default pull-right\">Beskær</button>\n";
	var CropEditor = function (_views_form_1$BaseEdi) {
	    _inherits(CropEditor, _views_form_1$BaseEdi);

	    function CropEditor() {
	        var options = arguments.length <= 0 || arguments[0] === undefined ? { resize: false } : arguments[0];

	        _classCallCheck(this, CropEditor);

	        var _this = _possibleConstructorReturn(this, (CropEditor.__proto__ || Object.getPrototypeOf(CropEditor)).call(this, options));

	        _this.options = options = _this._getOptions(orange_1.extend({}, options));
	        var client = options.client;
	        if (client == null) {
	            /*if (options.host == null) throw new Error('client or host expected');
	            client = createClient({
	                endpoint: options.host,
	            });*/
	            throw new Error("no client");
	        }
	        console.log(client);
	        _this.modal = new modal_1.Modal({
	            client: client,
	            showDirectories: false
	        });
	        if (_this.options.cropping != null) {
	            var o = orange_1.extend({
	                zoomable: false,
	                scalable: false,
	                autoCropArea: 0.6,
	                resize: true
	            }, orange_1.omit(_this.options, ['el']));
	            _this.crop = new torsten_views_1.CropView(o);
	        }
	        /*this.uploader = new FileUploader({
	            url: client.url,
	            maxSize: this.options.maxSize,
	            mimeType: this.options.mimeType
	        });*/
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
	            if (model) this._removeDropIndicator();
	            if (this.crop) {
	                this._toggled = false;
	                orange_dom_1.Html.query('.crop-btn').removeClass('active');
	                this.crop.model = model;
	            }
	        }
	    }, {
	        key: "onSetElement",
	        value: function onSetElement() {
	            this.options = this._getOptions(this.options);
	        }
	    }, {
	        key: "_getOptions",
	        value: function _getOptions(options) {
	            var _this2 = this;

	            ['host', 'maxSize', 'mimeType', 'ratio', 'cropping'].forEach(function (m) {
	                var l = m.toLowerCase();
	                var attr = _this2.el.getAttribute(l); // || this.el.getAttribute('o-' + l);
	                if (attr == null) {
	                    return;
	                } else if (attr == "") attr = true;
	                if (m == 'ratio') {
	                    m = 'aspectRatio';
	                    attr = parseFloat(attr);
	                } else if (m == 'maxSize') {
	                    attr = parseInt(attr);
	                }
	                options[m] = attr;
	            });
	            return options;
	        }
	    }, {
	        key: "onRender",
	        value: function onRender() {
	            this.ui['modal'].appendChild(this.modal.render().el);
	            if (this.crop) {
	                this.ui['crop'].appendChild(this.crop.render().el);
	                orange_dom_1.addClass(this.crop.el, 'crop-preview cropping-preview');
	                orange_dom_1.addClass(this.crop.ui['image'], 'content');
	                if (this.crop.options.previewView) {
	                    this.crop.options.previewView.destroy();
	                }
	            }
	            var preview = new torsten_views_1.CropPreView({
	                el: this.crop ? this.crop.el : null
	            });
	            if (!this.crop) {
	                preview.el.innerHTML = '<img class="content" />';
	                orange_dom_1.addClass(preview.el, 'crop-preview cropping-preview');
	                var el = this.el.querySelector('.crop-btn');
	                el.parentElement.removeChild(el);
	            } else {
	                this.crop.options.previewView = preview;
	            }
	            preview.render();
	            if (this.crop) {
	                var _el = orange_dom_1.Html.query(document.createElement('div')).addClass('upload-progress-container').css({ display: 'none' });
	                _el.html('<div class="upload-progress" style="width:0;"></div>');
	                this.crop.el.appendChild(_el.get(0));
	            } else {
	                this.ui['crop'].appendChild(preview.el);
	            }
	            this._showDropIndicator();
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.model = null;
	            this._showDropIndicator();
	        }
	    }, {
	        key: "_showDropIndicator",
	        value: function _showDropIndicator() {
	            var preview = this.el.querySelector('.crop-preview');
	            if (!preview) return;
	            var i = preview.querySelector('.drop-indicator');
	            if (i) return;
	            i = document.createElement('div');
	            var $i = orange_dom_1.Html.query(i);
	            $i.addClass('drop-indicator').css({
	                position: 'absolute',
	                top: '50%',
	                transform: 'translate(-50%, -50%)',
	                left: '50%'
	            });
	            $i.text('Drop Here');
	            preview.appendChild(i);
	        }
	    }, {
	        key: "_removeDropIndicator",
	        value: function _removeDropIndicator() {
	            var i = this.el.querySelector('.drop-indicator');
	            if (i && i.parentElement) i.parentElement.removeChild(i);
	        }
	    }, {
	        key: "_onToggleCropper",
	        value: function _onToggleCropper(e) {
	            e.preventDefault();
	            if (this.model == null) return;
	            this.crop.toggle();
	            this._toggled = !this._toggled;
	            if (this._toggled) {
	                orange_dom_1.addClass(e.target, 'active');
	            } else {
	                orange_dom_1.removeClass(e.target, 'active');
	                this.model.set('meta.cropping', this.crop.cropping);
	                this.triggerMethod('change');
	            }
	        }
	    }, {
	        key: "_onDrop",
	        value: function _onDrop(e) {
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
	            console.log('upload file', file);
	            /*this.uploader.upload(file, (loaded, total) => {
	                let progress = (loaded / total * 100 || 0);
	                if (div) div.style.width = progress + '%';
	            }).then(b => {
	                if (div) div.style.width = '0';
	                let model = new this.modal.gallery.collection.Model(b as any)
	                this.modal.gallery.collection.add(model);
	                this.modal.value = model;
	                this.onAssetSelected();
	            }).catch(e => {
	                console.log(e)
	                if (div) div.style.width = '0';
	            })*/
	        }
	    }, {
	        key: "_cancel",
	        value: function _cancel(e) {
	            if (e.preventDefault) {
	                e.preventDefault();
	            }
	            var el = orange_dom_1.Html.query(this.crop.el);
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
	            //(<HTMLImageElement>this.crop.ui['image']).src = value.getURL();
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
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
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
	var views_1 = __webpack_require__(9);
	var torsten_views_1 = __webpack_require__(8);
	var TEMPLATE = "\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">Vælg Billede</h4>\n        </div>\n        <div class=\"modal-body gallery\">\n        </div>\n        <div class=\"modal-footer\">\n          <input type=\"file\" class=\"btn btn-default pull-left\" />\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Luk</button>\n          <button type=\"button\" class=\"btn btn-primary select-btn\">Vælg</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  ";
	var Modal = function (_views_1$View) {
	    _inherits(Modal, _views_1$View);

	    function Modal(options) {
	        _classCallCheck(this, Modal);

	        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

	        _this._gallery = new torsten_views_1.GalleryView(options);
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
	                //this.gallery.collection.fetch();
	                _this3.gallery.root = "/";
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
	}), __metadata('design:paramtypes', [Object])], Modal);
	exports.Modal = Modal;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// TODO: CreateHTML

	var orange_1 = __webpack_require__(3);
	var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
	var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
	    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
	    return !!~orange_1.indexOf(nodeList, this);
	};
	var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
	    return this.attachEvent('on' + eventName, listener);
	};
	var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
	    return this.detachEvent('on' + eventName, listener);
	};
	var transitionEndEvent = function transitionEnd() {
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
	};
	var animationEndEvent = function animationEnd() {
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
	};
	function matches(elm, selector) {
	    return matchesSelector.call(elm, selector);
	}
	exports.matches = matches;
	function addEventListener(elm, eventName, listener) {
	    var useCap = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	    elementAddEventListener.call(elm, eventName, listener, useCap);
	}
	exports.addEventListener = addEventListener;
	function removeEventListener(elm, eventName, listener) {
	    elementRemoveEventListener.call(elm, eventName, listener);
	}
	exports.removeEventListener = removeEventListener;
	var unbubblebles = 'focus blur change load error'.split(' ');
	var domEvents = [];
	function delegate(elm, selector, eventName, callback, ctx) {
	    var root = elm;
	    var handler = function handler(e) {
	        var node = e.target || e.srcElement;
	        // Already handled
	        if (e.delegateTarget) return;
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
	        var match = item.eventName === eventName && (callback ? item.listener === callback : true) && (selector ? item.selector === selector : true);
	        if (!match) continue;
	        removeEventListener(elm, item.eventName, item.handler);
	        domEvents.splice(orange_1.indexOf(handlers, item), 1);
	    }
	}
	exports.undelegate = undelegate;
	function addClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            if (elm.classList.contains(split[i].trim())) continue;
	            elm.classList.add(split[i].trim());
	        }
	    } else {
	        elm.className = orange_1.unique(elm.className.split(' ').concat(className.split(' '))).join(' ');
	    }
	}
	exports.addClass = addClass;
	function removeClass(elm, className) {
	    if (elm.classList) {
	        var split = className.split(' ');
	        for (var i = 0, ii = split.length; i < ii; i++) {
	            elm.classList.remove(split[i].trim());
	        }
	    } else {
	        var _split = elm.className.split(' '),
	            classNames = className.split(' '),
	            tmp = _split,
	            index = void 0;
	        for (var _i = 0, _ii = classNames.length; _i < _ii; _i++) {
	            index = _split.indexOf(classNames[_i]);
	            if (!!~index) _split = _split.splice(index, 1);
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
	    } else if (document.selection) {
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
	    var callback = function callback(e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.transitionEnd = transitionEnd;
	function animationEnd(elm, fn, ctx, duration) {
	    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
	    var callback = function callback(e) {
	        removeEventListener(elm, event, callback);
	        fn.call(ctx, e);
	    };
	    addEventListener(elm, event, callback);
	}
	exports.animationEnd = animationEnd;
	exports.domReady = function () {
	    var fns = [],
	        _listener,
	        doc = document,
	        hack = doc.documentElement.doScroll,
	        domContentLoaded = 'DOMContentLoaded',
	        loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
	    if (!loaded) {
	        doc.addEventListener(domContentLoaded, _listener = function listener() {
	            doc.removeEventListener(domContentLoaded, _listener);
	            loaded = true;
	            while (_listener = fns.shift()) {
	                _listener();
	            }
	        });
	    }
	    return function (fn) {
	        loaded ? setTimeout(fn, 0) : fns.push(fn);
	    };
	}();
	function createElement(tag, attr) {
	    var elm = document.createElement(tag);
	    if (attr) {
	        for (var key in attr) {
	            elm.setAttribute(key, attr[key]);
	        }
	    }
	    return elm;
	}
	exports.createElement = createElement;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var orange_1 = __webpack_require__(3);
	var dom = __webpack_require__(12);
	var domEvents;
	var singleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function parseHTML(html) {
	    var parsed = singleTag.exec(html);
	    if (parsed) {
	        return document.createElement(parsed[0]);
	    }
	    var div = document.createElement('div');
	    div.innerHTML = html;
	    var element = div.firstChild;
	    return element;
	}

	var Html = function () {
	    function Html(el) {
	        _classCallCheck(this, Html);

	        if (!Array.isArray(el)) el = [el];
	        this._elements = el || [];
	    }

	    _createClass(Html, [{
	        key: 'get',
	        value: function get(n) {
	            n = n === undefined ? 0 : n;
	            return n >= this.length ? undefined : this._elements[n];
	        }
	    }, {
	        key: 'addClass',
	        value: function addClass(str) {
	            return this.forEach(function (e) {
	                dom.addClass(e, str);
	            });
	        }
	    }, {
	        key: 'removeClass',
	        value: function removeClass(str) {
	            return this.forEach(function (e) {
	                dom.removeClass(e, str);
	            });
	        }
	    }, {
	        key: 'hasClass',
	        value: function hasClass(str) {
	            return this._elements.reduce(function (p, c) {
	                return dom.hasClass(c, str);
	            }, false);
	        }
	    }, {
	        key: 'attr',
	        value: function attr(key, value) {
	            var attr = void 0;
	            if (typeof key === 'string' && value) {
	                attr = _defineProperty({}, key, value);
	            } else if (typeof key == 'string') {
	                if (this.length) return this.get(0).getAttribute(key);
	            } else if (orange_1.isObject(key)) {
	                attr = key;
	            }
	            return this.forEach(function (e) {
	                for (var k in attr) {
	                    e.setAttribute(k, attr[k]);
	                }
	            });
	        }
	    }, {
	        key: 'text',
	        value: function text(str) {
	            if (arguments.length === 0) {
	                return this.length > 0 ? this.get(0).textContent : null;
	            }
	            return this.forEach(function (e) {
	                return e.textContent = str;
	            });
	        }
	    }, {
	        key: 'html',
	        value: function html(_html) {
	            if (arguments.length === 0) {
	                return this.length > 0 ? this.get(0).innerHTML : null;
	            }
	            return this.forEach(function (e) {
	                return e.innerHTML = _html;
	            });
	        }
	    }, {
	        key: 'css',
	        value: function css(attr, value) {
	            if (arguments.length === 2) {
	                return this.forEach(function (e) {
	                    if (attr in e.style) e.style[attr] = String(value);
	                });
	            } else {
	                return this.forEach(function (e) {
	                    for (var k in attr) {
	                        if (k in e.style) e.style[k] = String(attr[k]);
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'parent',
	        value: function parent() {
	            var out = [];
	            this.forEach(function (e) {
	                if (e.parentElement) {
	                    out.push(e.parentElement);
	                }
	            });
	            return new Html(out);
	        }
	    }, {
	        key: 'remove',
	        value: function remove() {
	            return this.forEach(function (e) {
	                if (e.parentElement) e.parentElement.removeChild(e);
	            });
	        }
	    }, {
	        key: 'clone',
	        value: function clone() {
	            return new Html(this.map(function (m) {
	                return m.cloneNode();
	            }));
	        }
	    }, {
	        key: 'find',
	        value: function find(str) {
	            var out = [];
	            this.forEach(function (e) {
	                out = out.concat(orange_1.slice(e.querySelectorAll(str)));
	            });
	            return new Html(out);
	        }
	    }, {
	        key: 'map',
	        value: function map(fn) {
	            var out = new Array(this.length);
	            this.forEach(function (e, i) {
	                out[i] = fn(e, i);
	            });
	            return out;
	        }
	    }, {
	        key: 'forEach',
	        value: function forEach(fn) {
	            this._elements.forEach(fn);
	            return this;
	        }
	    }, {
	        key: 'length',
	        get: function get() {
	            return this._elements.length;
	        }
	    }], [{
	        key: 'query',
	        value: function query(_query, context) {
	            if (typeof context === 'string') {
	                context = document.querySelectorAll(context);
	            }
	            var html = void 0;
	            var els = void 0;
	            if (typeof _query === 'string') {
	                if (_query.length > 0 && _query[0] === '<' && _query[_query.length - 1] === ">" && _query.length >= 3) {
	                    return new Html([parseHTML(_query)]);
	                }
	                if (context) {
	                    if (context instanceof HTMLElement) {
	                        els = orange_1.slice(context.querySelectorAll(_query));
	                    } else {
	                        html = new Html(orange_1.slice(context));
	                        return html.find(_query);
	                    }
	                } else {
	                    els = orange_1.slice(document.querySelectorAll(_query));
	                }
	            } else if (_query && _query instanceof Element) {
	                els = [_query];
	            } else if (_query && _query instanceof NodeList) {
	                els = orange_1.slice(_query);
	            }
	            return new Html(els);
	        }
	    }]);

	    return Html;
	}();

	exports.Html = Html;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var orange_1 = __webpack_require__(3);
	var dom_1 = __webpack_require__(12);

	var LoadedImage = function () {
	    function LoadedImage(img) {
	        var timeout = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
	        var retries = arguments.length <= 2 || arguments[2] === undefined ? 10 : arguments[2];

	        _classCallCheck(this, LoadedImage);

	        this.img = img;
	        this.timeout = timeout;
	        this.retries = retries;
	        this.__resolved = false;
	    }

	    _createClass(LoadedImage, [{
	        key: 'check',
	        value: function check(fn) {
	            var _this = this;

	            this.fn = fn;
	            var isComplete = this.getIsImageComplete();
	            if (isComplete) {
	                // report based on naturalWidth
	                this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	                return;
	            }
	            var retries = this.retries;
	            var retry = function retry() {
	                setTimeout(function () {
	                    if (_this.__resolved) return;
	                    if (_this.img.naturalWidth > 0) {
	                        _this.__resolved = true;
	                        return _this.onload(null);
	                    } else if (retries > 0) {
	                        retries--;
	                        retry();
	                    }
	                }, _this.timeout);
	            };
	            retry();
	            dom_1.addEventListener(this.img, 'load', this);
	            dom_1.addEventListener(this.img, 'error', this);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(loaded, msg, err) {
	            this.__resolved = true;
	            this.isLoaded = loaded;
	            if (this.fn) this.fn(err);
	        }
	    }, {
	        key: 'getIsImageComplete',
	        value: function getIsImageComplete() {
	            return this.img.complete && this.img.naturalWidth !== undefined && this.img.naturalWidth !== 0;
	        }
	    }, {
	        key: 'handleEvent',
	        value: function handleEvent(e) {
	            var method = 'on' + event.type;
	            if (this[method]) {
	                this[method](event);
	            }
	        }
	    }, {
	        key: 'onload',
	        value: function onload(e) {
	            this.confirm(true, 'onload');
	            this.unbindEvents();
	        }
	    }, {
	        key: 'onerror',
	        value: function onerror(e) {
	            this.confirm(false, 'onerror', new Error(e.error));
	            this.unbindEvents();
	        }
	    }, {
	        key: 'unbindEvents',
	        value: function unbindEvents() {
	            dom_1.removeEventListener(this.img, 'load', this);
	            dom_1.removeEventListener(this.img, 'error', this);
	            this.fn = void 0;
	        }
	    }]);

	    return LoadedImage;
	}();

	function imageLoaded(img, timeout, retries) {
	    return new orange_1.Promise(function (resolve, reject) {
	        var i = new LoadedImage(img, timeout, retries);
	        i.check(function (err) {
	            if (err) return reject(err);
	            resolve(i.isLoaded);
	        });
	    });
	}
	exports.imageLoaded = imageLoaded;

/***/ },
/* 15 */
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
	var views_form_1 = __webpack_require__(5);
	var orange_1 = __webpack_require__(3);
	var DateTimeEditor = function (_views_form_1$BaseEdi) {
	    _inherits(DateTimeEditor, _views_form_1$BaseEdi);

	    function DateTimeEditor(options) {
	        _classCallCheck(this, DateTimeEditor);

	        var _this = _possibleConstructorReturn(this, (DateTimeEditor.__proto__ || Object.getPrototypeOf(DateTimeEditor)).call(this, options));

	        if (!$.fn.datetimepicker) throw new Error('eonasdan-bootstrap-datetimepicker is not loaded!!');
	        _this.options = options || {};
	        return _this;
	    }

	    _createClass(DateTimeEditor, [{
	        key: "getValue",
	        value: function getValue() {
	            if (!this._datePicker) return null;
	            var date = this._datePicker.date();
	            return date ? date.toDate() : null;
	        }
	    }, {
	        key: "setValue",
	        value: function setValue(value) {
	            if (!this._datePicker) return;
	            if (value === null) {
	                this._datePicker.clear();
	            } else {
	                this._datePicker.date(value);
	            }
	        }
	    }, {
	        key: "onRender",
	        value: function onRender() {
	            if (this._datePicker) this._datePicker.destroy();
	            if (this.el.tagName != 'INPUT') throw new Error('tagname must be input');
	            var options = this._getOptions();
	            // FIX
	            if (options.useCurrent) options.defaultDate = new Date();
	            $(this.el).datetimepicker(options);
	            this._datePicker = $(this.el).data('DateTimePicker');
	            if (!this._datePicker) throw new Error('Cannot');
	        }
	    }, {
	        key: "_getOptions",
	        value: function _getOptions() {
	            var _this2 = this;

	            var options = orange_1.extend({}, orange_1.pick(this.options, ['locale', 'minDate', 'maxDate', 'defaultDate', 'useCurrent']));
	            ['locale', 'min-date', 'max-date', 'default-date', 'use-current'].forEach(function (m) {
	                var has = _this2.el.getAttribute(m);
	                if (has == null) return;
	                if (has == "") has = true;
	                options[orange_1.camelcase(m)] = has;
	            });
	            return options;
	        }
	    }, {
	        key: "onDestroy",
	        value: function onDestroy() {
	            if (this._datePicker) this._datePicker.destroy();
	        }
	    }]);

	    return DateTimeEditor;
	}(views_form_1.BaseEditor);
	DateTimeEditor = __decorate([views_form_1.editor('datetime'), __metadata('design:paramtypes', [Object])], DateTimeEditor);
	exports.DateTimeEditor = DateTimeEditor;

/***/ }
/******/ ])
});
;