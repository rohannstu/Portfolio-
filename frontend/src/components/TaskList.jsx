import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask, onToggleTask, onEditTask }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Create one to get started! 🚀</p>
      </div>
    );
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#e74c3c';
      case 'medium':
        return '#f39c12';
      case 'low':
        return '#27ae60';
      default:
        return '#95a5a6';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'work':
        return '💼';
      case 'learning':
        return '📚';
      case 'personal':
        return '✨';
      default:
        return '📋';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <div className="tasks-container">
        {tasks.map(task => (
          <div key={task._id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <div className="task-checkbox">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task._id)}
              />
            </div>

            <div className="task-content">
              <div className="task-header">
                <h3>{task.title}</h3>
                <span
                  className="priority-badge"
                  style={{ backgroundColor: getPriorityColor(task.priority) }}
                >
                  {task.priority}
                </span>
              </div>

              {task.description && (
                <p className="task-description">{task.description}</p>
              )}

              <div className="task-meta">
                <span className="category-badge">
                  {getCategoryIcon(task.category)} {task.category}
                </span>
                {task.dueDate && (
                  <span className="due-date">
                    📅 {formatDate(task.dueDate)}
                  </span>
                )}
                <span className="created-date">
                  Created: {formatDate(task.createdAt)}
                </span>
              </div>
            </div>

            <div className="task-actions">
              <button
                className="btn-edit"
                onClick={() => onEditTask(task)}
                title="Edit task"
              >
                ✏️
              </button>
              <button
                className="btn-delete"
                onClick={() => onDeleteTask(task._id)}
                title="Delete task"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
