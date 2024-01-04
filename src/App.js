import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import OtherWork from "./components/OtherWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className=" ">
      <NavBar/>

      <Header/>
      <About/>
      <Experience/>
      <Work/>
      <OtherWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
