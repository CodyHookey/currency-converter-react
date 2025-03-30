import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
