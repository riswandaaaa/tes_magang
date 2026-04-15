import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo">STORYKU</div>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
        <Link to="/stories" className={location.pathname.startsWith('/stories') ? 'active' : ''}>Story Management</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;