import React from 'react'
import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'



function ICard({data}) {
    return (
        <div style={{border:"10px solid red", width:"400px", height:"400px"}}>
            <h2>Welcome to React Vite</h2>
            <h2>My name is <span style = {{color:'red'}}>{data.name}</span></h2>
            <h2>My branch is <span style = {{color:'red'}}>{data.branch}</span></h2>
            <h2>My roll no. is <span style = {{color:'red'}}>{data.roll}</span></h2>
            <div style={{border: "2px solid blue"}}>

                <h2>My college is <span style = {{color:'red'}}>{data.college}</span></h2>

                <img src={data.pic} height={100} width={200}></img>

            </div>
        </div>      
    )
}

export default ICard