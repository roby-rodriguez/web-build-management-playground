import { module } from 'angular';
import TodoFormComponent from './todo-list.component';

const todoForm = module('app.todo.list', [])
    .component('todoList', TodoFormComponent)
    .name;

export default todoForm;