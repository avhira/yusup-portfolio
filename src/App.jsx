import './style/style.css';
import './style/responsive.css';
import Home from './component';
import Project from './component/project';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/linktree" />} />
          <Route path="/linktree" element={<Home />} />
          <Route path="/linktree/project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
