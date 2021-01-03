import React from "react"
import "./Layout.css"
import Work from "../Work/Work"
import Education from "../Education/Education"
import Hobbies from "../Hobbies/Hobbies"
import Skills from "../Skills/Skills"
import About from "../About/About"
import Experience from "../Experience/Experience"

export default class Layout extends React.Component{

    render() {
        return(
            <div className="wrapper">
                <div className="about"><About/></div>
                <div className="info">
                    <div className="left-column">
                        <div className="experience"><Experience/></div>
                        
                    </div>
                    <div className="right-column">
                        <div className="work"><Work/></div>
                        <div className="education"><Education/></div>
                        <div className="second-row">
                            <div className="hobbies"><Skills/></div>
                            <div className="skills"><Hobbies/></div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}