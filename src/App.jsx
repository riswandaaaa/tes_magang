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