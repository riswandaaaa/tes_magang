import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addChapter } from '../services/mockDB';

const AddChapter = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addChapter({
      storyId,
      title,
      content
    });
    navigate(`/stories/${storyId}`);
  };

  return (
    <>
      <header>
        <h1>Add Chapter</h1>
        <button onClick={() => navigate(-1)}>← Back</button>
      </header>

      <form onSubmit={handleSubmit} className="chapter-form">
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Chapter Title" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Story</label>
          <div className="rich-editor">
            {/* Simulasi rich text editor */}
            <div className="toolbar">
              <button type="button">A</button>
              <button type="button">✎</button>
              <button type="button"><b>B</b></button>
              <button type="button"><i>I</i></button>
              <button type="button"><u>U</u></button>
              <button type="button">H₁</button>
              <button type="button">H₂</button>
              <button type="button">≡</button>
              <button type="button">⋮</button>
              <button type="button">🔗</button>
              <button type="button">&lt;/&gt;</button>
              <button type="button">🖼️</button>
            </div>
            <textarea 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              rows="10" 
              placeholder="Write your chapter here..."
              required
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
          <button type="submit" className="btn-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default AddChapter;