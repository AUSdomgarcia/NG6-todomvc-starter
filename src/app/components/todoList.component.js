
class TodoListController {
  constructor(todoManager) {
    "ngInject";
    this.manager = todoManager;
  }

  get allChecked() {
    return this.todos.todos.reduce((result, task) => {
      return result && task.complete;
    }, true)
  }

  set allChecked(val) {
    // do nothing?
  }

  toggleCompleteAll() {
    this.manager.toggleAll();
  }
}

export default {
  bindings: {
    todos: '='
  },
  template: `
    <ul class="todo-list">
      <todo-item todo="todo" ng-repeat="todo in todoList.todos.list"></todo-item>
    </ul>
  `,
  controller: TodoListController
}
