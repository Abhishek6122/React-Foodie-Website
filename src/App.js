import React, { createContext } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import About from "./components/About/About";
// import Blog from "./components/Blog/Blog";
// import Menu from "./components/Menu/Menu";
import MenuMain from "./components/Menu/MenuMain";
import MenuAll from "./components/Menu/MenuAll";
import MenuPizza from "./components/Menu/MenuPizza";
import MenuBurgers from "./components/Menu/MenuBurgers";
import MenuDrinks from "./components/Menu/MenuDrinks";
import Offers from "./components/Offers/Offers";
import ErrorPage from "./components/ErrorPage/ErrorPage";

export let ContextData = createContext();

function App() {
  return (
    <>
      <ContextData.Provider value='data'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<MenuMain />}>
          <Route path="all" element={<MenuAll />}></Route>
          <Route path="pizza" element={<MenuPizza />}></Route>
          <Route path="burgers" element={<MenuBurgers />}></Route>
          <Route path="drinks" element={<MenuDrinks />}></Route>
        </Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element = {<ErrorPage/>} />
      </Routes>
      <Footer />
      </ContextData.Provider>
    </>
  );
}

export default App;
