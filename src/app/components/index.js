import { module } from 'angular';
import Todo from './todo/todo.module';

const components =
    module('app.components', [
        Todo,
    ])
    .name;

export default components;
