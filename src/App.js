import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import PlanetsPage from "./pages/PlanetsPage";
import CharactersPage from "./pages/CharactersPage";

import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
