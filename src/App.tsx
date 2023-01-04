import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Calculator from "./Container/Calculator";
import Player from "./Container/Player";
import ShopperList from "./Container/ShopperList";

function App() {
  return (
    <Router>
      <div className="App flex h-screen">
      <SideBar />
        <div className="wrapper flex-1 flex-col bg-[#BFE9FF]">
          <div className="grid place-items-center">
          {/* <Header /> */}
          <Routes>
            <Route index path="/"></Route>
            <Route path="/calculator" element={<Calculator />}></Route>
            <Route path="/player" element={<Player />}></Route>
            <Route path="/shopperlist" element={<ShopperList />}></Route>
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
