import React from 'react'
import "./Experience.css"



export default class Experience extends React.Component{

    render() {
        return(
            <div>
                <h3>Experience</h3>

                <a className="link" target="blank" href="https://github.com/T-Stewart/Guano">Guano</a>
                <p>MERN Stack CRUD app to train people for Twitter</p>
                <br/>
                <a className="link" target="blank" href="https://github.com/T-Stewart/miso">Miso</a>
                <p>A website to sell my brother's cat</p>
                <br/>
                <a className="link" target="blank" href="https://github.com/T-Stewart/JS-Card-Game">Card Game</a>
                <p>A playing card game</p>
                <br/>
                <a className="link" target="blank" href="https://semi-tonedpodcast.netlify.app/">Semi-Toned</a>
                <p>A website for my friend's and my podcast</p>
            </div>
        )
    }
}