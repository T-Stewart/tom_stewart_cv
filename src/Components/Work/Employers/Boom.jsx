import React, { Component } from 'react'
import "./Employers.css"


export default class Boom extends Component {
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
                       <li>Foley Editor/ Junior Sound Effects Editor: 2018-present</li> 
                       <br/>
                       <li>Runner: 2017-2018</li>
                    </ul>
                    <h4>Key Skills</h4>
                    <ul className="text" id="lists">
                       <li>High quality professional audio editing</li> 
                       <br/>
                       <li>Attention to detail</li>
                       <br/>
                       <li>Strong communication and listening skills for implementing and adapting to client requests</li>
                       <br/>
                       <li>Working in award winning team striving to deliver excellence</li>
                       <br/>
                       <li>Fast learning</li>
                       <br/>
                       <li>Working in high pressure enviroment with strict deadlines </li> 
                    </ul>
                    <h4>Notable Achievments</h4>
                    <ul className="text" id="lists">
                        <li>2020 Primetime Emmy Nomination: Outstanding Sound Editing for a Comedy or Drama Series - 'The Crown' Season 3</li>
                        <br/>
                        <li>2020 BAFTA TV Craft Nomination: Sound-Fiction - 'A Christmas Carol'</li>
                        <br/>
                        <li>2020 MPSE Winner: Outstanding Achievement in Sound Editing - 'Chernobyl' </li>
                        <br/>
                        <li>2020 MPSE Nomination: Outstanding Achievement in Sound Editing - 'Peaky Blinders' </li>
                        <br/>
                        <li>2020 MPSE Nomination: Outstanding Achievement in Sound Editing - 'Hanna' </li>
                    </ul>

                    
                </div>
            </div>
        );
    }
}