import { module } from 'angular';
import Navigation from './navigation/navigation.module';
import Header from './header/header.module';
import Footer from './footer/footer.module';

const common = module('app.common',
    [
        Navigation,
        Header,
        Footer
    ])
    .name;

export default common;
