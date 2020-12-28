import React from "react"
import "./Education.css"

export default class Education extends React.Component{

    constructor(){
        super()
        this.state = {
        buttonClick: false
     }
     this.showWestminster = this.showWestminster.bind(this)
    }
    showWestminster = () => {
        console.log("hey")

        if(this.state.buttonClick === true){
        return(
            <div className="show-westminster">
                Course: Audio Production
                Grade Achieved: 2:1
                Key skills
            </div>
        )
        }
    }

    render() {
        return(
            <div className="wrapper">
                <h5>Education</h5>
                <input className="uni" type="submit" onClick={this.showWestminster} value="University of Westminster: 2016-2017"/>
                <input className="uni" type="submit" value="Kingston University: 2012-2015"/>
            </div>
        )
    }
}