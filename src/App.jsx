import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
