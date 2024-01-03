import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import { Route , Routes } from "react-router-dom";
import Intership from "./components/Intership";
import Work from "./components/Work";


function App() {
  return (
    <>
      <NavBar/>

      <Header/>
      <About/>
      <Experience/>
      <Work/>
    </>
  );
}

export default App;
