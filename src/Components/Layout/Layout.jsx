import React from "react"
import "./Layout.css"
import Work from "../Work/Work"
import Education from "../Education/Education"
import Hobbies from "../Hobbies/Hobbies"

export default class Layout extends React.Component{

    render() {
        return(
            <div className="wrapper">
                <div className="about">About</div>
                <div className="info">
                    <div className="skills">Skills</div>
                    <div className="rest">
                        <div className="work"><Work/></div>
                        <div className="education"><Education/></div>
                        <div className="hobbies"><Hobbies/></div>
                    </div>
                </div>

            </div>
        )
    }

}