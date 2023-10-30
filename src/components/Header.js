import React from "react"
import trollface from "./TrollFace.png"

export default function Header(){
    return(
        <nav className = "nav-bar">
            <img src = {trollface} className = "nav-logo" alt = "Logo"/>
            <h1 className = "nav-title">Meme Generator</h1>
            <h3 className = "nav-text">React Course - Project 3</h3>
        </nav>
    )
}