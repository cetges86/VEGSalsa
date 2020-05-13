import React from 'react';
import './style.css';
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import About from "./Components/About";
import Assets from "./Components/Assets";
import Teams from "./Components/Teams";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
     <About />
      <Assets />
      <Teams />
      <Contact />
      <p id="back-top">
			<a href="#top"><i class="fa fa-angle-up"></i></a>
		</p>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
