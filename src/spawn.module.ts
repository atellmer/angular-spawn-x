import { NgModule, ModuleWithProviders } from '@angular/core';
import { CONFIGURE_STORE } from './tokens';
import { NgSpawn } from './spawn.service';


@NgModule({})
export class NgSpawnModule {
  static forRoot(configureStore: Function): ModuleWithProviders {
    return {
      ngModule: NgSpawnModule,
      providers: [
        {
          provide: CONFIGURE_STORE,
          useValue: configureStore
        },
        {
          provide: NgSpawn,
          useClass: NgSpawn,
          deps: [CONFIGURE_STORE]
        }
      ]
    }
  }
}
