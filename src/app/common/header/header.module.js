import { module } from 'angular';
import HeaderComponent from "./header.component";

const HeaderModule = module('app.header',[])
    .component('header', HeaderComponent)
    .name;

export default HeaderModule;
