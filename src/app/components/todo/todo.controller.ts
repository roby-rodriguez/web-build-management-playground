// import * as angular from 'angular';
import TodoService from "./todo.service";
import { Todo } from "./todo.types";

class TodoController implements ng.IController {
    todos: Todo[] = [];

    constructor(private TodoService: TodoService) {
        this.TodoService = TodoService;
    }
/*
    $onInit() {
        this.TodoService
            .getTodos()
            .then(response => {
                this.todos = response
            });
    }
*/
    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }
}

TodoController.$inject = [ 'TodoService' ];

export default TodoController;
