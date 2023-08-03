import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Challenge from "./Components/Challenge/Challenge";
import Problem1 from "./Components/Problem1/Problem1";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Challenge />
      <Problem1 />
      <Footer />
    </>
  );
}

export default App;
