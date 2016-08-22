"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require('select2');
var $ = require('jquery');
var orange_1 = require('orange');
var collection_1 = require('collection');
function findInData(q, select) {
    return __awaiter(this, void 0, orange_1.IPromise, function* () {
        var reg = new RegExp(".*" + q + ".*", 'ig');
        var out = select.data.filter(function (e) {
            if (e instanceof collection_1.Model) {
                e = e.toJSON();
            }
            if (e[select.textAttribute] && e[select.textAttribute].match(reg)) {
                return true;
            }
            else if (e[select.idAttribute] && String(e[select.idAttribute]).match(reg)) {
                return true;
            }
            return false;
        });
        if (select.data instanceof collection_1.RestCollection) {
            var rest = select.data;
            var found = yield rest.query(q);
            if (found.length)
                out = found;
        }
        return out;
    });
}
function customAdapter(select) {
    var promise = orange_1.deferred();
    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], function (ArrayData) {
        var CustomData = (function (_super) {
            __extends(CustomData, _super);
            function CustomData() {
                _super.apply(this, arguments);
                this.found = [];
            }
            CustomData.prototype.current = function (cb) {
                return __awaiter(this, void 0, void 0, function* () {
                    var val = $(select.el).val();
                    if (val == null || select.data == null)
                        return cb([]);
                    var out = [];
                    if (!select.multiple)
                        val = [val];
                    var _loop_1 = function(i, ii) {
                        var found = orange_1.find(this_1.found, function (item) {
                            return String(item.id) === val[i];
                        });
                        if (!found) {
                            found = select.data.find(val[i]);
                            if (!found) {
                                if (select.data instanceof collection_1.RestCollection) {
                                    yield select.data.fetch();
                                }
                                found = select.data.find(val[i]);
                            }
                        }
                        if (found)
                            out.push(found);
                    };
                    var this_1 = this;
                    for (var i = 0, ii = val.length; i < ii; i++) {
                        _loop_1(i, ii);
                    }
                    this.found = out;
                    cb(out);
                });
            };
            CustomData.prototype.query = function (params, done) {
                var min = select.attributes['min-input'] || 0;
                var results = { results: [] };
                if (params.term == null || (min > 0 && params.term.length < min) || select.data == null) {
                    return done(results);
                }
                findInData(params.term, select).then(function (found) {
                    results.results = found;
                    done(results);
                }).catch(function (e) { throw e; });
            };
            return CustomData;
        }(ArrayData));
        promise.resolve(CustomData);
    });
    return promise.promise;
}
