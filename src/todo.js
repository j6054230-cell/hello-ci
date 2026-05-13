class TodoList {
  constructor() {
    this.todos = [];
  }
  add(item) {
    this.todos.push(item);
  }
  remove(index) {
    this.todos.splice(index, 1);
  }
  count() {
    return this.todos.length;
  }
}
module.exports = TodoList;

