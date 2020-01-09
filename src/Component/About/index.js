import React from 'react';
import Dashboard from '../../Container/Dashboard'
import {  Link } from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "02jan2020",
            name: "Abhijeet jha",
            clg: "MMU Mulana",
            course: "MCA"
        }
    }
    render() {
        return (
            <>
                <ul><li><Link to="/">Home</Link></li></ul>
                <h2>joing date : {this.state.date}</h2>
                <h2>Name: {this.state.name}</h2>
                <h3>College : {this.state.clg}</h3>
                <h4>Course : {this.state.course}</h4>
                
            </>
        )
    }
}

export default About; 