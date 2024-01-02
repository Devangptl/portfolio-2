import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import { Route , Routes } from "react-router-dom";
import Intership from "./components/Intership";


function App() {
  return (
    <>
      <NavBar/>

      <Header/>
      <About/>
      <Experience/>
      {/* <Routes>
        <Route path="/intership" element={<Intership/>}/>
        <Route path="/experience" element={<Experience/>}/>
      </Routes> */}
    </>
  );
}

export default App;
