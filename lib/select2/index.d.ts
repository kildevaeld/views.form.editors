import { BaseEditor, IEditorOptions } from 'views.form';
import { ICollection } from 'collection';
export interface Select2Options extends IEditorOptions {
    multiple?: boolean;
    tags?: boolean;
    maximumSelectionLength?: number;
    minimumInputLength?: number;
    theme?: string;
    templateResult?: string;
    templateSelection?: string;
    placeholder?: string;
    allowClear?: boolean;
    data?: any;
    idAttribute?: string;
    textAttribute?: string;
}
export declare class Select2 extends BaseEditor<HTMLSelectElement, any> {
    private _data;
    textAttribute: string;
    idAttribute: string;
    options: Select2Options;
    customAdapter: any;
    constructor(options?: Select2Options);
    data: ICollection;
    onCollection(collection: ICollection): void;
    setValue(value: any): void;
    getValue(): any;
    clear(): void;
    _normalizeData(data: any): any;
    onRender(): void;
    private _get_options(attr);
}
