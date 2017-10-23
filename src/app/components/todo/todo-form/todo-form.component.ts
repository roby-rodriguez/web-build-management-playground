// import * as angular from 'angular';
import TodoController from "./todo-form.controller";

const TodoComponent: ng.IComponentOptions = {
    templateUrl: './todo-form.component.html',
    bindings: {
        onAddTodo: '&',
    },
    controller: TodoController,
};

export default TodoComponent;
