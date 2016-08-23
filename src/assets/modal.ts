declare var $:any;

import {View, attributes} from 'views';
import {GalleryView, AssetsClient, AssetsModel} from 'assets.gallery';

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
          <button type="button" class="btn btn-default" data-dismiss="modal">Luk</button>
          <button type="button" class="btn btn-primary select-btn">Vælg</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  `

@attributes({
  className: 'modal fade',
  template: () => TEMPLATE,
  events: {
    'click .select-btn': '_onSelectBtn'
  }
})
export class Modal extends View<HTMLDivElement> {
  private _isOpen:boolean;
  private _gallery: GalleryView;
  
  get gallery() {
    return this._gallery;
  }
  
  set value (asset:AssetsModel) { this._gallery.selected = asset; }
  get value (): AssetsModel { return this._gallery.selected; }
  
  constructor(public client:AssetsClient, options:any) {
    super();
    
    this._gallery = new GalleryView(client, options);
   
  }
  
  onRender () {
    
    $(this.el).modal('hide');
    this.el.querySelector('.modal-body.gallery').appendChild(this._gallery.render().el);
    $(this.el).on('hidden.bs.modal', () => this._isOpen = false );
    
  }
  
  toggle () {
    this._isOpen ? this.close() : this.open()
  }
  
  open () {
    if (this._isOpen) return;
    $(this.el).modal('show');
    this._isOpen = true;
  }
  
  close () {
    if (!this._isOpen) return;
    $(this.el).modal('hide');
    this._isOpen = false;
  }
  
  private _onSelectBtn (e) {
    e.preventDefault();
    if (this._gallery.selected !== null) {
      this.trigger('selected');
    }
    
    this.close();
    
  }
  
  destroy () {
    this.close();
    this._gallery.destroy();
    this._gallery = void 0;
    $(this.el).off();
    super.destroy();
    
  }
}