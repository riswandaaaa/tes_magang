require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const storyRoutes = require('./routes/stories');
const chapterRoutes = require('./routes/chapters');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/stories', storyRoutes);
app.use('/api/chapters', chapterRoutes);

// Error Handler
app.use(errorHandler);

// Connect DB and Start Server
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = app; // For testing