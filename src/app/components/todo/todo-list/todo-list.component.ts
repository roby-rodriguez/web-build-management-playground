import TodoListController from "./todo-list.controller";
import "./todo-list.scss";

const TodoListComponent: ng.IComponentOptions = {
    // templateUrl: 'todo-list.component.html',
    bindings: {
        todos: '<',
    },
    controller: TodoListController,
    template: `
        <table class="todo-list">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tr ng-repeat="todo in $ctrl.todos">
                <td>{{ todo.title }}</td>
                <td>{{ todo.description }}</td>
                <td>
                    <input type="checkbox" ng-disabled="true" ng-model="todo.done" />
                </td>
            </tr>
        </table>
    `
};

export default TodoListComponent;
