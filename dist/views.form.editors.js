(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("orange"), require("collection"), require("views.form"), require("views"));
	else if(typeof define === 'function' && define.amd)
		define(["orange", "collection", "views.form", "views"], factory);
	else if(typeof exports === 'object')
		exports["editors"] = factory(require("orange"), require("collection"), require("views.form"), require("views"));
	else
		root["views"] = root["views"] || {}, root["views"]["form"] = root["views"]["form"] || {}, root["views"]["form"]["editors"] = factory(root["orange"], root["collection"], root["views"]["form"], root["views"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
	__export(__webpack_require__(54));

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
	var assets_gallery_1 = __webpack_require__(8);
	var views_form_1 = __webpack_require__(5);
	var views_1 = __webpack_require__(9);
	var modal_1 = __webpack_require__(53);
	var orange_dom_1 = __webpack_require__(43);
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
	            if (options.host == null) throw new Error('client or host expected');
	            client = assets_gallery_1.createClient({
	                url: options.host
	            });
	        }
	        _this.modal = new modal_1.Modal(client, {});
	        if (_this.options.cropping != null) {
	            var o = orange_1.extend({
	                zoomable: false,
	                scalable: false,
	                autoCropArea: 0.6,
	                resize: true
	            }, orange_1.omit(_this.options, ['el']));
	            _this.crop = new assets_gallery_1.CropView(o);
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
	            var preview = new assets_gallery_1.CropPreView({
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	const views = __webpack_require__(9);
	__export(__webpack_require__(10));
	__export(__webpack_require__(24));
	__export(__webpack_require__(27));
	__export(__webpack_require__(48));
	class View extends views.View {
	}
	exports.View = View;
	const client_2 = __webpack_require__(48);
	function createClient(options) {
	    return new client_2.AssetsClient(options);
	}
	exports.createClient = createClient;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const eventsjs_1 = __webpack_require__(11);
	const utils = __webpack_require__(12);
	const interface_1 = __webpack_require__(23);
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
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var idCounter = 0;
	function getID() {
	    return "" + (++idCounter);
	}
	var EventEmitterError = (function (_super) {
	    __extends(EventEmitterError, _super);
	    function EventEmitterError(message, method, klass, ctx) {
	        _super.call(this, message);
	        this.message = message;
	        this.method = method;
	        this.klass = klass;
	        this.ctx = ctx;
	    }
	    EventEmitterError.prototype.toString = function () {
	        var prefix = "EventEmitterError";
	        if (this.method && this.method != "") {
	            prefix = "EventEmitter#" + this.method;
	        }
	        return prefix + ": " + this.message;
	    };
	    return EventEmitterError;
	}(Error));
	exports.EventEmitterError = EventEmitterError;
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
	    return a && (a instanceof EventEmitter || (isFunction(a.on) && isFunction(a.once) && isFunction(a.off) && isFunction(a.trigger)));
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
	        return this;
	    };
	    EventEmitter.prototype.trigger = function (eventName) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        this._listeners = this._listeners || {};
	        var events = (this._listeners[eventName] || []).concat(this._listeners['all'] || []).concat(this._listeners["*"] || []);
	        if (EventEmitter.debugCallback)
	            EventEmitter.debugCallback(this.constructor.name, this.name, eventName, args, events);
	        var event, a, len = events.length, index;
	        var calls = [];
	        var alls = [];
	        for (var i = 0, ii = events.length; i < ii; i++) {
	            event = events[i];
	            a = args;
	            if (events[i].name == 'all' || events[i].name == '*') {
	                alls.push(events[i]);
	            }
	            else {
	                calls.push(events[i]);
	            }
	            if (events[i].once === true) {
	                index = this._listeners[events[i].name].indexOf(events[i]);
	                this._listeners[events[i].name].splice(index, 1);
	            }
	        }
	        if (alls.length) {
	            var a_1 = [eventName].concat(args);
	            this._executeListener(alls, a_1);
	        }
	        if (calls.length)
	            this._executeListener(calls, args);
	        return this;
	    };
	    EventEmitter.prototype._executeListener = function (func, args) {
	        EventEmitter.executeListenerFunction(func, args);
	    };
	    EventEmitter.prototype.listenTo = function (obj, event, fn, ctx, once) {
	        if (once === void 0) { once = false; }
	        if (!isEventEmitter(obj)) {
	            if (EventEmitter.throwOnError)
	                throw new EventEmitterError("obj is not an EventEmitter", once ? "listenToOnce" : "listenTo", this, obj);
	            return this;
	        }
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
	        if (obj && !isEventEmitter(obj)) {
	            if (EventEmitter.throwOnError)
	                throw new EventEmitterError("obj is not an EventEmitter", "stopListening", this, obj);
	            return this;
	        }
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
	    EventEmitter.throwOnError = true;
	    EventEmitter.executeListenerFunction = function (func, args) {
	        callFunc(func, args);
	    };
	    return EventEmitter;
	}());
	exports.EventEmitter = EventEmitter;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(13));
	__export(__webpack_require__(15));
	__export(__webpack_require__(17));
	__export(__webpack_require__(14));
	__export(__webpack_require__(16));
	__export(__webpack_require__(18));
	__export(__webpack_require__(22));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(14);
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var objects_1 = __webpack_require__(15);
	var arrays_1 = __webpack_require__(13);
	var strings_1 = __webpack_require__(16);
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var utils_1 = __webpack_require__(14);
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var objects_1 = __webpack_require__(15);
	var arrays_1 = __webpack_require__(13);
	var utils_1 = __webpack_require__(14);
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(19));
	__export(__webpack_require__(21));


/***/ },
/* 19 */
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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var arrays_1 = __webpack_require__(13);
	var objects_1 = __webpack_require__(15);
	var utils_1 = __webpack_require__(19);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var strings_1 = __webpack_require__(16);
	var objects_1 = __webpack_require__(15);
	var promises_1 = __webpack_require__(17);
	var utils_1 = __webpack_require__(14);
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const utilities_1 = __webpack_require__(12);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(25));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const collection_1 = __webpack_require__(4);
	const utilities_1 = __webpack_require__(26);
	const utils = __webpack_require__(12);
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(28);
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(42));
	__export(__webpack_require__(47));
	__export(__webpack_require__(49));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(29));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));


/***/ },
/* 29 */
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
	const views_1 = __webpack_require__(9);
	const interfaces_1 = __webpack_require__(30);
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const views_1 = __webpack_require__(9);
	const interfaces_1 = __webpack_require__(30);
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const views_1 = __webpack_require__(9);
	const interfaces_1 = __webpack_require__(30);
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
/* 33 */
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
	const fileuploader_1 = __webpack_require__(10);
	const views_1 = __webpack_require__(9);
	const utils = __webpack_require__(3);
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(35));
	__export(__webpack_require__(39));


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
	const views_1 = __webpack_require__(9);
	const utils_1 = __webpack_require__(36);
	const utils = __webpack_require__(3);
	const mime_types_1 = __webpack_require__(38);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const templates_1 = __webpack_require__(37);
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
	const views_1 = __webpack_require__(9);
	const html = __webpack_require__(40);
	const utilities_1 = __webpack_require__(12);
	const list_item_1 = __webpack_require__(35);
	const Blazy = __webpack_require__(41);
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var arrays_1 = __webpack_require__(13);
	var objects_1 = __webpack_require__(15);
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
/* 41 */
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
/* 42 */
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
	const views_1 = __webpack_require__(9);
	const utilities_1 = __webpack_require__(26);
	const orange_dom_1 = __webpack_require__(43);
	const thumbnailer_1 = __webpack_require__(46);
	const templates_1 = __webpack_require__(37);
	const interfaces_1 = __webpack_require__(30);
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
	            orange_dom_1.addClass(view.el, 'preview');
	            region.show(view);
	        }
	        else {
	            let image = new Image();
	            let div = document.createElement('div');
	            orange_dom_1.addClass(div, 'preview');
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function __export(m) {
	    for (var p in m) {
	        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	}
	__export(__webpack_require__(44));
	__export(__webpack_require__(45));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// TODO: CreateHTML

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

	var LoadedImage = function () {
	    function LoadedImage(img) {
	        _classCallCheck(this, LoadedImage);

	        this.img = img;
	    }

	    _createClass(LoadedImage, [{
	        key: 'check',
	        value: function check(fn) {
	            this.fn = fn;
	            var isComplete = this.getIsImageComplete();
	            if (isComplete) {
	                // report based on naturalWidth
	                this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
	                return;
	            }
	            this.img.addEventListener('load', this);
	            this.img.addEventListener('error', this);
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(loaded, msg, err) {
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
	            this.img.removeEventListener('load', this);
	            this.img.removeEventListener('error', this);
	            this.fn = void 0;
	        }
	    }]);

	    return LoadedImage;
	}();

	function imageLoaded(img) {
	    return new orange_1.Promise(function (resolve, reject) {
	        var i = new LoadedImage(img);
	        i.check(function (err) {
	            if (err) return reject(err);
	            resolve(i.isLoaded);
	        });
	    });
	}
	exports.imageLoaded = imageLoaded;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var orange_1 = __webpack_require__(3);
	var dom = __webpack_require__(44);
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const utilities_1 = __webpack_require__(12);
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
/* 47 */
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
	const views_1 = __webpack_require__(9);
	const index_1 = __webpack_require__(34);
	const assets_preview_1 = __webpack_require__(42);
	const filebutton_1 = __webpack_require__(33);
	const utils = __webpack_require__(3);
	const client_1 = __webpack_require__(48);
	const utils_1 = __webpack_require__(36);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const eventsjs_1 = __webpack_require__(11);
	const utilities_1 = __webpack_require__(12);
	const index_1 = __webpack_require__(24);
	const utilities_2 = __webpack_require__(26);
	const interface_1 = __webpack_require__(23);
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(50));
	__export(__webpack_require__(51));


/***/ },
/* 50 */
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
	const views_1 = __webpack_require__(9);
	const utils_1 = __webpack_require__(36);
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
/* 51 */
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
	const views_1 = __webpack_require__(9);
	const Cropper = __webpack_require__(52);
	const utils_1 = __webpack_require__(36);
	const orange_dom_1 = __webpack_require__(43);
	const orange_1 = __webpack_require__(3);
	const emptyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
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
	        this.deactivate();
	        let image = this.ui['image'];
	        image.style.display = 'none';
	        if (model == null) {
	            image.src = null;
	            if (this.model)
	                this.stopListening(this.model);
	            this._model = model;
	            return;
	        }
	        super.setModel(model);
	        this._updateImage()
	            .then((loaded) => {
	            if (loaded)
	                image.style.display = 'block';
	            return loaded;
	        }).then((loaded) => {
	            if (!loaded)
	                return;
	            let cropping = model.get('meta.cropping');
	            if (cropping) {
	                this.cropping = cropping;
	            }
	            else if (this.options.aspectRatio != null) {
	                utils_1.getImageSize(image).then(size => {
	                    this.cropping = utils_1.getCropping(size, this.options.aspectRatio);
	                }).catch(e => {
	                    this.trigger('error', e);
	                });
	            }
	        });
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
	        if (this._cropper) {
	            this._cropper.destroy();
	            this._cropper = void 0;
	        }
	        return this;
	    }
	    toggle() {
	        return this._cropper != null ? this.deactivate() : this.activate();
	    }
	    onCrop(cropping) {
	        if (this.options.previewView) {
	            this.options.previewView.cropping = cropping;
	        }
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
	    _updateImage() {
	        let img = this.el.querySelector('img');
	        if (this.model === null) {
	            img.src = emptyImage;
	            return Promise.resolve(false);
	        }
	        this.triggerMethod('before:image');
	        img.src = this.model.getURL();
	        return orange_dom_1.imageLoaded(img).then((loaded) => {
	            this.triggerMethod('image', loaded);
	            return loaded;
	        }).catch(e => {
	            this.triggerMethod('error', new Error('image not loaded'));
	            return Promise.resolve(false);
	        });
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
/* 52 */
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
/* 53 */
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
	var assets_gallery_1 = __webpack_require__(8);
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

/***/ },
/* 54 */
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