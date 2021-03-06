import { module } from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const app = module('app',
    [
        Components,
        Common,
        uiRouter
    ])
    .component('app', AppComponent)
    .name;

export default app;
