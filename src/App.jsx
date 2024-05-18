import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";


function App() {
  return (
    <div>
      <Navbar/>
    
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/" Component={SignUp} />
      

        {/* Manggil halaman yang lain */}
     
      </Routes>


      <Footer/>
    </div>
  );
}

export default App;
