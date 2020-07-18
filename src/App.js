import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Banner } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
