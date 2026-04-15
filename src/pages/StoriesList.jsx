import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getStories, deleteStory } from '../services/mockDB';
import FilterModal from '../components/FilterModal';
import Pagination from '../components/Pagination';

const StoriesList = () => {
  const [stories, setStories] = useState(getStories());
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ category: '', status: '' });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteStory(id);
      setStories(getStories());
    }
  };

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          story.writerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filters.category || story.category === filters.category;
    const matchesStatus = !filters.status || story.status === filters.status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <>
      <header>
        <h1>Stories</h1>
        <div className="actions">
          <input 
            type="text" 
            placeholder="Search by Writers/Title" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => setShowFilter(true)}>🔽</button>
          <Link to="/stories/add" className="btn-primary">+ Add Story</Link>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writers</th>
            <th>Category</th>
            <th>Keyword</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStories.map((story, idx) => (
            <tr key={story.id}>
              <td>{idx + 1}</td>
              <td>{story.title}</td>
              <td>{story.writerName}</td>
              <td>{story.category}</td>
              <td>
                {story.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </td>
              <td>
                <span className={`status-badge ${story.status.toLowerCase()}`}>
                  {story.status}
                </span>
              </td>
              <td>
                <button onClick={() => handleDelete(story.id)}>...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination total={filteredStories.length} perPage={5} />

      {showFilter && (
        <FilterModal 
          onClose={() => setShowFilter(false)} 
          onApply={(newFilters) => {
            setFilters(newFilters);
            setShowFilter(false);
          }}
        />
      )}
    </>
  );
};

export default StoriesList;