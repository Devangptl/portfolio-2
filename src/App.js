import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import OtherWork from "./components/OtherWork";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Aos from "aos";
import "aos/dist/aos.css"


function App() {

  useEffect(()=>{
    Aos.init({duration : 1000 })
  },[])

  return (
    <div  className="">
      <NavBar/>
      
      <Social/>
      <Header/>
      <About/>
      <Experience/>
      <Work/>
      <OtherWork/>
      <Contact/>
     

     
    </div>
  );
}

export default App;
