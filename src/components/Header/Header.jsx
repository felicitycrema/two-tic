import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../context/SfxContext";
function Header() { 
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSfx, clickSfx } = useContext(SfxContext);

  const navigate = useNavigate();

  return (  
    <HeaderWrapper>
      <Logo className="logo" 
      onClick={() => {
        navigate("/");
        clickSfx();
        }} 
        onMouseEnter={() =>hoverSfx()}
      />
     
      <span 
      onClick={() => {
        toggleTheme()
        clickSfx();
        }} 
        onMouseEnter={() =>hoverSfx()}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    
    </HeaderWrapper>
  );
}

export default Header;
