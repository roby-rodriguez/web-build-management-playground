import { module } from 'angular';
import TodoFormComponent from './todo-form.component';

const todoForm = module('app.todo.form', [])
    .component('todoForm', TodoFormComponent)
    .name;

export default todoForm;