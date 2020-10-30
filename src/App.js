import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Students from "./components/Students";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import About from "./components/About";




class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Navbar />
     <Home />
     <About />
     <Students />
     <ContactForm />
     <Footer />

    </div>  
    )
  }
}



export default App;
