import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pictures from "./pages/Pictures";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)}>
          <Route index element={(<Home />)} />
          <Route path="about" element={(<About />)} />
          <Route path="pictures" element={(<Pictures />)} />
          <Route path="contact" element={(<Contact />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);

