import React from "react";
import { useState } from "react";
import memeData from "../src/memeData"

const Meme = () => {
    const [memeImage, setMemeImage] = useState("")

    function getImage(){
        const memeArr = memeData.data.memes
        const randomNum = Math.floor(Math.random() * memeArr.length)
        setMemeImage(memeArr[randomNum].url)
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
            <img src={memeImage} className="meme--image" />
        </main>
     );
}
 
export default Meme;