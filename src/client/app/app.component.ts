import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

const appStyle = require('../assets/styles/app.scss');
const ng2SelectStyle = require('../assets/styles/ng2-select.css');


@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  styles: [appStyle, ng2SelectStyle],
  encapsulation: ViewEncapsulation.None,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
