import React from "react"
import "./Hobbies.css"

export default class Hobbies extends React.Component{

    render() {
        return(
            <div>
            <h3>Hobbies</h3>
            <ul className="hobbies-list">
                <li>Football: Both playing and watching</li>
                <li>Badminton</li>
                <li>Formula 1</li>
                <li>Running</li>
                <li>Reading</li>
                <li>listening to music</li>
                <li>Podcasting with a friend</li>
            </ul>
            </div>
        )
    }
}