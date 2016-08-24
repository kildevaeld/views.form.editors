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
const assets_gallery_1 = require('assets.gallery');
const TEMPLATE = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Vælg Billede</h4>
        </div>
        <div class="modal-body gallery">
        </div>
        <div class="modal-footer">
          <input type="file" class="btn btn-default pull-left" />
          <button type="button" class="btn btn-default" data-dismiss="modal">Luk</button>
          <button type="button" class="btn btn-primary select-btn">Vælg</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  `;
let Modal = class Modal extends views_1.View {
    constructor(client, options) {
        super();
        this.client = client;
        this._gallery = new assets_gallery_1.GalleryView(client, options);
    }
    get gallery() {
        return this._gallery;
    }
    set value(asset) { this._gallery.selected = asset; }
    get value() { return this._gallery.selected; }
    onRender() {
        $(this.el).modal('hide');
        this.el.querySelector('.modal-body.gallery').appendChild(this._gallery.render().el);
        $(this.el).on('hidden.bs.modal', () => this._isOpen = false);
    }
    toggle() {
        this._isOpen ? this.close() : this.open();
    }
    open() {
        if (this._isOpen)
            return;
        this.gallery.selected = null;
        $(this.el).modal('show');
        $(this.el).one('shown.bs.modal', () => {
            this.gallery.collection.fetch();
        });
        this._isOpen = true;
    }
    close() {
        if (!this._isOpen)
            return;
        $(this.el).modal('hide');
        this._isOpen = false;
    }
    _onSelectBtn(e) {
        e.preventDefault();
        if (this._gallery.selected !== null) {
            this.trigger('selected');
        }
        this.close();
    }
    destroy() {
        this.close();
        this._gallery.destroy();
        this._gallery = void 0;
        $(this.el).off();
        super.destroy();
    }
};
Modal = __decorate([
    views_1.attributes({
        className: 'modal fade',
        template: () => TEMPLATE,
        events: {
            'click .select-btn': '_onSelectBtn'
        }
    }), 
    __metadata('design:paramtypes', [assets_gallery_1.AssetsClient, Object])
], Modal);
exports.Modal = Modal;
