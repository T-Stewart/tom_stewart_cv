import React, { Component } from 'react'
import "./Schools.css"


export default class Westminster extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <h4>Course</h4>
                    <p className="text">MA(Hons) Audio Production</p>
                    <h4>Grade Achieved</h4>
                    <p className="text">2:1</p>
                    <h4>Key Skills</h4>
                    <ul className="text" id="lists">
                        <li>Music Production</li>
                        <br/>
                        <li>Remix Production</li>
                        <br/>
                        <li>Surround and Stereo Mixing</li>
                        <br/>
                        <li>Composition and Audio editing for film and Animation</li>
                        <br/>
                        <li>Sound for computer games and implentation using wwise</li>
                        <br/>
                        <li>Creating App prototypes using Adobe XD and illustrator</li>
                        <br/>
                    </ul>

                    
                </div>
            </div>
        );
    }
}