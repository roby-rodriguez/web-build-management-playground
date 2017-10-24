import TodoController from "./todo.controller";

const TodoComponent: ng.IComponentOptions = {
    bindings: {
        todos: '<',
    },
    controller: TodoController,
    template: `
        <div class="todo">
            <todo-form
                    on-add-todo="$ctrl.addTodo(todo)">
            </todo-form>
            <todo-list
                    todos="$ctrl.todos">
            </todo-list>
        </div>
    `
};

export default TodoComponent;
