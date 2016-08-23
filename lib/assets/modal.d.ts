import { View } from 'views';
import { GalleryView, AssetsClient, AssetsModel } from 'assets.gallery';
export declare class Modal extends View<HTMLDivElement> {
    client: AssetsClient;
    private _isOpen;
    private _gallery;
    gallery: GalleryView;
    value: AssetsModel;
    constructor(client: AssetsClient, options: any);
    onRender(): void;
    toggle(): void;
    open(): void;
    close(): void;
    private _onSelectBtn(e);
    destroy(): void;
}
