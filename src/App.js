import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import About from "./pages/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Home></Home>

      <Catalog></Catalog>

      <About></About>

      <Footer></Footer>
    </div>
  );
}

export default App;

/**
 *
 * Create Home page
 *
 * - create Home jsx and css in pages
 * - inside jsx create the Home component and export
 * - Home component return a div a H2
 *
 * - in app.js
 * - import and render <Home> above Catalog
 */
