import { module } from 'angular';
import NavigationComponent from "./navigation.component";

const NavigationModule = module('app.navigation', [])
    .component('navigation', NavigationComponent)
    .name;

export default NavigationModule;
