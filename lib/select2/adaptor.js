"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
require('select2');
const $ = require('jquery');
const orange_1 = require('orange');
const collection_1 = require('collection');
function findInData(q, select) {
    return __awaiter(this, void 0, orange_1.IPromise, function* () {
        let reg = new RegExp(`.*${q}.*`, 'ig');
        let out = select.data.filter(e => {
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
            let rest = select.data;
            let found = yield rest.query(q);
            if (found.length)
                out = found;
        }
        return out;
    });
}
function customAdapter(select) {
    let promise = orange_1.deferred();
    $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], (ArrayData) => {
        class CustomData extends ArrayData {
            constructor(...args) {
                super(...args);
                this.found = [];
            }
            current(cb) {
                return __awaiter(this, void 0, void 0, function* () {
                    let val = $(select.el).val();
                    if (val == null || select.data == null)
                        return cb([]);
                    let out = [];
                    if (!select.multiple)
                        val = [val];
                    for (let i = 0, ii = val.length; i < ii; i++) {
                        let found = orange_1.find(this.found, (item) => {
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
                    }
                    this.found = out;
                    cb(out);
                });
            }
            query(params, done) {
                let min = select.attributes['min-input'] || 0;
                let results = { results: [] };
                if (params.term == null || (min > 0 && params.term.length < min) || select.data == null) {
                    return done(results);
                }
                findInData(params.term, select).then(found => {
                    results.results = found;
                    done(results);
                }).catch(e => { throw e; });
            }
        }
        promise.resolve(CustomData);
    });
    return promise.promise;
}
