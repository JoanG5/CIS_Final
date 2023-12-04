import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NewGames from "./NewGames";
import OldGames from "./OldGames";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Signup from "./Signup";
import Login from "./Login";
import Cart from "./Cart";

function AppRouter() {
  return (
    <>
      <Navbar
        login={false}
      />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newgames" element={<NewGames/>}/> 
        <Route path="/oldgames" element={<OldGames/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="*" element={"404 component"}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default AppRouter
