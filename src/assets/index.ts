
import {attributes} from 'views';
import {BaseLayoutEditor, editor} from 'views.form';
import {AssetsModel, AssetsClient,
    GalleryViewOptions, CropView} from 'assets.gallery';
import {extend} from 'orange';

import {Modal} from './modal';

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


export interface ImagePickerViewOptions extends GalleryViewOptions {
    maxSize?: number;
    client: AssetsClient;
}

@editor('image')
@attributes({
    template: () => imageTemplate,
    ui: {
        //modal: 'div.modal',
        button: '.upload-button',
        //preview: '.crop-preview'
    },
    events: {
        'click .gallery-btn': function (e) { e.preventDefault(); this.modal.toggle(); },
        'click .crop-btn': 'onToggleCropper',
    },
    attributes: {
        'form-editor': 'image-crop'
    }
})
export class ImagePicker extends BaseLayoutEditor<HTMLDivElement, AssetsModel> {

    private modal: Modal;
    private crop: CropView;
    private client: AssetsClient;
    private _options: ImagePickerViewOptions;

    constructor(options?: ImagePickerViewOptions) {
        let o = extend({}, options || {}, {
            regions: {
                modal: '.modal-container',
                crop: '.crop-container'
            }
        })

        super(o);

        this._options = options;
    
        this.client = options.client;

        if (this.client == null) {
            throw new Error('client not defined')
        }
        
    }

    setValue(value: AssetsModel) {

    }

    getValue(): AssetsModel {
        return null;
    }

    clear() {

    }

}