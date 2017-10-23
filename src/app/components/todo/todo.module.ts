import { module } from 'angular';
import uiRouter from '@uirouter/angularjs';
import TodoComponent from './todo.component';
import TodoService from './todo.service';
import TodoForm from './todo-form';
import TodoList  from './todo-list';

const todo = module('app.todo',
    [
        uiRouter,
        TodoForm,
        TodoList
    ])
    .component('todo', TodoComponent)
    .service('TodoService', TodoService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('todos', {
                url: '/todos',
                component: 'todo',
                resolve: {
                    todoData: (todoService: TodoService) => todoService.getTodos()
                }
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default todo;
