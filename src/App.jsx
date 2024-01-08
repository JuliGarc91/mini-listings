import { Routes, Route } from "react-router-dom";
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import Footer from "./components/common/Footer";

const App = () => {
  return (
  <main>
    <Nav />
    <section>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </section>
    <Footer />
  </main>
  );
};

export default App;
