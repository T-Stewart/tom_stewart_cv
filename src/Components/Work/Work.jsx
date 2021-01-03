import React from "react"
import Boom from "./Employers/Boom"
import Waitrose from "./Employers/Waitrose"
import "./Work.css"

export default class Work extends React.Component{

     constructor(){
        super()
        this.state = {
        boom: false,
        waitrose: false,
     }
    
    }

    boomClick = () => {
       this.setState({
           boom: !this.state.boom
       })
    }

    waitroseClick = () => {
       this.setState({
           waitrose: !this.state.waitrose
       })
    }

    render() {
        return(
            <div>
                <h3>Work</h3>
                <div className="show-card">
                <button className="job" onClick={this.boomClick}>Boom Post: 2017-present</button>
                {this.state.boom ? <Boom toggle={this.boomClick} /> : null}
                </div>
                <div className="show-card">
                <button className="job" onClick={this.waitroseClick}>Waitrose: 2015-2016</button>
                {this.state.waitrose ? <Waitrose toggle={this.waitroseClick} /> : null}
                </div>
            </div>
        )
    }
}