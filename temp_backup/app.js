// src/app.js - listen() bu yerda YO'Q!
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api/todos', require('./routes/todos'));
module.exports = app;  // Export qilish

// server.js - faqat bu yerda listen()
const app = require('./app');
app.listen(3000, () => console.log('Server ishlamoqda'));
Integration test — toʼiq misol
// tests/integration/todos.test.js
const request = require('supertest');
const app = require('../../src/app');
const todoService = require('../../src/services/todoService');

// Service'ni mock qilish (DB kerak emas)
jest.mock('../../src/services/todoService');

describe('GET /api/todos', () => {

  test('200 va todo ro\'yxatini qaytaradi', async () => {
    const mockTodos = [
      { id: 1, text: 'Kitob o\'qish', done: false },
      { id: 2, text: 'Mashq qilish', done: true },
    ];
    todoService.getAll.mockResolvedValue(mockTodos);

    const response = await request(app)
      .get('/api/todos')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toEqual(mockTodos);
    expect(response.body).toHaveLength(2);
  });

  test('Bo\'sh bo\'lsa 200 va bo\'sh massiv', async () => {
    todoService.getAll.mockResolvedValue([]);
    const response = await request(app).get('/api/todos').expect(200);
    expect(response.body).toEqual([]);
  });

});

describe('POST /api/todos', () => {

  test('Yangi todo yaratadi va 201 qaytaradi', async () => {
    const newTodo = { id: 3, text: 'Test yozish', done: false };
    todoService.create.mockResolvedValue(newTodo);

    const response = await request(app)
      .post('/api/todos')
      .send({ text: 'Test yozish' })
      .expect(201);

    expect(response.body.text).toBe('Test yozish');
    expect(response.body.done).toBe(false);
  });

  test('Bo\'sh text 400 xato qaytaradi', async () => {
    const response = await request(app)
      .post('/api/todos')
      .send({ text: '' })
      .expect(400);

    expect(response.body.error).toBeDefined();
  });

});


