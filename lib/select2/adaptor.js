"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var orange_1 = require('orange');
var collection_1 = require('collection');
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

                                        console.log('VAL', val);

                                        if (!(val == null || select.data == null)) {
                                            _context3.next = 4;
                                            break;
                                        }

                                        return _context3.abrupt('return', cb([]));

                                    case 4:
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

                                    case 8:
                                        if (!(i < ii)) {
                                            _context3.next = 13;
                                            break;
                                        }

                                        return _context3.delegateYield(_loop(i, ii), 't0', 10);

                                    case 10:
                                        i++;
                                        _context3.next = 8;
                                        break;

                                    case 13:
                                        this.found = out;
                                        cb(out.map(function (m) {
                                            return m.toJSON();
                                        }));

                                    case 15:
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