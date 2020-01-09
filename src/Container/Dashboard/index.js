import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div>
            <p>Welcome to React Code</p>
            <ul>
                {/* <li><Link to="/">Home</Link></li> */}
                <li><Link to="/state">state</Link></li>
                <li><Link to="/props">props</Link></li>
                <li><Link to="/form">form</Link></li>
                <li><Link to="/usestate">usestate</Link></li>
                <li><Link to="/useeffect">useeffect</Link></li>
                <li><Link to="/getsnapshotbeforeupdate">getsnapshotbeforeupdate</Link></li>
                <li><Link to="/shouldcomponentupdate">shouldcomponentupdate</Link></li>
                <li><Link to="/Reducer">Reducer</Link></li>
                <li><Link to="/Custom">Custom Hook</Link></li>
                <li><Link to="/IF">C ounsition-If else</Link></li>
                <li><Link to="/redux">Redux example</Link></li>
                <li><Link to="/bulbadmin">Bulb admin apis</Link></li>

                

            </ul>
        </div>

    )
}
export default Dashboard