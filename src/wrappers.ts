import * as Spawn from 'spawn-x';


export function createStore(...args) {
  return Spawn.createStore(...args);
}

export function addInterceptor(...args) {
  return Spawn.addInterceptor(...args);
}
