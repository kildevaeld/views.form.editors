
import {CropView, AssetsModel, CropViewOptions, CropPreView, 
    ICropping, AssetsClient, FileUploader, createClient} from 'assets.gallery';
import {BaseEditor, Form, validate, editor, IEditorOptions} from 'views.form';
import {attributes} from 'views';
import {Modal} from './modal';
import {addClass, removeClass, Html} from 'orange';

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

export interface CropEditorOptions extends CropViewOptions, IEditorOptions {
    client?: AssetsClient;
    maxSize?: number;
    mimeType?: string | string[];
    cropping?: boolean;
    host?: string;
}



@attributes({
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
})
@editor('assets.crop')
export class CropEditor extends BaseEditor<HTMLDivElement, AssetsModel> {
    model: AssetsModel;
    modal: Modal;
    crop: CropView
    uploader: FileUploader;
    options: CropEditorOptions
    _toggled: boolean;
    getValue(): AssetsModel {
        return this.model;
    }

    setValue(model: AssetsModel) {
        if (this.model === model) return;
        this.model = model;
    }

    constructor(options: CropEditorOptions = {resize: false}) {
        super(options);

        ['host', 'maxSize', 'mimeType', 'ratio', 'cropping']
            .forEach(m => {
                let l = m.toLowerCase();
                let attr = this.el.getAttribute(l) //||this.el.getAttribute('o-' + l);
                if (attr == null) attr = this.el.getAttribute('o-' + l);
                if (attr != null) {
                    if (attr == "") attr = <any>true;
                    options[m] = attr;
                }
            });

        this.options = options || { client: null, resize: false };

        let client = options.client;
        if (client == null) {
            if (options.host == null) throw new Error('client or host expected');
            client = createClient({
                url: options.host,
            });
        }

        this.modal = new Modal(this.options.client, {});

        if (this.options.cropping == true) {
            this.crop = new CropView({
                zoomable: false,
                scalable: false,
                autoCropArea: 0.6,
                resize: true
            });
        }


        this.uploader = new FileUploader({
            url: client.url,
            maxSize: this.options.maxSize,
            mimeType: this.options.mimeType
        });

        this.listenTo(this.modal, 'selected', this.onAssetSelected);


        //this.listenTo('crop', '')

    }

    onModel(model: AssetsModel) {
        if (this.crop) this.crop.model = model;

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
            this.ui['crop'].appendChild(this.crop.render().el)

            addClass(this.crop.el, 'crop-preview cropping-preview')
            addClass(this.crop.ui['image'], 'content');

            if (this.crop.options.previewView) {
                this.crop.options.previewView.destroy();
            }
        }


        let preview = new CropPreView({
            el: this.crop ? this.crop.el : null
        });

        if (!this.crop) {
            preview.el.innerHTML = '<img class="content">';
        } else {
            this.crop.options.previewView = preview;
        }

        preview.render();
        
        

        let el = Html.query(document.createElement('div'))
            .addClass('upload-progress-container')
            .css({ display: 'none' });
        el.html('<div class="upload-progress" style="width:0;"></div>');

        this.crop.el.appendChild(el.get(0));

    }

    clear() {
        this.model = null;
    }

    private _onToggleCropper(e: MouseEvent) {
        e.preventDefault();
        if (this.model == null) return;
        this.crop.toggle();
        this._toggled = !this._toggled
        if (this._toggled) {
            addClass(<any>e.target, 'active');
        } else {
            removeClass(<any>e.target, 'active');
            this.model.set('meta.cropping', this.crop.cropping);
            this.triggerMethod('change');
        }
    }

    private _onDrop(e: DragEvent) {
        e.preventDefault();
        let files = e.dataTransfer.files;

        if (!files.length) {
            return;
        }

        let file = files.item(0);

        try {
            this._validateFile(file);
        } catch (e) {
            console.log('validate error')
            return;
        }

        let div = <HTMLElement>this.crop.el.querySelector('.upload-progress')

        this.uploader.upload(file, (loaded, total) => {
            let progress = (loaded / total * 100 || 0);
            if (div) div.style.width = progress + '%';
        }).then(b => {
            if (div) div.style.width = '0';
            let model = new this.modal.gallery.collection.Model(b as any)
            this.modal.gallery.collection.add(model);
            this.modal.value = model;
            this.onAssetSelected();
        }).catch(e => {
            console.log(e)
            if (div) div.style.width = '0';
        })

    }

    private _cancel(e: DragEvent) {
        if (e.preventDefault) { e.preventDefault(); }

        let el = Html.query(this.crop.el);

        //if (!e.dataTransfer.files.length) return false;

        if (e.type == 'dragenter') {
            el.addClass('dragenter');
        } else if (e.type == 'dragleave') {
            el.removeClass('dragenter');
        }

        return false;
    }

    private _validateFile(file: File) {

        let maxSize = this.options.maxSize * 1000

        if (maxSize !== 0 && file.size > maxSize) {
            throw new Error('file to big');
        }

        var type = file.type;

        var mimeTypes: any

        if (typeof this.options.mimeType === 'string') {
            mimeTypes = [this.options.mimeType];
        } else {
            mimeTypes = this.options.mimeType;
        }

        if (!mimeTypes) return;


        for (var i = 0; i < mimeTypes.length; i++) {
            let mime = new RegExp(mimeTypes[i].replace('*', '.*'));
            if (mime.test(type))
                return
            else
                throw new Error('Wrong mime type');
        }

    }

    private onAssetSelected() {
        let value = this.modal.value;
        this.model = value;
        (<HTMLImageElement>this.crop.ui['image']).src = value.getURL();
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

}
