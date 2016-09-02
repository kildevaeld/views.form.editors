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
var assets_gallery_1 = require('assets.gallery');
var views_form_1 = require('views.form');
var views_1 = require('views');
var modal_1 = require('./modal');
var orange_1 = require('orange');
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
                orange_1.Html.query('.crop-btn').removeClass('active');
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
                preview.el.innerHTML = '<img class="content" />';
                orange_1.addClass(preview.el, 'crop-preview cropping-preview');
                var el = this.el.querySelector('.crop-btn');
                el.parentElement.removeChild(el);
            } else {
                this.crop.options.previewView = preview;
            }
            preview.render();
            if (this.crop) {
                var _el = orange_1.Html.query(document.createElement('div')).addClass('upload-progress-container').css({ display: 'none' });
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
            var $i = orange_1.Html.query(i);
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