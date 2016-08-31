import { BaseEditor, IEditorOptions } from 'views.form';
export interface DateTimeOptions extends IEditorOptions {
    locale?: string;
    useCurrent?: boolean;
    defaultDate?: string | Date;
}
export declare class DateTimeEditor extends BaseEditor<HTMLInputElement, Date> {
    private _datePicker;
    options: DateTimeOptions;
    constructor(options?: DateTimeOptions);
    getValue(): Date;
    setValue(value: Date | string): void;
    onRender(): void;
    private _getOptions();
    onDestroy(): void;
}
