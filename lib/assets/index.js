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
const views_1 = require('views');
const views_form_1 = require('views.form');
const orange_1 = require('orange');
let imageTemplate = `
  <div class="modal-container"></div>
  <div class="crop-container"></div>
  <!--<label class="btn btn-sm btn-default">
    <span>Upload</span>
    <input style="display:none;" type="file" class="upload-btn" name="upload-button" />
  </label>-->
  <button class="gallery-btn btn btn-sm btn-default" title="Vælg fra galleri">Vælg</button>
  <button class="crop-btn btn btn-sm btn-default pull-right">Crop</button>
`;
let ImagePicker = class ImagePicker extends views_form_1.BaseLayoutEditor {
    constructor(options) {
        this.prviate = client;
        let o = orange_1.extend({}, options || {}, {
            regions: {
                modal: '.modal-container',
                crop: '.crop-container'
            }
        });
        super(o);
        this._options = options;
        this._client = options.client;
        if (this._client == null) {
            throw new Error('client not defined');
        }
    }
    setValue(value) {
    }
    getValue() {
        return null;
    }
    clear() {
    }
};
ImagePicker = __decorate([
    views_form_1.editor('image'),
    views_1.attributes({
        template: () => imageTemplate,
        ui: {
            //modal: 'div.modal',
            button: '.upload-button',
        },
        events: {
            'click .gallery-btn': function (e) { e.preventDefault(); this.modal.toggle(); },
            'click .crop-btn': 'onToggleCropper',
        },
        attributes: {
            'form-editor': 'image-crop'
        }
    }), 
    __metadata('design:paramtypes', [Object])
], ImagePicker);
exports.ImagePicker = ImagePicker;
