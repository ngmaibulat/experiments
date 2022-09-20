import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import {NgmTimeline, NgmButton, NgmButtonDropDown} from '../components';

function App()
{

  function onClick()
  {
    console.log("click");
  }

  function onMouseDown()
  {
    console.log("Mouse Down!");
  }

  const links = [

    {
      name: "Youtube",
      href: "https://youtube.com",
    },

    {
      name: "Vimeo",
      href: "https://vimeo.com",
    }

  ];

  return (
    <div className="App">

      <NgmButtonDropDown onClick={onClick}   onMouseDown={onMouseDown} links={links}>Drop Down Button</NgmButtonDropDown>
    
      
    </div>
  )
}

export default App
