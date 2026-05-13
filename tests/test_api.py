import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
from main import app

client = TestClient(app)

class TestTodosAPI:

    @patch('main.todo_service')
    def test_get_todos_returns_list(self, mock_service):
        mock_service.get_all.return_value = [
            {'id': 1, 'text': 'Test', 'done': False}
        ]
        response = client.get('/api/todos')
        assert response.status_code == 200
        assert len(response.json()) == 1

    @patch('main.todo_service')
    def test_create_todo_returns_201(self, mock_service):
        mock_service.create.return_value = {
            'id': 1, 'text': 'Yangi vazifa', 'done': False
        }
        response = client.post('/api/todos', json={'text': 'Yangi vazifa'})
        assert response.status_code == 201
        assert response.json()['text'] == 'Yangi vazifa'

    def test_empty_text_returns_422(self):
        response = client.post('/api/todos', json={'text': ''})
        assert response.status_code == 422

