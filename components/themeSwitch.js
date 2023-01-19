import { useState } from "react";
import DarkTheme  from "./darkTheme";

function ThemeSwitch() {

    const [darkMode, setDarkMode] = useState(false);
    const text = darkMode ? 'Dark Mode' : 'Light Mode';
console.log('themeswitch');
    return( 
        <>
        <button onClick={() => setDarkMode(!darkMode)} > {text}</button>
        <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme/>}
        </>
    )
}

export default ThemeSwitch;