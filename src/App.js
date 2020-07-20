import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Banner, Services, About } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <About />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
