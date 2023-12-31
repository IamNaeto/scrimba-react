import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memes))
    }, [])

    function getImage(){
        const randomNum = Math.floor(Math.random() * allMemeImage.length)
        const url = allMemeImage[randomNum].url
        setMeme(preMeme =>{
            return{
                ...preMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    console.log(meme.name)

    return ( 
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
     );
}
 
export default Meme;