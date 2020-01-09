import React from 'react'
import './style.css'
import Dashboard from '../../Container/Dashboard'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

const Company2 = ({ comp, emp, loc }) => {
    
    return (
        <div className="company-wrap">
            <ul><li><Link to="/">Home</Link></li></ul>
            <h1>Company Name :{comp}</h1>
            <h2>No of Employee : {emp}</h2>
            <h3>Location : {loc}</h3>
        </div>
    )
}
export default Company2;