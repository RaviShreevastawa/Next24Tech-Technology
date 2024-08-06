import { Component } from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import { Toaster } from "react-hot-toast";

class App extends Component{
  render(){
    return(
      <>
         <div>
          <Navbar />
          <Home />
          <About />
          <Portfolio/>
          <Experience/>
          <Contact/>
          <Footer/>
         </div>
         <Toaster />
      </>
    )
  }
}

export default App;