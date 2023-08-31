import React from "react";
import { useState } from "react";
import memeData from "../src/memeData"

const Meme = () => {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/30b1gx.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState(memeData)

    function getImage(){
        const memeArr = allMemeImage.data.memes
        const randomNum = Math.floor(Math.random() * memeArr.length)
        const url = memeArr[randomNum].url
        setMeme(preMeme =>{
            return{
                ...preMeme,
                randomImage: url
            }
        })
    }

    return ( 
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
     );
}
 
export default Meme;