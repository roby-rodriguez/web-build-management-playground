import { Todo } from './todo.types';
import { IPromise } from "angular";

class TodoService {
    private $q: ng.IQService;

    // static $inject = [ '$q' ];

    constructor($q: ng.IQService) {
        this.$q = $q;
    }

    getTodos(): IPromise<Todo[]> {
        return this.$q.when([
            new Todo("buy milk", "until next Wednesday"),
            new Todo("do homework", "late Sunday evening - ask Joe for advice"),
            new Todo("go jogging", "Monday mornings"),
        ]);
    }
}

TodoService.$inject = ['$q'];

export default TodoService;
