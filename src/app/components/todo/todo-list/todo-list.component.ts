import * as angular from 'angular';
import TodoListController from "./todo-list.controller";

const TodoListComponent: ng.IComponentOptions = {
    templateUrl: './todo-list.component.html',
    bindings: {
        todos: '<',
    },
    controller: TodoListController,
};

export default TodoListComponent;
