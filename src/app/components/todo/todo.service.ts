import * as angular from 'angular';
import { Todo } from './todo.types';

class TodoService {
    private $q: ng.IQService;

    constructor($q) {
        this.$q = $q;
    }

    getTodos() {
        return this.$q.when([
            new Todo("buy milk", "until next Wednesday"),
            new Todo("do homework", "late Sunday evening - ask Joe for advice"),
            new Todo("go jogging", "Monday mornings"),
        ]);
    }
}

TodoService.$inject = ['$q'];

export default TodoService;
