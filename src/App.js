import React from 'react'
import Banks from './container/Banks/Banks';
import Banner from './container/Banner/Banner';
import Customers from './container/Customers/Customers';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Products from './container/Products/Products';
import "./stylesheet/main.css";
import "@fontsource/poppins"
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Banner></Banner>
    <Banks></Banks>
    <Products></Products>
    <Customers></Customers>
    <Footer></Footer>
    </div>
  );
}

export default App;
