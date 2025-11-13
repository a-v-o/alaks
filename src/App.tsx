import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Shop />
      <About />
      <Contact />
    </div>
  );
}

export default App;
