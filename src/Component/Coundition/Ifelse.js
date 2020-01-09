import React from 'react'
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class Ifelse extends React.Component{
    render(){
        const Nom = 21;

        if(Nom % 2 == 0){
            return(<>
            <ul><li><Link to="/">Home</Link></li></ul>
            <h1>The Number is Even</h1>
            </>)

            }
        else {
           return (<>
            <ul><li><Link to="/">Home</Link></li></ul>
            <h1>The Number is odd</h1>
            </>)
        }
    }
}
export default Ifelse
    
