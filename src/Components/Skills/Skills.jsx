import React from 'react'
import './Skills.css'


export default class Skills extends React.Component{

    render() {
        return(
            <div className="skills-list">
                <h3 className="skill-title">Skills</h3>
                <h5 className="skill-heading">Developer Skills</h5>
                <ul className="skill-text">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React JS</li>
                    <li>Express</li>
                    <li>Mongo DB</li>
                    <li>Postman</li>
                    <li>Ruby</li>   
                </ul>
                <h5 className="skill-heading">Other Skills</h5>
                <ul className="skill-text">
                    <li>Pro-Tools</li>
                    <li>Logic Pro</li>
                    <li>Spanish</li>
                    <li>Wwise</li>
                </ul>
            </div>
        )
    }
}