import React from "react"
import memesData from "../memesData"

export default function MainBody(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prev => {
            
            return{
                ...prev, image:url,

            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme( prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <div className = "main-body">
            <div className = "form">
                <input 
                    type="text" 
                    className ="form-inputs"
                    placeholder="Top text"
                    name = "topText"
                    value = {meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className ="form-inputs"
                    placeholder="Bottom text"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange={handleChange}
                />

                <button 
                className = "form-button"
                onClick={getMemeImage}
                >Get a new meme image 🖼️</button>
            </div>
            <div className = "meme">
                <img src = {meme.image} className = "meme-image" alt ="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}