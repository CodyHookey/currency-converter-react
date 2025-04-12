import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
