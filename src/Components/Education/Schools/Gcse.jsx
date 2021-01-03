import React, { Component } from 'react'
import "./Schools.css"


export default class Gcse extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <h4>Gcse's</h4>
                    <ul className="text" id="lists">
                        <li>Maths: B</li>
                        <li>English: B</li>
                        <li>English Literature: B</li>
                        <li>Science: B</li>
                        <li>Spanish: B</li>
                        <li>History: C</li>
                        <li>Music: A</li>
                        <li>IMedia: Pass</li>
                    </ul> 
                </div>
            </div>
        );
    }
}