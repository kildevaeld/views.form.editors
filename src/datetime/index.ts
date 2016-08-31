
import {BaseEditor, IEditorOptions, editor} from 'views.form'
import {extend, camelcase, pick} from 'orange';

export interface DateTimeOptions extends IEditorOptions {
    locale?: string;
    useCurrent?:boolean;
    defaultDate?: string|Date;
}

@editor('datetime')
export class DateTimeEditor extends BaseEditor<HTMLInputElement, Date> {
    private _datePicker:any;
    options: DateTimeOptions;
    constructor(options?:DateTimeOptions) {
        super(options);
        if (!$.fn.datetimepicker) throw new Error('eonasdan-bootstrap-datetimepicker is not loaded!!');
        this.options = options||{};
    }

    getValue(): Date {
        if (!this._datePicker) return null;
        let date = this._datePicker.date();
        return date ? date.toDate() : null;
    }

    setValue(value: Date|string) {
        if (!this._datePicker) return;
        if (value === null) {
            this._datePicker.clear();
        } else {
            this._datePicker.date(value);
        }

    }

    onRender() {
        if (this._datePicker) this._datePicker.destroy();
        if (this.el.tagName != 'INPUT') throw new Error('tagname must be input');
        
        let options = this._getOptions();
        // FIX
        if (options.useCurrent) options.defaultDate = new Date();

        (<any>$(this.el)).datetimepicker(options);

        this._datePicker = $(this.el).data('DateTimePicker');

        if (!this._datePicker) throw new Error('Cannot'); 

    }

    private _getOptions(): DateTimeOptions {
        let options = extend({}, pick(this.options, ['locale', 'minDate','maxDate','defaultDate','useCurrent']));
        ['locale','min-date','max-date', 'default-date', 'use-current']
        .forEach( m => {
            let has: any = this.el.getAttribute(m);
            if (has == null) return;
            if (has == "") has = true;
            options[camelcase(m)] = has;
        });
        return options;
    }

    onDestroy() {
        if (this._datePicker) this._datePicker.destroy();
    }

}