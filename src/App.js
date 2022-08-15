import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import MoviesPage from './pages/MoviesPage';
import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';
import CharactersPage from './pages/CharactersPage';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mainWrapper">
      <div className="mainNav">
        <MainNavigation />
      </div>
      <div className="contentWrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
        </Routes>
      </div>
      <div className="mainFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
