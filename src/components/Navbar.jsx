import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  return (
    <header className="navbar">
      <form className="logo-parent">
        <img className="logo-icon" alt="logo" src="Logo.svg" onClick={onLogoClick}/>

        
        <div className="button-parent">
          <button className="button" onClick={onButton1Click}>
            <div className="button1">Masuk</div>
          </button>
          <button className="button2" onClick={onButton2Click}>
            <div className="button3">Daftar</div>
          </button>
        </div>
      </form>
    </header>
  )
};

export default Navbar;