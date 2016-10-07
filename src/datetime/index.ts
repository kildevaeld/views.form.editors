
import { BaseEditor, IEditorOptions, editor } from 'views.form'
import { extend, camelcase, pick, bind, isString, isDate } from 'orange';
declare var moment;
export interface DateTimeOptions extends IEditorOptions {
    locale?: string;
    useCurrent?: boolean;
    defaultDate?: string | Date;
}

@editor('datetime')
export class DateTimeEditor extends BaseEditor<HTMLInputElement, Date> {
    private _datePicker: any;
    private _date: Date;
    options: DateTimeOptions;
    constructor(options?: DateTimeOptions) {
        super(options);
        if (!$.fn.datetimepicker) throw new Error('eonasdan-bootstrap-datetimepicker is not loaded!!');
        this.options = options || {};

        this._onChange = bind(this._onChange, this);

    }

    getValue(): Date {
        return this._date;
    }

    setValue(value: Date | string) {
        var date: Date
        if (isDate(value)) {
            date = value
        } else if (isString(value)) {
            date = new Date(value);
        } else if (value == null) {
            date = null;
        } else {
            throw new Error('Date#setValue: ivalid value');
        }

        if (this._date == date) return;

        this._date = date;

        if (!this._datePicker) return;

        if (date == null) {
            //this._datePicker.clear();
        } else {
            this._datePicker.date(moment(date))
        }


    }

    enabled() {
        if (this._datePicker)
            this._datePicker.enable();
    }

    disabled() {
        if (this._datePicker)
            this._datePicker.disable();
    }

    onRender() {
        if (this._datePicker) this._datePicker.destroy();
        if (this.el.tagName != 'INPUT') throw new Error('tagname must be input');

        let options = this._getOptions();
        // FIX
        if (options.useCurrent) options.defaultDate = new Date();
        if (options.defaultDate) {
            this._date = new Date(options.defaultDate);
        }
        (<any>$(this.el)).datetimepicker(options);

        this._datePicker = $(this.el).data('DateTimePicker');

        if (!this._datePicker) throw new Error('Cannot');

        $(this.el).on('dp.change', this._onChange)

    }

    private _onChange(e: Event) {
        e.preventDefault();
        let date = this._datePicker.date().toDate()
        if (date == this._date) return;
        this._date = date;
        
        this.trigger('change');
    }

    private _getOptions(): DateTimeOptions {
        let options = extend({}, pick(this.options, ['locale', 'minDate', 'maxDate', 'defaultDate', 'useCurrent']));
        ['locale', 'min-date', 'max-date', 'default-date', 'use-current']
            .forEach(m => {
                let has: any = this.el.getAttribute(m);
                if (has == null) return;
                if (has == "") has = true;
                options[camelcase(m)] = has;
            });
        return options;
    }

    onDestroy() {
        if (this._datePicker) this._datePicker.destroy();
        $(this.el).off('dp.change', this._onChange);
    }

}