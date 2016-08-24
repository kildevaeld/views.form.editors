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
const assets_gallery_1 = require('assets.gallery');
const views_form_1 = require('views.form');
const views_1 = require('views');
const modal_1 = require('./modal');
const orange_1 = require('orange');
const template = `
  <div class="modal-container"></div>
  <div class="crop-container">
  </div>
  <!--<label class="btn btn-sm btn-default">
    <span>Upload</span>
    <input style="display:none;" type="file" class="upload-btn" name="upload-button" />
  </label>-->
  <button class="gallery-btn btn btn-sm btn-default" title="Vælg fra galleri">Vælg</button>
  <button class="crop-btn btn btn-sm btn-default pull-right">Beskær</button>
`;
let CropEditor = class CropEditor extends views_form_1.BaseEditor {
    constructor(options) {
        super(options);
        ['host', 'maxSize', 'mimeType', 'ratio', 'cropping']
            .forEach(m => {
            let l = m.toLowerCase();
            let attr = this.el.getAttribute(l); //||this.el.getAttribute('o-' + l);
            if (attr == null)
                attr = this.el.getAttribute('o-' + l);
            if (attr != null) {
                if (attr == "")
                    attr = true;
                options[m] = attr;
            }
        });
        this.options = options || { client: null, resize: false };
        let client = options.client;
        if (client == null)
            throw new Error('client expected');
        this.modal = new modal_1.Modal(this.options.client, {});
        if (this.options.cropping == true) {
            this.crop = new assets_gallery_1.CropView({
                zoomable: false,
                scalable: false,
                autoCropArea: 0.6,
                resize: true
            });
        }
        this.uploader = new assets_gallery_1.FileUploader({
            url: client.url,
            maxSize: this.options.maxSize,
            mimeType: this.options.mimeType
        });
        this.listenTo(this.modal, 'selected', this.onAssetSelected);
        //this.listenTo('crop', '')
    }
    getValue() {
        return this.model;
    }
    setValue(model) {
        if (this.model === model)
            return;
        this.model = model;
    }
    onModel(model) {
        if (this.crop)
            this.crop.model = model;
    }
    onSetElement() {
        ['host', 'maxSize', 'mimeType', 'ratio']
            .forEach(m => {
            let l = m.toLowerCase();
            let attr = this.el.getAttribute(l) || this.el.getAttribute('o-' + l);
            if (attr && attr != "") {
                this.options[m] = attr;
            }
        });
    }
    onRender() {
        this.ui['modal'].appendChild(this.modal.render().el);
        if (this.crop) {
            this.ui['crop'].appendChild(this.crop.render().el);
            orange_1.addClass(this.crop.el, 'crop-preview cropping-preview');
            orange_1.addClass(this.crop.ui['image'], 'content');
            if (this.crop.options.previewView) {
                this.crop.options.previewView.destroy();
            }
        }
        let preview = new assets_gallery_1.CropPreView({
            el: this.crop ? this.crop.el : null
        });
        if (!this.crop) {
            preview.el.innerHTML = '<img class="content">';
        }
        else {
            this.crop.options.previewView = preview;
        }
        preview.render();
        let el = orange_1.Html.query(document.createElement('div'))
            .addClass('upload-progress-container')
            .css({ display: 'none' });
        el.html('<div class="upload-progress" style="width:0;"></div>');
        this.crop.el.appendChild(el.get(0));
    }
    clear() {
        this.model = null;
    }
    _onToggleCropper(e) {
        e.preventDefault();
        if (this.model == null)
            return;
        this.crop.toggle();
        this._toggled = !this._toggled;
        if (this._toggled) {
            orange_1.addClass(e.target, 'active');
        }
        else {
            orange_1.removeClass(e.target, 'active');
            this.model.set('meta.cropping', this.crop.cropping);
            this.triggerMethod('change');
        }
    }
    _onDrop(e) {
        e.preventDefault();
        let files = e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        let file = files.item(0);
        try {
            this._validateFile(file);
        }
        catch (e) {
            console.log('validate error');
            return;
        }
        let div = this.crop.el.querySelector('.upload-progress');
        this.uploader.upload(file, (loaded, total) => {
            let progress = (loaded / total * 100 || 0);
            if (div)
                div.style.width = progress + '%';
        }).then(b => {
            if (div)
                div.style.width = '0';
            let model = new this.modal.gallery.collection.Model(b);
            this.modal.gallery.collection.add(model);
            this.modal.value = model;
            this.onAssetSelected();
        }).catch(e => {
            console.log(e);
            if (div)
                div.style.width = '0';
        });
    }
    _cancel(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        let el = orange_1.Html.query(this.crop.el);
        //if (!e.dataTransfer.files.length) return false;
        if (e.type == 'dragenter') {
            el.addClass('dragenter');
        }
        else if (e.type == 'dragleave') {
            el.removeClass('dragenter');
        }
        return false;
    }
    _validateFile(file) {
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
    onAssetSelected() {
        let value = this.modal.value;
        this.model = value;
        this.crop.ui['image'].src = value.getURL();
        this.trigger('change');
    }
    /*validate(form: Form) {
        return validate(form, this, this.value);
    }*/
    destroy() {
        if (this.crop.options.previewView) {
            this.crop.options.previewView.destroy();
        }
        this.crop.destroy();
        this.modal.destroy();
    }
};
CropEditor = __decorate([
    views_1.attributes({
        template: () => template,
        ui: {
            modal: '.modal-container',
            crop: '.crop-container'
        },
        events: {
            drop: '_onDrop',
            dragenter: '_cancel',
            dragover: '_cancel',
            dragleave: '_cancel',
            'click .gallery-btn': function (e) {
                e.preventDefault();
                this.modal.toggle();
            },
            'click .crop-btn': '_onToggleCropper',
        },
    }),
    views_form_1.editor('assets.crop'), 
    __metadata('design:paramtypes', [Object])
], CropEditor);
exports.CropEditor = CropEditor;
