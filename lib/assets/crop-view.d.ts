import { IClient } from 'torsten';
import { CropViewOptions, FileInfoModel, CropView } from 'torsten.views';
import { BaseEditor, IEditorOptions } from 'views.form';
import { Modal } from './modal';
export interface CropEditorOptions extends CropViewOptions, IEditorOptions {
    client?: IClient;
    maxSize?: number;
    mimeType?: string | string[];
    cropping?: boolean;
    host?: string;
}
export declare class CropEditor extends BaseEditor<HTMLDivElement, FileInfoModel> {
    model: FileInfoModel;
    modal: Modal;
    crop: CropView;
    options: CropEditorOptions;
    _toggled: boolean;
    getValue(): FileInfoModel;
    setValue(model: FileInfoModel): void;
    constructor(options?: CropEditorOptions);
    onModel(model: FileInfoModel): void;
    onSetElement(): void;
    private _getOptions(options);
    onRender(): void;
    clear(): void;
    private _showDropIndicator();
    private _removeDropIndicator();
    private _onToggleCropper(e);
    private _onDrop(e);
    private _cancel(e);
    private _validateFile(file);
    private onAssetSelected();
    destroy(): void;
}
