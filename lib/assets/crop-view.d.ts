import { CropView, AssetsModel, CropViewOptions, AssetsClient, FileUploader } from 'assets.gallery';
import { BaseEditor, IEditorOptions } from 'views.form';
import { Modal } from './modal';
export interface CropEditorOptions extends CropViewOptions, IEditorOptions {
    client: AssetsClient;
    maxSize?: number;
    mimeType?: string | string[];
    cropping?: boolean;
}
export declare class CropEditor extends BaseEditor<HTMLDivElement, AssetsModel> {
    model: AssetsModel;
    modal: Modal;
    crop: CropView;
    uploader: FileUploader;
    options: CropEditorOptions;
    _toggled: boolean;
    getValue(): AssetsModel;
    setValue(model: AssetsModel): void;
    constructor(options?: CropEditorOptions);
    onModel(model: AssetsModel): void;
    onSetElement(): void;
    onRender(): void;
    clear(): void;
    private _onToggleCropper(e);
    private _onDrop(e);
    private _cancel(e);
    private _validateFile(file);
    private onAssetSelected();
    destroy(): void;
}
