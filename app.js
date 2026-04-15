// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connectDB = require('./config/database');
// const errorHandler = require('./middleware/errorHandler');
// const storyRoutes = require('./routes/stories');
// const chapterRoutes = require('./routes/chapters');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/stories', storyRoutes);
// app.use('/api/chapters', chapterRoutes);

// // Error Handler
// app.use(errorHandler);

// // Connect DB and Start Server
// connectDB().then(() => {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

// module.exports = app; // For testing

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Buat komponen sederhana sementara agar tidak error
const Dashboard = () => <h1>Dashboard</h1>;
const StoriesList = () => <h1>Stories List</h1>;
const AddStory = () => <h1>Add Story</h1>;
const AddChapter = () => <h1>Add Chapter</h1>;
const Layout = ({ children }) => <div>{children}</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stories" element={<StoriesList />} />
          <Route path="/stories/add" element={<AddStory />} />
          <Route path="/stories/:storyId/chapters/add" element={<AddChapter />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;