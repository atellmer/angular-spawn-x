import { Injectable, Inject } from '@angular/core';
import { CONFIGURE_STORE } from './tokens';
import {
  isArray,
  isString,
  isFunc,
  isUndefined,
  error
} from './helpers';


@Injectable()
export class NgSpawn {
  store: any;

  constructor(@Inject(CONFIGURE_STORE) configureStore: Function) {
    this.store = configureStore();
  }

  connect = (selection: any) => (component: any) => {
    component['@@SPAWN'] = {
      selection,
      callbacks: []
    };

    const updateWithState = (component: any, key: string, selector: string | Function) => {
      component[key] = this.store.select(selector);
    }

    const detect = ({
      zone,
      component,
      key,
      selector
      }) => {
      component['@@SPAWN']['callbacks'].push(updateWithState);
      return this.store.detect(
        zone,
        updateWithState,
        component,
        key,
        selector
      );
    }

    Object.keys(selection).forEach(key => {
      let zone: string;
      let selector: string | Function;

      if (isString(selection[key])) {
        zone = selection[key];
        selector = selection[key];
      }

      if (isArray(selection[key])) {
        if (selection[key].length === 1 && isString(selection[key][0])) {
          zone = selection[key][0];
          selector = selection[key][0];
        }

        if (selection[key].length > 1 && isString(selection[key][0]) && isFunc(selection[key][1])) {
          zone = selection[key][0];
          selector = selection[key][1];
        }
      }

      if (isUndefined(zone) || isUndefined(selector)) {
        return error(`@angular/spawn-x: incorrect arguments for selection`);
      }

      detect({ zone, component, key, selector });
    });
  }

  disconnect = (component: any) => {
    Object.keys(component['@@SPAWN']['selection']).forEach(key => {
      component['@@SPAWN']['callbacks'].forEach(cb => {
        this.store.reject(key, cb);
      });
    });
  }

  select = (...args: Array<any>) => this.store.select(...args);
  detect = (...args: Array<any>) => this.store.detect(...args);
  reject = (...args: Array<any>) => this.store.reject(...args);
  update = (...args: Array<any>) => this.store.update(...args);
}
