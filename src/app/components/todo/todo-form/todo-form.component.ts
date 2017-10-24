import TodoFormController from "./todo-form.controller";
import "./todo-form.scss";

const TodoFormComponent: ng.IComponentOptions = {
    // templateUrl: 'todo-form.component.html',
    bindings: {
        onAddTodo: '&',
    },
    controller: TodoFormController,
    template: `
        <form name="todoForm" ng-submit="$ctrl.onSubmit()">
            <label>
                Title:
                <input type="text" name="title" ng-model="$ctrl.todo.title" required>
            </label>
            <div role="alert">
                <span class="error" ng-show="todoForm.title.$error.required">
                    Mandatory!
                </span>
            </div>
            <label>
                Description:
                <textarea rows="4" cols="50" name="description" ng-model="$ctrl.todo.description">
                </textarea>
            </label>
            <button type="button" ng-click="$ctrl.onSubmit()">Add</button>
        </form>
    `
};

export default TodoFormComponent;
