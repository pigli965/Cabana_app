import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        document.documentElement.style.setProperty('--table-color', '#1A2602'); // replace '#newDarkColor' with the desired dark color
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        document.documentElement.style.setProperty('--table-color', '#fff'); // replace '#newLightColor' with the desired light color
    }
    
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
