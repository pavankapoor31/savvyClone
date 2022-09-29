import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Home from "./Home.js";
import "./stylesheet/main.css";
import "@fontsource/poppins";
import KnowMore from "./container/KnowMore/KnowMore";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="KnowMore" element={<KnowMore />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Header></Header>
    <Banner></Banner>
    <Banks></Banks>
    <Products></Products>
    <Customers></Customers> */}
      <Footer />
    </div>
  );
}

export default App;
