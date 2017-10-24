import { Todo } from "./todo.types";

class TodoController implements ng.IController {
    todos: Todo[];
/*
    // alternative
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

export default TodoController;
