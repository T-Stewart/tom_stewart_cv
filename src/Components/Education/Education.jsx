import React from "react"
import "./Education.css"
import Westminster from "./Schools/Westminster"
import Kingston from "./Schools/Kingston"
import Alevels from "./Schools/Alevels"
import Gcse from "./Schools/Gcse"

export default class Education extends React.Component{

    constructor(){
        super()
        this.state = {
        westminster: false,
        kingston: false,
        alevels: false,
        gcse: false
     }
    
    }

    westminsterClick = () => {
       this.setState({
           westminster: !this.state.westminster
       })
    }

    kingstonClick = () => {
       this.setState({
           kingston: !this.state.kingston
       })
    }

    alevelClick = () => {
       this.setState({
           alevels: !this.state.alevels
       })
    }

    gcseClick = () => {
       this.setState({
           gcse: !this.state.gcse
       })
    }

    render() {
        return(
            <div className="wrapper">
                <h3>Education</h3>
                <div >
                <button className="uni"  onClick={this.westminsterClick}>Westminster University: 2016-2017</button>
                {this.state.westminster ? <Westminster toggle={this.westminsterClick} /> : null}
                </div>
                <div className="show-card">
                <button className="uni" onClick={this.kingstonClick}>Kingston University: 2012-2015</button>
                {this.state.kingston ? <Kingston toggle={this.kingstonClick} /> : null}
                </div>
                 <div className="show-card">
                <button className="uni" onClick={this.alevelClick}>A Levels</button>
                {this.state.alevels ? <Alevels toggle={this.alevelClick} /> : null}
                </div>
                <div className="show-card">
                <button className="uni" onClick={this.gcseClick}>GCSE'S</button>
                {this.state.gcse ? <Gcse toggle={this.gcseClick} /> : null}
                </div>
            </div>
        )
    }
}