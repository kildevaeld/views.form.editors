import { BaseEditor } from 'views.form';
export declare class Select2 extends BaseEditor<HTMLSelectElement, any> {
    data: any;
    textAttribute: string;
    idAttribute: string;
    setValue(value: any): void;
    getValue(): any;
    clear(): void;
}
