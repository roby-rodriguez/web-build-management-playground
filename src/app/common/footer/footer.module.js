import { module } from 'angular';
import FooterComponent from "./footer.component";

const FooterModule = module('app.footer', [])
    .component('navigation', FooterComponent)
    .name;

export default FooterModule;
