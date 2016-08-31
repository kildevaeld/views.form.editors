"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var adaptor_1 = require('./adaptor');
var views_form_1 = require('views.form');
var utils = require('orange');
var collection_1 = require('collection');
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