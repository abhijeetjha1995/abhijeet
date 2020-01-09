import React, {Component} from "react";
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Marks from './Marks'


export default class Student extends Component{
    constructor(props){
        super(props);
        this.state= {
            roll : 101
        }
    }
    handleClick = ()=> {
        console.log("Button clicked");
        this.setState({ roll: 102});
        this.setState({ roll: this.state.roll + 2 } )
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('nextState', nextState);
        console.log('nextProps', nextProps);

        if (this.state.roll<110){
            console.log("Should Component Update");
            console.log(nextProps, nextState);
            return true;
        }
        console.log(nextProps, nextState)
        return false;
    }

    render(){
        return(
            <div>
            <Marks roll={this.state.roll} />
            {/* <h1>{this.state.roll}</h1> */}
            <button onClick={this.handleClick}>Change</button>
            <ul><li><Link to="/">Home</Link></li></ul>
            
            
            </div>
        )
    }
}