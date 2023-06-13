import "./App.css";
import Footer from "./components/Footer/Footer";
import Generate from "./components/Generate/Generate";
import Hero from "./components/Hero/Hero";
import Teams from "./components/Teams/Teams";
function App() {
  return (
    <div className="App">
      <Hero />
      <Generate />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
