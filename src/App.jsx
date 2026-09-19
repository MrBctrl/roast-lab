import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import RoastLab from "./sections/RoastLab";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <RoastLab />
      </main>
    </div>
  );
}

export default App;