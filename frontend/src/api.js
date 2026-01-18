import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const taskAPI = {
  getAllTasks: () => apiClient.get('/tasks'),
  getTaskById: (id) => apiClient.get(`/tasks/${id}`),
  createTask: (taskData) => apiClient.post('/tasks', taskData),
  updateTask: (id, taskData) => apiClient.put(`/tasks/${id}`, taskData),
  deleteTask: (id) => apiClient.delete(`/tasks/${id}`),
  toggleTask: (id) => apiClient.patch(`/tasks/${id}/toggle`)
};

export default apiClient;
