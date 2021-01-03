import React, { Component } from 'react'
import "./Schools.css"


export default class Alevels extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <h4>Achieved A levels in</h4>
                    <ul className="text" id="lists">
                        <li>Music Technology</li>
                        <li>Psychology</li>
                        <li>History</li>
                    </ul> 
                </div>
            </div>
        );
    }
}