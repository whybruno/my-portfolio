import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Knowledge from './components/Knowledge';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <Router basename={'/my-portfolio'}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="knowledge" element={<Knowledge />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
