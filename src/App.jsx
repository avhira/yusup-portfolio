import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style/style.css';
import './style/responsive.css';
import './style/wave.css';
import Home from './pages';
import Projects from './pages/Projects';
import Profile from './pages/MyProfile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
