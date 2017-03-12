# angular-spawn-x
### Angular connector for [spawn-x](https://github.com/atellmer/spawn-x) (AoT supports).


## install
With npm:
```
npm install angular-spawn-x --save
```
With yarn:
```
yarn add angular-spawn-x
```


## Usage

#### index.html
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>App</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
```
#### main.ts
```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```

### Add the ngSpawnModule in dependencies
#### app/app.module.ts
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgSpawnModule } from 'angular-spawn-x';

import { configureStore } from './store';
import { AppComponent } from './app.component';
import { PresenterComponent } from './components/presenter.component';
import { UserActions } from './actions/user';


@NgModule({
  declarations: [
    AppComponent,
    PresenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSpawnModule.forRoot(configureStore)
  ],
  providers: [UserActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Configure store with standarts functions createStore and addInterceptor
#### app/store/index.ts
```javascript
import { createStore, addInterceptor } from 'angular-spawn-x';

const initialState = {
  users: [],
  some: {
    text: 'Hello World'
  },
  parent: {
    child: 'I am child'
  }
};

function logger(store) {
  return next => action => {
    next(action);
    console.log('action: ', action.type + ' -> ', action.data);
  }
}

export function configureStore() {
  return createStore(initialState, addInterceptor(logger));
}
```

### Inject ngSpawn into your app, and use select, detect, reject and update methods
#### app/actions/user.ts
```javascript
import { Injectable } from '@angular/core';
import { NgSpawn } from 'angular-spawn-x';


@Injectable()
export class UserActions {
  constructor(private ngSpawn: NgSpawn) {}

  addUser = user => {
    this.ngSpawn.update('users', {
      data: this.ngSpawn.select('users').concat(user),
      type: 'ADD_NEW_USER'
    });
  }
}
```
### For subscribe or unsubscribe on data use connect and disconnect methods like below
#### app/app.component.ts
```javascript
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { NgSpawn } from 'angular-spawn-x';
import { UserActions } from '../actions/user';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-presenter
      [users]="users"
      [text]="text"
      [data]="data"
      (addUser)="addUserHandler($event)">
    </app-presenter>
  `
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private ngSpawn: NgSpawn,
    private userActions: UserActions
  ){}

  ngOnInit() {
    //selection from store
    const selection = {
      users: 'users',
      text: 'some.text',
      data: ['parent.child', state => state.parent.child]
    };
    //connect to store
    this.ngSpawn.connect(selection)(this);
  }

  ngOnDestroy() {
    //disconnect from store
    this.ngSpawn.disconnect(this);
  }

  addUserHandler(user) {
    this.userActions.addUser(user);
  }
}
```

#### app/components/presenter.component.ts
```javascript
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
 } from '@angular/core';


@Component({
  selector: 'app-presenter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h1>User List</h1>
      <ul>
        <li *ngFor="let user of users">{{ user.name }} | {{ user.age }}</li>
      </ul>
      <form (submit)=handleSubmit($event)>
        <input type="text" name="name"/>
        <input type="number" name="age"/>
        <button type="submit">Add New User</button>
      </form>
    </div>
  `
})
export class PresenterComponent implements OnInit {
  @Input() users: any;
  @Input() text: string;
  @Input() data: string;
  @Output() addUser = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

   handleSubmit = ev => {
    console.log('some text from state: ', this.text);
    console.log('some data from state: ', this.data);

    this.addUser.emit({
      name: ev.target.name.value,
      age: ev.target.age.value
    })

    ev.target.name.value = '';
    ev.target.age.value = '';
  }
}
```

## LICENSE

MIT © [Alex Plex](https://github.com/atellmer)