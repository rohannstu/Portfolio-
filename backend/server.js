require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const { MongoMemoryServer } = require('mongodb-memory-server');

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/devtrack');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('Could not connect to local MongoDB. Attempting to start In-Memory MongoDB...');
    try {
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      console.log(`In-Memory MongoDB started at ${uri}`);
      
      const conn = await mongoose.connect(uri);
      console.log(`In-Memory MongoDB Connected: ${conn.connection.host}`);
      console.log('NOTE: Data will be lost when server restarts');
    } catch (memError) {
      console.error(`Fatal Error: Could not start in-memory DB either. ${memError.message}`);
      process.exit(1);
    }
  }
};

connectDB();

// Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'DevTrack API is running'
  });
});

app.use('/api/tasks', taskRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
