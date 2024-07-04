import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Promos from "./components/Promos";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Widgets />
      <Promos />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
