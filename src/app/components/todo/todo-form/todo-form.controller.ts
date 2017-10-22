import * as angular from 'angular';
import { Todo } from "../todo.types";

class TodoFormController implements ng.IController {
    private todo: Todo = new Todo("");
    onAddTodo: Function = (todo: Todo) => {};

    onSubmit(): void {
        if (!this.todo.title)
            return;
        this.onAddTodo(this.todo);
    }
}

export default TodoFormController;
