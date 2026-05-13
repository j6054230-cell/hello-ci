class TodoList {
    constructor() {
        // MUHIM: Bu yerda o'zgaruvchi nomi aynan 'todos' bo'lishi kerak
        this.todos = []; 
    }

    add(task) {
        if (!task) throw new Error("Vazifa bo'sh bo'lmasligi kerak");
        const newItem = {
            id: Date.now(),
            task: task
        };
        this.todos.push(newItem);
    }
}

module.exports = TodoList;
