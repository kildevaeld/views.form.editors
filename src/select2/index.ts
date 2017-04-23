import {customAdapter} from './adaptor'
import {BaseEditor, IEditorOptions, editor} from 'views.form';
import {attributes} from 'views';
import * as utils from 'orange';
import {ICollection, Collection, Model, isCollection, isModel} from 'collection';

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
	data?: any
	idAttribute?: string;
	textAttribute?: string;
}


@editor('select2')
export class Select2 extends BaseEditor<HTMLSelectElement, any> {
	private _data: ICollection;
	textAttribute: string;
	idAttribute: string;
	options: Select2Options;
	customAdapter: any;

	constructor(options?: Select2Options) {
		super(options);
		this.options = options || {};
		this.data = this._normalizeData(options.data);

	}

	get data(): ICollection {
		return this._data;
	}

	set data(data: ICollection) {
		this._data = this._normalizeData(data);
	}

	onCollection(collection: ICollection) {
		this.data = collection;
	}

	setValue(value: any) {
		if (this.data == null) {
			console.warn('data is not set');
			return;
		}

		let $el = $(this.el);
		let curVal = $el.val();

		if (value == null)  {
			$el.val(null);
			$el.trigger('change.select2');
			return;
		}
		
		if (!Array.isArray(value)) value = [<any>value]

		let ids = value.map(m => {
			
			if (typeof m === 'string') {
				if (m === "") return null;
				return m;
			} else if (isModel(m)) {
				return String(m.id);
			} else if (utils.isObject(m)) {
				return String(m[this.options.idAttribute]);
			}
			
			return String(m);
		}).filter(e => e !== null);

		ids = utils.unique(ids);
		
		if (curVal) {
			if (utils.equal(ids, curVal)) {
				return;
			}
		}

		$el.html('')
		value.forEach(e => {
			let id, text;
			if (typeof e === 'string') {
				id = e;
				text = e;
			} else if (isModel(e)) {
				id = e.get(this.options.idAttribute);
				text = e.get(this.options.textAttribute);
			} else if (utils.isObject(e)) {
				id = String(e[this.options.idAttribute]);
				text = e[this.options.textAttribute];
			}
			$el.append(`<option value="${id}">${text}</option>`);
		});
		
		$el.val(ids);

		$el.trigger('change.select2');

	}

	getValue(): any {
		let out, val = $(this.el).val();
		
		if (val == null) return out;

		if (this.data) {
			if (this.options.multiple) {
				out = val.map(m => {
					
					let model = this.data.find(m);
					
					return model != null ? model.toJSON() : null;
				}).filter(e => e != null);
			} else {
				out = this.data.find(val);
			}
		} else {
			out = this.options.multiple ? [] : null;
		}
		
		return out;
	}

	clear() {
		this.setValue(null);
	}

	enabled() {
		$(this.el).prop('disabled', false);
	}

	disabled() {
		$(this.el).prop('disabled', true);
	}

	_normalizeData(data:any) {
		if (data == null) return null;
		if (Array.isArray(data)) {
			return new Collection(data.map(m => {
				if (typeof m === 'string') return {
					[this.options.idAttribute || 'id']: m,
					[this.options.textAttribute || 'text']: m
				}
				return m;
			}));
		} else if (isCollection(data)) {
			return data;
		} else {
			throw new Error('no data');
		}
	}

	onRender() {
		if ($(this.el).data('select2')) {
			$(this.el).data('select2').destroy();
			$(this.el).off();
		}

		this._get_options(this.options)
			.then(options => {
				this.options = options;
			
				$(this.el).select2(options);
				$(this.el).on('change', () => {
					this.trigger('change');
				})
			}).catch(e => {
				console.log('error', e);
			});
	}


	private async _get_options(attr: any): Promise<any> {

		let opt: Select2Options = utils.extend({}, attr, {
			dataAdapter: await customAdapter(this)
		});

		['multiple', 'theme', 'min', 'max', 'text-param', 'id-param', 'placeholder', 'allow-clear', 'tags', 'theme']
			.forEach(s => {
				let has: any = this.el.getAttribute(s);
				if (has == "") has = true;
				else if (has == null) return;
				if (s == 'min') {
					s = 'minimumInputLength';
					has = parseInt(has);
				}
				if (s == 'max') {
					s = 'maximumSelectionLength';
					has = parseInt(has);
				}
				if (s == 'text-param') s = 'textAttribute';
				if (s == 'id-param') s = 'idAttribute';
				if (s == 'allow-clear') s = 'allowClear';
				opt[s] = has;
			});

		if (!opt.idAttribute) opt.idAttribute = 'id';
		if (!opt.textAttribute) opt.textAttribute = 'text';

		return opt;
	}


}