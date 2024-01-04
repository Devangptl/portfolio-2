import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import OtherWork from "./components/OtherWork";


function App() {
  return (
    <>
      <NavBar/>

      <Header/>
      <About/>
      <Experience/>
      <Work/>
      <OtherWork/>
    </>
  );
}

export default App;
