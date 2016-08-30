"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
var views_1 = require('views');
var assets_gallery_1 = require('assets.gallery');
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