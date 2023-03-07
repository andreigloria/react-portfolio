import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectGallery from "./components/projectGallery";
import Project from "./components/Project";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <ProjectGallery />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
