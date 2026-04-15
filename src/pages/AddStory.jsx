import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addStory } from '../services/mockDB';

const AddStory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    writerName: '',
    synopsis: '',
    category: '',
    tags: [],
    coverImage: '',
    status: 'Draft'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagAdd = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, e.target.value.trim()]
      }));
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStory(formData);
    navigate('/stories');
  };

  return (
    <>
      <header>
        <h1>Add Stories</h1>
        <button onClick={() => navigate(-1)}>← Back</button>
      </header>

      <form onSubmit={handleSubmit} className="story-form">
        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Writer Name</label>
            <input type="text" name="writerName" value={formData.writerName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Synopsis</label>
          <textarea name="synopsis" rows="4" value={formData.synopsis} onChange={handleChange}></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Teen Fiction">Teen Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Non Fiction">Non Fiction</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tags/Keywords</label>
            <div className="tags-container">
              {formData.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag} <button type="button" onClick={() => removeTag(tag)}>×</button>
                </span>
              ))}
              <input 
                type="text" 
                placeholder="Add tag..." 
                onKeyDown={handleTagAdd} 
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Cover Image</label>
            <input type="file" accept="image/*" onChange={(e) => {
              // Simulasi upload — simpan nama file saja
              setFormData(prev => ({ ...prev, coverImage: e.target.files[0]?.name || '' }));
            }} />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Draft">Draft</option>
              <option value="Publish">Publish</option>
            </select>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
          <button type="submit" className="btn-primary">Save</button>
        </div>
      </form>

      {/* Optional: Show existing chapters below */}
      <section className="existing-chapters">
        <h3>Existing Chapters</h3>
        <p>No chapters yet.</p>
        <Link to={`/stories/${Date.now()}/chapters/add`} className="btn-primary">+ Add Chapter</Link>
      </section>
    </>
  );
};

export default AddStory;