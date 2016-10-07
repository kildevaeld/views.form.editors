import { BaseEditor, IEditorOptions } from 'views.form';
export interface DateTimeOptions extends IEditorOptions {
    locale?: string;
    useCurrent?: boolean;
    defaultDate?: string | Date;
}
export declare class DateTimeEditor extends BaseEditor<HTMLInputElement, Date> {
    private _datePicker;
    private _date;
    options: DateTimeOptions;
    constructor(options?: DateTimeOptions);
    getValue(): Date;
    setValue(value: Date | string): void;
    enabled(): void;
    disabled(): void;
    onRender(): void;
    private _onChange(e);
    private _getOptions();
    onDestroy(): void;
}
