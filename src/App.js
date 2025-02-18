import "./variables.scss";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HeroText from "./components/HeroText/HeroText";

function App() {
  return (
    <div className="App">
      <section id="hero-section">
        <NavBar />
        <HeroText />
      </section>
    </div>
  );
}

export default App;
