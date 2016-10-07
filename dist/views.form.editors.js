(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("orange"), require("collection"), require("views.form"));
	else if(typeof define === 'function' && define.amd)
		define(["orange", "collection", "views.form"], factory);
	else if(typeof exports === 'object')
		exports["editors"] = factory(require("orange"), require("collection"), require("views.form"));
	else
		root["views"] = root["views"] || {}, root["views"]["form"] = root["views"]["form"] || {}, root["views"]["form"]["editors"] = factory(root["orange"], root["collection"], root["views"]["form"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	        key: "enabled",
	        value: function enabled() {
	            $(this.el).prop('disabled', false);
	        }
	    }, {
	        key: "disabled",
	        value: function disabled() {
	            $(this.el).prop('disabled', true);
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
	        _this._onChange = orange_1.bind(_this._onChange, _this);
	        return _this;
	    }

	    _createClass(DateTimeEditor, [{
	        key: "getValue",
	        value: function getValue() {
	            return this._date;
	        }
	    }, {
	        key: "setValue",
	        value: function setValue(value) {
	            var date;
	            if (orange_1.isDate(value)) {
	                date = value;
	            } else if (orange_1.isString(value)) {
	                date = new Date(value);
	            } else if (value == null) {
	                date = null;
	            } else {
	                throw new Error('Date#setValue: ivalid value');
	            }
	            if (this._date == date) return;
	            this._date = date;
	            if (!this._datePicker) return;
	            if (date == null) {} else {
	                this._datePicker.date(moment(date));
	            }
	        }
	    }, {
	        key: "enabled",
	        value: function enabled() {
	            if (this._datePicker) this._datePicker.enable();
	        }
	    }, {
	        key: "disabled",
	        value: function disabled() {
	            if (this._datePicker) this._datePicker.disable();
	        }
	    }, {
	        key: "onRender",
	        value: function onRender() {
	            if (this._datePicker) this._datePicker.destroy();
	            if (this.el.tagName != 'INPUT') throw new Error('tagname must be input');
	            var options = this._getOptions();
	            // FIX
	            if (options.useCurrent) options.defaultDate = new Date();
	            if (options.defaultDate) {
	                this._date = new Date(options.defaultDate);
	            }
	            $(this.el).datetimepicker(options);
	            this._datePicker = $(this.el).data('DateTimePicker');
	            if (!this._datePicker) throw new Error('Cannot');
	            $(this.el).on('dp.change', this._onChange);
	        }
	    }, {
	        key: "_onChange",
	        value: function _onChange(e) {
	            e.preventDefault();
	            var date = this._datePicker.date().toDate();
	            if (date == this._date) return;
	            this._date = date;
	            console.log(date);
	            this.trigger('change');
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
	            $(this.el).off('dp.change', this._onChange);
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