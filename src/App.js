import React from "react";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Route } from "react-router-dom"
import AboutUs from "./Containers/AboutUs";
import ContactUs from "./Containers/ContactUs";
import Films from "./Containers/Films";
import News from "./Containers/News";
import Services from "./Containers/Services";
function App() {
  return (
    <div style={{ height: "100%" }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/news" component={News} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/contact_us" component={ContactUs} />
      </Router>
    </div>
  );
}

export default App;
