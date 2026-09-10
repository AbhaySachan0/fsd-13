import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import cat from './images/aesthetic_deer.png'

function App() {
  const name = "abhay";
  const branch = "CSE";
  const roll = 25;
  const college = "ABES Engineering College";

  return (
    <div style={{border:"10px solid red", width:"400px", height:"350px"}}>
      <h2>Welcome to React Vite</h2>
      <h2>My name is <span style = {{color:'red'}}>{name}</span></h2>
      <h2>My branch is <span style = {{color:'red'}}>{branch}</span></h2>
      <h2>My roll no. is <span style = {{color:'red'}}>{roll}</span></h2>
      <h2>My college is <span style = {{color:'red'}}>{college}</span></h2>

      <img src={cat} height={100} width={200}></img>
    </div>
  )
}

export default App