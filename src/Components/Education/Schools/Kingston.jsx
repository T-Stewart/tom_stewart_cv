import React, { Component } from 'react'
import "./Schools.css"


export default class Kingston extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <h4>Course</h4>
                    <p className="text">BMus(Hons) Creative Music Technologies</p>
                    <h4>Grade Achieved</h4>
                    <p className="text">1st</p>
                    <h4>Key Skills</h4>
                    <ul className="text" id="lists">
                       <li>Music Production</li> 
                       <br/>
                       <li>Creative Composition</li>
                       <br/>
                       <li>Team Composition and live remixing</li>
                       <br/>
                       <li>Recording and Editing sound for Image</li> 
                    </ul>

                    
                </div>
            </div>
        );
    }
}