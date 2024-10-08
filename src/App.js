import React, { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./context/ThemeContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? lightTheme : darkTheme;
  // console.log(theme);
  return (
    <div>
      <ThemeProvider theme={mode}>
        <GlobalStyles />
        <Router />
        <MusicPlayer />
      </ThemeProvider>
    </div>
  );
}

export default App;
