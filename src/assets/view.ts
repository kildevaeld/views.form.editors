
declare var require: any;
import {View, attributes, LayoutView} from 'views';
import * as assets from 'assets.gallery';
import * as utils from 'utilities';

import {Modal} from './modal';

const $ = require('jquery');

export interface Cropping {
  width: number;
  height: number;
  x: number;
  y: number;
  naturalWidth: number;
  naturalHeight: number;
}


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


export interface ImagePickerViewOptions extends assets.GalleryViewOptions {
  maxSize?: number;
  client: assets.AssetsClient;
}

@attributes({
  template: function() { return imageTemplate; },
  ui: {
    //modal: 'div.modal',
    button: '.upload-button',
    //preview: '.crop-preview'
  },
  events: {
    'click .gallery-btn': function(e) { e.preventDefault(); this.modal.toggle(); },
    'click .crop-btn': 'onToggleCropper',
  },
  attributes: {
    'form-editor': 'image-crop'
  }
})
export class ImagePickerView extends LayoutView<HTMLDivElement> {
  
  uploadButton: assets.UploadButton;
  modal: Modal;
  crop: assets.CropView;

  private _client: assets.AssetsClient;
  //private _container: Container;
  private _loaded: boolean;
  private _options: ImagePickerViewOptions;
  
  get options(): ImagePickerViewOptions {
    return this._options;
  }
  
  
  set value(value: any) {
    
    if (value == null || value == "") {
      this.modal.value = null;
      this.crop.setModel(null);
      (<any>this.crop.ui['image']).src = ''
      return;
    }
    
    if (!value.meta) {
      throw new Error("no meta");
    }

    let cropping = value.meta.cropping;
    let image_id = value.meta.image;
    
    if (!this._client) throw new Error("no client");
    (<any>this.crop.ui['image']).src = '';
    this._client.getById(image_id).then( image => {
      if (!image) {
        return; 
      }
      
      
      this.crop.model = image;
      setTimeout(() => {
        this.crop.cropping = cropping;
      }, 200)
      
      //this.crop.options.preview.cropping = cropping;
      //this.crop.options.preview.update();
    });

  }

  get value(): any {


    if (!this.crop) return null;
    //return this.crop.model;
    let image = this.crop.model;
    let cropping = this.crop.cropping;
    if (image == null) return null;

    let filename = image.get('filename'),
      path = image.get('path');

    let c: any = {};
    
    for (let k in cropping) {
      if (typeof cropping[k] !== 'string') {
        c[k] = Math.round(cropping[k] * 100) / 100;
      }
      
    }

    let cropStr = `-resized-w${c.width}h${c.height}x${c.x}y${c.y}`;

    let index = filename.lastIndexOf('.')
    if (index > -1) {
      let ext = filename.substr(index);
      filename = filename.replace(ext, '') + cropStr + ext;
    } else {
      filename += cropStr;
    }

    let output: any = {
      filename: filename,
      path: path,
      meta: {
        cropping: utils.extend({}, cropping),
        image: image.id
      }
    }
    
    if (image.get('url')) {
      output.url = image.get('url');
      image.set('url', null);
    }
    
    console.log('output', output)
    
    return output;

  }

  constructor(options?: ImagePickerViewOptions) {

    (<any>options).regions = {
      modal: '.modal-container',
      crop: '.crop-container'
    };

    super(options);
   
    this._options = options;
    //this._container = container;
    this._loaded = false;
    this._client = options.client;

    if (this._client == null) {
      throw new Error('client not defined')
    }
     
  }

  async onRender() {

    if (this.modal === undefined) {

      /*let client = await this._container.get('$assets');
      this._client = client;*/
      
      this.modal = new Modal(this._client, this.options);
      
      this.regions['modal'].show(this.modal);

      this.listenTo(this.modal, 'selected', this.onAssetSelected);
      
    }
    
    
    if (this.crop == undefined) {

      

      this.crop = new assets.CropView({
        zoomable: false,
        scalable: false,
        autoCropArea: 0.6,
        resize: true
      });
      
      this.regions['crop'].show(this.crop);
      
      let preview = new assets.CropPreView({
        el: this.crop.el
      });
      
      
      this.crop.options.previewView = preview;
      
      preview.render();
      console.log(preview);
      
      utils.addClass(this.crop.el, 'crop-preview cropping-preview')

      utils.addClass(this.crop.ui['image'], 'content');
      //this.listenTo(this.crop, 'cropped', this.onAssetCropped);

    }
    
    if (this.crop && this.modal && !this._loaded) {
      this._loaded = true;
      this.trigger('loaded')
    }

  }


  onAssetSelected() {
    let value = this.modal.value;
    
    this.crop.model = value;
    (<HTMLImageElement>this.crop.ui['image']).src = value.getURL();
    
    
    //this.crop.el.style.opacity = '0';
    //this.crop.model = value;
      
    //(<HTMLImageElement>this.crop.ui['image']).src = value.getURL();
    //this.crop.updatePreview();
    
    /*setTimeout(() => {
      this.crop.showCropper();
      setTimeout( () => {this.crop.hideCropper(); this.crop.el.style.opacity = '1'; }, 500);
    })*/
  }


  onAssetCropped() {
    this.trigger('change');
  }

  onToggleCropper(e: MouseEvent) {
      e.preventDefault(); 
      
      this.crop.toggle();
      console.log(this.crop)
  }


  destroy() {
    
    if (this.uploadButton) {
      this.uploadButton.destroy();
    }
    
    if (this.crop) this.crop.destroy();
    if (this.modal) this.modal.destroy();
    
    super.destroy();

  }
}


