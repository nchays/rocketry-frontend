import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import History from './pages/history/history';
// import Members from './pages/members/members';
// import Subteams from './pages/subteams/subteams';
import Projects from './pages/projects/projects';
import Trinity from './pages/trinity/trinity';
import Waymaker from './pages/waymaker/waymaker';
import Genesis from './pages/genesis/genesis';
import Media from './pages/media/media';
import Live from './pages/live/live';
import Gallery from './pages/gallery/gallery';
import Sponsors from './pages/sponsors/sponsors';
import Contact from './pages/contact/contact';
import Donate from './pages/donation/donate';
import Footer from './components/footer';

// Added for individual project
import MembersList from './components/MembersList';
import MemberDetail from './components/MemberDetail';
import TeamsList from './components/TeamsList';
import TeamDetail from './components/TeamDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/members" element={<MembersList />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/subteams" element={<TeamsList />} />
        <Route path="/subteams/:id" element={<TeamDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/trinity" element={<Trinity />} />
        <Route path="/waymaker" element={<Waymaker />} />
        <Route path="/genesis" element={<Genesis />} />
        <Route path="/media" element={<Media />} />
        <Route path="/live" element={<Live />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;