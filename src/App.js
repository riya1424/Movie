import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header";
// import React from "react";
import Footer from "./component/footer";
import Home from "./container/home";
import Login from "./container/login";
import Register from "./container/register";
import AddMovie from "./container/addMovie";
import ViewAll from "./container/viewAllMovies";
import SingleMovie from "./container/singleMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/add_movie" element={<AddMovie/>} />
          <Route path="/view_all" element={<ViewAll/>} />
          <Route path="/single_movie/:index" element={<SingleMovie/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
