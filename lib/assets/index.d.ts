import { BaseLayoutEditor } from 'views.form';
import { AssetsModel, AssetsClient, GalleryViewOptions } from 'assets.gallery';
export interface ImagePickerViewOptions extends GalleryViewOptions {
    maxSize?: number;
    client: AssetsClient;
}
export declare class ImagePicker extends BaseLayoutEditor<HTMLDivElement, AssetsModel> {
    private modal;
    private crop;
    prviate: any;
    AssetsClient: any;
    private _options;
    constructor(options?: ImagePickerViewOptions);
    setValue(value: AssetsModel): void;
    getValue(): AssetsModel;
    clear(): void;
}
