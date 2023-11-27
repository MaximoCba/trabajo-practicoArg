import { Clientes } from "./components/Clientes";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Works } from "./components/Works";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clientes />
      <Works />
      <Reviews />
      <Services />
    </div>
  );
}

export default App;
