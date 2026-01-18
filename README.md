# DevTrack - Portfolio + Task Manager

A full-stack MERN application that combines a personal portfolio with a task management system. Perfect for showcasing your development skills and managing projects effectively.

## 🚀 Features

### Portfolio Section
- Professional portfolio showcase
- Display skills with expertise levels
- Featured projects with technology stack
- Direct links to GitHub, LinkedIn, and Email
- Fully responsive design

### Task Manager
- ✅ Create, Read, Update, Delete (CRUD) tasks
- 📊 Task categorization (Work, Personal, Learning)
- 🎯 Priority levels (Low, Medium, High)
- 📅 Due date assignment
- ✔️ Mark tasks as completed
- 🔍 Filter tasks by status
- 📱 Fully responsive interface

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## 📁 Project Structure

```
devtrack/
├── backend/
│   ├── controllers/
│   │   └── taskController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Portfolio.css
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskForm.css
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskList.css
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Dashboard.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── api.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## 📋 API Endpoints

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get single task |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| PATCH | `/api/tasks/:id/toggle` | Toggle completion status |

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/devtrack
# PORT=5000
# JWT_SECRET=your_secret_key

# Start the server
npm run dev
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

The frontend will open at `http://localhost:3000` and the API runs on `http://localhost:5000`.

## 📝 Task Schema

```javascript
{
  title: String (required),
  description: String,
  completed: Boolean (default: false),
  category: String ('work' | 'personal' | 'learning'),
  priority: String ('low' | 'medium' | 'high'),
  dueDate: Date,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 💡 How to Use

### Creating a Task
1. Navigate to the Dashboard
2. Fill in the task form with title, description, category, priority, and due date
3. Click "Add Task"
4. Task appears in the task list

### Managing Tasks
- **Toggle Completion**: Click the checkbox to mark a task as completed
- **Edit Task**: Click the pencil icon to edit a task
- **Delete Task**: Click the trash icon to delete a task
- **Filter Tasks**: Use filter buttons to view All, Pending, or Completed tasks

### Portfolio Page
- View your professional information
- Showcase your skills and expertise
- Display featured projects
- Quick links to social profiles

## 🎯 Interview Talking Points

1. **MERN Stack Implementation**
   - "I built a full-stack application using MongoDB, Express, React, and Node.js"
   - Demonstrate understanding of each technology layer

2. **REST API Design**
   - "I designed RESTful APIs following best practices"
   - Explain CRUD operations and HTTP methods

3. **Database Design**
   - "I modeled MongoDB schemas using Mongoose"
   - Show validation and data structure

4. **Component Architecture**
   - "I built reusable React components"
   - Explain component separation and props flow

5. **State Management**
   - "I managed state efficiently using React hooks"
   - Demonstrate useEffect and useState usage

6. **Error Handling**
   - "I implemented proper error handling in both frontend and backend"
   - Show user feedback and logging

## 🚀 Deployment

### Backend (Heroku / Railway)
```bash
cd backend
git init
git add .
git commit -m "Initial commit"
```

### Frontend (Vercel / Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder
```

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB University](https://university.mongodb.com)
- [Node.js Documentation](https://nodejs.org/docs)

## 🤝 Contributing

This is a personal project for interview preparation. Feel free to modify and enhance it!

## 📄 License

MIT License - Free to use for personal and educational purposes.

## 👨‍💻 Author

Rohan - Full Stack Developer

---

**Ready for interviews?** This project demonstrates:
- ✅ Full-stack development capability
- ✅ REST API design skills
- ✅ Database management knowledge
- ✅ Modern React patterns
- ✅ Clean code practices
- ✅ Responsive web design
- ✅ Git version control
