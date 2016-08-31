
import {deferred, IPromise, find} from 'orange';
import {Model, RestCollection, Collection, IModel} from 'collection';
import {Select2} from './index';

async function findInData(q: string, select: Select2): Promise<IModel[]> {
  
  let reg = new RegExp(`.*${q}.*`, 'ig');
  let out = select.data.filter(e => {
    if (e instanceof Model) {
      e = e.toJSON();
    }
    
    if (e[select.options.textAttribute] && e[select.options.textAttribute].match(reg)) {
      return true;
    } else if (e[select.options.idAttribute] && String(e[select.options.idAttribute]).match(reg)) {
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

export function customAdapter(select: Select2): IPromise<any> {

  let promise = deferred();
  $.fn.select2.amd.require(['select2/data/array', 'select2/utils'], (ArrayData: FunctionConstructor) => {

    class CustomData extends ArrayData {

      private found: IModel[] = [];
      
      async current(cb) {
        
        let val = $(select.el).val();
        if (val == null || select.data == null) return cb([]);

        let out = [];
        //if (!select.options.multiple) val = [val];
        for (let i = 0, ii = val.length; i < ii; i++) {

          let found = find(this.found, (item) => {
            return String(item.id) === val[i];
          });

          if (!found) {

            /*if (Array.isArray(select.data)) {
              
              found = find<IModel>(select.data, (item) => {
                if (typeof item === 'string') {
                  return item == val[i];
                } else {
                  return item[select.options.idAttribute||'id'] == val[i];
                }
              });
            } else if (select.data instanceof Collection) {
              found = select.data.find(val[i]);
            }*/
            let data = select.data;
            found = (<any>data).find(val[i]);
            
            if (!found) {
              if (data instanceof RestCollection) {
                await data.fetch();
                found = data.find(val[i]);
              }
              //
            }
          }
          if (found) out.push(found);

        }
        
        this.found = out;
        
        cb(out.map(m => m.toJSON()));
      }

      query(params, done) {
       
        let min = select.options.minimumInputLength || 0;
        let results = { results: [] };
        if ((params.term == null && min > 0) || (min > 0 && params.term.length < min) || select.data == null) {
          return done(results);
        }
        
        if (params.term == null) {
          results.results = (<any>select.data).map( m => {
            return m.toJSON();
          });
          
          return done(results);
        }
        
        findInData(params.term, select).then( found => {
        	results.results = found.map( m => m.toJSON());
        	done(results);
        }).catch( e => { throw e; });

        
      }

    }

    promise.resolve(CustomData);
  });

  return promise.promise;
}