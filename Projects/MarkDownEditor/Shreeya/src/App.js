import './App.css';
import logo from './logo.svg';
// import DarkMode from "./darkMode.js";
import React, { useEffect } from "react";

import Markdownreact from "./markdown/markdownreact.js";
import {createContext,useState} from "react";
import ReactSwitch from "react-switch";

export const ThemeContext= createContext(null);

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [theme, setTheme]= useState("dark");

  const toggleTheme=()=>{
    setTheme((curr)=>(curr == "light"?"dark" : "light"));
  };

  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className='App' id={theme}>    
    <div class="container">
    <div class="typed-out">Shreeya Markdown</div>
    </div>  
      
      <Markdownreact />
      <div class="switch">
      {/* <div class="temp"> */}
      <label>{theme==="light" ?"Light Mode":"Dark Mode"}</label>
      {/* </div> */}
      <ReactSwitch onChange={toggleTheme} checked={theme=="dark"}/>
      </div>
    </div>
   </ThemeContext.Provider>
    
    
   
    /* <DarkMode />, */
   
  );
}

export default App;
