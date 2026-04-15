import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from './pages/Dashboard';
import StoriesList from './pages/StoriesList';
import AddStory from './pages/AddStory';
import AddChapter from './pages/AddChapter';

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