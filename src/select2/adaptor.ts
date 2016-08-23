
import 'select2';
import * as $ from 'jquery';
import {deferred, IPromise, find} from 'orange';
import {Model, RestCollection, Collection, IModel} from 'collection';
import {Select2} from './index';

async function findInData(q: string, select: Select2): Promise<IModel[]> {
  let reg = new RegExp(`.*${q}.*`, 'ig');
  let out = select.data.filter(e => {
    if (e instanceof Model) {
      e = e.toJSON();
    }

    if (e[select.textAttribute] && e[select.textAttribute].match(reg)) {
      return true;
    } else if (e[select.idAttribute] && String(e[select.idAttribute]).match(reg)) {
      return true;
    }

    return false
  });



  if (select.data instanceof RestCollection) {
    let rest = <RestCollection<IModel>>select.data;
    let found = await rest.query(q);
    if (found.length) out = found;
  }

  return out;

}

function customAdapter(select: Select2): IPromise<any> {

  let promise = deferred();
  $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], (ArrayData: FunctionConstructor) => {

    class CustomData extends ArrayData {

      private found: IModel[] = [];

      async current(cb) {
        let val = $(select.el).val();
        if (val == null || select.data == null) return cb([]);

        let out = [];
        if (!select.multiple) val = [val];
        for (let i = 0, ii = val.length; i < ii; i++) {

          let found = find(this.found, (item) => {
            return String(item.id) === val[i];
          });

          if (!found) {
            found = select.data.find(val[i]);
            if (!found) {
              if (select.data instanceof RestCollection) {
                await (<any>select).data.fetch();
              }
              found = select.data.find(val[i]);
            }
          }
          if (found) out.push(found);

        }

        this.found = out;

        cb(out);
      }

      query(params, done) {
        let min = select.attributes['min-input'] || 0;
        let results = { results: [] };
        if (params.term == null || (min > 0 && params.term.length < min) || select.data == null) {
          return done(results);
        }

        findInData(params.term, select).then( found => {
        	results.results = found;
        	done(results);
        }).catch( e => { throw e; });

        
      }

    }

    promise.resolve(CustomData);
  });

  return promise.promise;
}