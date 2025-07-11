import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/custome/Footer';
import Header from './components/custome/Header';
import MaxWidthWrapperNavbar from './components/custome/MaxWidthWrapperNavbar';

import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import { LangProvider } from './contexts/LangContext';
import { ABOUT_URL, HOME_URL, PROJECTS_URL } from './constants/paths';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <LangProvider>

      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={ABOUT_URL} element={<About />} />
        <Route path={PROJECTS_URL} element={<Projects />} />
      </Routes>
      <Toaster position="top-right" richColors />
    </LangProvider>
  );
}

export default App;
