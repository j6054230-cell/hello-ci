const TodoList = require('../src/todoList');

describe('TodoList', () => {
    test('yangi todo qo\'shadi va id beradi', () => {
        const list = new TodoList();
        list.add('Yangi vazifa');
        expect(list.todos.length).toBe(1);
        expect(list.todos[0]).toHaveProperty('id');
    });

    test('bo\'sh matn xato beradi', () => {
        const list = new TodoList();
        expect(() => list.add('')).toThrow();
    });
});
