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
var views_form_1 = require('views.form');
var orange_1 = require('orange');
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