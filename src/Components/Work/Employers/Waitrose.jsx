import React, { Component } from 'react'
import "./Employers.css"


export default class Waitrose extends Component {
    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <h4>Role</h4>
                    <ul className="text" id="lists">
                       <li>Delivery Driver</li> 
                    </ul>
                    <h4>Key Skills</h4>
                    <ul className="text" id="lists">
                       <li>Calm decision making</li> 
                       <br/>
                       <li>Willingness to offer help to other sections of the shop and other team members</li>
                       <br/>
                       <li>Van driving</li>
                       <br/>
                       <li>Working in a strong team to make sure deliveries were made on time and without mistakes</li>
                    </ul>     
                </div>
            </div>
        );
    }
}