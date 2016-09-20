import { View } from 'views';
import { GalleryView, FileInfoModel, GalleryViewOptions } from 'torsten.views';
export interface ModalViewOptions extends GalleryViewOptions {
}
export declare class Modal extends View<HTMLDivElement> {
    private _isOpen;
    private _gallery;
    gallery: GalleryView;
    value: FileInfoModel;
    constructor(options: ModalViewOptions);
    onRender(): void;
    toggle(): void;
    open(): void;
    close(): void;
    private _onSelectBtn(e);
    destroy(): void;
}
