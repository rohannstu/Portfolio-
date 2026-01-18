import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { taskAPI } from '../api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await taskAPI.getAllTasks();
      setTasks(response.data.data);
      setError('');
    } catch (err) {
      setError('Failed to load tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await taskAPI.createTask(taskData);
      setTasks([response.data.data, ...tasks]);
      setError('');
    } catch (err) {
      setError('Failed to add task');
      throw err;
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      await taskAPI.deleteTask(id);
      setTasks(tasks.filter(task => task._id !== id));
      setError('');
    } catch (err) {
      setError('Failed to delete task');
      console.error(err);
    }
  };

  const handleToggleTask = async (id) => {
    try {
      const response = await taskAPI.toggleTask(id);
      setTasks(tasks.map(task =>
        task._id === id ? response.data.data : task
      ));
      setError('');
    } catch (err) {
      setError('Failed to toggle task');
      console.error(err);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    // Scroll to form
    const formElement = document.querySelector('.task-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateTask = async (taskData) => {
    if (!editingTask) return;

    try {
      const response = await taskAPI.updateTask(editingTask._id, taskData);
      setTasks(tasks.map(task =>
        task._id === editingTask._id ? response.data.data : task
      ));
      setEditingTask(null);
      setError('');
    } catch (err) {
      setError('Failed to update task');
      throw err;
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>DevTrack Dashboard</h1>
        <p className="subtitle">Manage your tasks and showcase your work</p>
      </div>

      {error && <div className="error-banner">{error}</div>}

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>{totalCount}</h3>
          <p>Total Tasks</p>
        </div>
        <div className="stat-card">
          <h3>{completedCount}</h3>
          <p>Completed</p>
        </div>
        <div className="stat-card">
          <h3>{totalCount - completedCount}</h3>
          <p>Pending</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="form-section">
          <TaskForm onAddTask={editingTask ? handleUpdateTask : handleAddTask} />
          {editingTask && (
            <div className="editing-notice">
              <p>Editing: <strong>{editingTask.title}</strong></p>
              <button onClick={() => setEditingTask(null)}>Cancel</button>
            </div>
          )}
        </div>

        <div className="filter-section">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Tasks ({totalCount})
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending ({totalCount - completedCount})
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
            onEditTask={handleEditTask}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
