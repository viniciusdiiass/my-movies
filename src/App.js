import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/movieDetail";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./views/about";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
