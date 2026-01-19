# DevTrack - Setup & Run Instructions

## 📋 Prerequisites Required

Before running this project, you need to install:

1. **Node.js & npm** - Download from https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - npm comes bundled with Node.js
   
2. **MongoDB** - One of these options:
   - **Local MongoDB**: Download from https://www.mongodb.com/try/download/community
   - **MongoDB Atlas** (Cloud): Free tier at https://www.mongodb.com/cloud/atlas
   
3. **Git** (optional but recommended) - Download from https://git-scm.com/

---

## ✅ Installation Steps

### Step 1: Install Node.js
- Visit https://nodejs.org/
- Download and install the LTS version
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### Step 2: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file and add:
MONGODB_URI=mongodb://localhost:27017/devtrack
PORT=5000
JWT_SECRET=dev_secret_key_123
NODE_ENV=development

# Start backend server
npm run dev
```

Backend will run on: `http://localhost:5000`

### Step 3: Setup Frontend (in a NEW terminal)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
```

Frontend will open at: `http://localhost:3000`

---

## 🗄️ MongoDB Setup Options

### Option 1: MongoDB Atlas (Cloud - Easiest)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update `.env` with your Atlas URI

### Option 2: Local MongoDB
1. Download & install from https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/devtrack`

---

## 🎯 Troubleshooting

### npm: command not found
- Node.js is not installed or not in PATH
- Reinstall Node.js from https://nodejs.org/
- Restart your terminal after installation

### MongoDB connection error
- Ensure MongoDB is running locally, OR
- Check your MongoDB Atlas connection string in .env

### Port 3000 or 5000 already in use
- Close other applications using these ports
- Or change PORT in backend .env

### Module not found errors
- Delete node_modules: `rm -r node_modules`
- Reinstall: `npm install`

---

## 📝 Project Features

Once running, you can:
- ✅ Create, read, update, delete tasks
- ✅ Categorize tasks (Work, Personal, Learning)
- ✅ Set priority levels
- ✅ Filter tasks by status
- ✅ View your portfolio
- ✅ Toggle task completion

---

## 🚀 Ready?

1. Install Node.js
2. Run backend: `cd backend && npm install && npm run dev`
3. Run frontend (new terminal): `cd frontend && npm install && npm start`
4. Open http://localhost:3000

Good luck! 🎉
