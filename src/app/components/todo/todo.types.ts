export class Todo {
    title: string;
    description: string;
    done: boolean = false;

    constructor(title: string, description?: string, done?: boolean) {
        this.title = title;
        this.description = description;
        this.done = done;
    }
}
