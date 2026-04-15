import { useState } from 'react';

const FilterModal = ({ onClose, onApply }) => {
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply({ category, status });
  };

  const handleReset = () => {
    setCategory('');
    setStatus('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Filter</h2>
          <button onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              <option value="Teen Fiction">Teen Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Non Fiction">Non Fiction</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">All Statuses</option>
              <option value="Draft">Draft</option>
              <option value="Publish">Publish</option>
            </select>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={handleReset} className="btn-secondary">Reset</button>
            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
            <button type="submit" className="btn-primary">Filter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;