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
    .service('todoService', TodoService)
    .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('todos', {
                url: '/todos',
                component: 'todo',
                resolve: {
                    todos: (todoService: TodoService) => {
                        'ngInject';
                        return todoService.getTodos();
                    }
                }
            });
        $urlRouterProvider.otherwise('/todos');
    })
    .name;

export default todo;
